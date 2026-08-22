<script setup lang="ts">
import type { NuxtError } from '#app'
import { zh_cn } from '@nuxt/ui/locale'

const props = defineProps<{
  error: NuxtError
}>()

const isNotFound = computed(() => props.error.statusCode === 404)
const title = computed(() => isNotFound.value ? '页面不存在' : '出现了一点问题')
const description = computed(() => {
  if (isNotFound.value) {
    return '你访问的页面不存在，可能已被移动、删除或地址输入有误。'
  }
  return props.error.statusMessage || '请稍后重试。'
})

useSeoMeta({
  title,
  description,
})

useHead({
  htmlAttrs: {
    lang: zh_cn.code,
    dir: zh_cn.dir,
  },
})
</script>

<template>
  <UApp :locale="zh_cn">
    <AppHeader />
    <UMain>
      <UContainer class="py-24">
        <UError
          :error="{
            statusCode: error.statusCode,
            statusMessage: title,
            message: description,
          }"
          redirect="/"
          :clear="{
            label: '返回首页',
          }"
        />
      </UContainer>
    </UMain>
    <AppFooter />
  </UApp>
</template>
