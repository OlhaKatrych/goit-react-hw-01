import css from "./FriendListItem.module.css";
import clsx from "clsx";

function FriendListItem({ avatar, name, isOnline }) {
  return (
    <div className={css.cardWrapper}>
      <img src={avatar} alt="Avatar" width="48" className={css.cardImg} />
      <p className={css.cardText}>{name}</p>
      <p className={clsx(css.cardText, {
        [css.cardOnline]: isOnline === true,
        [css.cardOffline]: isOnline === false,
      })}>{isOnline ? "Online" : "Offline"}</p>
    </div>
  );
}

export default FriendListItem;
