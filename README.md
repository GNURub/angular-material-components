# FORKED FROM [h2qutc/angular-material-components](https://github.com/h2qutc/angular-material-components)

# Angular Material Extra Components (DatetimePicker, TimePicker, ColorPicker, FileInput ...) for @angular/material 7.x, 8.x, 9.x, 10.x, 11.x, 12.x, 13.x, 14.x, 15.x, 16.x, 18.x, 19.x, 20.x

[![Build Status](https://travis-ci.com/h2qutc/angular-material-components.svg?branch=master)](https://travis-ci.com/h2qutc/angular-material-components)
[![License](https://img.shields.io/npm/l/angular-material-components.svg)](https://www.npmjs.com/package/angular-material-components)

## 🚀 Live Demo

**[Ver Demo en GitHub Pages](https://gnurub.github.io/angular-material-components/)**

## Description

Angular Material Library provide extra components for every project (Datetime picker, Time picker,
Color picker...).

Please do not hesitate to contact us if you have any question or suggestion.

Feel free to open the [issues](https://github.com/GNURub/angular-material-components/issues) or
provide a PR.

If you like this project, support angular-material-components by starring⭐.

And thank you so much for your coffee ❤️

<a href="https://www.buymeacoffee.com/gnurub" target="_blank"><img src="https://cdn.buymeacoffee.com/buttons/v2/default-yellow.png" alt="Buy Me A Coffee" style="height: 60px !important;width: 217px !important;" ></a>

## DEMO Angular Material Components

@see [LIVE DEMO AND DOCUMENTATION](https://h2qutc.github.io/angular-material-components/)

Choose the version corresponding to your Angular version:

| Angular | @ngxmc/datetime-picker          |
| ------- | ------------------------------- |
| 20      | 20.x+                           |
| 19      | 19.x+                           |
| 18      | 18.x+                           |
| 17      | none                            |
| 15      | 15.x+ OR 9.x+ for legacy import |
| 14      | 8.x+                            |
| 13      | 7.x+                            |
| 12      | 6.x+                            |
| 11      | 5.x+                            |
| 10      | 4.x+                            |
| 9       | 2.x+                            |
| 8       | 2.x+                            |
| 7       | 2.x+                            |

### Datetime Picker

[![npm version](https://badge.fury.io/js/%40angular-material-components%2Fdatetime-picker.svg)](https://www.npmjs.com/package/@ngxmc/datetime-picker)
[![Github All Releases](https://img.shields.io/npm/dt/@ngxmc/datetime-picker.svg)]()

[TUTORIAL HERE](https://h2qutc.github.io/angular-material-components/)

```
npm install --save  @ngxmc/datetime-picker
```

![Alt Text](demo_datetime_picker.png)

@see
[DEMO stackblitz for Angular 7, Angular 8](https://stackblitz.com/edit/demo-ngx-mat-datetime-picker)

@see
[DEMO stackblitz for Angular 9](https://stackblitz.com/edit/demo-ngx-mat-datetime-picker-angular9)

### Color Picker

[![npm version](https://badge.fury.io/js/%40angular-material-components%2Fcolor-picker.svg)](https://www.npmjs.com/package/@ngxmc/color-picker)
[![Github All Releases](https://img.shields.io/npm/dt/@ngxmc/color-picker.svg)]()

[TUTORIAL HERE](https://h2qutc.github.io/angular-material-components/)

```
npm install --save  @ngxmc/color-picker
```

![Alt Text](demo_color_picker.png) @see
[DEMO stackblitz](https://stackblitz.com/edit/demo-ngx-mat-color-picker)

### File Input

[![npm version](https://badge.fury.io/js/%40angular-material-components%2Ffile-input.svg)](https://www.npmjs.com/package/@ngxmc/file-input)
[![Github All Releases](https://img.shields.io/npm/dt/@ngxmc/file-input.svg)]()

[TUTORIAL HERE](https://h2qutc.github.io/angular-material-components/)

```
npm install --save  @ngxmc/file-input
```

![Alt Text](demo_file_input.png)

### Theming

- @see @angular/material
  [Using a pre-built theme](https://material.angular.io/guide/theming#using-a-pre-built-theme)
- Add the Material Design icon font to your index.html

```
<link href="https://fonts.googleapis.com/icon?family=Material+Icons&display=block" rel="stylesheet">
```

## 🚀 Deployment

This project is automatically deployed to GitHub Pages using GitHub Actions. You can also deploy
manually:

### Automatic Deployment

- Pushes to `main` branch automatically trigger deployment
- GitHub Actions workflow builds and deploys to `gh-pages` branch
- Site is available at: https://gnurub.github.io/angular-material-components/

### Manual Deployment

```bash
# Build for GitHub Pages
pnpm run build:gh-pages

# Deploy to GitHub Pages
pnpm run deploy:gh-pages
```

For detailed deployment instructions, see [DEPLOYMENT.md](./DEPLOYMENT.md).

## License

MIT
