
import React from 'react';
import { users } from './usersContainer'

class List extends React.Component {
    state = {
        users: null
    }


    componentDidMount() {
        this.setState({
            users: users
        })
    }

}

render() {
    const {users} = this.state;

    return (
        <div>
            {users && users.map((user) => {
                return (
                    <div>
                        {user.name}
                        
                        </div>
                )
            })}
        </div>
    )
}

export default List;