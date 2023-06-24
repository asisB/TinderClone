import React from 'react';
import { Text, Image, View, ImageBackground ,StyleSheet } from 'react-native';

const App = () => { //view is a container like a stack to put view in format  {{}} - for straight design else {} curly bracet
  return (
    <View style={styles.pageContainer}>  
    <View style={styles.card}>  
    <ImageBackground source={{
      uri:"https://notjustdev-dummy.s3.us-east-2.amazonaws.com/avatars/vadim1.JPG"
    }} 
    style={styles.image}>
      <View style={styles.cardInner}>
      <Text style={styles.name}>Elon Musk</Text>
      <Text style={styles.bio} >Hello this is Elon Musk. CEO of Twitter, Tesla and World!.</Text>
      </View>
    </ImageBackground>
    </View>
    </View>
  );
}

const styles = StyleSheet.create({  //stylesheet is used for design 
  pageContainer: {
    justifyContent: 'center', 
    alignItems: 'center', 
    flex: 1
  }, 
  card: {
    width: '95%',
    height: '60%',
    borderRadius: 10,

    shadowColor: "#000",
    shadowOffset: {
  	width: 0,
  	height: 5,
},
    shadowOpacity: 0.36,
    shadowRadius: 6.68,
    elevation: 11,
},
  image: {
    width: '100%',
    height: '100%',
    borderRadius: 10,
    overflow: 'hidden',

    justifyContent: 'flex-end',

  },
  cardInner: {
    padding: 10,

  },
  name: {
    fontSize: 28,
    color: 'white',
    fontWeight: 'bold',
  },
  bio: {
    fontSize: 18,
    color: 'white',
    lineHeight: 24,
  }
})
export default App;

