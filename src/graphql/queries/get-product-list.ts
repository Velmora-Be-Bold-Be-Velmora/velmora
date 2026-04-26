import { gql } from '@apollo/client';

export const GET_PRODUCT_LIST_QUERY = `
query GetProducts {
  products {
    id
    name
    slug
    description
    short_description
    price
    discount_price
    cost_price
    currency
    sku
    stock_quantity
    is_in_stock
    low_stock_threshold
    category_id
    brand
    main_image
    gallery_images
    gender
    material
    is_active
    is_featured
    is_new
    is_trending
    rating_avg
    rating_count
    meta_title
    meta_description
    created_at
    updated_at
  }
}
`;

export const GET_PRODUCT_LIST = gql`
query GetProducts {
  products {
    id
    name
    slug
    description
    short_description
    price
    discount_price
    cost_price
    currency
    sku
    stock_quantity
    is_in_stock
    low_stock_threshold
    category_id
    brand
    main_image
    gallery_images
    gender
    material
    is_active
    is_featured
    is_new
    is_trending
    rating_avg
    rating_count
    meta_title
    meta_description
    created_at
    updated_at
  }
}
`;
