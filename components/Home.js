import React from 'react'
import {Text, View, TextInput, Button} from 'react-native'
import { StackNavigator } from 'react-navigation'
import Details from './details.js'

class Home extends React.Component{

	static navigationOptions = {
		title : 'Homepage'
	}

	search() {
		this.props.navigation.navigate('Search')
	}

	submit(){
		this.props.navigation.navigate('Result', {uid:this.state.uid})
	}

	constructor(props) {
	  super(props);
	
	  this.state = {
	  	uid : "Jose"
	  };
	}

	setUid (uid) {
		this.setState({
			uid : uid
		})
	}

	render() {
		return(
			<View>
				<TextInput value = {this.state.uid} onChangeText = {(throwsext) => this.Uid(text)} />
				<Button onPress={() => this.submit()} title="Rechercher" />
			</View>
		)
	}
}

export default StackNavigator({
	Result : {
		screen : Details
	},
	Home : {
		screen : Home
	}
})