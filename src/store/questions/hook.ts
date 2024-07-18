import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../store";
import { selectAnswers, selectQuestions } from "./questions.slice";
import { updateScore, selectLeaderboardData } from "./leaderboard.slice";
import { useSelectUser } from "../auth/hooks";
import { Alert } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { LeaderboardScreenNavigationProp } from "../../navigation/types";

export const useSelectQuestions = () => {
         return useSelector((state: RootState) => selectQuestions(state));
};
       
export const useSelectAnswers = () => {
         return useSelector((state: RootState) => selectAnswers(state));
};
       
export const useSelectQuestionsFrom = () => {
        const answers = useSelectAnswers()
        const user = useSelectUser()
        const questions = useSelectQuestions();
        const dispatch = useDispatch();
        const navigation = useNavigation<LeaderboardScreenNavigationProp>();
        const checkedAnswerIndex = (id: number) : number=>{
                const answerIndex = answers[id];
                         if (answerIndex !== undefined) {
                                  return answerIndex               
                         }
                         return -1
       }
       const submit = () => {
                let totalScore = 0;
                questions.forEach((question) => {
                        const userAnswerIndex = answers[question.id];
                        if (userAnswerIndex !== undefined) {
                                if (userAnswerIndex === question.correctAnswerIndex) {
                                        totalScore += question.score;
                                }
                        }
                });
                const playerId = user.id ?? '';
                const playerName = user.name ?? '';
                dispatch(updateScore({ id: playerId, score: totalScore, name: playerName }));
                Alert.alert(
                        'สำเร็จ',
                        `คะแนนที่ได้ ${totalScore}`,
                        [
                          {
                            text: 'ยกเลิก',
                            onPress: () => console.log('Cancel Pressed'),
                            style: 'cancel',
                          },
                          { text: 'ผล', onPress: () => 
                          {
                                navigation.navigate('Leaderboard')
                          }
                           },
                        ],
                        { cancelable: false }
                      );
                  

       }
        return { checkedAnswerIndex,submit  }
};
       
export const useSelectorLeaderboard = () => {
        const leaderboardData = useSelector(selectLeaderboardData);
        const user = useSelectUser()
        return leaderboardData.map(v=>(
                {
                        ...v,
                        isU:user.id == v.id
                }
        ))
};
      
