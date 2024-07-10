function Projects() {
  return (
    <body>
      <h2 className="sectionHeader">Projects</h2>
      <div class="content">
        <div class="innerContainer">
          <section class="projectsInfo">
            <section class="projectsContainerOuter">
              <section class="projectsContainerInner">
                <section id="project0">
                  <h3 class="projHeader">Weather App</h3>
                  <img src="./weather.png" class="weather" />
                  <button id="readmore0" class="readmore">
                    Read more
                  </button>
                </section>

                <section id="project1">
                  <h3 class="projHeader">To Do List</h3>
                  <img src="./todo.png" class="todo" />
                  <button id="readmore1" class="readmore">
                    Read more
                  </button>
                </section>

                <section id="project2">
                  <h3 class="projHeader">Craigslist Redesign</h3>
                  <div id="proj2ImgContainer">
                    <img src="./craigslist1.png" class="craigslist" />
                    <img src="./craigslist2.png" class="craigslist" />
                  </div>
                  <button id="readmore2" class="readmore">
                    Read more
                  </button>
                </section>

                <section id="project3">
                  <h3 class="projHeader">Image Gallery</h3>
                  <img src="./gallery.png" class="gallery" />
                  <button id="readmore3" class="readmore">
                    Read more
                  </button>
                </section>

                <section id="project4">
                  <h3 class="projHeader">Instagram Clone</h3>
                  <img src="./instagram1.png" class="instagram" />
                  <button id="readmore4" class="readmore">
                    Read more
                  </button>
                </section>
              </section>

              <section id="arrow">
                <p class="arrow">
                  ▼<br></br>▼<br></br>▼
                </p>
              </section>
            </section>
          </section>
        </div>
      </div>
    </body>
  );
}

export default Projects;
