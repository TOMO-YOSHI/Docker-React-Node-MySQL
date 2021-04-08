# Docker-React-Node-MySQL

This is a basic template of full-stack project using technology bellow.

API -> NodeJS, ExpressJS

Client -> ReactJS(CRA)

Databasse -> MySQL

Environment -> Docker

## Set up

To set up this project, please create .env file in the api directory. And the content of .env file should be like following.
***********
DB_HOST=db

DB_USER=user

DB_PASS=password

DB_NAME=docker_test

Environment variables are defined in the docker-compose.yml file. The environment viriables should be chaged when you chage environment viriables in the docker-compose.yml file.