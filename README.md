# docsify-plugin-carbon

![npm](https://img.shields.io/npm/dy/docsify-plugin-carbon?style=flat-square)

A [docsify](https://docsify.js.org/) plugin that displays [Carbon Ads](https://www.carbonads.net/).

# Usage



```html
<script src="//cdn.jsdelivr.net/npm/docsify-plugin-carbon@1/index.min.js"></script>
```

```javascript
window.$docsify = {
  plugins: [
    // Change to your Carbon property ID
    DocsifyCarbon.create('CE7I52QU', 'xmakeio')
  ]
}
```

# Example

See example site: [xmake.io](https://xmake.io/#/getting_started)

![](https://cdn.jsdelivr.net/gh/waruqi/docsify-plugin-carbon@master/sample.png)

# Contributing

1. Fork this repo
2. Modify `index.js`
3. Run the following CLI command:

   ```shell
   npm run build
   ```

4. Create a [pull request](https://github.com/waruqi/docsify-plugin-carbon/pulls) on GitHub
