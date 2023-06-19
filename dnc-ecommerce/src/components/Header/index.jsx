import "./index.scss";
import Logo from "../../assets/Logo.png";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <div className="Header">
      <img src={Logo} alt="dnc"></img>
      <a href=""></a>
      <Link to={`http://localhost:5173/`}>Home</Link> {/* link para a home */}
      <a href="">Novidade</a>
      <a href="">Feminino</a>
      <a href="">Masculino</a>
      <a href="">Atendimento</a>
    </div>
  );
}
