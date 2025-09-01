import { Colors } from "@/app/shared/constant/Colors";
import { RootState } from "@/app/store";
import { setTheme } from "@/app/store/themeSlice";
import { StyleSheet, Switch, Text, TouchableOpacity, View } from "react-native";
import { useDispatch, useSelector } from "react-redux";

const Settings = () => {
  const dispatch = useDispatch();
  const { currentTheme } = useSelector((state: RootState) => state.theme);

  const toggleTheme = () => {
    dispatch(
      setTheme({ currentTheme: currentTheme === "light" ? "dark" : "light" })
    );
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Settings</Text>
      <TouchableOpacity style={styles.button}>
        <Text>Dark Mode</Text>
        <Switch value={currentTheme === "dark"} onValueChange={toggleTheme} />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: Colors.gray,
  },
  title: {
    fontSize: 18,
    fontWeight: "600",
    marginVertical: 10,
  },
  button: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: Colors.white,
    padding: 15,
    borderRadius: 10,
    marginBottom: 10,
  },
});

export default Settings;
