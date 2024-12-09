"use client";

import styled from 'styled-components';
const TemplateOnePage = () => {
    let headerHeight = 100;
    let headerMargin = 3;
    let footerHeight = 100;
    let footerMargin = 3;
    let mainMargin = 3;
    let navWidth = 200;
    let navMargin = 3;
    let mainWidth = 500;
    let asideWidth = 200;
    let asideMargin = 3;
    let bodyMargin = 3;
    let firstWrapAisdeHeight = 100;
    let secondWrapNavHeight = 100;
    let mainHeight = `calc(100vh - ${footerMargin * 2}px - ${headerMargin * 2}px - ${mainMargin * 2}px - ${bodyMargin * 2}px - ${footerHeight}px - ${headerHeight}px)`;
    let firstWrapWidth = `${mainWidth + asideWidth + navWidth  + bodyMargin * 2 + asideMargin * 2 + mainMargin * 2 + navMargin * 2 }`;
    let firstWrapHeight = `calc(100vh - ${firstWrapAisdeHeight}px - ${headerHeight}px - ${footerHeight}px - ${footerMargin * 2}px - ${headerMargin * 2}px - ${mainMargin * 2}px - ${bodyMargin * 2}px - ${asideMargin * 2}px)`;

    let secondWrapWidth = `${mainWidth + navWidth  + bodyMargin * 2 + mainMargin * 2 + navMargin * 2 }`;
    let secondWrapHeight = `calc(100vh - ${secondWrapNavHeight}px - ${firstWrapAisdeHeight}px - ${headerHeight}px - ${footerHeight}px - ${footerMargin * 2}px - ${headerMargin * 2}px - ${mainMargin * 2}px - ${bodyMargin * 2}px - ${asideMargin * 2}px - ${navMargin * 2}px)`;

    return <Container firstwrap={{
        maxWidth: firstWrapWidth,
        height: firstWrapHeight,
        asideHeight: firstWrapAisdeHeight,
    }} secondwrap={{
        maxWidth: secondWrapWidth,
        height: secondWrapHeight,
        navHeight: secondWrapNavHeight,
    }}>
        <header style={{
            border: '2px solid red',
            margin: 3,
            display: 'flex',
            flex: '1 1 100vw',
            height: headerHeight,
            background: '#a1a1a1'
        }}>
            Cabeçalho
        </header>
        <nav style={{
            border: '2px solid green',
            margin: navMargin,
            display: 'flex',
            flex: `1 1 ${navWidth}px`,
            // flex: '1 1 200px',
            // height: mainHeight,
            background: '#a1a1a1'

        }}>Menu</nav>
        <main style={{
            border: '2px solid blue',
            margin: mainMargin,
            display: 'flex',
            flex: `20 1 ${mainWidth}px`,
            background: '#a1a1a1',
            height: mainHeight

        }}>Principal</main>
        <aside style={{
            border: '2px solid yellow',
            margin: mainMargin,
            display: 'flex',
            flex: `1 1 ${asideWidth}px`,
            background: '#a1a1a1'

        }}>Relacionado</aside>
        <footer style={{
            border: '2px solid orange',
            margin: 3,
            display: 'flex',
            flex: '1 1 100vw',
            height: footerHeight,
            background: '#a1a1a1'

        }}>Rodapé</footer>

    </Container>
}

interface CustomStyle {
    firstwrap: {
        maxWidth: string,
        height: string,
        asideHeight: number,
    };
    secondwrap: {
        maxWidth: string,
        height: string,
        navHeight: number,
    };
}

let Container = styled.div<CustomStyle>`
    display: flex;
    flex-wrap: wrap;

    @media only screen and (max-width: ${props => props.firstwrap.maxWidth || 923}px){
        main {
            height: ${props => props.firstwrap.height || "calc(100vh - 330px)"} !important;
        };
        aside {
            flex: 1 1 100vw;
            height: ${props => props.firstwrap.asideHeight || "100"}px;
        };
    }
    @media only screen and (max-width: ${props => props.secondwrap.maxWidth || 717}px){
        main {
            height: ${props => props.secondwrap.height || "calc(100vh - 436px)"} !important;
        };
        nav {
            flex: 1 1 100vw;
            height: ${props => props.secondwrap.navHeight || "100"}px;
        };
    }
`

export default TemplateOnePage;
