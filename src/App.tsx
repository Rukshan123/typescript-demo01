import React, { useState } from 'react'
import './App.css'
import { Button, Input } from 'antd'
import { useSelector, useDispatch } from 'react-redux'
import { RootState } from './app/store'
import NotesCard from './components/NotesCard'
import { addNotes } from './features/noteSclice'

function App() {
  const notes = useSelector((state: RootState) => state.notes.value)

  const [noteNameInput, setNoteNameInput] = useState('')

  const dispatch = useDispatch()

  const handleAddNotes = () => {
    if (!noteNameInput) return
    dispatch(addNotes(noteNameInput))
    setNoteNameInput('')
  }

  return (
    <div className='App'>
      <div className='note-input-container'>
        <h5 className='note-header'>Add Note</h5>
        <Input
          placeholder='Write Note Here'
          value={noteNameInput}
          onChange={(e) => setNoteNameInput(e.target.value)}
        />
        <Button onClick={handleAddNotes} type='primary'>
          Add
        </Button>
      </div>
      <div className='container'>
        <div className='note-container'>
          <div>
            <div className='note-cards-container'>
              {notes.map((name) => {
                return <NotesCard name={name} />
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
