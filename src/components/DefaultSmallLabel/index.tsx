import { CSSProperties } from 'react';
import './styles.css';

type Props = {
  className?: string;
  children?: any;
  style?: CSSProperties;
};

export const DefaultSmallLabel = (props: Props) => {
  return (
    <div className={props.className}>
      <div className="defaultSmallLabel" style={props.style} >{props.children}</div>
    </div>
  );
};