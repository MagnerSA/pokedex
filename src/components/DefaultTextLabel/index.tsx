import { CSSProperties } from 'react';
import './styles.css';

type Props = {
  className?: string;
  children?: string;
  style?: CSSProperties;
};

export const DefaultTextLabel = (props: Props) => {
  return (
    <div className={props.className}>
      <div className="defaultTextLabel" style={props.style} >{props.children}</div>
    </div>
  );
};