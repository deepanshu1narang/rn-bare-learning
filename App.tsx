/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import { Button, StatusBar, StyleSheet, Text, useColorScheme, View } from 'react-native';
import {
  SafeAreaProvider,
  useSafeAreaInsets,
} from 'react-native-safe-area-context';
import LecP1 from './src/screens/LecP1';
import FlatListTut from './src/screens/FlatListTut';
import { useNavigation, NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

type RootStackParamList = {
  Home: undefined;
  FlatList: undefined;
  Basics: undefined;
};
const Stack = createStackNavigator<RootStackParamList>();
const Tab = createBottomTabNavigator<RootStackParamList>();

function App() {
  const colorScheme = useColorScheme();
  console.log(colorScheme);
  const isDarkMode = colorScheme === "dark";

  return (
    <NavigationContainer>
      <SafeAreaProvider>
        <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
        <AppContent />
      </SafeAreaProvider>
    </NavigationContainer>
  );
}

function StackNavigator() {
  return (
    <Stack.Navigator initialRouteName='Basics'>
      <Stack.Screen name="FlatList" component={FlatListTut} />
      <Stack.Screen name="Basics" component={LecP1} />
    </Stack.Navigator>
  );
}

function TabNavigator() {
  return (
    <Tab.Navigator initialRouteName='Basics'>
      <Tab.Screen name="FlatList" component={FlatListTut} />
      <Tab.Screen name="Basics" component={LecP1} />
    </Tab.Navigator>
  );
}

function AppContent() {
  const safeAreaInsets = useSafeAreaInsets();
  const navigation = useNavigation();

  // if (projectWithNavigation) {
  return (<View style={[styles.container, {
    paddingTop: safeAreaInsets.top,
    paddingBottom: safeAreaInsets.bottom,
  }]}
  >
    <Text>Hello world</Text>
    {/* <View style={{ flexDirection: "row", gap: 5, alignItems: 'center', justifyContent: 'center' }}>
      <Button title="Flat List tut" onPress={() => navigation.navigate("FlatList")} />
      <Button title='basic structure' onPress={() => navigation.navigate("Basics", { id: 1, name: "react native" })} />
    </View> */}
    {/* <StackNavigator /> */}
    <TabNavigator />
  </View>)
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 15,
    gap: 3
  },
  touchableOpacityButton: {
    backgroundColor: "blue",
    borderColor: "aqua",
    padding: 4

  },
  buttonText: {
    color: "white",
    fontWeight: 500
  },
  text: {
    textTransform: "uppercase"
  },
  box: {
    height: 80,
    width: 80,
    borderRadius: 50,
    backgroundColor: "red"
  },
  scrollContainer: {
    // // height: 100,
    // width: 100,
    flexGrow: 0,
    backgroundColor: "blue",
    padding: 2
  },
  horizontalLine: {
    borderBottomColor: 'black',
    borderBottomWidth: StyleSheet.hairlineWidth,
    marginVertical: 10,
    width: '100%',
  },
});

const styles2 = StyleSheet.create({
  container: {
    width: "100%",
    height: "100%",
    backgroundColor: "#dadada"
  }
});

export default App;
