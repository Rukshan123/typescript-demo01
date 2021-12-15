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
  },
})

export const { addNotes } = notesSlice.actions
export default notesSlice.reducer
