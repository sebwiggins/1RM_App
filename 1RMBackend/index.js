const express = require("express");
const app = express();
const cors = require("cors")
const pool = require("./db")

//middleware
app.use(cors());
app.use(express.json());

//ROUTES

//post's

app.post("/newsquat", async (req, res) => {
    try {
      const { squat } = req.body
    console.log({squat})
    const dbres = await pool.query("update onerm set squat = $1 WHERE username = 'sebwiggins'", [squat]);
    res.json(dbres.rows);
    } catch (error) {
      console.error(error)
    }
  });

  app.post("/newdeadlift", async (req, res) => {
    try {
      const { deadlift } = req.body
    console.log({deadlift})
    const dbres = await pool.query("update onerm set deadlift = $1 WHERE username = 'sebwiggins'", [deadlift]);
    res.json(dbres.rows);
    } catch (error) {
      console.error(error)
    }
  });

  app.post("/newbench", async (req, res) => {
    try {
      const { bench } = req.body
    console.log({bench})
    const dbres = await pool.query("update onerm set bench = $1 WHERE username = 'sebwiggins'", [bench]);
    res.json(dbres.rows);
    } catch (error) {
      console.error(error)
    }
  });

  //get's

  app.get("/squat", async (req, res) => {
    const dbres = await pool.query("select squat from onerm WHERE username ='sebwiggins'");
    res.json(dbres.rows);
  });

  app.get("/deadlift", async (req, res) => {
    const dbres = await pool.query("select deadlift from onerm WHERE username ='sebwiggins'");
    res.json(dbres.rows);
  });

  app.get("/bench", async (req, res) => {
    const dbres = await pool.query("select bench from onerm WHERE username ='sebwiggins'");
    res.json(dbres.rows);
  });
//start the server on port 5000
app.listen(5000, () => {
    console.log("server has started on port 5000")
})