import React, { Component } from 'react'
import API from "../../utils/API";
import Navbar from "../Navbar/Navbar";

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

    sort = () => {

    }
    
    search = (event) => {
        event.preventDefault();
        let searchInput = event.target.value;
        let updatedList = this.state.incomingData.filter(e => {
            if (e.name.first.toLowerCase().includes(searchInput.toLowerCase()) 
            || e.name.last.toLowerCase().includes(searchInput.toLowerCase()) ){
                return e
            }
        })
        this.setState({exportingData : updatedList}) 
    }

    render() {
        return (
            <div>
                <Navbar 
                    sort = {this.sort}
                    search = {this.search}
                />
                <table className="table">
                    <thead>
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">First Name</th>
                            <th scope="col">Last Name</th>
                            <th scope="col">Email</th>
                            <th scope="col">Location</th>
                            <th scope="col">Age</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.state.exportingData.map((e,i) => {
                            return (
                                <tr>
                                    <th scope="row">{i + 1}</th>
                                    <td>{e.name.first}</td>
                                    <td>{e.name.last}</td>
                                    <td>{e.email}</td>
                                    <td>{e.location.state}</td>
                                    <td>{e.dob.age}</td>
                                </tr>
                            )
                            })
                        }
                    </tbody>
                </table>
            </div>
        )
    }
}

export default ListPage
