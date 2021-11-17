import React from "react";
import { View, Text, Image, ScrollView, Dimensions, StyleSheet,  TouchableOpacity  } from "react-native";
import Card from "../shared/Card";
import { Entypo, Ionicons } from '@expo/vector-icons';
// import { Ionicons, FontAwesome, AntDesign, Feather } from "@expo/vector-icons";

const {width} = Dimensions.get("window");
const height = width * 1; //60%
const images =[
    'https://cdn.mos.cms.futurecdn.net/Vx2viQePnizYJQS5QPx556.jpg',
    'https://assets.swappie.com/cdn-cgi/image/width=600,height=600,fit=contain,format=auto/swappie-product-iphone-12-pro-max-graphite-back.png',
    'https://thumbor.forbes.com/thumbor/960x0/https%3A%2F%2Fspecials-images.forbesimg.com%2Fimageserve%2F5f51764d1e91a64567505ad9%2FApple--iPhone--new-iPhone--iPhone-12--iPhone-12-Pro--iPhone-12-Pro-Max--iPhone-12%2F960x0.jpg%3Ffit%3Dscale',
]

export default function DetailScreenPhone(parameters) {
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
        <View><Text style={{ fontWeight:"bold", fontSize:45, flex:1, marginTop:25, marginStart:10}}>Iphone 12 Pro Max</Text>
        <Text style={{fontSize:30, flex:2, marginTop:18,marginStart:10}}>$ 2,999</Text>
        <Text style={{fontStyle:"italic", fontSize:15, marginTop:18,marginStart:10}}>added 5d ago</Text>
        <View>

        </View>
        <Text style={{marginStart:10, fontSize:15}}>The iPhone 12 Pro Max is the larger of two pro-level phones in Apple's 2020 iPhone lineup. It has a glass and stainless-steel design with flat edges. The camera system is best-in-class with better stabilization and larger sensors. All the iPhone 12 models use Apple's Ceramic Shield front cover, which the company developed in partnership with Corning. It adds "a new high-temperature crystallization step that grows nano-ceramic crystals within the glass matrix, increasing drop performance by 4x."Since this is the biggest iPhone in the lineup, it has the biggest battery. Apple claims it can last for up to 20 hours of video playback, or up to 12 hours of video playback when streamed, and up to 80 hours of audio playback.

Our battery testing bears out Apple's claims for the most part, though 5G adds a complexity to determining battery life. When using 5G actively, it can drain the battery much faster than the expected rates.

</Text>
        <Text style={{marginStart:10,marginTop:15,fontWeight:"bold"}}>HIGHLIGHT</Text>
         <Text style={style.highlightText}>Processor: Apple A14 Bionic (5 nm)</Text>
         <Text style={style.highlightText}>RAM: 6GB</Text>
        <Text style={style.highlightText}>Storage: 128GB, 256GB, 512GB</Text>
        <Text style={style.highlightText}>Display: 6.7 inches Super Retina XDR OLED display</Text>
        <Text style={style.highlightText}>Camera: Rear: 12 MP + 12 MP + 12 MP ; Front :12 MP</Text>
        </View>
        <Card>
            <Text style={{textAlign:'center', fontSize:40 }}>REVIEWS</Text>
           <View>
            <Entypo name="star" size={45} color="black" />
            <Text style={{marginStart:14}}>4.0</Text>
            </View>
         <Text style={style.highlightText}>⬤    "Careful to those who are bashing apple and their products. You've been warned. Someone is definetly going to be triggered."</Text>
         <Text style={style.highlightText}>⬤    "I have been using my 12 PM for 10 months now, and its the worst crappy phone i have ever used. I have problem with wifi, bluetooth, airdrop, faceid and so on. Using 14.8.1. Every day, not once a week or couple a times a week, every day, this ..."</Text>
         <Text style={style.highlightText}>⬤    "...Anybody on this thread actually seen the inside of these phones? Iphones are cheaply made, proprietary to the point they are difficult to repair, and are designed for the technologically illiterate. So if you want a phone thats "easy" ..."</Text>
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
    pagingText: {color:'white', margin: 3},
    highlightText: {marginStart:10,marginTop:10}
})
    