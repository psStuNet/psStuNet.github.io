# 贡献指南

欢迎参与我们的项目开发！本文档将帮助你了解项目的样式规范和贡献流程。

## 目录

- [样式规范](#样式规范)
  - [颜色系统](#颜色系统)
  - [字体](#字体)
  - [链接样式](#链接样式)
  - [按钮样式](#按钮样式)
  - [文章样式](#文章样式)
  - [列表样式](#列表样式)
  - [表格样式](#表格样式)
  - [动画效果](#动画效果)
  - [响应式设计](#响应式设计)
- [文件结构](#文件结构)
- [贡献流程](#贡献流程)
- [提交规范](#提交规范)

## 样式规范

### 颜色系统

项目使用CSS变量定义颜色系统，请始终使用这些变量而不是硬编码颜色值：

```css
:root {
    --primary-color: #2a2a2a;    /* 主背景色 */
    --accent-color: #00ff9d;     /* 强调色 */
    --text-color: #e0e0e0;       /* 文本颜色 */
}
```

### 字体

- 主要字体：`'Noto Sans SC', system-ui, sans-serif`
- 代码字体：`'Fira Code', monospace`
- 文本行高：1.8
- 文章文本行高：1.7

### 链接样式

链接样式已预设，包括悬停效果和下划线动画，请直接使用标准`<a>`标签，无需额外添加class：

```html
<a href="#">示例链接</a>
```

链接默认使用`rgb(0, 189, 73)`颜色，悬停时变为`#00ff9d`，并带有上移和下划线动画效果。

### 按钮样式

项目提供了两种按钮样式：

1. **浮动按钮（floating-btn）**：

```html
<a href="#" class="floating-btn">浮动按钮</a>
```

2. **返回按钮（back-btn）**：

```html
<a href="#" class="floating-btn back-btn">返回按钮</a>
```

### 文章样式

文章内容应放在`<article>`标签内，使用以下样式约定：

- 标题使用`<h1>`, `<h2>`, `<h3>`等标签
- 文章标题使用`article-title` class
- 段落使用`<p>`标签
- 强调文本使用`<strong>`或`<em>`标签
- 代码使用`<code>`标签
- 删除线使用`<del>`标签

```html
<article>
    <h1 class="article-title">文章标题</h1>
    <p>这是一个段落。</p>
    <strong>强调文本</strong>
    <em>斜体文本</em>
    <code>代码片段</code>
    <del>删除的文本</del>
</article>
```

### 列表样式

项目支持多种列表样式：

1. **普通无序列表**：

```html
<ul>
    <li>列表项1</li>
    <li>列表项2</li>
</ul>
```

2. **计划列表（plan-list）**：

```html
<ul class="plan-list">
    <li>计划项1</li>
    <li>计划项2</li>
</ul>
```

3. **免责声明列表（disclaimer-list）**：

```html
<ul class="disclaimer-list">
    <li>免责声明项1</li>
    <li>免责声明项2</li>
</ul>
```

### 表格样式

使用`comparison-table` class创建比较表格：

```html
<table class="comparison-table">
    <thead>
        <tr>
            <th>特性</th>
            <th>选项1</th>
            <th>选项2</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td class="feature">功能A</td>
            <td class="yes"></td>
            <td class="no"></td>
        </tr>
        <tr>
            <td class="feature">功能B</td>
            <td class="no"></td>
            <td class="yes"></td>
        </tr>
    </tbody>
</table>
```

### 动画效果

项目包含以下预设动画：

1. **sectionAppear**：内容区块出现动画
2. **slideIn**：标题滑入动画
3. **fadeInUp**：元素淡入并上移
4. **pulseHighlight**：脉冲高亮效果
5. **buttonHoverEffect**：按钮悬停效果

### 响应式设计

项目包含响应式设计，针对移动设备（768px以下）优化：

- 容器内边距调整
- 文章字体大小调整
- 标题字体大小调整
- 表格水平滚动

## 文件结构

```
├── .github/             # GitHub相关配置
├── article/             # 文章内容
│   ├── podcast/         # 播客内容
├── img/                 # 图片资源
│   ├── icon/            # 图标资源
├── logs/                # 日志文件
│   ├── 2502/            # 2025年2月日志
│   ├── 2503/            # 2025年3月日志
│   ├── 2505/            # 2025年5月日志
│   ├── 2510/            # 2025年10月日志
│   ├── 2511/            # 2025年11月日志
├── media/               # 媒体文件
│   ├── podcast/         # 播客媒体文件
├── index.html           # 首页
├── style.css            # 主样式文件
├── readme.html          # 说明页面
├── README.md            # GitHub说明文档
```

## 提交规范

请遵循以下提交消息格式：

```
<类型>: <描述>

[可选的详细描述]

[可选的关联Issue引用]
```

### 提交类型

- `feat`: 新功能
- `fix`: 修复bug
- `docs`: 文档更新
- `style`: 代码风格更改（不影响功能）
- `refactor`: 代码重构（不新增功能或修复bug）
- `perf`: 性能优化
- `test`: 测试相关
- `chore`: 构建过程或辅助工具的变动

### 示例

```
feat: 添加文章分享功能

实现了社交平台分享按钮和功能集成

Closes #42
```

```
fix: 修复移动端响应式布局问题

解决了在小屏幕设备上导航栏显示异常的问题
```

感谢你的贡献！