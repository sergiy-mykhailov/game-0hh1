
import React from 'react';
import {
  Header, Title, Button, Left, Right, Body, ActionSheet, Text,
} from 'native-base';
import { rules } from '../../constants';

class HeaderComponent extends React.Component {
  handleShowRules = () => {
    ActionSheet.show(
      {
        options: rules,
        title: 'Rules of the game',
      },
      () => {},
    );
  };

  render() {
    return (
      <Header>
        <Left />
        <Body>
          <Title>Game &quot;0h h1&quot;</Title>
        </Body>
        <Right>
          <Button hasText transparent onPress={this.handleShowRules}>
            <Text>Rules</Text>
          </Button>
        </Right>
      </Header>
    );
  }
}

export default HeaderComponent;
