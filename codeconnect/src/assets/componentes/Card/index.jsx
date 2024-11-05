import './style.css'
import Capa from './assets/card_code_editor.png';
import Code from './assets/code.png';
import Share from './assets/share.png';
import Chat from './assets/chat.png';
import Icone from './assets/icone.png';

export default function Card(){
    return(
        <article className="card">
            <div className="card__imagem">
                <img src={Capa}></img>
            </div>
            <div className='card_conteudo'>
                <div className='conteudo_texto'>
                    <h3>Titulo do post</h3>
                    <p>Resumo do post</p>
                </div>

                <div className='conteudo_rodape'>
                    <ul>
                        <li>
                        <img src={Code}/>
                        100
                        </li>
                        <li>
                            <img src={Share}/>
                            46
                        </li>
                        <li>
                            <img src={Chat}/>
                            146
                        </li>
                    </ul>

                    <div className='rodape__usuario'>
                        <img src={Icone}/>
                        @capitao_tchola
                    </div>
                </div>
            </div>
        </article>
    )
}