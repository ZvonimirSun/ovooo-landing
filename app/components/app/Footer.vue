<script setup lang="ts">
const { footer: { beian, since, copyright } } = usePublicConfig()

const year = new Date().getFullYear()
const displayYear = since && Number(since) !== year ? `${since} - ${year}` : String(year)

const links = [
  { label: '首页', to: '/' },
  { label: '隐私权政策', to: '/privacy' },
  { label: '统一登录', to: 'https://sso.ovooo.cc/', target: '_blank' as const },
]
</script>

<template>
  <UFooter
    :ui="{
      container: 'border-t border-default lg:py-8',
    }"
  >
    <template #left>
      <nav class="flex flex-wrap items-center gap-x-5 gap-y-2 text-sm" aria-label="相关链接">
        <ULink
          v-for="link in links"
          :key="link.label"
          :to="link.to"
          :target="link.target"
          class="text-muted hover:text-highlighted"
        >
          {{ link.label }}
        </ULink>
      </nav>
    </template>

    <template #right>
      <div class="flex flex-col items-start gap-1 text-sm text-muted lg:items-end">
        <p>
          Copyright © {{ displayYear }}
          <span v-if="copyright">{{ copyright }}</span>
        </p>
        <template v-if="beian?.enable">
          <ULink
            v-if="beian.icp"
            to="https://beian.miit.gov.cn/#/Integrated/recordQuery"
            target="_blank"
            class="text-muted hover:text-highlighted"
          >
            {{ beian.icp }}
          </ULink>
          <div
            v-if="beian.gonganNum"
            class="flex items-center gap-2 whitespace-nowrap"
          >
            <img class="w-4" src="~/assets/images/beian.png" alt="公安备案">
            <ULink
              :to="`https://beian.mps.gov.cn/#/query/webSearch?code=${beian.gonganId}`"
              target="_blank"
              class="text-muted hover:text-highlighted"
            >
              {{ beian.gonganNum }}
            </ULink>
          </div>
        </template>
      </div>
    </template>
  </UFooter>
</template>
