import { NextResponse } from "next/server";
import { GET_CATEGORIES_QUERY } from "@/graphql/queries/get-categories";

const HASURA_URL = process.env.NEXT_PUBLIC_HASURA_URL;
const HASURA_ADMIN_SECRET = process.env.NEXT_PUBLIC_HASURA_ADMIN_SECRET;

async function fetchHasura(query: string) {
  if (!HASURA_URL || !HASURA_ADMIN_SECRET) {
    throw new Error("Missing NEXT_PUBLIC_HASURA_URL or NEXT_PUBLIC_HASURA_ADMIN_SECRET");
  }

  const response = await fetch(HASURA_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "x-hasura-admin-secret": HASURA_ADMIN_SECRET,
    },
    body: JSON.stringify({ query }),
    next: { revalidate: 0 },
  });

  if (!response.ok) {
    const body = await response.text();
    throw new Error(`Hasura request failed (${response.status}): ${body}`);
  }

  return response.json();
}

export async function GET() {
  try {
    const data = await fetchHasura(GET_CATEGORIES_QUERY);
    return NextResponse.json(data);
  } catch (error) {
    return NextResponse.json(
      { error: error instanceof Error ? error.message : "Unexpected error" },
      { status: 500 }
    );
  }
}
