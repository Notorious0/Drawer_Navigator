import { Text, View } from 'react-native';

export const Settings = () =>{
    return(
        <View style={{
            flex:1,
            justifyContent:"center",
            alignItems:"center",
            backgroundColor:"white",
        }}>
            <Text style={{fontSize:25,fontWeight:"bold",color:"blue"}}>Settings</Text>
        </View>
    );
};