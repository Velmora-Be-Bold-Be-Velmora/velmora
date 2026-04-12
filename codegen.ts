import type { CodegenConfig } from '@graphql-codegen/cli';
import * as dotenv from 'dotenv';

dotenv.config({ path: '.env.local' });

const HASURA_URL = process.env.NEXT_PUBLIC_HASURA_URL!;
const HASURA_SECRET = process.env.NEXT_PUBLIC_HASURA_ADMIN_SECRET!;

const config: CodegenConfig = {
  overwrite: true,

  schema: [
    {
      [HASURA_URL]: {
        headers: {
          'x-hasura-admin-secret': HASURA_SECRET,
        },
      },
    },
  ],

  documents: ['src/graphql/**/*.ts'],

  generates: {
    './src/graphql/generated/': {
      preset: 'client',
      plugins: [],
    },
  },
};

export default config;