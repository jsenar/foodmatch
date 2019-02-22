const mongoose = require('mongoose');
const graphql = require('graphql');
const GroupType = require('./group_type');

const Group = mongoose.model('group');

const {
  GraphQLObjectType, GraphQLList, GraphQLID, GraphQLNonNull,
} = graphql;

const RootQuery = new GraphQLObjectType({
  name: 'RootQueryType',
  fields: () => ({
    groups: {
      type: new GraphQLList(GroupType),
      resolve() {
        return Group.find({});
      },
    },
    group: {
      type: GroupType,
      args: { id: { type: new GraphQLNonNull(GraphQLID) } },
      resolve(parentValue, { id }) {
        return Group.findById(id);
      },
    },
  }),
});

module.exports = RootQuery;
