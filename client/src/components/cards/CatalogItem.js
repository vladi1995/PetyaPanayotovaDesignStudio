import { NavLink } from "react-router-dom";

const CatalogItem = ({item}) => {
    return (
        <div
            style={{ backgroundImage: `url(${item.image})` }}
            className="u-blog-control u-blog-post u-container-style u-image u-repeater-item u-shading u-video-cover"
            data-image-width="2000" data-image-height="1333" data-href="blog/post-4.html">
            <div className="u-container-layout u-similar-container u-valign-bottom u-container-layout-2">
                <h3 className="u-blog-control u-text u-text-2">
                    <a className="u-post-header-link" href="blog/post-4.html">{item.name}
                    </a>
                </h3>
                <NavLink to={`/cards/details/${item._id}`}
                    className="u-blog-control u-border-none u-btn u-btn-rectangle u-button-style u-palette-1-base u-btn-2">Разгледай</NavLink>
            </div>
        </div>
    );
};

export default CatalogItem;