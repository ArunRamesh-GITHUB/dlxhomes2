import { NextRequest, NextResponse } from "next/server";

export const runtime = "edge";

export function GET(
  request: NextRequest,
  { params }: { params: Promise<{ code: string }> }
) {
  const { searchParams } = request.nextUrl;
  const campaign = searchParams.get("campaign") ?? "summer_cooling";

  return params.then(({ code }) => {
    const dest = new URL("/cooling", request.nextUrl.origin);
    dest.searchParams.set("ref", code);
    dest.searchParams.set("campaign", campaign);
    return NextResponse.redirect(dest, { status: 302 });
  });
}
