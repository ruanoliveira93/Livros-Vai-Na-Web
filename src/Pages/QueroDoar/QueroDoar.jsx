import './QueroDoar.css'
import './Responsive.css'
import frameLivro from '../../assets/Frame.png'

export default function queroDoar() {
    return (
        <main className="queroDoar">
            <p>Por favor, preencha o formulário com suas informações e as informações do Livro</p>
            <section className="formulario">
                <div>
                    <img src={frameLivro} alt="" />
                    <legend>
                        Informações do Livro
                    </legend>
                </div>

                <form action="">
                    <input type="text" name="titulo" id="titulo" placeholder="Título" />
                    <input type="text" name="categoria" id="categoria" placeholder="Categoria" />
                    <input type="text" name="autor" id="autor" placeholder="Autor" />
                    <input type="url" name="linkImagem" id="linkImagem" placeholder="Link da Imagem" />
                    <input type="submit" id="btn" value="Doar" />
                </form>

            </section>
        </main>
    )
}