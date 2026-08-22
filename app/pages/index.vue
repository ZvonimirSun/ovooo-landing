<script setup lang="ts">
import { services } from '~/data/services'

const { title, description } = usePublicConfig()

definePageMeta({
  title: 'OVOOO',
  description: 'OVOOO 提供在线工具、AI 网关、内容分发及统一身份认证等服务。',
})

useSeoMeta({
  title,
  description,
  ogTitle: title,
  ogDescription: description,
})
</script>

<template>
  <div>
    <UPageHero
      title="OVOOO"
      description="OVOOO 提供一些自托管的在线服务与工具，包括在线工具集、AI 网关、内容分发服务以及统一身份认证服务。"
      :ui="{
        container: 'lg:py-24',
        title: 'sm:text-6xl lg:text-7xl tracking-tight',
        description: 'max-w-2xl',
        wrapper: 'items-start text-left',
      }"
    />

    <UPageSection
      id="services"
      title="服务"
      :ui="{
        root: 'scroll-mt-(--ui-header-height) pt-0',
      }"
    >
      <div class="overflow-hidden rounded-2xl border border-default">
        <div class="grid grid-cols-1 gap-px bg-muted sm:grid-cols-2">
          <UPageCard
            v-for="service in services"
            :key="service.title"
            :icon="service.icon"
            :title="service.title"
            :description="service.description"
            :to="service.to"
            target="_blank"
            class="rounded-none"
            :ui="{
              leading: 'mb-4 flex size-10 items-center justify-center rounded-lg bg-primary/10 ring-0',
              leadingIcon: 'size-5 text-primary',
              title: 'text-base',
              description: 'text-sm text-muted',
            }"
          >
            <template #footer>
              <span class="text-sm font-medium text-primary">
                {{ service.linkLabel }} →
              </span>
            </template>
          </UPageCard>
        </div>
      </div>
    </UPageSection>

    <UPageSection title="统一身份认证">
      <UPageCard
        variant="subtle"
        :ui="{
          description: 'text-sm sm:text-base text-muted',
        }"
      >
        <div class="flex flex-col gap-4 text-sm sm:text-base text-muted leading-relaxed">
          <p>
            OVOOO 的部分服务使用统一身份认证系统管理用户账户，用户可以使用同一账户访问已接入的相关服务。目前 AI 与工具集已接入统一登录；CDN 为独立的 Nginx 反代服务，不走统一登录。
          </p>
          <p>
            统一身份认证服务支持通过 Google、GitHub、Linux DO 等第三方身份提供商进行登录。
          </p>
          <p>
            使用第三方账号登录时，我们仅使用完成身份认证、账户创建、账户关联和单点登录所必要的基础账户信息。具体的信息处理方式请参阅
            <ULink to="/privacy">
              隐私权政策
            </ULink>。
          </p>
        </div>
      </UPageCard>
    </UPageSection>
  </div>
</template>
