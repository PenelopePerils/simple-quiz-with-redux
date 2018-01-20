import { StackNavigator } from 'react-navigation' // 1.0.0-beta.23

import {
  WelcomeScreen,
  HomeScreen,
  QuizScreen,
  ResultScreen,
} from './../screens'

const RootNavigator = StackNavigator({
  Welcome: {
    screen: WelcomeScreen,
    navigationOptions: {
      header: null,
    },
  },
  Home: {
    screen: HomeScreen,
    navigationOptions: {
      headerTitle: 'Home',
    },
  },
  Play: {
    screen: QuizScreen,
    navigationOptions: {
      headerTitle: "Let's play",
    },
  },
  Result: {
    screen: ResultScreen,
    navigationOptions: {
      headerTitle: "Your score",
    },
  },
});

export default RootNavigator