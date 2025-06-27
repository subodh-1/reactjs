import Card from '../card/card.component';
import './card-list.styles.css';


const CardList = ({filteredMonsters}) => {

    return (
        <div className="card-list">
        {
          filteredMonsters.map((monster) => {
            return <Card monster={monster}/>
          })
        }
      </div>
    );

}

export default CardList;