import { useState } from "react";
import "./css/10000hours.css";
import "./css/reset.css";
import "./App.css";
import Header from "./Components/Header/Header";
import Intro from "./Components/Main/Intro/Intro";
import Inputs from "./Components/Main/Inputs/Inputs";
import Result from "./Components/Main/Result/Result";
import Links from "./Components/Main/Links/Links";
import Footer from "./Components/Footer/Footer";
import Modal from "./Components/Modal/Modal";

function App() {
  const [myInfo, setMyInfo] = useState({});
  const [modal, setModal] = useState(false);

  // TODO: Inputs컴포넌트에서 상태 안 만들고 myInfo로 쓰기
  // TODO: common컴포넌트 props 어떻게 처리할지 알아보기

  return (
    <>
      <Header />
      <main>
        <Intro />
        <Inputs setMyInfo={setMyInfo} />
        <Result myInfo={myInfo} />
        {Object.keys(myInfo).length && <Links setModal={setModal} />}
      </main>
      <Footer />
      {modal && <Modal setModal={setModal} />}
    </>
  );
}

export default App;
