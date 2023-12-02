<script lang="ts" setup>
import { useTheme } from "@/hooks/useTheme"

const { initTheme } = useTheme()

onMounted(() => {
  initTheme()
})

</script>
<template>
  <div class="layout">
    <Header></Header>
    <Main></Main>
    <Footer></Footer>
  </div>
</template>
<style lang="scss" scoped>
</style>
