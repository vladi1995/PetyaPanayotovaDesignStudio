import { useEffect, useState, useContext } from "react";
import { useParams, NavLink } from "react-router-dom";

import { AuthContext } from "../../../contexts/AuthContext";
import * as cardService from '../../../services/cardService';
import * as featuresService from '../../../services/featuresService';
import { objOfCategories } from '../../../utils/constants';

import './Details.css';

const CardDetails = () => {
    const { cardId } = useParams();
    const [card, setCard] = useState({});

    const { user } = useContext(AuthContext);
    const [loading, setIsLoading] = useState(true);

    const [productsToBuy, setProductsToBuy] = useState(0);

    const [errorPositiveNumber, setErrorPositiveNumber] = useState(false);
    const [errorBudget, setErrorBudget] = useState(false);
    const [errorCount, setErrorCount] = useState(false);

    const [allBoughtProducts, setAllBoughtProducts] = useState([]);
    const [valueCount, setValueCount] = useState(0);

    useEffect(() => {
        featuresService.getAll()
            .then(result => {
                setAllBoughtProducts(result);
                const sumOfAllBought = Number(result.filter(x => x.cardId == cardId).map(x => Number(x.productsToBuy)).reduce((prev, next) => prev + next, 0));
                setValueCount(sumOfAllBought);
            });
    }, []);

    useEffect(() => {
        setIsLoading(true);
        cardService.getOneDetailed(cardId)
            .then(result => {
                setCard(result);
                setIsLoading(false);
            });
    }, []);

    console.log(valueCount);

    const buyHandler = (e) => {
        e.preventDefault();

        setErrorPositiveNumber(false);
        setErrorBudget(false);
        setErrorCount(false);

        if (productsToBuy <= 0) {
            setErrorPositiveNumber(true);
            return;
        }

        if (productsToBuy * card[0].price > Number(user.budget)) {
            setErrorBudget(true);
            return;
        }

        if (productsToBuy > Number(card[0].count - valueCount)) {
            setErrorCount(true);
            return;
        }

        featuresService.create({ cardId, productsToBuy })
            .then(result => {
                setValueCount(state => {
                    return Number(state) + Number(result.productsToBuy);
                });
            });
    }

    const onChangeBuyProducts = (e) => {
        setProductsToBuy(e.target.value);
    }

    return (
        <>
            {
                !loading
                &&
                <section className="u-clearfix u-grey-5 u-section-7" id="sec-8833">
                    <div className="u-clearfix u-sheet u-sheet-1">
                        <div className="u-clearfix u-expanded-width u-gutter-0 u-layout-spacing-vertical u-layout-wrap u-layout-wrap-1">
                            <div className="u-layout">
                                <div className="u-layout-row">
                                    <div className="u-align-left u-container-style u-layout-cell u-left-cell u-size-40 u-layout-cell-1">
                                        <div className="u-container-layout u-container-layout-1">

                                            <h2 className="u-text u-text-default u-text-1">{card[0].name}</h2>
                                            <p className="u-text u-text-2">{card[0].description}</p>
                                            <NavLink to={`/user/profile/${card[0]._ownerId}`}
                                                className="u-active-none u-border-2 u-border-no-left u-border-no-right u-border-no-top u-border-palette-1-base u-bottom-left-radius-0 u-bottom-right-radius-0 u-btn u-btn-rectangle u-button-style u-hover-none u-none u-radius-0 u-top-left-radius-0 u-top-right-radius-0 u-btn-1">
                                                {card[0].user.email || card[0].user.firstName + ' ' + card[0].user.lastName}</NavLink>
                                            <p className="u-text u-text-default u-text-3">Създал:</p>

                                            {card[0].user.profileImageUrl
                                                ?
                                                <img src={card[0].user.profileImageUrl} style={{ maxWidth: '100px', marginLeft: '60px', marginTop: '10px' }} alt="userPhoto" />
                                                :
                                                <img src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png" style={{ maxWidth: '100px', marginLeft: '60px', marginTop: '10px' }} alt="userPhoto" />
                                            }


                                            <a href="https://nicepage.com/k/parking-html-templates"
                                                className="u-active-none u-border-2 u-border-no-left u-border-no-right u-border-no-top u-border-palette-1-base u-bottom-left-radius-0 u-bottom-right-radius-0 u-btn u-btn-rectangle u-button-style u-hover-none u-none u-radius-0 u-top-left-radius-0 u-top-right-radius-0 u-btn-2">
                                                {objOfCategories[card[0].category]}</a>

                                            <p className="u-text u-text-default u-text-4">Категория:</p>
                                            <p className="u-text u-text-default u-text-5">Цена за брой:</p>
                                            <p className="u-text u-text-default u-text-6">{card[0].price} лв.</p>
                                            <p className="u-text u-text-default u-text-7">{valueCount ? card[0].count - valueCount : card[0].count} броя</p>

                                            <p className="u-text u-text-default u-text-8">Остават:</p>

                                            {user._id === card[0]._ownerId ?
                                                <>
                                                    <span className="u-file-icon u-icon u-icon-1">
                                                        <NavLink to={`/cards/edit/${card[0]._id}`}>
                                                            <img src="/images/2919592.png" alt="" />
                                                        </NavLink>
                                                    </span>


                                                    <span className="u-file-icon u-icon u-icon-2">
                                                        <NavLink to={`/cards/delete/${card[0]._id}`}>
                                                            <img src="/images/6861362.png" alt="" />
                                                        </NavLink>
                                                    </span>

                                                </> :
                                                <>
                                                    <div className="u-form u-form-1">
                                                        <form
                                                            className="u-clearfix u-form-horizontal u-form-spacing-15 u-inner-form"
                                                            style={{ "padding": "15px" }}
                                                            source="email"
                                                            onSubmit={buyHandler}
                                                        >

                                                            <div className="u-form-group u-label-top">
                                                                <label htmlFor="name-558c" className="u-label">Купи</label>
                                                                <input type="text"
                                                                    placeholder="Брой"
                                                                    id="name-558c"
                                                                    name="numOfCards"
                                                                    className="u-border-1 u-border-grey-30 u-input u-input-rectangle u-radius-10"
                                                                    required="required"
                                                                    value={productsToBuy}
                                                                    onChange={onChangeBuyProducts}
                                                                />
                                                            </div>

                                                            <div className="u-form-group u-form-submit u-label-top">
                                                                <input type="submit" value="Купи" className="u-btn u-btn-submit u-button-style" />
                                                            </div>


                                                        </form>
                                                    </div>

                                                    {errorPositiveNumber && <div style={{ marginLeft: '65px' }}>/Закупените продукти трябва да са положително число!/</div>}
                                                    {errorBudget && <div style={{ marginLeft: '65px' }}>/Бюджетът ви не е достатъчен!/</div>}
                                                    {errorCount && <div style={{ marginLeft: '65px' }}>/Недостатъчна наличност!/</div>}

                                                    <a href="https://nicepage.studio"
                                                        className="u-border-2 u-border-grey-75 u-btn u-btn-round u-button-style u-gradient u-none u-radius-4 u-text-body-alt-color u-btn-4"><span
                                                            className="u-icon u-text-white">
                                                            <svg className="u-svg-content" viewBox="0 0 512 512" x="0px" y="0px"
                                                                style={{ "width": "1em", "height": "1em" }}>
                                                                <path
                                                                    d="M53.333,224C23.936,224,0,247.936,0,277.333V448c0,29.397,23.936,53.333,53.333,53.333h64 c12.011,0,23.061-4.053,32-10.795V224H53.333z">
                                                                </path>
                                                                <path
                                                                    d="M512,304c0-12.821-5.077-24.768-13.888-33.579c9.963-10.901,15.04-25.515,13.653-40.725    c-2.496-27.115-26.923-48.363-55.637-48.363H324.352c6.528-19.819,16.981-56.149,16.981-85.333c0-46.272-39.317-85.333-64-85.333 c-22.165,0-37.995,12.48-38.677,12.992c-2.517,2.027-3.989,5.099-3.989,8.341v72.341l-61.44,133.099l-2.56,1.301v228.651    C188.032,475.584,210.005,480,224,480h195.819c23.232,0,43.563-15.659,48.341-37.269c2.453-11.115,1.024-22.315-3.861-32.043 c15.765-7.936,26.368-24.171,26.368-42.688c0-7.552-1.728-14.784-5.013-21.333C501.419,338.731,512,322.496,512,304z">
                                                                </path>
                                                            </svg>
                                                        </span>&nbsp;Харесва ми
                                                    </a>
                                                    <p className="u-text u-text-default u-text-9">...</p>
                                                    <p className="u-text u-text-10">харесват картичката</p>
                                                </>
                                            }
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
};

export default CardDetails;