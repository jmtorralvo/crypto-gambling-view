import React, {Component} from 'react';
import {
  UserContainer,
  UserAvatar,
  UserName,
} from '../styles';

class UserItem extends Component {

  render() {
    const { user } = this.props;
    console.log({ user });
    return (
      <UserContainer>
        <UserAvatar src="https://x1.xingassets.com/assets/frontend_minified/img/users/nobody_m.original.jpg" />
        <UserName>{user.username}</UserName>
      </UserContainer>
    )
  }
}

export default UserItem;
