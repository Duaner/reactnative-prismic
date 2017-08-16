import React from 'react'
import {View, Text, StyleSheet, ActivityIndicator, Button} from 'react-native'

export default class About extends React.Component {

	render(){
		return(
			<View style={style.view}>
				<Text> On teste pour voir</Text>
				<Text> Jose Bové</Text>
			</View>
		);		
	}
}

const style = StyleSheet.create({
	view : {
		marginHorizontal: 20
	},
	title : {
		fontSize: 22,
		marginBottom: 20
	}
})
