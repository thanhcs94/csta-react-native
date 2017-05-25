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

