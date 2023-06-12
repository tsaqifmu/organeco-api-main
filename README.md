# Documentation

please include .env during deploy

## Endpoint
https://organeco-api.et.r.appspot.com/api/v1

## Register

- URL 
  - /auth/register

- Method
  - POST

- Request Body
  - `name` as `string`
  - `email` as `string`, must be unique
  - `password` as `string`, must be at least 8 characters

- Response
```json
{
  "error": false,
  "message": "User Created"
}
```


## Login

- URL 
  - /auth/login

- Method
  - POST

- Request Body
  - `email` as `string` 
  - `password` as `string`

- Response
```json
{
    "error": false,
    "message": "success",
    "data": {
        "userId": "6466d83c42c31c39bde01f42",
        "name": "oca",
        "email": "oca@gmail.com",
        "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY0NjZkODNjNDJjMzFjMzliZGUwMWY0MiIsImlhdCI6MTY4NDQ2NTk3NX0.seneRy4q2BuFMnf4FDR8U3oTTnQCN41vjyQd0CXvrfE"
    }
}
```

## Predict calculator

- URL 
  - /predict

- Method
  - POST

- Request Body
  - `crop_type` as `string`
  - `humidity` as `number`
  - `moisture` as `number`
  - `nitrogen` as `number`
  - `phosphorous` as `number`
  - `potassium` as `number`
  - `soil_type` as `string`
  - `temperature` as `number`

- Response
```json
{
  "error": false,
  "message": "Data added successfully"
}
```
