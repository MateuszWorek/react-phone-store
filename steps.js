/* App.js */
import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

<React.Fragment>
    <h3>hello from app</h3>
</React.Fragment>

/* create components */
/* ./components/Navbar.js */
/* rcc */
import React, { Component } from 'react'

export default class Navbar extends Component {
    render() {
        return (
            <div>
                <h3>hello from navbar</h3>
            </div>
        )
    }
}

/* Product.js */
/* rcc */
import React, { Component } from 'react'

export default class Product extends Component {
    render() {
        return (
            <div>
                <h3>hello from product</h3>
            </div>
        )
    }
}

/* ProductList.js */
import React, { Component } from 'react'
import Product from './Product';

export default class ProductList extends Component {
    render() {
        return (
            <div>
                <Product></Product>
            </div>
        )
    }
}

/* Details.js */
import React, { Component } from 'react';

class Details extends Component {
    render() {
        return (
            <div>
                <h3>hello from details</h3>
            </div>
        );
    }
}

export default Details;

/* Default.js */
import React, { Component } from 'react'

export default class Default extends Component {
    render() {
        return (
            <div>
                <h3>page not found</h3>
            </div>
        )
    }
}

/* Cart.js */
import React, { Component } from 'react'

export default class Cart extends Component {
    render() {
        return (
            <div>
                <h3>hello from cart</h3>
            </div>
        )
    }
}

/* App.js */
import Navbar from './components/Navbar';
import ProductList from './components/ProductList';
import Details from './components/Details';
import Cart from './components/Cart';
import Default from './components/Default';

<Navbar></Navbar>
<ProductList></ProductList>
<Details></Details>
<Cart></Cart>
<Default></Default>

/* install react router dom */
/* npm install --save react-router-dom */
/* index.js */
import { BrowserRouter as Router } from 'react-router-dom';
<Router>
    <App />
</Router>

/* App.js */
<Navbar></Navbar>
<Switch>
    <Route exact path="/" component={ ProductList }></Route>
    <Route path="/details" component={ Details }></Route>
    <Route path="/cart" component={ Cart }></Route>
    <Route component={ Default }></Route>
</Switch>

/* Navbar.js */
import { Link } from 'react-router-dom';
import logo from '../logo.svg';

<nav className="navbar navbar-expand-sm navbar-dark px-sm-5">
    {/* https://www.iconfinder.com/icons/1243689/call_phone_icon
    Creative Commons (Attribution 3.0 Unported);
    https://www.iconfinder.com/Makoto_msk  */}
    <Link to='/'>
        <img src={ logo } alt="store" className="navbar-brand"/>
    </Link>
    <ul className="navbar-nav align-items-center">
        <li className="nav-item ml-5">
            <Link to="/" className="nav-link">products</Link>
        </li>
    </ul>
    <Link to='/cart' className='ml-auto'>
        <button>
            <i className="fas fa-cart-plus"></i>
            my cart
        </button>
    </Link>
</nav>

/* install styled components */
/* npm install --save styled-components */
/* Navbar.js */
import styled from 'styled-components';

const ButtonContainer = styled.button`
    text-transform: capitalize;
    font-size: 1.4rem;
    background: transparent;
    border: 0.05rem solid var(--lightBlue);
    color: var(--lightBlue);
    border-radius: 0.5rem;
    padding: 0.2rem 0.5rem;
    cursor: pointer;
    margin: 0.2rem 0.5rem 0.2rem 0;
    transition: all 0.5s ease-in-out;
    &:hover{
        background: var(--lightBlue);
        color: var(--mainBlue);
    }
    &:focus {
        outline: none;
    }
`;

<ButtonContainer>

</ButtonContainer>

/* Button.js */
import styled from 'styled-components';

export const ButtonContainer = styled.button`
    text-transform: capitalize;
    font-size: 1.4rem;
    background: transparent;
    border: 0.05rem solid var(--lightBlue);
    color: var(--lightBlue);
    border-radius: 0.5rem;
    padding: 0.2rem 0.5rem;
    cursor: pointer;
    margin: 0.2rem 0.5rem 0.2rem 0;
    transition: all 0.5s ease-in-out;
    &:hover{
        background: var(--lightBlue);
        color: var(--mainBlue);
    }
    &:focus {
        outline: none;
    }
`;

/* Navbar.js */
import { ButtonContainer } from './Button';

const NavWrapper = styled.nav`
    background: var(--mainBlue);
    .nav-link {
        color: var(--mainWhite) !important;
        font-size: 1.3rem;
        text-transform: capitalize;
    }
`;

<NavWrapper>

</NavWrapper>

/* ProductList.js */
state = {
    products: []
}

<React.Fragment>
    <div className="py-5">
        <div className="container">
            <div className="row"></div>
        </div>
    </div>
{/* <Product></Product> */}
</React.Fragment>

/* Title.js */
import React from 'react'

export default function Title({ name, title }) {
    return (
        <div className="row">
            <div className="col-10 mx-auto my-2 text-center text-title">
                <h1 className="text-capitalize font-weight-bold">
                    { name } <strong className="text-blue">{ title }</strong>
                </h1>
            </div>
        </div>
    )
}

/* ProductList.js */
import Title from './Title';
<Title name="our" title="products" />

import { storeProducts } from '../data';
products: storeProducts

/* context API */
/* src/context.js */
/* rcc */
import React, { Component } from 'react';

const ProductContext = React.createContext();
// Provider
// Consumer

class ProductProvider extends Component {
    render() {
        return (
            <ProductContext.Provider value="hello from context">
                { this.props.children }
            </ProductContext.Provider>
        )
    }
}

const ProductConsumer = ProductContext.Consumer;

export { ProductProvider, ProductConsumer };

/* index.js */
import { ProductProvider } from './context';
<ProductProvider>
    <Router>
        <App />
    </Router>
</ProductProvider>,

/* use ProductConsumer */
/* ProductList.js */
import { ProductConsumer } from '../context';
import { storeProducts, detailProduct } from './data';

<ProductConsumer>
    { (value) => {
        return <h1>{ value }</h1>
    }}
</ProductConsumer>

/* context.js */
state = {
    products: storeProducts,
    detailProduct: detailProduct
}
handleDetail = () => {
    console.log('hello from detail');
}
addToCart = () => {
    console.log('hello from add to cart');
}

<ProductContext.Provider value={{
    // products: this.state.products
    // destructuring
    ...this.state,
    handleDetail: this.handleDetail,
    addToCart: this.addToCart
}}>
    { this.props.children }
</ProductContext.Provider>

/* ProductList.js */
{ (value) => {
    return value.products.map(product => {
        return <Product key={ product.id } product={ product }/>
    })
}}

// state = {
//     products: storeProducts
// };

/* Product.js */
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { ProductConsumer } from '../context';

const { id, title, img, price, inCart } = this.props.product;

<ProductWrapper className="col-9 mx-auto col-md-6 col-lg-3 my-3">
    <div className="card">
        <div className="img-container p-5" onClick={() => console.log('you clicked on the image container')}>
            <Link to="/details">
                <img src={ img } alt="product" className="card-img-top"/>
            </Link>
            <button className="cart-btn" disabled={ inCart ? true : false } onClick={ () => { console.log('added to the cart') }}>
                { inCart ? (<p className="text-capitalize mb-0" disabled>in cart</p>) : (<i className="fas fa-cart-plus" />)}
            </button>
        </div>
        {/* cart footer */}
        <div className="card-footer d-flex justify-content-between">
            <p className="align-self-center mb-0">
                { title }
            </p>
            <h5 className="text-blue font-italic mb-0">
                <span className="mr-1">$</span>
                { price }
            </h5>
        </div>
    </div>
</ProductWrapper>

/* styling of product wrapper */
const ProductWrapper = styled.div`
    .card {
        border-color: transparent;
        transition: all 1s linear;
    }
    .cart-footer {
        background: transparent;
        border-top: transparent;
        transition: all 1s linear;
    }
    &:hover {
        .card {
            border: 0.04rem solid rgba(0, 0, 0, 0.2);
            box-shadow: 2px 2px 5px 0px rgba(0, 0, 0, 0.2);
        }
        .cart-footer {
            background: rgba(247, 247, 247);
        }
    }
    .img-container {
        position: relative;
        overflow: hidden;
    }
    .card-img-top {
        transition: all 1s linear;
    }
    .img-container:hover .card-img-top {
        transform: scale(1.2);
    }
    .cart-btn {
        position: absolute;
        bottom: 0;
        right: 0;
        padding: 0.2rem 0.4rem;
        background: var(--lightBlue);
        border: none;
        color: var(--mainWhite);
        font-size: 1.4rem;
        border-radius: 0.5rem 0 0 0;
        transform: translate(100%, 100%);
        transition: all 1s linear;
    }
    .img-container:hover .cart-btn {
        transform: translate(0, 0);
    }
    .cart-btn:hover {
        color: var(--mainBlue);
        cursor: pointer;
    }
`;

/* prop types of data */
import PropTypes from 'prop-types';

Product.propTypes = {
    product: PropTypes.shape({
        id: PropTypes.number,
        img: PropTypes.string,
        title: PropTypes.string,
        price: PropTypes.number,
        inCart: PropTypes.bool
    }).isRequired
};

/* context.js */
/* copy values from data */
/* now we operate on copy of values NOT reference to values */
products: [],

setProducts = () => {
    let tempProducts = [];
    storeProducts.forEach(item => {
        // copy the values
        const singleItem = { ...item };
        tempProducts = [...tempProducts, singleItem];
    });
    this.setState(() => {
        return { products: tempProducts }
    });
};

componentDidMount() {
    this.setProducts();
}

/* Details.js */
import { ProductConsumer } from '../context';
import { Link } from 'react-router-dom';
import { ButtonContainer } from './Button';
<ProductConsumer>
    {(value) => {
        {/* console.log(value.detailProduct); */}
        {/* destructuring */}
        const { id, company, img, info, price, title, inCart } = value.detailProduct;
        return (
            <div className="container py-5">
                {/* title */}
                <div className="row">
                    <div className="col-10 mx-auto text-center text-slanted text-blue my-5">
                        <h1>{ title }</h1>
                    </div>
                </div>
                {/* end of title */}
                {/* product info */}
                <div className="row">
                    <div className="col-10 mx-auto col-md-6 my-3">
                        <img src={ img } alt="product" className="img-fluid"/>
                    </div>
                    {/* product text */}
                    <div className="col-10 mx-auto col-md-6 my-3 text-capitalize">
                        <h2>model : { title }</h2>
                        <h4 className="text-title text-uppercase text-muted mt-3 mb-2">
                            made by : <span className="text-uppercase">{ company }</span>
                        </h4>
                        <h4 className="text-blue">
                            <strong>
                                price : <span>$</span> { price }
                            </strong>
                        </h4>
                        <p className="text-capitalize font-weight-bold mt-3 mb-0">
                            some info about products:
                        </p>
                        <p className="text-muted lead">
                            { info }
                        </p>
                        {/* buttons container */}
                        <div>
                            <Link to='/'>
                                <ButtonContainer>
                                    back to products
                                </ButtonContainer>
                            </Link>
                            <ButtonContainer
                                cart
                                disabled={ inCart ? true : false }
                                onClick={() => {
                                    value.addToCart(id);
                                }}
                            >
                                { inCart ? 'inCart' : 'add to cart'}
                            </ButtonContainer>
                        </div>
                    </div>
                    {/* end of product text */}
                </div>
                {/* end of product info */}
            </div>
        );
    }}
</ProductConsumer>

/* context.js */
addToCart = (id) => {
    console.log(`hello from add to cart. id is ${ id }`);
};

/* Button.js */
border-color: ${ props => props.cart ? "var(--mainYellow)" : "var(--lightBlue)" };
color: ${ prop => prop.cart ? "var(--mainYellow)" : "var(--lightBlue)"};

background: ${ prop => prop.cart ? "var(--mainYellow)" : "var(--lightBlue)"};

/* context.js */
/* utility function */
getItem = (id) => {
    const product = this.state.products.find(item => item.id === id);
    return product;
};

/* use utility function get item */
handleDetail = (id) => {
    const product = this.getItem(id);
    this.setState(() => {
        return { detailProduct: product }
    });
}

/* Product.js */
<ProductConsumer>
    { (value) => (
        <div className="img-container p-5" onClick={() => {
            value.handleDetail(id)
        }}>
            <Link to="/details">
                <img src={ img } alt="product" className="card-img-top"/>
            </Link>
            <button className="cart-btn" disabled={ inCart ? true : false } onClick={ () => {
                value.addToCart(id);
                }}>
                { inCart ? (<p className="text-capitalize mb-0" disabled>{ " " }in cart</p>) : (<i className="fas fa-cart-plus" />)}
            </button>
        </div>
    )}
</ProductConsumer>

/* context.js */
cart: []

addToCart = (id) => {
    let tempProducts = [...this.state.products];
    const index = tempProducts.indexOf(this.getItem(id));
    const product = tempProducts[index];
    product.inCart = true;
    product.count = 1;
    const price = product.price;
    product.total = price;
    this.setState(() => {
        return {
            products: tempProducts,
            cart: [...this.state.cart, product]
        }
    }, () => {
        console.log(this.state);
    });
};

/* add modal */
/* context.js */
modalOpen: true,
modalProduct: detailProduct,

openModal = (id) => {
    const product = this.getItem(id);
    this.setState(() => {
        return {
            modalProduct: product,
            modalOpen: true,
        }
    })
};
closeModal = () => {
    this.setState(() => {
        return { modalOpen: false }
    })
};

openModal: this.openModal,
closeModal: this.closeModal,

/* Product.js */
value.openModal(id);

/* Details.js */
value.openModal(id);

/* create new component - modal */
/* Modal.js */
/* rcc */
import React, { Component } from 'react'

export default class Modal extends Component {
    render() {
        return (
            <div>
                <h3>hello from modal</h3>
            </div>
        )
    }
}

/* import modal to app */
/* App.js */
import Modal from './components/Modal';

<Modal></Modal>
/* remove logo import */
import logo from './logo.svg';

/* Modal.js */
import styled from 'styled-components';
import { ProductConsumer } from '../context';
import { ButtonContainer } from './Button';
import { Link } from 'react-router-dom';


<ProductConsumer>
    { (value) => {
        {/* destructuring */}
        const { modalOpen, closeModal } = value;
        const { img, title, price } = value.modalProduct;
        if(!modalOpen) { return null }
        else {
            return (
                <ModalContainer>
                    <div className="container">
                        <div className="row">
                            <div id="modal" className="col-8 mx-auto col-md-6 col-lg-4 text-center text-capitalize p-5">
                                <h5>item added to the cart</h5>
                                <img src={ img } className="img-fluid" alt="product" />
                                <h5>{ title }</h5>
                                <h5 className="text-muted">price : ${ price }</h5>
                                <Link to="/">
                                    <ButtonContainer onClick={ () => closeModal() }>
                                        store
                                    </ButtonContainer>
                                </Link>
                                <Link to="/cart">
                                    <ButtonContainer cart onClick={ () => closeModal() }>
                                        go to cart
                                    </ButtonContainer>
                                </Link>
                            </div>
                        </div>
                    </div>
                </ModalContainer>
            );
        }
    }}
</ProductConsumer>

const ModalContainer = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(0, 0, 0, 0.3);
    display: flex;
    align-items: center;
    justify-content: center;
    #modal {
        background: var(--mainWhite);
    }
`;

/* context.js */
modalOpen: false

/* cart page */
/* context.js */
cartSubTotal: 0,
cartTax: 0,
cartTotal: 0,

incrementation = (id) => {
    console.log('this is increment method');
};
decrement = (id) => {
    console.log('this is decrement method');
};
removeItem = (id) => {
    console.log('item removed');
};
clearCart = () => {
    console.log('cart was cleared');
};

increment: this.increment,
decrement: this.decrement,
removeItem: this.removeItem,
clearCart: this.clearCart,

/* App.js */
import Cart from './components/Cart';

/* ./components/Cart */
/* Cart.js */
/* rcc */
import React, { Component } from 'react'

export default class Cart extends Component {
    render() {
        return (
            <div>
                <h3>hello from cart component</h3>
            </div>
        )
    }
}

/* ./components/Cart */
/* package.json */
{
    "main": "Cart.js"
}

/* Cart.js */
import React, { Component } from 'react';
import Title from '../Title';
import CartColumns from './CartColumns';

export default class Cart extends Component {
    render() {
        return (
            <section>
                <Title name="your" title="cart" />
                <CartColumns />
            </section>
        )
    }
}

/* create new component */
/* Cart/CartColumns.js */
/* rfc */
import React from 'react';

export default function CartColumns() {
    return (
        <div className="container-fluid text-center d-none d-lg-block">
            <div className="row">
                <div className="col-10 mx-auto col-lg-2">
                    <p className="text-uppercase">
                        products
                    </p>
                </div>
                <div className="col-10 mx-auto col-lg-2">
                    <p className="text-uppercase">
                        name of product
                    </p>
                </div>
                <div className="col-10 mx-auto col-lg-2">
                    <p className="text-uppercase">
                        price
                    </p>
                </div>
                <div className="col-10 mx-auto col-lg-2">
                    <p className="text-uppercase">
                        quatity
                    </p>
                </div>
                <div className="col-10 mx-auto col-lg-2">
                    <p className="text-uppercase">
                        remove
                    </p>
                </div>
                <div className="col-10 mx-auto col-lg-2">
                    <p className="text-uppercase">
                        total
                    </p>
                </div>
            </div>
        </div>
    )
}

/* create new component */
/* Cart/EmptyCart.js */
/* rfc */
import React from 'react'

export default function EmptyCart() {
    return (
        <div className="container mt-5">
            <div className="row">
                <div className="col-10 mx-auto text-center text-title">
                    <h1>your cart is currently empty</h1>
                </div>
            </div>
        </div>
    )
}

/* Cart.js */
import EmptyCart from './EmptyCart';
import { ProductConsumer } from '../../context';

<section>
<ProductConsumer>
    { value => {
        const { cart } = value;
        if(cart.length > 0) {
            return (
                <React.Fragment>
                    <Title name="your" title="cart" />
                    <CartColumns />
                </React.Fragment>
            );
        }
        else {
            return <EmptyCart />
        }
    }}
</ProductConsumer>
</section>

/* create new component cart list */
/* Cart/CartList.js */
/* rfc */
import React from 'react';
import CartItem from './CartItem';

export default function CartList() {
    return (
        <div>
            <h3>hello from cart list</h3>
            <CartItem></CartItem>
        </div>
    )
}

/* create new component  */
/* Cart/CartItem.js */
/* rfc */
import React from 'react'

export default function CartList() {
    return (
        <div>
            <h3>hello from cart list</h3>
        </div>
    )
}

/* Cart */
import CartList from './CartList';

<CartList value={ value } />

/* CartList.js */
{ value }

// const { value } = props;
const { cart } = value;
console.log(value, cart);

{ cart.map(item => {
    return <CartItem key={ item.id } item={ item } value={ value } />
}) }

/* CartItem.js */
{ item, value }

const { id, title, img, price, total, count } = item;
const { increment, decrement, removeItem } = value;

<div className="row my-2 text-capitalize text-center">
    <div className="col-10 mx-auto col-lg-2">
        <img src={ img } style={{ width: '5rem', height: '5rem'}} className="img-fluid" alt="" />
    </div>
    <div className="col-10 mx-auto col-lg-2">
        <span className="d-lg-none">product : </span>{ title }
    </div>
    <div className="col-10 mx-auto col-lg-2">
        <span className="d-lg-none">price : </span>{ price }
    </div>
    <div className="col-10 mx-auto col-lg-2 my-2 my-lg-0">
        <div className="d-flex justify-content-center">
            <div>
                <span className="btn btn-black mx-1" onClick={ () => decrement(id) }>-</span>
                <span className="btn btn-black mx-1">{ count }</span>
                <span className="btn btn-black mx-1" onClick={ () => increment(id) }>+</span>
            </div>
        </div>
    </div>
    {/*  */}
    <div className="col-10 mx-auto col-lg-2">
        <div className="cart-icon">
            <i className="fas fa-trash" onClick={ () => removeItem(id) }></i>
        </div>
    </div>
    <div className="col-10 mx-auto col-lg-2">
        <strong>item total : $</strong>{ total }
    </div>
</div>

/* Cart.js */
import CartTotals from './CartTotals';

<CartTotals value={ value } />

/* create new component cart totals */
/* Cart/CartTotals.js */
/* rfc */
import { Link } from 'react-router-dom';

const { cartSubTotal, cartTax, cartTotal, clearCart } = value;

<React.Fragment>
    <div className="contaier">
        <div className="row">
            <div className="col-10 mt-2 ml-sm-5 ml-md-auto col-sm-8 text-capitalize text-right">
                <Link to="/">
                    <button className="btn btn-outline-danger text-uppercase mb-3 px-5" type="button" onClick={ () => clearCart() }>
                        clear cart
                    </button>
                </Link>
                <h5>
                    <span className="text-title">
                        subtotal :
                    </span>
                    <strong>$ { cartSubTotal }</strong>
                </h5>
                <h5>
                    <span className="text-title">
                        tax :
                    </span>
                    <strong>$ { cartTax }</strong>
                </h5>
                <h5>
                    <span className="text-title">
                        total :
                    </span>
                    <strong>$ { cartTotal }</strong>
                </h5>
            </div>
        </div>
    </div>
</React.Fragment>

/* context.js */
addTotals = () => {
    let subTotal = 0;
    this.state.cart.map(item => (subTotal += item.total));
    const tempTax = subTotal * 0.1;
    const tax = parseFloat(tempTax.toFixed(2));
    const total = subTotal + tax;
    this.setState(() => {
        return {
            cartSubTotal: subTotal,
            cartTax: tax,
            cartTotal: total,
        }
    });
};

this.addTotals();

// console.log('cart was cleared');
this.setState(() => {
    return {
        cart: [],
    }
}, () => {
    this.setProducts();
    this.addTotals();
});

// console.log('item removed');
let tempProducts = [...this.state.products];
let tempCart = [...this.state.cart];

tempCart = tempCart.filter(item => item.id !== id);

const index = tempProducts.indexOf(this.getItem(id));
let removeProduct = tempProducts[index];
removeProduct.inCart = false;
removeProduct.count = 0;
removeProduct.total = 0;

this.setState(() => {
    return {
        cart: [...tempCart],
        products: [...tempProducts],
    }
}, () => {
    this.addTotals();
});

/* increment functionality */
// console.log('this is increment method');
let tempCart = [...this.state.cart];
const selectedProduct = tempCart.find(item => item.id === id);
const index = tempCart.indexOf(selectedProduct);
const product = tempCart[index];

product.count = product.count + 1;
product.total = product.count * product.price;

this.setState(() => { return { cart: [...tempCart] }}, () => { this.addTotals() });

/* decrement functionality */
// console.log('this is decrement method');
let tempCart = [...this.state.cart];
const selectedProduct = tempCart.find(item => item.id === id);
const index = tempCart.indexOf(selectedProduct);
const product = tempCart[index];

product.count = product.count - 1;
if(product.count === 0) {
    this.removeItem(id);
}
else {
    product.total = product.count * product.price;
    this.setState(() => { return { cart: [...tempCart] }}, () => { this.addTotals() });
}

/* Default.js */
// console.log(this.props);
return (
    <div className="container">
        <div className="row">
            <div className="col-10 mx-auto text-center text-title text-uppercase pt-5">
                <h1 className="display-3">404</h1>
                <h1>error</h1>
                <h2>page not found</h2>
                <h3>the requested URL <span className="text-danger">
                    { this.props.location.pathname }
                </span> was not found</h3>
            </div>
        </div>
    </div>
)