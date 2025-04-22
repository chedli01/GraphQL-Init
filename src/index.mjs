// index.mjs
import { createServer } from 'node:http'
import { createYoga, createSchema } from 'graphql-yoga'
import { readFileSync } from 'node:fs'
import { fileURLToPath } from 'node:url'
import { dirname, join } from 'node:path'
import { Query } from './resolvers/Query.mjs'
import { connectToDB } from './db/db.mjs'
import { Mutation } from './resolvers/Mutation.mjs'


// Resolve file path for ESM
const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)

const typeDefs = readFileSync(join(__dirname, '/schema/schema.graphql'), 'utf-8')

const resolvers = {
Query,Mutation
}

const yoga = createYoga({
  schema: createSchema({ typeDefs, resolvers }),
  context: async () => {
    const db = await connectToDB()
    return { db }
  }
})

const server = createServer(yoga)

server.listen(4000, () => {
  console.log('🚀 Yoga GraphQL server running at http://localhost:4000/graphql')
})
