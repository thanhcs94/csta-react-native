# csta-react-native

# Fast arrow function

```javascript
export default class Welcome extends Component {
    _onClickText =(...args)=> {
        alert((args[0]+ args[1] + '\n length args = '+ args.length));
    }
    render(){
        return (
            <View style={{alignItems:'center',justifyContent:'center', flex:1}}>
                <TouchableOpacity onPress = {()=>this._onClickText(10, 100)}>
                     <Text>This is a clickable Text</Text>
                </TouchableOpacity>
            </View>
        );
    }
}
```
default

```javascript
 _onClickText = (x = -1)=>{
        x ==-1?alert('x = -1'):alert(x);
    }
//onPress = {()=>this._onClickText(100)} : alert :  100
//onPress = {()=>this._onClickText()}    : alert :  -1
//onPress = {this._onClickText}>         : _onClickText = ()=>{}
```

# StackNavigator

Index.ios or . Android

```javascript
import {
  StackNavigator,
} from 'react-navigation';

const Masonry = StackNavigator({
  Home: { screen: HomeScreen },
  List: {screen: MasonryList},
  Well: {screen: Welcome},
});

AppRegistry.registerComponent('Masonry', () => Masonry);
```
How to use it in HomeScreen

```javascript
static navigationOptions = {
    title: 'Home',
  };

render() {
    const {navigate}  =  this.props.navigation;
    return (
      <View style={{alignItems:'center',justifyContent:'center', flex:1}}>
          <TouchableOpacity onPress ={()=>navigate('List')}>
              <Text>Move to MasonryList Screen</Text>
          </TouchableOpacity>

           <TouchableOpacity style={{marginTop:16}} onPress ={()=>navigate('Well', {data:'@thanhcs94'})}>
              <Text>Move to Welcome Screen  : Arrow Function</Text>
          </TouchableOpacity>

      </View>
    );
  }
```
 How to get data from Navigation

 ```javascript
 static navigationOptions = ({ navigation })=>({
   title: 'welcome BOSS : '+ navigation.state.params.data,
  });

 const {params} = this.props.navigation.state;   
 onPress ={()=>this._onClickText(params.data) 
 ```



