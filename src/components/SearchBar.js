import React from 'react';

class SearchBar extends React.Component {
    state = {term : ""};

    searchTextChange = event => {
        this.setState({ term: event.target.value });
    };

    onSearchSubmit = event => {
        event.preventDefault();

        this.props.onSearchSubmit(this.state.term);
    };

    render() {
        return (
            <div className="search-bar ui segment">
                <form onSubmit={this.onSearchSubmit} className="ui form">
                    <div className="field">
                        <label>Video Search</label>
                        <input type="text" value={this.state.term} 
                            onChange={this.searchTextChange} />
                    </div>
                </form>
            </div>
        );
    }
}

export default SearchBar;