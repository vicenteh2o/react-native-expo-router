import { ScrollView, StyleSheet, Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const Auth = () => {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <Text>Auth</Text>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default Auth;

// Expo Router: Oculta el header automático para esta pantalla
export const options = {
  headerShown: false,
};
