import React, { useState, useEffect } from 'react';
import { Router, Scene, Tabs, } from 'react-native-router-flux';
import { Icon } from '@ant-design/react-native';
import Shouye from './components/Shouye';
import Fenlei from './components/Fenlei';
import Gouwuche from './components/Gouwuche';
import Geren from './components/Geren';
import Release from './components/Release';
import { Image } from 'react-native';

const App = () => {
  return (
    <Router>
      <Scene key="root">
        <Tabs key="tabbar" activeTintColor="red" hideNavBar>
          <Scene 
            key="shouye"
            title="首页"
            icon={({focused})=><Icon color={focused ? 'red' : 'gray'} name="home"/>}
          >
            <Scene key="shou" component={Shouye} hideNavBar/>
          </Scene>

          <Scene 
            key="fenlei"
            title="商品分类"
            icon={({focused})=><Icon color={focused ? 'red' : 'gray'} name="appstore"/>}
          >
            <Scene key="fen" component={Fenlei} hideNavBar/>
          </Scene>

          <Scene 
            key="gouwuche"
            title="购物车"
            icon={({focused})=><Icon color={focused ? 'red' : 'gray'} name="shopping-cart"/>}
          >
            <Scene key="gou" component={Gouwuche} hideNavBar/>
          </Scene>

          <Scene 
            key="geren"
            title="个人中心"
            icon={({focused})=><Icon color={focused ? 'red' : 'gray'} name="user"/>}
          >
            <Scene key="ren" component={Geren} hideNavBar/>
            <Scene key="release" component={Release} renderTitle="我的发布" navigationBarStyle={{backgroundColor:'red'}} titleStyle={{flex:1,textAlign:'center',color:'white'}} renderRightButton={<Image source={require('./assets/more.png')}/>} backButtonImage={require('./assets/ret.png')} />
          </Scene>
        </Tabs>
      </Scene>
    </Router>
  );
};

export default App;