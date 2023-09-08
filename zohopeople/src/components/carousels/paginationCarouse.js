import React, { useRef, useState, useMemo } from "react";
import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import Carousel, { Pagination } from "react-native-snap-carousel";
const renderItem3 = ({ item, index }) => {
  return useMemo(() => (
    <View style={styles.renderItem1_parentView1}>
      <Image
        source={{ uri: item.imgUrl }}
        style={[styles.renderItem1_img, { height: 250 }]}
      />
      <View style={styles.cardText}>
        <Text style={{ fontSize: 24, fontWeight: "bold" }}>{item.title}</Text>
        <Text style={{ textAlign: "center" }}>{item.descriptiom}</Text>
      </View>
    </View>
  ), [item, index]);
};
 const PaginationCarousel = ({data,carouseRef,setActiveSlide,page}) => {
  console.log("hi from carousel");

  return (
    <ScrollView style={styles.carouselContainer}>
      <View>
        <Carousel
        
          ref={carouseRef}
          onSnapToItem={(page) => setActiveSlide(page)}
          data={data}
          renderItem={renderItem3}
          sliderWidth={350}
          itemWidth={350}
          removeClippedSubviews // Add this line to improve performance
        />
        <Pagination
          activeDotIndex={page}
          carouselRef={carouseRef}
          tappableDots={true}
          inactiveDotOpacity={0.4}
          inactiveDotScale={0.6}
          dotsLength={data.length}
          dotStyle={{
            width: 8,
            borderRadius: 10,
            backgroundColor: "black",
          }}
          inactiveDotStyle={{
            backgroundColor: "grey",
          }}
        />
      </View>
              {/* signin */}
      <TouchableOpacity style={styles.Signin_btn}>
        <Text style={{ color: "white", textAlign: "center", fontSize: 12 }}>
          SIGN IN
        </Text>
      </TouchableOpacity>
        {/* signup  */}
        <View style={styles.signup_container}>
          <View style={styles.signup_view}>
            <Text style={{ fontSize: 12, fontWeight: "600" }}>
              Don't have an account?
            </Text>
            <Text style={{ color: "blue", fontWeight: "600", fontSize: 12 }}>
              SignUp
            </Text>
          </View>
          <View style={styles.signup_view}>
            <Text style={{ fontSize: 12, fontWeight: "600" }}>
              Have Trouble Signing in?
            </Text>
            <Text style={{ color: "blue", fontWeight: "600", fontSize: 12 }}>
              Contact Us
            </Text>
          </View>
        </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  carouselContainer: {},
  authContainer: {
    marginVertical: 10,
    gap: 10,
  },
  renderItem1_parentView1: {
    width: 350,
    rowGap: 60,
    justifyContent: "space-between",
    alignItems: "center",
    overflow: "hidden",
    marginVertical: 50,
  },
  signup_container: {
    gap: 5,
    marginVertical:40
  },
  cardText: {
    flex: 1,
    width: "100%",
    gap: 5,
    alignItems: "center",
  },
  renderItem1_img: {
    width: 350,
    height: 200,
  },
  Signin_btn: {
    backgroundColor: "black",
    width: 140,
    alignSelf: "center",
    padding: 10,
    borderRadius: 20,
  },
  signup_view: {
    flexDirection: "row",
    gap: 5,
    alignSelf: "center",
  },
});


export default React.memo(PaginationCarousel)