import { useContext } from "react";
import { NavLink } from "react-router-dom";

import { CardContext } from "../../../contexts/CardContext";
import { AuthContext } from "../../../contexts/AuthContext";

import CatalogItem from "./CatalogItem";

import './Catalog.css';

const CatalogCards = () => {
    const { cards } = useContext(CardContext);
    const { user } = useContext(AuthContext);

    if (cards.length) {
        return (
            <section className="u-clearfix u-grey-5 u-section-6" id="sec-f49c">
                <div className="u-clearfix u-sheet u-valign-middle u-sheet-1">
                    <div className="u-blog u-expanded-width u-blog-1">
                        <div className="u-repeater u-repeater-1">
                            {cards.map(x => <CatalogItem key={x._id} item={x} />)}
                        </div>
                    </div>
                </div>
            </section>
        );
    } else {
        return (
            <section className="u-clearfix u-grey-5 u-section-6" id="sec-f49c">
                <div className="u-clearfix u-sheet u-valign-middle u-sheet-1">
                    <div className="u-blog u-expanded-width u-blog-1">
                        <div className="u-repeater u-repeater-1">
                            <h2>Няма данни</h2>
                            <p>Няма добавени картички! Моля опитайте по-късно или добавете картичка сами.
                                {user.email
                                    ?
                                    <NavLink to="/cards/create" className="u-btn u-btn-round u-button-style u-radius-50 u-btn-2">Добави картичка</NavLink>
                                    :
                                    <NavLink to="/auth/register" className="u-btn u-btn-round u-button-style u-radius-50 u-btn-2">Регистрирай се</NavLink>
                                }
                            </p>
                            <img src="https://shopcaymanislands.com/public/front/images/empty-cart.png" alt="notFoundPicture" />
                        </div>
                    </div>
                </div>
            </section>
        );
    }
};

export default CatalogCards;