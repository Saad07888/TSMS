require("dotenv").config();

const mysql = require("mysql2/promise");
const bcrypt = require("bcryptjs");
const readline = require("readline");

/* =========================================================
   DATABASE CONNECTION
========================================================= */

const db = mysql.createPool({
  host: process.env.DB_HOST || "localhost",
  user: process.env.DB_USER || "root",
  password: process.env.DB_PASSWORD || "",
  database: process.env.DB_NAME || "safetour_ai",

  waitForConnections: true,
  connectionLimit: 5,
  queueLimit: 0,
});

/* =========================================================
   TERMINAL INPUT
========================================================= */

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

/* =========================================================
   QUESTION HELPER
========================================================= */

const question = (text) => {
  return new Promise((resolve) => {
    rl.question(text, (answer) => {
      resolve(answer.trim());
    });
  });
};

/* =========================================================
   PASSWORD INPUT
========================================================= */

const hiddenQuestion = (text) => {
  return new Promise((resolve) => {
    process.stdout.write(text);

    let password = "";

    const onData = (character) => {
      character = character.toString();

      if (character === "\n" || character === "\r") {
        process.stdin.setRawMode(false);
        process.stdin.removeListener("data", onData);

        process.stdout.write("\n");

        resolve(password.trim());
        return;
      }

      if (character === "\u0003") {
        process.stdout.write("\n");

        process.stdin.setRawMode(false);
        process.stdin.removeListener("data", onData);

        process.exit(0);
      }

      if (character === "\u007f") {
        password = password.slice(0, -1);
        return;
      }

      password += character;
    };

    process.stdin.setRawMode(true);
    process.stdin.resume();
    process.stdin.on("data", onData);
  });
};

/* =========================================================
   CREATE ADMIN
========================================================= */

const createAdmin = async () => {
  console.log("");
  console.log("==============================================");
  console.log("          SafeTour AI Admin Setup");
  console.log("==============================================");
  console.log("");
  console.log("Create the first administrator account.");
  console.log("The password will be securely hashed with bcrypt.");
  console.log("");

  try {
    /* =====================================================
       COLLECT ADMIN DETAILS
    ===================================================== */

    const name = await question("Admin Name: ");

    const email = await question("Admin Email: ");

    const password = await hiddenQuestion("Admin Password: ");

    /* =====================================================
       BASIC VALIDATION
    ===================================================== */

    if (!name) {
      throw new Error("Admin name is required.");
    }

    if (!email) {
      throw new Error("Admin email is required.");
    }

    if (!email.includes("@")) {
      throw new Error("Please enter a valid email address.");
    }

    if (!password) {
      throw new Error("Admin password is required.");
    }

    if (password.length < 8) {
      throw new Error(
        "Admin password must contain at least 8 characters."
      );
    }

    /* =====================================================
       CHECK EXISTING ADMIN
    ===================================================== */

    const [existingAdmin] = await db.execute(
      "SELECT id, email FROM admins WHERE email = ? LIMIT 1",
      [email]
    );

    if (existingAdmin.length > 0) {
      throw new Error(
        `An admin account already exists with the email: ${email}`
      );
    }

    /* =====================================================
       HASH PASSWORD
    ===================================================== */

    const passwordHash = await bcrypt.hash(password, 12);

    /* =====================================================
       INSERT ADMIN
    ===================================================== */

    const [result] = await db.execute(
      `
      INSERT INTO admins
      (
        name,
        email,
        password,
        role,
        status
      )
      VALUES (?, ?, ?, ?, ?)
      `,
      [
        name,
        email,
        passwordHash,
        "admin",
        "active",
      ]
    );

    /* =====================================================
       SUCCESS
    ===================================================== */

    console.log("");
    console.log("==============================================");
    console.log("          ADMIN CREATED SUCCESSFULLY");
    console.log("==============================================");
    console.log("");
    console.log(`Admin ID : ${result.insertId}`);
    console.log(`Name     : ${name}`);
    console.log(`Email    : ${email}`);
    console.log(`Role     : admin`);
    console.log(`Status   : active`);
    console.log("");
    console.log(
      "🔐 Password stored securely using bcrypt hashing."
    );
    console.log("");
    console.log(
      "You can now use this account for the Admin Portal."
    );
    console.log("");
  } catch (error) {
    console.error("");
    console.error("❌ Admin creation failed");
    console.error("");
    console.error(error.message);
    console.error("");
  } finally {
    rl.close();

    try {
      await db.end();
    } catch (error) {
      // Database may already be closed.
    }
  }
};

/* =========================================================
   START
========================================================= */

createAdmin();