import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { QuestionState, Question } from './types';
import { RootState } from '../store';

const initialState: QuestionState = {
         questions: [
         ],
         answers: {},
         totalScore: 0

};

const questionsSlice = createSlice({
         name: 'questions',
         initialState,
         reducers: {
                  setQuestions(state, action: PayloadAction<Question[]>) {
                           state.questions = action.payload;
                  },
                  checkedAnswer(state, action: PayloadAction<{ questionId: number; answerIndex: number }>) {
                           const { questionId, answerIndex } = action.payload;
                           if (!!state.answers[questionId]) {
                                    delete state.answers[questionId] 
                           }else {
                                    state.answers[questionId] = answerIndex;
                           }
                  },
                  calculateScores(state) {
                           let totalScore = 0;

                           state.questions.forEach((question) => {
                                    const userAnswerIndex = state.answers[question.id];
                                    if (userAnswerIndex !== undefined) {
                                             if (userAnswerIndex === question.correctAnswerIndex) {
                                                      totalScore += question.score;
                                             }
                                    }
                           });

                           state.totalScore = totalScore;
                  },
                  resetAnswers(state) {
                           state.answers = {};
                           state.totalScore = 0;
                  },

         },
});

export const selectQuestions = (state: RootState) => state.questions.questions;
export const selectAnswers = (state: RootState) => state.questions.answers;

export const { setQuestions, calculateScores, checkedAnswer } = questionsSlice.actions;
export default questionsSlice.reducer;

