webpackJsonp([15],{92:function(n,r){n.exports="## Omiu \r\n\r\nOmiu \u662f Omi \u5b98\u65b9 UI \u7ec4\u4ef6\u5e93\uff0c\u57fa\u4e8e Omio(IE8+) \u4e14\u517c\u5bb9 Omi,\u4f7f\u7528\u5fae\u4fe1 7.0 \u8bbe\u8ba1\u98ce\u683c\u3002\r\n\r\n## \u8272\u5f69\r\n\r\n|  **\u989c\u8272**  | **\u610f\u4e49**  |\r\n| ------------- |:-------------:|\r\n| #07C160  | \u5c0a\u8d35\u6d3b\u529b\u7eff | \r\n| #171717  | \u6c89\u7a33\u5178\u96c5\u9ed1 |   \r\n| #FEFEFE  | \u6e05\u65b0\u8131\u4fd7\u767d |   \r\n| #F95050  | \u6c14\u8d28\u9192\u76ee\u7ea2 |   \r\n| #ECECEC  | \u8ff7\u60d8\u6de1\u6cca\u7070 |   \r\n\r\n## \u65b0\u9879\u76ee\u5feb\u901f\u4f7f\u7528\r\n\r\n```\r\nnpm i omi-cli -g             \r\nomi init my-app   \r\ncd my-app           \r\nnpm start                     \r\nnpm run build    \r\n```\r\n\r\n> `npx omi-cli init my-app` \u4e5f\u652f\u6301(\u8981\u6c42 npm v5.2.0+)\r\n\r\n## \u73b0\u6709\u9879\u76ee\u4f7f\u7528\r\n\r\n```js\r\nnpm i omiu\r\n```\r\n\r\n```js\r\nimport { WeElement, define, render } from 'omi'\r\nimport 'omiu/button'\r\n\r\ndefine('my-app', class extends WeElement {\r\n  onClick = () => {\r\n    console.log('Hello omiu!');\r\n  }\r\n\r\n  render() {\r\n    return (\r\n      <o-button onClick={this.onClick}>\u6309\u94ae</o-button>\r\n    )\r\n  }\r\n})\r\n\r\nrender(<my-app />, 'body')\r\n```"}});
//# sourceMappingURL=15.9f4d8727.chunk.js.map