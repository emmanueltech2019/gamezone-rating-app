import React from 'react';
import {View, StyleSheet,Text,Image} from 'react-native';
import Card from '../shared/Card';
import { globalStyles ,images} from '../styles/global';

const ReviewDetails = ({ route }) => {
    const rating = route.params.rating
    console.log(rating)
    return (
        <View style={globalStyles.container}>
            <Card>
                <Text style={globalStyles.titleText}>{route.params.title}</Text>
                <Text >{route.params.body}</Text>
                <View style={styles.rating}>
                <Text >gamezone rating</Text>
                    <Image 
                        source={images.ratings[rating]}
                    />
                </View>
            </Card>
        </View>
    );
}

const styles = StyleSheet.create({
    rating:{
        flexDirection:"row",
        justifyContent:"center",
        paddingTop:16,
        marginTop:16,
        borderTopWidth:1,
        borderTopColor:"#eee"
    }
})

export default ReviewDetails;
