import { Link, router } from "expo-router";
import { Pressable, Text, View } from "react-native";

export default function Index() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text>Home Page</Text>
      <Link href="/users/1">Go to user 1</Link>
      <Pressable onPress={() => router.push("/users/2")}>
        <Text>Go to user 2</Text>
      </Pressable>
    </View>
  );
}
