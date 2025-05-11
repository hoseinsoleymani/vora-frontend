import { cookies } from "next/headers";
import { NextResponse } from "next/server";

export async function POST() {
  (await cookies()).set("access", "", { expires: new Date(0), path: "/" });
  return NextResponse.json({ success: true, message: "Logged out successfully" });
}