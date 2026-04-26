export const GET_CATEGORIES_QUERY = `
query GetCategories {
  categories(where: { is_active: { _eq: true } }, order_by: { sort_order: asc }) {
    id
    name
    slug
    description
    parent_id
    level
    image_url
    icon
    is_active
    is_featured
    sort_order
    meta_title
    meta_description
    created_at
    updated_at
  }
}
`;
