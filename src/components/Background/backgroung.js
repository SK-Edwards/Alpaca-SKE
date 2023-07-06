import styles from "./background.css"

const Background = ({img}) => {
    return(
        <img className={styles.background} src={img} alt="background" />
    )
}

export default Background;