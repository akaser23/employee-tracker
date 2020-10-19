USE employees;

INSERT INTO department ( dept_name )
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

INSERT INTO manager ( first_name, last_name )
    VALUES
    ('Peter', 'Greenaway'),
    ('Derek', 'Jarman'),
    ('Heathcote', 'Williams'),
    ('Antoinette', 'Capet'),
    ('Samuel', 'Delany');

INSERT INTO employee ( first_name, last_name, role_id, manager_id)
    VALUES
  ('James', 'Fraser', 2, 4),
  ('Jack', 'London', 2, 4),
  ('Robert', 'Bruce', 7, 3),
  ('Peter', 'Greenaway', 5, NULL),
  ('Derek', 'Jarman', 3, NULL),
  ('Paolo', 'Pasolini', 2, 4),
  ('Heathcote', 'Williams', 6, NULL),
  ('Sandy', 'Powell', 2, 4),
  ('Emil', 'Zola', 4, 2),
  ('Sissy', 'Coalpits', 2, 4),
  ('Antoinette', 'Capet', 1, NULL),
  ('Samuel', 'Delany', 5, NULL),
  ('Tony', 'Duvert', 2, 4),
  ('Dennis', 'Cooper', 4, 2),
  ('Monica', 'Bellucci', 2, 4),
  ('Samuel', 'Johnson', 2, 4),
  ('John', 'Dryden', 7, 3),
  ('Alexander', 'Pope', 2, 4),
  ('Lionel', 'Johnson', 4, 2),
  ('Aubrey', 'Beardsley',4, 2),
  ('Tulse', 'Luper', 2, 4),
  ('William', 'Morris', 7, 3),
  ('George', 'Shaw', 4, 2);

