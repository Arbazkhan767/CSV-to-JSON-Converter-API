# CSV-to-JSON-Converter-API
In this project, the aim is to build a robust API that converts CSV files into JSON data structures and efficiently stores them in a PostgreSQL database. The API is developed using Express.js,  providing a flexible and user-friendly interface for handling large volumes of CSV data. 


CSV to JSON Conversion:
![image](https://github.com/Arbazkhan767/CSV-to-JSON-Converter-API/assets/68524549/2f96b401-77de-4774-b714-7417012852a8)

OUTPUT:-
![image](https://github.com/Arbazkhan767/CSV-to-JSON-Converter-API/assets/68524549/ca3d95d6-93be-45a4-a3f3-b3c461a498ae)


The API will accept CSV files as input, with each row in the CSV representing a distinct object.
The CSV file will include fields, and complex properties will be denoted using dot (.) separators.
Mandatory properties, such as name.firstName, name.lastName, and age, will be specified at the beginning of each record.
The API will parse the CSV file and convert it into a list of JSON objects.
Complex properties will be structured accordingly within the JSON objects.



Database Integration:

![image](https://github.com/Arbazkhan767/CSV-to-JSON-Converter-API/assets/68524549/1bb0e0c1-e63a-4dd3-87e2-62d80f1d4cf7)


Output in PostgreSQL:-
![image](https://github.com/Arbazkhan767/CSV-to-JSON-Converter-API/assets/68524549/ee4b0f3b-c940-416c-b644-0f6cc50fe51b)


The API will connect to a PostgreSQL database to store the converted JSON data.

Mandatory properties will be mapped to designated fields, while additional properties will be stored in the additional_info field as a JSON object.
Scalability and Performance:

The API is designed to handle large CSV files efficiently, supporting potentially over 50,000 records.
It implements data processing optimizations to minimize resource consumption during conversion and database insertion.


Age Distribution Report:
![image](https://github.com/Arbazkhan767/CSV-to-JSON-Converter-API/assets/68524549/5b47aa58-d66a-43db-887a-720fda8c6f4b)

After successfully uploading records to the PostgreSQL database, the API will calculate the age distribution of all users.
It will generate a detailed report and print it to the console.
The report will display the age groups and their corresponding percentage distribution, helping stakeholders gain insights into the user demographics.


Configurability:
![image](https://github.com/Arbazkhan767/CSV-to-JSON-Converter-API/assets/68524549/1491ce85-b52f-4ecf-9695-e9c85defd4ef)


The API will provide a configuration mechanism, allowing users to define the location of CSV files.
Configuration file is used for flexibility in specifying file paths and database connection details.
