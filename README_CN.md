# Image to HTML

[English](README.md)

这是一个 Obsidian 插件，用于将粘贴的图片转换为 HTML 格式，而不是 Obsidian 的 wikilink 或 Markdown 格式。

## 功能

- 将粘贴的图片保存为文件并插入居中 HTML 格式的图片标签（带图注）
- 支持自定义图片宽度
- 支持自定义图片保存路径（如 `./assets`）
- 自动根据图片文件名生成图注（下划线替换为空格）
- 可选择是否包含 alt 属性
- 粘贴时可选择显示通知

## 为什么使用 HTML 格式？

HTML 格式的图片标签比 Markdown 或 Obsidian 的 wikilink 格式更广泛兼容，可以被大多数 Markdown 编辑器识别。这对于需要在不同平台之间共享笔记的用户特别有用。

## 使用方法

1. 在 Obsidian 中安装此插件
2. 复制一张图片（从浏览器、文件资源管理器或截图工具）
3. 在 Obsidian 编辑器中粘贴
4. 图片将被保存并以居中 HTML 格式插入（带图注）：

```html
<center>
  <img src="image_1234567890.png" width="80%"><br>
  <b>Figure</b>.image 1234567890.
</center>
```

图注会根据图片文件名自动生成，下划线会被替换为空格，并在末尾添加句号。

### 自定义图片路径

您可以在设置中启用"使用自定义图片路径"选项，并设置自定义的图片保存路径：

- 相对路径（如 `./assets` 或 `../images`）：图片将保存在相对于当前文件的指定目录中
- 绝对路径（如 `assets` 或 `images`）：图片将保存在 vault 根目录下的指定目录中

启用自定义路径后，HTML 图片标签中的 src 属性也会相应更新，例如：
```html
<center>
  <img src="./assets/image_1234567890.jpg" width="80%"><br>
  <b>Figure</b>.image 1234567890.
</center>
```

如果不启用自定义路径，图片将保存在当前文件所在的目录中，并且 HTML 标签中只使用文件名：
```html
<center>
  <img src="image_1234567890.jpg" width="80%"><br>
  <b>Figure</b>.image 1234567890.
</center>
```

### 关于 alt 属性

默认情况下，插件生成的 HTML 标签不包含 alt 属性，以保持代码简洁。如果您需要更好的无障碍性或 SEO 优化，可以在设置中启用"包含 alt 属性"选项，这将生成如下格式的标签：

```html
<center>
  <img src="image_1234567890.jpg" width="80%" alt="image_1234567890.jpg"><br>
  <b>Figure</b>.image 1234567890.
</center>
```

## 设置

- **图片宽度**：设置图片的宽度，可以是像素值（如 500px）、百分比（如 100%）或 auto
- **使用自定义图片路径**：启用后，图片将保存到指定路径而不是当前文件所在目录
- **自定义图片路径**：设置图片保存的路径，可以是相对路径（如 ./assets）或绝对路径（如 assets）
- **包含 alt 属性**：启用后，HTML 图片标签将包含 alt 属性，有助于无障碍性和 SEO，但会使标签更长
- **显示通知**：粘贴图片时是否显示通知

## 安装

### 从 Obsidian 社区插件中安装

1. 打开 Obsidian 设置
2. 转到"第三方插件"
3. 禁用"安全模式"
4. 点击"浏览"
5. 搜索"Image to HTML"
6. 点击安装
7. 启用插件

### 手动安装

1. 下载最新版本的 `main.js`、`manifest.json` 和 `styles.css`
2. 将这些文件复制到你的 vault 的 `.obsidian/plugins/img2html/` 目录下

## 开发

1. 克隆此仓库
2. 运行 `npm install` 安装依赖
3. 运行 `npm run dev` 开始开发，这将自动编译并监视文件变化
4. 将 `main.js` 和 `manifest.json` 复制到你的 vault 的 `.obsidian/plugins/img2html/` 目录下进行测试

## 许可证

MIT 
