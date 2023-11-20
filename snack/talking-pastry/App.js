import { Text, SafeAreaView, StyleSheet } from 'react-native';

// You can import supported modules from npm
import { Card } from 'react-native-paper';

// or any files within the Snack
import AssetExample from './components/AssetExample';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
       <Text style={styles.paragraph}>
      Thông tin cá nhân
      </Text>
      <Text style={styles.text}>
        Họ và tên: Lưu Quang Huy
      </Text>
      <Text style={styles.text}>
      Sđt: 0949428076
      </Text>
      <Text style={styles.text}>
      Mssv: 220501007
      </Text>
       <Text style={styles.text}>
      Email: 220501007@student.bdu.edu.vn
      </Text>
       <Text style={styles.text}>
      Sở thích: nhạc, game, anime, nấu ăn
      </Text>

      <Card>
        <AssetExample />
      </Card>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#ecf0f1',
    padding: 8,
  },
  paragraph: {
    margin: 19,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },

  text: {
    margin: 1,
    fontSize: 15,
    fontWeight: '',
    textAlign: 'left',
  },
});