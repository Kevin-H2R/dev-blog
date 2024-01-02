<template>
  <v-hover v-slot="{ hover }">
    <v-card class="project" hover width="400">
    <v-card-title class="project__title flex justify-center">
      {{ title }}
      <v-expand-transition>
        <div
          v-if="hover"
          class="d-flex flex-column transition-fast-in-fast-out
            grey darken-3 v-card--reveal text-h3"
          style="height: 100%;"
        >
          <v-progress-circular :size="200" :width="15" :rotate="-90" color="white"
             :value="progress">
            {{ progress }}%
          </v-progress-circular>
          <div v-if="no_preview" class="text-caption">No preview yet</div>
        </div>
      </v-expand-transition>
    </v-card-title>
    <v-card-text class="pa-4">{{ description }}</v-card-text>
    <v-card-actions class="chips">
      <v-chip v-for="(tech, index) in techs" :key="'tech_' + index" :color="tech.color" dark>
        <v-icon start>{{ tech.icon }}</v-icon>
        {{ tech.name }}
      </v-chip>
    </v-card-actions>
  </v-card>
  </v-hover>
</template>
<script>
export default {
  name: 'UniqueProject',
  props: {
    title: {
      type: String,
      required: true
    },
    description: {
      type: String,
    },
    progress: {
      type: Number,
      default: 0
    },
    no_preview: {
      type: Boolean,
      default: false
    },
    techs: {
      type: Array,
      default: () => []
    }
  }
}
</script>
<style lang="scss" scoped>
@import "@/styles/theme.scss";
.project {
  &__title {
    font-size: 4em;
    background: $black;
    color: $white;
    position: relative;
    height: 300px;
    text-align: center;
  }
}
.v-card--reveal {
  align-items: center;
  bottom: 0;
  justify-content: center;
  opacity: 0.98;
  position: absolute;
  width: 100%;
  right: 0;
  background: $orange;
  }

.chips {
  display: flex;
  gap: 5px;
  flex-wrap: wrap;
}

.project-progress {
  color: $dark-blue;
}
</style>