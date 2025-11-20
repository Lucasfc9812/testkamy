import { NextResponse } from "next/server";

export function middleware(req) {
  const ua = req.headers.get("user-agent")?.toLowerCase() || "";
  const country = req.geo?.country || "??";
  const referer = req.headers.get("referer") || "";

  // Lista de bots
  const bots = [
    "facebook",
    "facebot",
    "google",
    "crawler",
    "bot",
    "spider",
    "curl",
    "python",
  ];

  // Se o user-agent contiver qualquer bot → WHITE PAGE
  for (const b of bots) {
    if (ua.includes(b)) {
      return NextResponse.rewrite(new URL("/white", req.url));
    }
  }

  // Permitir apenas BR
  if (country !== "BR") {
    return NextResponse.rewrite(new URL("/white", req.url));
  }

  // Bloquear quem não tem referer (moderação quase sempre cai aqui)
  if (!referer) {
    return NextResponse.rewrite(new URL("/white", req.url));
  }

  // Caso passe em tudo → BLACK PAGE
  return NextResponse.rewrite(new URL("/black", req.url));
}

// Que rotas o middleware deve interceptar
export const config = {
  matcher: "/",
};
