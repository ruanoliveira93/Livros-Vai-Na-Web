import s from './footer.module.scss'

export default function Footer() {
    return (
        <footer>
            <section className={s.telefoneContato}>
                <p>4002-8922</p>
            </section>

            <section className={s.redesSociais}>
                <a href="#">
                <i className="fa-brands fa-facebook"></i>
                </a>
                <a href="#">
                <i className="fa-brands fa-twitter"></i>
                </a>
                <a href="#">
                <i className="fa-brands fa-youtube"></i>
                </a>
                <a href="#">
                <i className="fa-brands fa-linkedin"></i>
                </a>
                <a href="#">
                <i className="fa-brands fa-instagram"></i>
                </a>
            </section>
        </footer>
    )
}