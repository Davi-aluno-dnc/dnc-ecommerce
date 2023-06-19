import "./index.scss";
import { Link } from "react-router-dom";

export default function Card({ data }) {
  return (
    <div className="Card">
      <img src={data.imgPath} alt={data.title} />
      <div className="Card__text">
        <span>{data.title}</span>
        <Link to={`product/${data.id}`}>
          <button>Comprar Look</button>
        </Link>
      </div>
    </div>
  );
}
