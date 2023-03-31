import { createSlice } from "@reduxjs/toolkit";
import { addQuizId } from "../topics/topicsSlice";

export const addQuizThunk = (payload) => {
    return (dispatch) => {
        dispatch(addQuiz(payload));
        dispatch(addQuizId({topicId: payload.topicId, quizId: payload.id}))

    }
}

export const quizSlice = createSlice({
    name: "quizzes",
    initialState: {
      quizzes: {}
    },
    reducers: {
      addQuiz: (state, action) => {
        const { id } = action.payload;
        state.quizzes[id] = action.payload;
      }
    }
  });

export const selectQuizzes = (state) => state.quizzes.quizzes;
export const { addQuiz } = quizSlice.actions;
export default quizSlice.reducer;