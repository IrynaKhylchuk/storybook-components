import "./App.css";

import { Input } from "./components/Input/Input";
import { Toast } from "./components/Toast/Toast";
import { SidebarMenu } from "./components/SidebarMenu/SidebarMenu";

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
    <>
      <Input type="number" clearable />
      <Toast content="This is notification!" duration={3000} type="info" />
      <SidebarMenu items={items} />
    </>
  );
}

export default App;
