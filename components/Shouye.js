import React, { Component } from 'react'
import { View, Text, Button, Image, StyleSheet, Dimensions, TextInput, ScrollView } from 'react-native';
import { Actions } from 'react-native-router-flux';
import { Grid, Icon } from '@ant-design/react-native';
import Swiper from 'react-native-swiper';
const { width, scale } = Dimensions.get('window');
const s = width / 640;

export default class Shouye extends Component {

    render() {
        return (
            <ScrollView>
                <View style={{ backgroundColor: 'red',
                     width: '100%', 
                     height: 55
                }}>
                    <View style={styles.header}>
                        <View style={styles.search}>
                            <Icon name='search' style={{ color: 'white', 
                                marginLeft: 20, 
                                fontSize: 26 
                            }} />
                            <TextInput placeholder="请输入您要搜索的关键字"
                                style={{
                                    width: 450*s,
                                    height: 60*s,
                                    paddingLeft: 10,
                                    color: 'white'
                            }}/>
                            <Image source={require('../assets/gwc.png')} />
                        </View>
                    </View>
                </View>
                <Swiper style={{ height: 186,
                            marginTop:5 }} >
                    <View>
                        <Image style={{ width: '100%' }} source={require('../assets/lbt.png')} />
                    </View>
                    <View>
                        <Image style={{ width: '100%' }} source={require('../assets/lbt.png')} />
                    </View>
                    <View>
                        <Image style={{ width: '100%' }} source={require('../assets/lbt.png')} />
                    </View>
                </Swiper>
                <View style={{ width: '100%', 
                    height: 85, 
                    backgroundColor: '#ffffff',
                    flexDirection: 'row' 
                }}>
                    <Image source={require('../assets/tu2.png')} />
                    <Text style={{ marginTop: 28, 
                        marginLeft: 30, 
                        fontSize: 18, 
                         
                    }}>居家维修保养</Text>
                    <Text style={{ marginTop: 22, 
                        fontSize: 26, 
                        marginLeft: 200 }}>>
                    </Text>
                </View>
                <View style={{ width: '100%', 
                    height: 85, 
                    marginTop: 8, 
                    backgroundColor: '#ffffff', 
                    flexDirection: 'row' 
                }}>
                    <Image source={require('../assets/tu2.png')} />
                    <Text style={{ marginTop: 28, 
                        marginLeft: 30, 
                        fontSize: 18
                    }}>住宿优惠
                    </Text>
                    <Text style={{ marginTop: 22, fontSize: 26,  marginLeft: 235 }}>></Text>
                </View>
                <View style={{ width: '100%', 
                    height: 85, 
                    marginTop: 8, 
                    backgroundColor: '#ffffff', 
                    flexDirection: 'row' }}>
                    <Image source={require('../assets/tu2.png')} />
                    <Text style={{ marginTop: 28, 
                        marginLeft: 30, 
                        fontSize: 18,  
                    }}>出行接送
                    </Text>
                    <Text style={{ marginTop: 22, 
                        fontSize: 26,  
                        marginLeft: 235 
                    }}>>
                    </Text>
                </View>
                <View style={{ width: '100%', 
                    height: 85, 
                    marginTop: 8, 
                    backgroundColor: '#ffffff', 
                    flexDirection: 'row' 
                }}>
                    <Image source={require('../assets/tu2.png')} />
                    <Text style={{ marginTop: 28, 
                        marginLeft: 30, 
                        fontSize: 18,  
                    }}>E族活动
                    </Text>
                    <Text style={{ marginTop: 22, 
                        fontSize: 26,  
                        marginLeft: 240 
                    }}>>
                    </Text>
                </View>
                <View style={{ width: '80%', 
                    height: 50, 
                    backgroundColor: '#f23030', 
                    borderRadius: 4, 
                    marginTop: 30, 
                    marginLeft: 45 
                }}>
                    <Text style={{ color: 'white', 
                        fontSize: 18,
                        marginTop: 12 ,
                        marginLeft: 160
                    }}>发布需求
                    </Text>
                </View>
                <View style={{ marginTop: 22, marginLeft: 195 }}>
                    <Text style={{  fontSize: 12 }}>
                        E族之家 版权所有
                    </Text>
                </View>
            </ScrollView>
        )
    }
}


const styles = StyleSheet.create({
    header: {
        height: 70 * s,

        justifyContent: 'center',
        marginLeft: 15
    },
    search: {
        width: 544 * s,
        height: 50 * s,
        backgroundColor: '#fbb8b8',
        flexDirection: 'row',
        alignItems: 'center',
        borderRadius: 50
    }
})