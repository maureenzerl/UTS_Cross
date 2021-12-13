import React from 'react';

export interface Gebetan {
    id: string,
    name: string,
    image: string,
    note: string,
    gender: string
}

interface Context{
    gebetans: Gebetan[],
    sukaGebetanHandler: (id: string, name: string, image: string, note: string, gender: string) => void,
    deleteGebetan: (id: string) => void
}

const GebetanContext = React.createContext<Context>({
    gebetans: [],
    sukaGebetanHandler: () => {},
    deleteGebetan: () => {}
});

export default GebetanContext;