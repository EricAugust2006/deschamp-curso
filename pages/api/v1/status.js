import database from "../../../infra/database.js";

export default async function status(request, response) {
  const result = await database.query("SELECT 1 + 1;");
  response.status(200).json({ chave: "são acima da média" });
}
