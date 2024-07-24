<template>
  <div class="blocks">
    <div class="block-left">
      <div class="block-image">
        <img :src="leftPictureResolved" alt="left-image">
      </div>
      <div class="block-title">
        <h2>{{ leftTitle }}</h2>
      </div>
      <div class="block-content">
        <p>{{ leftContent }}</p>
      </div>
    </div>

    <div class="block-middle">
      <div class="block-image">
        <img :src="middlePictureResolved" alt="middle-image">
      </div>
      <div class="block-title">
        <h2>{{ middleTitle }}</h2>
      </div>
      <div class="block-content">
        <p>{{ middleContent }}</p>
      </div>
    </div>

    <div class="block-right">
      <div class="block-image">
        <img :src="rightPictureResolved" alt="right-image">
      </div>
      <div class="block-title">
        <h2>{{ rightTitle }}</h2>
      </div>
      <div class="block-content">
        <p>{{ rightContent }}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ThreeModule',
  props: {
    leftImage: {
      type: String,
      default: '@/assets/three.png'
    },
    leftTitle: {
      type: String,
      default: 'Left Title'
    },
    leftContent: {
      type: String,
      default: 'Soil moisture, vegetation coverage, surface radiation budgets and more. See a carefully curated list of the most-used data sets, many of them discussed by experts.\n'
    },
    middleImage: {
      type: String,
      default: '@/assets/three.png'
    },
    middleTitle: {
      type: String,
      default: 'Middle Title'
    },
    middleContent: {
      type: String,
      default: 'Soil moisture, vegetation coverage, surface radiation budgets and more. See a carefully curated list of the most-used data sets, many of them discussed by experts.\n'
    },
    rightImage: {
      type: String,
      default: '@/assets/three.png'
    },
    rightTitle: {
      type: String,
      default: 'Right Title'
    },
    rightContent: {
      type: String,
      default: 'Soil moisture, vegetation coverage, surface radiation budgets and more. See a carefully curated list of the most-used data sets, many of them discussed by experts.\n'
    }
  },
  computed:{
    leftPictureResolved() {
        return require(`@/assets/${this.leftImage.split('/').pop()}`);
      },
    middlePictureResolved() {
        return require(`@/assets/${this.middleImage.split('/').pop()}`);
    },
    rightPictureResolved() {
        return require(`@/assets/${this.rightImage.split('/').pop()}`);
    }
  }
}
</script>

<style scoped>
.blocks {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 98%;
  margin: 3rem auto;
  min-height: 40rem;
}

.block-left {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  width: 30%;
  margin-right: 2%;
  border: 1px solid #ccc;
  background-color: #ffffff;
}

.block-middle {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  width: 30%;

  margin-right: 2%;
  margin-left: 2%;
  border: 1px solid #ccc;
  background-color: #ffffff;
}


.block-right {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  width: 30%;
  margin-left: 2%;
  border: 1px solid #ccc;
  background-color: #ffffff;
}

.block-image {
  width: 100%;

  margin-bottom: 1rem;
}

.block-image img {

  width: 100%;
  height: 100%;
  object-fit: contain;
}
.block-title {
  text-align: left;
  font-size: 1rem;
  line-height: 1.2rem;
  color: #1a658f;
  margin-left: 1.5rem;
  font-family: Arial, sans-serif;
}
.block-title h2 {
  margin-bottom: 0;
}
.block-content {
  text-align: left;
  font-size: 1rem;
  line-height: 1.2rem;
  color: rgba(51, 51, 51, 0.91);
  margin-left: 1.5rem;
  margin-right: 1.5rem;
  font-family: Arial, sans-serif;
  font-weight: 400;
}
</style>