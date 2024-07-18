import { StackNavigationProp } from "@react-navigation/stack";

export type RootStackParamList = {
         Quiz: undefined;
         Leaderboard: undefined;
};

export type QuizScreenNavigationProp = StackNavigationProp<RootStackParamList, 'Quiz'>;
export type LeaderboardScreenNavigationProp = StackNavigationProp<RootStackParamList, 'Leaderboard'>;
