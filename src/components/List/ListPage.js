import React, { Component } from 'react'
import API from "../../utils/API";

class ListPage extends Component {

    state = {
        incomingData: [],
        exportingData: []
    }

    componentDidMount() {
        API.getUsers()
            .then(res => this.setState({
                incomingData: res.data.results,
                exportingData: res.data.results
            }))
    }

    render() {
        return (
            <div>

            </div>
        )
    }
}
