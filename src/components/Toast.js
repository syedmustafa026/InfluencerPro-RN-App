import { Alert, ToastAndroid, Platform } from "react-native"

const Toast = (message) => {
  if (Platform.OS === "android")
    ToastAndroid.show(message, ToastAndroid.SHORT)
  else
    Alert.alert("Error", message, [], {
      cancelable: true
    })
}

export default Toast