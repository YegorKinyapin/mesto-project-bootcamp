const config = {
    baseUrl: 'https://mesto.nomoreparties.co/v1/wbf-cohort-13',
    headers: {
      authorization: '31626812-2bc6-470a-a9d7-7693009ae992',
      'Content-Type': 'application/json'
    }
  }
  
  function checkResponse(res) {
    if (res.ok) {
        return res.json();
    }
    return Promise.reject(`Ошибка: ${res.status}`);
  }

  export const getProfileInfo = () => {
    return fetch(`${config.baseUrl}/users/me`, {
        headers: config.headers
    })
    .then(checkResponse);
  }

  export const patchProfileInfo = (name, about) => {
    return fetch(`${config.baseUrl}/users/me`, {
        method: 'PATCH',
        headers: {
            authorization: '31626812-2bc6-470a-a9d7-7693009ae992',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            name: name,
            about: about
        })
    })
    .then(checkResponse)
  }

  export const getInitialCards = () => {
    return fetch(`${config.baseUrl}/cards `, {
        headers: config.headers
    })
    .then(checkResponse);
  }

  export function saveCards(name, link) {
    return fetch(`${config.baseUrl}/cards `, {
        headers: config.headers,
        method: 'POST',
        body: JSON.stringify({
            name: name,
            link: link
        })
    })
    .then(checkResponse)
  }

  export function likeCard(cardId) {
    return fetch(`${config.baseUrl}/cards/likes/${cardId}`, {
      headers: config.headers,
      method: 'PUT'
    })
    .then(checkResponse)
  }
  export function unlikeCard(cardId) {
    return fetch(`${config.baseUrl}/cards/likes/${cardId}`, {
      headers: config.headers,
      method: 'DELETE'
    })
    .then(checkResponse)
  }

   export function deleteCard(cardId) {
    return fetch(`${config.baseUrl}/cards/${cardId}`, {
      headers: config.headers,
      method: 'DELETE'
    })
    .then(checkResponse)
  }

  export function changeAvatar(avatar) {
    return fetch(`${config.baseUrl}/users/me/avatar`, {
      headers: config.headers,
      method: 'PATCH',
      body: JSON.stringify({
        avatar: avatar
      })
    })
    .then(checkResponse)
  }