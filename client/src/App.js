import React, { Component } from 'react';
//import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { Form } from 'react-final-form';
import AppNavbar from '../src/components/AppNavbar'

class App extends Component {
  render () {
    return (
      <Form
            onSubmit={() => {
                alert("submitting!");
            }}
        >
            {({handleSubmit}) => (
                <form className="frm" onSubmit={handleSubmit}>
                  <AppNavbar/>
                  <div>
                    <label>First Name</label>
                    <input placeholder="Name" type="text" />
                  </div>
                  <div>
                      <label>Phone</label>
                    <input placeholder="Phone" type="text" />
                    </div>
                    <button className='submit' type="submit">Submit</button>
                </form>
            )}
        </Form>
    );
  }
}

export default App;
/*
<Form
            onSubmit={() => {
                alert("submitting!");
            }}
        >
            {({handleSubmit}) => (
                <form onSubmit={handleSubmit}>
                    <input placeholder="Name" type="text" />
                    <input placeholder="Email" type="email" />
                    <button type="submit">Submit</button>
                </form>
            )}
        </Form>*/