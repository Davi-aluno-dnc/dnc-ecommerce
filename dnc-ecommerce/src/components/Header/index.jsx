import "./index.scss";
import Logo from "../../assets/Logo.png";

export default function Header() {
  return (
    <div className="Header">
      <img src={Logo} alt="dnc"></img>
      <a href="">Home</a>
      <a href="">Novidade</a>
      <a href="">Feminino</a>
      <a href="">Masculino</a>
      <a href="">Atendimento</a>
    </div>
  );
}
