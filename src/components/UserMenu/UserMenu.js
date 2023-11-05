import React, { useCallback } from 'react';
import { useDispatch } from 'react-redux';
import { authOperations } from '../../redux/auth';
// import defaultAvatar from './default-avatar.png';
// import Button from '../common/Button/Button';
import s from './UserMenu.module.scss';
import { FcManager } from 'react-icons/fc';
import { MdExitToApp } from 'react-icons/md';

export default function UserMenu() {
  const dispatch = useDispatch();

  const onLogout = useCallback(() => dispatch(authOperations.logOut()), [
    dispatch,
  ]);

  return (
    <div className={s.container}>
      <FcManager className={s.avatarButtonIcon} />
      {/* <img src={defaultAvatar} alt="" width="32" className={s.avatar} /> */}
      <span className={s.name}>Welcome, admin </span>

      {/* <Button text={'logout'} listener={() => onLogout()} color="red" /> */}
      <button className={s.exitButton} onClick={() => onLogout()}>
        <MdExitToApp className={s.exitButtonIcon} />
      </button>
    </div>
  );
}
