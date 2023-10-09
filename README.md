# CSV-to-JSON-Converter-API
In this project, the aim is to build a robust API that converts CSV files into JSON data structures and efficiently stores them in a PostgreSQL database. The API will be developed using either Express.js,  providing a flexible and user-friendly interface for handling large volumes of CSV data. 


CSV to JSON Conversion:
![image](https://github.com/Arbazkhan767/CSV-to-JSON-Converter-API/assets/68524549/2f96b401-77de-4774-b714-7417012852a8)

The API will accept CSV files as input, with each row in the CSV representing a distinct object.
The CSV file will include fields, and complex properties will be denoted using dot (.) separators.
Mandatory properties, such as name.firstName, name.lastName, and age, will be specified at the beginning of each record.
The API will parse the CSV file and convert it into a list of JSON objects.
Complex properties will be structured accordingly within the JSON objects.
