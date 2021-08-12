import React from 'react';

function ProductsList(props) {
    return (
        <React.Fragment>
            <tr>
                <td>{props.id}</td>
                <td>{props.name}</td>
                <td>{"$" + props.price}</td>
                <td>{props.category.name}</td>
                <td>{props.brand.name}</td>
                <td>{props.color.name}</td>
                <td>{props.stock}</td>
                <td><button><a href={props.detail}>Detalle</a></button></td>
            </tr>
        </React.Fragment>
    )
}

export default ProductsList;