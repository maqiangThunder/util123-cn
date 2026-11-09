# util123 工具箱 · 免费在线小工具集合

> **在线版 Live demo:** <https://maqiangthunder.github.io/util123-cn/>
> **正式站 Official site:** <https://util123.cn>

52 个纯前端中文小工具：JSON 格式化、Base64、时间戳、二维码、哈希、正则、Cron、SQL 格式化、单位换算、时区、身份证解析……
**全部在浏览器本地完成，数据不上传服务器**；打开网页即用，无需注册、无需安装、无需登录。

A collection of 52 browser-only utilities (Chinese UI). Everything runs locally in the browser —
no upload, no signup, no install. Mirrors <https://util123.cn>.

---

## 工具清单 / Tools

### 常用工具

| 工具 Tool | 说明 Description |
| --- | --- |
| [JSON 工具箱](https://maqiangthunder.github.io/util123-cn/json/) | 格式化、压缩、校验、语法高亮、树形视图、搜索、排序键、自动修复、转 YAML/CSV/XML、Diff 对比、JSONPath 查询。 |
| [我的 IP](https://maqiangthunder.github.io/util123-cn/ip/) | 查自己的公网 IP，也支持查询任意 IP 的归属地、运营商与 ASN。 |
| [时间戳转换](https://maqiangthunder.github.io/util123-cn/timestamp/) | 时间戳与日期互转，自动识别秒 / 毫秒，显示 UTC、ISO 与相对时间，点一下就能复制。 |
| [二维码生成](https://maqiangthunder.github.io/util123-cn/qrcode/) | 把文本、网址、Wi-Fi 信息生成可下载的二维码，可调节尺寸与容错等级、前景背景色。 |
| [密码生成](https://maqiangthunder.github.io/util123-cn/password/) | 高强度随机密码生成器，可指定长度与字符类型，实时显示强度、熵值与可组合数。 |
| [m3u8 播放器](https://maqiangthunder.github.io/util123-cn/m3u8/) | 在线播放 m3u8 / HLS 视频流，支持全屏、调速与音量，浏览器直接看直播点播。 |

### 加密哈希

| 工具 Tool | 说明 Description |
| --- | --- |
| [哈希计算](https://maqiangthunder.github.io/util123-cn/hash/) | 一键计算文本或文件的 MD5、SHA-1、SHA-256、SHA-512 摘要，结果可复制为大小写。 |
| [加密解密](https://maqiangthunder.github.io/util123-cn/encrypt/) | AES-256 口令加密与 RSA 公钥加密，浏览器本地完成，数据不上传。 |

### 编码转换

| 工具 Tool | 说明 Description |
| --- | --- |
| [Base64 编解码](https://maqiangthunder.github.io/util123-cn/base64/) | 文本与 Base64 互转，完整支持中文等 UTF-8 字符，支持 URL-safe 变体与文件转 Base64。 |
| [URL 编解码](https://maqiangthunder.github.io/util123-cn/url/) | 网址与百分号编码互转，支持 URI 组件 / 完整网址两种模式，还能把查询参数拆成表格。 |
| [Unicode 转换](https://maqiangthunder.github.io/util123-cn/unicode/) | 中文与 \uXXXX 转义、HTML 实体双向互转，可只转非 ASCII 字符，保留英文与标点可读。 |
| [进制转换](https://maqiangthunder.github.io/util123-cn/radix/) | 二进制、八进制、十进制、十六进制实时互转，支持大数与负数，自动识别 0x / 0b / 0o 前缀。 |
| [图片 Base64](https://maqiangthunder.github.io/util123-cn/imgbase64/) | 图片与 Base64 / DataURL 双向互转，附体积对比与 img 标签、CSS 背景等现成写法。 |
| [JWT 解析](https://maqiangthunder.github.io/util123-cn/jwt/) | 粘贴 Token 一键解码 Header / Payload，格式化展示，还能识别过期时间。 |
| [摩斯电码转换](https://maqiangthunder.github.io/util123-cn/morse/) | 文本与摩斯码双向互转，点划可视化，还能用浏览器播放电报音。 |
| [HTML 实体编解码](https://maqiangthunder.github.io/util123-cn/htmlentity/) | 文本与 HTML 实体双向转换，转义 &lt; &gt; &amp; 等特殊字符，做网页与邮件模板防注入随手用。 |

### 文本处理

| 工具 Tool | 说明 Description |
| --- | --- |
| [正则表达式测试](https://maqiangthunder.github.io/util123-cn/regex/) | 实时高亮匹配结果，查看捕获分组与位置，内置手机号、邮箱、URL、IP 等常用正则，还能预览替换效果。 |
| [文本差异对比](https://maqiangthunder.github.io/util123-cn/diff/) | 两段文本按行比对，高亮新增与删除的行，支持忽略大小写、忽略首尾空白，并统计改动行数。 |
| [字数统计](https://maqiangthunder.github.io/util123-cn/counter/) | 实时统计字符数、单词数、行数、字节数，顺便数数汉字和数字。 |
| [文本整理](https://maqiangthunder.github.io/util123-cn/lines/) | 按行排序、去重、删除空行、首尾去空格，一键把乱糟糟的列表理顺。 |
| [大小写转换](https://maqiangthunder.github.io/util123-cn/case/) | 大写、小写、词首大写，以及驼峰、蛇形、短横命名，随手转换。 |
| [XML 格式化](https://maqiangthunder.github.io/util123-cn/xml/) | 美化、压缩与校验 XML，可定位语法错误，纯本地处理。 |
| [CSV ↔ JSON](https://maqiangthunder.github.io/util123-cn/csv/) | CSV 与 JSON 数组互转，支持带引号字段，处理表格、接口数据随手用。 |
| [全角半角转换](https://maqiangthunder.github.io/util123-cn/fullhalf/) | 英文字母、数字、标点与空格在半角 / 全角之间互转，处理中英混排随手用。 |

### 查询检测

| 工具 Tool | 说明 Description |
| --- | --- |
| [身份证属地](https://maqiangthunder.github.io/util123-cn/idcard/) | 解析身份证号，查出所属省市、出生日期、性别，并校验最后一位；还能随机生成测试号码。 |
| [域名解析](https://maqiangthunder.github.io/util123-cn/dns/) | 查域名的 A / AAAA / CNAME / MX / TXT / NS / SOA 记录，结果表格展示。 |
| [DNS 检测](https://maqiangthunder.github.io/util123-cn/dnscheck/) | 从阿里 / 腾讯 / 百度 / Google / Cloudflare 多地解析对比，看是否一致。 |
| [备案查询](https://maqiangthunder.github.io/util123-cn/beian/) | 输入域名查 ICP 备案：主办单位、备案号、网站名称与审核日期。 |

### 日期时间

| 工具 Tool | 说明 Description |
| --- | --- |
| [日期计算](https://maqiangthunder.github.io/util123-cn/date/) | 两个日期相差多少天，或给某个日期加减若干天得到新日期。 |
| [时区转换](https://maqiangthunder.github.io/util123-cn/tz/) | 填一个时间，立刻看到北京、东京、伦敦、纽约等地对应的当地时间。 |
| [日期差计算](https://maqiangthunder.github.io/util123-cn/datediff/) | 两个日期时间相差多少天、小时、分钟、秒，也能算距今天还有多久。 |

### 生成与计算

| 工具 Tool | 说明 Description |
| --- | --- |
| [UUID 生成](https://maqiangthunder.github.io/util123-cn/uuid/) | 基于安全随机数批量生成 UUID v4，可自定义数量、转大写、去横线、加大括号，一键复制。 |
| [随机数 · 抽奖](https://maqiangthunder.github.io/util123-cn/random/) | 生成指定范围内的随机整数、掷骰子，或从名单里随机抽一个。 |
| [房贷计算](https://maqiangthunder.github.io/util123-cn/mortgage/) | 算等额本息 / 等额本金的月供、总利息与总还款，支持公积金贷，输入即算。 |
| [金额大写](https://maqiangthunder.github.io/util123-cn/rmb/) | 数字金额转人民币大写（壹贰叁肆…元角分），开发票、填支票、财务对账随手用。 |
| [秒表计时器](https://maqiangthunder.github.io/util123-cn/stopwatch/) | 秒表支持计圈，倒计时结束自动响铃提醒。健身、煮蛋、番茄钟都用得上。 |
| [单位换算](https://maqiangthunder.github.io/util123-cn/unit/) | 长度、重量、温度、数据存储一步换算，输入一个值即显示全部单位结果。 |
| [罗马数字转换](https://maqiangthunder.github.io/util123-cn/roman/) | 阿拉伯数字与罗马数字双向互转，支持 1–3999，自动校验非法写法。 |
| [Lorem 生成器](https://maqiangthunder.github.io/util123-cn/lorem/) | 按段落、句子或单词生成 Lorem 占位文本，做原型、设计稿、排版测试随手用。 |

### 开发辅助

| 工具 Tool | 说明 Description |
| --- | --- |
| [SQL 格式化](https://maqiangthunder.github.io/util123-cn/sqlfmt/) | 挤在一行的 SQL 按关键字换行、大写主句、缩进对齐，读代码排查慢查询随手用。 |
| [Cron 解析](https://maqiangthunder.github.io/util123-cn/cron/) | 输入 5 段 cron，算未来几次执行时间，配定时任务、排查调度随手用。 |
| [子网计算器](https://maqiangthunder.github.io/util123-cn/subnet/) | 输入 IP 和掩码（CIDR 或点分），算网络地址、广播地址、可用主机范围与主机数。 |
| [HTTP 状态码速查](https://maqiangthunder.github.io/util123-cn/httpstatus/) | 1xx 到 5xx 全分类，搜一下就懂含义、知道往哪查，502/504 排查方向随手翻。 |
| [ASCII 码表](https://maqiangthunder.github.io/util123-cn/ascii/) | 查任意字符的十进制、十六进制、八进制、二进制与 HTML / URL 编码。 |
| [Markdown 预览](https://maqiangthunder.github.io/util123-cn/markdown/) | 左边写 Markdown，右边实时渲染，可一键复制 HTML，写文档、记笔记随手用。 |
| [HTML / CSS 格式化](https://maqiangthunder.github.io/util123-cn/htmlfmt/) | 挤在一行的 HTML / CSS 一键排版缩进，可读性拉满，开发调试随手用。 |
| [User-Agent 解析](https://maqiangthunder.github.io/util123-cn/ua/) | 粘贴 UA 字符串，识别浏览器、操作系统与设备类型，排查兼容性随手用。 |

### 设计辅助

| 工具 Tool | 说明 Description |
| --- | --- |
| [调色板生成](https://maqiangthunder.github.io/util123-cn/palette/) | 选一个基础色，自动生成单色、互补、类比、三角等配色方案，点色块复制 HEX。 |
| [渐变生成器](https://maqiangthunder.github.io/util123-cn/gradient/) | 挑颜色、拖角度，实时预览 CSS 渐变，附随机灵感配色，一键复制代码。 |
| [对比度检查](https://maqiangthunder.github.io/util123-cn/contrast/) | 前景色配背景色，实时算 WCAG 对比度，AA / AAA 文本可读性达标一目了然。 |
| [盒阴影生成器](https://maqiangthunder.github.io/util123-cn/boxshadow/) | 拖滑块调 box-shadow 参数，实时预览卡片、弹层、内凹等效果，一键复制 CSS。 |
| [屏幕取色器](https://maqiangthunder.github.io/util123-cn/color/) | HEX / RGB / HSL / HSV 实时互转，支持屏幕吸管取色与对比色预览，一键复制。 |

---

## 技术说明 / How it works

- **纯静态**：原生 HTML + CSS + JavaScript，无框架、无 bundler、无 npm 依赖，克隆下来直接打开就能跑
- **一个工具一个目录**：`<tool>/index.html`，公共样式与脚本在 `assets/`
- **本地处理**：文本/文件全部在浏览器内完成（FileReader / WebCrypto / Canvas），不经过任何服务器
- **少数功能依赖服务端**：ICP 备案查询、腾讯 DoH 反向代理、反馈提交 —— 这三项只在主站 <https://util123.cn> 可用，
  本镜像站会在对应页面顶部给出提示

## 关于本仓库 / About this repo

本仓库是 <https://util123.cn> 的**公开镜像**，由私有源仓库的构建脚本自动生成 `docs/` 目录，用于：

- 在 GitHub 上直接在线阅读/参考代码
- 通过 GitHub Pages 提供一个免登录的在线演示

页面里的 `<link rel="canonical">` 一律指回 <https://util123.cn>，因此搜索引擎仍以主站为规范版本，
镜像站不会与主站抢排名。功能、内容、更新节奏均以主站为准。

## 本地预览 / Run locally

```bash
git clone https://github.com/maqiangthunder/util123-cn.git
cd util123-cn
python3 -m http.server 8000 --directory docs
# 打开 http://127.0.0.1:8000/
```

> 注意：直接用 `file://` 打开也能运行绝大多数工具；带 `fetch` 的功能（DNS / IP 查询）需要 HTTP 环境。

## 许可 / License

代码以 [MIT](LICENSE) 协议开源。工具数据（如行政区划、汇率等第三方数据）请遵循其原始来源的授权。
