import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import Onboarding from 'react-native-onboarding-swiper';
import { Color, Font, FontSize } from '../../theme';
import NextButton from '../../components/onboading/NextButton';
import SkipButton from '../../components/onboading/SkipButton';
import DoneButton from '../../components/onboading/DoneButton';
import LottieView from 'lottie-react-native';
import { Animations } from '../../assets';
import { useNavigation } from '@react-navigation/native';

const OnboardingScreen = () => {
  const navigation = useNavigation<any>();
  const handleNavigation = ()=>{
    console.log('ONDONE')
    navigation.navigate('AuthStack');
  }
  return (
    <Onboarding
      SkipButtonComponent={SkipButton}
      NextButtonComponent={NextButton}
      DoneButtonComponent={DoneButton}
      bottomBarColor={Color.white}
      titleStyles={styles.title}
      subTitleStyles={styles.subTitle}
      onDone={handleNavigation}
      onSkip={handleNavigation}
      pages={[
        {
          backgroundColor: Color.white,
          image: (
           <LottieView
            source={Animations.og1}
            autoPlay
            style={styles.animation1}
           />
          ),
          title: 'Meet Your Smart Assistant',
          subtitle: 'Ask, learn, and create — all in one place. Everything you need, right at your fingertips',
        },
        {
          backgroundColor: Color.white,
          image: (
           <LottieView
            source={Animations.og2}
            autoPlay
            style={styles.animation2}
           />
          ),
          title: 'Boost Your Productivity',
          subtitle: 'Let AI handle the tasks while you focus on what matters',
        },
        {
          backgroundColor: Color.white,
          image: (
           <LottieView
            source={Animations.og3}
            autoPlay
            style={styles.animation3}
           />
          ),
          title: 'Start the Conversation',
          subtitle: 'Experience the future of intelligent chat with Synapto AI',
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
    fontFamily: Font.Bold,
    fontSize: FontSize.xxl,
  },
  subTitle: {
    fontFamily:Font.Regular,
    fontSize:FontSize.xl
  },
  animation1:{
    height:120,
    width:120,
  },
   animation2:{
    height:130,
    width:130,
  },
   animation3:{
    height:110,
    width:110,
  }
});
