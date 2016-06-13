/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Image,
  NavigatorIOS,
  TouchableHighlight,
  ScrollView,
  StatusBar,
  DeviceEventEmitter
} from 'react-native';

import Util from './view/utils';
import Icon from 'react-native-vector-icons/Ionicons';
import Zocial from 'react-native-vector-icons/Zocial';
import IconFA from 'react-native-vector-icons/FontAwesome';
import Swiper from 'react-native-swiper';


import Day1 from './view/day1';
import Day2 from './view/day2';
import Day3 from './view/day3';
import Day4 from './view/day4';
import Day5 from './view/day5';
import Day6 from './view/day6';
import Day7 from './view/day7';
import Day8 from './view/day8';
import Day9 from './view/day9';
import Day10 from './view/day10';
import Day11 from './view/day11';
import Day12 from './view/day12';
import Day13 from './view/day13';
import Day14 from './view/day14';
import Day15 from './view/day15';


class MainView extends Component {
  constructor() {
    super();
    this.state = {
      days:[{
        key:0,
        title:"A stopwatch",
        component: Day1,
        isFA: false,
        icon: "ios-stopwatch",
        size: 48,
        color: "#ff856c",
        hideNav: false,
      },{
        key:1,
        title:"A weather app",
        component: Day2,
        isFA: false,
        icon: "ios-partly-sunny",
        size:60,
        color:"#90bdc1",
        hideNav: true,
      },{
        key:2,
        title:"twitter",
        component: Day3,
        isFA: false,
        icon: "logo-twitter",
        size:50,
        color:"#2aa2ef",
        hideNav: true,
      },{
        key:3,
        title:"cocoapods",
        component: Day4,
        isFA: true,
        icon: "contao",
        size:50,
        color:"#FF9A05",
        hideNav: false,
      },{
        key:4,
        title:"find my location",
        component: Day5,
        isFA: false,
        icon: "ios-locate",
        size:50,
        color:"#00D204",
        hideNav: false,
      },{
        key:5,
        title:"Spotify",
        component: Day6,
        isFA: true,
        icon: "spotify",
        size:50,
        color:"#777",
        hideNav: true,
      },{
        key:6,
        title:"Moveable Circle",
        component: Day7,
        isFA: false,
        icon: "ios-baseball",
        size:50,
        color:"#5e2a06",
        hideNav: true,
      },{
        key:7,
        title:"Swipe Left Menu",
        component: Day8,
        isFA: true,
        icon: "google",
        size:50,
        color:"#4285f4",
        hideNav: true,
      },{
        key:8,
        title:"Twitter Parallax View",
        component: Day9,
        isFA: false,
        icon: "twitter",
        size:50,
        color:"#2aa2ef",
        hideNav: true,
        outline: true
      },{
        key:9,
        title:"Tumblr Menu",
        component: Day10,
        isFA: false,
        icon: "logo-tumblr",
        size:50,
        color:"#37465c",
        hideNav: true,
      },{
        key:10,
        title:"OpenGL",
        component: Day11,
        isFA: false,
        icon: "ios-contrast",
        size:50,
        color:"#2F3600",
        hideNav: false,
      },{
        key:11,
        title:"charts",
        component: Day12,
        isFA: false,
        icon: "ios-stats",
        size:50,
        color:"#fd8f9d",
        hideNav: false,
      },{
        key:12,
        title:"tweet",
        component: Day13,
        isFA: false,
        icon: "ios-chatboxes",
        size:50,
        color:"#83709d",
        hideNav: true,
      },{
        key:13,
        title:"tinder",
        component: Day14,
        isFA: false,
        icon: "ios-bonfire",
        size:50,
        color:"#ff6b6b",
        hideNav: true,
      },{
        key:14,
        title:"Time picker",
        component: Day15,
        isFA: false,
        icon: "ios-calendar-outline",
        size:50,
        color:"#ec240e",
        hideNav: false,
        }]
      // },{
      //   key:15,
      //   title:"Gesture unlock",
      //   component: Day16,
      //   isFA: false,
      //   icon: "unlocked",
      //   size:50,
      //   color:"#32A69B",
      //   hideNav: true,
      // },{
      //   key:16,
      //   title:"Fuzzy search",
      //   component: Day17,
      //   isFA: false,
      //   icon: "search",
      //   size:50,
      //   color:"#69B32A",
      //   hideNav: false,
      // },{
      //   key:17,
      //   title:"Sortable",
      //   component: Day18,
      //   isFA: false,
      //   icon: "arrow-move",
      //   size:50,
      //   color:"#68231A",
      //   hideNav: true,
      // },{
      //   key:18,
      //   title:"TouchID to unlock",
      //   component: Day19,
      //   isFA: false,
      //   icon: "log-in",
      //   size:50,
      //   color:"#fdbded",
      //   hideNav: true,
      // },{
      //   key:19,
      //   title:"Single page Reminder",
      //   component: Day20,
      //   isFA: false,
      //   icon: "ios-list-outline",
      //   size:50,
      //   color:"#68d746",
      //   hideNav: true,
      // },{
      //   key:20,
      //   title:"Multi page Reminder",
      //   component: Day21,
      //   isFA: false,
      //   icon: "ios-paper-outline",
      //   size:50,
      //   color:"#fe952b",
      //   hideNav: true,
      // },{
      //   key:21,
      //   title:"Google Now",
      //   component: Day22,
      //   isFA: false,
      //   icon: "android-microphone",
      //   size:50,
      //   color:"#4285f4",
      //   hideNav: true,
      // },{
      //   key:22,
      //   title:"Local WebView",
      //   component: Day23,
      //   isFA: true,
      //   icon: "safari",
      //   size:50,
      //   color:"#23bfe7",
      //   hideNav: false,
      // },{
      //   key:23,
      //   title:"Youtube scrollable tab",
      //   component: Day24,
      //   isFA: false,
      //   icon: "social-youtube",
      //   size:50,
      //   color:"#e32524",
      //   hideNav: true,
      // },{
      //   key:24,
      //   title:"custome in-app browser",
      //   component: Day25,
      //   isFA: false,
      //   icon: "ios-world",
      //   size:50,
      //   color:"#00ab6b",
      //   hideNav: true,
      // },{
      //   key:25,
      //   title:"swipe and switch",
      //   component: Day26,
      //   isFA: false,
      //   icon: "shuffle",
      //   size:50,
      //   color:"#893D54",
      //   hideNav: true,
      // },{
      //   key:26,
      //   title:"iMessage Gradient",
      //   component: Day27,
      //   isFA: false,
      //   icon: "ios-chatbubble",
      //   size:50,
      //   color:"#248ef5",
      //   hideNav: false,
      // },{
      //   key:27,
      //   title:"iMessage image picker",
      //   component: Day28,
      //   isFA: false,
      //   icon: "images",
      //   size:50,
      //   color:"#f5248e",
      //   hideNav: true,
      // },{
      //   key:28,
      //   title:"iMessage image picker",
      //   component: Day29,
      //   isFA: false,
      //   icon: "navicon-round",
      //   size:50,
      //   color:"#48f52e",
      //   hideNav: false,
      // },{
      //   key:29,
      //   title:"Push Notifications",
      //   component: Day30,
      //   isFA: false,
      //   icon: "android-notifications",
      //   size:50,
      //   color:"#f27405",
      //   hideNav: false,
      // }]
    }
  }


  componentWillMount() {
    DeviceEventEmitter.addListener(
    'quickActionShortcut', (data) => {
      switch(data.title){
        case "Day5":
          this._jumpToDay(4);
          break;
        // case "Day22":
        //   this._jumpToDay(21);
        //   break;
        // case "Day26":
        //   this._jumpToDay(25);
        //   break;
        // case "Day28":
        //   this._jumpToDay(27);
        //   break;
      }
    });
  }

  _jumpToDay(index){
    this.props.navigator.push({
      title: this.state.days[index].title,
      component: this.state.days[index].component,
      navigationBarHidden: this.state.days[index].hideNav,
    })
  }

  render() {
    var onThis = this;
    var boxs = this.state.days.map(function(elem, index) {
      return(
        <TouchableHighlight key={elem.key} style={[styles.touchBox, index%3==2?styles.touchBox2:styles.touchBox1]} underlayColor="#eee" onPress={()=> onThis._jumpToDay(index)}>
          <View style={styles.boxContainer}>
            <Text style={styles.boxText}>Day{index+1}</Text>
            {elem.isFA? <IconFA size={elem.size} name={elem.icon} style={[styles.boxIcon,{color:elem.color}]}></IconFA>:
              (index+1===9)?<Zocial size={elem.size} name={elem.icon} style={[styles.boxIcon,{color:elem.color}]}></Zocial>:<Icon size={elem.size} name={elem.icon} style={[styles.boxIcon,{color:elem.color}]}></Icon>}
          </View>
        </TouchableHighlight>
      );
    })
    return(
      <ScrollView>
        <Swiper height={150} showsButtons={false} autoplay={true}
          activeDot={<View style={{backgroundColor: 'rgba(255,255,255,0.8)', width: 8, height: 8, borderRadius: 4, marginLeft: 3, marginRight: 3, marginTop: 3, marginBottom: 3,}} />}>
          <TouchableHighlight onPress={()=> onThis._jumpToDay(11)}>
            <View style={styles.slide}>
              <Image style={styles.image} source={{uri:'day1'}}></Image>
              <Text style={styles.slideText}>Day12: Charts</Text>
            </View>
          </TouchableHighlight>
          <TouchableHighlight onPress={()=> onThis._jumpToDay(10)}>
            <View style={styles.slide}>
              <Image style={styles.image} source={{uri:'day2'}}></Image>
              <Text style={styles.slideText}>Day11: OpenGL</Text>
            </View>
          </TouchableHighlight>
        </Swiper>
        <View style={styles.touchBoxContainer}>
          {boxs}
        </View>
      </ScrollView>
    );
  }
}


class TLReactNativeResearch extends Component{
  componentDidMount() {
    StatusBar.setBarStyle(0);
  }

  render(){
    return (
      <NavigatorIOS
        ref='nav'
        style={styles.container}
        initialRoute={{
          title:"30 Days of RN",
          component: MainView,
          backButtonTitle: 'back',
          shadowHidden: true,
        }}
        itemWrapperStyle={styles.itemWrapper}
        tintColor="#777"
      />
    );
  }
}

const styles = StyleSheet.create({
  container:{
    flex:1,
  },
  itemWrapper:{
    backgroundColor: '#f3f3f3'
  },
  touchBox:{
    width: Util.size.width/3-0.33334,
    height:Util.size.width/3,
    backgroundColor:"#fff",
  },
  touchBoxContainer:{
    flexDirection: "row",
    flexWrap:"wrap",
    width: Util.size.width,
    borderTopWidth: Util.pixel,
    borderTopColor:"#ccc",
    borderLeftWidth: Util.pixel,
    borderLeftColor:"#ccc",
    borderRightWidth: Util.pixel,
    borderRightColor:"#ccc",
  },
  touchBox1:{
    borderBottomWidth: Util.pixel,
    borderBottomColor:"#ccc",
    borderRightWidth: Util.pixel,
    borderRightColor:"#ccc",
  },
  touchBox2:{
    borderBottomWidth: Util.pixel,
    borderBottomColor:"#ccc",
    borderLeftWidth: Util.pixel,
    borderLeftColor:"#ccc",
  },
  boxContainer:{
    alignItems:"center",
    justifyContent:"center",
    width: Util.size.width/3,
    height:Util.size.width/3,
  },
  boxIcon:{
    position:"relative",
    top:-10
  },
  boxText:{
    position:"absolute",
    bottom:15,
    width:Util.size.width/3,
    textAlign:"center",
    left: 0,
    backgroundColor:"transparent"
  },
  slide: {
    flex: 1,
    height: 150,
    justifyContent: 'center',
    alignItems: 'center',
  },
  slideText:{
    position:"absolute",
    bottom: 0,
    paddingTop:5,
    paddingBottom:5,
    backgroundColor:"rgba(255,255,255,0.5)",
    width: Util.size.width,
    textAlign:"center",
    fontSize: 12
  },
  image:{
    width: Util.size.width,
    flex: 1,
    alignSelf: 'stretch',
  }
});

AppRegistry.registerComponent('TLReactNativeResearch', () => TLReactNativeResearch);
