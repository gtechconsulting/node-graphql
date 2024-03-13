import {
  GraphQLInputObjectType,
  GraphQLNonNull,
} from 'graphql';
import auditLogsOrderField from '../enums/auditLogsOrderField';
import direction from '../enums/direction';

const auditLogsOrder = new GraphQLInputObjectType({
  name: 'AuditLogsOrder',
  fields: {
    field: {
      type: new GraphQLNonNull(auditLogsOrderField),
    },
    direction: {
      type: new GraphQLNonNull(direction),
    },
  },
});

export default auditLogsOrder;
