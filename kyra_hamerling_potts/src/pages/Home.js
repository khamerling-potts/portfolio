import NavBar from "../components/NavBar";
function Home() {
  return (
    <body>
      <h2 id="homeHeader">Welcome to my website</h2>

      <div className="content">
        <div className="innerContainer">
          <section class="textSection">
            <section class="textContainer">
              <section class="textContainerInner">
                <p id="homeIntro1">Hi, I'm Kyra Hamerling-Potts</p>
                <p id="homeIntro2">
                  A budding, passionate coder transitioning to software
                  engineering.
                </p>
              </section>
            </section>
          </section>
        </div>
      </div>
    </body>
  );
}

export default Home;
