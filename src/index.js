const { ApolloServer } = require('apollo-server');
const { makeExecutableSchema } = require('graphql-tools');
const { typeDefs } = require("./schema/schema");
const { resolvers } = require("./resolvers/resolvers");
const { models } = require("./models/models");
const { gql } = require('apollo-server');
// const { getUser } = require('./auth/authentication');

const generateContext = async ({ req }) => {
    // get the user token from the headers [should come in form Authorization: Bearer token]
    const token = req.headers.authentication || '';
    if (token.startsWith('Bearer ')) token = token.slice(7, token.length);

    // try to retrieve a user with the token
    const user = null; //getUser(token);

    return {
        user,
        models
    }
}

const server = new ApolloServer({
    context: generateContext,
    // dataSources: () => {},
    // engine: {
    //     apiKey: process.env.ENGINE_API_KEY,
    // },
    schema: makeExecutableSchema({typeDefs, resolvers})
})

server.listen().then(({ url }) => {
    console.log(`🚀 Server ready at ${url}`);
});