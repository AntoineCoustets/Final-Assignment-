# UCI Advanced Web Programming Final Assignment

Welcome to the  **UCI Web Project Final Assignement**'s README page 



## Module 2 Assignment

Module 2 entails ensuring a successful server start with "npm run start" and configuring it to serve an HTML file at the root ("/"). This HTML file includes links to static files and UI elements that trigger AJAX requests. The server needs to respond to different paths with JSON responses, varying based on request arguments. The front-end code is then displaying these responses, and a dynamic endpoint should utilize an exported function.

## Module 3 Assignment

The tasks for this Module 3 involve a sequence of steps for schema, seed, and queries. Firstly, when executed in order (schema.sql => seed.sql => queries.sql) using "psql," all the files should run successfully without errors. In the schema.sql file, it was necessary to include a minimum of four CREATE TABLE statements. Each table created should have an "id" column, or if it's a JOIN table, it should have two IDs from other tables. Furthermore, all non-JOIN tables should have at least three additional columns with meaningful names and data types. In the seed.sql file, there should be at least four INSERT statements, with at least one for each table, resulting in a minimum of two rows per table. Importantly, the seed data should be realistic, avoiding generic placeholders such as "foo" and "bar." Finally, in the queries.sql file, it's required to have at least four SELECT queries, with at least two of them involving JOIN operations across multiple tables. There should be no more than one query that selects "*", and the selections in the other queries should make logical sense, ensuring meaningful data retrieval.

## Module 4 Assignment

The tasks involve creating four types of endpoints: Create, Read, Update, and Delete. For the Create Endpoint, it should function to create a new record using the provided parameters, and it must return the new record's details in the form of a JSON object. Similarly, the Read Endpoint should perform a SELECT query using the provided parameter and return a JSON response with an array containing objects for each result row. The Update task necessitates executing the provided update through an UPDATE query on the record with the provided ID and returning a JSON response with { "success": true }. In the case of the Delete task, it should perform a DELETE query to delete the record with the given ID and return a JSON response with { "success": true }.

Furthermore, on the front-end, there should be user interface components (UI) that allow making AJAX requests to each of these four endpoints. The UI should effectively display the server's response. This display can be as straightforward as converting the received JSON into a string and alerting it, or it can involve more advanced front-end techniques like DOM manipulation.

## Final Module Assignment

This project involves several components, each contributing to the overall functionality and presentation of the clothes site. The database setup is supposed to include at least three logically divided migrations, such as tables, join tables, and constraints. Additionally, two seed files are required: one containing fake data with a minimum of two records for each table, and another for initializing the production site, focusing on essential records for site functionality. Knex-powered service functions should be implemented to facilitate site operations, interacting with the database.

An Express app has been created with a static file serving endpoint, enabling the delivery of static assets. The project's frontend, built with a framework, is functional and well-designed to provide a user-friendly presentation layer, which constitutes a significant portion of the project's assessment.