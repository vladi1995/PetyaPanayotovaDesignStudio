import CatalogItem from "./CatalogItem";
import { CardContext } from "../../contexts/CardContext";
import { useContext } from "react";

const CatalogCards = () => {
    const {cards} = useContext(CardContext);
    return (
        <section className="u-clearfix u-grey-5 u-section-6" id="sec-f49c">
            <div className="u-clearfix u-sheet u-valign-middle u-sheet-1">
                <div className="u-blog u-expanded-width u-blog-1">
                    <div className="u-repeater u-repeater-1">
                        {cards.map(x => <CatalogItem key={x._id} item={x}/>)}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default CatalogCards;