const graphql = require('graphql');

const {
  GraphQLObjectType,
  GraphQLString,
  GraphQLID,
  GraphQLNonNull,
  GraphQLList,
  GraphQLFloat,
  GraphQLInt,
} = graphql;

const Business = new GraphQLObjectType({
  name: 'Business',
  fields: {
    name: { type: new GraphQLNonNull(GraphQLString) },
    alias: { type: new GraphQLNonNull(GraphQLString) },
    likes: { type: GraphQLInt },
    dislikes: { type: GraphQLInt },
  },
});

const GroupType = new GraphQLObjectType({
  name: 'GroupType',
  fields: () => ({
    id: { type: GraphQLID },
    dateCreated: { type: GraphQLFloat },
    businesses: { type: GraphQLList(Business) },
  }),
});

module.exports = GroupType;
