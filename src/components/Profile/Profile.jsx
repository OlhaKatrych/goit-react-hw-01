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

  <ul>
    <li>
      <span>Followers</span>
      <span>{stats.followers}</span>
    </li>
    <li>
      <span>Views</span>
      <span>{stats.views}</span>
    </li>
    <li>
      <span>Likes</span>
      <span>{stats.likes}</span>
    </li>
  </ul>
</div>
);
}

export default Profile;
