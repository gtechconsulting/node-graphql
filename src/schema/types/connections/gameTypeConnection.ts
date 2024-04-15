import {
  GraphQLInt,
  GraphQLList,
  GraphQLNonNull,
  GraphQLObjectType,
} from 'graphql';
import pageInfo from '../pageInfo';
import edge from '../edges/gameTypeEdge';

const connection = new GraphQLObjectType({
  name: 'GameTypeConnection',
  fields: {
    totalCount: {
      description: 'Identifies the total count of items in the connection.',
      type: new GraphQLNonNull(GraphQLInt),
    },
    edges: {
      description: 'A list of edges.',
      type: new GraphQLList(edge),
    },
    pageInfo: {
      type: new GraphQLNonNull(pageInfo),
    },
  },
});

export default connection;
