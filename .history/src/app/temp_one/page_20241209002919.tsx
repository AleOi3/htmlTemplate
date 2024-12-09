const TemplateOnePage = () => {
    return <>
        <header style={{
            border: '2px solid red',
            height: 100,
            margin: 3,
            display: 'flex'
        }}>
            Cabeçalho
        </header>
        <nav style={{
            border: '2px solid green',
            margin: 3,
            display: 'flex',
            flex: '1 1 200px'
        }}>Menu</nav>
        <main style={{
            border: '2px solid blue',
            margin: 3,
            display: 'flex',
            flex: '1 1 500px'

        }}>Principal</main>
        <aside style={{
            border: '2px solid yellow',
            margin: 3,
            display: 'flex',
            flex: '1 1 300px'
        }}>Relacionado</aside>
        <footer style={{
            border: '2px solid orange',
            margin: 3,
            display: 'flex'

        }}>Rodapé</footer>

    </>
}

export default TemplateOnePage;
