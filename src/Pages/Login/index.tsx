import { useNavigation } from "@react-navigation/native";
import React, { useState } from "react";
import { View,Text, StyleSheet, TextInput, TouchableOpacity, Alert, Image, Dimensions, ImageBackground, ActivityIndicator } from "react-native";
const Login=()=>{
    const [name, setName] = useState('');
    const [password, setPassword] = useState('');
    const [nameError, setNameError] = useState('');
    const [passwordError, setPasswordError] = useState('');
    const navigation = useNavigation();
    const [loading1, setLoading1] = useState(false)
    const validate = () => {
        let isValid = true;
    
        if (name.trim() === '') {
          setNameError('Username is required');
          isValid = false;
        } else {
          setNameError('');
        }
    
        if (password.trim() === '') {
          setPasswordError('Password is required');
          isValid = false;
        } else {
          setPasswordError('');
        }
    
        return isValid;
      };
      const handleLogin = () => {
        if (validate()) {
            setLoading1(true)
          navigation.navigate('Listing');
           setLoading1(false)
        } else {
          Alert.alert('Validation Error', 'Please fill in all required fields');
        }
      };
    return(
        <View style={styles.container}>
               <ImageBackground source={require('../../assets/images/Group.png')} resizeMode="cover" style={styles.image}>
      <Text style={styles.text}>{'Welcome Back!'}</Text>
      <Text style={styles.text}>{'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pharetra.'}</Text>
    </ImageBackground>
             <View style={{flex:1,marginTop:10}}>
                <TextInput
                    style={styles.input}
                    onChangeText={(val) => setName(val)}
                    value={name}
                    placeholder="User Name"
                    placeholderTextColor={'#333333'}
                />
                {nameError ? <Text style={styles.errorText}>{nameError}</Text> : null}
                  <TextInput
                    style={styles.input}
                    onChangeText={(val) => setPassword(val)}
                    value={password}
                    placeholder="Password"
                    placeholderTextColor={'#333333'}
                />
                {passwordError ? <Text style={styles.errorText}>{nameError}</Text> : null}
                <TouchableOpacity>
                    <Text style={{color:'#0F69F1',fontSize:16,textAlign:'right',marginRight:10}}>{'Forgot Password ?'}</Text>
                </TouchableOpacity>
            </View>
           <TouchableOpacity
           style={styles.button}
           onPress={handleLogin}
           disabled={loading1} 
         >
           {loading1 ? (
             <ActivityIndicator size="small" color="#FFFFFF" />
           ) : (
             <Text style={styles.buttonText}>{'Sign in'}</Text>
           )}
         </TouchableOpacity>
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1, backgroundColor: '#FFFFFF'
    },
    input: {
        height: 50,
        margin: 12,
        padding: 10,
        borderRadius: 9,
        borderWidth: 1
    },
    errorText: {
        color: '#FF0000',
        marginLeft: 12,
        marginBottom: 8,
      },
      align: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    image: {
        flex: 0.7,
        justifyContent: 'flex-end',
        backgroundColor:'#d6d6d6'
      },
      text: {
        color: '#474747',
        fontSize: 24,
        fontWeight: 'bold',
        textAlign: 'left',
        paddingHorizontal:10
      },
      
      button: {
        backgroundColor: '#0F69F1',
        padding: 16,
        borderRadius: 9,
        alignItems: 'center',
        marginBottom: 20,
        marginHorizontal:10
      },
      buttonText: {
        color: '#FFFFFF',
        fontSize: 22,
        fontWeight: '800',
      },
});
export default Login;