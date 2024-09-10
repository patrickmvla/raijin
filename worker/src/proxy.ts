import { workerResponse } from "./config";

export const Proxy = async (req: Request, ctx: ExecutionContext) => {
  const url = new URL(req.url);

  const proxyUrl = url.searchParams.get("proxyUrl");
  const modify = url.searchParams.has("modify");

  if (!proxyUrl) {
    return workerResponse({ status: false }, "application/json");
  }

  let res = await fetch(proxyUrl);

  if (modify) {
    res = new Response(res.body, res);
    res.headers.set("Access-Control-Allow-Origin", "*");
    res.headers.set("Access-Control-Allow-Methods", "GET,POST,HEAD,OPTIONS");
    res.headers.set("Access-Control-Allow-Max-Age", "86400");
  }

  return res;
};
