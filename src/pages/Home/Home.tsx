import './Home.scss';
import { Banniere } from '../../components/Banniere/Banniere';
import { Categorie } from '../../components/Categorie/Categorie';
import { Selection } from '../../components/Selection/Selection';

export const Home = () => {
  return (
    <div className="Home">
      <Banniere />
      <Categorie />
      <Selection />
    </div>
  );
};
