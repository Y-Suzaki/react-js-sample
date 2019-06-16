## Set Up
```
npm install -g json-server
```

## Create Json File for json-server
```
{
  "sites": [
    {
      "id": 1,
      "todo": "React basis implements"
    },
    {
      "id": 2,
      "todo": "React material ui"
    },
    {
      "id": 3,
      "todo": "Access rest api to json server"
    }
  ]
}
```

## Run json-server
```
json-server --watch db.json -p 8080
```

## Rest API
### GET in Case of curl
```
curl http://localhost:3000/sites --silent
curl http://localhost:3000/sites/1 --silent
```

### POST in Case of curl
```
curl -X POST -d '{"todo": "test"}' -H 'Content-Type: application/json' http://localhost:3000/sites --silent
```

### PUT in Case of curl
```
curl -X PUT -d '{"todo": "test-new"}' -H 'Content-Type: application/json' http://localhost:3000/sites/4 --silent
```

### DELETE in Case of curl
```
curl -X DELETE -H 'Content-Type: application/json' http://localhost:3000/sites/4 --silent
```