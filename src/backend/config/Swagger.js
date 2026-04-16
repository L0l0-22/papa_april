import swaggerJSDoc from "swagger-jsdoc";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const options = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "SundSpeak APIs",
      version: "1.0.0",
      description: "API documentation for SundSpeak system",
    },
  },
  // ✅ Use absolute path instead of relative
  apis: [path.resolve(__dirname, "../docs/*.js")],
};

console.log("📘 Swagger scanning path:", path.resolve(__dirname, "../docs/*.js"));

const swaggerSpec = swaggerJSDoc(options);
export default swaggerSpec;
