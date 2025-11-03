import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import Onboarding from 'react-native-onboarding-swiper';
import { Color, Font, FontSize } from '../../theme';
import NextButton from '../../components/onboading/NextButton';
import SkipButton from '../../components/onboading/SkipButton';
import DoneButton from '../../components/onboading/DoneButton';

const OnboardingScreen = () => {
  return (
    <Onboarding
      SkipButtonComponent={SkipButton}
      NextButtonComponent={NextButton}
      DoneButtonComponent={DoneButton}
      bottomBarColor={Color.white}
      titleStyles={styles.title}
      subTitleStyles={styles.subTitle}
      pages={[
        {
          backgroundColor: Color.white,
          image: <View style={styles.imageBox} />,
          title: 'Welcome',
          subtitle: 'Get started with Synapto AI!',
        },
        {
          backgroundColor: Color.white,
          image: <View style={styles.imageBox} />,
          title: 'Smart Features',
          subtitle: 'Powerful tools to simplify your work.',
        },
        {
          backgroundColor: Color.white,
          image: <View style={styles.imageBox} />,
          title: 'Let’s Begin',
          subtitle: 'Start exploring now!',
        },
      ]}
    />
  );
};

export default OnboardingScreen;

const styles = StyleSheet.create({
  imageBox: {
    width: 150,
    height: 150,
    backgroundColor: '#ddd',
    borderRadius: 75,
  },
  title: {
    fontFamily: Font.ExtraBold,
    fontSize: FontSize.xxl,
  },
  subTitle: {
    fontFamily:Font.Bold,
    fontSize:FontSize.lg
  },
});
