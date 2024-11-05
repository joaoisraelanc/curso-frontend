import Logo from './assets/Logo.png';
import Feed from './assets/feed.png';
import Perfil from './assets/account_circle.png';
import Info from './assets/info.png';
import Sair from './assets/logout.png';
import './style.css';
export default function Sidebar(){
    return(
        <aside>
            <img src={Logo} alt ='Logo do Site'/>
            <nav>
                <ul className='lista-sidebar'>
                    <li>
                        <a href='#' className='item__link-publicar'>Publicar</a>
                    </li>
                    <li>
                        <a href='#' className='item__link item__link--ativo'>
                            <img src={Feed} alt='' />
                            <span>Feed</span>
                        </a>
                    </li>
                    <li>
                        <a href='#' className='item__link'>
                            <img src={Perfil} alt=''/>
                            <span>Perfil</span>
                        </a>
                    </li>
                    <li>
                        <a href='#' className='item__link'>
                            <img src={Info} alt=''/>
                            <span>Info</span>
                        </a>
                    </li>
                    <li>
                        <a href='#' className='item__link'>
                            <img src={Sair} alt=''/>
                            <span>Sair</span>
                        </a>
                    </li>

                </ul>
            </nav>
        </aside>
    )
}