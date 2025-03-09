import { useParams } from "react-router-dom";

const Cards = () => {
  const { id } = useParams(); // URL の `:id` を取得
    
  return (
    <div>
      <h1>id: {id}</h1>
    </div>
  );
};

export default Cards;