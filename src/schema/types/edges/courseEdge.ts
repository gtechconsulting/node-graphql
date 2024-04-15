import {
  GraphQLObjectType,
  GraphQLString,
} from 'graphql';
import course from '../course';

const edge = new GraphQLObjectType({
  name: 'courseEdge',
  description: 'List of edges.',
  fields: {
    node: {
      description: 'The item at the end of the edge.',
      type: course,
    },
    cursor: {
      description: 'A cursor for pagination.',
      type: GraphQLString,
    },
  },
});

export default edge;
