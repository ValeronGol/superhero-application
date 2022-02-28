import { Link } from 'react-router-dom';
import Btn from 'components/Btn/Btn';
import { List, Img } from './HerotList.styled';

const HeroList = ({ heros, onDelete }) => (
  <List>
    {heros.map(({ _id, nickname, images }) => {
      return (
        <li key={_id}>
          <Link to={`/superhero-application/heros/${_id}`}>
            {`${nickname}`}
          </Link>
          <Img src={images} alt={nickname} />
          <Btn text="Delete" onClick={() => onDelete(_id)} />
        </li>
      );
    })}
  </List>
);

export default HeroList;
