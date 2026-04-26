import { NextResponse } from "next/server";
import { GET_PRODUCT_LIST_QUERY } from "@/graphql/queries/get-product-list";

const HASURA_URL = process.env.NEXT_PUBLIC_HASURA_URL;
const HASURA_ADMIN_SECRET = process.env.NEXT_PUBLIC_HASURA_ADMIN_SECRET;

const GET_PRODUCTS_QUERY = GET_PRODUCT_LIST_QUERY;

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

export async function GET() {
  const data = await queryHasura(GET_PRODUCTS_QUERY);
  return NextResponse.json(data);
}
