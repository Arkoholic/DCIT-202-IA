import React from "react";
import { View, ScrollView, TouchableOpacity, Text, Image, TextInput, StyleSheet, Button} from "react-native";
import { Ionicons,EvilIcons,MaterialCommunityIcons,FontAwesome5,AntDesign } from "@expo/vector-icons";
import { NavigationContainer } from "@react-navigation/native";
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";
import Card from "../shared/Card";
import Products from "./Products";

export default function Home(parameters) {
  const navigation = parameters.navigation;
  
  return (
    <ScrollView>
    <View style={{marginTop:0,flexDirection:"column", backgroundColor:"white", justifyContent:"flex-start",alignContent:"flex-start",}}>
        <View >
        <EvilIcons name="search" size={24} color="black" style={{paddingLeft:10, marginTop:10}} />
        <TextInput placeholder= "What are you searching for?" style={styles.searchText}/>
        
        </View>

       {/* 
        <View style={styles.sortBtn}>
       <MaterialCommunityIcons name="sort-variant" size={24} color="black" />*/}
    </View>
    <View>
       <Card>
       <Image
            style={styles.image}
            source={{uri: 'https://cdn.luxe.digital/media/2021/09/03201127/best-work-boots-men-timberland-review-luxe-digital%402x.jpg'}}
       />
            <Text style={{marginBottom: 10, marginTop: 20, fontWeight:'bold',fontSize:25 }} >
                Timberland shoes
            </Text>
            <Text style={styles.price} >
                $ 450
            </Text>
            <Text style={styles.description}>
                added 7d ago
            </Text>
            <TouchableOpacity
             onPress={() => {
                navigation.navigate("DetailScreenShoe")
              }}
              style={{
                padding: 15,
                paddingHorizontal: 80,
                marginTop: 10,
                alignItems: "center",
                flexDirection: "row",
                backgroundColor: "black",
                borderRadius: 20
              }} >
                    <Text style={{ paddingLeft: 20, color: "white" }}>Buy now</Text>
            </TouchableOpacity>
       </Card>
    
    </View>
    <View>
        <Card>
           
        <Image
            style={styles.image2}
            source={{uri: 'http://www.thejewelleryeditor.com/media/images_thumbnails/filer_public_thumbnails/filer_public/da/64/da6401bf-c799-44c5-9acf-e6aa7791738b/rolex_lady_datejust_28mm_everose_rolesor.jpg__760x0_q75_crop-scale_subsampling-2_upscale-false.jpg'}}
       />
            <Text style={{marginBottom: 10, marginTop: 20, fontWeight:'bold',fontSize:25 }} >
                Women's Rolex Watch
            </Text>
            <Text style={styles.price} >
                $ 41,412
            </Text>
            <Text style={styles.description}>
                added 5d ago
            </Text>
            <TouchableOpacity
             onPress={() => {
                navigation.navigate("DetailScreenWatch")
              }}
              style={{
                padding: 15,
                paddingHorizontal: 80,
                marginTop: 10,
                alignItems: "center",
                flexDirection: "row",
                backgroundColor: "black",
                borderRadius: 20
              }} >
                    <Text style={{ paddingLeft: 20, color: "white" }}>Buy now</Text>
            </TouchableOpacity>
            
        </Card>
        </View>
        <View>
        <Card>
           
        <Image
            style={styles.image3}
            source={{uri: 'https://assets.swappie.com/cdn-cgi/image/width=600,height=600,fit=contain,format=auto/swappie-product-iphone-12-pro-max-graphite-back.png'}}
       />
            <Text style={{marginBottom: 10, marginTop: 20, fontWeight:'bold',fontSize:25 }} >
                Iphone 12 Pro Max
            </Text>
            <Text style={styles.price} >
                $ 2,999
            </Text>
            <Text style={styles.description}>
                added 5d ago
            </Text>
            <TouchableOpacity
             onPress={() => {
                navigation.navigate("DetailScreenPhone")
              }}
              style={{
                padding: 15,
                paddingHorizontal: 80,
                marginTop: 10,
                alignItems: "center",
                flexDirection: "row",
                backgroundColor: "black",
                borderRadius: 20
              }} >
                    <Text style={{ paddingLeft: 20, color: "white" }}>Buy now</Text>
            </TouchableOpacity>
            
        </Card>
        </View>
        <View>
        <Card>
           
        <Image
            style={styles.image3}
            source={{uri: 'https://i.pinimg.com/736x/2d/50/34/2d5034c60e89ca59d857f3d13a3fc675.jpg'}}
       />
            <Text style={{marginBottom: 10, marginTop: 20, fontWeight:'bold',fontSize:25 }} >
                The Witcher 3 Customised Shirt ( L&XL only)
            </Text>
            <Text style={styles.price} >
                $ 150
            </Text>
            <Text style={styles.description}>
                added 1d ago
            </Text>
            <TouchableOpacity
             onPress={() => {
                navigation.navigate("DetailScreenShirt")
              }}
              style={{
                padding: 15,
                paddingHorizontal: 80,
                marginTop: 10,
                alignItems: "center",
                flexDirection: "row",
                backgroundColor: "black",
                borderRadius: 20
              }} >
                    <Text style={{ paddingLeft: 20, color: "white" }}>Buy now</Text>
            </TouchableOpacity>
        </Card>
        </View>
       </ScrollView>
        
    
  );
    }
    const styles = StyleSheet.create({
     
      searchText:{
        padding:5,
      },
      sortBtn: {

      },
      image2:{
        padding:120
    },
      image3:{
        padding:150
      },
      image:{
        padding: 75,
      }
    })