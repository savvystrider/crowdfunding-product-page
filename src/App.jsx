import { useState } from "react";

import Header from "./components/Header";
import ProjectMain from "./components/ProjectMain";
import ProjectStats from "./components/ProjectStats";
import ProjectAbout from "./components/ProjectAbout";

export default function App() {
  const [openModal, setModalOpen] = useState(false);
  return (
    <>
      <Header />
      <main>
        <ProjectMain setModalOpen={setModalOpen} />
        <ProjectStats />
        <ProjectAbout openModal={openModal} setModalOpen={setModalOpen} />
      </main>
    </>
  );
}
