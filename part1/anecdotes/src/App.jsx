import { useState } from 'react'

const Anecdote = ({quote}) => <p>{quote}</p>
const Button = ({onClick, text}) => <button onClick = {onClick}>{text}</button>

const App = () => {
  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.',
    'The only way to go fast, is to go well.'
  ]
  const [selected, setSelected] = useState(0)
  const [votes, setVotes] = useState(new Array(anecdotes.length).fill(0))
  const [most, setMost] = useState(null)

  const newAnecdote = () => {
    const rand = Math.floor(Math.random() * anecdotes.length)
    setSelected(rand)
  }

  const voteUp = () => {
    const newVote = [...votes]
    newVote[selected]+=1
    setVotes(newVote)
    if(most == null || newVote[selected] > votes[most]){
      setMost(selected)
    }
  }

  return (
    <div>
      <h1>Anecdote of the day</h1>
      {/* anecdote here */}
      <Anecdote quote = {anecdotes[selected]}/>
      <p>has {votes[selected]} votes</p>

      {/* anecdote buttons here */}
      <Button onClick = {voteUp} text = {'vote'}/>
      <Button onClick = {newAnecdote} text = {'next anecdote'} />
      <h1>Anecdote with most votes</h1>
      <Anecdote quote = {anecdotes[most]}/>
      <p>has {votes[most]} votes</p>


    </div>
  )
}

export default App