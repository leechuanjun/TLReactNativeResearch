/**
 * Day
 *
 */
 import React, { Component } from 'react';
 import {
   Image,
   StyleSheet,
   Text,
   View,
   TouchableHighlight
 } from 'react-native';

import Util from './utils';;

export default class extends Component{
  render() {
    return(
      <View style={styles.container}>
      	<Text style={styles.text}>Try 3D Touch on the home screen icon</Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container:{
		width: Util.size.width,
		height: Util.size.height,
		alignItems:"center",
		justifyContent: "center"
	},
	text:{
		fontSize:20,
	}
});