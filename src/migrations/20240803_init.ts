import { Knex } from 'knex';

/**
 * Migration to initialize database - create simple initial table.
 *
 * Command:
 * ./node_modules/.bin/knex migrate:make init -x ts --connection localhost --client --migrations-directory ./src/migrations/
 *
 * @see https://knexjs.org/#Migrations-CLI
 * @param knex
 */
export async function up(knex: Knex): Promise<any> {
  return knex.schema.createTable('audit_log', (audit) => {
    audit.increments('id').primary();
    audit.string('log', 255).notNullable();
    audit.timestamp('created_at').notNullable().defaultTo(knex.raw('CURRENT_TIMESTAMP'));
  });
}


export async function down(knex: Knex): Promise<any> {
  return knex.schema.dropTable('audit_log');
}

