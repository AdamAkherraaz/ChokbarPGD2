import { StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { collection, getDoc, query, where } from 'firebase/firestore'
import { db } from '../firebase'

const User = ({user}) => {

    // const [name,setName]=useState("")
    // const getInfo=async()=>{
    //     nm= await getDoc(query(db,collection("users"),where("uid","==",user.uid)))
    //     console.log(nm);
    // }
    // useEffect(()=>{
    //     getInfo()
    // },[])
  return (
    <View style={{display:"flex",justifyContent:"center", alignItems:"center"}}>
      <View style={{borderColor:"black", borderWidth:3,width:"75%",borderRadius:20,padding:10}}>
        <Text>ID : {user["uid"]}</Text>
        <Text>Points : {user["points"]}</Text>
      </View>
    </View>
  )
}

export default User

const styles = StyleSheet.create({})