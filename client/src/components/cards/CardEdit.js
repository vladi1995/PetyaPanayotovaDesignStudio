import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import * as cardService from '../../services/cardService';

const CardEdit = () => {
    const [card, setCard] = useState({});
    const { cardId } = useParams();


    useEffect(() => {
        cardService.getOne(cardId)
            .then(result => setCard(result));
    }, [cardId]);


    return (
        <section className="u-align-center u-clearfix u-grey-5 u-section-11" id="sec-fd74">
            <div className="u-clearfix u-sheet u-sheet-1">
                <h2 className="u-text u-text-default u-text-1">Редактиране на картичка</h2>
                <div className="u-form u-form-1">
                    <form action="https://forms.nicepagesrv.com/v2/form/process"
                        className="u-clearfix u-form-spacing-15 u-form-vertical u-inner-form" style={{ "padding": "10px" }} source="email"
                        name="form">
                        <div className="u-form-group u-form-name u-label-top">
                            <label htmlFor="name-3b9a" className="u-label">Име на картичката:</label>
                            <input
                                type="text"
                                id="name-3b9a"
                                name="name"
                                className="u-border-1 u-border-grey-30 u-input u-input-rectangle u-radius-10 u-white u-input-1"
                                required="required"
                                value={card.name}
                            />
                        </div>
                        <div className="u-form-group u-label-top">
                            <label htmlFor="email-3b9a" className="u-label">Брой:</label>
                            <input
                                type="text"
                                placeholder="Въведете брой картички"
                                id="email-3b9a"
                                name="count"
                                className="u-border-1 u-border-grey-30 u-input u-input-rectangle u-radius-10 u-white u-input-2"
                                required="required"
                                value={card.count}
                            />
                        </div>
                        <div className="u-form-group u-label-top u-form-group-3">
                            <label htmlFor="text-f937" className="u-label">Цена за брой:</label>
                            <input
                                type="text"
                                placeholder="Въведете единична цена"
                                id="text-f937"
                                name="price"
                                className="u-border-1 u-border-grey-30 u-input u-input-rectangle u-radius-10 u-white u-input-3"
                                required="required"
                                value={card.price}
                            />
                        </div>
                        <div className="u-form-group u-label-top u-form-group-4">
                            <label htmlFor="text-d5ae" className="u-label">Изображение на картичката</label>
                            <input
                                type="text"
                                placeholder="Въведете адрес на изображението"
                                id="text-d5ae"
                                name="image"
                                className="u-border-1 u-border-grey-30 u-input u-input-rectangle u-radius-10 u-white u-input-4"
                                required="required"
                                value={card.image}
                            />
                        </div>
                        <div className="u-form-group u-label-top u-form-group-5">
                            <label htmlFor="text-a271" className="u-label">Описание на картичката</label>
                            <input
                                type="text"
                                placeholder="Въведете описание"
                                id="text-a271"
                                name="description"
                                className="u-border-1 u-border-grey-30 u-input u-input-rectangle u-radius-10 u-white u-input-5"
                                required="required"
                                value={card.description}
                            />
                        </div>
                        <div className="u-form-group u-form-select u-label-top u-form-group-6">
                            <label htmlFor="select-67b6" className="u-label">Категория:</label>
                            <div className="u-form-select-wrapper">
                                <select
                                    id="select-67b6"
                                    name="select"
                                    className="u-border-1 u-border-grey-30 u-input u-input-rectangle u-radius-10 u-white u-input-6"
                                    value={card.category}
                                >
                                    <option value="birthdayCard">Картички за рожден ден</option>
                                    <option value="baptismCard">Картички за кръщене</option>
                                    <option value="baptismCard">Картички за погачи</option>
                                    <option value="weddingCard">Покани за сватба</option>
                                    <option value="wineLabels">Етикети за вино</option>
                                </select>

                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </section>
    );
};

export default CardEdit;