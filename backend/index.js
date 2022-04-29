import chalk from "chalk";
import Express from "express";
import cors from "cors";
import "./db";

const app = Express();

app.use(cors());

const auth = require("./routes/auth");
app.use("/auth", auth);

app.listen(3080, () => {
  console.log(chalk.magenta("project") + "todolist");
  console.log(
    chalk.green("ready") +
      " - started server on 127.0.0.0.1:3080 url: http://localhost:3080"
  );
});
