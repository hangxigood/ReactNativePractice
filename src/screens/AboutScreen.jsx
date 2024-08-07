// src/screens/AboutScreen.jsx
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import MainLayout from '../layouts/MainLayout';

function AboutScreen() {
  return (
    <MainLayout>
      <Text style={styles.text}>App Name: ToDo App</Text>
      <Text style={styles.text}>Developer: Your Name</Text>
      <Text style={styles.text}>Date: {new Date().toDateString()}</Text>
    </MainLayout>
  );
}

const styles = StyleSheet.create({
  text: {
    fontSize: 18,
    marginVertical: 10,
  },
});

export default AboutScreen;
