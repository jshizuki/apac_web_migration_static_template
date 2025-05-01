import type { Context } from "@netlify/edge-functions";

export default async (
  request: Request,
  context: Context
): Promise<Response> => {
  console.log("Edge function check-referer.ts running!");

  const allowedReferers: string[] =
    (Netlify.env?.get("ALLOWED_REFERERS") ?? "")
      .split(",")
      .map((r: string): string => r.trim())
      .filter((r: string): boolean => Boolean(r)) || [];

  console.log("Allowed referers from env var:", allowedReferers);

  const referer: string = request.headers.get("referer") || "";
  console.log("Referer:", referer);

  const isAllowed: boolean = allowedReferers.some((url) =>
    referer.startsWith(url)
  );

  if (!isAllowed) {
    const rewritten = await context.rewrite("/403.html");

    return new Response(await rewritten.text(), {
      status: 403,
      headers: {
        "Content-Type": "text/html",
      },
    });
  }

  return context.next();
};
