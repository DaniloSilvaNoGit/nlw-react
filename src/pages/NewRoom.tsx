// import { useContext } from 'react';
import { Link } from 'react-router-dom';

import '../styles/auth.scss'
import ilustrationImg from '../assets/images/illustration.svg';
import logoImage from '../assets/images/logo.svg';

import { Button } from '../components/Button';
import { useAuth } from '../hooks/useAuth';
// import { AuthContext } from '../contexts/AuthContext';


export function NewRoom() {
    // const { user } = useAuth;

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
                <h2>Criar uma nova sala</h2>
                <form>
                    <input 
                    type="text" 
                   placeholder="Nome da sala"
                    />
                    <Button type="submit">
                        Criar sala
                    </Button>
                </form>
                <p>
                    Quer entrar em uma sala existente ?<Link to="/"> clique aqui</Link>
                </p>
            </div>
        </main>
    </div>
    );
}