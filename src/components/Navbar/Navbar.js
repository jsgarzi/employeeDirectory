import React from 'react'

function Navbar() {
    return (
        <div>
            <nav className="navbar navbar-dark bg-dark">
                <div className="container-fluid">
                    <a className="navbar-brand" href="#">Employee Directory</a>
                        <div className="navbar-nav ml-5 mr-auto mb-2 mb-lg-0">
                                <a className="nav-link active" aria-current="page" href="#">Sort</a>
                        </div>
                        <form className="d-flex">
                            <input className="form-control me-2 mr-2" type="search" placeholder="Search" aria-label="Search" />
                            <button className="btn btn-outline-success" type="submit">Search</button>
                        </form>
                    
                </div>
            </nav>
        </div>
    )
}

export default Navbar
