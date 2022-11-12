import React from 'react';
import FormatAlignJustifyRoundedIcon from '@mui/icons-material/FormatAlignJustifyRounded';
import SearchIcon from '@mui/icons-material/Search';
import TextField from '@mui/material/TextField';
import EmergencyRecordingOutlinedIcon from '@mui/icons-material/EmergencyRecordingOutlined';
import KeyboardVoiceIcon from '@mui/icons-material/KeyboardVoice';
import NotificationsNoneOutlinedIcon from '@mui/icons-material/NotificationsNoneOutlined';
import youtubeLogo from '../../img/youtube.png';
import avatar from '../../img/avatar.jpg';

const Header = (props) => {
  return (
    <div
      className="header"
      style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: '90%',
        margin: 'auto',
      }}>
      <div
        className="left-header"
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}>
        <FormatAlignJustifyRoundedIcon style={{ padding: '30px 20px' }} />
        <img
          src={youtubeLogo}
          alt="YouTubeLogo"
          style={{ width: '50px', height: '50px' }}
        />
        <h2 style={{ padding: '30px 10px' }}>Youtube</h2>
      </div>
      <div
        className="middle-header"
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}>
        <TextField
          id="outlined-basic"
          label="Search"
          variant="outlined"
          style={{ width: '400px' }}
        />
        <SearchIcon
          style={{
            height: '54px',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            padding: '0 10px',
            backgroundColor: '#f8f8f8',
            borderRadius: '0 10px 10px 0',
            border: '#c6c6c6 solid 1px',
          }}
        />
        <KeyboardVoiceIcon style={{ padding: '0 10px' }} />
      </div>
      <div
        className="right-header"
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}>
        <EmergencyRecordingOutlinedIcon style={{ paddingRight: '20px' }} />
        <NotificationsNoneOutlinedIcon style={{ paddingRight: '20px' }} />
        <img
          src={avatar}
          alt="avatar"
          style={{ width: '40px', height: '40px', borderRadius: '50%' }}
        />
      </div>
    </div>
  );
};

export default Header;
