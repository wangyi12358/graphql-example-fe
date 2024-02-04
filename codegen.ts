import type { CodegenConfig } from '@graphql-codegen/cli'

const requestConfigs = {
  namingConvention: {
    transformUnderscore: true,
  },
  useTypeImports: true,
  skipTypename: true,
}

const config: CodegenConfig = {
  overwrite: true,
  documents: 'src/graphql/gql/**/*.graphql',
  generates: {
    './src/graphql/generated/getSdk.ts': {
      schema: 'http://127.0.0.1:8080/query',
      documents: 'src/graphql/gql/**/*.graphql',
      plugins: [ 'typescript', 'typescript-operations', 'typescript-graphql-request' ],
      config: requestConfigs,
    }
  }
}

export default config
