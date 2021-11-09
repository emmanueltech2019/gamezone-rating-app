import React, { useState } from 'react';
import {View, StyleSheet,TouchableOpacity, FlatList,Text,Modal, Keyboard} from 'react-native';
import Card from '../shared/Card';
import { globalStyles } from '../styles/global';
import {MaterialIcons} from "@expo/vector-icons"
import Reviewform from './reviewForm';
import { TouchableWithoutFeedback } from 'react-native-gesture-handler';

const Home = ({navigation}) => {
    const [modalOpen, setModalOpen]=useState(false)
   const [reviews,setReviews] = useState([
       {title:"this is awesome ",rating:5,body:"lorem ipsum",key:"1"},
       {title:"i love the app ",rating:4,body:"lorem ipsum",key:"2"},
       {title:"nah una win am finnaly ",rating:3,body:"lorem ipsum",key:"3"},

   ])

   const addReview =(review)=>{
       review.key=Math.random().toString()
       setReviews((currentReviews)=>{
            return [
                review,
                ...currentReviews,
            ]
       })
       setModalOpen(false)
   }
   
    return (
        <View style={globalStyles.container}>
            <Modal visible={modalOpen} animationType="fade">               
                <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                    <View style={styles.modalContent}>
                    <MaterialIcons
                    name="close"
                    size={24}
                    style={{...styles.modalToggle,...styles.modalClose}}
                    onPress={()=>setModalOpen(false)}
                />
                        <Reviewform addReview={addReview}/>
                    </View> 
                </TouchableWithoutFeedback>
            </Modal>
            <MaterialIcons
                name="add"
                size={24}
                style={styles.modalToggle}
                onPress={()=>setModalOpen(true)}
            />
            <FlatList
                data={reviews}
                renderItem={({item})=>(
                    <TouchableOpacity  onPress={()=> navigation.navigate("ReviewDetails",item)}>
                        <Card>
                        <Text style={globalStyles.titleText}>{item.title}</Text>
                        </Card>
                    </TouchableOpacity>
                )}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    modalContent:{
        height:"100%",
    },
    modalToggle:{
        marginBottom:10,
        borderWidth:1,
        borderColor:"#f2f2f2",
        alignSelf:"center",
        borderRadius:10,
        padding:10
    },
    modalClose:{
        marginTop:20,
        marginBottom:0
    }
})

export default Home;
