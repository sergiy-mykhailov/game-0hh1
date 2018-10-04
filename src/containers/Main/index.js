
import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { StyleSheet, Text, View } from 'react-native';
import Header from '../../components/Header';
import GameField from '../../components/GameField';

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    backgroundColor: '#fff',
    // alignItems: 'center',
    // justifyContent: 'center',
  },
});

class Main extends React.Component {
  static defaultProps = {
    game: [],
  };

  static propTypes = {
    game: PropTypes.arrayOf(PropTypes.array),
  };

  render() {
    const { game } = this.props;

    console.log('game', game);

    return (
      <View style={styles.container}>
        <Header />
        <GameField />
      </View>
    );
  }
}

const mapStateToProps = state => ({
  game: state.game,
});
const mapDispatchToProps = {
};

export default connect(mapStateToProps, mapDispatchToProps)(Main);
