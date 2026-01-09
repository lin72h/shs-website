import { NextResponse } from "next/server";

// This feature requires Prisma which is disabled
export async function POST() {
  return NextResponse.json(
    { error: "Password update feature is currently disabled" },
    { status: 503 }
  );
}
