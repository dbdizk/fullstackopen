import { useState } from 'react'

const Button = ({ onClick, text }) => (
  <button onClick={onClick}>
    {text}
  </button>
)

const StatisticLine = ({ label, value }) => (
  <tr>
    <td>{label}</td>
    <td>{value}</td>
  </tr>
)

const Statistics = ({ good, neutral, bad }) => {
  const total = good + neutral + bad

  if (total === 0) {
    return <div>No feedback given</div>
  }

  const average = ((good * 1 + bad * -1) / total).toFixed(2)
  const positive = ((good / total) * 100).toFixed(1) + ' %'

  return (
    <table>
      <tbody>
        <StatisticLine label="Good" value={good} />
        <StatisticLine label="Neutral" value={neutral} />
        <StatisticLine label="Bad" value={bad} />
        <StatisticLine label="All" value={total} />
        <StatisticLine label="Average" value={average} />
        <StatisticLine label="Positive" value={positive} />
      </tbody>
    </table>
  )
}

const App = () => {
  const [goodReviews, setGoodValue] = useState(0)
  const [neutralReviews, setNeutralValue] = useState(0)
  const [badReviews, setBadValue] = useState(0)

  return (
    <div>
      <h1>Give feedback</h1>
      <Button onClick={() => setGoodValue(goodReviews + 1)} text="good" />
      <Button onClick={() => setNeutralValue(neutralReviews + 1)} text="neutral" />
      <Button onClick={() => setBadValue(badReviews + 1)} text="bad" />

      <h2>Statistics</h2>
      <Statistics good={goodReviews} neutral={neutralReviews} bad={badReviews} />
    </div>
  )
}

export default App
