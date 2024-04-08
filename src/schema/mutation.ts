import { GraphQLObjectType } from 'graphql';
import createLog from './mutations/createLog';
import createUser from './mutations/createUser';

const mutation = new GraphQLObjectType({
  name: 'Mutation',
  fields: (): any => ({
    createLog,
    createUser,
  }),
});

export default mutation;
