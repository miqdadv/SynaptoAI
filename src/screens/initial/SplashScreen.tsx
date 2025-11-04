import { StyleSheet, Text, View } from 'react-native';
import React, { useEffect } from 'react';
import LottieView from 'lottie-react-native';
import { Animations } from '../../assets';
import { Font, FontSize } from '../../theme';
import { useNavigation } from '@react-navigation/native';



const SplashScreen = () => {
  const navigation = useNavigation<any>();

  const handleNavigation = () => {
  navigation.navigate('Onboarding');
}

  return (
    <View style={styles.container}>
      <LottieView
        source={Animations.splash}
        style={styles.animation}
        autoPlay
        loop={false}
        onAnimationFinish={handleNavigation}
      />
      <Text style={styles.text}>Synapto</Text>
    </View>
  );
};

export default SplashScreen;

const styles = StyleSheet.create({
  container: {
    backgroundColor:'white',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  animation: {
    height: 290,
    width: 290,
  },
  text: {
    fontSize: FontSize.xxl,
    fontFamily: Font.Secondary,
  },
});
