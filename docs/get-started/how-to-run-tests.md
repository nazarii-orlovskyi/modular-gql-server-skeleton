## Як запустити тести
1. Зайти в нодівський докер
```
docker exec -it modular-gql-node sh
```
2. Виконати одну з наведених нижче команд:
    - юніт тести
    ```
    npm start test:unit
    ```
    - юніт тести в watch режимі
    ```
    npm start test:unit:watch
    ```
    - інтеграційні тести
    ```
    npm start test:integration
    ```
    - інтеграційні тести в watch режимі
    ```
    npm start test:integration:watch
    ```