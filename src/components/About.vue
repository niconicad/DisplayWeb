<template>
  <div class="about-page">
    <div class="page-content">
      <h1>About</h1>
      <p>The cryosphere is a term which collectively describes the portions of the Earth's surface where water is in solid form, including sea ice, lake ice, river ice, snow cover, glaciers, ice caps and ice sheets, and frozen ground (which includes permafrost).</p>

      <div class="sections">
        <SectionCard
          v-for="section in sections"
          :key="section.title"
          :title="section.title"
          :content="section.content"
        />
      </div>
    </div><!-- page-content -->
    <p>This website is a project for the course "Introduction to Cryosphere Science" at the University of California, Berkeley.</p>
    <SideBar class="sidebar" />
  </div>
</template>

<script>
import SectionCard from './SectionCard.vue';
import SideBar from "./SideBar.vue";
export default {
  name: 'AboutPage',
  components: {
    SideBar,
    SectionCard
  },
  data() {
    return {
      sections: [
        {
          title: 'Sea Ice',
          content: 'Sea ice is frozen ocean water. It forms, grows, and melts in the ocean.'
        },
        {
          title: 'Snow Cover',
          content: 'Snow cover refers to the area of land covered by snow at any given time.'
        },
        {
          title: 'Glaciers',
          content: 'Glaciers are persistent bodies of dense ice that are constantly moving under their own weight.'
        },
        // 添加更多部分
      ]
    };
  }
};
</script>

<style scoped>
.about-page {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 98%;
  margin: 3rem auto;
}


.sections {
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.sidebar {
  width: 29%;
  margin-left: 1%;
  margin-top: 2.5rem;
}
.page-content {
  width: 69%;
  margin-right: 1%;
}

h1 {
  font-size: 3rem;
  font-weight: 600;
  margin-top: 2rem;
  margin-bottom: 2rem;
}

p {
  font-size: 1.2rem;
  line-height: 1.5;
  margin-bottom: 2rem;
  color: #333;
}
</style>
