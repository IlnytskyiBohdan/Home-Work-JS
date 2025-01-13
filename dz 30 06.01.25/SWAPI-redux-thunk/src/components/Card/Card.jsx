import { useSelector } from "react-redux";
import { selectItem } from "../../redux/selectors/selectors";

const Card = () => {
  const item = useSelector(selectItem);

  return (
    <div className="card">
      <div className="card-body">{Object.keys(item).length > 0 ? <pre>{JSON.stringify(item, null, 2)}</pre> : <pre></pre>}</div>
    </div>
  );
};

export default Card;
