import { StatusBar, StyleSheet, Text, View } from 'react-native';
import { Navigator } from './src/navigator/navigator';
import  PaginationCarousel  from './src/components/carousels/paginationCarouse';
import BottomBar from './src/components/bottombar/bottombar';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { Provider } from 'react-native-paper';
import { theme } from './src/theme/theme';

export default function App() {
    return (
      <SafeAreaProvider>
        <Provider theme={theme}>
        <View style={styles.container}>
          <StatusBar/>
          <BottomBar/>
        </View>
        </Provider>
      </SafeAreaProvider>
    );
  }

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
