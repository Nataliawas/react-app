
import React from 'react';
import { users } from './usersContainer'
import { StyleSheet, Text, View } from 'react-native';

class List extends React.Component {
    state = {
        users: null
    }


    componentDidMount() {
        this.setState({
            users: users
        })
    }

    render() {
        fetch('https://randomuser.me/api/?results=50')
            .then(response => response.json())
            .then(data => {
                this.setState(data);
            })

        const { users } = this.state;

        return (
            <div>
                {users && users.map((user) => {
                    return (
                        <div>
                            {user.name}
                        </div>
                        <div>
                            <View style={styles.container}>
                                <Text>Open up App.js to start working on your app!</Text>
                                <Text style={styles.text}>Hello JFDZL2</Text>
                                {this.state.results.map(item => (
                                    <View>
                                        <Text>{item.name.first}</Text>
                                    </View>
                                ))}
                            </View>
                        </div>
                    )
                })}
            </div>
        )
    }
}

export default List;