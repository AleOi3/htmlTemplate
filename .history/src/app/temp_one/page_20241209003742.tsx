const TemplateOnePage = () => {
    return <div style={{display:"flex", flexWrap: 'wrap'}}>
        <header style={{
            border: '2px solid red',
            margin: 3,
            display: 'flex',
            flex: '1 1 100vw',
            height: 100,
            background: '#a1a1a1'
        }}>
            Cabeçalho
        </header>
        <nav style={{
            border: '2px solid green',
            margin: 3,
            height: 100,
            display: 'flex',
            flex: '1 1 200px',
            background: '#a1a1a1'
            
        }}>Menu</nav>
        <main style={{
            border: '2px solid blue',
            margin: 3,
            display: 'flex',
            flex: '20 1 100px',
            background: '#a1a1a1'

        }}>Principal</main>
        <aside style={{
            border: '2px solid yellow',
            margin: 3,
            display: 'flex',
            flex: '1 1 200px',
            background: '#a1a1a1'
            height: 100,

        }}>Relacionado</aside>
        <footer style={{
            border: '2px solid orange',
            margin: 3,
            display: 'flex',
            flex: '1 1 100vw',
            background: '#a1a1a1'


        }}>Rodapé</footer>

    </div>
}

export default TemplateOnePage;
