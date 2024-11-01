import express, { Express, Request, Response } from "express";

const app: Express = express();
const port = 3000;

app.get("/", (req: Request, res: Response) => {
  res.send("TypeScript + Express is Working!");
});

app.listen(port, () => {
  console.log(`Running on http://localhost:${port}`);
});
