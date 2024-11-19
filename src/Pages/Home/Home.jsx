import garotoComLivros from '../../assets/Capa.jpeg'
import rede from '../../assets/Insentivo.png'
import leitura from '../../assets/Leitura.png'
import dedicacao from '../../assets/Dedicação.png'
import balanca from '../../assets/Balança.png'
import s from './home.module.scss'

export default function Home() {
    return (
        <main>
            <section className={s.secaoHome}>
                <img src={garotoComLivros} alt="Imagem do pescoço pra baixo de um garoto segurando livros" />
                <h2>VENHA FAZER PARTE DA MAIOR REDE DE DOAÇÃO</h2>
            </section>

            <section className={s.insentivoEducacao}>
                <h2>Por que devo doar?</h2>

                <section className={s.destaque}>
                    <div>
                        <img src={rede} alt="" />
                        <p>Oferece livros a quem não tem acesso, ajudando a reduzir a exclusão social.</p>
                    </div>
                    <div>
                        <img src={leitura} alt="" />
                        <p>Estima o hábito da leitura e o aprendizado contínuo.</p>
                    </div>
                    <div>
                        <img src={dedicacao} alt="" />
                        <p>Fornece conhecimento e inspiração, permitindo que indivíduos transformem suas vidas.</p>
                    </div>
                    <div>
                        <img src={balanca} alt="" />
                        <p>Garante que todos, independentemente de sua condição, tenham oportunidades de aprendizado.</p>
                    </div>
                </section>
            </section>
        </main>
    )
}