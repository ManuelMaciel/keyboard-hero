import Card from "../components/Card/Card";
import Input from "../components/Input/Input";
import Title from "../components/Title/Title";

const Registration = () => {
  return (
    <Card>
      <Title title="¿Cuál es tu nombre?" />
      <div style={{ margin: "10px" }} />
      <Input />
    </Card>
  )
}

export default Registration;
