// import React, { Component } from 'react';
// import { View, Text, Image, StatusBar, TouchableOpacity } from 'react-native';
// import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

// import { Colors } from '../../Colors/Colors';
// import Slider from "react-native-slider";
// import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
// import Sound from 'react-native-sound';

// // let sound1, sound2, sound3, sound4, sound5, sound6;


// export default class PlayerComponents extends Component {
//   constructor(props) {
//     super(props);
//       this.state = {
//         audioList: [
//             {
//                 title: 'Naat e Rasool',
//                 isRequire: true,
//                 url: require('../../Assets/Mp3Tracks/naat.mp3'),
//                 img: require('../../Assets/Images/aud1.jpg')
//             },
//             // {
//             //     title: 'Play mp3 sound from remote ',
//             //     url:
//             //         'https://raw.githubusercontent.com/zmxv/react-native-sound-demo/master/advertising.mp3',
//             // },

//             {
//                 title: 'Play aac sound from Local',
//                 isRequire: true,
//                 url: require('../../Assets/Mp3Tracks/naat2.mp3'),
//                 img: require('../../Assets/Images/aud2.jpg'),
//                 imgUrl:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSV_3__yOAbSzvUsAqFfZW8MTypTiCHazec4A&usqp=CAU"
//             },
//             // {
//             //     title: 'Play aac sound from remote ',
//             //     url:
//             //         'https://raw.githubusercontent.com/zmxv/react-native-sound-demo/master/pew2.aac',
//             // },
//             {
//                 title: 'Play wav sound from Local',
//                 isRequire: true,
//                 url: require('../../Assets/Mp3Tracks/naat3.mp3'),
//                 img: require('../../Assets/Images/aud3.jpg')
//             },
//             // {
//             //     title: 'Play wav sound from remote ',
//             //     url:
//             //         'https://raw.githubusercontent.com/zmxv/react-native-sound-demo/master/frog.wav',
//             // },
//         ]
//     };
//     }
//     // componentDidMount() {
//     //     Sound.setCategory('Playback', true); // true = mixWithOthers
//     //     return () => {
//     //         if (sound1) sound1.release();
//     //         if (sound2) sound2.release();
//     //         if (sound3) sound3.release();
//     //         if (sound4) sound4.release();
//     //         if (sound5) sound5.release();
//     //         if (sound6) sound6.release();
//     //     };
//     // }

//     render() {
//         let { audioList } = this.state;
      
//     return (
//       <View>
//                 {/* Song Cover Image */}
//                 < View style={{
//                     marginTop: hp(6),
//                     alignItems: 'center',
//                 }
//                 }>
//                     <Image
//                         // resizeMode='contain'
//                         // source={require('../../Assets/Images/aud1.jpg')}
//                         // source={this.state.audioList.item.img}
//                         source={{uri : audioList.item.imgUrl}}
//                         style={{
//                             width: wp(80),
//                             height: hp(38),
//                             borderRadius: 20
//                         }}>
//                     </Image>
//                 </View >

//                 {/* Song Title */}
//                 < View style={{
//                     alignItems: 'center',
//                     justifyContent: 'center',
//                     marginTop: hp(3),
//                 }}>
//                     <Text style={{
//                         fontSize: hp(3),
//                         color: Colors.secondary_color,
//                         fontWeight: '600'
//                     }}>
//                         {item.title}
//                     </Text>

//                     <Text style={{
//                         fontSize: hp(2.4),
//                         color: Colors.gray,
//                         // fontWeight:'600'
//                     }}>
//                         Artist
//                     </Text>
//                 </View >

//                 {/* Song Slider Bar */}
//                 < View style={{
//                     marginTop: hp(8),
//                     marginHorizontal: wp(10),
//                 }}>
//                     <Slider
//                         value={this.state.value}
//                         onValueChange={value => this.setState({ value: value })}
//                         minimumTrackTintColor={Colors.secondary_color}
//                         maximumTrackTintColor={Colors.white}
//                         thumbTintColor={Colors.secondary_color}
//                     />
//                     <View style={{
//                         flexDirection: 'row',
//                         alignItems: 'center',
//                         justifyContent: 'space-between',
//                     }}>
//                         <Text style={{
//                             fontSize: hp(2),
//                             color: Colors.secondary_color,
//                         }}>00:00</Text>

//                         <Text style={{
//                             fontSize: hp(2),
//                             color: Colors.secondary_color
//                         }}>00:00</Text>

//                     </View>
//                 </View >

//                 {/* Song Play Buttons */}
//                 < View style={{
//                     flexDirection: 'row',
//                     alignItems: 'center',
//                     justifyContent: 'space-between',
//                     marginTop: hp(6),
//                     marginHorizontal: wp(17),
//                 }}>
//                     <TouchableOpacity>
//                         <FontAwesome5 name='backward' color={Colors.secondary_color} size={32} />
//                     </TouchableOpacity>

//                     <View style={{
//                         // Play button Circle Border
//                         alignItems: 'center',
//                         justifyContent: 'center',
//                         backgroundColor: Colors.grayBox,
//                         borderRadius: 100,
//                         height: hp(15),
//                         width: hp(15),
//                     }}>
//                         <View style={{
//                             alignItems: 'center',
//                             justifyContent: 'center',
//                             borderRadius: 100,
//                             height: hp(10),
//                             width: hp(10),
//                             backgroundColor: Colors.secondary_color,
//                         }}>
//                             {this.state.playButton ?
//                                 <TouchableOpacity
//                                     onPress={() => this.stopSound()}
//                                 >
//                                     <FontAwesome5 name='pause' color={Colors.primary_color} size={28} />
//                                 </TouchableOpacity>
//                                 :
//                                 <TouchableOpacity
//                                     onPress={() => this.playSound()}
//                                 >
//                                     <FontAwesome5 name='play' color={Colors.primary_color} size={28} />
//                                 </TouchableOpacity>
//                             }
//                         </View>

//                     </View>
//                     <TouchableOpacity >
//                         <FontAwesome5 name='forward' color={Colors.secondary_color} size={32} />
//                     </TouchableOpacity>
//                 </View >
//       </View>
//     );
//   }
// }
