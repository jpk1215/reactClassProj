import React from 'react';
import Axios from 'axios';

export default class App extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            products: []
        };
    }

    componentDidMount() {
        Axios.get('http://reactjs102.herokuapp.com/products')
            .then((response) => {
                this.setState({products: response.data});
            })
    }

    render() {
        const { data } = this.props;
        const { products } = this.state;
        const productItems = products.map(
            product =>
                <div>
                    <p>{product.product}</p>
                    <img src={product.image}/>
                </div>
        );
        return (
            <div>
                <h1>Welcome to My Universal App!</h1>
                <h2>{ data[0].product }</h2>
                <img src={data[0].image}/>
                {productItems}
            </div>
        )
    }
}