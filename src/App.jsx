// import "./App.css";

import AppLayout from "./components/AppLayout";
import Header from "./components/Header";
import Section1 from "./components/Section1";

function App() {
  return (
    <AppLayout>
      <Header />
      <main>
        <Section1 />
      </main>
    </AppLayout>
  );
}

export default App;
