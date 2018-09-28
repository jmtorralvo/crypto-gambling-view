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
        <UserAvatar src={user.avatar} />
        <UserName>{user.username}</UserName>
      </UserContainer>
    )
  }
}

export default UserItem;
