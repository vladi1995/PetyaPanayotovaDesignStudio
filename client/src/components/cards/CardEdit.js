const CardEdit = () => {
    return (
        <section className="u-align-center u-clearfix u-grey-5 u-section-11" id="sec-fd74">
            <div className="u-clearfix u-sheet u-sheet-1">
                <h2 className="u-text u-text-default u-text-1">Редактиране на картичка</h2>
                <div className="u-form u-form-1">
                    <form action="https://forms.nicepagesrv.com/v2/form/process"
                        className="u-clearfix u-form-spacing-15 u-form-vertical u-inner-form" style={{"padding": "10px"}} source="email"
                        name="form">
                        <div className="u-form-group u-form-name u-label-top">
                            <label for="name-3b9a" className="u-label">Име на картичката:</label>
                            <input type="text" placeholder="Въведете име на картичката" id="name-3b9a" name="name"
                                className="u-border-1 u-border-grey-30 u-input u-input-rectangle u-radius-10 u-white u-input-1" required="" />
                        </div>
                        <div className="u-form-group u-label-top">
                            <label for="email-3b9a" className="u-label">Брой:</label>
                            <input type="text" placeholder="Въведете брой картички" id="email-3b9a" name="count"
                                className="u-border-1 u-border-grey-30 u-input u-input-rectangle u-radius-10 u-white u-input-2"
                                required="required" />
                        </div>
                        <div className="u-form-group u-label-top u-form-group-3">
                            <label for="text-f937" className="u-label">Цена за брой:</label>
                            <input type="text" placeholder="Въведете единична цена" id="text-f937" name="price"
                                className="u-border-1 u-border-grey-30 u-input u-input-rectangle u-radius-10 u-white u-input-3" />
                        </div>
                        <div className="u-form-group u-label-top u-form-group-4">
                            <label for="text-d5ae" className="u-label">Изображение на картичката</label>
                            <input type="text" placeholder="Въведете адрес на изображението" id="text-d5ae" name="image"
                                className="u-border-1 u-border-grey-30 u-input u-input-rectangle u-radius-10 u-white u-input-4" />
                        </div>
                        <div className="u-form-group u-label-top u-form-group-5">
                            <label for="text-a271" className="u-label">Описание на картичката</label>
                            <input type="text" placeholder="Въведете описание" id="text-a271" name="description"
                                className="u-border-1 u-border-grey-30 u-input u-input-rectangle u-radius-10 u-white u-input-5" />
                        </div>
                        <div className="u-form-group u-form-select u-label-top u-form-group-6">
                            <label for="select-67b6" className="u-label">Категория:</label>
                            <div className="u-form-select-wrapper">
                                <select id="select-67b6" name="select"
                                    className="u-border-1 u-border-grey-30 u-input u-input-rectangle u-radius-10 u-white u-input-6">
                                    <option value="Item 1" data-calc="">Item 1</option>
                                    <option value="Item 2" data-calc="">Item 2</option>
                                    <option value="Item 3" data-calc="">Item 3</option>
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