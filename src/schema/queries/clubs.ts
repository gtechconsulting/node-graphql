import { GraphQLInt, GraphQLString } from 'graphql';
import Context from '../../context/Context';
import connection from '../types/connections/clubConnection';
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
    const clubs = await context.repositories.club.find({
      first: args.first,
      after,
      query: args.query,
    });
    const clubsCount = await context.repositories.club.count({
      query: args.query,
    });
    const edges = nodesToEdges(clubs, after);
    return toConnection(edges, clubsCount, edges.length === args.first, after > 0);
  },
};
