import express from "express";

const app = express();

app.use(express.json());

app.get("/", async (req, res) => {
  res.json({
    status: "success",
    data: "Hello World",
  });
});

app.listen(3000, () => {
  console.log(`🚀 Server ready at: http://localhost:3000`);
});
