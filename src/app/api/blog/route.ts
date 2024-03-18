import { NextResponse } from "next/server";

export async function GET() {
  const res = await fetch(
    `${process.env.CONTENTFUL_URL}/entries?${process.env.CONTENTFUL_API_TOKEN}`
  );

  const data = await res.json();

  return NextResponse.json(data);
}
