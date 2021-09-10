import home1 from '../img/home1.png';
// Styles
import {StyledAbout, StyledDescription, StyledImage, StyledHide} from "../styles";

// Motion
import { motion } from 'framer-motion';
import { titleAnim, fade, photoAnim } from '../animation';
import Wave from './Wave';

const AboutSection = () => {
    return (
        <StyledAbout>
            <StyledDescription>
                <motion.div>
                    <StyledHide>
                        <motion.h2 variants={titleAnim}>
                            We work to make
                        </motion.h2>
                    </StyledHide>
                    <StyledHide>
                        <motion.h2 variants={titleAnim}>
                            your <span>dreams</span> come
                        </motion.h2>
                    </StyledHide>
                    <StyledHide>
                        <motion.h2 variants={titleAnim}>
                            true
                        </motion.h2>
                    </StyledHide>
                </motion.div>
                <motion.p
                    variants={fade}
                >
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Minima praesentium modi nulla error? Adipisci odio iure qui inventore hic vitae eveniet a ut repellendus aperiam, autem incidunt, non quaerat quasi!</motion.p>
                <motion.button
                    variants={fade}
                >
                    Contact Us</motion.button>
            </StyledDescription>
            <StyledImage>
                {/* Removed staggering of photoAnim by adding "initial" and "hidden" props on img.div below */}
                <motion.img variants={photoAnim} initial='hidden' animate='show' src={home1} alt="guy with camera"/>
            </StyledImage>
            <Wave/>
        </StyledAbout>
    )
};

export default AboutSection;