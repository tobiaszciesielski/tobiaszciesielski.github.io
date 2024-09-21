---
title: Test article
description: Find out what makes Astro awesome!
publicationDate: 2024-08-07
image: http://abba.com/image.png
---

This is a guide to help you create rich posts on Hashnode.

Hashnode Editor supports simple markdown along with some special tags to embed Tweets, YouTube videos, Codepen snippets, etc. Scroll for more.

Headers Hashnode supports Atx-style headers. Use 1-6 hash characters at the start of the line, corresponding to header levels 1-6. For example:

# This is Heading 1

## This is Heading 2

### This is Heading 3

#### This is Heading 4

##### This is Heading 5

###### This is Heading 6

Embeds Hashnode uses Embed.ly to support all kinds of embed on the platform. You DON'T have to paste the platform specific embed code. Just follow the following syntax and the magic will happen.

%[Paste link to embed]

//Embed Tweets %\[https://twitter.com/hashnode/status/1080795453115920384?s=20\]

//Embed YouTube Videos %\[https://www.youtube.com/watch?v=vAKtNV8KcWg\]

//Embed Github Repo %\[https://github.com/hashnode/hashnode-cli\]

//Embed Codepen %\[https://codepen.io/zephyo/pen/MZbLwV\]

//Embed Glitch %\[https://glitch.com/edit/#!/lithium-battery-recycling\]

//Embed Soundcloud %\[https://soundcloud.com/androidauthority/024-prime-day-shmimeday\]

//Embed Expo %\[https://snack.expo.io/@iamshadmirza/tinder-cards\]

//Embed Loom %\[https://www.loom.com/share/1436e60ced174f37b729be61081e069d\]

//Embed Vimeo %\[https://vimeo.com/258358902\], additional valid parameters can be passed to customize the player. Ex. %\[https://vimeo.com/258358902?width=820&color=ED5565\] Visit this link https://developer.vimeo.com/api/oembed/videos for more details on how to customize the player, supported URL types and parameters.

//Embed Canva %\[https://www.canva.com/design/your-design-id/view\]

//Embed any article on web or website %\[https://hashnode.com\] Code Snippets Inline code Use the Grave accent keys \` for the inline code snippets. In QWERTY keypads, this key can be written using Ctrl + 1.

This is a normal sentence with `some code` in it. The above will output the following:

This is a normal sentence with some code.

Block code Wrap the code blocks with tripple Grave accent keys. \`\`\` for showing big blocks of code in your content. For example:

```ts
if (isServer && user) {
  store.userStore.currentUser = user
}
```

The above will look like: (Hashnode supports generic code highlighting. Most of the time, it will be applied to the code blocks after you publish the content.)

if (isServer && user) { store.userStore.currentUser = user; } Text formatting Bold: Wrap the text with double astricks \*\* to make it bold. We will use **while parsing. For example: Bold text**

**Italics: Wrap the text with single astricks character \* to make it italics. For example: _Italic text_. We will wrap the text with _tag while parsing._**

**_The bold and italics markdown syntax works inside almost any block level elements. Like Quotes, Lists, Inline code, etc._**

**_Quotes Use the greater than sign to format a text as a quote. For example:_**

> _Where there is a will there is a way! Where there is a will there is a way!_

**_Links I'm an inline link:_** [**_I'm an inline link_**](put-link-here)

**_Inline Images Use Hashnode's image uploader to upload your image to Hashnode CDN._**

**_Latex support Please note: To use newline in an expression, you will have to use (\\) instead of the standard latex command (\\)._**

**_You can render LaTeX mathematical expressions using MathJax. Wrap your inline expression in \\( and \\) Ex. \\( YOUR_EXPRESSION_HERE \\) ._**

**_To use it as a separate block, wrap your expression in $$ or and Ex._**

**_YOUREXPRESSIONHERE --OR-- YOUREXPRESSIONHERE_**
