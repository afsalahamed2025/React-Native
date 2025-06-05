import React, { useState, useEffect } from 'react';
import { View, TextInput } from 'react-native';

const CurrentTimeInput = () => {
  const [time, setTime] = useState('');

  useEffect(() => {
    const now = new Date();

    let hours = now.getHours();
    const minutes = now.getMinutes();
    const ampm = hours >= 12 ? 'PM' : 'AM';

    hours = hours % 12;
    hours = hours === 0 ? 12 : hours;

    const minutesStr = minutes < 10 ? `0${minutes}` : minutes;

    const currentTime = `${hours}:${minutesStr} ${ampm}`;
    setTime(currentTime);
  }, []);

  return (
    <View>
      <TextInput
        value={time}
        style={{
          borderWidth: 1,
          borderColor: '#0073ff',
          borderRadius: 10,
          padding: 10,
          color: '#0073ff',
        }}
        editable={false} // Makes input read-only
      />
    </View>
  );
};

export default CurrentTimeInput;
