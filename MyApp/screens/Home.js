import { Button, Text, View } from 'react-native';

export const Home = ({navigation}) =>{
    return(
        <View style={{
            flex:1,
            justifyContent:"center",
            alignItems:"center",
            backgroundColor:"white",
        }}>
            <Text style={{fontSize:25,fontWeight:"bold",color:"blue"}}>Home</Text>
            <Button title='Do Work' onPress={() => navigation.openDrawer()}/>
        </View>
    );
};