import React, { Component } from 'react';
import { View, Text, Image, StatusBar, TouchableOpacity } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

import { Colors } from '../../Colors/Colors';
import Slider from "react-native-slider";
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
// import Sound from 'react-native-sound';
var Sound = require('react-native-sound')
Sound.setCategory('Playback');


var NAAT = new Sound('naat.mp3', Sound.MAIN_BUNDLE, (error) => {
    if (error) {
        console.log('failed to load the sound', error);
        return;
    }
    // loaded successfully
    console.log('duration in seconds: ' + NAAT.getDuration() + 'number of channels: ' + NAAT.getNumberOfChannels());
});

export default class Mp3Player extends Component {
    constructor(props) {
        super(props);
        this.state = {
            value: 0,
            playButton: false,
            // sliderStratTime:
            
        };
    }
    componentDidMount() {
        // https://api.covid19api.com/total/dayone/country/pakistan

        fetch('https://api.spotify.com/v1/tracks/2TpxZ7JUBn3uw46aR7qd6V')
            // .then(res => res.json())
            .then((res) => {
                console.log('Output========:::: ', res);

                // if (res != "" || res != undefined) {
                //     this.setState({
                //         loader: false
                //     })
                // }
                

            }).catch(err => console.error("-------ERROR------>", err));
    
    }


    playSound() {
        this.setState({
            playButton: true
        })
        NAAT.play()
    }

    stopSound() {
        this.setState({
            playButton: false
        })
        NAAT.pause()
    }

    ItemView = (item, index) => {
        // let {audioList} =this.state;
        return (
            <>
                {/* Song Cover Image */}
                < View style={{
                    marginTop: hp(6),
                    alignItems: 'center',
                }
                }>
                    <Image
                        resizeMode='contain'
                        source={require('../../Assets/Images/aud1.jpg')}
                        // source={item.img}
                        // source={{uri: item.imgUrl}}
                        style={{
                            width: wp(80),
                            height: hp(38),
                            borderRadius: 20
                        }}>
                    </Image>
                </View >

                {/* Song Title */}
                < View style={{
                    alignItems: 'center',
                    justifyContent: 'center',
                    marginTop: hp(3),
                }}>
                    <Text style={{
                        fontSize: hp(3),
                        color: Colors.secondary_color,
                        fontWeight: '600'
                    }}>Title
                        {/* {item.title} */}
                    </Text>

                    <Text style={{
                        fontSize: hp(2.4),
                        color: Colors.gray,
                        // fontWeight:'600'
                    }}>
                        Artist
                    </Text>
                </View >

                {/* Song Slider Bar */}
                < View style={{
                    marginTop: hp(8),
                    marginHorizontal: wp(10),
                }}>
                    <Slider
                        value={this.state.value}
                        onValueChange={value => this.setState({ value: value })}
                        minimumTrackTintColor={Colors.secondary_color}
                        maximumTrackTintColor={Colors.white}
                        thumbTintColor={Colors.secondary_color}
                    />
                    <View style={{
                        flexDirection: 'row',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                    }}>
                        <Text style={{
                            fontSize: hp(2),
                            color: Colors.secondary_color,
                        }}>00:00</Text>

                        <Text style={{
                            fontSize: hp(2),
                            color: Colors.secondary_color
                        }}>00:00</Text>

                    </View>
                </View >

                {/* Song Play Buttons */}
                < View style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    marginTop: hp(6),
                    marginHorizontal: wp(17),
                }}>
                    <TouchableOpacity>
                        <FontAwesome5 name='backward' color={Colors.secondary_color} size={32} />
                    </TouchableOpacity>

                    <View style={{
                        // Play button Circle Border
                        alignItems: 'center',
                        justifyContent: 'center',
                        backgroundColor: Colors.grayBox,
                        borderRadius: 100,
                        height: hp(15),
                        width: hp(15),
                    }}>
                        <View style={{
                            alignItems: 'center',
                            justifyContent: 'center',
                            borderRadius: 100,
                            height: hp(10),
                            width: hp(10),
                            backgroundColor: Colors.secondary_color,
                        }}>
                            {this.state.playButton ?
                                <TouchableOpacity
                                    onPress={() => this.stopSound()}
                                >
                                    <FontAwesome5 name='pause' color={Colors.primary_color} size={28} />
                                </TouchableOpacity>
                                :
                                <TouchableOpacity
                                    onPress={() => this.playSound()}
                                >
                                    <FontAwesome5 name='play' color={Colors.primary_color} size={28} />
                                </TouchableOpacity>
                            }
                        </View>

                    </View>
                    <TouchableOpacity >
                        <FontAwesome5 name='forward' color={Colors.secondary_color} size={32} />
                    </TouchableOpacity>
                </View >
            </>
        )
    }

    render() {
        return (
            <View style={{
                flex: 1,
                backgroundColor: Colors.primary_color,
            }}>
                <StatusBar backgroundColor={Colors.primary_color} />


                { this.ItemView() }


            </View >
        );
    }
}
