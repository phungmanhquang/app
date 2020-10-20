import * as React from 'react';
import { Image, StyleSheet } from 'react-native';

import { Text, View } from '../components/Themed';

export default function ItemComponent(props: { style: any, showDesc: boolean }) {
  return (
    <View style={{...styles.Item, ...props.style }}>
        <Image
            style={styles.ItemImg}
            source={require("../assets/commic/nghich-thien-chien-than/avt.jpg")}
        />
        <Text 
            style={styles.ItemTitle}
            onPress={() => console.log('http://google.com')}>
            nghich thien chien than
        </Text>
        {
            props.showDesc ? 
            <Text style={styles.ItemDesc}>
                The title and onPress handler are required...
            </Text>
            : null
        }
    </View>  
  );
}

const styles = StyleSheet.create({
    container: {},
    title: { fontSize: 20, fontWeight: "400", padding: 15 },
    outSideList: {
      display: "flex",
      flexDirection: "row",
      justifyContent: "space-around",
      flexWrap: "wrap",
    },
    Item: {
      margin: "0 auto",
      marginBottom: 12,
    },
    ItemImg: {
      width: "100%",
      height: 100,
      borderRadius: 4,
    },
    ItemTitle: { color: "#424141", fontSize: 12, fontWeight: "bold" },
    ItemDesc: { color: "#9e9e9e", fontSize: 10 },
  });
  
