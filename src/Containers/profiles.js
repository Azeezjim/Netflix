import React from 'react';
import { Header, Profiles } from '../Components';
import * as ROUTES from '../constances/roustes';
import logo from '../logo.svg';

export function SelectProfileContainer ({ user, setProfile}) {
    return(
         <>
        <Header bg={false}>
            <Header.Frame>
                <Header.Logo to={ROUTES.HOME} src={logo} alt='Netflix' />
            </Header.Frame>
        </Header>

        <Profiles>
            <Profiles.Title>Who Is Watching?</Profiles.Title>
            <Profiles.List>
                <Profiles.User 
                    onClick={() => setProfile({displayName:user.displayName,
                    photoURL: user.photoURL})}>
                    <Profiles.Picture src={user.photoURL} />
                    <Profiles.Name>{user.displayName}</Profiles.Name>
                </Profiles.User>
            </Profiles.List>
        </Profiles>
      </>
    );
}

