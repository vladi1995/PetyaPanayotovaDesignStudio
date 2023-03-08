import { useContext } from "react";
import { NavLink } from "react-router-dom";

import { AuthContext } from "../../contexts/AuthContext";

import './Home.css';

const Home = () => {
    const { user, userId } = useContext(AuthContext);
    
    return (
        <section className="u-clearfix u-grey-5 u-section-1" id="sec-92f0">
            <div className="u-clearfix u-sheet u-sheet-1">
                <div className="u-clearfix u-expanded-width u-gutter-12 u-layout-wrap u-layout-wrap-1">
                    <div className="u-layout">
                        <div className="u-layout-row">
                            <div className="u-container-style u-layout-cell u-left-cell u-size-30 u-size-xs-60 u-layout-cell-1" src="">
                                <div className="u-container-layout u-container-layout-1">
                                    <h2 className="u-align-center u-custom-font u-text u-text-default u-text-font u-text-2">Направете всеки
                                        повод запомнящ се ...</h2>
                                    <p className="u-align-center u-text u-text-3">Поздравителни картички за рожден ден, сватба, кръщене, св.
                                        Валентин ... етикети за вино и много други</p>
                                    <NavLink to="/cards/catalog" className="u-btn u-btn-round u-button-style u-radius-50 u-btn-1">КАТАЛОГ</NavLink>
                                    <NavLink to="/auth/register" className="u-btn u-btn-round u-button-style u-radius-50 u-btn-2">РЕГИСТРАЦИЯ</NavLink>
                                </div>
                            </div>
                            <div
                                className="u-align-center u-container-style u-image u-layout-cell u-right-cell u-size-30 u-size-xs-60 u-image-1"
                                src="" data-image-width="1920" data-image-height="1080">
                                <div className="u-container-layout u-container-layout-2" src=""></div>
                            </div>

                        </div>

                    </div>
                </div>
            </div>
        </section>
    );
};

export default Home;