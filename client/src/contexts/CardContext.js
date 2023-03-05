import { createContext } from "react";
import { useState, useEffect } from "react";
import * as cardService from '../services/cardService';
export const CardContext = createContext();

export const CardProvider = ({
    children,
}) => {
    const [cards, setCards] = useState([]);

    useEffect(() => {
        cardService.getAll()
            .then(result => {
                setCards(result);
            });
    }, []);

    const addCard = (gameData) => {
        setCards(state => [
            ...state,
            gameData,
        ]);
    };

    return <CardContext.Provider value={{
        cards, addCard
    }}>
        {children}
    </CardContext.Provider>;
};

