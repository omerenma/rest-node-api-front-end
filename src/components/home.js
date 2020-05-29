import React, { Component } from 'react'

export default class Home extends Component {
    constructor(props){
        super(props);
    }
    render() {
        
        return (
            <div>
                <h1 style={{textTransform:'capitalize'}}>{this.props.color}Welcome to our react app</h1>
            </div>
        )
    }
}
