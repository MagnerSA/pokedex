import { CSSProperties } from 'react';
import './styles.css';

type Props = {
  className?: string;
  children?: any;
  style?: CSSProperties;
};

export const DefaultLabel = (props: Props) => {
  return (
    <div className={props.className}>
      <div className="defaultLabel" style={props.style} >{props.children}</div>
    </div>
  );
};