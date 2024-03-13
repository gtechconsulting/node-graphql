import { GraphQLInt, GraphQLString } from 'graphql';
import Context from '../../context/Context';
import auditLogConnection from '../types/connections/auditLogConnection';
import nodesToEdges from './nodesToEdges';
import toConnection from './toConnection';

interface AuditLogQueryArguments {
  first: number;
  after: string;
  query: string;
}

export default {
  type: auditLogConnection,
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
  resolve: async (_, args: AuditLogQueryArguments, context: Context) => {
    const after = typeof args.after === 'undefined' || args.after === null ? 0 : parseInt(Buffer.from(args.after, 'base64').toString('ascii').replace('cursor', ''), 10);
    const auditLogs = await context.repositories.auditLog.find({
      first: args.first,
      after,
      query: args.query,
    });
    const auditLogsCount = await context.repositories.auditLog.count({
      query: args.query,
    });
    const edges = nodesToEdges(auditLogs, after);
    return toConnection(edges, auditLogsCount, edges.length === args.first, after > 0);
  },
};
