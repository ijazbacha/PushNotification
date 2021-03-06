import React, { useEffect } from "react";
import { View, Text, Button } from "react-native";
import PushNotification from "react-native-push-notification";

const App = () => {

  useEffect(() => {
    createChannel()
  }, [])

  const createChannel = () => {
    PushNotification.createChannel({
      channelId: 'test-channel',
      channelName: 'Test Channel'
    })
  }

  const handleNotification = () => {
    PushNotification.cancelAllLocalNotifications()
    PushNotification.localNotification({
      channelId:"test-channel",
      title: "Title of the message !!:D",
      message: "try to show notification",
      bigText: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
      color:"green",
      // id:
    })
  }

  return(
    <View style={{ padding:10}}>
      <Text style={{fontSize:20, alignSelf:"center", marginVertical:10}}>Push Notification</Text>
      <Button title="Show Notification" color="green" onPress={() => handleNotification()} />
    </View>
  )
}

export default App;
