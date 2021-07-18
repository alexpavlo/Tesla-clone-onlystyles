import React from 'react';
import styled from 'styled-components'
import Section from './section'

const Home = () => {
    return (
        <Container>
            <Section
                title="Model S"
                desctiption="Order Online for Touchless Delivery"
                backgroundImg="model-s.jpg"
                leftBtnText="Custom order"
                rightBtnText="Existing inventory"
            />
            <Section
                title="Model Y"
                desctiption="Order Online for Touchless Delivery"
                backgroundImg="model-y.jpg"
                leftBtnText="Custom order"
                rightBtnText="Existing inventory"
            />
            <Section
                title="Model 3"
                desctiption="Order Online for Touchless Delivery"
                backgroundImg="model-3.jpg"
                leftBtnText="Custom order"
                rightBtnText="Existing inventory"
            />
            <Section
                title="Model X"
                desctiption="Order Online for Touchless Delivery"
                backgroundImg="model-x.jpg"
                leftBtnText="Custom order"
                rightBtnText="Existing inventory"
            />
            <Section
            title="Lowest Cost Solar Panels in America"
            desctiption="Money-back guarantee"
            backgroundImg="solar-panel.jpg"
            leftBtnText="Order now"
            rightBtnText="Learn more"
            />
            <Section
            title="Solar for New Roofs"
            desctiption="Solar Roof Costs Less Than a New Roof Plus Solar Panels"
            backgroundImg="solar-roof.jpg"
            leftBtnText="Order now"
            rightBtnText="Learn more"
            />
            <Section
            title="Accessories"
            desctiption=""
            backgroundImg="accessories.jpg"
            leftBtnText="Show now"
            />
        </Container>
    );
};

export default Home;

const Container = styled.div`
        height:100vh;
`