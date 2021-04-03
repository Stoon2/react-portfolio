import home1 from '../img/home1.png';
// Styles
import styled from 'styled-components';

const AboutSection = () => {
    return (
        <StyledAbout>
            <SyledDescription>
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
            </SyledDescription>
            <StyledImage>
                <img src={home1} alt="guy with camera"/>
            </StyledImage>
        </StyledAbout>
    )
};

// Styled Component
const StyledAbout = styled.div`
    min-height: 90vh;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 5rem 10rem;
    color: white;
`;

const SyledDescription = styled.div`
    flex: 1;
    padding-right: 5rem;
    h2 {
        font-weight: lighter;
    }
`;

const StyledImage = styled.div`
    flex: 1;
    overflow: hidden;
    img {
        width: 100%;
        height: 80vh;
        object-fit: cover;
    }
`;

const StyledHide = styled.div`
    overflow: hidden;
`;

export default AboutSection;