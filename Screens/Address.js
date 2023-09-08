import React, {useEffect} from 'react';
import {StyleSheet, SafeAreaView, ScrollView} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {getaddressdata} from '../Redux/Action';
import {Card, Title, Paragraph} from 'react-native-paper';

const Address = () => {
  const dispatch = useDispatch();
  const addressData = useSelector(state => state.Address);

  useEffect(() => {
    dispatch(getaddressdata());
  }, [dispatch]);

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.scrollViewContent}>
        <Card style={styles.card}>
          <Card.Content>
            <Title>Street Name:</Title>
            <Paragraph style={styles.text}>{addressData.street_name}</Paragraph>
          </Card.Content>
        </Card>

        <Card style={styles.card}>
          <Card.Content>
            <Title>Community:</Title>
            <Paragraph style={styles.text}>{addressData.community}</Paragraph>
          </Card.Content>
        </Card>

        <Card style={styles.card}>
          <Card.Content>
            <Title>State:</Title>
            <Paragraph style={styles.text}>{addressData.state}</Paragraph>
          </Card.Content>
        </Card>
        <Card style={styles.card}>
          <Card.Content>
            <Title>Country:</Title>
            <Paragraph style={styles.text}>{addressData.country}</Paragraph>
          </Card.Content>
        </Card>
        <Card style={styles.card}>
          <Card.Content>
            <Title>Time Zone:</Title>
            <Paragraph style={styles.text}>{addressData.time_zone}</Paragraph>
          </Card.Content>
        </Card>
        <Card style={styles.card}>
          <Card.Content>
            <Title>Zip Code:</Title>
            <Paragraph style={styles.text}>{addressData.zip_code}</Paragraph>
          </Card.Content>
        </Card>
      </ScrollView>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#82d190',
  },
  scrollViewContent: {
    flexGrow: 1,
  },
  avatarContainer: {
    alignItems: 'center',
    marginBottom: 8,
  },
  avatar: {
    width: 100,
    height: 100,
    resizeMode: 'cover',
    borderRadius: 50,
  },
  card: {
    margin: 16,
  },
  text: {
    fontSize: 16,
  },
});

export default Address;
