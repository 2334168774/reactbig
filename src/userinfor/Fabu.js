import React, { Component } from 'react'
import {
    View,
    Text,
    ScrollView,
    StatusBar,
    ToastAndroid
} from 'react-native';
export default class Release extends Component {
    constructor() {
        super();
        this.state = {
            page: 1,
            tits: []
        }
    }
    componentDidMount() {
        fetch('https://cnodejs.org/api/v1/topics?page=0' + '&limit=15')
            .then(res => res.json())
            .then(res => {
                this.setState({ tits: res.data });
            })
    }
    BackTitle = () => {
        if (this.state.page > 1) {
            this.setState({
                page: this.state.page - 1
            }, () => {
                fetch('https://cnodejs.org/api/v1/topics?page=' + this.state.page + '&limit=15')
                    .then(res => res.json())
                    .then(res => {
                        this.setState({ tits: res.data });
                    })
            })
        }
        else {
            ToastAndroid.show('抱歉，已经到顶了', 1000);
        }
    }
    NextTitle = () => {
        this.setState({
            page: this.state.page + 1
        }, () => {
            fetch('https://cnodejs.org/api/v1/topics?page=' + this.state.page + '&limit=15')
                .then(res => res.json())
                .then(res => {
                    this.setState({ tits: res.data });
                })
        })
    }
    render() {
        return (
            <View style={{backgroundColor:'white',height: 500 }}>
                <StatusBar backgroundColor='transparent' translucent={true} />
                <ScrollView style={{ backgroundColor: 'white' }}>
                    {
                        this.state.tits.map((item) => (
                            <View style={{ flexDirection: "row",height:30}}>
                                <Text numberOfLines={1} 
                                    style={{ fontSize: 16,
                                        width: 280, 
                                        color: 'black',
                                        marginLeft:6
                                }}>{item.title}</Text>
                                <Text style={{ fontSize: 16,
                                    marginLeft: 28, 
                                    color: 'black' 
                                }}>{(item.create_at).substr(0, 10)}</Text>
                                <Text style={{ fontSize: 16,
                                    marginLeft: 30, 
                                    color: 'black' 
                                }}>{item.title.length % 2 == 1 ? <Text>已回复</Text> : <Text style={{ color: 'red' }}>待回复</Text>}</Text>
                            </View>
                        ))
                    }
                </ScrollView>
                <View style={{ flexDirection: 'row' }}>
                    <View style={{marginLeft:60,marginTop:8}}>
                        <Text style={{color:'white',backgroundColor:'red'}} onPress={this.BackTitle}>上一页</Text>
                    </View>
                    <Text style={{marginLeft:120,marginTop:8,fontSize:15}}>第{this.state.page}页</Text>
                    <View style={{marginLeft:120,marginTop:8}}>
                        <Text style={{color:'white',backgroundColor:'red'}} onPress={this.NextTitle}>下一页</Text>
                    </View>
                </View>
            </View>
        )
    }
}