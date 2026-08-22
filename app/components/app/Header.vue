<script setup lang="ts">
const items = [
  { label: '服务', to: '/#services' },
  { label: '隐私权政策', to: '/privacy' },
]
</script>

<template>
  <UHeader>
    <template #left>
      <NuxtLink to="/" class="rounded-md p-1 -ms-1 focus-visible:outline-3 outline-primary/25">
        <BrandLogo />
      </NuxtLink>
    </template>

    <UNavigationMenu :items="items" variant="link" />

    <template #right>
      <UColorModeButton />
    </template>

    <template #body>
      <UNavigationMenu :items="items" orientation="vertical" class="-mx-2.5" />
    </template>
  </UHeader>
</template>
