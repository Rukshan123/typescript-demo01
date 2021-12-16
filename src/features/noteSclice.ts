import { createSlice, PayloadAction } from '@reduxjs/toolkit'

interface NoteState {
  value: string[]
}

const initialState: NoteState = {
  value: [],
}

export const notesSlice = createSlice({
  name: 'notes',
  initialState,
  reducers: {
    addNotes: (state, action: PayloadAction<string>) => {
      state.value.push(action.payload)
    },
    removeNotes: (state, action: PayloadAction<number>) => {
      state.value.splice(action.payload, 1) //how many elements need o delete
    },
  },
})

export const { addNotes, removeNotes } = notesSlice.actions
export default notesSlice.reducer
