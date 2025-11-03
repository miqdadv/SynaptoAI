import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { FontSize } from '../../theme'

const SkipButton = ({...props}) => {
  return (
 <TouchableOpacity style={styles.skipButton} {...props}>
     <Text style={styles.skipText}>Skip</Text>
   </TouchableOpacity>
  )
}

export default SkipButton

const styles = StyleSheet.create({
    skipButton: {
    marginLeft: 20,
  },
  skipText: {
    fontSize:FontSize.md,
    color:'grey',
    fontWeight: 'bold',
  },
})