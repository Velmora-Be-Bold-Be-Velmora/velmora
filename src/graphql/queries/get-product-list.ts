import { gql } from '@apollo/client';

export const GET_PRODUCT_LIST = gql`
query GetProducts {
  products {
        id
		name
		price
		created_at
		updated_at
		is_deleted
  }
}
`;