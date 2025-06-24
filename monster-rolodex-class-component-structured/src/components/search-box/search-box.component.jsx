import { Component } from "react";

import "./search-box.styles.css";

class SearchBox extends Component {
    render () {
        const {classname, placeholder, searchHandler} = this.props;
        return (<div>
            <input className={classname} type='search' placeholder={placeholder} onChange={searchHandler}/>
        </div>
        );
        
    }
}

export default SearchBox;
