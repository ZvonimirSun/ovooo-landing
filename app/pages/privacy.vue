<script setup lang="ts">
import raw from '../../content/privacy.md?raw'

const { contactEmail } = usePublicConfig()
const page = parseFrontmatter(raw)

definePageMeta({
  title: '隐私权政策',
  description: 'OVOOO 统一身份认证服务隐私权政策，包括第三方 OAuth 登录、SSO 单点登录、个人信息收集、使用、存储和用户权利等说明。',
})

useSeoMeta({
  title: page.title || '隐私权政策',
  description: page.description,
  ogTitle: page.title || '隐私权政策',
  ogDescription: page.description,
})
</script>

<template>
  <UContainer class="py-10 sm:py-16">
    <article>
      <UPageHeader
        :title="page.title"
        :ui="{
          root: 'border-0 pb-0',
        }"
      >
        <template v-if="page.updated" #headline>
          <span class="text-sm text-muted">
            最后更新日期：{{ page.updated }}
          </span>
        </template>
      </UPageHeader>

      <USeparator class="my-8" />

      <MDC :value="page.body" class="privacy-prose" />

      <p v-if="contactEmail" class="mt-8 text-muted">
        联系邮箱：
        <ULink :to="`mailto:${contactEmail}`">
          {{ contactEmail }}
        </ULink>
      </p>
    </article>
  </UContainer>
</template>

<style scoped>
.privacy-prose :deep(h2) {
  margin-top: 2.25rem;
  margin-bottom: 0.75rem;
  font-size: 1.25rem;
  font-weight: 600;
  color: var(--ui-text-highlighted);
}

.privacy-prose :deep(h3) {
  margin-top: 1.5rem;
  margin-bottom: 0.5rem;
  font-size: 1.05rem;
  font-weight: 600;
  color: var(--ui-text-highlighted);
}

.privacy-prose :deep(p),
.privacy-prose :deep(ul) {
  margin: 0.75rem 0;
  color: var(--ui-text-muted);
  line-height: 1.75;
}

.privacy-prose :deep(li) {
  margin: 0.35rem 0;
}

.privacy-prose :deep(code) {
  padding: 0.125rem 0.375rem;
  border-radius: 0.375rem;
  background: var(--ui-bg-elevated);
  font-size: 0.9em;
}
</style>
