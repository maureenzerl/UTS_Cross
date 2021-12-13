import { Redirect, Route, useParams } from 'react-router-dom';
import { IonApp, IonCard, IonHeader, IonPage, IonRouterOutlet, IonToolbar, IonButton, IonCardContent, IonContent, IonButtons, IonMenuButton, IonTitle, IonList, IonItem, IonLabel, IonIcon, IonItemSliding, IonItemOption, IonItemOptions, IonAvatar, IonCol, IonGrid, IonRow, IonActionSheet } from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import React, { useContext, useRef, useState } from 'react';
import './Target.css';
import Home, { GEBETAN_DATA } from './Home';
import GebetanContext from './GebetanContext';
import { trashOutline } from 'ionicons/icons';
    

const Target: React.FC = () => {

    const gebetanCtx = useContext(GebetanContext);
    const [actionSheet, setShowActionSheet] = useState(false);
    const [id1, setId] = useState<string>();
    
    const slidingOptionsRef =useRef<HTMLIonItemSlidingElement>(null);
    
    const deleteGebetan = (id: string) => {
        slidingOptionsRef.current?.closeOpened();
        gebetanCtx.deleteGebetan(id);
    }

    const actionSheetHandler = (id: string) => {
        setShowActionSheet(true);
        setId(id);
    }

    return (
    <IonPage>
        <IonHeader className="ion-padding ion-no-border">
            <IonToolbar>
            <IonButtons slot="start">
              <IonMenuButton />
            </IonButtons>
                <IonTitle>Target Gebetan</IonTitle>
                <IonItem routerLink="/profil" detail={false} slot="end">
                    <IonAvatar className="ava"></IonAvatar>
              </IonItem>
            </IonToolbar>
        </IonHeader>
        <IonContent>
            {gebetanCtx.gebetans.length != 0?
                gebetanCtx.gebetans.map(gebetan => (
                    <IonItemSliding key={gebetan.id} ref={slidingOptionsRef}>
                    <IonItemOptions side="end">
                          <IonItemOption color="warning" onClick={() => actionSheetHandler(gebetan.id)}>
                              <IonIcon icon={trashOutline} slot="icon-only" />
                          </IonItemOption>
                          {id1 &&
                                <IonActionSheet isOpen={actionSheet} 
                                                onDidDismiss={() => setShowActionSheet(false)}
                                                header="Yakin gak gebet dia lagi ?"
                                                buttons={[
                                                    {text: 'Yakin, hapus dari daftar.', handler: () => deleteGebetan(id1)},
                                                    {text: 'Gak yakin, kembali deh.'}
                                                ]} 
                                />
                            }
                          </IonItemOptions>
                        
                        <IonItem>
                        <IonGrid key={gebetan.id} className="ion-padding gebetan">
                        <IonRow>
                          <IonCol>
                            <IonAvatar>
                              <img src={gebetan.image}/>
                            </IonAvatar>
                          </IonCol>
                          <IonCol size="8">
                            <IonRow>
                            <h4>{gebetan.name}</h4>
                            </IonRow>
                            <IonRow>
                            <IonLabel>{gebetan.note}</IonLabel>
                            </IonRow>
                            <IonRow>
                            <IonLabel>{gebetan.gender}</IonLabel>
                            </IonRow>
                          </IonCol>
                        </IonRow>
                        </IonGrid>
                        </IonItem>
                  </IonItemSliding>
                )):
                <IonGrid className="ion-padding cari1">
            <h4>Anda belum punya target gebetan.</h4>
            <IonButton href="/home">
                Cari Gebetan
            </IonButton>
            </IonGrid>
}
        </IonContent>
    </IonPage>
    )
};

export default Target;

