// Importing required libraries
import React from 'react'
import ReactDOM from 'react-dom'
import MyWeb3 from 'web3'
import { BrowserRouter, Route, withRouter } from 'react-router-dom'
import Header from './components/Header'

class Main extends React.Component {
    /* Creating constructor with few products that have necessary properties
    to display the greatest amount of information to users as possible.
    Properties such as 'title', 'description', 'id' and 'price' are a must.*/
    constructor(props) {
        super(props)

        this.state = {
            products: {
                id: 1,
                title: 'Garnised salad',
                date: Date.now(),
                owner: '',
                price: 12,
                image: 'https://cdn.shopify.com/static/sample-images/garnished.jpeg'
            },
            products: {
                id: 2,
                title: 'Classic Teapot',
                date: Date.now(),
                owner: '',
                price: 15,
                image: 'https://cdn.shopify.com/static/sample-images/teapot.jpg'
            },
            products: {
                id: 3,
                title: 'Trendy Shoe',
                date: Date.now(),
                owner: '',
                price: 18,
                image: 'https://cdn.shopify.com/static/sample-images/shoes.jpeg'
            },
            products: {
                id: 4,
                title: 'Generic Bath',
                date: Date.now(),
                owner: '',
                price: 30,
                image: 'https://cdn.shopify.com/static/sample-images/bath.jpeg'
            },
            productsHtml: [],
            productDetails: [],
            product: {},
        }
    }

    //This function converts strings into valid hexadecimal.
    bytes32(name) {
        return MyWeb3.utils.fromAscii(name)
    }

    render() {
        return (
            <div>
                <Route path="/" exact render={() => (
                    <Header />
                )} />
            </div>
        )
    }
}

/*To be able to access the history in order to redirec users
programmatically when opening a product*/
Main = withRouter(Main)

ReactDOM.render(
    /* Adding the 'BrowserRouter' component from the react router
    to initialize the router object*/
    /*'BrwoserRouter' component is the main component that is used 
    to initialize the router so that they can manage different pages.*/
    <BrowserRouter>
        <Main />
    </BrowserRouter>,
document.querySelector('#root'))
