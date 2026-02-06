import "./App.css";

import { Input } from "./components/Input/Input";
import { Toast } from "./components/Toast/Toast";
import { SidebarMenu } from "./components/SidebarMenu/SidebarMenu";
import components from "./assets/components.svg";

const items = [
  { label: "Home" },
  { label: "Search" },
  {
    label: "Subjects",
    subItems: [
      { label: "Math" },
      {
        label: "Science",
        subItems: [
          { label: "Physics" },
          { label: "Chemistry" },
          { label: "Biology" }
        ]
      }
    ]
  },
  { label: "Notification" }
];

function App() {
  return (
    <div className="container">
      <div className="form">
        <div className="headingContainer">
          <img src={components} alt="Open menu" />
          <h1>
            Storybook <br /> Component
          </h1>
        </div>
        <div className="inputsContainer">
          <Input type="text" clearable />
          <Input type="password" clearable />
        </div>
      </div>
      <Toast content="This is notification!" duration={3000} type="info" />
      <SidebarMenu items={items} />
    </div>
  );
}

export default App;
