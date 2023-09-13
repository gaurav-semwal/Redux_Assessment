/* eslint-disable react-native/no-inline-styles */
import React, {useState} from 'react';
import {
  View,
  Text,
  SafeAreaView,
  Modal,
  StyleSheet,
  TextInput,
  Button,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import {Calendar} from 'react-native-calendars';

const CalendarComponent = () => {
  const [selectedDate, setSelectedDate] = useState('');
  const [isModalVisible, setModalVisible] = useState(false);
  const [eventText, setEventText] = useState('');
  const [events, setEvents] = useState({});

  const onDayPress = day => {
    setSelectedDate(day.dateString);
    setModalVisible(true);
  };

  const addEvent = () => {
    if (eventText.trim() === '') {
      return;
    }

    setEvents(prevEvents => ({
      ...prevEvents,
      [selectedDate]: [...(prevEvents[selectedDate] || []), eventText],
    }));

    setModalVisible(false);
    setEventText('');
  };

  const deleteEvent = (date, index) => {
    if (events[date] && events[date].length > index) {
      const updatedEvents = {...events};
      updatedEvents[date].splice(index, 1);

      if (updatedEvents[date].length === 0) {
        delete updatedEvents[date];
      }

      setEvents(updatedEvents);
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <Calendar
        onDayPress={onDayPress}
        markedDates={{[selectedDate]: {selected: true}}}
        style={styles.calendar}
      />

      <Modal visible={isModalVisible} animationType="slide">
        <View style={styles.modalContainer}>
          <Text style={styles.modalDate}>{selectedDate}</Text>
          <TextInput
            style={styles.input}
            placeholder="Enter Event"
            onChangeText={text => setEventText(text)}
            value={eventText}
            multiline
          />
          <View style={styles.modalButtons}>
            <Button
              title="Add Event"
              onPress={addEvent}
              style={styles.addButton}
            />
            <Button title="Delete Event" onPress={deleteEvent} color="red" />
            <Button
              title="Cancel"
              onPress={() => setModalVisible(false)}
              color="red"
            />
          </View>
        </View>
      </Modal>

      <ScrollView style={styles.eventsContainer}>
        {Object.keys(events).map(date => (
          <View key={date}>
            <Text style={styles.eventsHeader}>Events for {date}</Text>
            {events[date].map((event, index) => (
              <View
                key={index}
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  marginTop: 10,
                }}>
                <Text style={styles.eventText}>{event}</Text>
                <TouchableOpacity
                  onPress={() => deleteEvent(date, index)}
                  style={styles.deleteButton}>
                  <Text style={styles.deleteButtonText}>Delete</Text>
                </TouchableOpacity>
              </View>
            ))}
          </View>
        ))}
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f2f2',
    borderRadius: 10,
  },
  calendar: {
    backgroundColor: 'white',
    fontFamily: 'Sunday Mango',
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  modalDate: {
    fontSize: 18,
    marginBottom: 10,
  },
  input: {
    width: '100%',
    height: 100,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 20,
    paddingHorizontal: 10,
  },
  modalButtons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
  },
  addButton: {
    backgroundColor: 'green',
  },
  deleteButton: {
    backgroundColor: '#ed5151',
    padding: 8,
    borderRadius: 100,
  },
  deleteButtonText: {
    color: 'white',
    textAlign: 'center',
  },
  eventsContainer: {
    flex: 1,
    padding: 20,
  },
  eventsHeader: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
    fontFamily: 'Metalsmith',
  },
  eventText: {
    fontSize: 16,
    flex: 1,
  },
});

export default CalendarComponent;
