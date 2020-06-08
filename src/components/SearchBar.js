import React from 'react';

class SearchBar extends React.Component {
    onInputChange(event) {
        console.log(event.target.value);
    }

    render() {
        return (
            <div className="ui segment">
                <form className="ui form">
                    <div className="ui field">
                        <label>Image search</label>
                        <input 
                        type="text"
                        onChange={this.onInputChange}
                        /> // this.onInputChange leaves out trailing () so that the function doesn't get called ever ytime we render, don't add () on callback functions!
                    </div>
                </form>
            </div>
        );
    }
}

export default SearchBar;