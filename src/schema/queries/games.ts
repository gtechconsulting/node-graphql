import { GraphQLInt, GraphQLString } from 'graphql';
import Context from '../../context/Context';
import connection from '../types/connections/gameConnection';
import nodesToEdges from './nodesToEdges';
import toConnection from './toConnection';

interface QueryArguments {
  first: number;
  after: string;
  query: string;
}

export default {
  type: connection,
  args: {
    first: {
      defaultValue: 10,
      description: 'Limits the number of results returned in the page. Defaults to 10.',
      type: GraphQLInt,
    },
    after: {
      defaultValue: 'Y3Vyc29yMA==', // base64encode('cursor0')
      description: 'The cursor value of an item returned in previous page. An alternative to in integer offset.',
      type: GraphQLString,
    },
    query: {
      type: GraphQLString,
    },
  },
  resolve: async (_, args: QueryArguments, context: Context) => {
    const after = typeof args.after === 'undefined' || args.after === null ? 0 : parseInt(Buffer.from(args.after, 'base64').toString('ascii').replace('cursor', ''), 10);
    const games = await context.repositories.game.find({
      first: args.first,
      after,
      query: args.query,
    });
    const count = await context.repositories.game.count({
      query: args.query,
    });
    const edges = nodesToEdges(games, after);
    return toConnection(edges, count, edges.length === args.first, after > 0);
  },
};
