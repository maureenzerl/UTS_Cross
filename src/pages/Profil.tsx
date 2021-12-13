import { Redirect, Route, useParams } from 'react-router-dom';
import { IonApp, IonCard, IonHeader, IonPage, IonRouterOutlet, IonToolbar, IonButton, IonCardContent, IonContent, IonButtons, IonMenuButton, IonTitle, IonList, IonItem, IonLabel, IonIcon, IonItemSliding, IonItemOption, IonItemOptions, IonImg, IonCardTitle, IonAvatar, IonRoute, IonRouterLink } from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import React from 'react';
import './profile.css';
import { logoInstagram } from 'ionicons/icons';

const Profil: React.FC = () => {
    return (
    <IonPage>
        <IonHeader className="ion-padding ion-no-border">
            <IonToolbar>
            <IonButtons slot="start">
              <IonMenuButton />
            </IonButtons>
                <IonTitle>Profil</IonTitle>
            </IonToolbar>
        </IonHeader>
        <IonContent className="ion-padding">
            <h1 className="acc">Account</h1>
            <IonAvatar className="akun" />
            <h4 className="acc">Maureen Zerlina Oktaviani</h4>   
            <h4 className="acc1">00000036850</h4>
            <IonButton expand="block" fill="outline">
                <IonRouterLink href="https://www.instagram.com/maureenzerl/">
                    <h4 className="acc2"> 
                        <IonIcon icon={logoInstagram} /> maureenzerl
                    </h4>
                </IonRouterLink>
            </IonButton>
        </IonContent>
    </IonPage>
    )
};

export default Profil;
