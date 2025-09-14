import { StyleSheet,Pressable } from "react-native";
import { Colors } from "../constants/colors";

const ThemeButton = ({style,...props}) => {
  return (
   <Pressable 
    style={({pressed})=> [styles.btn,pressed && styles.pressed,style]}
    {...props}
   />
    
  )
};

const styles = StyleSheet.create({
     btn: {
          backgroundColor: Colors.primary,
          padding: 18,
          borderRadius: 5,
          marginVertical: 10,
     },
     pressed: {
          opacity: 0.8,
     }
});
export default ThemeButton;

