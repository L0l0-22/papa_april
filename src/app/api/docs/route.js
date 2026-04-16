import swaggerSpec from "@/backend/config/Swagger";

export async function GET() {
  return Response.json(swaggerSpec);
}
