import { ApolloClient, HttpLink, InMemoryCache, gql } from '@apollo/client';
import fs from 'fs';
import { printSchema } from 'graphql';
import { buildClientSchema, getIntrospectionQuery } from 'graphql/utilities';
import yaml from 'yaml';

interface GraphQLConfig {
  schema: string;
  extensions: {
    endpoints: {
      default: {
        url: string;
        introspect: boolean;
      };
    };
  };
}

async function generateSchema() {
  const config = fs.readFileSync('graphql.config.yaml', 'utf-8');
  const parsed = yaml.parse(config) as GraphQLConfig;
  console.log(parsed);
  // create a new ApolloClient instance
  const client = new ApolloClient({
    link: new HttpLink({ uri: parsed.extensions.endpoints.default.url, fetch }),
    cache: new InMemoryCache(),
  });

  // introspection query gets the schema of the GraphQL API
  const { data } = await client.query({
  query: gql`${getIntrospectionQuery()}`
  });
  const schema = buildClientSchema(data);
  const schemaSDL = printSchema(schema);

  // write the schema to a file
  fs.writeFileSync('./apps/admin/src/graphql/schema.graphql', schemaSDL);
  console.log('Schema has been generated and saved to schema.graphql');
}

generateSchema().catch(error => {
  console.error('Error generating schema:', error);
});
