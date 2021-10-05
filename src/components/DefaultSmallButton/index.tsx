import './styles.css';

type Props = {
  className?: string;
  onClick: Function;
  children?: string;
};
export const DefaultSmallButton = (props: Props) => {
  return (
    <div className={props.className}>
      <div className="defaultSmallButton" >
        <button className="defaultSmallButton" onClick={() => { props.onClick(); }}>{props.children}</button>
      </div>
    </div>

  );
};