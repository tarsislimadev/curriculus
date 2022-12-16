FROM node:lts-alpine

ENV API_URL=http://localhost:2100/v1

ENV DBURL=postgres://pdf:pdf@postgres:5432/pdf

WORKDIR /app

COPY . .

CMD npm start
