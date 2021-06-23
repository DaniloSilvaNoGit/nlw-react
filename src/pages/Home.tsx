import ilustrationImg from '../assets/images/illustration.svg';
import logoImage from '../assets/images/logo.svg';
import googleImg from '../assets/images/google-icon.svg';

import { Button } from '../components/Button';

import '../styles/auth.scss'

export function Home() {
    return(
        <div id="page-auth">
            <aside>
                <img src={ilustrationImg} alt="Ilustração sinbolizando perguntas e respostas"/>
                <strong>Crie salas ao vivo</strong>
                <p>Tire duvidas da sua audiência em tempo real</p>
            </aside>
            <main>
                <div className="main-content">
                    <img src={logoImage} alt="Letmeask" />
                    <button className="create-room">
                        <img src={googleImg} alt="Logo google" />
                        Crie uma sala com google
                    </button>
                    <div className="separator">ou entre me uma sala</div>
                    <form>
                        <input 
                        type="text" 
                        placeholder="Digite o código da sala"
                        />
                        <Button type="submit">
                            Entrar na sala
                        </Button>
                    </form>
                </div>
            </main>
        </div>
    )
}