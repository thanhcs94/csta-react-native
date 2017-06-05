# Tumblr React Native

# Milestone

* Milestone 1: Setup
* Milestone 2: Fetch Actual Data
* Milestone 3: Implement GridView
* Milestone 4: Tap to image to like or dislike.
* Milestone 5: Infinite Scrolling
* Milestone 6: RefreshControl

# Milestone 1 : Setup

[API] (https://api.tumblr.com/v2/blog/xkcn.info/posts/photo?api_key=Q6vHoaVm5L1u2ZAW1fqv3Jw48gFzYVg9P0vH0VHl3GVy6quoGV)
[Tumblr API Document](https://www.tumblr.com/docs/en/api/v2)

```javascript
  react-native init TumblrReact
  cd TumblrReact
  react native run-ios
```

# Milestone 2: Fetch Actual Data
* Get data

```javascript
getDatafromTumblr() {
        return fetch(your_api)
          .then((response) => response.json())
          .then((responseJson) => {
            console.log(responseJson);
            this.setState({
              holderText: 'SUCCESS'
            })
            return responseJson;
          })
          .catch((error) => {
            console.error(error);
          });
      }
```
```javascript
componentDidMount () {
    this.getDatafromTumblr();
  }
```
To check your data fetching
```javascript
  react-native log-ios/android
```

* Create an listview and renderow

init yout listview

```javascript
constructor(props){
    super(props);
    this.state = {
      dataSource : new ListView.DataSource({rowHasChanged:(r2, r1)=> r1!=r2}),
      holderText: 'loading....'
    }
  }
```
```javascript
  <ListView
      dataSource= {this.state.dataSource}
      renderRow = {this.renderRow}
  />
```

```javascript
renderRow =(rowData)=>{
     return (
       <View>
          <Image source={{uri:rowData.photos[0].original_size.url}} style ={{width:400, height:300}}/>
          <Text style = {{marginTop:8, marginBottom:32 ,fontSize:13}}>{rowData.caption}</Text>
       </View>
     )
    }

```
* Todo 
#1 : Flatlist
#2 : Griview
