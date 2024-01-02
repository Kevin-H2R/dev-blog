<template>
  <v-container>
    <v-row justify="center" style="gap: 15px">
      <UniqueProject v-for="(project, index) in projects" 
        :key="'project_' + index" v-bind="project" />
    </v-row>
  </v-container>
</template>
<script>
import UniqueProject from '@/components/UniqueProject.vue';
import projects from '@/data/projects';
export default {
    name: 'ProjectView',
    components: { UniqueProject },
    data: function () {
      return {
        projects
      }
    }
}
</script>