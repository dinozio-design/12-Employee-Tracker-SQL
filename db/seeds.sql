INSERT INTO department (dept_name)
VALUES  ('Human Resources'),
        ('Product Management'),
        ('Engineering'),
        ('Research and Development'),
        ('Legal'),
        ('Finance'),
        ('Sales');


INSERT INTO role (title, salary, dept_id)
VALUES  ('Sales Lead',100000,7),
        ('Salesperson',80000,7),
        ('Lead Engineer',150000,3),
        ('Software Engineer',120000,3),
        ('Account Manager',160000,6),
        ('Accountant',125000,6),
        ('Legal Team Lead',250000,5),
        ('Lawyer',190000,5);


INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES  ("Margareta","Carlozzi",4,3),
        ("Ranique","Mariette",4,3),
        ("Ruby","Muttock",3,NULL),
        ("Jorge","Arrighetti",5,NULL),
        ("Karyn","Duny",6,5),
        ("Clementine","Farden",6,5),
        ("Gil","Giacomazzo",1,2),
        ("Godfrey","Rickaert",1,2),
        ("Ilyssa","Cadagan",2,NULL),
        ("Pollyanna","Pottiphar",6,5),
        ("Kit","Ronchi",6,5),
        ("Gregory","Langdale",5,NULL),
        ("Maddy","Vallack",5,NULL);