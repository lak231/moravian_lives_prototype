// const api = './data.txt';

const data = {
  contacts: [
    {
      id: '0001',
      last: 'Boehler',
      first: 'Anton Peter',
      birthPlace: 'Philadelphia',
      birthPlaceCoord: [39.9526, -75.1652],
      birthDay: '10-26-1743',
      deathPlace: 'Bethlehem',
      deathPlaceCoord: [40.6259, -75.3705],
      deathDay: '12/9/1744',
      gender: 'male',
      maritalStatus: 'child',
      language: 'german'
    },
    {
      id: '0003',
      last: 'Okely',
      first: 'Joanna',
      birthPlace: 'Philadelphia',
      birthPlaceCoord: [39.9526, -75.1652],
      birthDay: '04-02-1715',
      deathPlace: 'Bethlehem',
      deathPlaceCoord: [40.6259, -75.3705],
      deathDay: '3/19/1745',
      gender: 'female',
      maritalStatus: 'married',
      language: 'german'
    },
    {
      id: '0008',
      last: 'Burnside',
      first: 'Rebecca (Becky)',
      birthPlace: 'Savannah',
      birthPlaceCoord: [32.0809, -81.0912],
      birthDay: '03-31-1740',
      deathPlace: 'Nazareth',
      deathPlaceCoord: [40.7404, -75.3096],
      deathDay: '8/1/1746',
      gender: 'female',
      maritalStatus: 'child',
      language: 'german'
    },
    {
      id: '0020',
      last: 'Brownfield',
      first: 'John',
      birthPlace: 'Greenwich',
      birthPlaceCoord: [51.4826, -0.0077],
      birthDay: '06-21-1714',
      deathPlace: 'Bethlehem',
      deathPlaceCoord: [40.6259, -75.3705],
      deathDay: '1752',
      gender: 'male',
      maritalStatus: 'married',
      language: 'english'
    }
  ]
}
//process.env.REACT_APP_CONTACTS_API_URL || 'http://localhost:5001'

// let token = localStorage.token
//
// if (!token)
//     token = localStorage.token = Math.random().toString(36).substr(-8)
//
// const headers = {
//     'Accept': 'application/json',
//     'Authorization': token
// }

export const getAll = () => data.contacts;

// export const remove = (contact) =>
//     fetch(`${api}/contacts/${contact.id}`, { method: 'DELETE', headers })
//         .then(res => res.json())
//         .then(data => data.contact)
//
// export const create = (body) =>
//     fetch(`${api}/contacts`, {
//         method: 'POST',
//         headers: {
//             ...headers,
//             'Content-Type': 'application/json'
//         },
//         body: JSON.stringify(body)
//     }).then(res => res.json())