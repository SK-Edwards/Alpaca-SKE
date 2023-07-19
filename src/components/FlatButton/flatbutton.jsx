import styles from "./flatbutton.module.css";

const FlatButton = ({icon, text, onClick}) => {
    return(
        <button className={styles.btn} type="button" onClick={onClick}>
            {icon} {text}
        </button>
    ) 
}

export default FlatButton; 