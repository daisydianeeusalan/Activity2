import { StatusBar } from "react-native";
import { StyleSheet, Image, Text, View } from "react-native";
import { styles } from "./src/style.js";
import Icon from "react-native-vector-icons/Ionicons";
import Icons from "react-native-vector-icons/Feather";
import Icon1 from "react-native-vector-icons/AntDesign";
import Icons1 from "react-native-vector-icons/FontAwesome5";

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.head}>
        <Image
          style={styles.image}
          source={require("./src/logo.jpg")}
          resizeMode="stretch"
        />
        <View style={styles.space}></View>
        <Icon1 style={styles.icon} name="questioncircleo" size={20} color="black" />
        <Icon1 style={styles.icon} name="setting" size={20} color="black" />
      </View>
     
        <View style={styles.top}>
          <View style={styles.row}>
            <Image
              style={styles.icons}
              source={require("./src/1.jpg")}
              resizeMode="stretch"
            />
          </View>
          <View style={styles.row}>
            <Image
              style={styles.icons}
              source={require("./src/2.jpg")}
              resizeMode="stretch"
            />
          </View>
          <View style={styles.row}>
            <Image
              style={styles.icons}
              source={require("./src/3.jpg")}
              resizeMode="stretch"
            />
          </View>
          <View style={styles.row}>
            <Image
              style={styles.icons}
              source={require("./src/4.jpg")}
              resizeMode="stretch"
            />
          </View>
          <View style={styles.row}>
            <Image
              style={styles.icons}
              source={require("./src/5.jpg")}
              resizeMode="stretch"
            />
          </View>
        </View>
       
        <View style={styles.top1}>
          <Text style={styles.toptext}>Camera</Text>
          <Text style={styles.toptext}>Retouch</Text>
          <Text style={styles.toptext}>Captions</Text>
          <Text style={styles.toptext}>AutoCut</Text>
          <Text style={styles.toptext}>Prompter</Text>
        </View>
        <View style={styles.body}>
        <Image
          style={styles.images}
          source={require("./src/pic.jpg")}
          resizeMode="stretch"
        />
        <View style={styles.top3}>
        <Text style={styles.local}>Local</Text>
        <Image
              style={styles.iconss}
              source={require("./src/6.jpg")}
              resizeMode="stretch"
            />
        <View style={styles.space}></View>
        <View style={styles.cloud}>
        <Icons1 style={styles.icon} name="cloud-upload-alt" size={20} color="#3dd8be" />
        <Text style={styles.clouds}>Cloud</Text>
        </View>
        <Image
              style={styles.icons}
              source={require("./src/7.jpg")}
              resizeMode="stretch"
            />
        </View>
        <Image
              style={styles.icons1}
              source={require("./src/v.jpg")}
              resizeMode="stretch"
            />
      </View>
      <View style={styles.foot}>
      
        <Image
              style={styles.bot}
              source={require("./src/bot.jpg")}
              resizeMode="stretch"
            />
      </View>

      <StatusBar
        barStyle="dark-content"
        hidden={false}
        backgroundColor="#f9f8f4"
        translucent={true}
      />
    </View>
  );
}
