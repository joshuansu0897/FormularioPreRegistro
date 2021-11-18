import React from "react";
import {Route, RouteProps} from "react-router-dom";
import {Header} from "src/theme/components/Header/Header";
import styled from "styled-components";

interface PageLayoutProps extends RouteProps {
    component: any
}

const PageLayout = ({ component: Component,  ...rest }: PageLayoutProps) => (
    <>
        <Header expanded={true}/>
        <Container>
            <Box>
                <Route
                    {...rest}
                    render={(props) => (
                        <Component {...props} />
                    )}
                />
            </Box>
        </Container>
    </>
);

const px2vw = (size: number, width: number = 1440) => `${(size / width) * 100}vw`;

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  max-width: 100%;

  @media (min-width: 1024px) {
    flex-wrap: nowrap;
  }
`;

const Box = styled.div`
  display: flex;
  width: ${px2vw(320, 320)};
  min-height: ${px2vw(200, 320)};
  flex-direction: column;
  padding: ${px2vw(20)};
  padding-top: 0;
  margin: ${px2vw(20)};
  height: 100%;

  @media (min-width: 768px) {
    width: ${px2vw(500, 768)};
    min-height: ${px2vw(200, 768)};
    height: 100%;
  }

  @media (min-width: 1024px) {
    width: ${px2vw(800)};
    min-height: ${px2vw(300)};
    height: 100%;
  }
`;


export default PageLayout;