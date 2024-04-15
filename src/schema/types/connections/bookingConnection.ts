import {
  GraphQLInt,
  GraphQLList,
  GraphQLNonNull,
  GraphQLObjectType,
} from 'graphql';
import pageInfo from '../pageInfo';
import edge from '../edges/bookingEdge';

const connection = new GraphQLObjectType({
  name: 'BookingConnection',
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
