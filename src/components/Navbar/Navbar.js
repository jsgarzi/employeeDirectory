import React from 'react'

function Navbar(props) {
    return (
        <div>
            <nav className="navbar navbar-dark bg-dark">
                <div className="container-fluid">
                    <a className="navbar-brand" href="#">Employee Directory</a>
                        <div className="navbar-nav ml-5 mr-auto mb-2 mb-lg-0">
                                <a className="nav-link active" aria-current="page" onClick={props.sort}>Sort</a>
                        </div>
                        <form className="d-flex">
                            <input onChange={props.search} className="form-control me-2 mr-2" type="search" placeholder="Search" aria-label="Search" />
                        </form>
                    
                </div>
            </nav>
        </div>
    )
}

export default Navbar
