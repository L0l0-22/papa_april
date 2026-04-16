import axios from "axios";
import dotenv from "dotenv";

// Load environment variables (only runs once in Node environment)
dotenv.config();

const { ODOO_URL, ODOO_DB, ODOO_USER, ODOO_PASSWORD } = process.env;

// Debug logs (optional)
console.log("📡 [DEBUG] ODOO_URL:", ODOO_URL);
console.log("📡 [DEBUG] ODOO_DB:", ODOO_DB);
console.log("📡 [DEBUG] ODOO_USER:", ODOO_USER);
console.log("📡 [DEBUG] ODOO_PASSWORD:", ODOO_PASSWORD ? "✅ SET" : "❌ MISSING");

let uidCache = null;

/** Generic JSON-RPC request handler */
async function jsonRpc(method, params) {
  const { data } = await axios.post(`${ODOO_URL}/jsonrpc`, {
    jsonrpc: "2.0",
    method: "call",
    params,
    id: Date.now(),
  });
  if (data.error) throw new Error(JSON.stringify(data.error));
  return data.result;
}

/** Login and cache Odoo UID */
async function odooLogin() {
  if (uidCache) return uidCache;
  uidCache = await jsonRpc("call", {
    service: "common",
    method: "login",
    args: [ODOO_DB, ODOO_USER, ODOO_PASSWORD],
  });
  return uidCache;
}

/** Execute RPC call to any Odoo model/method */
export async function odooExec(model, method, args = [], kwargs = {}) {
  const uid = await odooLogin();
  return jsonRpc("call", {
    service: "object",
    method: "execute_kw",
    args: [ODOO_DB, uid, ODOO_PASSWORD, model, method, args, kwargs],
  });
}
