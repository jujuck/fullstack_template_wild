CREATE TABLE Categories (
    category_id INT PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(255) NOT NULL
);

CREATE TABLE Status (
    status_id INT PRIMARY KEY AUTO_INCREMENT,
    description VARCHAR(255) NOT NULL
);

CREATE TABLE Courses (
    course_id INT PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(255) NOT NULL,
    category_id INT,
    status_id INT,
    quantity INT,
    unit VARCHAR(50),
    FOREIGN KEY (category_id) REFERENCES Categories(category_id),
    FOREIGN KEY (status_id) REFERENCES Status(status_id)
);

INSERT INTO Categories (name) VALUES 
('Fruits'), 
('Légumes'), 
('Produits Laitiers'), 
('Viandes');

INSERT INTO Status (description) VALUES 
('En attente'), 
('En cours'), 
('Terminée');

INSERT INTO Courses (name, category_id, status_id, quantity, unit) VALUES 
('Pommes', 1, 1, 5, 'kg'),
('Lait', 3, 2, 2, 'litres'),
('Carottes', 2, 1, 3, 'kg'),
('Bananes', 1, 1, 6, 'kg'),
('Yaourt', 3, 2, 10, 'pièces'),
('Poulet', 4, 1, 2, 'kg'),
('Fromage', 3, 2, 1, 'kg'),
('Poivrons', 2, 1, 4, 'pièces'),
('Tomates', 2, 1, 5, 'kg'),
('Oranges', 1, 1, 4, 'kg'),
('Beurre', 3, 2, 2, 'plaquettes'),
('Poisson', 4, 1, 1, 'kg'),
('Poires', 1, 1, 3, 'kg'),
('Laitue', 2, 1, 2, 'pièces'),
('Crème fraîche', 3, 2, 3, 'pots');
