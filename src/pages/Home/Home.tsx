import './Home.scss';
import { Banniere } from '../../components/Banniere/Banniere';
import { Categorie } from '../../components/Categorie/Categorie';

export const Home = () => {
  return (
    <div className="Home">
      <Banniere />
      <Categorie />
    </div>
  );
};
