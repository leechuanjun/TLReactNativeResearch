/**
 * Day 4
 * bridge to cocoapods
 */
 import React, { Component } from 'react';
 import {
   StyleSheet,
   View,
   Image,
   TouchableHighlight,
   NativeModules
 } from 'react-native';

import Util from './utils';

class ShowImg extends Component{
  componentDidMount() {
    NativeModules.JTSImagePreview.showImage('http://i.imgur.com/sKh7Z6R.png');
  }

  render() {
    return(
      <View></View>
    )
  }
}

export default class extends Component{
  constructor() {
    super();
    this.state = {
      show:false
    };
  }

  _onImgPress() {
    // this.setState({
    //   show:false
    // })
    // this.setState({
    //   show:true
    // })
    this.setState({
      show:!this.state.show
    })
  }

  render() {
    return(
      <View style={{marginTop:100, alignItems:"center"}}>
        <TouchableHighlight onPress={()=>this._onImgPress()}>
          <Image source={{uri:'http://i.imgur.com/sKh7Z6R.png'}} style={styles.img}></Image>
        </TouchableHighlight>
        {this.state.show?<ShowImg></ShowImg>:<View></View>}
      </View>
    )
  }
}

const styles = StyleSheet.create({
  img:{
    height: 200,
    width: 300
  },
});
