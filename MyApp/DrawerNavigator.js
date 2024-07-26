import { createDrawerNavigator, DrawerToggleButton } from "@react-navigation/drawer";
import { Home } from "./screens/Home";
import { About } from "./screens/About";
import { Profile } from "./screens/Profile";
import { Settings } from "./screens/Settings";
import { View } from "react-native";
import { FontAwesome5 } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Octicons } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';


const Drawer = createDrawerNavigator();

export const DrawerNavigator = () => {
  return (
    <Drawer.Navigator screenOptions={{
        drawerPosition:"right",
        headerLeft:false,
        headerRight: () => <DrawerToggleButton />,
        drawerActiveBackgroundColor:"navy",
        drawerLabelStyle:{
            fontSize:20,
            color:"#aec3b0",
        },
        drawerContentStyle:{
            backgroundColor:"#caf0f8"
        }
    }}>
      <Drawer.Screen name="Home" component={Home} options={{
        title:"Anasayfa",
        drawerIcon:() => <FontAwesome5 name="home" size={24} color="blue" />,
      }}/>
      <Drawer.Screen name="About" component={About} options={{
        title:"Hakkında",
        drawerIcon:() => <MaterialCommunityIcons name="human-greeting-variant" size={24} color="blue" />
      }}/>
      <Drawer.Screen name="Profile" component={Profile} options={{
        title:"Profil",
        drawerIcon:() =><Octicons name="person" size={24} color="blue" />,
        headerTitleStyle:{
        fontSize:40,
        color:"purple",
        },
        headerLeft:()=><View style={{width:40,height:40,borderRadius:20,backgroundColor:"purple",marginLeft:10}}></View>
      }}/>
      <Drawer.Screen name="Settings" component={Settings} options={{
        title:"Ayarlar",
        drawerIcon:() =><Feather name="settings" size={24} color="blue" />,
      }}/>
    </Drawer.Navigator>
  );
};