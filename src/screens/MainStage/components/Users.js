import React, {Component} from 'react';
import UserItem from './UserItem';

import {
  UsersList,
} from '../styles';

class Users extends Component {

  render() {
    const { users } = this.props;
    console.log({ users });
    return (
      <UsersList>
        {users.map(u => (
          <UserItem user={u} />
        ))}
      </UsersList>
    )
  }
}

export default Users;
