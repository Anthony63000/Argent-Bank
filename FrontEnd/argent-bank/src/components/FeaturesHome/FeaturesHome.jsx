import styles from "./featuresHome.module.scss";

import FeatureHome from "./FeatureHome";

import chatImage from "../../assets/images/icon-chat.webp"
import moneyImage from "../../assets/images/icon-money.webp"
import securityImage from "../../assets/images/icon-security.webp"

function FeaturesHome() {
    return (
        <div className={styles.container}>
            <FeatureHome 
                featureImage={chatImage}
                featureAlt="Chat Icon"
                title="You are our #1 priority"
                text="Need to talk to a representative? You can get in touch through our 24/7 chat or through a phone call in less than 5 minutes."
            />
            <FeatureHome 
                featureImage={moneyImage}
                featureAlt="Monney Icon"
                title="More savings means higher rates"
                text="The more you save with us, the higher your interest rate will be!"
            />
            <FeatureHome 
                featureImage={securityImage}
                featureAlt="Security Icon"
                title="Security you can trust"
                text="We use top of the line encryption to make sure your data and money is always safe."
            />
        </div>
    )
}

export default FeaturesHome;