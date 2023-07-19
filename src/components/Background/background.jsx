import styles from "./background.module.css"

const Background = ({img}) => {
    return(
        <img className={styles.background} src={img} alt="background" />
    )
}

export default Background;