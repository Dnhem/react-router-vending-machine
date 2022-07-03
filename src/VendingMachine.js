import { Link } from "react-router-dom";

const VendingMachine = () => {
  return (
    <div>
      <h1>Hello I am a Vending Machine. What would you like to eat?</h1>
      <nav>
        <Link to="/soda">Soda</Link>
        <Link to="/chips">Chips</Link>
        <Link to="/sardines">Sardines</Link>
      </nav>
    </div>
  );
};

export default VendingMachine;
