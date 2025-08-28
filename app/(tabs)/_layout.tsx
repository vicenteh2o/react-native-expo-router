import AntDesign from "@expo/vector-icons/AntDesign";
import Entypo from "@expo/vector-icons/Entypo";
import { Tabs } from "expo-router";

const TabsLayout = () => {
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
