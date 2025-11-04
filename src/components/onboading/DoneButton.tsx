import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { FontSize} from '../../theme'
import { useNavigation } from '@react-navigation/native'

const DoneButton = () => {
  const navigation = useNavigation<any>();
  const handleNavigation = ()=>{
    navigation.navigate('AuthStack')
  }
  return (
    <TouchableOpacity style={styles.doneButton} onPress={handleNavigation}>
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