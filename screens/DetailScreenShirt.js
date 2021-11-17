import React from "react";
import { View, Text, Image, ScrollView, Dimensions, StyleSheet, TouchableOpacity } from "react-native";
import Card from "../shared/Card";
import { Entypo, Ionicons } from '@expo/vector-icons';
// import { Ionicons, FontAwesome, AntDesign, Feather } from "@expo/vector-icons";

const {width} = Dimensions.get("window");
const height = width * 1; 
const images =[
    'https://i.pinimg.com/736x/2d/50/34/2d5034c60e89ca59d857f3d13a3fc675.jpg',
    'https://res.cloudinary.com/teepublic/image/private/s--Eg6OnugN--/t_Resized%20Artwork/c_crop,x_10,y_10/c_fit,w_470/c_crop,g_north_west,h_626,w_470,x_0,y_-24/g_north_west,u_upload:v1462829024:production:blanks:a59x1cgomgu5lprfjlmi,x_-395,y_-349/b_rgb:eeeeee/c_limit,f_auto,h_630,q_90,w_630/v1607769098/production/designs/17254930_0.jpg',
    'https://www.thedota2store.com/media/catalog/product/cache/42ff4984ffd52745e8753c22ee11bc83/t/h/the-witcher-3-wild-hunt-short-sleeve-tee-shirt.jpg',
    
]

export default function DetailScreenShirt(parameters) {
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
        <View><Text style={{ fontWeight:"bold", fontSize:45, flex:1, marginTop:25, marginStart:10}}>The Witcher 3 Customised Shirt(L&XL only)</Text>
        <Text style={{fontSize:30, flex:2, marginTop:18,marginStart:10}}>$ 150</Text>
        <Text style={{fontStyle:"italic", fontSize:15, marginTop:18,marginStart:10}}>added 1d ago</Text>
        <View>

        </View>
        <Text style={{marginStart:10, fontSize:15}}>Customised T-Shirt with Geralt of Rivia " The white Wolf".</Text>
        <Text style={{marginStart:10,marginTop:15,fontWeight:"bold"}}>HIGHLIGHT</Text>
         <Text style={style.highlightText}>The standard, traditional t-shirt for everyday wear</Text>
         <Text style={style.highlightText}>Classic, generous, boxy fit</Text>
         <Text style={style.highlightText}>Designed with themes from 'The Witcher 3'</Text>
        <Text style={style.highlightText}>Heavyweight 5.3 oz / 180 gsm fabric, solid colors are 100% preshrunk cotton, heather grey is 90% cotton/10% polyester, denim heather is 50% cotton/ 50% polyester</Text>
        <Text style={style.highlightText}>Double-needle hems and neck band for durability</Text>
        </View>
        <Card>
            <Text style={{textAlign:'center', fontSize:40 }}>REVIEWS</Text>
           <View>
            <Entypo name="star" size={45} color="black" />
            <Text style={{marginStart:14}}>3.8</Text>
            </View>
         <Text style={style.highlightText}>⬤    "...Great shirt ☺☺☺"</Text>
         <Text style={style.highlightText}>⬤    "I love my T-shirt. The material is soft and the design on it is . . . unique! I'm a going to get me some more. E-merchant can express what I'm feeling very well!"</Text>
         <Text style={style.highlightText}>⬤    "...I am delighted with my tshirts from E-merchant and look forward to further orders in the future. They are the perfect gift for my teenage grandchildren."</Text>
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
    image: {width, height, resizeMode:'cover'},
    pagination: {flexDirection:"row", position:'absolute', bottom:0, alignSelf:'center'},
    pagingText: {color:'black', margin: 3},
    highlightText: {marginStart:10,marginTop:10}
})
    