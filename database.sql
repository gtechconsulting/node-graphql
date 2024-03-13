CREATE TABLE  IF NOT EXISTS audit_log (
  id INTEGER PRIMARY KEY,
  log TEXT NOT NULL
);

INSERT INTO audit_log(id, log) VALUES
(1, 'First, solve the problem. Then, write the code.'),
(2, 'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.'),
(3, 'If you stop learning, then the projects you work on are stuck in whatever time period you decided to settle.'),
(4, 'Bad programmers worry about the code. Good programmers worry about the data structures and their relationships.'),
(5, 'You should name a variable using the same care with which you name a first-born child.'),
(6, 'If you are born poor, it is not your mistake, but if you die poor it is your mistake.'),
(7, 'Debugging is like being the detective in a crime movie where you are also the murderer.'),
(8, 'An expert is a person who has made all the mistakes that can be made in a very narrow field.'),
(9, 'Some people, when confronted with a problem, think “I know, I’ll use regular expressions.” Now they have two problems.');