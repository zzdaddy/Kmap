<template>
  <div class="home">
    <h2>思维导图</h2>
    <div>重构自某位 <a href="https://github.com/RockyRen/mindmaptree">不知名大佬</a>, 核心渲染方式已经重写, 并且增加了树状导图</div>
    <div><a href="https://github.com/Heathennn/Kmap#%E5%AF%BC%E5%9B%BE">Docs</a></div>
    <Map></Map>
  </div>
</template>

<script>
// @ is an alias to /src
import Map from '@/components/map2/index'
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'home',
  components: {
    HelloWorld,
    Map
  }
}
</script>
