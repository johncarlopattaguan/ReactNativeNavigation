import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

const ExplorerScreen = () => {
  return (
    <View style={styles.container}>
      <Text>ExplorerScreen</Text>
      <Button
        title="Click Here"
        onPress={() => alert('Button Clicked')}
      />
    </View>
  );
};

export default ExplorerScreen

const styles = StyleSheet.create({
  container: {
    flex: 1, 
    alignItems: 'center', 
    justifyContent: 'center'
  }
})