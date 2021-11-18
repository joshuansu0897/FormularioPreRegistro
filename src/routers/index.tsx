import React, {useEffect, useRef, useState} from "react";
import {Router, Switch} from "react-router-dom";
import {createBrowserHistory} from "history";
import {HomePage} from "src/pages/Home/HomePage";
import {PrivacyPolicy} from "src/pages/Home/PrivacyPolicy";
import styled from "styled-components";
import {MainForm} from "src/pages/Form/MainForm";
import MainLayout from "src/layouts/MainLayout";
import PageLayout from "src/layouts/PageLayout";

const history = createBrowserHistory();

export const MainRouter = () => {

    const mainContainer:any = useRef(null)
    const [showPages, setShowPages] = useState(false)

    useEffect(() => {

        setTimeout(() => {
            mainContainer.current.scrollIntoView(
                {
                    behavior: 'smooth',
                    block: 'end',
                    inline: 'nearest'
                })
        }, 1200)

    }, [showPages])

    const showContent = () => {
        setShowPages(true)
    }


    return (
        <MainContainer ref={mainContainer}>
            <Router history={history}>
                <RouteContentContainer>
                    <Switch>
                        <MainLayout exact path="/" component={HomePage} showPages={showPages} showContent={showContent} />
                        <MainLayout exact path="/form" component={MainForm} showPages={showPages} showContent={showContent} />
                        <PageLayout exact path="/aviso-privacidad" component={PrivacyPolicy} />
                    </Switch>
                </RouteContentContainer>
            </Router>
        </MainContainer>
    )

}

const MainContainer = styled.div`
  width: 100%;
  min-height: 100%;
  overflow: inherit;
  transition: all 1s;
  background: ${ props => props.theme.themeBackground };
`

const RouteContentContainer = styled.div`
  display: flex;
  flex-flow: column;
  justify-content: space-between;
`
