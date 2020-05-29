import React, { Component } from 'react' 
import * as styles from '../styles'
class Nav extends Component {
    constructor(props){
        super(props)
        this.state = {

        }
    }
    register = (e) => {
        e.preventDefault();
        console.log("Register clicked")
    }

    login = (e) => {
        e.preventDefault();
        console.log("Login clicked")

    }
    render() {
        return (
            <div>
            <div>
                <ul style={styles.ul}>
                    <l1 ><a href="" onClick={this.register} style={styles.a}> Register</a></l1>
                    <l1><a href="" onClick={this.login} style={styles.a}>Login</a></l1>
                </ul>
            </div>
            </div>
        )
    }
}
export default Nav;