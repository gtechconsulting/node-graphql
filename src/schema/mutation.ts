import { GraphQLObjectType } from 'graphql';
import createLog from './mutations/createLog';

const mutation = new GraphQLObjectType({
  name: 'Mutation',
  fields: (): any => ({
    createLog,
  }),
});

export default mutation;
