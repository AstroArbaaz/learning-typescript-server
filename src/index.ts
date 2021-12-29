/**
 * Required External Modules
 */
import * as dotenv from "dotenv";
import express from "express";
import cors from "cors";
import helmet from "helmet";

dotenv.config();

/**
 * App Variables
 */
if (!process.env.PORT) {
  process.exit(1);
}
const PORT: number = parseInt(process.env.PORT as string, 10);

const app = express();


/**
 *  App Configuration
 */
app.use(helmet()); //Express middleware to secure your apps by setting various HTTP headers, which mitigate common attack vectors.
app.use(cors()); //Cross-Origin Resource Sharing (CORS) is a protocol that enables scripts running on a browser client to interact with resources from a different origin
app.use(express.json());


app.get('/', (req, res) => {
    res.send("Server is running 🥳🥳");
});

/**
 * Server Activation
 */
app.listen(PORT, () => {
  console.log(`Listening on http://localhost:${PORT}`);
});