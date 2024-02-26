import FriendListItem from "../FriendListItem/FriendListItem";
import css from "./FriendList.module.css"
function FriendList({ friends }) {
  return (
    <ul className={css.cardList}>
      {friends.map((item) => {
        return (
          <li key={item.id} className={css.cardItem}>
            <FriendListItem
              avatar={item.avatar}
              name={item.name}
              isOnline={item.isOnline}
            />
          </li>
        );
      })}
    </ul>
  );
}

export default FriendList;
