// import { data } from '../data/users';
import dataUser from '../data/users.json';
import dataStat from '../data/data.json';
import dataTransactions from '../data/transactions.json';

import { Profile } from '../components/profile/Profile';
import { Statistics } from '../components/statistics/Statistics';
import { FriendList } from '../components/friendList/FriendList';
import { Transactions } from '../components/transaction/Transactions';

// import { UserList } from "../components/user-list/UserList"
// console.log(dataProfile);
const {
  username,
  tag,
  location,
  avatar,
  stats: { followers, views, likes },
} = dataUser;
// const { id, label, percentage } = dataStat;
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

      <FriendList />
      <Transactions items={dataTransactions} />
    </>
  );
};
