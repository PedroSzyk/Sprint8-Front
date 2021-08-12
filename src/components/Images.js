import React from 'react';


const Images = (props) => {
    return ( 
        <React.Fragment>
            <div >
            <img className="img-fluid px-3 px-sm-4 mt-3 mb-4" style={{width: 40 +'rem'}}   src={props.URL} />    
            </div>    
            
        </React.Fragment>
     );
}
 
export default Images;