import { StatusBar as ExpoStatusBar } from "expo-status-bar";
import React from "react";
import { View, Text, Button, TextInput } from "react-native";
import { ThemeProvider } from "styled-components/native";
import { theme } from "./src/infrastructure/theme";
import { RestaurantsScreen } from "./src/restaurants/screens/restaurants.screen";

import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Ionicons from "@expo/vector-icons/Ionicons";


const Tab = createBottomTabNavigator();

function HomeScreenPost({ navigation, route }) {
  React.useEffect(() => {
    if (route.params?.post) {
      // Post updated, do something with `route.params.post`
      // For example, send the post to the server
    }
  }, [route.params?.post]);

  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Button
        title="Create post"
        onPress={() => navigation.navigate("CreatePost")}
      />
      <Text style={{ margin: 10 }}>Post: {route.params?.post}</Text>
    </View>
  );
}

function CreatePostScreen({ navigation, route }) {
  const [postText, setPostText] = React.useState("");

  return (
    <>
      <TextInput
        multiline
        placeholder="What's on your mind?"
        style={{ height: 200, padding: 10, backgroundColor: "white" }}
        value={postText}
        onChangeText={setPostText}
      />
      <Button
        title="Done"
        onPress={() => {
          // Pass and merge params back to home screen
          navigation.navigate({
            name: "Home",
            params: { post: postText },
            merge: true,
          });
        }}
      />
    </>
  );
}

function HomeScreen({ navigation }) {
  const [count, setCount] = React.useState(0);

  React.useEffect(() => {
    // Use `setOptions` to update the button that we previously specified
    // Now the button includes an `onPress` handler to update the count
    navigation.setOptions({
      headerRight: () => (
        <Button
          onPress={() => setCount((c) => c + 1)}
          title="Update count"
          color="#000"
        />
      ),
    });
  }, [navigation]);

  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>Count: {count}</Text>
      <Button
        title="Go to Details"
        onPress={() => navigation.navigate("Details")}
      />
    </View>
  );
}

function DetailsScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>Details Screen</Text>
      <Button title="Go to Home" onPress={() => navigation.navigate("Home")} />
      <Button
        title="Go to Details again"
        onPress={() => navigation.push("Details")}
      />
      <Button
        title="Go to first screen in stack"
        onPress={() => navigation.popToTop()}
      />
    </View>
  );
}

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
     <Tab.Navigator
       screenOptions={({ route }) => ({
         tabBarIcon: ({ focused, color, size }) => {
           let iconName;

           if (route.name === "Home") {
             iconName = focused ? "home" : "home-outline";
           } else if (route.name === "Details") {
             iconName = focused ? "list" : "list-outline";
           }

           // You can return any component that you like here!
           return <Ionicons name={iconName} size={size} color={color} />;
         },
         tabBarActiveTintColor: "tomato",
         tabBarInactiveTintColor: "gray",
       })}
     >


        <Tab.Screen
          name="Home"
          component={HomeScreen}
          options={({ navigation, route }) => ({
            title: "Homepage",
            // Add a placeholder button without the `onPress` to avoid flicker
            headerRight: () => <Button title="" />,
          })}
        />

        <Tab.Screen
          name="Details"
          component={DetailsScreen}
          options={({ navigation, route }) => ({
            title: "Details",
            // Add a placeholder button without the `onPress` to avoid flicker
            headerRight: () => <Button title="" />,
          })}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
