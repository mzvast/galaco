(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{"./src/docs/pages/plugins.mdx":function(e,n,t){"use strict";t.r(n),t.d(n,"default",function(){return l});var s=t("../../node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js"),o=(t("../../node_modules/react/index.js"),t("../../node_modules/@mdx-js/react/dist/index.es.js")),p={},a="wrapper";function l(e){var n=e.components,t=Object(s.a)(e,["components"]);return Object(o.b)(a,Object.assign({},p,t,{components:n,mdxType:"MDXLayout"}),Object(o.b)("h2",{id:"getpx2vw\u63d2\u4ef6"},"getPx2vw\u63d2\u4ef6"),Object(o.b)("p",null,"\u63d2\u4ef6\u7684\u4f5c\u7528\u662f\u628a\u7528styled\u5199\u7684\u7ec4\u4ef6\u4e2d\u7684px\u8f6c\u6362\u6210vw\u3002"),Object(o.b)("p",null,"\u5982\u679c\u662fretina\u5c4f\u5e55\uff0c1px\u4f1a\u8f6c\u6362\u6210\u62100.5px\u3002"),Object(o.b)("p",null,"\u63a8\u8350\u7684\u4f7f\u7528\u65b9\u5f0f,\u901a\u8fc7\u7ed9getPx2vw\u4f20\u5165",Object(o.b)("inlineCode",{parentName:"p"},"\u8bbe\u8ba1\u7a3f\u5bbd\u5ea6px\u6570\u503c"),"\u6765\u521b\u5efa\u63d2\u4ef6\u5b9e\u4f8b\u3002\u5c06\u8be5\u5b9e\u4f8b\u4f20\u5165StyleSheetManager(\u8981\u6c42Styled-component\u7248\u672cv5+)\u7684stylisPlugins\u63d2\u4ef6"),Object(o.b)("p",null,"\u8be5\u63d2\u4ef6\u81ea\u52a8\u7ed1\u5b9a\u5230Box\u7684CSSProps\u89e3\u6790\u3002\u5982\u679c\u4e0d\u9700\u8981\u8be5\u7ed1\u5b9a\uff08\u4e00\u822c\u4e0d\u5efa\u8bae\u53d6\u6d88\u7ed1\u5b9a\uff09\uff0c\u8bf7\u5728\u63d2\u4ef6\u521b\u5efa\u540e\u6267\u884c",Object(o.b)("inlineCode",{parentName:"p"},"window['galacoMoGaiCssPlugin'] = null")),Object(o.b)("pre",null,Object(o.b)("code",Object.assign({parentName:"pre"},{className:"language-tsx"}),"import {getPx2vw} from 'galaco';\n\nconst cssPlugin = getPx2vw(1280);\n\nconst TestObj = styled(Box)`\n    width:640px;\n    height:1px;\n    background-color: red;\n`;\ntype Props = {\n    children: React.ReactNode;\n};\ntype State = {};\nclass Wrapper extends React.Component<Props, State> {\n    render() {\n        const {children} = this.props;\n        return (\n            //@ts-ignore\n            <StyleSheetManager stylisPlugins={[cssPlugin]}>\n                <TestObj>\n                    <Box>testObj</Box>\n                    <Box width={'200px'} height={'100px'} background={'red'} border={'1px solid blue'}></Box>\n                </TestObj>\n            </StyleSheetManager>\n        );\n    }\n}\n\nexport default Wrapper;\n")),Object(o.b)("p",null,"\u7136\u540e\u8fd9\u4e2aTestObj\u7684width\u4f1a\u53d8\u6210vw\uff0c1px\u6839\u636e\u662f\u5426retina\u53d8\u62100.5px\u6216\u8005\u4e0d\u53d8\u3002"),Object(o.b)("p",null,"\u6ce8\u610f\uff1a\u8be5\u63d2\u4ef6\u53ef\u80fd\u5b58\u5728\u7684\u95ee\u9898\u662f\uff0c\u901a\u8fc7devicePixelRatio\u5224\u5b9a\u7684\u662f\u5426retina\u5c4f\u5e55\u3002\u4f46\u5982\u679c\u662fretina\u5c4f\u5e55\uff0c\u4f46\u6d4f\u89c8\u5668\u4e0d\u652f\u63010.5px\u7684\u6570\u503c\uff0c\u5219\u4f1a\u663e\u793a\u4e0d\u51fa\u8fd91px\u7ebf\u3002"),Object(o.b)("p",null,"Todo\uff1a\u4e4b\u540e\u53ef\u80fd\u57fa\u4e8e",Object(o.b)("inlineCode",{parentName:"p"},"utils/test1px.tsx"),"\u7684\u65b9\u5f0f\u53bb\u68c0\u6d4b\u662f\u5426\u80fd\u663e\u793a1px\u7684\u7ebf\uff0c\u4f46\u4e0d\u6539\u53d8\u76ee\u524d\u4f46API\u3002"))}l&&l===Object(l)&&Object.isExtensible(l)&&Object.defineProperty(l,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"MDXContent",filename:"src/docs/pages/plugins.mdx"}}),l.isMDXComponent=!0}}]);
//# sourceMappingURL=src-docs-pages-plugins.d5fbcf95c312f0de0cfa.js.map