import React from 'react'
import { useState, useEffect } from 'react'

export function Apifetch() {
  const [usuarios, setUsuarios] = useState([])
  let varFetch = "https://laboratorio-virtual-backend.onrender.com/api/users"
  function scrap() {
    fetch(varFetch, {
      method: 'GET',
      mode: 'no-cors',
      cache: 'default'
    })
      // .then((response) => {
      //   return response.json()
      // })
      .then((usuarios) => {
        console.log(usuarios)
      })
  }

  useEffect(() => {
    scrap()
  }, [])

  return (
    <div>
      <table border='1'>
        <thead>
          <tr>
            <th>Identificacion</th>
            <th>Primer Nombre</th>
          </tr>
        </thead>
        <tbody>
          {usuarios.map((art) => {
            return (
              <tr key={art.Identification}>
                <td>{art.First_name}</td>
              </tr>
            )
          })}
        </tbody>
      </table>
    </div>
  )
}
