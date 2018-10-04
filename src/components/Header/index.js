
import React from 'react';
// import PropTypes from 'prop-types';
import { StyleSheet, View } from 'react-native';
import { Text, Header, Button } from 'react-native-elements';

// const styles = StyleSheet.create({
//   logo: {
//     width: 200,
//     height: 200,
//   },
// });

const colorWhite = '#ffffff';
const colorGray = '#808080';

class HeaderComponent extends React.Component {
  static defaultProps = {
  };

  static propTypes = {
  };

  renderTitle = () => {
    return (
      <Text h4>Game &quot;0h h1&quot;</Text>
    );
  };

  renderButton = () => {
    return (
      <Button
        title="Rules"
        rounded
        small
        buttonStyle={{ height: 10 }}
      />
    );
  };

  render() {
    return (
      <View>
        <Header
          backgroundColor={colorWhite}
          outerContainer={{ paddingBottom: 5 }}
          innerContainer={{ alignItems: 'flex-start', flexDirection: 'column' }}
        >
          {this.renderTitle()}
          {this.renderButton()}
        </Header>
        <Text>Header s</Text>
      </View>
    );
  }
}

export default HeaderComponent;
