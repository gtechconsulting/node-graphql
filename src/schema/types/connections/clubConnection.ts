import {
  GraphQLInt,
  GraphQLList,
  GraphQLNonNull,
  GraphQLObjectType,
} from 'graphql';
import pageInfo from '../pageInfo';
import clubEdge from '../edges/clubEdge';

const clubConnection = new GraphQLObjectType({
  name: 'ClubConnection',
  fields: {
    totalCount: {
      description: 'Identifies the total count of items in the connection.',
      type: new GraphQLNonNull(GraphQLInt),
    },
    edges: {
      description: 'A list of edges.',
      type: new GraphQLList(clubEdge),
    },
    pageInfo: {
      type: new GraphQLNonNull(pageInfo),
    },
  },
});

export default clubConnection;
