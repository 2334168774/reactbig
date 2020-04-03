import React, { Component } from 'react'
import {View,Text,Button} from 'react-native';

export default class Counter extends Component {
    constructor(){
        super();
        this.state = {
            count:0
        }
    }
    
    onAdd=()=>{
        this.setState((state)=>{
            return{
                count:state.count+1
            }
        }
        )
    }
    render() {
        return (
            <View>
                <Text>{this.state.count}</Text>
                <Button onPress={this.onAdd} title="+1"/>
            </View>
        )
    }
}
/** 函数写法
 * const Conunter = () =>{
 *      let [num,setNum] = useState(0);
 *      return(
 *          <View>
 *              <Text>{num}</Text>
 *              <Button onPress={()=>setNum(num+1)} title="点击+1"/>
 *          </View>
 *      )
 * }
 * export default Counter;
*/