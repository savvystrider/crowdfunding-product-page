export default function ProjectMain({ setModalOpen }) {
  return (
    <section className="project-main">
      <div className="img-container">
        <img
          src="assets/logo-mastercraft.svg"
          alt="Mastercraft logo"
          className="mastercraft-logo"
        />
      </div>
      <div className="project-main_main-text">
        <h1>Mastercraft Bamboo Monitor Riser</h1>
        <p className="subtitle">
          A beautiful & handcrafted monitor stand to reduce neck and eye strain.
        </p>
      </div>
      <div className="btn-container">
        <button
          className="btn back-project-btn"
          onClick={() => setModalOpen((prev) => !prev)}
        >
          Back this project
        </button>
        <button className="btn bookmark-btn"></button>
      </div>
    </section>
  );
}
