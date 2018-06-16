import * as React from 'react';
import { StyleSheet, Text, View, StatusBar } from 'react-native';
import { Dashboard } from './layouts/Dashboard';

export class App extends React.Component<{}> {
  render() {
    return (
      <Dashboard />
    );
  }
}
