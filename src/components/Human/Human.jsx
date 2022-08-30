import Form from '../Form/Form'
import "./human.css";

const Human = () => {
  return (
    <div className="humanContainer">
      <h2>HUMAN</h2>
      <Form Name="Full name" Email="Email" Phone="Phone number" />
      <button>Save</button>
    </div>
  );
};
export default Human;
