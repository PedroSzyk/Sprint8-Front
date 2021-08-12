import React from 'react';
import ContentLastProduct from './ContentLastProduct';
import CategoriesInDB from './CategoriesInDB';

function ContentRowCenter(){
    return (
        <div className="row">
            
            {/*<!-- Last Movie in DB -->*/}
            <ContentLastProduct />
            {/*<!-- End content row last movie in Data Base -->*/}

            {/*<!-- Genres in DB -->*/}
            <CategoriesInDB />

        </div>
    )
}

export default ContentRowCenter;