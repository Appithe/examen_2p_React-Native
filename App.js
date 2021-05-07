import React, { useEffect, useState } from 'react';
import { Button, SafeAreaView, StyleSheet, Text, View, StatusBar } from 'react-native';
import Auth from "./src/components/Auth";
import Home from "./src/components/Home";
import firebase from './src/utils/firebase';

export default function App() {

  const [user,setUser] = useState(undefined);

  useEffect(()=>{
    firebase.auth().onAuthStateChanged((response)=>{
      setUser(response);
    })
  },[]);

  if(user === undefined) return null;

  return (
    <>
    <StatusBar barStyle = "light-content"/>
      <SafeAreaView style={styles.background}>
        {user ? <Home/>:<Auth/>}
      </SafeAreaView>
    </>
  );
}

const styles = StyleSheet.create({
  background:{
    backgroundColor: "#00FFFF",
    height:"100%",
  },
});