# Image to HTML

[中文文档](README_CN.md)

A plugin for Obsidian that converts pasted images to HTML format instead of Obsidian's wikilink or Markdown format.

## Features

- Saves pasted images as files and inserts them as centered HTML image tags with figure captions
- Supports custom image width
- Supports custom image save paths (e.g., `./assets`)
- Automatic figure caption generation from image filename (underscores replaced with spaces)
- Optional alt attribute for better accessibility
- Optional paste notifications

## Why HTML Format?

HTML image tags offer better compatibility across different platforms compared to Markdown or Obsidian's wikilink format. This is particularly useful for users who need to share their notes across different platforms and Markdown editors.

## Usage

1. Install the plugin in Obsidian
2. Copy an image (from browser, file explorer, or screenshot tool)
3. Paste in the Obsidian editor
4. The image will be saved and inserted as centered HTML with a figure caption:

```html
<center>
  <img src="image_1234567890.png" width="80%"><br>
  <b>Figure</b>.image 1234567890.
</center>
```

The figure caption is automatically generated from the image filename, with underscores replaced by spaces and a period added at the end.

### Custom Image Path

You can enable the "Use Custom Image Path" option in settings and set a custom save path for your images:

- Relative paths (e.g., `./assets` or `../images`): Images will be saved in the specified directory relative to the current file
- Absolute paths (e.g., `assets` or `images`): Images will be saved in the specified directory under your vault root

When custom path is enabled, the src attribute in HTML tags will be updated accordingly, for example:
```html
<center>
  <img src="./assets/image_1234567890.jpg" width="80%"><br>
  <b>Figure</b>.image 1234567890.
</center>
```

If custom path is disabled, images will be saved in the same directory as the current file, and the HTML tag will only use the filename:
```html
<center>
  <img src="image_1234567890.jpg" width="80%"><br>
  <b>Figure</b>.image 1234567890.
</center>
```

### About Alt Attribute

By default, the plugin generates HTML tags without the alt attribute to keep the code concise. If you need better accessibility or SEO optimization, you can enable the "Include Alt Attribute" option in settings, which will generate tags like:

```html
<center>
  <img src="image_1234567890.jpg" width="80%" alt="image_1234567890.jpg"><br>
  <b>Figure</b>.image 1234567890.
</center>
```

## Settings

- **Image Width**: Set the image width, can be pixels (e.g., 500px), percentage (e.g., 100%), or auto
- **Use Custom Image Path**: When enabled, images will be saved to the specified path instead of the current file's directory
- **Custom Image Path**: Set the image save path, can be relative (e.g., ./assets) or absolute (e.g., assets)
- **Include Alt Attribute**: When enabled, HTML image tags will include the alt attribute for better accessibility and SEO
- **Show Notifications**: Choose whether to show notifications when pasting images

## Installation

### From Obsidian Community Plugins

1. Open Obsidian Settings
2. Go to "Community Plugins"
3. Disable "Safe Mode"
4. Click "Browse"
5. Search for "Image to HTML"
6. Click Install
7. Enable the plugin

### Manual Installation

1. Download the latest version of `main.js`, `manifest.json`, and `styles.css`
2. Copy these files to your vault's `.obsidian/plugins/img2html/` directory

## Development

1. Clone this repository
2. Run `npm install` to install dependencies
3. Run `npm run dev` to start compilation in watch mode
4. Copy `main.js` and `manifest.json` to your vault's `.obsidian/plugins/img2html/` directory for testing

## License

MIT 
