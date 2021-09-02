const express = require("express");
const app = express();
const cors = require("cors")
const pool = require("./db")

//middleware
app.use(cors());
app.use(express.json());

//ROUTES

app.post("/newsquat", async (req, res) => {
    try {
      const { squat } = req.body
    console.log({squat})
    const dbres = await pool.query('insert into onerm (squat) VALUES($1) where username = sebwiggins', [squat]);
    res.json(dbres.rows);
    } catch (error) {
      console.error(error)
    }
  });

//start the server on port 5000
app.listen(5000, () => {
    console.log("server has started on port 5000")
})