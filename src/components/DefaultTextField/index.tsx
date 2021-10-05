import './styles.css';

type Props = {
  className?: string;
  type?: string;
  id?: string;
  autoComplete?: string;
  placeholder?: string;
  onChange?: Function ;
};
export const DefaultTextField = (props: Props) => {
  return (
    <div className={props.className}>
      <input className='defaultTextField' type={props.type} id={props.id} autoComplete={props.autoComplete} placeholder={props.placeholder} onChange={() => { (props.onChange as Function)() }}></input>
    </div>
  );
};