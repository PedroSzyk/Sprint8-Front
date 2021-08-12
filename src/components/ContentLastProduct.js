import React, {Component} from 'react';
import Products from './Products';
// declaro componente de clase

class ContentLastProduct extends Component {
    constructor() {
        super();
        this.state = { 
            product : {},
        }
    }
    // Declaro estado inicial
    componentDidMount(){
            fetch('http://localhost:3000/api/products/lastProduct')
            .then(res => res.json())
            .then((promiseData) => {
                let lastProduct = promiseData.data;
                this.setState({product: lastProduct})
            }) 
    }
    render() { 
        return (
            <React.Fragment>
                    <Products  {...this.state.product}  />
            </React.Fragment>
          );
    }
}
 
export default ContentLastProduct;