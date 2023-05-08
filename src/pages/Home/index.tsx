import AccueilLogo from '../../assets/home-illustration.svg';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { StyledLink } from '../../utils/style/Atoms';
import colors from '../../utils/style/colors';

const HomeWrapper = styled.div`
  display: flex;
  justify-content: center;
`;

const HomerContainer = styled.div`
  margin: 30px;
  font-size: 50px;
  background-color: ${colors.backgroundLight};
  padding: 60px 20px;
  display: flex;
  flex-direction: row;
`;

const LeftCol = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  flex: 1;
  ${StyledLink} {
    max-width: 250px;
  }
`;

const StyledTitle = styled.h2`
  padding-bottom: 30px;
  line-height: 50px;
  font-size: 30px;
`;

const Illustration = styled.img`
  flex: 1;
`;

function Home() {
  return (
    <HomeWrapper>
      <HomerContainer>
        <LeftCol>
          <StyledTitle>
            Reperez vos besoins, on s'occupe du reste, avec les meilleurs
            talents
          </StyledTitle>
          <StyledLink to="/survey/1" $isFullLink>
            Faire le test
          </StyledLink>
        </LeftCol>
        <Illustration src={AccueilLogo} alt="accueil" />
      </HomerContainer>
    </HomeWrapper>
  );
}

export default Home;
