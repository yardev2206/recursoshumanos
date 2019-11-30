'use stric'

const { makeExecutableSchema } = require('graphql-tools')

// types
const Query = require('./query')
const Mutation = require('./mutation')

// configuracion de graphql
const typeDefs = require('./typeDefs')
const resolvers = { 
    Query,
    Mutation
}

// exportar el schema
module.exports = makeExecutableSchema({ typeDefs, resolvers });