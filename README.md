# PDF API

Para geração de currículos em PDF. 

Prevemos gerar Trabalhos de Conclusão de Curso também.

## Stack

[Node.js](https://nodejs.org/en/)

## How to set it up

```
bash env/up.sh
```

## How to create Curricullum PDF file

```bash
curl -sL "http://curriculus/api/v1/curricullum/create" \
  -H "Content-Type: application/json" \
  --data-raw "{'header': {}, 'body': {}}" # fixme
```

## License

[MIT](./LICENSE)
