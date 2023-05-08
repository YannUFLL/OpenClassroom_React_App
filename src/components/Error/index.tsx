import styled from 'styled-components';
import colors from '../../utils/style/colors';
import ErrorPicture from '../../assets/404.png';

const ErrorWrapper = styled.div`
  margin: 30px;
  font-size: 50px;
  background-color: ${colors.backgroundLight};
  padding: 60px 90px;
  display: flex;
  flex-direction: column;
`;

const StyledTitle = styled.h2`
  padding-bottom: 30px;
  text-align: center;
  font-size: 30px;
`;

const StyledImg = styled.img``;
function Error() {
  return (
    <ErrorWrapper>
      <StyledTitle>Oups... </StyledTitle>
      <StyledImg src={ErrorPicture} />
      <StyledTitle>Il semblerait qu'il y ait un probleme</StyledTitle>
    </ErrorWrapper>
  );
}

export default Error;
