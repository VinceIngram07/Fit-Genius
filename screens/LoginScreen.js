// import React, { useEffect, useState } from 'react';
// import { KeyboardAvoidingView, StyleSheet, Text, TextInput, TouchableOpacity, View, Image } from 'react-native';
// import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
// import { auth } from '../Firebase';

// const LoginScreen = () => {
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');

//   const handleLoginPress = () => {
//     console.log(`Email: ${email}, Password: ${password}`);
//     // Add code to handle login here
//         signInWithEmailAndPassword(auth, email, password)
//         .then((userCredential) => {
//             const user = userCredential.user;
//             console.log('Logged in with:', user.email);
//         })
//         .catch(error => alert(error.message))
//   };

//   const handleRegisterPress = () => {
//     console.log(`Email: ${email}, Password: ${password}`);
//     // Add code to handle login here
//     // const auth = getAuth();
//         createUserWithEmailAndPassword(auth, email, password)
//         .then((userCredential) => {
//             const user = userCredential.user;
//             console.log('Registered with:', user.email);
//         })
//         .catch(error => alert(error.message))
//   };

//   return (
//     <KeyboardAvoidingView behavior="padding" style={styles.container}>
//       <Image source={require('../Asset/gym.jpeg')} style={styles.image} />
//       <View style={styles.inputContainer}>
//         <TextInput
//           placeholder="Email"
//           value={email}
//           onChangeText={text => setEmail(text)}
//           style={styles.input}
//           autoCapitalize="none"
//           keyboardType="email-address"
//         />
//         <TextInput
//           placeholder="Password"
//           value={password}
//           onChangeText={text => setPassword(text)}
//           style={styles.input}
//           secureTextEntry
//         />
//       </View>
//       <TouchableOpacity style={styles.button} onPress={handleLoginPress}>
//         <Text style={styles.buttonText}>Login</Text>
//       </TouchableOpacity>
//       <TouchableOpacity style={styles.button} onPress={handleRegisterPress}>
//         <Text style={styles.buttonText}>Register</Text>
//       </TouchableOpacity>
//     </KeyboardAvoidingView>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     backgroundColor: '#fff',
//   },
//   image: {
//     width: '80%',
//     height: 150,
//     resizeMode: 'contain',
//     marginBottom: 20,
//   },
//   inputContainer: {
//     width: '80%',
//     marginBottom: 20,
//   },
//   input: {
//     backgroundColor: '#fff',
//     borderBottomWidth: 1,
//     borderColor: '#ddd',
//     padding: 10,
//     marginBottom: 10,
//   },
//   button: {
//     backgroundColor: '#f4511e',
//     padding: 10,
//     borderRadius: 5,
//     marginTop: 10,
//     width: '80%',
//   },
//   buttonText: {
//     color: '#fff',
//     textAlign: 'center',
//     fontSize: 16,
//     fontWeight: 'bold',
//   },
// });

// export default LoginScreen;
