import LivroProtagonista from '../../assets/Livro.jpeg'
import './LivrosDoados.css'
import './Responsive.css'

export default function livrosDoados() {
    return (
        <main className='container-livros'>
            <h2>Livros Doados</h2>
            
            <section className="livros">
                <div className="livro">
                    <img src={LivroProtagonista} alt="Livro Protagonista" />
                    <div>
                    <p style={{fontWeight: 600}}>O Protagonista</p>
                    <p>Susanne Andrade</p>
                    <p>Ficção</p>
                    </div>
                </div>
            </section>
        </main>
    )
}