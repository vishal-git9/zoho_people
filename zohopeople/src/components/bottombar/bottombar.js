import React, { useRef, useState } from "react";
import { BottomNavigation, Text } from "react-native-paper";
import { Entypo } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import { FontAwesome } from "@expo/vector-icons";
import {
  View,
  Animated,
  StyleSheet,
  TouchableOpacity,
  Image,
} from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { ModalComponent } from "../modals/modal";
import { Iconcard } from "../cards/iconcard";

const HomeRoute = () => {
  const fadeAnim = useRef(new Animated.Value(0)).current;
  React.useEffect(() => {
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 2000,
      useNativeDriver: true,
    }).start();
  }, [fadeAnim]);
  return <Animated.Text style={{ opacity: fadeAnim }}>Home</Animated.Text>;
};

const ServicesRoute = () => <Text>Services</Text>;

const ApprovalsRoute = () => <Text>Approvals</Text>;

const MoreRoute = () => <Text>More</Text>;

const PlusRoute = ({ route }) => {
  // Add your popover code here
  const { modalVisible, setModalVisible } = route.params;

  const [actions, setActions] = useState([
    {
      Provider: Entypo,
      icon: "back-in-time",
      title: "time",
      backgroundColor: "yellow",
      color: "white",
    },
    {
      Provider: Entypo,
      icon: "back-in-time",
      title: "time",
      backgroundColor: "red",
      color: "white",
    },
    {
      Provider: Entypo,
      icon: "back-in-time",
      title: "time",
      backgroundColor: "blue",
      color: "white",
    },
    {
      Provider: Entypo,
      icon: "back-in-time",
      title: "time",
      backgroundColor: "pink",
      color: "white",
    },
    {
      Provider: Entypo,
      icon: "back-in-time",
      title: "time",
      backgroundColor: "teal",
      color: "white",
    },
  ]);
  const modalBody = (
    <View style={styles.cardStyle}>
      {actions?.map((el, i) => (
        <Iconcard
          Provider={el.Provider}
          backgroundColor={el.backgroundColor}
          iconName={el.icon}
          color={el.color}
          text={el.title}
          borderRadius={10}
          size={35}
          key={i}
        />
      ))}
    </View>
  );
  return (
    <View style={[styles.Modalview, { backgroundColor: "yellow", flex: 1 }]}>
      <View>
        <ModalComponent children={modalBody} modalVisible={modalVisible} />
      </View>
    </View>
  );
};

export default function BottomBar() {
  const [index, setIndex] = useState(0);
  const [modalVisible, setModalVisible] = useState(true); // Set initial modalVisible state to false
  // Define a default icon for the "approvals" route

  const [routes, setRoutes] = useState([
    { key: "services", icon: "appstore-o", title: "Services" },

    { key: "home", icon: "home", title: "Home" },
    {
      key: "plus",
      icon: "plus",
      color: "none",
      params: {
        modalVisible,
        setModalVisible,
      },
    },
    {
      key: "approvals",
      icon: "checkcircle",
      title: "Approvals",
    },
    { key: "more", icon: "ellipsis1", title: "More" }, // Changed icon from "more" to "ellipsis1"
  ]);

  const renderScene = BottomNavigation.SceneMap({
    home: HomeRoute,
    services: ServicesRoute,
    plus: PlusRoute,
    approvals: ApprovalsRoute,
    more: MoreRoute,
  });

  return (
    <SafeAreaProvider>
      <BottomNavigation
        navigationState={{ index, routes }}
        onIndexChange={setIndex}
        renderScene={renderScene}
        sceneAnimationType="shifting"
        renderIcon={({ route, focused, color }) =>
          route.key === "plus" ? (
            <TouchableOpacity
              onPressIn={() => setModalVisible(true)}
              style={{
                borderRadius: 50,
                backgroundColor: "black",
                width: 50,
                height: 50,
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <AntDesign name={route.icon} size={30} color="white" />
            </TouchableOpacity>
          ) : (
            <AntDesign
              name={route.icon}
              size={24}
              color={focused ? "blue" : color}
            />
          )
        }
        barStyle={{ backgroundColor: "white" }}
      />
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  newStyle: {
    color: "blue",
    fontSize: 16,
    marginTop: 10,
  },
  cardStyle: {
    backgroundColor: "white",
    padding: 22,
    flexDirection: "row",
    flexWrap: "wrap",
    gap:20,
    justifyContent: "flex-start",
    alignItems: "center",
    borderRadius: 4,
    borderColor: "rgba(0, 0, 0, 0.1)",
  },
  textStyle: {
    color: "black",
    fontSize: 20,
    marginBottom: 12,
  },
  iconStyle: {
    marginBottom: 12,
  },
  Modalview: {
    justifyContent: "flex-end",
    margin: 0,
  },
});
