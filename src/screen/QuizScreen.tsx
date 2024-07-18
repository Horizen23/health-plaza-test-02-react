import React from 'react';
import { View, ScrollView, Button, StyleSheet } from 'react-native'; // Import Button component from react-native
import { useDispatch } from 'react-redux';
import QuestionComponent from '../component/Question';
import { useSelectQuestions, useSelectQuestionsFrom } from '../store/questions/hook';
import { checkedAnswer } from '../store/questions/questions.slice';

const QuizScreen: React.FC = () => {
  const questions = useSelectQuestions();
  const dispatch = useDispatch();
  const { checkedAnswerIndex, submit } = useSelectQuestionsFrom();

  const handleSelectAnswer = (questionId: number, answerIndex: number) => {
    dispatch(checkedAnswer({questionId: questionId, answerIndex:answerIndex})); 
    console.log(`Selected answer ${answerIndex} for question ${questionId}`);
  };

  const handleSubmitQuiz = () => {
    submit()
    console.log('Answers submitted');
  };

  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContent}>
        {questions.map((question, index) => (
          <QuestionComponent
            key={question.id}
            number={index + 1}
            checkedIndex={checkedAnswerIndex(question.id)}
            question={question}
            onSelectAnswer={(answerIndex) => handleSelectAnswer(question.id, answerIndex)}
          />
        ))}
      </ScrollView>
      <View style={styles.buttonContainer}>
        <Button title="Submit Answers" onPress={handleSubmitQuiz} />
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    position: 'relative',
  },
  scrollContent: {
    flexGrow: 1,
    // paddingVertical: 20,
    padding:20,
    paddingBottom:120,
  },
  buttonContainer: {
    position: 'absolute',
    bottom: 20,
    left: 20,
    right: 20,
    backgroundColor: '#ffffff',
    borderRadius: 8,
    shadowColor: '#000000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 2,
    elevation: 3,
    paddingVertical: 10,
  },
});

export default QuizScreen;
