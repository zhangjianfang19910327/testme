/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import type {Node} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  Button,
  View,
  NativeModules,
  requireNativeComponent,
  Alert
} from 'react-native';
const RNTMap = requireNativeComponent('RNTMap');
import { WebView } from 'react-native-webview';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
const CalendarManager = NativeModules.CalendarManager;

const Tab = createBottomTabNavigator();
import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

const Section = ({navigation}): Node => {
  const isDarkMode = useColorScheme() === 'dark';
  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
    height: "100%",
  };
  return (
    <SafeAreaView style={backgroundStyle}>
    <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
    <Button
        title="Go to Details"
        onPress={() => navigation.navigate('Details')}
      />
       <Button
        title="Go to Maps"
        onPress={() => navigation.navigate('Maps')}
      />
  </SafeAreaView>
  );
};
const SettingsScreen = ({navigation}): Node => {
  const isDarkMode = useColorScheme() === 'dark';
  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
    height: "100%",
  };
  return (
    <SafeAreaView style={backgroundStyle}>
    <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
    <Button
        title="Go to Home"
        onPress={() => navigation.navigate('Home')}
      />
       <Button
        title="Go to Alert"
        onPress={() =>  
          CalendarManager.addEvent(
          'Birthday Party',
          '4 Privet Drive, Surrey',
          function(a,b){
            Alert.alert(a+''+b)
          })}
      />
  </SafeAreaView>
  );
};
const HomeScreen = ({children, title}): Node => {
  const isDarkMode = useColorScheme() === 'dark';
  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
    height: "100%",
  };
  return (
    <SafeAreaView style={backgroundStyle}>
    <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
    <WebView source={{ uri: 'https://www.baidu.com' }} style={{ flex: 1 }} />
  </SafeAreaView>
  );
};
function DetailsScreen({ navigation }) {
  return (
    <Tab.Navigator>
    <Tab.Screen name="Home" component={HomeScreen} options={{headerShown:false}}/>
    <Tab.Screen name="Settings" component={SettingsScreen} options={{headerShown:false}}/>
  </Tab.Navigator>
  );
}
function Maps({ navigation }) {
  return (
    <RNTMap style={{ flex: 1 }} />
  );
}
const Stack = createNativeStackNavigator();
const App: () => Node = () => {

  return (
    <NavigationContainer>
    <Stack.Navigator initialRouteName="Home" screenOptions={{headerBackTitleVisible: false,headerTitleAlign:"center"}}>
      <Stack.Screen name="Home" component={Section}/>
      <Stack.Screen name="Details" component={DetailsScreen}  />
      <Stack.Screen name="Maps" component={Maps}  />
    </Stack.Navigator>
  </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default App;
