import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import LottieView from 'lottie-react-native';
import { Animations } from '../../assets';
import { Fonts, FontSizes } from '../../theme';

const SplashScreen = () => {
  return (
    <View style={styles.container}>
      <LottieView
        source={Animations.splash}
        style={styles.animation}
        autoPlay
      />
      <Text style={styles.text}>Synapto AI</Text>
    </View>
  );
};

export default SplashScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  animation: {
    height: 250,
    width: 250,
  },
  text: {
    fontSize:FontSizes.xxl,
    fontFamily:Fonts.Primary
  },
});
