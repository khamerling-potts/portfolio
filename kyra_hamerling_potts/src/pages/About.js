import NavBar from "../components/NavBar";

function About() {
  return (
    <body>
      <h2 className="sectionHeader">About me</h2>
      <div class="content">
        <div class="innerContainer">
          <section class="aboutInfo">
            <section class="aboutContainerOuter">
              <section class="aboutContainerInner">
                <img src="./headshot2.png" id="headshot" />
                <p id="aboutText">
                  I was born in Washington, DC, and have had an interest in STEM
                  fields and social sciences from a young age. I studied
                  psychology and computer science at Washington University in
                  St. Louis, where I was exposed to multiple coding languages,
                  frameworks, and projects. I spent much of my time there
                  conducting my own psychological research on emotion regulation
                  and interpersonal attachment dynamics. Following graduation, I
                  moved to New York and served as a clinical research
                  coordinator for suicide prevention at a VA hospital. Although
                  I will always have an interest clinical psychology, I am
                  transitioning to software engineering to pursue programming as
                  another passion of mine. I love the problem-solving and
                  creativity involved in coding and am excited to continue
                  learning full stack development at Flatiron School. In my free
                  time, I enjoy playing piano, flipping furniture, and
                  discovering new recipes. As I develop my portfolio, I will
                  continue to add new projects to my website.
                </p>
              </section>
            </section>
          </section>
        </div>
      </div>
    </body>
  );
}

export default About;
