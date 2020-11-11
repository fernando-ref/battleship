import './Cell.css';

function Cell(props) {

  let style = 'cell';

  if(props.data.status === true){
    style += ' hit';
  }
  if(props.data.status === false){
    style += ' miss';
  }


  return (

    <div className={style} onClick={(e)=>props.fire(props.data)}>
    </div>
  );
}

export default Cell;