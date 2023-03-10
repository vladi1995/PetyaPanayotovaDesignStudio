import { useState, useEffect, useContext } from "react";
import { NavLink, useParams, useNavigate } from "react-router-dom";

import { AuthContext } from "../../../contexts/AuthContext";
import { CardContext } from "../../../contexts/CardContext";
import * as cardService from '../../../services/cardService';
import { objOfCategories } from '../../../utils/constants';

import './Delete.css';

const CardDelete = () => {
    const { cardId } = useParams();
    const [card, setCard] = useState({});
    const { user } = useContext(AuthContext);

    const { removeCard } = useContext(CardContext);
    const navigate = useNavigate();

    const [loading, setIsLoading] = useState(true);

    useEffect(() => {
        setIsLoading(true);
        cardService.getOneDetailed(cardId)
            .then(result => {
                setCard(result);
                setIsLoading(false);
            });
    }, [cardId]);

    const deleteCardHandler = () => {
        const confirmation = window.confirm('Сигурни ли сте, че искате да изтриете играта?');

        if (confirmation) {
            cardService.remove(cardId)
                .then(() => {
                    removeCard(cardId);
                    navigate('/cards/catalog');
                });
        }
    };


    return (
        <>
            {!loading &&
                <section className="u-clearfix u-grey-5 u-section-12" id="sec-7411">
                    <div className="u-clearfix u-sheet u-sheet-1">
                        <div className="u-clearfix u-expanded-width u-gutter-0 u-layout-spacing-vertical u-layout-wrap u-layout-wrap-1">
                            <div className="u-layout">
                                <div className="u-layout-row">
                                    <div className="u-align-left u-container-style u-layout-cell u-left-cell u-size-40 u-layout-cell-1">
                                        <div className="u-container-layout u-valign-top u-container-layout-1">
                                            <h2 className="u-text u-text-default u-text-font u-text-1">Изтриване на картичка</h2>
                                            <h2 className="u-text u-text-default u-text-2">{card[0].name}</h2>
                                            <p className="u-text u-text-3">{card[0].description}</p>
                                            <a href="https://nicepage.site"
                                                className="u-active-none u-border-2 u-border-no-left u-border-no-right u-border-no-top u-border-palette-1-base u-bottom-left-radius-0 u-bottom-right-radius-0 u-btn u-btn-rectangle u-button-style u-hover-none u-none u-radius-0 u-top-left-radius-0 u-top-right-radius-0 u-btn-1">
                                                {card[0].user.email || card[0].user.firstName + ' ' + card[0].user.lastName}</a>
                                            <p className="u-text u-text-default u-text-4">Създал:</p>
                                            {card[0].user.profileImageUrl
                                                ?
                                                <img src={card[0].user.profileImageUrl} style={{ maxWidth: '100px', marginLeft: '15px', marginTop: '10px' }} alt="userPhoto" />
                                                :
                                                <img src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png" style={{ maxWidth: '100px', marginLeft: '60px', marginTop: '10px' }} alt="userPhoto" />
                                            }
                                            <a href="https://nicepage.com/k/parking-html-templates"
                                                className="u-active-none u-border-2 u-border-no-left u-border-no-right u-border-no-top u-border-palette-1-base u-bottom-left-radius-0 u-bottom-right-radius-0 u-btn u-btn-rectangle u-button-style u-hover-none u-none u-radius-0 u-top-left-radius-0 u-top-right-radius-0 u-btn-2">
                                                {objOfCategories[card[0].category]}</a>
                                            <p className="u-text u-text-default u-text-5">Категория:</p>
                                            <p className="u-text u-text-default u-text-6">{card[0].price} лв.</p>
                                            <p className="u-text u-text-default u-text-7">Цена за брой:</p>
                                            <p className="u-text u-text-default u-text-8">{card[0].count} броя</p>
                                            <p className="u-text u-text-default u-text-9">Остават:</p>
                                            <div className="u-form u-form-1">

                                                <div className="u-form-group u-form-submit u-label-top">
                                                    <NavLink style={{ 'marginTop': '20px', 'marginLeft': '15px' }} to={`/cards/delete/${cardId}`} onClick={deleteCardHandler} className="u-border-none u-btn u-btn-submit u-button-style u-palette-2-base u-btn-3">
                                                        Изтрий
                                                    </NavLink>
                                                </div>

                                            </div>
                                        </div>
                                    </div>
                                    <div className="u-container-style u-image u-layout-cell u-right-cell u-size-20 u-image-1">
                                        <img src={card[0].image} style={{ width: "400px", height: "600px", objectFit: "cover" }}></img>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            }
        </>
    );
}

export default CardDelete;