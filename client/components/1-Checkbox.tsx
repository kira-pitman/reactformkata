/* eslint-disable @typescript-eslint/no-unused-vars */
import { useState } from 'react'

export default function CheckboxForm() {
  const [list, setList] = useState<boolean[]>([])
  const [isChecked, setIsChecked] = useState(false)

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()

    setList([...list, isChecked])
  }

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setIsChecked(event.target.checked)
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <label htmlFor="checkbox">Is Checked:</label>
        <input
          type="checkbox"
          name="checkbox"
          id="checkbox"
          checked={isChecked}
          onChange={handleChange}
        />
        <button>Submit</button>
      </form>

      <h2 id="list">List: </h2>
      <ul aria-labelledby="list">
        {list.map((listItem, index) => (
          <li key={index}>{listItem.toString()}</li>
        ))}
      </ul>
    </>
  )
}