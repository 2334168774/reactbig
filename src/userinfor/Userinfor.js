import React, { Component } from 'react';
import { View, Text, Image, StyleSheet,AsyncStorage} from 'react-native';
import {Actions} from 'react-native-router-flux';
import ImagePicker from 'react-native-image-picker';

const options = {
    title: '选择图片', 
    cancelButtonTitle: '取消',
    takePhotoButtonTitle: '拍照', 
    chooseFromLibraryButtonTitle: '选择照片', 
    cameraType: 'back',
    mediaType: 'photo',
    videoQuality: 'high', 
    durationLimit: 10, 
    maxWidth: 300,
    maxHeight: 300,
    quality: 0.8, 
    angle: 0,
    rotation:90,
    allowsEditing: false, 
    noData: false,
    storageOptions: {
        skipBackup: true  
    }
  };

export default class Person extends Component {
    constructor(props) {
        super(props);
        this.state = {
            avatarSource: require('../../assets/touxiang.png')
        };
     }
     componentDidMount(){
        AsyncStorage.getItem('uri')
            .then((res)=>{
                  let reg = {uri:res}
                  this.setState({
                      avatarSource:reg
                  })
            });
      }
      takePhoto() {
          ImagePicker.showImagePicker(options, (response) => {
              if (response.didCancel) {
                  console.log('User cancelled photo picker');
              }
              else if (response.error) {
                  console.log('ImagePicker Error: ', response.error);
              }
              else if (response.customButton) {
                  console.log('User tapped custom button: ', response.customButton);
              }
              else {
                  console.log(1111,this.state.avatarSource)
                  let source = { uri: response.uri };
                  this.setState({
                      avatarSource: source
                      
                  });
                  AsyncStorage.setItem('uri',response.uri,()=>{console.log('store success')})
              }
          });
      }
      exit=()=>{
        AsyncStorage.clear();
        Actions.login();
    }
    render() {
        return (
            <View style={{borderRadius:150}}>
                <View style={{ width: '100%', 
                    height: '26%', 
                    backgroundColor: '#f23030',
                }}>   
                    <Text onPress={this.takePhoto.bind(this)} style={{position:'absolute',top:-10,left:200,width:100,height:200,borderRadius:150}}>
                        <Image
                            source={require('../../assets/touxiang.png')}
                            style={{ height: 100, width: 100}}
                            source={this.state.avatarSource} 
                        />
                    </Text>
                    <Text style={{ marginLeft: '36%', fontSize: 20, color: 'white',marginTop:150}}>
                        BINNU DHILLON
                    </Text>
                </View>
                <View style={{ backgroundColor: 'white',
                    width: '100%', 
                    height: '7%', 
                    flexDirection: 'row' 
                }}>
                    <Image source={require('../../assets/tu1.png')}
                        style={{ marginTop: 8,
                            marginLeft: 10, 
                            width: 40, 
                            height: 40 
                    }}/>
                    <Text style={{ marginTop: 20,
                        fontSize: 14, 
                        color: '#4f4e4e' 
                    }}> 我的个人中心</Text>
                </View>
                <View style={{backgroundColor: 'white', 
                    width: '100%',
                    height: '29%', 
                    borderBottomColor: 'white', 
                    borderLeftColor: 'white',
                    borderTopColor: '#e8e8e8', 
                    borderRightColor: 'white', 
                    borderWidth: 1
                }}>
                    <View style={{ width: '100%', marginTop: 10 }}>
                        <View style={{ flexDirection: "row" }}>
                            <Image style={{ width: 42, height: 42, marginLeft: 42 }} source={require('../../assets/tu1.png')} />
                            <Image style={{ width: 42, height: 42, marginLeft: 123 }} source={require('../../assets/tu1.png')} />
                            <Image style={{ width: 42, height: 42, marginLeft: 130 }} source={require('../../assets/tu1.png')} />
                        </View>
                        <View style={{ flexDirection: "row" }}>
                            <Text style={{ fontSize: 14, marginLeft: 35, color: '#4f4e4e' }}>账户管理</Text>
                            <Text style={{ fontSize: 14, marginLeft: 108, color: '#4f4e4e' }}>收货地址</Text>
                            <Text style={{ fontSize: 14, marginLeft: 116, color: '#4f4e4e' }}>我的信息</Text>
                        </View>
                        <View style={{ width: '100%', marginTop: 5 }}>
                            <View style={{ flexDirection: "row" }}>
                                <Image style={{ width: 42, height: 42, marginLeft: 42, }} source={require('../../assets/tu1.png')} />
                                <Image style={{ width: 42, height: 42, marginLeft: 123 }} source={require('../../assets/tu1.png')} />
                                <Image style={{ width: 42, height: 42, marginLeft: 130 }} source={require('../../assets/tu1.png')} />
                            </View>
                            <View style={{ flexDirection: "row" }}>
                                <Text style={{ fontSize: 14, marginLeft: 35, color: '#4f4e4e' }}>我的订单</Text>
                                <Text style={{ fontSize: 14, marginLeft: 105, color: '#4f4e4e' }}>我的二维码</Text>
                                <Text style={{ fontSize: 14, marginLeft: 105, color: '#4f4e4e' }}>我的积分</Text>
                            </View>
                        </View>

                        <View style={{ width: '100%', }}>
                            <View style={{ flexDirection: "row" }}>
                                <Image style={{ width: 42, height: 42, marginLeft: 42 }} source={require('../../assets/tu1.png')} />
                            </View>
                            <View style={{ flexDirection: "row" }}>
                                <Text style={{ fontSize: 14, marginLeft: 35, color: '#4f4e4e' }}>我的收藏</Text>
                            </View>
                        </View>
                    </View>
                </View>
                <View style={{ marginTop: 5, width: '100%', height: '7%', flexDirection: 'row', backgroundColor: 'white' }}>
                    <Image
                        source={require('../../assets/tu1.png')}
                        style={{ marginTop: 8,
                            marginLeft: 10, 
                            width: 40, 
                            height: 40 
                    }}/>
                    <Text style={{marginTop: 20,
                        fontSize: 14, 
                        color: '#4f4e4e'}}>
                        E族活动
                    </Text>
                </View>
                <View
                    style={{backgroundColor: 'white', 
                    width: '100%', 
                    height:'22%',
                    borderBottomColor: 'white', 
                    borderLeftColor: 'white',
                    borderTopColor: '#e8e8e8', 
                    borderRightColor: 'white', 
                    borderWidth: 1
                }}>
                    <View style={{ width: '100%', marginTop: 10 }}>
                        <View style={{ flexDirection: "row" }}>
                            <Image style={{ width: 42, height: 42, marginLeft: 42 }} source={require('../../assets/tu1.png')} />
                            <Image style={{ width: 42, height: 42, marginLeft: 122 }} source={require('../../assets/tu1.png')} />
                            <Image style={{ width: 42, height: 42, marginLeft: 128 }} source={require('../../assets/tu1.png')} />
                        </View>
                        <View style={{ flexDirection: "row" }}>
                            <Text style={{ fontSize: 14, marginLeft: 25, color: '#4f4e4e' }}>居家维修保养</Text>
                            <Text style={{ fontSize: 14, marginLeft: 88, color: '#4f4e4e' }}>出行接送</Text>
                            <Text style={{ fontSize: 14, marginLeft: 110, color: '#4f4e4e' }}>我的受赠人</Text>
                        </View>
                    </View>
                    <View style={{ width: '100%', marginTop: 5 }}>
                        <View style={{ flexDirection: "row" }}>
                            <Image style={{ width: 42, height: 42, marginLeft: 42 }} source={require('../../assets/tu1.png')} />
                            <Image style={{ width: 42, height: 42, marginLeft: 122 }} source={require('../../assets/tu1.png')} />
                            <Image style={{ width: 42, height: 42, marginLeft: 130 }} source={require('../../assets/tu1.png')} />
                        </View>
                        <View style={{ flexDirection: "row" }}>
                            <Text style={{ fontSize: 14, marginLeft: 25, color: '#4f4e4e' }}>我的住宿优惠</Text>
                            <Text style={{ fontSize: 14, marginLeft: 88, color: '#4f4e4e' }}>我的活动</Text>
                            <Text style={{ fontSize: 15, marginLeft: 115, color: '#4f4e4e' }} onPress={()=>Actions.fabu()} title="我的发布">我的发布</Text>
                        </View>
                    </View>
                </View>
                <View style={{ marginTop: 25}}>
                    <Text style={{ color: '#f24242' ,textAlign:"center",fontSize:20}} onPress={this.exit}>
                        退出登录
                    </Text>
                </View>
            </View>
        )
    }
}