
import React,{useState} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  View,//相当于div
  Text,
  Image,
  TextInput,
  Button,
  ScrollView,
  ImageBackground,
  StatusBar,
  TouchableOpacity,
  FlatList
} from 'react-native';
import ImageBg from './components/ImageBg';

const styles = StyleSheet.create({
  box:{
    width:"40%",
    height:100,
    margin: 10,
    backgroundColor:'blue'
  },
  txt:{
    color:"red",
  },
  size:{
    fontSize:30
  }

});
const App = () => {
   let data=[];
  for(var i=0;i<100;i++){
    data.push({key:i+'',title:i+'abc'})
  }
  // let [val, setVal] = useState('1');
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
        <ScrollView>
          
        
         
        </ScrollView>
        
      </SafeAreaView>
      <FlatList
          data={data}
          renderItem={({item,index})=>(
            <View>
              <Text>{item.title}</Text>
            </View>
          )}
         />
    </>
  );
};


export default App;



{/* <View style={{flexDirection:'row',height:40,flexDirection:'row',justifyContent:'center'}}>
            <View style={{
              width:'80%',
              marginRight:10,
              backgroundColor:'#ccc',
              alignItems:'center',
              flexDirection:'row',
              borderRadius:20,
              paddingLeft:20
            }}>
              <Image style={{width:20,height:20}} source={require('./assets/icon/user.png')}/>
              <TextInput placeholder="搜索" />
            </View> */}
            {/* <TouchableOpacity
            style={{
              width:40,
              height:40,
              borderWidth:1,
              backgroundColor:'#ccc',
              alignItems:"center",
              justifyContent:'center',
              borderRadius:20,
            }}
          >
            <Text style={{color:'#000',fontSize:20}}>
              +
            </Text>
          </TouchableOpacity> */}
          {/* </View> */}
          {/* <View style={{
            width:34,
            height:34,
            borderRadius:17,
            overflow:'hidden'
          }}>
            <Button
              onPress={()=>{}}
              title="+"
            />
          </View> */}
          
          {/* <TouchableOpacity
            style={{
              width:40,
              height:40,
              backgroundColor:'blue',
              alignItems:"center",
              justifyContent:'center',
              borderRadius:20,
            }}
          >
            <Text style={{color:'#fff',fontSize:20}}>
              +
            </Text>
          </TouchableOpacity> */}

          {/* 钉钉头部搜索框 */}
          {/* <View style={{flexDirection:'row'}}>
            <View>
              <Image />
              <TextInput />
            </View>
            <Button />
          </View> */}  

        {/* flex 布局 */}
        {/* 在 rn 中，组件 默认设置了 flex 属性，默认主轴是 竖轴 */}
        {/* justifyContent:定义主轴对齐方式 */}
        {/* alignItems:定义交叉轴对齐方式 */}
        {/* <View style={{
          flexDirection:'row',
          justifyContent:"space-evenly",
          flexWrap:'wrap'
        }}> */}
          {/* <View style={styles.box}>
            <Text>1</Text>
          </View>
          <View style={styles.box}>
            <Text>1</Text>
          </View>
          <View style={styles.box}>
            <Text>1</Text>
          </View>
          <View style={styles.box}>
            <Text>1</Text>
          </View>
          <View style={styles.box}>
            <Text>1</Text>
          </View>
          <View style={styles.box}>
            <Text>1</Text>
          </View>
        </View> */}


        {/* 受控组件 */}
        {/* <Text>{val}</Text>
        <TextInput 
          placeholder="请输入内容"
          onChangeText={(val)=>{setVal(val)}}
          style={{
            borderColor: 'red',
            height: 50,
            paddingLeft:30,
            borderWidth: 1,
            borderRadius: 24
          }}
        /> */}

        {/* 自定义组件 ImageBg */}
        {/* <ImageBg  
          source={require('./assets/rn.png')}
          style={{width:300,height:300}} 
        >
          <View style={styles.box}></View>
          <Text style={[styles.txt,styles.size]}>hello</Text>
        </ImageBg>

        <ImageBackground 
          style={{width:300,height:300}} 
          source={require('./assets/rn.png')
        }>
          <View style={styles.box}></View>
          <Text style={[styles.txt,styles.size]}>hello</Text>
        </ImageBackground> */}
