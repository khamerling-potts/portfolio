function Home() {
  return (
    <body>
      <h3>(Currently converting to React. Stay tuned!)</h3>
      <script src="script.js" defer></script>
      <div class="content">
        <div class="innerContainer">
          <section class="navSection">
            <nav class="sidenav">
              <a class="active" href="index.html">
                Home
              </a>
              <a href="about.html">About</a>
              <a href="projects.html">Projects</a>
              <a href="contact.html">Contact</a>
            </nav>
          </section>

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
