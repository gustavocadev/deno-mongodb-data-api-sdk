import { Application } from "../deps.ts";
import userRoute from "./routes/users.routes.ts";

class Server {
  #app: Application;
  #port: number;
  constructor() {
    this.#app = new Application();
    this.#port = Number(Deno.env.get("PORT") ?? 4000);
    this.middlewares();
    this.routes();
  }

  middlewares() {
    this.#app.use(async (ctx, next) => {
      // logger
      await next();
      const rt = ctx.response.headers.get("X-Response-Time");
      console.log(`${ctx.request.method} ${ctx.request.url} - ${rt}`);
    });
  }

  routes() {
    this.#app.use(userRoute.routes());
    this.#app.use(userRoute.allowedMethods());
  }

  async listen() {
    console.log("listen at port 🚀:", this.#port);

    // listen
    await this.#app.listen({ port: this.#port });
  }
}

export default Server;
