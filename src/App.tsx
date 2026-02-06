import "./App.css";

import { Input } from "./components/Input/Input";
import { Toast } from "./components/Toast/Toast";

function App() {
  return (
    <>
      <Input type="number" clearable />
      <Toast content="This is notification!" duration={3000} type="info" />
    </>
  );
}

export default App;
