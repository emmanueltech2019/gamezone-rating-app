import React from 'react';
import {View, StyleSheet, TextInput,Text} from 'react-native';
import { Formik } from 'formik';
import { globalStyles } from '../styles/global';
import * as Yup from "yup"
import FlatButton from '../shared/button';


const reviewSchema = Yup.object({
    title:Yup.string().required().min(4),
    body:Yup.string().required().min(8),
    rating:Yup.string().test("is-num-1-5","Rating must be a number 1 - 5",(val)=>{
        return parseInt(val) < 6 && parseInt(val) >0
    })

})
const Reviewform = ({addReview}) => {
    return (
        <View style={globalStyles.container}>
            <Formik 
                validationSchema={reviewSchema}
                initialValues={{title:"",body:"",rating:""}}
                onSubmit={(values,actions)=>{
                    addReview(values)
                    actions.resetForm()
                }}
            >
                {(props)=>(
                    <View>
                        <TextInput
                            style={globalStyles.input}
                            placeholder="Review Title"
                            onChangeText={props.handleChange("title")}
                            value={props.values.title}
                            onBlur={props.handleBlur("title")}
                        />
                        <Text style={globalStyles.errortext}>
                            {props.touched.title && props.errors.title}
                        </Text>
                         <TextInput
                         multiline
                            style={globalStyles.input}
                            placeholder="Review Body"
                            onChangeText={props.handleChange("body")}
                            value={props.values.body}
                            onBlur={props.handleBlur("body")}

                        />
                         <Text style={globalStyles.errortext}>
                            {props.touched.body&&props.errors.body}
                        </Text>
                         <TextInput
                            style={globalStyles.input}
                            placeholder="Rating (1 - 5)"
                            onChangeText={props.handleChange("rating")}
                            value={props.values.rating}
                            keyboardType="numeric"
                            onBlur={props.handleBlur("rating")}

                        />
                         <Text style={globalStyles.errortext}>
                            {props.touched.rating&&props.errors.rating}
                        </Text>
                        <FlatButton
                            text="submit"
                            onPress={props.handleSubmit}
                        />
                    </View>
                )}
            </Formik>
        </View>
    );
}

const styles = StyleSheet.create({

})

export default Reviewform;
