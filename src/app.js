import express from 'express'
import cookieParser from 'cookie-parser'
import logger from 'morgan'
import { ApolloServer } from 'apollo-server-express'
import helmet from 'helmet'

import { makeExecutableSchema } from 'graphql-tools'
import typeDefs from './schema/schema'
import resolvers from './resolvers/resolvers'
import models from './models/models'

var app = express()

app.use(helmet())
app.use(logger('dev'))
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(cookieParser())

const generateContext = async ({ req }) => {
  // get the user token from the headers [should come in form Authorization: Bearer token]
  const token = req.headers.authentication || ''
  if (token.startsWith('Bearer ')) token = token.slice(7, token.length)

  // try to retrieve a user with the token
  const user = null //getUser(token);

  return {
    user,
    models,
  }
}

const server = new ApolloServer({
  context: generateContext,
  // dataSources: () => {},
  // engine: {
  //   apiKey: process.env.ENGINE_API_KEY,
  // },
  schema: makeExecutableSchema({ typeDefs, resolvers }),
})

server.applyMiddleware({ app })

export default app
