import { useState, useEffect } from 'react'

const CAT_ENDPOINT_IMAGE_URL = 'https://catfact.ninja/fact'

export function App() {
  const [fact, setFact] = useState('lorem ipsum cat fact whatever')

  useEffect(() => {
    async function peticion() {
      fetch(CAT_ENDPOINT_IMAGE_URL)
        .then(res => res.json())
        .then(data => {
          const { fact } = data
          setFact(fact)

          const firstWord = fact.split(' ')[0]
          console.log(firstWord)
        })
    }

    peticion()
  }, [])

  return (
    <>
      <h1>Aplicacion de gatos</h1>
      <p>{fact}</p>
    </>
  )
}
