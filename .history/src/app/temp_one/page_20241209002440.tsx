const TemplateOnePage = () => {
    return <>
        <header style={{
            border: '2px solid red',
            height: 100
        }}>
            Cabeçalho
        </header>
        <nav style={{
            border: '2px solid green',
            display: 'inline'
        }}>Menu</nav>
        <main style={{
            border: '2px solid blue',
            display: 'inline'

        }}>Principal</main>
        <aside style={{
            border: '2px solid yellow',
            display: 'inline'

        }}>Relacionado</aside>
        <footer style={{
            border: '2px solid orange'
        }}>Rodapé</footer>

    </>
}

export default TemplateOnePage;
