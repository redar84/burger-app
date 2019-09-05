import React, { Component } from 'react';
import Button from '../../../components/UI/Button/Button'
import Classes from './ContactData.module.css'
import axios from "../../../axios-orders";
import Spinner from '../../../components/UI/Spinner/Spinner'
class ContactData extends Component {
    state={
        name: '',
        email:'',
        address:{
            street:'',
            postalCode:''
        },
        loading: false
    }
    orderHandler=(event)=>{
         event.preventDefault();
         console.log("I am hit by you")
          this.setState({ loading: true });

    const order = {
      ingredients: this.props.ingredients,
      price: this.props.price,
      customer: {
        name: "Redar Ismail",
        address: {
          street: "Test Street 1",
          zipCode: "21233",
          country: "US"
        },
        email: "test@hotmail.com"
      },
      deliveryMethod: "fastest"
    };
    console.log(order);
    axios
      .post("/orders.json", order)
      .then(response => {
        this.setState({ loading: false});
        this.props.history.push('/');
        console.log(response);
      })
      .catch(error => {
        this.setState({ loading: false });
        console.log(error);
      });
    }
    render() {
        let form = (<form >
            <input className={Classes.Input} type="text" name="name" placeholder="Your Name"/>
            <input className={Classes.Input} type="text" name="email" placeholder="email"/>
            <input className={Classes.Input} type="text" name="street" placeholder="street"/>
            <input className={Classes.Input} type="text" name="postal" placeholder="Postal Code"/><br></br>
            <Button btnType="Success" clicked={this.orderHandler}>Order</Button>
        </form>);
        if(this.state.loading){
            form =<Spinner/>;
        }
        return (
            <div className={Classes.ContactData}>
                <h4>Enter Your Contact Data</h4>
                {form}
            </div>
        );
    }
}

export default ContactData;