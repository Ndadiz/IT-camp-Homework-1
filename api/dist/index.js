import express from "express";
import router from "./router.js";
import cors from "cors";
console.log("SERVER WORKING");
const PORT = 5000;
const app = express();
app.use(cors());
app.use(express.json());
app.use('/api', router);
async function startApp() {
    try {
        app.listen(PORT, () => console.log("SERVER STARTED ON PORT " + PORT));
    }
    catch (e) {
        console.log(e);
    }
}
startApp();
//# sourceMappingURL=index.js.map