import React from 'react';

function Products(props){
    return(
        <React.Fragment>
            <div className="col-lg-6 mb-4">
                <div className="card shadow mb-4">
                    <div className="card-header py-3">
                        <h5 className="m-0 font-weight-bold text-gray-800">Ultimo producto en base de datos</h5>
                    </div>
                    <div className="card-body">
                    <div className="text-center">
                        <img className="img-fluid px-3 px-sm-4 mt-3 mb-4" src={props.urlImg} alt = "imagen producto" />
                    </div>
                        <h3>{props.name}</h3>
                        <p>{props.description}</p>
                        <a className="btn btn-danger" target="_blank" rel="nofollow" href="/">Ver producto</a>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )  
}
export default Products;