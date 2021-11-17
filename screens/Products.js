import React from "react";
import { StyleSheet, View, Text, Button, Image, ScrollView, TouchableOpacity } from "react-native";
import Card from "../shared/Card";
import DetailScreenShoe from "./DetailScreenShoe";



export default function Products(parameters){
    const navigation = parameters.navigation;
    return(
        <ScrollView>
        <View>
        <Card>
           
        <Image
            style={styles.image}
            source={{uri: 'https://i-verve.com/blog/wp-content/uploads/2019/06/timberland-shoes.jpg'}}
       />
            <Text style={{marginBottom: 10, marginTop: 20 }} >
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
                navigation.navigate("DetailScreenShoe");
              }}
              style={{
                padding: 15,
                paddingHorizontal: 80,
                marginTop: 10,
                alignItems: "center",
                flexDirection: "row",
                backgroundColor: "black",
              }} >
                    <Text style={{ paddingLeft: 20, color: "white" }}>Buy now</Text>
            </TouchableOpacity>
            
        </Card>
        </View>
        {/*<View>
        <Card>
           
        <Image
            style={styles.image2}
            source={{uri: 'http://www.thejewelleryeditor.com/media/images_thumbnails/filer_public_thumbnails/filer_public/da/64/da6401bf-c799-44c5-9acf-e6aa7791738b/rolex_lady_datejust_28mm_everose_rolesor.jpg__760x0_q75_crop-scale_subsampling-2_upscale-false.jpg'}}
       />
            <Text style={{marginBottom: 10, marginTop: 20 }} >
                Women's Rolex Watch
            </Text>
            <Text style={styles.price} >
                $ 41,412
            </Text>
            <Text style={styles.description}>
                added 5d ago
            </Text>
            <Button
            color="black"
            type="clear"
            title='Buy now'
            onPress={() => this.props.navigation.navigate('Details')} />
            
        </Card>
        </View>
        <View>
        <Card>
           
        <Image
            style={styles.image3}
            source={{uri: 'https://assets.swappie.com/cdn-cgi/image/width=600,height=600,fit=contain,format=auto/swappie-product-iphone-12-pro-max-graphite-back.png'}}
       />
            <Text style={{marginBottom: 10, marginTop: 20 }} >
                Iphone 12 Pro Max
            </Text>
            <Text style={styles.price} >
                $ 999
            </Text>
            <Text style={styles.description}>
                added 5d ago
            </Text>
            <Button
            color="black"
            type="clear"
            title='Buy now'
            onPress={() => this.props.navigation.navigate('Details')} />
            
        </Card>
        </View>
        <View>
        <Card>
           
        <Image
            style={styles.image3}
            source={{uri: 'https://i.pinimg.com/736x/2d/50/34/2d5034c60e89ca59d857f3d13a3fc675.jpg'}}
       />
            <Text style={{marginBottom: 10, marginTop: 20 }} >
                The Witcher 3 Customised Shirt
            </Text>
            <Text style={styles.price} >
                $ 150
            </Text>
            <Text style={styles.description}>
                added 1d ago
            </Text>
            <Button
            color="black"
            type="clear"
            title='Buy now'
            onPress={() => this.props.navigation.navigate('detail')} />
            
        </Card>
        </View>}*/}
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    name: {
        color: '#5a647d',
        fontWeight: 'bold',
        fontSize: 30
    },
    price: {
        fontWeight: 'bold',
        marginBottom: 10
    },
    description: {
        fontSize: 10,
        color: '#c1c4cd'
    },
    image: {
        padding:80

    },
    image2:{
        padding:120
    },
    image3:{
        padding:150
    }
        
})