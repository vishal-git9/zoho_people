import React from "react";
import { StyleSheet, View } from "react-native";
import PaginationCarouse from "../components/carousels/paginationCarouse";

export const IntroScreen = ({navigation}) => {
  const views1 = []; // Add your data here
  return (
    <View style={styles.parentScreen}>
        <PaginationCarouse data={views1} navigation={navigation} />
    </View>
  );
};

const styles = StyleSheet.create({
    parentScreen:{
        flex: 1,
        backgroundColor:"white"
    },
})