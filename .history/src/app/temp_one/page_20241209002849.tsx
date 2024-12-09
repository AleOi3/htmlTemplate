const TemplateOnePage = () => {
    return <>
        <header style={{
            border: '2px solid red',
            height: 100,
            display: 'flex'
        }}>
            Cabeçalho
        </header>
        <nav style={{
            border: '2px solid green',
            display: 'flex',
            flex: '1 1 200px'
        }}>Menu</nav>
        <main style={{
            border: '2px solid blue',
            display: 'flex',
            flex: '1 1 500px'

        }}>Principal</main>
        <aside style={{
            border: '2px solid yellow',
            display: 'flex',
            flex: '1 1 300px'
        }}>Relacionado</aside>
        <footer style={{
            border: '2px solid orange',
            display: 'flex'

        }}>Rodapé</footer>

    </>
}

export default TemplateOnePage;
