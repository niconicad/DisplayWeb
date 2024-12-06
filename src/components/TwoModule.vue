<template>
      <div class="two-module">
        <div class="module-left">
          <div class="module-picture">
            <router-link to="/data-summary">
              <img :src="leftPictureResolved" :alt="leftTitle" />
            </router-link>
          </div>
          <div class="module-title">
              <router-link to="/data-summary">
                <h2>{{leftTitle}}</h2>
              </router-link>
          </div>
          <div class="module-description">
            <p>{{leftDescription}}</p>
          </div>
        </div>
        <div class="module-right">
          <div class="module-picture">
            <router-link to="/data-summary">
              <img :src="rightPictureResolved" :alt="rightTitle" />
            </router-link>
          </div>
          <div class="module-title">
              <router-link to="/data-summary">
                <h2>{{ rightTitle }}</h2>
              </router-link>
          </div>
          <div class="module-description">
            <p>{{ rightDescription }}</p>
          </div>
        </div>
      </div>
</template>

<script>
export default {
  name: "TwoModule",
  props: {
    leftTitle: {
      type: String,
      default: "Data Summary"
    },
    leftDescription: {
      type: String,
      default: "We seek climate and data scientists who want to break information silos and build collective wisdom about climate data and its applications."
    },
    leftPicture: {
      type: String,
      default: "@/assets/two.png"
    },
    rightTitle: {
      type: String,
      default: "Data Summary"
    },
    rightDescription: {
      type: String,
      default: "We seek climate and data scientists who want to break information silos and build collective wisdom about climate data and its applications."
    },
    rightPicture: {
      type: String,
      default: "@/assets/two.png"
    }
  },
    computed: {
      leftPictureResolved() {
        return require(`@/assets/${this.leftPicture.split('/').pop()}`);
      },
      rightPictureResolved() {
        return require(`@/assets/${this.rightPicture.split('/').pop()}`);
      }
    }
}
</script>
<style scoped>


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