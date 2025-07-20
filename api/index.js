import express from "express";
import router from "./router.js";
import cors from "cors";
import serverless from "serverless-http";
const app = express();
app.use(cors());
app.use(express.json());
app.use("/api", router);
export const handler = serverless(app);
//# sourceMappingURL=index.js.map