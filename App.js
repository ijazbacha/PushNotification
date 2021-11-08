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

  return(
    <View>
      <Text style={{fontSize:20, alignSelf:"center", marginVertical:10}}>Push Notification</Text>
      <Button title="Show Notification" color="lightgreen" onPress={ } />
    </View>
  )
}

export default App;
