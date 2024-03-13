import { Knex } from 'knex';

export async function seed(knex: Knex): Promise<any> {
  return knex("audit_log").del()
    .then(() => {
      return knex("audit_log").insert([
          { id: 1, log: 'First, solve the problem. Then, write the code.', createdAt: '2020-07-02 12:43:00' },
          { id: 2, log: 'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.', createdAt: '2020-07-02 12:43:01' },
          { id: 3, log: 'If you stop learning, then the projects you work on are stuck in whatever time period you decided to settle.', createdAt: '2020-07-02 12:43:02' },
          { id: 4, log: 'Bad programmers worry about the code. Good programmers worry about the data structures and their relationships.', createdAt: '2020-07-02 12:43:03' },
          { id: 5, log: 'Most good programmers do programming not because they expect to get paid or get adulation by the public, but because it is fun to program.', createdAt: '2020-07-02 12:43:04' },
          { id: 6, log: 'When you say \'I wrote a program that crashed Windows,\' people just stare at you blankly and say \'Hey, I got those with the system, for free.\'', createdAt: '2020-07-02 12:43:05' },
          { id: 7, log: 'A computer is like air conditioning - it becomes useless when you open Windows.', createdAt: '2020-07-02 12:43:06' },
          { id: 8, log: 'If you think your users are idiots, only idiots will use it.', createdAt: '2020-07-02 12:43:07' },
          { id: 9, log: 'You should name a variable using the same care with which you name a first-born child.', createdAt: '2020-07-02 12:43:08' },
      ]);
    });
}
