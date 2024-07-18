
export interface Question {
  id: number;
  question: string;
  answers: string[];
  correctAnswerIndex: number;
  score: number; 
}

export interface QuestionState {
  questions: Question[];
  answers: Record<string, number>;
  totalScore: number
}
