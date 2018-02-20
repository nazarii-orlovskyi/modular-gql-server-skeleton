## Як підняти проект

1. Встановити docker та docker-compose.
2. В корені проекта необхідно виконати такі команди:
```
docker-compose up -d
bash ./build/development/install.sh
```

Тепер сервер доступний в браузері за адресою [http://localhost:8080/](http://localhost:8080/)

Інтерактивна консоль GraphiQL доступна за адресою [http://localhost:8080/graphiql/v1](http://localhost:8080/graphiql/v1)
