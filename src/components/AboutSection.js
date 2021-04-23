import home1 from '../img/home1.png';
// Styles
// import styled from 'styled-components';
import {StyledAbout, StyledDescription, StyledImage, StyledHide} from "../styles";

const AboutSection = () => {
    return (
        <StyledAbout>
            <StyledDescription>
                <div className="title">
                    <StyledHide>
                        <h2>We work to make</h2>
                    </StyledHide>
                    <StyledHide>
                        <h2>your <span>dreams</span> come</h2>
                    </StyledHide>
                    <StyledHide>
                        <h2>true</h2>
                    </StyledHide>
                </div>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Minima praesentium modi nulla error? Adipisci odio iure qui inventore hic vitae eveniet a ut repellendus aperiam, autem incidunt, non quaerat quasi!</p>
                <button>Contact Us</button>
            </StyledDescription>
            <StyledImage>
                <img src={home1} alt="guy with camera"/>
            </StyledImage>
        </StyledAbout>
    )
};

export default AboutSection;