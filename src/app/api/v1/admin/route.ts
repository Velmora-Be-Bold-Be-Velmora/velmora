import { NextResponse } from "next/server";
import { GET_PRODUCT_LIST_QUERY } from "@/graphql/queries/get-product-list";

const HASURA_URL = process.env.NEXT_PUBLIC_HASURA_URL;
const HASURA_ADMIN_SECRET = process.env.NEXT_PUBLIC_HASURA_ADMIN_SECRET;

const QUERIES: Record<string, string> = {
  products: GET_PRODUCT_LIST_QUERY,
  users: `
query GetUsers {
  users {
    id
    name
    email
    created_at
    updated_at
  }
}
`,
};

async function queryHasura(query: string) {
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

export async function GET(request: Request) {
  try {
    const url = new URL(request.url);
    const resource = url.searchParams.get("resource") ?? "products";
    const query = QUERIES[resource] ?? QUERIES.products;
    const data = await queryHasura(query);
    return NextResponse.json(data);
  } catch (error) {
    return NextResponse.json(
      { error: (error instanceof Error ? error.message : "Unknown error") },
      { status: 500 }
    );
  }
}
