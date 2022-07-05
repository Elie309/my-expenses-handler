import { GestureResponderEvent, ScrollView, Text, View, StyleSheet } from 'react-native'
import React, { Component } from 'react'
import CustomButton from "../components/CustomButton";
import { data } from "../fakedata";
import Category from '../components/Category/Category';
import { backgroundColors, CategoryColor, fontColors } from '../utils/Colors';

interface Props { }
interface State { }

export default class Categories extends Component<Props, State> {

    constructor(props: Props) {
        super(props)

        this.state = {
        }

        this.onAddCategory = this.onAddCategory.bind(this)
        this.onCategoryPress = this.onCategoryPress.bind(this)
        this.onEditPress = this.onEditPress.bind(this)
    }

    onAddCategory(e: GestureResponderEvent) {
        console.log('Learn more button pressed')
    }

    onCategoryPress(e: GestureResponderEvent) {
        console.log('Category pressed')
    }

    onEditPress(e: GestureResponderEvent) {
        console.log('edit pressed')
    }

    render() {
        return (
            <ScrollView
                style={styles.container}
            >

                <View style={styles.titleContainer}>
                    <Text style={styles.titleText}>
                        Categories
                    </Text>
                    <CustomButton
                        onPress={this.onAddCategory}
                        text="+"
                        style={styles.customButton}
                        textStyle={styles.customButtonText}
                    />
                </View>



                       { data.map((item, index) =>{

                            return <Category
                                style={[styles.category, index % 2 === 0 ? { backgroundColor: backgroundColors.darkGrey } : { backgroundColor: backgroundColors.lightGrey }]}
                                key={index}
                                title={item.title}
                                onPress={this.onCategoryPress}
                                category={item.category}
                                // TODO: Money should remain onyl item.money because in the database it will be negative
                                money={item.money}
                                color={CategoryColor[item.category]}
                                onEditPress={this.onEditPress}
                            />
                    })}
            
            </ScrollView>
        )
    }
}


const styles = StyleSheet.create({

    container: {
        flexDirection: 'column',
    },
    category: {
        width: '100%',
        padding: 20,
    },
    titleContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: backgroundColors.primary,
        paddingTop: 35,
        paddingBottom: 20,
        paddingHorizontal: 20,
    },
    customButton: {
        alignItems: 'flex-end',
        width: '10%',
    },
    customButtonText: {
        color: 'white',
        fontSize: 40,
        textAlign: "left"
    },
    titleText: {
        fontSize: 30,
        fontWeight: 'bold',
        color: fontColors.primary,
    }

})