require("dotenv").config();

const express = require("express");
const cors = require("cors");
const mysql = require("mysql2/promise");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const app = express();

const PORT = process.env.PORT || 5000;

const JWT_SECRET =
  process.env.JWT_SECRET || "safetour-development-secret";

/* =========================================================
   MIDDLEWARE
========================================================= */

app.use(
  cors({
    origin: "http://localhost:5173",
    credentials: true,
  })
);

app.use(express.json());

app.use(express.urlencoded({ extended: true }));

/* =========================================================
   MYSQL CONNECTION POOL
========================================================= */

const db = mysql.createPool({
  host: process.env.DB_HOST || "localhost",
  user: process.env.DB_USER || "root",
  password: process.env.DB_PASSWORD || "",
  database: process.env.DB_NAME || "safetour_ai",

  waitForConnections: true,

  connectionLimit: 10,

  queueLimit: 0,
});

/* =========================================================
   TEST DATABASE CONNECTION
========================================================= */

const testDatabaseConnection = async () => {
  try {
    const connection = await db.getConnection();

    console.log("✅ MySQL connected successfully");

    connection.release();

    return true;
  } catch (error) {
    console.error("❌ MySQL connection failed");
    console.error(error.message);

    return false;
  }
};

/* =========================================================
   BASIC SERVER ROUTE
========================================================= */

app.get("/", (req, res) => {
  res.status(200).json({
    success: true,
    message: "SafeTour AI Backend is running",
    database: "safetour_ai",
    version: "1.0.0",
  });
});

/* =========================================================
   DATABASE HEALTH ROUTE
========================================================= */

app.get("/api/health", async (req, res) => {
  try {
    const [rows] = await db.query(
      "SELECT 1 AS database_connected"
    );

    res.status(200).json({
      success: true,
      message:
        "SafeTour AI backend and database are connected",
      database: rows[0].database_connected === 1,
    });
  } catch (error) {
    console.error(
      "Database health check error:",
      error.message
    );

    res.status(500).json({
      success: false,
      message: "Database connection failed",
      database: false,
    });
  }
});

/* =========================================================
   ADMIN LOGIN
========================================================= */

/*
   POST
   /api/auth/admin/login

   Request body:

   {
     "email": "admin@example.com",
     "password": "your-password"
   }

   Successful response:

   {
     "success": true,
     "message": "Admin login successful",
     "token": "...",
     "admin": {
        "id": 1,
        "name": "...",
        "email": "...",
        "role": "admin"
     }
   }
*/

app.post("/api/auth/admin/login", async (req, res) => {
  try {
    const { email, password } = req.body;

    /* =====================================================
       VALIDATE REQUEST
    ===================================================== */

    if (!email || !password) {
      return res.status(400).json({
        success: false,
        message: "Email and password are required.",
      });
    }

    const normalizedEmail = email
      .trim()
      .toLowerCase();

    /* =====================================================
       FIND ADMIN
    ===================================================== */

    const [admins] = await db.execute(
      `
      SELECT
        id,
        name,
        email,
        password,
        role,
        status
      FROM admins
      WHERE email = ?
      LIMIT 1
      `,
      [normalizedEmail]
    );

    /* =====================================================
       ADMIN NOT FOUND
    ===================================================== */

    if (admins.length === 0) {
      return res.status(401).json({
        success: false,
        message: "Invalid email or password.",
      });
    }

    const admin = admins[0];

    /* =====================================================
       CHECK ACCOUNT STATUS
    ===================================================== */

    if (admin.status !== "active") {
      return res.status(403).json({
        success: false,
        message:
          "Your administrator account is inactive. Please contact the system administrator.",
      });
    }

    /* =====================================================
       VERIFY PASSWORD
    ===================================================== */

    const passwordMatches = await bcrypt.compare(
      password,
      admin.password
    );

    if (!passwordMatches) {
      return res.status(401).json({
        success: false,
        message: "Invalid email or password.",
      });
    }

    /* =====================================================
       CREATE JWT
    ===================================================== */

    const token = jwt.sign(
      {
        id: admin.id,
        email: admin.email,
        role: admin.role,
        type: "admin",
      },
      JWT_SECRET,
      {
        expiresIn: "8h",
      }
    );

    /* =====================================================
       REMOVE PASSWORD FROM RESPONSE
    ===================================================== */

    const adminResponse = {
      id: admin.id,
      name: admin.name,
      email: admin.email,
      role: admin.role,
      status: admin.status,
    };

    /* =====================================================
       SUCCESS RESPONSE
    ===================================================== */

    return res.status(200).json({
      success: true,
      message: "Admin login successful.",
      token,
      admin: adminResponse,
    });
  } catch (error) {
    console.error(
      "Admin login error:",
      error.message
    );

    return res.status(500).json({
      success: false,
      message:
        "Unable to process admin login right now.",
    });
  }
});

/* =========================================================
   TOURIST REGISTRATION
========================================================= */

/*
   POST
   /api/auth/register

   Request body:

   {
     "fullName": "Rohit Sharma",
     "email": "rohit@example.com",
     "phone": "+91 9876543210",
     "country": "India",
     "password": "Rohit@45"
   }

   This route creates a tourist account.

   Password is NEVER stored as plain text.
   It is converted to a bcrypt hash before insertion.
*/

app.post("/api/auth/register", async (req, res) => {
  try {
    const {
      fullName,
      email,
      phone,
      country,
      password,
    } = req.body;

    /* =====================================================
       VALIDATE REQUIRED FIELDS
    ===================================================== */

    if (
      !fullName ||
      !email ||
      !phone ||
      !country ||
      !password
    ) {
      return res.status(400).json({
        success: false,
        message:
          "Full name, email, phone, country and password are required.",
      });
    }

    /* =====================================================
       CLEAN INPUT
    ===================================================== */

    const normalizedName = fullName.trim();

    const normalizedEmail = email
      .trim()
      .toLowerCase();

    const normalizedPhone = phone.trim();

    const normalizedCountry = country.trim();

    /* =====================================================
       BASIC VALIDATION
    ===================================================== */

    if (normalizedName.length < 2) {
      return res.status(400).json({
        success: false,
        message: "Please enter a valid full name.",
      });
    }

    if (!normalizedEmail.includes("@")) {
      return res.status(400).json({
        success: false,
        message: "Please enter a valid email address.",
      });
    }

    if (password.length < 8) {
      return res.status(400).json({
        success: false,
        message:
          "Password must contain at least 8 characters.",
      });
    }

    /* =====================================================
       CHECK EMAIL ALREADY EXISTS
    ===================================================== */

    const [existingTourists] = await db.execute(
      `
      SELECT
        id,
        email
      FROM tourists
      WHERE email = ?
      LIMIT 1
      `,
      [normalizedEmail]
    );

    if (existingTourists.length > 0) {
      return res.status(409).json({
        success: false,
        message:
          "An account with this email already exists.",
      });
    }

    /* =====================================================
       HASH PASSWORD
    ===================================================== */

    const passwordHash = await bcrypt.hash(
      password,
      12
    );

    /* =====================================================
       CREATE TOURIST
    ===================================================== */

    const [result] = await db.execute(
      `
      INSERT INTO tourists
      (
        full_name,
        email,
        password_hash,
        phone,
        country,
        status,
        safety_status
      )
      VALUES (?, ?, ?, ?, ?, 'active', 'safe')
      `,
      [
        normalizedName,
        normalizedEmail,
        passwordHash,
        normalizedPhone,
        normalizedCountry,
      ]
    );

    /* =====================================================
       SUCCESS RESPONSE
    ===================================================== */

    return res.status(201).json({
      success: true,
      message:
        "Tourist account created successfully.",
      tourist: {
        id: result.insertId,
        full_name: normalizedName,
        email: normalizedEmail,
        phone: normalizedPhone,
        country: normalizedCountry,
        status: "active",
        safety_status: "safe",
      },
    });
  } catch (error) {
    console.error(
      "Tourist registration error:",
      error.message
    );

    /* =====================================================
       HANDLE DUPLICATE EMAIL SAFELY
    ===================================================== */

    if (error.code === "ER_DUP_ENTRY") {
      return res.status(409).json({
        success: false,
        message:
          "An account with this email already exists.",
      });
    }

    /* =====================================================
       GENERAL SERVER ERROR
    ===================================================== */

    return res.status(500).json({
      success: false,
      message:
        "Unable to create tourist account right now.",
    });
  }
});

/* =========================================================
   JWT AUTHENTICATION MIDDLEWARE
========================================================= */

const authenticateAdmin = (req, res, next) => {
  try {
    const authorization =
      req.headers.authorization;

    /* =====================================================
       CHECK AUTHORIZATION HEADER
    ===================================================== */

    if (!authorization) {
      return res.status(401).json({
        success: false,
        message:
          "Authentication token is required.",
      });
    }

    /* =====================================================
       CHECK BEARER FORMAT
    ===================================================== */

    if (!authorization.startsWith("Bearer ")) {
      return res.status(401).json({
        success: false,
        message:
          "Invalid authentication format.",
      });
    }

    /* =====================================================
       EXTRACT TOKEN
    ===================================================== */

    const token = authorization.substring(7);

    /* =====================================================
       VERIFY JWT
    ===================================================== */

    const decoded = jwt.verify(
      token,
      JWT_SECRET
    );

    /* =====================================================
       CHECK ADMIN TYPE
    ===================================================== */

    if (decoded.type !== "admin") {
      return res.status(403).json({
        success: false,
        message: "Admin access required.",
      });
    }

    /* =====================================================
       STORE ADMIN INFORMATION
    ===================================================== */

    req.admin = decoded;

    next();
  } catch (error) {
    console.error(
      "Authentication error:",
      error.message
    );

    return res.status(401).json({
      success: false,
      message:
        "Your session is invalid or has expired.",
    });
  }
};

/* =========================================================
   VERIFY ADMIN SESSION
========================================================= */

/*
   GET
   /api/auth/admin/me

   Requires:

   Authorization: Bearer <token>
*/

app.get(
  "/api/auth/admin/me",
  authenticateAdmin,
  async (req, res) => {
    try {
      const [admins] = await db.execute(
        `
        SELECT
          id,
          name,
          email,
          role,
          status,
          created_at
        FROM admins
        WHERE id = ?
        LIMIT 1
        `,
        [req.admin.id]
      );

      /* ===================================================
         ADMIN NOT FOUND
      =================================================== */

      if (admins.length === 0) {
        return res.status(404).json({
          success: false,
          message: "Admin account not found.",
        });
      }

      const admin = admins[0];

      /* ===================================================
         CHECK ADMIN STATUS
      =================================================== */

      if (admin.status !== "active") {
        return res.status(403).json({
          success: false,
          message:
            "Admin account is inactive.",
        });
      }

      /* ===================================================
         SUCCESS
      =================================================== */

      return res.status(200).json({
        success: true,
        admin,
      });
    } catch (error) {
      console.error(
        "Admin session verification error:",
        error.message
      );

      return res.status(500).json({
        success: false,
        message:
          "Unable to verify admin session.",
      });
    }
  }
);

/* =========================================================
   PROTECTED ADMIN TEST ROUTE
========================================================= */

/*
   This route is only for testing authentication.

   Later, real protected routes such as:

   /api/tourists
   /api/geofences
   /api/sos
   /api/incidents
   /api/reports

   will use the same middleware.
*/

app.get(
  "/api/admin/protected-test",
  authenticateAdmin,
  (req, res) => {
    res.status(200).json({
      success: true,
      message:
        "Admin authentication is working correctly.",
      admin: req.admin,
    });
  }
);

/* =========================================================
   404 ROUTE
========================================================= */

app.use((req, res) => {
  res.status(404).json({
    success: false,
    message: "API route not found.",
    path: req.originalUrl,
  });
});

/* =========================================================
   GLOBAL ERROR HANDLER
========================================================= */

app.use((error, req, res, next) => {
  console.error(
    "Unhandled server error:",
    error
  );

  res.status(500).json({
    success: false,
    message: "Internal server error.",
  });
});

/* =========================================================
   START SERVER
========================================================= */

const startServer = async () => {
  const databaseConnected =
    await testDatabaseConnection();

  if (!databaseConnected) {
    console.error("");

    console.error(
      "❌ Server startup stopped because MySQL is unavailable."
    );

    console.error(
      "Check your .env database credentials."
    );

    process.exit(1);
  }

  app.listen(PORT, () => {
    console.log("");

    console.log(
      "======================================"
    );

    console.log(
      "      SafeTour AI Backend Server"
    );

    console.log(
      "======================================"
    );

    console.log(
      `🚀 Server running on port ${PORT}`
    );

    console.log(
      `🌐 http://localhost:${PORT}`
    );

    console.log(
      `❤️  Health: http://localhost:${PORT}/api/health`
    );

    console.log(
      `🔐 Admin Login: POST http://localhost:${PORT}/api/auth/admin/login`
    );

    console.log(
      `👤 Tourist Register: POST http://localhost:${PORT}/api/auth/register`
    );

    console.log(
      "======================================"
    );

    console.log("");
  });
};

startServer();