<template>
  <div class="hello">
    <h3>HelloWorldGlobalStore.vue</h3>
    <p>
      The message that you see below is shared using a @GlobalStore decorator.
      <br />
      The message will persist even if you navigate other pages around.
    </p>
    <h2>{{ hellowWorld }}</h2>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import { GlobalStore } from 'vue-scoped-store';

@Component
export default class extends Vue {
  @GlobalStore()
  private hellowWorld = '';
}
</script>

<style scoped>
.hello {
border:1px solid black;
background: #c2dacf;
margin: 15px;
padding: 10px;
}

</style>
