import { NextResponse } from "next/server";

export const dynamic = "force-dynamic";

// A faulty API route to test Sentry's error monitoring
export function GET() {
  const shouldThrow = true; // Condición para lanzar el error

  if (shouldThrow) {
    throw new Error("Sentry Example API Route Error");
  }

  return NextResponse.json({ data: "Testing Sentry Error..." });
}
