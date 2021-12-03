import {
  Container,
  Col,
  Row,
  InputGroup,
  FormControl,
  Button,
} from "react-bootstrap";
import { HeaderContainer, Content } from "./styles";
import logoImg from '../../assets/logo.svg'
import {useState} from 'react';
import { api } from "../../services/api";


export function Login() {

   const [login, setLogin] = useState('');
   const [password, setPassword] = useState('');
   const [newPassword, setNewPassword] = useState('');
   const [newLogin, setNewLogin] = useState('');

  async function handleLogin(){
     const response = await api.get('/api/usuario/logar',{
        params: {
          login,
          senha: password
        }
     });
     console.log(response.data);
    // history.push('/main');
  }

  async function handleSignup(){
     await api.post('/usuario/salvar', {
       login: newLogin,
       senha: newPassword
     });
  }

  return (
      <>
    <HeaderContainer>
    <Content>
        <img src={logoImg} alt="dy money" />
    </Content>
    </HeaderContainer>
    <Container>
      <Row>
        <Col>
          <h1>Faça Login:</h1>
          <InputGroup className="mb-3">
            <InputGroup.Text id="basic-addon1">Username:</InputGroup.Text>
            <FormControl aria-label="Username" 
              onChange={(e) => setLogin(e.target.value)}
            />
          </InputGroup>
          <InputGroup className="mb-3">
            <InputGroup.Text id="basic-addon1">Password:</InputGroup.Text>
            <FormControl aria-label="Password"
            onChange={(e) => setPassword(e.target.value)} 
              type="password"
            />
          </InputGroup>
          <Button variant="primary" size="lg"
            onClick={handleLogin}
          >
            Entrar
          </Button>
        </Col>
        <Col>
          <h1>Primeira vez? cadastre-se:</h1>
          <InputGroup className="mb-3">
            <InputGroup.Text id="basic-addon1">New username:</InputGroup.Text>
            <FormControl aria-label="Username" 
              onChange={e => setNewLogin(e.target.value)}
            />
          </InputGroup>
          <InputGroup className="mb-3">
            <InputGroup.Text id="basic-addon1">New password:</InputGroup.Text>
            <FormControl aria-label="Password" 
              onChange={e => setNewPassword(e.target.value)}
              type="password"
            />
          </InputGroup>
          <Button variant="primary" size="lg"
          onClick={handleSignup}
          >
            Cadastrar
          </Button>
        </Col>
      </Row>
    </Container>
    </>
  );
}
