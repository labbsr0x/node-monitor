<template>
  <div id="app" class="app level">
    <div class="level-item is-justify-content-center">
      <a
        @click="updateHash"
        class="button is-primary is-outlined"
        style="margin-top: 25%"
        >Update hash</a
      >
    </div>
  </div>
</template>

<script>
import NodeMonitor from '@labbsr0x/node-monitor'

export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
  created() {
    const monitor = new NodeMonitor()
    console.log(monitor)
  },
  methods: {
    async updateHash() {
      const url = new URL(window.location);
      url.hash = Math.random()
        .toString(36)
        .replace(/[^a-z]+/g, "")
        .substr(0, 5);
      window.history.pushState({}, "Teste Vue", url);
    },
  },
}
</script>

