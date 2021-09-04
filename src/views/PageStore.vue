<template>
  <div class="home">
    <h2>Welcome to the Scoped Store!</h2>
    <input v-model="hellowWorld" style="width:350px" />
    <br />
    <HelloWorldPageStore />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import HelloWorldPageStore from '@/components/HelloWorldPageStore.vue'; // @ is an alias to /src
import { PageStore, AsPage } from 'vue-scoped-store';

@Component({
  components: {
    HelloWorldPageStore,
  },
})
export default class Home extends Vue {
  @PageStore()
  private hellowWorld = '';

  @AsPage()
  private isPage = true;

  created() : void {
    this.hellowWorld = 'Default message';
  }
}
</script>
