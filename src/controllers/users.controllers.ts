import { RouterContext } from "../../deps.ts";
import users from "../collections/users.ts";

const getUsers = async (ctx: RouterContext<"/api/users">) => {
  const all_users = await users.find();

  ctx.response.body = {
    message: "Hello World from Deno 🦕🌻!",
    users: all_users,
  };
};

export { getUsers };
