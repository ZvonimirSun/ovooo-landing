export interface ServiceItem {
  title: string
  description: string
  to: string
  icon: string
  linkLabel: string
}

export const services: ServiceItem[] = [
  {
    title: 'OVOOO 工具集',
    description: '提供一些常用的在线工具和实用功能。',
    to: 'https://tools.ovooo.cc/',
    icon: 'i-lucide-wrench',
    linkLabel: '访问工具集',
  },
  {
    title: 'OVOOO AI',
    description: '提供 AI API 网关，将订阅转换成可调用的接口。',
    to: 'https://ai.ovooo.cc/',
    icon: 'i-lucide-sparkles',
    linkLabel: '访问 AI',
  },
  {
    title: 'OVOOO CDN',
    description: '提供静态资源访问、代理及内容分发相关服务。',
    to: 'https://cdn.ovooo.cc/',
    icon: 'i-lucide-cloud',
    linkLabel: '访问 CDN',
  },
  {
    title: 'OVOOO 统一登录',
    description: '为 OVOOO 相关服务提供统一身份认证和单点登录（SSO）。',
    to: 'https://sso.ovooo.cc/',
    icon: 'i-lucide-key-round',
    linkLabel: '前往登录',
  },
]
