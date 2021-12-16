import React from 'react'
import { Button } from 'antd'
import { useDispatch } from 'react-redux'
import { removeNotes } from '../features/noteSclice'

interface NotesCardTypes {
  name: string
  index: number
}

export default function NotesCard({ name, index }: NotesCardTypes) {
  const dispatch = useDispatch()
  return (
    <div className='note-card-container'>
      {name}
      <Button
        size='small'
        type='primary'
        danger
        onClick={() => {
          dispatch(removeNotes(index))
        }}
      >
        Delete
      </Button>
    </div>
  )
}
