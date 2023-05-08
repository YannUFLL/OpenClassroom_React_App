import DefaultPicture from '../../assets/profile.png';
import Card from '../../components/Card';
import styled from 'styled-components';
import colors from '../../utils/style/colors';
import { useEffect } from 'react';
import { useState } from 'react';
import { Loader } from '../../utils/style/Atoms';

const freelanceProfiles = [
  {
    name: 'Jane Doe',
    jobTitle: 'Devops',
    picture: DefaultPicture,
  },
  {
    name: 'John Doe',
    jobTitle: 'Developpeur frontend',
    picture: DefaultPicture,
  },
  {
    name: 'Jeanne Biche',
    jobTitle: 'Développeuse Fullstack',
    picture: DefaultPicture,
  },
];

const CardsContainer = styled.div`
  display: grid;
  gap: 24px;
  grid-template-rows: 1fr 1fr;
  grid-template-columns: repeat(2, 1fr);
  align-items: center;
  justify-items: center;
`;

const StyleTitle = styled.h2`
  padding-bottom: 30px;
  line-height: 50px;
  margin: 0 auto;
`;

const StyleSubTitle = styled.h3`
  padding-bottom: 30px;
  line-height: 50px;
  color: ${colors.secondary};
  margin: 0 auto;
`;

const StyleFreelances = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

function Freelances() {
  const [freelanceData, setFreelanceData] = useState([]);
  const [isDataLoading, setDataLoading] = useState(false);
  const [error, setError] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  useEffect(() => {
    setDataLoading(true);
    fetch('http://localhost:8000/freelances')
      .then((response) => response.json())
      .then((data) => {
        setDataLoading(false);
        setFreelanceData(data.freelancersList);
      })
      .catch((error) => {
        setDataLoading(false);
        setError(true);
        setErrorMessage(error.message);
      });
  }, []);
  return (
    <StyleFreelances>
      <StyleTitle>Trouver votre prestataire</StyleTitle>
      <StyleSubTitle>
        Chez Shiny nous reunissons les meilleurs profils pour vous.
      </StyleSubTitle>
      {isDataLoading && <Loader />}
      {error && "Oups il y'a eu un probleme"}
      <CardsContainer>
        {freelanceData.map((profile, index) => (
          <Card
            key={`${profile.name}-${index}`}
            picture={profile.picture}
            label={profile.jobTitle}
            title={profile.name}
          />
        ))}
      </CardsContainer>
    </StyleFreelances>
  );
}

export default Freelances;
