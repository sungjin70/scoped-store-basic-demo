<template>
  <div class="hello">
    <h3>HelloWorldPageStore.vue</h3>
    <p>
      The message that you see below is shared using a @PageStore decorator.
      <br />
      The message will not persist if you leave this page.
    </p>
    <h2>{{ hellowWorld }}</h2>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import { PageStore } from 'vue-scoped-store';

@Component
export default class extends Vue {
  @PageStore()
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
