import React from 'react';
import {
  Text,
  View,
  AppRegistry,
  StyleSheet
} from 'react-native';

var StopWatch = React.createClass({
  render: function() {
    return <View>
      <View>
        <View>
          <Text>
            00:00.00
          </Text>
        </View>
        <View>
          {this.startStopButton()}
          {this.lapButton()}
        </View>
      </View>

      <View>
        <Text>
          I am lis of Laps
        </Text>
      </View>
    </View>
  },
  startStopButton: function() {
    return <View>
      <Text>
        Start
      </Text>
    </View>
  },
  lapButton: function() {
    return <View>
      <Text>
        Lap
      </Text>
    </View>
  }
});

var styles = StyleSheet.create({
  container: {
    flex: 1, 
    alignItems: 'stretch'
  },
  header: {
    flex: 1
  },
  footer: {
    flex: 1
  }
});

AppRegistry.registerComponent('stopwatch', () => StopWatch);
