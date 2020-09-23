import React, { Component } from 'react'
import axios from 'axios'
import { Consumer } from '../../context'

class Search extends Component {

    state = {
        trackTitle : ''
    }

    render() {
        return (
            <Consumer>
                {value => {
                    return (
                        <div className="card card-body mb-4 p-4">
                            <h1 className="display-4 text-center">
                                <i className="fas fa-music"></i>Search for song
                            </h1>
                            <p className="lead text-center">Get info for song</p>
                            <form>
                                <div className="form=group">
                                    <input 
                                    type="text" 
                                    className="form-control form-control-lg" 
                                    placeholder="Search..."
                                    name="trackTitle"
                                    value={this.state.trackTitle}
                                    onChange={(e) => this.setState({trackTitle: e.target.value})}
                                    />
                                </div>
                            </form>
                        </div>
                    )
                }}
            </Consumer>
        )
    }
}

export default Search;