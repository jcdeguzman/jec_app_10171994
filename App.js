import React from 'react';
import { StyleSheet, ScrollView, View, Text, TouchableOpacity, Image} from 'react-native';
import { TextInput } from 'react-native-paper';

export default class App extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            username: "",
            password: "",                               
        }

    }
    validate_field=()=>{
        const { username, password} = this.state
        if(username == "" || password == ""){
            alert("Both username and password are required")
            return false
        } 
        var usernameRegex = /^[a-zA-Z0-9\.@-]+$/;
        var validusername = username.match(usernameRegex);
        if(validusername == null){
            alert("Your username is not valid. Only characters A-Z, a-z, 0-9, '.' and '-' are  acceptable.");
            return false;
        }
        var passwordRegex = /^[a-zA-Z0-9]+$/;
        var validPassword = password.match(passwordRegex);
        if(validPassword == null){
            alert("Your Password is not valid. Only characters A-Z, a-z and 0-9 are  acceptable.");
            return false;
        }
    return true
}
    making_api_call=()=>{
        if(this.validate_field()){
            alert("Log-in successful!")
        }
}
    render() {
        return (
            <>
                    <View style={styles.container}>
                        <View><Image style={{width:300, height:300, marginBottom: 15}}
                             source={require('./Images/deplo.png')} />
                    </View>
                    <View style={styles.inputLayout}>
                        <TextInput
                            label="Username"
                            value={this.state.username}
                            onChangeText={username => this.setState({username})}
                            />
                    </View>
                    <View style={styles.inputLayout}>
                        <TextInput
                            label="Password"
                            secureTextEntry={true}
                            value={this.state.password}
                            onChangeText={password => this.setState({password})}
                            />
                        </View>
                        <TouchableOpacity style={styles.button}
                            onPress={()=>this.making_api_call()}
                            >
                        <Text style = {{color : "black"}}>Log-in</Text>
                        </TouchableOpacity>
                    </View>
            </>
        )
    }

}

const styles = StyleSheet.create({
  
    container: {
        flex: 1,
        backgroundColor: '#1D1D72',  
        alignItems: 'center',
        justifyContent: 'center',
    },
    inputLayout: {
        width:"80%",
        height:50,
        marginBottom:20,
        justifyContent:"center",
        padding:20,
    },
    button:{
      width:100,
      backgroundColor:"#FF9F3F",
      height:50,
      alignItems:"center",
      justifyContent:"center",
      marginTop:40,
      marginBottom:10,
      }, 
});