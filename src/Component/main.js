import React, { Component } from 'react'
import Axios from 'axios';

class Main extends Component {
    constructor() {
        super();
        this.state = {name:['sibbu']}
    }

   
    componentDidMount() {
        Axios.get('http://13.233.85.99:5000/read').then(res => {
            this.setState({name: res.data.name});           
        });
    }

    render() {
        let { name } = this.state;
        let namelist = name.map(res => <p key={res}>{res}</p>)
        return (
            <>
            <h1>list of name</h1>
            {namelist}
            </>
        )
    }
}

export default Main