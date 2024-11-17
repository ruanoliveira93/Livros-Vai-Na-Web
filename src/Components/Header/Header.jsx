import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import Home from '../../Pages/Home/Home'
import LivrosDoados from '../../Pages/LivrosDoados/LivrosDoados'
import QueroDoar from '../../Pages/QueroDoar/QueroDoar'
import logoLivro from '../../assets/Logo Livro.png'
import lupaPesquisa from '../../assets/search.png'
import './Header.css'
import './Responsive.css'


export default function Header() {
    return (
        <BrowserRouter>
            <header>
                <section>
                    <Link to='/'>
                        <img src={logoLivro} alt="Imagem ilustrativa de um livro aberto" />
                        <h1>Livros Vai na Web</h1>
                    </Link>
                </section>

                <nav>
                    <ul>
                        <li><Link to='/'>Início</Link></li>
                        <li><Link to='/livros-doados'>Livros Doados</Link></li>
                        <li><Link to='/quero-doar'>Quero Doar</Link></li>
                    </ul>
                </nav>

                <section className='formSearch'>
                    <input type="search" name="" id="" placeholder='O que você procura?' />
                    
                    <button>
                    <img src={lupaPesquisa} alt="Imagem Lupa" />
                    </button>
                </section>
            </header>

            <Routes>
                <Route index element={<Home/>}/>
                <Route path='/livros-doados' element={<LivrosDoados/>} />
                <Route path='/quero-doar' element={<QueroDoar/>}/>
            </Routes>
        </BrowserRouter>
    )
}