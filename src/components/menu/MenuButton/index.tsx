import './styles.css';

type Props = {
  className?: string;
  children: string;
  onClick: Function;
  isActive: boolean;
};
export const MenuButton = (props: Props) => {
  return (
    <div className={props.className}>
      <button className={props.isActive ? "buttonActive" : "button"} onClick={() => { props.onClick(); }}>{props.children}</button>
    </div>
  );
};