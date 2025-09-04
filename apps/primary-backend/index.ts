import {prismaclient } from "db/client";
import express from "express";
import cors from "cors";

const app = express();
app.use(express.json());
app.use(cors);

app.post("/project", async (req, res) => {
  const { prompt } = req.body;
  const userId = req.userId;
  const description = prompt.split("\n")[0];
  const project = await prismaclient.project.create({
    data : { description, userId }, 
  });
  res.json({projectId : project.id });
});


app.get("projects", async (req, res) => {
    const userId = req.userId;
    const project = await prismaclient.project.findUnique({
        where : {userId},
    });
    res.json({project});
});

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});