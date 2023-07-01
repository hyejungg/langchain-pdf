# langchain-pdf-server

## setup

- nodejs 18.x
- yarn
- redis-stack (vector store)

```bash
docker run -d --name redis-stack -p 6379:6379 -p 8001:8001 redis/redis-stack:latest

# You can use RedisInsight by pointing your browser to localhost:8001.
```

### usage

```bash
yarn install
yarn build
```

### api

> **Base URL : localhost:8080**

GET /

```
Welcome to Langchain-pdf!!
```

POST /file/embedding

- content type: multipart/form-data
- files
  - name: file

```
{
  "status": 201,
  "success": true,
  "message": "파일 임베딩 성공",
  "data": null
}
---------------------------------------------
{
  "status": 500,
  "success": false,
  "message": "서버 내부 오류"
}
```

POST /query/chat

- content type: application/json
- body
  - question

```
{
  "status": 200,
  "success": true,
  "message": "open ai 통해 쿼리 전송 성공",
  "data": {
    "content": "김혜정은 컴퓨터공학과를 나왔습니다."
  }
}
---------------------------------------------
{
  "status": 500,
  "success": false,
  "message": "서버 내부 오류"
}
```
