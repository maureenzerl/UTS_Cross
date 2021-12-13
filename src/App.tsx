import { Redirect, Route } from 'react-router-dom';
import { IonApp, IonContent, IonHeader, IonIcon, IonItem, IonLabel, IonList, IonMenu, IonMenuToggle, IonRouterOutlet, IonTitle, IonToolbar } from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import Home from './pages/Home';

/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/react/css/padding.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/display.css';

/* Theme variables */
import './theme/variables.css';

import Target from './pages/Target';
import Profil from './pages/Profil';
import GebetanContextProvider from './pages/GebetanContextProvider';

const App: React.FC = () => (
  <IonApp>
    <IonReactRouter>
      <IonMenu contentId="main">
        <IonHeader>
          <IonToolbar>
            <IonTitle>GebetApp</IonTitle>
          </IonToolbar>
        </IonHeader>

        <IonContent>
          <IonList>
              <IonMenuToggle>
                <IonItem button routerLink="/home">
                  <IonLabel>Daftar Calon Gebetan</IonLabel>
                </IonItem>
                <IonItem button routerLink="/target">
                  <IonLabel>Target Gebetan</IonLabel>
                </IonItem>
                <IonItem button routerLink="/profil">
                  <IonLabel>Profil</IonLabel>
                </IonItem>
              </IonMenuToggle>
            </IonList>
        </IonContent>
      </IonMenu>

      <IonRouterOutlet id="main">
        <Route exact path="/">
          <Redirect to="/home" />
        </Route>
        <GebetanContextProvider>
        <Route path="/home" component={Home} />
        <Route path="/target" component={Target} />
        <Route path="/profil" component={Profil} />
        </GebetanContextProvider>
      </IonRouterOutlet>
    </IonReactRouter>
  </IonApp>
);

export default App;
