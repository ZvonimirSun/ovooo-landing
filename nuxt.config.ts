export default defineNuxtConfig({
  modules: [
    '@nuxt/ui',
    '@nuxt/content',
    '@nuxt/eslint',
    '@nuxtjs/sitemap',
  ],

  devtools: {
    enabled: true,
  },

  app: {
    head: {
      htmlAttrs: {
        lang: 'zh-CN',
      },
    },
  },

  css: ['~/assets/css/main.css'],

  site: {
    url: 'https://ovooo.cc',
    name: 'OVOOO',
    trailingSlash: true,
  },

  runtimeConfig: {
    public: {
      url: 'https://ovooo.cc',
      title: 'OVOOO',
      description: 'OVOOO 提供在线工具、AI 网关、内容分发及统一身份认证等服务。',
      logo: '/logo.svg',
      image: '/logo.svg',
      contactEmail: '',
      favicon: {
        small: '/favicon.svg',
        medium: '/favicon.svg',
        appleTouchIcon: '/logo.svg',
      },
      footer: {
        since: 2026,
        copyright: 'OVOOO',
        beian: {
          enable: true,
          icp: '',
          gonganId: '',
          gonganNum: '',
        },
      },
    },
  },

  routeRules: {
    '/': { prerender: true },
    '/privacy': { prerender: true },
  },

  compatibilityDate: '2026-08-22',

  nitro: {
    prerender: {
      crawlLinks: false,
      routes: ['/', '/privacy'],
    },
  },

  eslint: {
    config: {
      standalone: false,
    },
  },

  fonts: {
    provider: 'local',
  },

  icon: {
    clientBundle: {
      scan: {
        globInclude: ['{app,shared}/**/*.{ts,vue}'],
      },
    },
  },

  sitemap: {
    xsl: false,
    zeroRuntime: true,
  },

  content: {
    experimental: {
      sqliteConnector: 'native',
    },
  },
})
