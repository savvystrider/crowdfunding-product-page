import Header from "./components/Header";
import ProjectMain from "./components/ProjectMain";
import ProjectStats from "./components/ProjectStats";
import ProjectAbout from "./components/ProjectAbout";

export default function App() {
  return (
    <>
      <Header />
      <main>
        <ProjectMain />
        <ProjectStats />
        <ProjectAbout />
      </main>
    </>
  );
}
