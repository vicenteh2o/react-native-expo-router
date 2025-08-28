import { useLocalSearchParams } from "expo-router";
import { Text, View } from "react-native";

const Users = () => {
  const { id } = useLocalSearchParams();
  return (
    <View>
      <Text>User Screen: {id}</Text>
    </View>
  );
};

export default Users;
