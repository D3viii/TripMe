import React, { Component } from "react";
import "./Home.css";

class Home extends Component {
    state = {
        email: "",
        password: "",
        error: "",

    };

    handleInputChange = (event) => {
        const { name, value } = event.target;
        this.setState({
            [name]: value,
            error: "",
        });
    };

    
}