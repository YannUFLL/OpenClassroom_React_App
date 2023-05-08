import DefaultPicture from '../../assets/profile.png';
import styled from 'styled-components';
import colors from '../../utils/style/colors';

const CardLabel = styled.span`
  color: #5843e4;
  font-size: 22px
  font-weight:bold
  position: relative;
  margin-top: 20px;
  margin-left: 20px;
`;

const CardImage = styled.img`
  height: 80px;
  width: 80px;
  border-radius: 50%;
  type: block;
  margin: 0 auto;
  width: 50%;
  height: 50%;
`;

const CardWrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 15px;
  background-color: ${colors.backgroundLight};
  border-radius: 30px;
  width: 350px;
  transition: 200ms;
  &:hover {
    cursor: pointer;
    box-shadow: 2px 2px 10px #e2e3e9;
  }
`;
const CardTitle = styled.span`
   {
    type: block;
    margin: 0 auto;
    margin-top: 40px;
    font-size: 20px;
  }
`;
type FreelanceProfile = {
  label?: string;
  title?: string;
  picture?: string;
};

function Card({
  label = '',
  title = '',
  picture = DefaultPicture,
}: FreelanceProfile) {
  return (
    <CardWrapper>
      <CardLabel>{label}</CardLabel>
      <CardImage src={picture} alt="freelance" />
      <CardTitle>{title}</CardTitle>
    </CardWrapper>
  );
}

export default Card;
