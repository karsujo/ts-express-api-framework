import app from "./app";
import swaggerDocs from "./utils/swagger";

const server = app.listen(process.env.PORT, () => {
   const port: number = parseInt(process.env.PORT ?? "O");
   //Initialize Swagger docs
   swaggerDocs(app, port);
   console.log(`listening on port ${process.env.PORT}`);
});

export default server;
