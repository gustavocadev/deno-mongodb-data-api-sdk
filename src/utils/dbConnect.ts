import { MongoClient } from "../../deps.ts";
import { config } from "../../deps.ts";

// load env variables
const { APP_ID, DATA_SOURCE, API_KEY } = config();

const client = new MongoClient({
  appId: APP_ID, // e.g. "data-omosm"
  dataSource: DATA_SOURCE, // e.g. "Cluster0"
  apiKey: API_KEY,
});

export { client };
