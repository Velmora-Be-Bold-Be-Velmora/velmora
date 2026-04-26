/* eslint-disable */
import * as types from './graphql';
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';

/**
 * Map of all GraphQL operations in the project.
 *
 * This map has several performance disadvantages:
 * 1. It is not tree-shakeable, so it will include all operations in the project.
 * 2. It is not minifiable, so the string of a GraphQL query will be multiple times inside the bundle.
 * 3. It does not support dead code elimination, so it will add unused operations.
 *
 * Therefore it is highly recommended to use the babel or swc plugin for production.
 * Learn more about it here: https://the-guild.dev/graphql/codegen/plugins/presets/preset-client#reducing-bundle-size
 */
type Documents = {
    "\nquery GetProducts {\n  products {\n    id\n    name\n    slug\n    description\n    short_description\n    price\n    discount_price\n    cost_price\n    currency\n    sku\n    stock_quantity\n    is_in_stock\n    low_stock_threshold\n    category_id\n    brand\n    main_image\n    gallery_images\n    gender\n    material\n    is_active\n    is_featured\n    is_new\n    is_trending\n    rating_avg\n    rating_count\n    meta_title\n    meta_description\n    created_at\n    updated_at\n  }\n}\n": typeof types.GetProductsDocument,
};
const documents: Documents = {
    "\nquery GetProducts {\n  products {\n    id\n    name\n    slug\n    description\n    short_description\n    price\n    discount_price\n    cost_price\n    currency\n    sku\n    stock_quantity\n    is_in_stock\n    low_stock_threshold\n    category_id\n    brand\n    main_image\n    gallery_images\n    gender\n    material\n    is_active\n    is_featured\n    is_new\n    is_trending\n    rating_avg\n    rating_count\n    meta_title\n    meta_description\n    created_at\n    updated_at\n  }\n}\n": types.GetProductsDocument,
};

/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 *
 *
 * @example
 * ```ts
 * const query = graphql(`query GetUser($id: ID!) { user(id: $id) { name } }`);
 * ```
 *
 * The query argument is unknown!
 * Please regenerate the types.
 */
export function graphql(source: string): unknown;

/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\nquery GetProducts {\n  products {\n    id\n    name\n    slug\n    description\n    short_description\n    price\n    discount_price\n    cost_price\n    currency\n    sku\n    stock_quantity\n    is_in_stock\n    low_stock_threshold\n    category_id\n    brand\n    main_image\n    gallery_images\n    gender\n    material\n    is_active\n    is_featured\n    is_new\n    is_trending\n    rating_avg\n    rating_count\n    meta_title\n    meta_description\n    created_at\n    updated_at\n  }\n}\n"): (typeof documents)["\nquery GetProducts {\n  products {\n    id\n    name\n    slug\n    description\n    short_description\n    price\n    discount_price\n    cost_price\n    currency\n    sku\n    stock_quantity\n    is_in_stock\n    low_stock_threshold\n    category_id\n    brand\n    main_image\n    gallery_images\n    gender\n    material\n    is_active\n    is_featured\n    is_new\n    is_trending\n    rating_avg\n    rating_count\n    meta_title\n    meta_description\n    created_at\n    updated_at\n  }\n}\n"];

export function graphql(source: string) {
  return (documents as any)[source] ?? {};
}

export type DocumentType<TDocumentNode extends DocumentNode<any, any>> = TDocumentNode extends DocumentNode<  infer TType,  any>  ? TType  : never;