import * as React from 'react';
import { Image, StyleSheet } from 'react-native';

import { Text, View } from '../components/Themed';

export default function ItemCircleComponent(props: { style: any, showDesc: boolean }) {
  return (
    <View style={{...styles.Item, ...props.style }}>
        <Image
            style={styles.ItemImg}
            source={require("../assets/commic/nghich-thien-chien-than/avt.jpg")}
        />
        <Text 
            style={styles.ItemTitle}
            onPress={() => console.log('http://google.com')}>
            tinh yeu
        </Text>
    </View>  
  );
}

const styles = StyleSheet.create({
    container: {},
    title: { fontSize: 20, fontWeight: 400, padding: 15 },
    outSideList: {
      display: "flex",
      flexDirection: "row",
      justifyContent: "space-around",
      flexWrap: "wrap",
    },
    Item: {
      margin: "0 auto",
      marginBottom: 12,
      display: 'flex',
      alignItems: "center",
      textAlign: "center",
    },
    ItemImg: {
      width: 60,
      height: 60,
      margin: '0 auto',
      borderRadius: 50,
    },
    ItemTitle: { color: "#424141", fontSize: 12, fontWeight: "bold" },
    ItemDesc: { color: "#9e9e9e", fontSize: 10 },
  });
  
