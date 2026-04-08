import { NextResponse } from "next/server";
import { readFile, writeFile } from "fs/promises";
import { join } from "path";

const FILE = join(process.cwd(), "waitlist.json");

async function readWaitlist(): Promise<string[]> {
  try {
    const data = await readFile(FILE, "utf-8");
    return JSON.parse(data);
  } catch {
    return [];
  }
}

export async function GET() {
  const emails = await readWaitlist();
  return NextResponse.json({ count: emails.length });
}

export async function POST(request: Request) {
  const { email } = await request.json();

  if (!email || typeof email !== "string" || !email.includes("@")) {
    return NextResponse.json({ error: "Invalid email" }, { status: 400 });
  }

  const emails = await readWaitlist();

  if (emails.includes(email)) {
    return NextResponse.json({ message: "Already registered" });
  }

  emails.push(email);
  await writeFile(FILE, JSON.stringify(emails, null, 2));

  return NextResponse.json({ message: "Added", count: emails.length });
}
