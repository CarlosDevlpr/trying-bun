import { Elysia } from "elysia";
import { autoroutes } from "elysia-autoroutes"

const app = new Elysia()
  .get('/', () => {
    return {status: "Avaiable"}
  })

  .state('version', 1)
  
  .use(autoroutes({
    prefix: '/api',
    routesDir: './routes',
  }))
  
  .listen(3000)

  export type ElysiaApp = typeof app
  export type GetHandler = Parameters<typeof app.get>[1]
  export type GetHandlerParams = Parameters<typeof app.get>[2]