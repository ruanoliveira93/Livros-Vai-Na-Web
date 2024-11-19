import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import Home from '../../Pages/Home/Home'
import LivrosDoados from '../../Pages/LivrosDoados/LivrosDoados'
import QueroDoar from '../../Pages/QueroDoar/QueroDoar'
import logoLivro from '../../assets/Logo Livro.png'
import lupaPesquisa from '../../assets/search.png'
import s from './header.module.scss'


export default function Header() {
    return (
        <BrowserRouter>
            <header>
                <section className={s.logoHeader}>
                    <Link to='/'>
                        <img src={logoLivro} alt="Imagem ilustrativa de um livro aberto" />
                        <h1>Livros Vai na Web</h1>
                    </Link>
                </section>

                <nav className={s.navbar}>
                    <ul>
                        <li><Link to='/'>Início</Link></li>
                        <li><Link to='/livrosdoados'>Livros Doados</Link></li>
                        <li><Link to='/querodoar'>Quero Doar</Link></li>
                    </ul>
                </nav>

                <section className={s.formSearch}>
                    <input type="search" placeholder='O que você procura?' />
                    
                    <button>
                    <img src={lupaPesquisa} alt="Imagem Lupa" />
                    </button>
                </section>
            </header>

            <Routes>
                <Route index element={<Home/>}/>
                <Route path='/livrosdoados' element={<LivrosDoados/>} />
                <Route path='/querodoar' element={<QueroDoar/>}/>
            </Routes>
        </BrowserRouter>
    )
}