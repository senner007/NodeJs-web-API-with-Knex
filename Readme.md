
### Docker Postgres container run
docker run --name some-postgres-db -p 5432:5432 -e POSTGRES_DB=todo_db -e POSTGRES_PASSWORD=mysecretpassword -d postgres

### start stopped container
docker container start some-postgres-db

### execuse postgres command in container 
docker exec -it some-postgres-db psql -U postgres

### use db
\c <database_name>

### show tables
\d