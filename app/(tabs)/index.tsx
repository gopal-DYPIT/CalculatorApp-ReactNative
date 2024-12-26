import { useState } from 'react';
import { SafeAreaView, StyleSheet, Switch, Text, View } from 'react-native';
import { myColors } from '../../styles/Colors';
import { ThemeContext } from '../../context/ThemeContext';
import MyKeyboard from '../../components/MyKeyboard';

export default function App() {
  const [theme, setTheme] = useState('light');
  return (
    <ThemeContext.Provider value={theme}>
      <SafeAreaView style={theme === 'light' ? styles.container : [styles.container, {backgroundColor: 'black'}]}>
        <View style={styles.switchContainer}>
          <SafeAreaView>
            <Switch
              value={theme === 'dark'}
              onValueChange={() => setTheme(theme === 'light' ? 'dark' : 'light')}
            />
          </SafeAreaView>
        </View>
        <MyKeyboard />
      </SafeAreaView>
    </ThemeContext.Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: myColors.light,
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  switchContainer: {
    marginTop: 20,
    alignItems: 'center',
  },
});
