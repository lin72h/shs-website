import { NextResponse } from "next/server";

// This feature requires Prisma which is disabled
export async function POST() {
  return NextResponse.json(
    { error: "Token verification feature is currently disabled" },
    { status: 503 }
  );
}
