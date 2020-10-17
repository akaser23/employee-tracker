INSERT INTO department ( dept_name)
VALUES
    ('Sales'),
    ('Engineering'),
    ('Finance'),
    ('Legal');

INSERT INTO role ( title, salary, department_id )
    VALUES
    ('Sales Lead', 100000, 1),
    ('Salesperson', 80000, 1),
    ('Lead Engineer', 150000, 2),
    ('Software Engineer', 120000, 2),
    ('Accountant', 125000, 3),
    ('Legal Team Lead', 250000, 4),
    ('Lawyer', 190000, 4);

INSERT INTO employee ( first_name, last_name, role_id, manager_id)
    VALUES
  ('James', 'Fraser', 2, 11),
  ('Jack', 'London', 2, 11),
  ('Robert', 'Bruce', 7, 7),
  ('Peter', 'Greenaway', 5, NULL),
  ('Derek', 'Jarman', 3, NULL),
  ('Paolo', 'Pasolini', 2, 11),
  ('Heathcote', 'Williams', 6, NULL),
  ('Sandy', 'Powell', 2, 11),
  ('Emil', 'Zola', 4, 5),
  ('Sissy', 'Coalpits', 2, 11),
  ('Antoinette', 'Capet', 1, NULL),
  ('Samuel', 'Delany', 5, NULL),
  ('Tony', 'Duvert', 2, 11),
  ('Dennis', 'Cooper', 4, 5),
  ('Monica', 'Bellucci', 2, 11),
  ('Samuel', 'Johnson', 2, 11),
  ('John', 'Dryden', 7, 7),
  ('Alexander', 'Pope', 2, 11),
  ('Lionel', 'Johnson', 4, 5),
  ('Aubrey', 'Beardsley',4, 5),
  ('Tulse', 'Luper', 2, 11),
  ('William', 'Morris', 7, 7),
  ('George', 'Shaw', 4, 5);