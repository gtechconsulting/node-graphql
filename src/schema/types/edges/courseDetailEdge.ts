import {
  GraphQLObjectType,
  GraphQLString,
} from 'graphql';
import courseDetail from '../courseDetail';

const edge = new GraphQLObjectType({
  name: 'courseDetailEdge',
  description: 'List of edges.',
  fields: {
    node: {
      description: 'The item at the end of the edge.',
      type: courseDetail,
    },
    cursor: {
      description: 'A cursor for pagination.',
      type: GraphQLString,
    },
  },
});

export default edge;
