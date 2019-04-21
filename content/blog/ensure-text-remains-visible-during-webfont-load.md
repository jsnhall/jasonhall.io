---
layout: blog
title: Ensure Text Remains Visible During Webfont Load
date: 2019-04-21T18:22:00.509Z
tags:
  - css
  - webfonts
---
If you ever recieve the message "Ensure text remains visible during webfont load" after perfoming a Lighthouse audit then it means that text is not user-visible while webfonts are loading.

You'll notice that, while your webpage is loading, there is a brief moment where no text is displayed. To fix this, simply add `font-display: swap;` to your `@font-face` at-rule.

```css{3}
@font-face {
  font-family: 'Montserrat';
  font-display: swap;
  src: url('../../static/fonts/Montserrat-LightItalic.woff2');
}
```

The `swap` value [gives the font face an extremely small block period and an infinite swap period](https://developer.mozilla.org/en-US/docs/Web/CSS/@font-face/font-display#Values) which should prevent the the flash of no text on your page when it loads. This will also remove the warning message from your Lighthouse audit.
