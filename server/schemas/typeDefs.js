// import the GraphQL tagged template function
const { gql } = require('apollo-server-express');

// create typeDefs
const typeDefs = gql`
    type Thought {
        _id: ID
        thoughtText: String
        createdAt: String
        username: String
        reactionCount: Int
    }
    type Query {
        thoughts: [Thought]
    }
`;

// export typeDefs
module.exports = typeDefs;