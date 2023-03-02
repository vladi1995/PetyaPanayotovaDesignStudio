import { useState } from "react";

import styles from './Card.module.css';

const CreateCard = () => {
    const [errors, setErrors] = useState({});
    const [values, setValues] = useState({
        name: '',
        count: '',
        price: '',
        image: '',
        description: '',
        category: '',
    });

    const onChange = (e) => {
        setValues(state => ({
            ...state,
            [e.target.name]: e.target.value,
        }));
    };

    const validateImageUrl = (e) => {
        setErrors(state => ({
            ...state,
            [e.target.name]: (!values[e.target.name].startsWith('http') && !values[e.target.name].startsWith('https')),
        }));
    };

    const validateField = (e, bound) => {
        setErrors(state => ({
            ...state,
            [e.target.name]: (values[e.target.name]).trim().length < bound
        }));
    };

    const validateNumbers = (e) => {
        setErrors(state => ({
            ...state,
            [e.target.name]: values[e.target.name] <= 0,
        }));
    };

    const validateCount = (e) => {
        setErrors(state => ({
            ...state,
            [e.target.name]: !Number.isInteger(Number(values[e.target.name])) || values[e.target.name] <= 0,
        }));
    };
    return (
        <section className="u-align-center u-clearfix u-grey-5 u-section-10" id="sec-7464">
            <div className="u-clearfix u-sheet u-sheet-1">
                <h2 className="u-text u-text-default u-text-1">Добавяне на нова картичка</h2>
                <div className="u-form u-form-1">
                    <form
                        className="u-clearfix u-form-spacing-15 u-form-vertical u-inner-form"
                        style={{ padding: "10px" }}
                        source="email"
                        name="form"
                    >
                        <div className="u-form-group u-form-name u-label-top">
                            <label htmlFor="name-3b9a" className="u-label">Име на картичката:</label>
                            <input
                                type="text"
                                onChange={onChange}
                                onBlur={(e) => validateField(e, 5)}
                                value={values.name}
                                placeholder="Въведете име на картичката"
                                id="name-3b9a"
                                name="name"
                                className={
                                    errors.name ?
                                        `${styles['error']} u-border-1 u-border-grey-30 u-input u-input-rectangle u-radius-10 u-white u-input-1`
                                        :
                                        "u-border-1 u-border-grey-30 u-input u-input-rectangle u-radius-10 u-white u-input-1"
                                }
                                required="required"
                            />
                            {errors.name && <span>/Името на картичката трябва да е поне 5 символа/</span>}
                        </div>
                        <div className="u-form-group u-label-top">
                            <label htmlFor="email-3b9a" className="u-label">Брой:</label>
                            <input
                                type="number"
                                onChange={onChange}
                                onBlur={validateCount}
                                value={values.count}
                                placeholder="Въведете брой картички"
                                id="email-3b9a"
                                name="count"
                                className={
                                    errors.count ?
                                        `${styles['error']} u-border-1 u-border-grey-30 u-input u-input-rectangle u-radius-10 u-white u-input-2`
                                        :
                                        "u-border-1 u-border-grey-30 u-input u-input-rectangle u-radius-10 u-white u-input-2"
                                }
                                required="required"
                            />
                            {errors.count && <span>/Броят на картичките трябва да е поне 1 и да е цяло число/</span>}
                        </div>
                        <div className="u-form-group u-label-top u-form-group-3">
                            <label htmlFor="text-f937" className="u-label">Цена за брой (в лв):</label>
                            <input
                                type="number"
                                onChange={onChange}
                                onBlur={validateNumbers}
                                value={values.price}
                                placeholder="Въведете единична цена"
                                id="text-f937"
                                name="price"
                                className={
                                    errors.price ?
                                        `${styles['error']} u-border-1 u-border-grey-30 u-input u-input-rectangle u-radius-10 u-white u-input-3`
                                        :
                                        "u-border-1 u-border-grey-30 u-input u-input-rectangle u-radius-10 u-white u-input-3"
                                }
                                required="required"
                            />
                            {errors.price && <span>/Цената на картичкате трябва да е положително число/</span>}
                        </div>
                        <div className="u-form-group u-label-top u-form-group-4">
                            <label htmlFor="text-d5ae" className="u-label">Изображение на картичката</label>
                            <input
                                type="text"
                                onChange={onChange}
                                onBlur={validateImageUrl}
                                value={values.image}
                                placeholder="Въведете адрес на изображението"
                                id="text-d5ae"
                                name="image"
                                className={
                                    errors.image ?
                                        `${styles['error']} u-border-1 u-border-grey-30 u-input u-input-rectangle u-radius-10 u-white u-input-4`
                                        :
                                        "u-border-1 u-border-grey-30 u-input u-input-rectangle u-radius-10 u-white u-input-4"
                                }
                                required="required"
                            />
                            {errors.image && <span>/Линкът към снимката трябва да започва с http/https!/</span>}
                        </div>
                        <div className="u-form-group u-label-top u-form-group-5">
                            <label htmlFor="text-a271" className="u-label">Описание на картичката</label>
                            <input
                                type="text"
                                onChange={onChange}
                                onBlur={(e) => validateField(e, 5)}
                                value={values.description}
                                placeholder="Въведете описание"
                                id="text-a271"
                                name="description"
                                className={
                                    errors.description ?
                                    `${styles['error']} u-border-1 u-border-grey-30 u-input u-input-rectangle u-radius-10 u-white u-input-5`
                                    :
                                    "u-border-1 u-border-grey-30 u-input u-input-rectangle u-radius-10 u-white u-input-5"
                                }
                                required="required"
                            />
                            {errors.description && <span>/Описанието на картичката трябва да е поне 5 символа/</span>}
                        </div>
                        <div className="u-form-group u-form-select u-label-top u-form-group-6">
                            <label htmlFor="select-67b6" className="u-label">Категория:</label>
                            <div className="u-form-select-wrapper">
                                <select id="select-67b6"
                                    name="category"
                                    className="u-border-1 u-border-grey-30 u-input u-input-rectangle u-radius-10 u-white u-input-6"
                                    onChange={onChange}
                                    value={values.category}
                                >
                                    <option value="birthdayCard">Картички за рожден ден</option>
                                    <option value="baptismCard">Картички за кръщене</option>
                                    <option value="baptismCard">Картички за погачи</option>
                                    <option value="weddingCard">Покани за сватба</option>
                                    <option value="wineLabels">Етикети за вино</option>
                                </select>
                            </div>
                        </div>
                        <div className="u-align-left u-form-group u-form-submit u-label-top">
                            <a href="#" className="u-btn u-btn-submit u-button-style">Добавяне</a>
                            <input type="submit" value="submit" className="u-form-control-hidden" />
                        </div>
                        <div className="u-form-send-message u-form-send-success"> Thank you! Your message has been sent. </div>
                        <div className="u-form-send-error u-form-send-message"> Unable to send your message. Please fix errors then try
                            again. </div>
                        <input type="hidden" value="" name="recaptchaResponse" />
                        <input type="hidden" name="formServices" value="2dbdbb5f5f57a7961aaa0e0a2491c934" />
                    </form>
                </div>
            </div>
        </section>
    );
}

export default CreateCard;