const BASE_URL = 'http://localhost:2100/v1/'

const ajax = (url, data = null) => {
  return new Promise((resolve, reject) => {
    const xhr = new XMLHttpRequest()
    xhr.open('POST', BASE_URL + url, true)
    xhr.setRequestHeader('Content-Type', 'application/json; charset=utf-8')
    xhr.onload = () => resolve(JSON.parse(xhr.responseText))
    xhr.onerror = () => reject(new Error(xhr.responseText))
    xhr.send(JSON.stringify(data))
  })
}

const setError = (message) => console.error(message)

const setURL = (url) => {
  const aHref = document.createElement('a')
  aHref.href = url.toString()
  aHref.innerText = 'Baixe o PDF'

  const txtURL = document.getElementById('text-url')
  while (txtURL.children.item(0)) txtURL.children.item(0).remove()

  txtURL.appendChild(aHref)
}

const getFormData = () => {
  const nome = document.getElementById('txtNome').value
  return { nome }
}

const onMakePDFClick = () =>
  ajax('pdf', getFormData())
    .then(({ url }) => setURL(url))
    .catch((error) => setError(error.message))
