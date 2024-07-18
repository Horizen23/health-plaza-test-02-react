import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { Question } from '../store/questions/types';

interface Props {
  question: Question;
  checkedIndex: number;
  number: number;
  onSelectAnswer: (index: number) => void;
}

const QuestionComponent: React.FC<Props> = ({ number, question, onSelectAnswer, checkedIndex }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.questionText}>{`${number}. ${question.question}`}</Text>
      <View style={styles.answersContainer}>
        {question.answers.map((answer, index) => (
          <TouchableOpacity
            key={index}
            style={[
              styles.answerOption,
              checkedIndex === index ? styles.checkedOption : null,
            ]}
            onPress={() => onSelectAnswer(index)}
          >
            <View style={styles.checkbox}>
              {checkedIndex === index && <View style={styles.checkedMark} />}
            </View>
            <Text style={styles.answerText}>{answer}</Text>
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 16,
    marginBottom: 16,
    borderWidth: 1,
    borderRadius: 8,
  },
  questionText: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 12,
  },
  answersContainer: {
    marginTop: 8,
  },
  answerOption: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 8,
  },
  checkedOption: {
    backgroundColor: '#e0e0e0', // Example of a checked background color
  },
  checkbox: {
    width: 24,
    height: 24,
    borderWidth: 1,
    borderColor: '#999',
    borderRadius: 4,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 8,
  },
  checkedMark: {
    width: 12,
    height: 12,
    backgroundColor: '#999',
    borderRadius: 2,
  },
  answerText: {
    fontSize: 16,
  },
});

export default QuestionComponent;
