/* eslint-disable @typescript-eslint/no-unused-vars */
import { useState } from 'react'

export default function TextForm() {
  const [list, setList] = useState<string[]>([])
  const [newItem, setNewItem] = useState('')

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()

    setList(prev => [...prev, newItem])
    setNewItem('')
  }

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setNewItem(event.target.value)
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <label htmlFor="newItem">New Item:</label>
        <input type="text" name="newItem" id="newItem" value={newItem}           
        onChange={handleChange}/>
        <button>Submit</button>
      </form>
      <h2 id="list">List: </h2>
      <ul aria-labelledby="list">
        {list.map((listItem, index) => (
          <li key={index}>{listItem}</li>
        ))}
      </ul>
    </>
  )
}
