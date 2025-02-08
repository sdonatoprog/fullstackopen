import { useState } from 'react'

const Button = (props) => (
  <button onClick={props.onClick}>
    {props.text}
  </button>
)

const StatisticLine = (props) => (
  <tr>
    <td>{props.name} </td>
    <td>{props.value}</td>
  </tr>
)

const Statistics = (props) => {
  if (props.good === 0 && props.bad === 0 && props.neutral === 0)
  {
    return (
      <p>No feedback given</p>
    )
  }
  return(
    <table>
      <tbody>
      <StatisticLine name="Good" value={props.good}/>
      <StatisticLine name="Neutral" value={props.neutral}/>
      <StatisticLine name="Bad" value={props.bad}/>
      <StatisticLine name="All" value={props.good + props.bad + props.neutral}/>
      <StatisticLine name="Average" value={(props.good - props.bad) / (props.good + props.bad + props.neutral)}/>
      <StatisticLine name="Positive" value={(100 * props.good / (props.good + props.bad + props.neutral)) + " %"}/>
      </tbody>
    </table>
  )
}

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const handleGood = () => {
    setGood(good + 1)
  }

  const handleBad = () => {
    setBad(bad + 1)
  }

  const handleNeutral = () => {
    setNeutral(neutral + 1)
  }

  return (
    <>
      <h1>Give Feedback</h1>
      <Button onClick={handleGood} text="Good"/>
      <Button onClick={handleNeutral} text="Neutral"/>
      <Button onClick={handleBad} text="Bad"/>
      <Statistics good={good} bad={bad} neutral={neutral}/>
    </>
  )
}

export default App