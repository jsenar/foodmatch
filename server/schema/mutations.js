const graphql = require('graphql');
const mongoose = require('mongoose');
const GroupType = require('./group_type');

const {
  GraphQLObjectType,
  GraphQLInputObjectType,
  GraphQLString,
  GraphQLNonNull,
  GraphQLList,
  GraphQLID,
} = graphql;

const Group = mongoose.model('group');

const BusinessType = new GraphQLInputObjectType({
  name: 'BusinessType',
  fields: {
    name: { type: new GraphQLNonNull(GraphQLString) },
    alias: { type: new GraphQLNonNull(GraphQLString) },
  },
});

const mutation = new GraphQLObjectType({
  name: 'Mutation',
  fields: {
    addGroup: {
      type: GroupType,
      args: {
        businesses: { type: GraphQLList(BusinessType) },
      },
      resolve(parentValue, { businesses }) {
        const dateCreated = Date.now();
        return (new Group({ dateCreated, businesses })).save();
      },
    },
    likeBusiness: {
      type: GroupType,
      args: {
        groupId: { type: GraphQLID },
        businessAlias: { type: GraphQLString },
      },
      resolve(parentValue, { groupId, businessAlias }) {
        return Group.like(groupId, businessAlias);
      },
    },
    dislikeBusiness: {
      type: GroupType,
      args: {
        groupId: { type: GraphQLID },
        businessAlias: { type: GraphQLString },
      },
      resolve(parentValue, { groupId, businessAlias }) {
        return Group.dislike(groupId, businessAlias);
      },
    },
  },
});

module.exports = mutation;
