import React from "react";
import { View, Text, Image, ScrollView, Dimensions, StyleSheet, TouchableOpacity } from "react-native";
import { Entypo, Ionicons } from '@expo/vector-icons';
import Card from "../shared/Card";
// import { Ionicons, FontAwesome, AntDesign, Feather } from "@expo/vector-icons";

const {width} = Dimensions.get("window");
const height = width * 0.85; //60%
const images =[
    'http://www.thejewelleryeditor.com/media/images_thumbnails/filer_public_thumbnails/filer_public/da/64/da6401bf-c799-44c5-9acf-e6aa7791738b/rolex_lady_datejust_28mm_everose_rolesor.jpg__760x0_q75_crop-scale_subsampling-2_upscale-false.jpg',
    'https://content.rolex.com/dam/2021/upright-bba-with-shadow/m126284rbr-0011.png?impolicy=v6-upright&imwidth=270',
    'https://content.rolex.com/dam/2021/upright-bba-with-shadow/m278288rbr-0006.png?impolicy=v6-upright&imwidth=270',
    
]

export default function DetailScreenWatch(parameters) {
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
        <View><Text style={{ fontWeight:"bold", fontSize:45, flex:1, marginTop:25, marginStart:10}}>Women's Rolex Watch</Text>
        <Text style={{fontSize:30, flex:2, marginTop:18,marginStart:10}}>$ 41,412</Text>
        <Text style={{fontStyle:"italic", fontSize:15, marginTop:18,marginStart:10}}>added 5d ago</Text>
        <View>

        </View>
        <Text style={{marginStart:10, fontSize:15}}>Rolex crown at 12 o’clock, Arabic or Roman numerals, classic or Professional hour markers in geometric shapes or shimmering precious stones in settings, they are the expressive features of the face. Always in 18 ct yellow, white or pink gold, sometimes filled with luminescent material or in a colour that subtly complements the dial, the appliques belong to a world of extraordinary diversity. There are no fewer than a thousand different types available.</Text>
        <Text style={{marginStart:10,marginTop:15,fontWeight:"bold"}}>HIGHLIGHT</Text>
         <Text style={style.highlightText}>pink</Text>
         <Text style={style.highlightText}>rose gold/stainless steel</Text>
        <Text style={style.highlightText}>two-tone design</Text>
        <Text style={style.highlightText}>round face</Text>
        <Text style={style.highlightText}>index dial</Text>
        <Text style={style.highlightText}>central hours, minutes and seconds</Text>
        <Text style={style.highlightText}>date indication</Text>
        <Text style={style.highlightText}>screw-down crown</Text>
        <Text style={style.highlightText}>adjustable link bracelet</Text>
        <Text style={style.highlightText}>This piece is new and unworn.</Text>
        <Text style={style.highlightText}>Original box, papers and CHRONEXT certificate.</Text>
        <Text style={style.highlightText}>An inspection by the CHRONEXT-certified watchmakers guarantees authenticity.</Text>
        <Text style={style.highlightText}>All repairs of the movement of the watch and the repairs of water-resistant watches with water damage are covered by the CHRONEXT two-year warranty.</Text>
        </View>
        <Card>
            <Text style={{textAlign:'center', fontSize:40 }}>REVIEWS</Text>
           <View>
            <Entypo name="star" size={45} color="black" />
            <Text style={{marginStart:14}}>4.8</Text>
            </View>
         <Text style={style.highlightText}>⬤    "... Rolex is the brand they turn to when they are looking for a watch they intend to wear day in, day out; a faithful, lifelong companion that will perform beyond the call of duty thanks to impeccable movements and top-quality materials – without having to compromise on style and femininity."</Text>
         <Text style={style.highlightText}>⬤    "Whether the sporty, two-tone steel-and-gold model or a feminine diamond-set model with a mother-of-pearl dial takes your fancy, the look is unmistakably Rolex."</Text>
         <Text style={style.highlightText}>⬤    "...a COSC-certified chronometer – the most recognised independent Swiss chronometry testing institute, which allows tolerances or variations of -4/+6 seconds a day on the movement and which all Rolex watches display – but quite another is Rolex’s new Superlative Chronometer certificate"</Text>
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
    image: {width, height, resizeMode:'cover',  borderRadius:35},
    pagination: {flexDirection:"row", position:'absolute', bottom:0, alignSelf:'center'},
    pagingText: {color:'gray', margin: 3},
    highlightText: {marginStart:10,marginTop:10}
})
    