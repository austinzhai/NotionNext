/**
 * 另一个落地页主题
 */
const CONFIG = {
  // 默认只展示Logo文字，如果设置了logo图片，会在文字左侧显示图标
  STARTER_LOGO: '', // 普通logo图片 示例：/images/starter/logo/logo.svg
  STARTER_LOGO_WHITE: '', // 透明底浅色logo 示例： /images/starter/logo/logo-white.svg

  // MENU ， 菜单部分不在此处配置，请在Notion数据库中添加MENU

  // 英雄区块导航
  STARTER_HERO_ENABLE: true, // 开启英雄区
  STARTER_HERO_TITLE_1: '制原MyAPS智能排程解决方案', // 英雄区文字
  STARTER_HERO_TITLE_2: '破解“高库存”与“低交付”困境，打造精益供应链', // 英雄区文字
  // 英雄区两个按钮，如果TEXT留空则隐藏按钮
  STARTER_HERO_BUTTON_1_TEXT: '软件试用', // 英雄区按钮
  STARTER_HERO_BUTTON_1_URL:
    'https://inv.originflow.cn/article/free', // 英雄区按钮
  STARTER_HERO_BUTTON_2_TEXT: '精益咨询', // 英雄区按钮
  STARTER_HERO_BUTTON_2_URL: 'https://www.originflow.cn/service/consulting', // 英雄区按钮
  STARTER_HERO_BUTTON_2_ICON: '', // 英雄区按钮2的图标，不需要则留空

  // 英雄区配图，如需隐藏，改为空值即可 ''
  STARTER_HERO_PREVIEW_IMAGE: '/images/starter/hero/myaps-frontpage.png', // 产品预览图 ，默认读取public目录下图片
  STARTER_HERO_BANNER_IMAGE: '', // hero区下方的全宽图

  // 顶部右侧导航暗流
  STARTER_NAV_BUTTON_1_TEXT: 'Sign In',
  STARTER_NAV_BUTTON_1_URL: '/sign-in',

  STARTER_NAV_BUTTON_2_TEXT: 'Sign Up',
  STARTER_NAV_BUTTON_2_URL: '/sign-up',

  // 特性区块
  STARTER_FEATURE_ENABLE: true, // 特性区块开关
  STARTER_FEATURE_TITLE: '特性', // 特性
  STARTER_FEATURE_TEXT_1: '我们解决方案的主要特性', // 特性
  STARTER_FEATURE_TEXT_2:
    'Originflow的愿景是帮助您低成本的、快速的、系统的、持续有效的降低库存、快速交付。 ', // 特性

  STARTER_FEATURE_1_TITLE_1: '德系智造', // 特性1
  STARTER_FEATURE_1_TEXT_1: '方法论源自保时捷咨询 + 方案结合精益快速见效 + 数字化扩展能力', // 特性1
  STARTER_FEATURE_1_BUTTON_TEXT: '了解更多', // 特性1
  STARTER_FEATURE_1_BUTTON_URL: 'https://www.originflow.cn/service/workshop', // 特性1

  STARTER_FEATURE_2_TITLE_1: '实战专家', // 特性2
  STARTER_FEATURE_2_TEXT_1: '开发团队源自德国西门子，SAP咨询顾问', // 特性2
  STARTER_FEATURE_2_BUTTON_TEXT: '了解更多', // 特性2
  STARTER_FEATURE_2_BUTTON_URL:
    'https://www.originflow.cn/contact/team', // 特性2

  STARTER_FEATURE_3_TITLE_1: '敏捷迭代', // 特性3
  STARTER_FEATURE_3_TEXT_1: '结合数据集成、低代码平台，有持续改善能力', // 特性3
  STARTER_FEATURE_3_BUTTON_TEXT: '了解更多', // 特性3
  STARTER_FEATURE_3_BUTTON_URL: 'https://www.originflow.cn/service/myaps', // 特性3

  STARTER_FEATURE_4_TITLE_1: '无忧体验', // 特性4
  STARTER_FEATURE_4_TEXT_1: '支持免费试用，从试用到合作，全程最大化降低您的风险，省心可靠', // 特性4
  STARTER_FEATURE_4_BUTTON_TEXT: '了解更多', // 特性4
  STARTER_FEATURE_4_BUTTON_URL: 'https://inv.originflow.cn/article/free', // 特性4

  // 首页ABOUT区块
  STARTER_ABOUT_ENABLE: true, // ABOUT区块开关
  STARTER_ABOUT_TITLE: '更少库存，更快交付。MyAPS：数据驱动的高效履约系统',
  STARTER_ABOUT_TEXT:
    '困于高库存与低交付率的两难境地？Originflow为您破局。 <br /> <br /> 我们凭借强大的MyAPS与精准数据洞察，提供一套快速见效、持续优化的解决方案，系统化保障低成本与准时交付。',
  STARTER_ABOUT_BUTTON_TEXT: '了解更多',
  STARTER_ABOUT_BUTTON_URL: 'https://inv.originflow.cn/article/service',
  STARTER_ABOUT_IMAGE_1: '/images/starter/about/about-image-01.jpg',
  STARTER_ABOUT_IMAGE_2: '/images/starter/about/about-image-02.jpg',
  STARTER_ABOUT_TIPS_1: '30+',
  STARTER_ABOUT_TIPS_2: '客户验证',
  STARTER_ABOUT_TIPS_3: '正在线上运行',

  // 首页价格区块
  STARTER_PRICING_ENABLE: true, // 价格区块开关
  STARTER_PRICING_TITLE: '价格表',
  STARTER_PRICING_TEXT_1: '很棒的定价计划',
  STARTER_PRICING_TEXT_2:
    '我们制定了灵活的付费模式，您可以按需选择。（ABC-XYZ在线库存分析工具和MyAPS试用免费！）',

  STARTER_PRICING_1_TITLE: '试用版',
  STARTER_PRICING_1_PRICE: '0',
  STARTER_PRICING_1_PRICE_CURRENCY: '¥',
  STARTER_PRICING_1_PRICE_PERIOD: '每月',
  STARTER_PRICING_1_HEADER: '功能点',
  STARTER_PRICING_1_FEATURES: '库存在线分析,MyAPS试用,帮助手册,在线研讨会支持', // 英文逗号隔开
  STARTER_PRICING_1_BUTTON_TEXT: '立即试用',
  STARTER_PRICING_1_BUTTON_URL:
    'https://inv.originflow.cn/article/free',

  STARTER_PRICING_2_TAG: '推荐',
  STARTER_PRICING_2_TITLE: 'SaaS版',
  STARTER_PRICING_2_PRICE: '2,500',
  STARTER_PRICING_2_PRICE_CURRENCY: '¥',
  STARTER_PRICING_2_PRICE_PERIOD: '每月',
  STARTER_PRICING_2_HEADER: '功能点',
  STARTER_PRICING_2_FEATURES: '包含ERP数据集成,MyAPS SaaS版,现场实施,年度维护', // 英文逗号隔开
  STARTER_PRICING_2_BUTTON_TEXT: '立即订购',
  STARTER_PRICING_2_BUTTON_URL:
    'https://inv.originflow.cn/article/price-saas',

  STARTER_PRICING_3_TITLE: '定制项目',
  STARTER_PRICING_3_PRICE: '待定',
  STARTER_PRICING_3_PRICE_CURRENCY: '¥',
  STARTER_PRICING_3_PRICE_PERIOD: '每月',
  STARTER_PRICING_3_HEADER: '功能点',
  STARTER_PRICING_3_FEATURES: '包含ERP数据集成,MyAPS专业版,精益快赢项目,绩效对赌，年度维护', // 英文逗号隔开
  STARTER_PRICING_3_BUTTON_TEXT: '联系我们',
  STARTER_PRICING_3_BUTTON_URL:
    'https://inv.originflow.cn/article/price-project',

  // 首页用户测评区块
  STARTER_TESTIMONIALS_ENABLE: true, // 测评区块开关
  STARTER_TESTIMONIALS_TITLE: '用户反馈',
  STARTER_TESTIMONIALS_TEXT_1: '我们的用户怎么说',
  STARTER_TESTIMONIALS_TEXT_2:
    '超过30多个工厂,通过使用我们的数字化服务、交流社群以及技术咨询，成功的降低了库存，缩短生产周期，改善了交付效率',
  STARTER_TESTIMONIALS_STAR_ICON: '/images/starter/testimonials/icon-star.svg', // 评分图标

  // 这里不支持CONFIG和环境变量，需要一一修改此处代码。
  STARTER_TESTIMONIALS_ITEMS: [
    {
      STARTER_TESTIMONIALS_ITEM_TEXT:
        '卓越运营OPEX-1588的方法论和工具非常简明有效，员工容易掌握并且立刻着手改善，是培养员工改善技能的利器！ ',
      STARTER_TESTIMONIALS_ITEM_AVATAR:
        'https://www.notion.so/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2F22de3fcb-d90d-4271-bc01-f815f476122b%2F4FE0A0C0-E487-4C74-BF8E-6F01A27461B8-14186-000008094BC289A6.jpg?table=collection&id=a320a2cc-6ebe-4a8d-95cc-ea94e63bced9&width=200',
      STARTER_TESTIMONIALS_ITEM_NICKNAME: 'Gregor',
      STARTER_TESTIMONIALS_ITEM_DESCRIPTION: 'Festo 卓越运营总监',
      STARTER_TESTIMONIALS_ITEM_URL: 'https://blog.gaoran.xyz/'
    },
    {
      STARTER_TESTIMONIALS_ITEM_TEXT:
        '我对A3问题解决的方法印象深刻，尤其是第2步设定目标，这个目标通常是要提升30%（+效率提升30%，库存降低30%），通过结构化的A3问题解决工具，我们欣赏的看到真的能在第6步达成目标',
      STARTER_TESTIMONIALS_ITEM_AVATAR:
        'https://www.notion.so/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2F0d33d169-f932-41ff-ac6b-88a923c08e02%2F%25E5%25A4%25B4%25E5%2583%258F.jfif?table=collection&id=7787658d-d5c0-4f34-8e32-60c523dfaba3&width=400',
      STARTER_TESTIMONIALS_ITEM_NICKNAME: 'Jenny Wu',
      STARTER_TESTIMONIALS_ITEM_DESCRIPTION: '英格索兰 供应链总监',
      STARTER_TESTIMONIALS_ITEM_URL: 'https://asenkits.top/'
    },
    {
      STARTER_TESTIMONIALS_ITEM_TEXT:
        'OPEX-1588方法深入浅出，使身在制造业一线的员工也可以轻松学会结构化解决问题。感谢谢恩，带领森科团队在精益的道路上持续改善，更进一步 ',
      STARTER_TESTIMONIALS_ITEM_AVATAR:
        'https://www.notion.so/image/https%3A%2F%2Fprod-files-secure.s3.us-west-2.amazonaws.com%2F6c096b44-beb9-48ee-8f92-1efdde47f3a3%2F338962f1-d352-49c7-9a1b-746e35a7005c%2Fhf.png?table=block&id=ce5a48a9-d77a-4843-a3d9-a78cd4f794ce&spaceId=6c096b44-beb9-48ee-8f92-1efdde47f3a3&width=100&userId=27074aef-7216-41ed-baef-d9b53addd870&cache=v2',
      STARTER_TESTIMONIALS_ITEM_NICKNAME: 'Amanda Liu',
      STARTER_TESTIMONIALS_ITEM_DESCRIPTION: '深圳 森科 COO',
      STARTER_TESTIMONIALS_ITEM_URL: 'https://www.dwind.top/'
    },
    {
      STARTER_TESTIMONIALS_ITEM_TEXT:
        'MyAPS便宜且功能强大，我们使用下来能很好的解决当前企业排程问题，物料齐套功能是解决当前企业高库存问题的答案',
      STARTER_TESTIMONIALS_ITEM_AVATAR:
        'https://www.notion.so/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2Fd52f6766-3e32-4c3d-8529-46e1f214360f%2Ffavicon.svg?table=collection&id=7d76aad5-a2c4-4d9a-887c-c7913fae4eed&width=400',
      STARTER_TESTIMONIALS_ITEM_NICKNAME: '竺浩亮 ',
      STARTER_TESTIMONIALS_ITEM_DESCRIPTION: '麦肯锡顾问，阿尔法智联CEO',
      STARTER_TESTIMONIALS_ITEM_URL: 'https://blog.disheng.org/'
    },
    {
      STARTER_TESTIMONIALS_ITEM_TEXT:
        '通过精益数字化项目的实施，我们在三个月内将交付周期缩短了35%，数据驱动的决策文化正在组织中生根发芽。',
      STARTER_TESTIMONIALS_ITEM_AVATAR:
        'https://www.notion.so/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2Fafb21381-f51b-4fd0-9998-800dbeb64dbe%2Favatar.png?table=block&id=195935d2-0d8d-49fc-bd81-1db42ee50840&spaceId=6c096b44-beb9-48ee-8f92-1efdde47f3a3&width=100&userId=27074aef-7216-41ed-baef-d9b53addd870&cache=v2',
      STARTER_TESTIMONIALS_ITEM_NICKNAME: 'AnJhon',
      STARTER_TESTIMONIALS_ITEM_DESCRIPTION: 'Anjhon`s Blog 站长',
      STARTER_TESTIMONIALS_ITEM_URL: 'https://www.anjhon.top'
    },
    {
      STARTER_TESTIMONIALS_ITEM_TEXT: '从价值流映射到数字化看板，每一步都扎实有力。尤其让我们惊喜的是，系统还能自动识别瓶颈工序并推送改善建议，这超出了我们的预期',
      STARTER_TESTIMONIALS_ITEM_AVATAR:
        'https://www.notion.so/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2Fe4f391d7-7d65-4c05-a82c-c6e2c40f06e4%2Fa2a7641a26b367608c6ef28ce9b7e983_(2).png?table=block&id=a386eb0e-4c07-4b18-9ece-bba4e79ce21c&spaceId=6c096b44-beb9-48ee-8f92-1efdde47f3a3&width=100&userId=27074aef-7216-41ed-baef-d9b53addd870&cache=v2',
      STARTER_TESTIMONIALS_ITEM_NICKNAME: '张懿',
      STARTER_TESTIMONIALS_ITEM_DESCRIPTION: '某电缆COO',
      STARTER_TESTIMONIALS_ITEM_URL: 'https://www.lucenczz.top/'
    }
  ],

  //   FAQ 常见问题模块
  STARTER_FAQ_ENABLE: true, // 常见问题模块开关
  STARTER_FAQ_TITLE: '常见问题解答',
  STARTER_FAQ_TEXT_1: '有任何问题吗？请看这里',
  STARTER_FAQ_TEXT_2: '我们收集了常见的用户疑问',

  STARTER_FAQ_1_QUESTION: 'MyAPS有帮助文档吗？',
  STARTER_FAQ_1_ANSWER:
    '我们提供了<a href="https://inv.originflow.cn/article/free">帮助文档</a>，操作演示视频</a>，来协助您完成MyAPS软件的建模和试用',

  STARTER_FAQ_2_QUESTION: '你们如何实施项目？',
  STARTER_FAQ_2_ANSWER:
    '我们按照标准的德系管理咨询架构实施项目，并且采用数字化工具加速项目的实施，详情参考<a className="underline" href="https://www.originflow.cn/service/consulting">《帮助文档》</a>',

  STARTER_FAQ_3_QUESTION: '数据集成服务包含哪些内容？',
  STARTER_FAQ_3_ANSWER:
    '数据集成服务，详情参考<a className="underline" href="https://inv.originflow.cn/article/data-integration">《数据集成文档》</a>',
 
  STARTER_FAQ_4_QUESTION: '降低库存的方法论是什么？',
  STARTER_FAQ_4_ANSWER:
    '全面流动管理TFM的方法，通过工厂价值流、APS工具快速达成降低库存和改善交付，详情参考<a className="underline" href="https://www.originflow.cn/service/workshop">《帮助文档》</a>',

  // 团队成员区块
  STARTER_TEAM_ENABLE: true, // 团队成员区块开关
  STARTER_TEAM_TITLE: '团队成员',
  STARTER_TEAM_TEXT_1: '我们的开发者团队',
  STARTER_TEAM_TEXT_2:
    'Originflow 由精益咨询专家、供应链专家和IT专家组成，感谢每一位贡献者',

  // 这里不支持CONFIG和环境变量，需要一一修改此处代码。
  STARTER_TEAM_ITEMS: [
    {
      STARTER_TEAM_ITEM_AVATAR:
        '/images/starter/team/Wang Anhui.png',
      STARTER_TEAM_ITEM_NICKNAME: '王安辉',
      STARTER_TEAM_ITEM_DESCRIPTION: 'MyAPS架构师'
    },
    {
      STARTER_TEAM_ITEM_AVATAR: '/images/starter/team/Zhai Weidong.png',
      STARTER_TEAM_ITEM_NICKNAME: '翟卫东',
      STARTER_TEAM_ITEM_DESCRIPTION: '精益数字化顾问'
    },
    {
      STARTER_TEAM_ITEM_AVATAR: '/images/starter/team/Fu Zichao.png',
      STARTER_TEAM_ITEM_NICKNAME: '符子超',
      STARTER_TEAM_ITEM_DESCRIPTION: '架构师'
    },
    {
      STARTER_TEAM_ITEM_AVATAR: '/images/starter/team/Huang Anwu.png',
      STARTER_TEAM_ITEM_NICKNAME: '黄安武',
      STARTER_TEAM_ITEM_DESCRIPTION: '开发工程师'
    }
  ],

  // 博客文章区块
  STARTER_BLOG_ENABLE: true, // 首页博文区块开关
  STARTER_BLOG_TITLE: '我们的博客',
  STARTER_BLOG_COUNT: 3, // 首页博文区块默认展示前3篇文章
  STARTER_BLOG_TEXT_1: '最近的新闻',
  STARTER_BLOG_TEXT_2:
    '这里会发布一些关于精益和APS的最新动态，包括新的动向、新的未来计划，以及新功能的特性',

  // 联系模块
  STARTER_CONTACT_ENABLE: true, // 联系模块开关
  STARTER_CONTACT_TITLE: '联系我们',
  STARTER_CONTACT_TEXT: '告诉我们您遇到的问题',
  STARTER_CONTACT_LOCATION_TITLE: '我们的位置',
  STARTER_CONTACT_LOCATION_TEXT: '中国，江苏',
  STARTER_CONTACT_EMAIL_TITLE: '我们如何帮助您？',
  STARTER_CONTACT_EMAIL_TEXT: 'austin.zhai@originflow.cn',

  // 嵌入外部表单
  STARTER_CONTACT_MSG_EXTERNAL_URL: 'https://noteforms.com/forms/contact-us-j21b7b', // 基于NoteForm创建，将留言数据存在Notion中
  //   自定义留言表单，以下几个配置暂时废弃
  STARTER_CONTACT_MSG_TITLE: '向我们留言',
  STARTER_CONTACT_MSG_NAME: '姓名',
  STARTER_CONTACT_MSG_EMAIL: 'Email',
  // STARTER_CONTACT_MSG_PHONE: '联系电话',
  STARTER_CONTACT_MSG_TEXT: '消息内容',
  STARTER_CONTACT_MSG_SEND: '发送消息',
  STARTER_CONTACT_MSG_THANKS: '感谢您的留言',

  // 合作伙伴的图标
  STARTER_BRANDS_ENABLE: false, // 合作伙伴开关
  STARTER_BRANDS: [
    {
      IMAGE: '/images/starter/brands/graygrids.svg',
      IMAGE_WHITE: '/images/starter/brands/graygrids-white.svg',
      URL: 'https://graygrids.com/',
      TITLE: 'graygrids'
    },
    {
      IMAGE: '/images/starter/brands/lineicons.svg',
      IMAGE_WHITE: '/images/starter/brands/lineicons-white.svg',
      URL: 'https://lineicons.com/',
      TITLE: 'lineicons'
    },
    {
      IMAGE: '/images/starter/brands/uideck.svg',
      IMAGE_WHITE: '/images/starter/brands/uideck-white.svg',
      URL: 'https://uideck.com/',
      TITLE: 'uideck'
    },
    {
      IMAGE: '/images/starter/brands/ayroui.svg',
      IMAGE_WHITE: '/images/starter/brands/ayroui-white.svg',
      URL: 'https://ayroui.com/',
      TITLE: 'ayroui'
    },
    {
      IMAGE: '/images/starter/brands/tailgrids.svg',
      IMAGE_WHITE: '/images/starter/brands/tailgrids-white.svg',
      URL: '"https://tailgrids.com/',
      TITLE: 'tailgrids'
    }
  ],

  STARTER_FOOTER_SLOGAN: '我们通过技术为品牌和公司创造数字体验。',

  // 页脚三列菜单组
  STARTER_FOOTER_LINK_GROUP: [
    {
      TITLE: '关于我们',
      LINK_GROUP: [
        { TITLE: '官方主页', URL: '/#home' },
        { TITLE: '操作文档', URL: 'https://www.originflow.cn/' },
        {
          TITLE: '帮助支持',
          URL: 'https://www.originflow.cn/'
        },
        {
          TITLE: '合作申请',
          URL: 'https://www.originflow.cn/'
        }
      ]
    },
    {
      TITLE: '功能特性',
      LINK_GROUP: [
        {
          TITLE: '部署指南',
          URL: 'https://inv.originflow.cn/article/free'
        },
        {
          TITLE: '升级指南',
          URL: 'https://inv.originflow.cn/article/free'
        },
        { TITLE: '最新版本', URL: 'https://inv.originflow.cn/article/free' }
      ]
    },
    {
      TITLE: 'MyAPS',
      LINK_GROUP: [
        {
          TITLE: 'MyAPS功能1',
          URL: 'https://inv.originflow.cn/article/free'
        },
        {
          TITLE: 'MyAPS功能2',
          URL: 'https://inv.originflow.cn/article/free'
        },
        {
          TITLE: 'MyAPS功能3',
          URL: 'https://inv.originflow.cn/article/free'
        }
      ]
    }
  ],

  STARTER_FOOTER_BLOG_LATEST_TITLE: '最新文章',

  STARTER_FOOTER_PRIVACY_POLICY_TEXT: '隐私政策',
  STARTER_FOOTER_PRIVACY_POLICY_URL: '/privacy-policy',

  STARTER_FOOTER_PRIVACY_LEGAL_NOTICE_TEXT: '法律声明',
  STARTER_FOOTER_PRIVACY_LEGAL_NOTICE_URL: '/legacy-notice',

  STARTER_FOOTER_PRIVACY_TERMS_OF_SERVICE_TEXT: '服务协议',
  STARTER_FOOTER_PRIVACY_TERMS_OF_SERVICE_URL: '/terms-of-use',

  // 404页面的提示语
  STARTER_404_TITLE: '我们似乎找不到您要找的页面。',
  STARTER_404_TEXT: '抱歉！您要查找的页面不存在。可能已经移动或删除。',
  STARTER_404_BACK: '回到主页',

  // 页面底部的行动呼吁模块
  STARTER_CTA_ENABLE: true,
  STARTER_CTA_TITLE: '你还在等待什么呢？',
  STARTER_CTA_TITLE_2: '现在开始吧',
  STARTER_CTA_DESCRIPTION:
    '访问MyAPS的操作文档，我们提供了详细的教程，帮助你即刻试用软件',
  STARTER_CTA_BUTTON: true, // 是否显示按钮
  STARTER_CTA_BUTTON_URL:
    'https://inv.originflow.cn/article/free',
  STARTER_CTA_BUTTON_TEXT: '开始体验',

  STARTER_POST_REDIRECT_ENABLE: true, // 默認開啟重定向
  STARTER_POST_REDIRECT_URL: 'https://inv.originflow.cn/', // 重定向域名
  STARTER_NEWSLETTER: process.env.NEXT_PUBLIC_THEME_STARTER_NEWSLETTER || false // 是否开启邮件订阅 请先配置mailchimp功能 https://docs.tangly1024.com/article/notion-next-mailchimp
}
export default CONFIG
