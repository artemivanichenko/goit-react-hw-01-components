import dataUser from '../data/users.json';
import dataStat from '../data/data.json';
import dataFriends from '../data/friends.json';
import dataTransactions from '../data/transactions.json';

import { Profile } from '../components/profile/Profile';
import { Statistics } from '../components/statistics/Statistics';
import { FriendList } from '../components/friendList/FriendList';
import { Transactions } from '../components/transaction/Transactions';

const {
  username,
  tag,
  location,
  avatar,
  stats: { followers, views, likes },
} = dataUser;

export const App = () => {
  return (
    <>
      <Profile
        username={username}
        tag={tag}
        location={location}
        avatar={avatar}
        followers={followers}
        views={views}
        likes={likes}
      />
      <Statistics title="Upload stats" stats={dataStat} />

      <FriendList friends={dataFriends} />
      <Transactions items={dataTransactions} />
    </>
  );
};
