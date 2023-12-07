export default function BackProject({ setModalOpen }) {
  return (
    <section className="back-project">
      <div className="modal-container">
        <img
          src="assets/icon-close-modal.svg"
          alt=""
          className="close-modal-icon"
          onClick={() => setModalOpen((prev) => !prev)}
        />
        <h2>Back this project</h2>
        <p className="project-subtitle">
          Want to support us in bringing Mastercraft Bamboo Monitor Riser out in
          the world?
        </p>
        <div className="pledge-container">
          <div className="pledge">
            <div className="pledge-row">
              <input type="radio" name="reward" id="no-reward" />
              <label htmlFor="no-reward">Pledge with no reward</label>
            </div>
            <p className="pledge-description">
              Choose to support us without a reward if you simply believe in our
              project. As a backer, you will be signed up to receive product
              updates via email.
            </p>
          </div>
          <div className="pledge">
            <div className="pledge-row">
              <input type="radio" name="reward" id="bamboo" />
              <div>
                <label htmlFor="bamboo">Bamboo Stand</label>
                <p className="pledge-info">Pledge $25 or more</p>
              </div>
            </div>
            <p className="pledge-description">
              You get an ergonomic stand made of natural bamboo. You've helped
              us launch our promotional campaign, and you’ll be added to a
              special Backer member list.
            </p>
            <div className="quantity-row">
              <p className="quantity">101</p>
              <h4>left</h4>
            </div>
          </div>
          <div className="pledge">
            <div className="pledge-row">
              <input type="radio" name="reward" id="black" />
              <div>
                <label htmlFor="black">Black Edition Stand</label>
                <p className="pledge-info">Pledge $75 or more</p>
              </div>
            </div>
            <p className="pledge-description">
              You get a Black Special Edition computer stand and a personal
              thank you. You’ll be added to our Backer member list. Shipping is
              included.
            </p>
            <div className="quantity-row">
              <p className="quantity">64</p>
              <h4>left</h4>
            </div>
          </div>
          <div className="pledge">
            <div className="pledge-row">
              <input type="radio" name="reward" id="mahogany" />
              <div>
                <label htmlFor="mahogany">Mahogany Special Edition</label>
                <p className="pledge-info">Pledge $200 or more</p>
              </div>
            </div>
            <p className="pledge-description">
              You get two Special Edition Mahogany stands, a Backer T-Shirt, and
              a personal thank you. You’ll be added to our Backer member list.
              Shipping is included.
            </p>
            <div className="quantity-row">
              <p className="quantity">0</p>
              <h4>left</h4>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
