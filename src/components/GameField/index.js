
import React from 'react';
import PropTypes from 'prop-types';
import { Content, Text, Button } from 'native-base';
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  content: {
    backgroundColor: '#acf',
    flex: 1,
    flexDirection: 'row',
    alignContent: 'center',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

class GameField extends React.Component {
  static defaultProps = {
    isStarted: false,
  };

  static propTypes = {
    isStarted: PropTypes.bool,
  };

  renderStartButton = () => {
    return (
      <Button bordered>
        <Text>Start</Text>
      </Button>
    );
  };

  renderGameField = () => {
    return (
      <Text>GameField</Text>
    );
  };

  render() {
    const { isStarted } = this.props;

    return (
      <Content padder contentContainerStyle={styles.content}>
        {(isStarted) ? this.renderGameField() : this.renderStartButton()}
      </Content>
    );
  }
}

export default GameField;
