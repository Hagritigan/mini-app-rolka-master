import { useState, useEffect } from 'react';
import bridge from '@vkontakte/vk-bridge';
import { View, SplitLayout, SplitCol, ScreenSpinner } from '@vkontakte/vkui';
import { useActiveVkuiLocation } from '@vkontakte/vk-mini-apps-router';

import { Persik, Home, Registration, Charcard, Game, Revards, Ld, Abilities, Cyborgs, Df, Haki, Seimei, Iosory, Restrictions, Pirates, Ra } from './panels';
import { DEFAULT_VIEW_PANELS } from './routes';

export const App = () => {
  const { panel: activePanel = DEFAULT_VIEW_PANELS.HOME } = useActiveVkuiLocation();
  const [fetchedUser, setUser] = useState();
  const [popout, setPopout] = useState(<ScreenSpinner size="large" />);


  return (
    <SplitLayout>
      <SplitCol>
        <View activePanel={activePanel}>
          <Home id="home" fetchedUser={fetchedUser} />
          <Persik id="persik" />
          <Registration id="registration" />
          <Game id="game" />
          <Revards id="revards" />
          <Ld id="ld" />
          <Abilities id="abilities" />
          <Cyborgs id="cyborgs" />
          <Df id="df" />
          <Haki id="haki" />
          <Seimei id="seimei" />
          <Iosory id="iosory" />
          <Restrictions id="restrictions" />
          <Pirates id="pirates" />
          <Ra id="ra" />
          <Charcard id="charcard" />
        </View>
      </SplitCol>
    </SplitLayout>
  );
};
