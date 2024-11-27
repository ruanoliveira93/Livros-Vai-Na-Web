import s from './querodoar.module.scss'
import iconeLivro from '../../assets/IconeLivro.png'

export default function queroDoar() {
    return (
        <section className={s.queroDoar}>
            <p>Por favor, preencha o formulário com suas informações e as informações do Livro</p>
            <section className={s.formulario}>
                <div>
                    <img src={iconeLivro} alt="Imagem ilustrativa de um livro" />
                    <legend>
                        Informações do Livro
                    </legend>
                </div>

                <form action="">
                    <input type="text" name="titulo" id="titulo" placeholder="Título" />
                    <input type="text" name="categoria" id="categoria" placeholder="Categoria" />
                    <input type="text" name="autor" id="autor" placeholder="Autor" />
                    <input type="url" name="linkImagem" id="linkImagem" placeholder="Link da Imagem" />
                    <input type="submit" value="Doar" />
                </form>
            </section>
        </section>
    )
}