import React, {useEffect} from 'react';
import {View, Image, StyleSheet, ScrollView, SafeAreaView} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {getprofiledata} from '../Redux/Action';
import {Card, Title, Paragraph} from 'react-native-paper';

const Profile = () => {
  const dispatch = useDispatch();
  const profileData = useSelector(state => state.Profile);

  useEffect(() => {
    dispatch(getprofiledata());
  }, [dispatch]);

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.scrollViewContent}>
        <View style={styles.avatarContainer}>
          <View style={styles.avatarCircle}>
            <Image source={{uri: profileData.avatar}} style={styles.avatar} />
          </View>
        </View>

        <Card style={styles.card}>
          <Card.Content>
            <Title>First Name:</Title>
            <Paragraph style={styles.text}>{profileData.first_name}</Paragraph>
          </Card.Content>
        </Card>
        <Card style={styles.card}>
          <Card.Content>
            <Title>Last Name:</Title>
            <Paragraph style={styles.text}>{profileData.last_name}</Paragraph>
          </Card.Content>
        </Card>

        <Card style={styles.card}>
          <Card.Content>
            <Title>Email:</Title>
            <Paragraph style={styles.text}>{profileData.email}</Paragraph>
          </Card.Content>
        </Card>

        <Card style={styles.card}>
          <Card.Content>
            <Title>Username:</Title>
            <Paragraph style={styles.text}>{profileData.username}</Paragraph>
          </Card.Content>
        </Card>
        <Card style={styles.card}>
          <Card.Content>
            <Title>Gender:</Title>
            <Paragraph style={styles.text}>{profileData.gender}</Paragraph>
          </Card.Content>
        </Card>
        <Card style={styles.card}>
          <Card.Content>
            <Title>Date of Birth:</Title>
            <Paragraph style={styles.text}>
              {profileData.date_of_birth}
            </Paragraph>
          </Card.Content>
        </Card>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ad86d9',
  },
  avatarCircle: {
    width: 130,
    height: 130,
    borderRadius: 70,
    overflow: 'hidden',
    borderWidth: 2,
    borderColor: '#9669c9',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'lightgray',
  },
  scrollViewContent: {
    flexGrow: 1,
  },
  avatarContainer: {
    alignItems: 'center',
    marginBottom: 8,
  },
  avatar: {
    width: 130,
    height: 130,
    resizeMode: 'cover',
    borderRadius: 50,
  },
  card: {
    margin: 15,
  },
  text: {
    fontSize: 16,
  },
});

export default Profile;
