import React from 'react';

import {
  Container,
  Banner,
  Avatar,
  ProfileData,
  LocationIcon,
  CakeIcon,
  Followage,
  EditButton,
} from './styles';

const ProfilePage: React.FC = () => {
  return (
    <Container>
      <Banner>
        <Avatar />
      </Banner>

      <ProfileData>
        <EditButton outlined>Editar perfil</EditButton>

        <h1>Afonso Machado</h1>
        <h2>@affsmachado</h2>

        <p>Web technologies student</p>

        <ul>
          <li>
            <LocationIcon />
            Feira de Santana, Bahia, Brasil
          </li>
          <li>
            <CakeIcon />
            Nascido(a) em 21 de julho de 1994
          </li>
        </ul>

        <Followage>
          <span>
            <strong>98 </strong> seguindo
          </span>
          <span>
            <strong>185 </strong> seguidores
          </span>
        </Followage>
      </ProfileData>
    </Container>
  );
};

export default ProfilePage;
