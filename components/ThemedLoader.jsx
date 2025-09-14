import { ActivityIndicator, useColorScheme } from "react-native";
import { Colors } from "../constants/colors";
import ThemeView from "./ThemedView";

const ThemedLoader = () => {
     const ColorScheme= useColorScheme();
     const theme = Colors[ColorScheme] ?? Colors.light;

     return(
          <ThemeView  style ={{
               flex:1,
               justifyContent:'center',
               alignItems:'center',
               backgroundColor:theme.background
          }}>
           <ActivityIndicator size="large" color={theme.text} />
          </ThemeView>
     )
}

export default ThemedLoader;
