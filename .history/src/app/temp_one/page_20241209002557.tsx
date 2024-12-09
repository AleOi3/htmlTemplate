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
            display: 'flex'
        }}>Menu</nav>
        <main style={{
            border: '2px solid blue',
            display: 'flex'

        }}>Principal</main>
        <aside style={{
            border: '2px solid yellow',
            display: 'flex'
        }}>Relacionado</aside>
        <footer style={{
            border: '2px solid orange',
            display: 'flex'

        }}>Rodapé</footer>

    </>
}

export default TemplateOnePage;
