import styled from './textarea.module.css'
function Textarea(props){
    return(
        <div className={styled.textarea}>
            <label>{props.label}</label>
            <textarea onChange={props.handelChange}></textarea>
        </div>
    )
}
export default Textarea;