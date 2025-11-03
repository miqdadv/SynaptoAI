import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React from 'react';
import { Color, FontSize } from '../../theme';

const NextButton = ({ ...props }) => {
  return (
    <TouchableOpacity style={styles.nextButton} {...props}>
      <Text style={styles.nextText}>Next</Text>
    </TouchableOpacity>
  );
};

export default NextButton;

const styles = StyleSheet.create({
  nextButton: {
    marginRight: 20,
    backgroundColor: Color.blue,
    paddingHorizontal: 20,
    paddingVertical: 8,
    borderRadius: 20,
  },
  nextText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize:FontSize.md
  },
});
