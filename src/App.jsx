// import "./App.css";

import AppLayout from "./components/AppLayout";
import Header from "./components/Header";
import Hero from "./components/Hero";
import LogoGarden from "./components/Logogarden";
import Chapter from "./components/Chapter";
import UserComment from "./components/UserComment";
import Feature from "./components/Feature";
import JoinUs from "./components/JoinUs";
import Download from "./components/Download";

function App() {
  return (
    <AppLayout>
      <Header />
      <main>
        <Hero />
        <LogoGarden />
        <Chapter
          title="Agent 将想法化为代码"
          description="人机协作的程序员，效率远超任何单独开发者的数量级。"
          btnTitle="了解 Agent"
        />
        <Chapter
          title="近乎神准的自动补全"
          description="我们的自研 Tab 模型以惊人的速度与精度预测你的下一步操作。"
          btnTitle="了解 Tab"
          leftText={false}
        />
        <Chapter
          title="无处不在的研发现场"
          description="Cursor 出现在 GitHub 审阅你的 PR，在 Slack 中作为队友，以及你工作的任何其他地方。"
          btnTitle="了解 Cursor 的生态系统"
        />
        <UserComment />
        <Feature />
        <JoinUs />
        <Download />
      </main>
    </AppLayout>
  );
}

export default App;
