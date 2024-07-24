<template>
  <div class="home">
    <div class="hero">
      <img src="@/assets/earth.png" alt="Earth" />
      <div class="hero-text">
        <h2>Data discovery guided by experts</h2>
        <button>GAIN DATA WISDOM</button>
      </div>
    </div>

    <div class="content">
      <div class="word-picture-container">
        <div class="word-section">
          <div class="word-block">
          <div class="quote-section">
            <p class="quote">"One golden observation is worth a thousand simulations."</p>

          </div>
            <p class="author">- from the Ten Extra Commandments for Climate Modeling by J.E. Kutzbach</p>
          <div class="welcome-section">
            <p class="welcome">Welcome to the <span class="highlight">Climate Data Guide</span>!</p>
            <p class="description">
              The Climate Data Guide (or "Guide") is an expert knowledge portal providing concise and reliable information on the strengths and limitations of the climate data that are essential for measuring and predicting physical climate risk.
            </p>
            <p class="description">
              The Guide publishes data summaries with access links, intercomparisons, and expert commentaries on the utility of climate data for addressing a wide variety of questions in climate science.
            </p>
            <p class="description">
              The Guide has helped over a million readers from around the world gain an insider's perspective on data ranging from AI-generated precipitation data to state-of-the-art data assimilation products (e.g. reanalysis) to paleoclimate records from tree rings and corals.
            </p>
          </div>
            <div class="learn-more-link">
            <router-link>LEARN MORE ></router-link>
            </div>
          </div>
        </div>
        <div class="picture-section">
          <div class="image-container">
            <img src="@/assets/dataConfidence4.png" alt="20CRv2c" />
          </div>
        </div>
      </div>
      </div>
      <div class="two-module">
        <div class="module-left">
          <div class="module-picture">
            <router-link to="/data-summary">
              <img src="@/assets/two.png" alt="Data Summary" />
            </router-link>
          </div>
          <div class="module-title">
              <router-link to="/data-summary">
                <h2>Data Summary</h2>
              </router-link>
          </div>
          <div class="module-description">
            <p>We seek climate and data scientists who want to break information silos and build collective wisdom about climate data and its applications.</p>
          </div>
        </div>
        <div class="module-right">
          <div class="module-picture">
            <router-link to="/data-summary">
              <img src="@/assets/two.png" alt="Data Summary" />
            </router-link>
          </div>
          <div class="module-title">
              <router-link to="/data-summary">
                <h2>Data Summary</h2>
              </router-link>
          </div>
          <div class="module-description">
            <p>We seek climate and data scientists who want to break information silos and build collective wisdom about climate data and its applications.</p>
          </div>
        </div>
      </div>
    <TwoModule :leftTitle="'D'" >
    </TwoModule>
    <ThreeModule/>
  </div>
</template>

<script>

import TwoModule from "@/components/TwoModule.vue";
import ThreeModule from "@/components/ThreeModule.vue";

export default {
  name: 'HomePage',
  components: {ThreeModule, TwoModule}
}
</script>

<style scoped>
.home {
  background-color: #dbe2e9;;
  padding: 0 0 20px 0;
}
.hero {
  position: relative;
  text-align: left;
  color: white;
  overflow: hidden;
}

.hero img {
  width: 100%;
  height: auto;
  display: block;
}

.hero-text {
  position: absolute;
  top: 60%;
  left: 2%;
  width: 60%;
  transform: translateY(-50%);
  text-align: left;
}

.hero h2 {
  font-size: 3rem;
  font-weight: bold;
  margin-bottom: 1rem;
  text-transform: uppercase;
}

.hero button {
  padding: 1rem 2rem;
  background-color: transparent;
  border: 2px solid white;
  color: white;
  font-size: 1rem;
  cursor: pointer;
  text-transform: uppercase;
  font-weight: bold;
  transition: background-color 0.3s, color 0.3s;
}

.hero button:hover {
  background-color: rgba(255, 255, 255, 0.25);

}


.quote-section {
  margin-bottom: 1rem;
  padding-left: 20px;
  border-left: 2px solid #1a658f;
}

.quote {
  font-size: 2rem;
  font-weight: bold;
  color: #1a658f;
  font-style: italic;
  line-height: 1.3;

}

.author {
  line-height: 1.875rem;
  font-size: .875rem;
  font-weight: 100;
  margin-bottom: 1.875rem;
  color: #3a5765;
}

.welcome-section {
  margin-bottom: 20px;
  font-size: 1.25rem;
  line-height: 1.875rem;
  color: rgb(46, 60, 75);
}

.highlight {
  color: #1a658f;
  font-weight: bold;
}

.description {
  font-size: 1em;
  color: rgb(46, 60, 75);
}


.image-container {
  text-align: center;
}

.image-container img {
  max-width: 100%;
  height: auto;
}
.content {
  width: 98%;
  position: relative;
  left: 1%;
  display: flex;
  flex-direction: column;
  background-color: white;
  margin:40px 0;
}
.word-picture-container{
  display: flex;
  flex-direction: row;
}
.word-section{
  flex:0.5;
}
.word-block{
  margin: 4rem;
}
.picture-section{
  flex:0.5;
}

.learn-more-link a {
  color: #1a658f;
  font-size: 1.1rem;
  font-weight: bold;
  text-decoration: none;
  transition: color 0.3s;
}

.learn-more-link a:hover {
  color: #3a5765;
}


.two-module {
  display: flex;
  flex-direction: row;
  margin-top: 7rem;
  margin-bottom: 7rem;
}

.module-left {
  text-align: center;
  width: 47%;
  margin-right: 2%;
  margin-left: 1%;
}

.module-right {
  text-align: center;
  width: 47%;
  margin-right: 1%;
  margin-left: 2%;
}


.module-title a{
  text-align: left;
  font-size: 1.5rem;
  line-height: 3rem;
  font-weight: 700;
  text-decoration: none;
  color: black;

}
.module-description {

  text-align: left;
  margin-bottom: 1.875rem;
  font-size: 1.25rem;
  line-height: 1.875rem;
  color: rgb(46, 60, 75);
}

.module-picture {
  object-fit: cover;
  width: 100%;
  height: 20rem;
  margin-bottom: 1rem;
}

.module-picture img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
</style>
