/*
 * Required External Modules
 */
import * as express from "express";
import * as dotenv from "dotenv";
import * as cors from "cors";
import helmet from "helmet";
dotenv.config();
import router from "./src/routes/router";

/*
 * App Variables
 */
if (!process.env.PORT) process.exit(1);
const PORT: number = parseInt(process.env.PORT as string, 10);
const app: express.Application = express();

/*
 *  App Configuration
 */
app.use(helmet());
app.use(cors());
app.use(express.json());
app.use("/api", router);

/*
 * Server Activation
 */
app.listen(PORT, () => console.log(`Listening on port ${PORT}`));
