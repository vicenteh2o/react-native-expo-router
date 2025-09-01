import { StyleSheet } from "react-native";
import { useSelector } from "react-redux";
import { RootState } from "../store";
import { Colors } from "./constant/Colors";

export const useStyle = () => {
  const { currentTheme } = useSelector((state: RootState) => state.theme);
  const styles = currentTheme === "dark" ? darkStyle : lightStyle;
  return styles;
};

export const lightStyle = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: Colors.gray,
  },
  title: {
    fontSize: 18,
    fontWeight: "600",
    marginVertical: 10,
    color: Colors.black,
  },
  subTitle: {
    fontSize: 16,
    color: Colors.black,
  },
  button: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: Colors.btnLight,
    padding: 15,
    borderRadius: 10,
    marginBottom: 10,
  },
});

export const darkStyle = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: Colors.dark,
  },
  title: {
    fontSize: 18,
    fontWeight: "600",
    marginVertical: 10,
    color: Colors.white,
  },
  subTitle: {
    fontSize: 16,
    color: Colors.white,
  },
  button: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: Colors.btnDark,
    padding: 15,
    borderRadius: 10,
    marginBottom: 10,
  },
});
