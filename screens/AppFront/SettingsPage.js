import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { PageHeader } from '~/components/common';
import { Tabs } from '../Settings';
//imrn

const SettingsPage = ({ navigation }) => {
  console.log(Tabs);
  return (
    <View style={styles.wrapper}>
      <PageHeader title="Settings" navigation={navigation} />
      <View style={styles.content}>
        <Tabs navigation={navigation} />
      </View>
    </View>
  );
};

export default SettingsPage;

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    backgroundColor: '#fff',
  },
  content: {
    flexGrow: 1,
    // justifyContent: 'center',
    // alignItems: 'center',
  },
});
//rnstyle
