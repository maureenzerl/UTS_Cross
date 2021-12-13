import { IonAvatar, IonButtons, IonCol, IonContent, IonGrid, IonHeader, IonIcon, IonItem, IonItemOption, IonItemOptions, IonItemSliding, IonLabel, IonList, IonLoading, IonMenuButton, IonPage,IonRow, IonTitle, IonToolbar} from '@ionic/react';
import { heart} from 'ionicons/icons';
import './Home.css';
import { useContext, useRef, useState } from 'react';
import GebetanContext from './GebetanContext';

export const GEBETAN_DATA=[
  {id: 'g1' , name:'Ran Takahashi', image:"https://i.pinimg.com/474x/d8/4e/20/d84e207dbc9be0e61361451da96fce18.jpg", note:'Jepang Cahaya Asia', gender: 'Man'}, 
  {id: 'g2' , name:'Yuji Nishida', image:"https://worldofvolley.com/wp-content/uploads/2021/05/unnamed-file-16692.jpg", note:'Jepang Cahaya Asia', gender: 'Man'},
  {id: 'g3' , name:'Yuki Ishikawa', image:"https://64.media.tumblr.com/ca7fdf6b1ffc000d4a42362c3dbde5ce/82ce9e2572af292b-ed/s1280x1920/ec2c540378a4bb0fc6985f47a83b693a2e3d0096.jpg", note:'Jepang Cahaya Asia', gender: 'Man'},
  {id: 'g4' , name:'Sebastian Stan', image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTy7pFrIBbOVu2A3Szf6ojjQQWyhG3vldZYkA&usqp=CAU", note:'Bucky Barnes Issues', gender: 'Man'},
  {id: 'g5' , name:'Dave Franco', image:"https://cdn.wallpapersafari.com/72/62/WTx9G3.png", note:'Forever Crush', gender: 'Man'}
]

const Home: React.FC = () => {

  const [showLoading, setShowLoading] = useState(false);
  const slidingOptionsRef = useRef<HTMLIonItemSlidingElement>(null);
  const gebetanCtx = useContext(GebetanContext);
  let exist: any[] = [];
  gebetanCtx.gebetans.map(gebetan=>exist.push(gebetan.id));
  
  const sukaGebetanHandler = (id: string, name: string, image: string, note: string, gender: string)=> {
      slidingOptionsRef.current?.closeOpened();
      gebetanCtx.sukaGebetanHandler(id, name, image, note, gender);
      console.log('Adding gebetan...');
      setShowLoading(true)
  }
  setTimeout(() => {
    setShowLoading(false);
  }, 1500);

  return (
    <IonPage>
    <IonContent>
     <IonHeader className="ion-no-border ion-padding">
        <IonToolbar>
        <IonButtons slot="start">
              <IonMenuButton />
            </IonButtons>
          <IonTitle>GebetApp</IonTitle>
              <IonItem routerLink="/profil" detail={false} slot="end">
                <IonAvatar className="ava"></IonAvatar>
              </IonItem>
           
        </IonToolbar>
      </IonHeader>
      
                <IonList>
                    {GEBETAN_DATA.map(gebetan =>(
                        <IonItemSliding key={gebetan.id} ref={slidingOptionsRef}>
                          <IonItemOptions side="end">
                                <IonItemOption color="warning" routerLink="/Target" disabled={exist.indexOf(gebetan.id) > -1} onClick={() => sukaGebetanHandler(gebetan.id, gebetan.name, gebetan.image, gebetan.note, gebetan.gender)}>
                                    <IonIcon icon={heart} slot="icon-only" />
                                </IonItemOption>
                                <IonLoading
                                  cssClass="my-custom-class"
                                  isOpen={showLoading}
                                  onDidDismiss={()=> setShowLoading(false)}
                                  message="is loading..."
                                  duration={1500}
                                />
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
                    ))}
                </IonList>
            </IonContent>
    </IonPage>
  );
};

export default Home;