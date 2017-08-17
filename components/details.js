import React from 'react'
import {Text, View, ActivityIndicator} from 'react-native'
import Prismic from 'prismic-javascript'
import conf from '../prismic-configuration.js'

const apiEndpoint = conf.apiEndpoint

console.log ('endpoint', apiEndpoint)

export default class Details extends React.Component{

	static navigationOptions = ({navigation}) => {
		//console.log('params console', navigation.state.params.uid)
		return{
			title : `Details`
		}
	}

	constructor(props) {
	  super(props);
		//console.log('state', this.props.navigation.state )
	  this.state = {
	  	//uid : this.props.navigation.state.params.uid,
	  	uid : "computer-forensics-finding-out-what-the-bad-guys-did",
	  	data : null
	  }
	  this.fetchDocument()
	}

	fetchDocument() {
		//console.log('state', this.state.uid)

		Prismic.getApi(apiEndpoint).then((api) => {
		  return api.getByUID('post', this.state.uid);
		}).then((blogPosts) => {
			console.log(blogPosts)
			this.setState({data : blogPosts.data})
		  // blogPosts is the response object, blogPosts.results holds the documents
		});
	}

	render(){
		if (this.state.data  === null) {
			return(
				<ActivityIndicator color="black" si ze="large" />
				)
		}
		return(
			<View>
				<Text>Details</Text>
			</View>
		)
	}
}