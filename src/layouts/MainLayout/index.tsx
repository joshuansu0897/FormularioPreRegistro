import React from "react";
import {Route, RouteProps} from "react-router-dom";
import {Header} from "src/theme/components/Header/Header";
import styled from "styled-components";

interface MainLayoutProps extends RouteProps {
    component: any,
    showPages: boolean,
    showContent?: () => void
}

const MainLayout = ({ component: Component, showPages, showContent,  ...rest }: MainLayoutProps) => (
    <>
        <Header expanded={false} showContent={showContent}/>
        {showPages &&
        <PagesContainer>
            <Route
                {...rest}
                render={(props) => (
                    <Component {...props} />
                )}
            />
        </PagesContainer>
        }
    </>
);

const PagesContainer = styled.div`
  width: 100%;
  height: 700px;

  transition: all 1s;
`

export default MainLayout;