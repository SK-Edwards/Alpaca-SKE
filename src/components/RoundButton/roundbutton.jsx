
import styles from "./roundbutton.module.css";

const RoundButton = ({name, active, onClick}) => {
    return(
        <button className={`${styles.btn} ${active === name ? styles.active : null}`} type="button" onClick={onClick}>{name}</button>
    ) 
}

export default RoundButton; 