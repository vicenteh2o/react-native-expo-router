import AntDesign from "@expo/vector-icons/AntDesign";
import Entypo from "@expo/vector-icons/Entypo";
import { router, Tabs } from "expo-router";
import { useEffect } from "react";
import { Platform } from "react-native";
import { useSelector } from "react-redux";
import { RootState } from "../store";

const TabsLayout = () => {
  const user = useSelector((state: RootState) => state.user);

  useEffect(() => {
    if (!user.id) {
      // react native temp issue: https://github.com/expo/router/issues/740
      if (Platform.OS === "ios") {
        setTimeout(() => {
          router.replace("/auth");
        }, 1);
      } else {
        setImmediate(() => {
          router.replace("/auth");
        });
      }
    }
  }, [user]);

  return (
    <Tabs>
      <Tabs.Screen
        name="index"
        options={{
          headerTitle: "Agrofertil",
          // add icon to the header
          headerLeft: () => <Entypo name="home" size={24} color="black" />,
          // justify header title to the start or left
          headerTitleAlign: "left",
          headerStyle: {
            backgroundColor: "lightblue",
          },
          title: "Home",
          tabBarIcon: ({ color, size }) => (
            <Entypo name="home" size={size} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="users/[id]"
        options={{
          title: "User Details",
          tabBarIcon: ({ color, size }) => (
            <AntDesign name="appstore-o" size={size} color={color} />
          ),
        }}
      />
    </Tabs>
  );
};

export default TabsLayout;
