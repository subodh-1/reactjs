import './search-box.styles.css';

const SearchBox = ({onSearchChangeHandler}) => {
    return (
        <div >
        <input type="search" className="search-box" placeholder="Search monster" onChange={onSearchChangeHandler}/>
      </div>
    );
}

export default SearchBox;