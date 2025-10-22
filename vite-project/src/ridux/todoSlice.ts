import { createSlice} from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit';

type Todo = {
    id: string;
  Title: string;
  Discription: string;
  isImportant: boolean;
  isDone: boolean;
  isToday: boolean;
};

const initialState: Todo[] = [];

const todoSlice = createSlice({
  name: 'todos',
  initialState,
  reducers: {
    addToDo: (state, action: PayloadAction<Todo>) => {
      state.push(action.payload);
    },
    deleteToDo: (state, action: PayloadAction<number>) => {
      return state.filter(todo => todo.id !== action.payload.toString());
    },
  },
});

export const { addToDo, deleteToDo } = todoSlice.actions;
export default todoSlice.reducer;
