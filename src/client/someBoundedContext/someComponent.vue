<script lang="ts">
  
  import Vue from 'vue';
  import Component from 'vue-class-component';
  import {widget} from './widget';

  @Component({components: {}})
  export default class SomeComponent extends Vue {
    private msg : string = 'Hello world!'

    mounted() {
        widget();
    }   
  }
</script>

<template>
  <div :class="$style.example">{{ msg }}</div>
</template>

<style module>
  .example {
    color: red;
  }
</style>