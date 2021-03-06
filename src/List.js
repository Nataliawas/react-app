import React from 'react';
class List extends React.Component {
    state = {
        users: {
            results: []
        }
    }

    fetchUsers() {
        fetch('https://randomuser.me/api/?results=50')
            .then(response => {
                console.log(response.status)
                return response.json()
            })
            .then(data => {
                this.setState({ users: data })
            })

    }
componentDidMount(){
    this.fetchUsers()
}
    render() {

        return (
            <div>
                <h1>My users: </h1>
                {this.state.users.results.map(user => {
                    return <p key={`user-${user.id}`}>{user.name.first}</p>
                })}
            </div>
        )
    }
}

export default List;