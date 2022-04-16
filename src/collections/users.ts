import { Bson } from "../../deps.ts";
import { client } from "../utils/dbConnect.ts";

// Defining schema interface
interface UserSchema {
  _id: Bson.ObjectId | string;
  name: string;
  password: string;
  email: string;
  isconfirm?: string;
  token?: string;
  createdAt?: string;
  updatedAt?: string;
}

const db = client.database("uptask");
const users = db.collection<UserSchema>("users");

export default users;
