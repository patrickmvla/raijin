export interface Env {}

export const CORS = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Methods": "GET, POST, HEAD, OPTIONS",
  "Access-Control-Allow-Headers": "Content-Type",
  "Access-Control-Max-Age": "86400",
};

export const workerResponse = (
  body: object | string,
  type: "application/json" | "text/html;charset=UTF-8"
) => {
  return new Response(typeof body === "object" ? JSON.stringify(body) : body, {
    headers: {
      ...CORS,
      "Content-Type": type,
    },
  });
};
