import React, {useState} from 'react';
import GebetanContext, {Gebetan} from './GebetanContext';

const  GebetanContextProvider: React.FC = props => {
    const [gebetans, setGebetans] = useState<Gebetan[]>([]);
    const sukaGebetanHandler1 = (id: string, name: string, image: string, note: string, gender: string) => {
        const gebetanBaru: Gebetan = {
            id: id,
            name: name,
            image: image,
            note: note,
            gender: gender
        }
        setGebetans((currentGebetan) => {return currentGebetan.concat(gebetanBaru)})
    };
    const deleteGebetan1 = (id: string) => {
        for(let i = 0; i < gebetans.length; i++){
            if(gebetans[i].id == id){
                gebetans.splice(i, 1);
                break;
            }
        }
    }
    return(
        <GebetanContext.Provider value={{
            gebetans, sukaGebetanHandler: sukaGebetanHandler1, deleteGebetan : deleteGebetan1
        }}>
            {props.children}
        </GebetanContext.Provider>
    );
};

export default GebetanContextProvider;
