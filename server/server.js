const PORT = process.env.PORT ?? 8000;

const express = require("express");

const app = express();

const pool = require("./db");

//Get all todos from our postgresql db
app.get("/users", async (req, res) => {
  const userEmail = "p2arthur@gmail.com";

  try {
    const users = await pool.query("SELECT * FROM users");
    res.json(users.rows);
  } catch (error) {
    console.log(error);
  }
});

app.listen(PORT, () => console.log(`Server running on PORT ${PORT}`));
