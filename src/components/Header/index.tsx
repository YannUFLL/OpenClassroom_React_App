import { Link } from 'react-router-dom';
import styled from 'styled-components';
import DarkLogo from '../../assets/dark-logo.png';
import { StyledLink } from '../../utils/style/Atoms';

const StyledNav = styled.nav`
  display: flex;
  padding: 30px;
  justify-content: space-between;
  align-items: center;
`;

const HomeLogo = styled.img`
  height: 50px;
`;

function Header() {
  return (
    <StyledNav>
      <Link to="/">
        <HomeLogo src={DarkLogo} />
      </Link>
      <StyledLink to="/">Accueil</StyledLink>
      <StyledLink to="/freelances">Profils</StyledLink>
      <StyledLink to="/survey/1" $isFullLink>
        Faire le test
      </StyledLink>
    </StyledNav>
  );
}

export default Header;
