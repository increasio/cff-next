import type { CodegenConfig } from '@graphql-codegen/cli'

const config: CodegenConfig = {
    overwrite: true,
    schema: 'http://localhost:1337/graphql',
    documents: 'src/graphql/**/*.graphql',
    generates: {
        'src/graphql/generated/sdk.ts': {
            // preset: "client",
            plugins: ['typescript', 'typescript-operations', 'typescript-graphql-request'],
        },
    },
}

export default config
