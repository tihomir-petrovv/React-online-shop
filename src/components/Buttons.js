function Buttons({onClickHandler, value , title}) {
  return <button onClick={onClickHandler} value = {value} className="buttons">{title}</button>
}

export default Buttons;
