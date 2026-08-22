<script setup lang="ts">
import { zh_cn } from '@nuxt/ui/locale'

const colorMode = useColorMode()
const route = useRoute()
const { url, title, description, image, favicon } = usePublicConfig()

const color = computed(() => colorMode.value === 'dark' ? '#18181b' : '#ffffff')
const pageTitle = computed(() => {
  const current = route.meta.title as string | undefined
  return current && current !== title ? `${current} · ${title}` : title
})
const pageDescription = computed(() => {
  return (route.meta.description as string | undefined) || description
})
const fullPath = computed(() => {
  const path = route.path.endsWith('/') || route.path === '/' ? route.path : `${route.path}/`
  return `${url}${path}`
})
const ogImage = computed(() => image ? `${url}${image}` : undefined)
const links = computed(() => [
  { rel: 'canonical' as const, href: fullPath.value },
  ...(favicon.small
    ? [{ rel: 'icon' as const, type: 'image/svg+xml', href: favicon.small }]
    : []),
  ...(favicon.medium
    ? [{ rel: 'icon' as const, type: 'image/svg+xml', href: favicon.medium }]
    : []),
  ...(favicon.appleTouchIcon
    ? [{ rel: 'apple-touch-icon' as const, sizes: '180x180', href: favicon.appleTouchIcon }]
    : []),
])

useHead({
  meta: [
    { charset: 'utf-8' },
    { name: 'viewport', content: 'width=device-width, initial-scale=1' },
    { key: 'theme-color', name: 'theme-color', content: color },
  ],
  link: links,
  htmlAttrs: {
    lang: zh_cn.code,
    dir: zh_cn.dir,
  },
})

useSeoMeta({
  title: pageTitle,
  description: pageDescription,
  ogTitle: pageTitle,
  ogDescription: pageDescription,
  ogUrl: fullPath,
  ogImage,
  twitterCard: 'summary',
})
</script>

<template>
  <UApp :locale="zh_cn">
    <AppHeader />
    <UMain>
      <NuxtPage />
    </UMain>
    <AppFooter />
  </UApp>
</template>
