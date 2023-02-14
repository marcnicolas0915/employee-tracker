USE employees_db;

INSERT INTO department (name)
    VALUES
        ('Human Resources'),
        ('IT'),
        ('Operations'),
        ('Marketing');

INSERT INTO role (title, salary, department_id)
    VALUES
        ('HR Manager', 110000, 1),
        ('HR Coordinator', 65000, 1),
        ('IT Manager', 135000, 2),
        ('IT Support Specialist', 90000, 2),
        ('Operations Supervisor', 110000, 3),
        ('Logistics Coordinator', 80000, 3),
        ('Marketing Manager', 130000, 4);

INSERT INTO employee (first_name, last_name, role_id, manager_id)
    VALUES
        ('Jon', 'Smith', 1, NULL),
        ('Dale', 'Johnson', 2, 1),
        ('Nancy', 'Wheeler', 3, NULL),
        ('Michael', 'Chandler', 4, 3),
        ('Jonathan', 'Jones', 5, NULL),
        ('Emily', 'Willis', 6, NULL),
        ('Daniel', 'Rodriguez', 7, 6);