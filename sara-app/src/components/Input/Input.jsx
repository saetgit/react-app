import styled from './input.module.css'
function Input(props){
    return(
        <div className={styled.inputPage}>
            <label>{props.label}</label>
            <input name={props.name} onChange={props.handelChange} type={props.type}/>
        </div>
    )
}
export default Input;