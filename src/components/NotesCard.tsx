import React from 'react'
import { Button } from 'antd'

interface NotesCardTypes {
  name: string
}

export default function NotesCard({ name }: NotesCardTypes) {
  return (
    <div className='note-card-container'>
      {name}
      <Button size='small' type='primary' danger>
        Delete
      </Button>
    </div>
  )
}
