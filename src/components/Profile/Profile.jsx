import css from "./Profile.module.css"
console.log(css)

function Profile({name, tag, location, image, stats}) {
  return (<div className={css.cardSection}>
  <div className={css.cardWrapper}>
    <img className={css.imgAvatar}
      src={image}
      alt="User avatar"
    />
    <p className={css.cardName}>{name}</p>
    <p className={css.cardText}>@{tag}</p>
    <p className={css.cardText}>{location}</p>
  </div>

  <ul className={css.cardList}>
    <li className={css.cardItem}>
      <span className={css.itemsText}>Followers</span>
      <span className={css.itemsData}>{stats.followers}</span>
    </li>
    <li className={css.cardItem}>
      <span className={css.itemsText}>Views</span>
      <span className={css.itemsData}>{stats.views}</span>
    </li>
    <li className={css.cardItem}>
      <span className={css.itemsText}>Likes</span>
      <span className={css.itemsData}>{stats.likes}</span>
    </li>
  </ul>
</div>
);
}

export default Profile;
