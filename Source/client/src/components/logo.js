import { Link } from 'react-router-dom';
import { styled } from '@mui/material';
const TempLogo = require('../assets/images/placeholder-logo.png')

const LinkStyled = styled(Link)(() => ({
  height: '70px',
  width: '180px',
  overflow: 'hidden',
  display: 'block',
}));

const Logo = () => {
  return (
    <LinkStyled to="/">
      <img src={String(TempLogo)} alt=''/>
    </LinkStyled>
  )
};

export default Logo;
