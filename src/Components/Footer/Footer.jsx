import { BrowserRouter, Link } from 'react-router-dom'
import s from './footer.module.scss'

export default function Footer() {
    return (
        <BrowserRouter>
            <footer className={s.containerFooter}>
                <section className={s.contatos}>
                    <section className={s.telefoneContato}>
                        <p>4002-8922</p>
                    </section>

                    <section className={s.redesSociais}>
                        <Link to='http://www.facebook.com' target='_blank'>
                            <i className="fa-brands fa-facebook"></i>
                        </Link>
                        <Link to='http://www.x.com' target='_blank'>
                            <i className="fa-brands fa-twitter"></i>
                        </Link>
                        <Link to='http://www.youtube.com' target='_blank'>
                            <i className="fa-brands fa-youtube"></i>
                        </Link>
                        <Link to='http://www.linkedin.com' target='_blank'>
                            <i className="fa-brands fa-linkedin"></i>
                        </Link>
                        <Link to='http://www.instagram.com' target='_blank'>
                            <i className="fa-brands fa-instagram"></i>
                        </Link>
                    </section>
                </section>

                <section className={s.direitosReservados}>
                    <p>Layout desenvolvido pela Vai Na Web para fins educativos - 2024</p>
                </section>
            </footer>
        </BrowserRouter>
    )
}