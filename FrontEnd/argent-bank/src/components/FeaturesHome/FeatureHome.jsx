import styles from "./featuresHome.module.scss";

function FeatureHome({ 
    featureImage, 
    featureAlt, 
    title, 
    text
}) {
    return (
        <div className={styles.featureContainer}>
            <img 
                className={styles.image}
                src={featureImage}
                alt={featureAlt}
            />
            <h3 className={styles.title}>
                {title}
            </h3>
            <p className={styles.text}>
                {text}
            </p>
        </div>
    )
}

export default FeatureHome