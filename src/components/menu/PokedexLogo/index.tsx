
import './styles.css';

type Props = {
  className: string
};
export const PokedexLogo = (props: Props) => {
  return (
    <div className="logo">
      <img className="image" alt="" src="https://cdn2.bulbagarden.net/upload/4/4b/Pok%C3%A9dex_logo.png" />
    </div>
  );
};