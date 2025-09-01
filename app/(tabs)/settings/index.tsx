import { RootState } from "@/app/store";
import { setTheme } from "@/app/store/themeSlice";
import { Colors } from "@/app/utils/constant/Colors";
import { useStyle } from "@/app/utils/styles";
import { Switch, Text, TouchableOpacity, View } from "react-native";
import { useDispatch, useSelector } from "react-redux";

const Settings = () => {
  const dispatch = useDispatch();
  const { currentTheme } = useSelector((state: RootState) => state.theme);
  const styles = useStyle();

  const toggleTheme = () => {
    dispatch(
      setTheme({ currentTheme: currentTheme === "light" ? "dark" : "light" })
    );
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Settings</Text>
      <TouchableOpacity style={styles.button}>
        <Text style={styles.subTitle}>Dark Mode</Text>
        <Switch
          trackColor={{ false: Colors.gray, true: Colors.btnRight }}
          ios_backgroundColor={Colors.gray}
          value={currentTheme === "dark"}
          onValueChange={toggleTheme}
        />
      </TouchableOpacity>
    </View>
  );
};

export default Settings;
