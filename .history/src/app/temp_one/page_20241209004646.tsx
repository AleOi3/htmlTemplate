const TemplateOnePage = () => {
    let headerHeight = 100;
    let headerMargin = 3;
    let footerHeight = 100;
    let footerMargin = 3;
    let mainMargin = 3;
    let bodyMargin = 3;
    let mainHeight = `100vh - ${footerMargin * 2} - ${headerMargin * 2} - ${mainMargin * 2} - ${bodyMargin * 2}`;
    return <div style={{display:"flex", flexWrap: 'wrap'}}>
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

    </div>
}

export default TemplateOnePage;
