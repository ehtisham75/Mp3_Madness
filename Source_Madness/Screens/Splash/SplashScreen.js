import React, { Component } from 'react';
import { View, Text, StatusBar, Image } from 'react-native';
import { Colors } from '../../Colors/Colors';
import Language from '../../Language/English.json';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { CommonActions } from '@react-navigation/native';

export default class SplashScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  componentDidMount() {

      setTimeout(() => {
        this.props.navigation.dispatch(
          CommonActions.reset({
            index: 0,
            routes: [
              {
                name: 'Mp3Player',
                // name: 'Mp3Player',
                //   params: {}
              },
            ],
          }));

      }, 3000);
    }

  render() {
    return (
      <View style={{
        flex: 1,
        backgroundColor: Colors.primary_color,
        alignItems: 'center',
        // justifyContent: 'center',
      }}>
        <StatusBar hidden />
        {/* <StatusBar backgroundColor={Colors.primary_color} translucent /> */}

        <Image
          source={require('../../Assets/Images/logo.png')}
          style={{
            width: wp(40),
            height: hp(20),
            marginTop: hp(41),
          }}></Image>
        <Text style={{
          fontSize: hp(4.5),
          color: Colors.secondary_color,
          fontFamily: 'monospace',
          marginTop: hp(28),
          // fontWeight:'600'
          // bottom:5
        }}>{Language.music_madness}</Text>
      </View>
    );
  }
}
