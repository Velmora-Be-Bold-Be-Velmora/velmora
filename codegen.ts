import type { CodegenConfig } from '@graphql-codegen/cli';
import * as dotenv from 'dotenv';

dotenv.config({ path: '.env.local' });

const config: CodegenConfig = {
  schema: [
    {
      [process.env.NEXT_PUBLIC_HASURA_URL as string]: {
        headers: {
          'x-hasura-admin-secret': process.env.NEXT_PUBLIC_HASURA_ADMIN_SECRET as string,
        },
      },
    },
  ],
  documents: ['src/graphql/**/*.ts'],
  generates: {
    './src/graphql/generated/graphql.ts': {
      plugins: [
        'typescript',
        'typescript-operations',
        'typescript-react-apollo',
      ],
    },
  },
};

export default config;