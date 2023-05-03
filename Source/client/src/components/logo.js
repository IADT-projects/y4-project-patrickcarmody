import { Link } from 'react-router-dom';
import { styled } from '@mui/material';

const LinkStyled = styled(Link)(() => ({
  height: '100px',
  width: '100%',
  overflow: 'hidden',
  display: 'block',
}));

const Logo = () => {
  return (
    <LinkStyled to="/home">
      <img src={'/images/Logo.png'} alt=''/>
    </LinkStyled>
  )
};

export default Logo;
