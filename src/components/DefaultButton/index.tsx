import './styles.css';

type Props = {
  className?: string;
  onClick: Function;
  children?: string;
};
export const DefaultButton = (props: Props) => {
  return (
    <div className={props.className}>
      <div className="defaultButton" >
        <button className="defaultButton" onClick={() => { props.onClick(); }}>{props.children}</button>
      </div>
    </div>

  );
};