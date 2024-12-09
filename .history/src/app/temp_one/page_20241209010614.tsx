"use client";

import styled from 'styled-components';
const TemplateOnePage = () => {
    let headerHeight = 100;
    let headerMargin = 3;
    let footerHeight = 100;
    let footerMargin = 3;
    let mainMargin = 3;
    let bodyMargin = 3;
    let mainHeight = `100vh - ${footerMargin * 2} - ${headerMargin * 2} - ${mainMargin * 2} - ${bodyMargin * 2}`;


    return <Container firstwrap={{
        maxWidth: 923
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
            margin: mainMargin,
            display: 'flex',
            flex: '1 1 200px',
            height: mainHeight,
            background: '#a1a1a1'

        }}>Menu</nav>
        <main style={{
            border: '2px solid blue',
            margin: mainMargin,
            display: 'flex',
            flex: '20 1 500px',
            background: '#a1a1a1',
            height: "calc(100vh - 224px)"

        }}>Principal</main>
        <aside style={{
            border: '2px solid yellow',
            margin: mainMargin,
            display: 'flex',
            flex: '1 1 200px',
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
    firstwrap: React.CSSProperties;
}

let Container = styled.div<CustomStyle>`
    display: flex;
    flex-wrap: wrap;

    @media only screen and (max-width: ${props => props.firstwrap.maxWidth || 923}px){
        main {
            height: ${props => props.firstwrap.height || "calc(100vh-330px)"}px;
        }
        aside {
            flex: 1 1 100vw;
            height: 100px
        }
    }
`

export default TemplateOnePage;
