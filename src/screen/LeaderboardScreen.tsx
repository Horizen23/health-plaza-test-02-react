import React from 'react';
import { View, Text, StyleSheet, FlatList, ListRenderItem } from 'react-native';
import { useSelectorLeaderboard } from '../store/questions/hook';

const LeaderboardScreen: React.FC = () => {
  const leaderboardData = useSelectorLeaderboard();

  const renderLeaderboardItem:ListRenderItem<(typeof leaderboardData)[number]>  = ({ item }) => (
    <View style={[item.isU ? styles.itemContainerActive : styles.itemContainer]}>
      <Text style={styles.itemText}>{`${item.name}: ${item.score} `}</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Leaderboard</Text>
      <FlatList
        data={leaderboardData}
        renderItem={renderLeaderboardItem}
        keyExtractor={(item) => item.id}
        style={styles.list}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  list: {
    flex: 1,
  },
  itemContainerActive: {
    padding: 16,
    borderWidth: 1,
    borderColor: '#33b0dd',
  },
  itemContainer: {
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  itemText: {
    fontSize: 18,
  },
});

export default LeaderboardScreen;
