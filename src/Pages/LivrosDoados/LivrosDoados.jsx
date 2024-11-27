import LivroProtagonista from '../../assets/Livro.jpeg'
import s from './livrosdoados.module.scss'

export default function livrosDoados() {
    return (
        <section className={s.containerLivros}>
            <h2>Livros Doados</h2>

            <section className={s.livros}>
                <div className={s.livro}>
                    <img src={LivroProtagonista} alt="Livro Protagonista" />
                    <div>
                        <p style={{ fontWeight: 600 }}>O Protagonista</p>
                        <p>Susanne Andrade</p>
                        <p>Ficção</p>
                    </div>
                </div>
            </section>
        </section>
    )
}