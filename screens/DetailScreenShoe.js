import React from "react";
import { View, Text, Image, ScrollView, Dimensions, StyleSheet, TouchableOpacity } from "react-native";
import Card from "../shared/Card";
import { Entypo, Ionicons } from '@expo/vector-icons';
//import { Ionicons, FontAwesome, AntDesign, Feather } from "@expo/vector-icons";

const {width} = Dimensions.get("window");
const height = width * 0.85; 
const images =[
    'https://cdn.luxe.digital/media/2021/09/03201127/best-work-boots-men-timberland-review-luxe-digital%402x.jpg',
    'https://i.pinimg.com/originals/1b/a5/f7/1ba5f792c395f2707f6bcb1b23c29a58.jpg',
    'https://i.imgur.com/JQuhZbM_d.jpg?maxwidth=640&shape=thumb&fidelity=medium',
    
]

export default function DetailScreenShoe(parameters) {
    const navigation= parameters.navigation;
    return (
        <ScrollView>        
        <View style={style.container}>
            <ScrollView pagingEnabled 
            horizontal 
            showsHorizontalScrollIndicator={false}
            style={style.scroll}>
         {
             images.map((image,index) => (
                <Image
                key={index}
                source={{uri: image}}
                style={style.image}/>
             ))
         }    
         </ScrollView>  
         <View style={style.pagination}>
             
             <Text style={style.pagingText}>⬤swipe</Text>
         </View>
        </View>
        <View><Text style={{ fontWeight:"bold", fontSize:45, flex:1, marginTop:25, marginStart:10}}>Timberland shoes</Text>
        <Text style={{fontSize:30, flex:2, marginTop:18,marginStart:10}}>$ 450</Text>
        <Text style={{fontStyle:"italic", fontSize:15, marginTop:18,marginStart:10}}>added 7d ago</Text>
        <View>

        </View>
        <Text style={{marginStart:10, fontSize:15}}>Are you looking to add a little sparkle to your life? These crystal-embellished ankle boots from Timberland are exactly the shoe you need. You're welcome.</Text>
        <Text style={{marginStart:10,marginTop:15,fontWeight:"bold"}}>HIGHLIGHT</Text>
         <Text style={style.highlightText}>Sole: Rubber 100%</Text>
         <Text style={style.highlightText}>Trims: Crystal 100%</Text>
        <Text style={style.highlightText}>Lining: Calf Leather 90%, Goat Skin 10%</Text>
        <Text style={style.highlightText}>Outer: Calf Leather 85%, Goat Skin 15%</Text>
        </View>
        <Card>
            <Text style={{textAlign:'center', fontSize:40 }}>REVIEWS</Text>
           <View>
            <Entypo name="star" size={45} color="black" />
            <Text style={{marginStart:14}}>3.8</Text>
            </View>
         <Text style={style.highlightText}>⬤    "...very comfortable and affordable."</Text>
         <Text style={style.highlightText}>⬤    "Personally, I can't believe these still exist.     🤣🤣"</Text>
         <Text style={style.highlightText}>⬤    "...very durable. I heard they could crush stones. LOL!"</Text>
        </Card>
        <View>
        <TouchableOpacity
        onPress={() => {
          navigation.navigate("");
        }}
        style={{
          padding: 10,
          paddingHorizontal: 80,
          marginTop: 5,
          marginBottom: 25,
          alignItems: "center",
          borderRadius: 15,
          flexDirection: "row",
          backgroundColor: "black",
        }}
      >
        <Ionicons name="md-cart-sharp" size={30} color="#fff" />
        <Text style={{ paddingLeft: 20, color: "white", fontSize:25 }}>Add to Cart</Text>
      </TouchableOpacity>
        </View>
        </ScrollView>
    )
}

const style = StyleSheet.create({
    container: {marginTop:0, width, height},
    scroll: {width,height},
    image: {width, height, resizeMode:'cover', borderRadius:35},
    pagination: {flexDirection:"row", position:'absolute', bottom:0, alignSelf:'center'},
    pagingText: {color:'gray', margin: 3},
    highlightText: {marginStart:10,marginTop:10}
})
    