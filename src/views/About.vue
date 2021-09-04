<template>
  <div class="about">
    <h2>This is an about page</h2>
    <p>
This is exactly what you input on the first page.
    </p>
    <h3 class="hello-world">{{ hellowWorld }}</h3>

  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import { GlobalStore } from 'vue-scoped-store';

@Component
export default class Home extends Vue {
  @GlobalStore()
  private hellowWorld = '';  

}
</script>

<style scoped>
.hello-world {
  background: greenyellow;
  padding: 10px;
}
</style>