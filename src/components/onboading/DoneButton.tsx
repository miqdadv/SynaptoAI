import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { FontSize} from '../../theme'

const DoneButton = () => {
  return (
    <TouchableOpacity style={styles.doneButton}>
       <Text style={styles.doneText}>Done</Text>
     </TouchableOpacity>
  )
}

export default DoneButton

const styles = StyleSheet.create({
    doneButton: {
    marginRight: 20,
    backgroundColor: '#28a745',
    paddingHorizontal: 20,
    paddingVertical: 8,
    borderRadius: 20,
  },
  doneText: {
    fontSize:FontSize.md,
    color: 'white',
    fontWeight: 'bold',
  },
})