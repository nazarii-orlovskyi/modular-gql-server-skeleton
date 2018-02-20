# Install npm dependencies
docker exec -it modular-gql-node \
    rm -rf ./node_modules && npm i

# Run db migrations
docker exec -it modular-gql-node \
    knex migrate:latest --env development

docker exec -it modular-gql-node \
    knex migrate:latest --env integration-test

# TODO: Create database for performance testing and load big data