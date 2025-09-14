import { Text, useColorScheme } from "react-native";
import { Colors } from "../constants/colors";

const ThemeText = ({ style, title = false, ...props }) => {
  const colorScheme = useColorScheme();
  const theme = Colors[colorScheme] ?? Colors.light;
  const textColor = title ? theme.text : theme.text;
  return <Text style={[{ color: textColor }, style]} {...props} />;
};

export default ThemeText;
