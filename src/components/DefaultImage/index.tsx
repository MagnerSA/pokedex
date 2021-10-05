import './styles.css';

type Props = {
  className?: string;
  src?: string;
};
export const DefaultImage = (props: Props) => {
  return (
    <div className={props.className}>
      <img className="defaultImage" alt="" src={props.src} />
    </div>
  );
};