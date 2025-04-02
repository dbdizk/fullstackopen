import { useState } from 'react'

const Display = props => <div>{props.value}</div>

const Button = (props) => (
  <button onClick={props.onClick}>
    {props.text}
  </button>
)

const App = () => {
  const [goodReviews, setGoodValue] = useState(0)
  const [neutralReviews, setNeutralValue] = useState(0)
  const [badReviews, setBadValue] = useState(0)

  const setToGood = newValue => {
    console.log('value now', newValue)
    setGoodValue(newValue)
  }

  const setToNeutral = newValue => {
    console.log('value now', newValue)
    setNeutralValue(newValue)
  }

  const setToBad = newValue => {
    console.log('value now', newValue)
    setBadValue(newValue)
  }

  return (
    <div>
      <h1>Give feedback</h1>
      <Button onClick={() => setToGood(goodReviews + 1)} text="good" />
      <Button onClick={() => setToNeutral(neutralReviews + 1)} text="neutral" />
      <Button onClick={() => setToBad(badReviews + 1)} text="bad" />
  
      <h2>Statistics</h2>
      <Display value={`Good: ${goodReviews}`} />
      <Display value={`Neutral: ${neutralReviews}`} />
      <Display value={`Bad: ${badReviews}`} />
    </div>
  )
  
}

export default App
