import PropTypes from 'prop-types';

import { FriendListItem } from 'components/FriendListItem/FriendListItem';

import css from 'components/FriendList/FriendList.module.css';

export const FriendList = ({ friends }) => {
  return (
    <div className={css.friendlist}>
      <div className={css.container}>
        <ul className={css.friend__list}>
          {friends.map(({ id, name, avatar, isOnline }) => (
            <FriendListItem
              key={id}
              name={name}
              avatar={avatar}
              isOnline={isOnline}
            />
          ))}
        </ul>
      </div>
    </div>
  );
};

FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({ id: PropTypes.number.isRequired }).isRequired
  ).isRequired,
};