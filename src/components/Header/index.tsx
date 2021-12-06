import logoImg from '../../assets/logo.svg'
import { Container, Content } from './styles'
import { useHistory } from "react-router";

interface HeaderProps{
    onOpenNewTransactionModal: () => void;
}
export function Header({onOpenNewTransactionModal}: HeaderProps) {

    const history = useHistory();
    function handleLogout() {
        localStorage.clear()
        history.push('/')
    }

    return(
        <Container>
            <Content>
            <img src={logoImg} alt="dy money" />
            <button type="button" 
                onClick={onOpenNewTransactionModal}
            >
                Nova transação
            </button>
            <button type="button" 
                onClick={handleLogout}
            >
                Logout
            </button>
            </Content>
        </Container>
    )
}