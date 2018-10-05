
import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
// import { StyleSheet } from 'react-native';
import {Container, Root, Spinner} from 'native-base';
import { Font, AppLoading } from 'expo';
import Roboto from 'native-base/Fonts/Roboto.ttf';
import RobotoMedium from 'native-base/Fonts/Roboto_medium.ttf';
// import Expo from 'expo';
// import Roboto from 'native-base/Fonts/Roboto.ttf';
// import Roboto_medium from 'native-base/Fonts/Roboto_medium.ttf';
import Header from '../../components/Header';
import GameField from '../../components/GameField';


// const styles = StyleSheet.create({
//   container: {
//     // flex: 1,
//     backgroundColor: '#ccf',
//     // alignItems: 'center',
//     // justifyContent: 'center',
//   },
// });

class Main extends React.Component {
  static defaultProps = {
    // game: null,
  };

  static propTypes = {
    // game: PropTypes.shape({
    //   state: PropTypes.arrayOf(PropTypes.array),
    //   isStarted: PropTypes.bool,
    // }).isRequired,

    gameState: PropTypes.arrayOf(PropTypes.array).isRequired,
    isStarted: PropTypes.bool.isRequired,
  };

  state = {
    isLoading: true,
  };

  async componentWillMount() {
    await Font.loadAsync({
      Roboto,
      Roboto_medium: RobotoMedium,
    });
    this.setState({ isLoading: false });
  }

  render() {
    const { gameState, isStarted } = this.props;
    const { isLoading } = this.state;

    if (isLoading) {
      return (
        <Container>
          <AppLoading />
          <Spinner />
        </Container>
      );
    }

    // console.log('game', isStarted, gameState);

    return (
      <Root>
        <Container>
        {/*<View style={styles.container}>*/}
          <Header />
          <GameField isStarted={isStarted} />
        {/*</View>*/}
        </Container>
      </Root>
    );
  }
}

const mapStateToProps = state => ({
  gameState: state.game.state,
  isStarted: state.game.isStarted,
});
const mapDispatchToProps = {
};

export default connect(mapStateToProps, mapDispatchToProps)(Main);
