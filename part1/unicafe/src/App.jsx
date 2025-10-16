import { useState } from 'react'

const Button = ({onClick, text}) =><button onClick = {onClick}>{text}</button>

const StatisticLine = ({text, num}) => {
  if (text == 'positive') {
    return (
      <tr>
        <td>{text}</td>
        <td>{num}%</td>
      </tr>

    )
  } else {
    return (
      <tr>
        <td>{text}</td>
        <td>{num}</td>
      </tr>
    )
  }
}

const Statistics = ({good, neutral, bad}) => {
  const total = good+neutral+bad;
  const avg = good-bad/total
  const positive = good/total

  if (total > 0) {
      return (
        <table>
          <tbody>
            <StatisticLine text = 'good' num = {good}/>
            <StatisticLine text = 'neutral' num = {neutral}/>
            <StatisticLine text = 'bad' num = {bad}/>
            <StatisticLine text = 'average' num = {avg}/>
            <StatisticLine text = 'positive' num = {positive}/>     
          </tbody>
   
        </table>
      )
  } else {
    return (
      <p>No feedback given</p>
    )
    
  }

}

const StatCount = ({text, stat}) => {
  if (text == 'positive') {
    return(
      <p>{text} {stat}%</p>
    )
  }else {
    return(
      <p>{text} {stat}</p>
    )
  }

} 

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const [total, setTotal] = useState(0)
  const [avg, setAvg] = useState(0.00)
  const [positive, setPositive] = useState(0.00)

  const handleGood = () => {
    console.log('good up')
    setGood(good+1)
    setTotal(total+1)
    setAvg((good-bad)/total)
    setPositive(good/total)
  }
  const handleNeutral = () => {
    console.log('neutral up')
    setNeutral(neutral+1)
    setTotal(total+1)
    setAvg((good-bad)/total)
    setPositive(good/total)
  }
  const handleBad = () => {
    console.log('bad up')
    setBad(bad+1)
    setTotal(total+1)
    setAvg((good-bad)/total)
    setPositive(good/total)
  }

  return (
    <div>

      {/* give feedback title */}
      <h1>give feedback</h1>
      {/* buttons */}
      <Button onClick = {handleGood} text = 'good'></Button>
      <Button onClick = {handleNeutral} text = 'neutral'></Button>
      <Button onClick = {handleBad} text = 'bad'></Button>
      {/* statistics title*/}
      <h2>statistics</h2>
      {/* states in <p> tag */}
      <Statistics good = {good} neutral = {neutral} bad = {bad}/>

    </div>
  )
}

export default App