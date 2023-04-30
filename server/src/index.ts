import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import { apiRoutes } from "./routes";
import { initDB } from "./models";
import passport from "passport";
import { initGoogleOneTapAuth } from "./auth";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

const whitelist = ['http://localhost:3000', 'https://math-for-everyone.pages.dev']
const corsOptions = {
  origin: (origin='', callback: Function) => {
    if (whitelist.indexOf(origin) !== -1) {
      callback(null, true)
    } else {
      callback(new Error())
    }
  },
  maxAge: 3600,
  credentials: true,
};

app.use(cors(corsOptions));
app.use(express.json());

app.use(
  require("express-session")({
    secret: "gUYGkglhg;L",
    resave: true,
    saveUninitialized: false,
  })
);

initGoogleOneTapAuth();

app.use(passport.initialize());
app.use(passport.session());

app.use("/api", apiRoutes);

initDB();

app.listen(PORT, () =>
  console.log(`The server is up and running on PORT ${PORT} 🚀`)
);

