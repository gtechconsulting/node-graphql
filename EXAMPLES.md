# Example Queries

Get list of auditLogs:

```GraphQL
query {
  auditLogs {
    edges {
      node {
        id
        _id
        log
      }
    }
  }
}
```

Create new audit Log:

```GraphQL
mutation {
  createLog(input:{
    log:"migration failed with error: create table audit id` int unsigned not null auto_increment primary key, log varchar(255) not null, created_at timestamp not null default CURRENT_TIMESTAMP"
  }) {
    id
    _id
    log
  }
}
```