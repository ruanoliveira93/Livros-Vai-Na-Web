import './Footer.css'
import './Responsive.css'

export default function Footer() {
    return (
        <footer>
            <section className="telefone-contato">
                <p>4002-8922</p>
            </section>

            <section className="redes-sociais">
                <a href="">
                <i className="fa-brands fa-facebook"></i>
                </a>
                <a href="">
                <i className="fa-brands fa-twitter"></i>
                </a>
                <a href="">
                <i className="fa-brands fa-youtube"></i>
                </a>
                <a href="">
                <i className="fa-brands fa-linkedin"></i>
                </a>
                <a href="">
                <i className="fa-brands fa-instagram"></i>
                </a>
            </section>
        </footer>
    )
}