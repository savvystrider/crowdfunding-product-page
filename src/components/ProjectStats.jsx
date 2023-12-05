export default function ProjectStats() {
  return (
    <section className="project-stats">
      <h2 className="sr-only">Project Statistics</h2>
      <div className="stat">
        <h3>of $100,000 backed</h3>
        <p className="statistic">$89,914</p>
      </div>
      <div className="stat">
        <h3>total backers</h3>
        <p className="statistic">5,007</p>
      </div>
      <div className="stat">
        <h3>days left</h3>
        <p className="statistic">56</p>
      </div>
      <div className="progress-bar"></div>
    </section>
  );
}
