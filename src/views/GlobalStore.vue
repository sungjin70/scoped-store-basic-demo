<template>
  <div class="home">
    <h2>Welcome to the Scoped Store!</h2>
    <input v-model="hellowWorld" style="width:350px" />
    <br />
    <HelloWorldGlobalStore />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import HelloWorldGlobalStore from '@/components/HelloWorldGlobalStore.vue';
import { GlobalStore } from 'vue-scoped-store';

@Component({
  components: {
    HelloWorldGlobalStore,
  },
})
export default class Home extends Vue {
  @GlobalStore()
  private hellowWorld = '';  
}
</script>
