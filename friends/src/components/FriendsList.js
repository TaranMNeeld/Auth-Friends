import React from 'react';
//implement a spinny thing if isLoadingx
import Loader from 'react-loader-spinner';
import { axiosWithAuth } from '../utils/axiosWithAuth';
import FriendCard from './FriendCard';
import AddFriendForm from './AddFriendForm';

class FriendsList extends React.Component {
    state = {
        friendsData: []
    }

    selectFriend = id => {
        console.log(id);
    }

    componentDidMount() {
        this.getData();
    }

    getData = () => {
        axiosWithAuth().get('/friends')
            .then(res => {
                this.setState({
                    friendsData: [res.data] //return with a filter to choose specific users
                })
            })
            .catch(err => console.log(err))
    };

    render() {
        return (
            <div>
                <AddFriendForm />
                {this.state.friendsData.map(friends => (
                    friends.map(friend => {
                        return <FriendCard
                            key={friend.id}
                            id={friend.id}
                            name={friend.name}
                            age={friend.age}
                            email={friend.email}
                            selected={this.selectFriend} />
                    })
                ))}
            </div>
        );
    }
}

export default FriendsList;