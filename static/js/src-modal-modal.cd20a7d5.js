(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{"./src/modal/Modal.mdx":function(e,n,t){"use strict";t.r(n);var o=t("../../node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js"),a=t("../../node_modules/react/index.js"),r=t.n(a),l=t("../../node_modules/@mdx-js/react/dist/index.es.js"),s=t("./src/modal/Modal.tsx"),d=t("../../node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/classCallCheck.js"),p=t("../../node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/createClass.js"),c=t("../../node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js"),m=t("../../node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js"),b=t("../../node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/inherits.js"),i=t("../../node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js"),u=t("./src/index.tsx");function h(){var e=Object(i.a)(["\n    width: 400px;\n    height: 200px;\n    box-shadow: 0 5px 20px 0 rgba(25, 46, 99, 0.1),\n        0 10px 40px 0 rgba(52, 65, 126, 0.1);\n    border-radius: 20px;\n    border: solid red 1px;\n    background-color: pink;\n"]);return h=function(){return e},e}var x=Object(u.m)(u.b)(h()),j=function(e){function n(){var e,t;Object(d.a)(this,n);for(var o=arguments.length,a=new Array(o),r=0;r<o;r++)a[r]=arguments[r];return(t=Object(c.a)(this,(e=Object(m.a)(n)).call.apply(e,[this].concat(a)))).state=void 0,t.modal1=null,t}return Object(b.a)(n,e),Object(p.a)(n,[{key:"render",value:function(){return r.a.createElement(u.i,null,function(e){return r.a.createElement(r.a.Fragment,null,r.a.createElement("button",{onClick:e.show},"show"),r.a.createElement(u.h,Object.assign({},e,{maskClosable:!0}),r.a.createElement(x,null,r.a.createElement("button",{onClick:e.hide},"close"))))})}}]),n}(a.Component);j.defaultProps={};var g=j;"undefined"!==typeof j&&j&&j===Object(j)&&Object.isExtensible(j)&&Object.defineProperty(j,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"Demo",filename:"src/modal/Demo.tsx"}});var O=t("../../node_modules/docz/dist/index.esm.js");t.d(n,"default",function(){return _});var f={},C="wrapper";function _(e){var n=e.components,t=Object(o.a)(e,["components"]);return Object(l.b)(C,Object.assign({},f,t,{components:n,mdxType:"MDXLayout"}),Object(l.b)("h1",{id:"modal"},"Modal"),Object(l.b)(O.d,{of:s.a,mdxType:"Props"}),Object(l.b)("h2",{id:"demo"},"Demo"),Object(l.b)(O.c,{__position:1,__code:"<Demo />",__scope:{props:this?this.props:t,Modal:s.a,Demo:g,Props:O.d,Playground:O.c,styled:u.m,css:u.j,keyframes:u.l},mdxType:"Playground"},Object(l.b)(g,{mdxType:"Demo"})),Object(l.b)("h2",{id:"code"},"Code"),Object(l.b)("p",null,"\u4ee5render props\u4f5c\u4e3aAPI\u8bbe\u8ba1\u601d\u8def\u3002",Object(l.b)("inlineCode",{parentName:"p"},"<WithModal/>"),"\u8fd4\u56demodal\u5bf9\u8c61\uff0c\u63d0\u4f9b\u4e86show,hide,toggle\u4e09\u79cd\u65b9\u6cd5\u548c\u591a\u79cd\u72b6\u6001\u3002"),Object(l.b)("p",null,"\u7531\u4e8e\u91c7\u7528\u4e86React Portal\uff0cModal\u80fd\u591f\u83b7\u5f97\u7ec4\u4ef6\u6240\u5728\u7684\u4e0a\u4e0b\u6587\u3002\u5e76\u53ea\u5728show\u7684\u65f6\u5019render\u3002"),Object(l.b)("h2",{id:"\u6b63\u5e38\u8c03\u7528"},"\u6b63\u5e38\u8c03\u7528"),Object(l.b)("pre",null,Object(l.b)("code",Object.assign({parentName:"pre"},{className:"language-jsx"}),"import React, {Component} from 'react';\nimport {styled, css, WithModal, Box, Modal, palette} from 'galaco';\n\nconst CardWrapper = styled(Box)`\n    width: 400px;\n    height: 200px;\n    box-shadow: 0 5px 20px 0 rgba(25, 46, 99, 0.1),\n        0 10px 40px 0 rgba(52, 65, 126, 0.1);\n    border-radius: 20px;\n    border: solid red 1px;\n    background-color: pink;\n`;\ntype Props = {};\ntype State = {};\nclass Demo extends Component<Props, State> {\n    state: State;\n    static defaultProps = {};\n\n    render() {\n        return (\n            <WithModal>\n                {modal => (\n                    <React.Fragment>\n                        <button onClick={modal.show}>show</button>\n                        <Modal {...modal} maskClosable>\n                            <CardWrapper>\n                                <button onClick={modal.hide}>close</button>\n                            </CardWrapper>\n                        </Modal>\n                    </React.Fragment>\n                )}\n            </WithModal>\n        );\n    }\n}\nexport default Demo;\n\n")),Object(l.b)("h2",{id:"\u5916\u90e8\u8c03\u7528"},"\u5916\u90e8\u8c03\u7528"),Object(l.b)("p",null,"\u5982\u5728render\u51fd\u6570\u4e2d\u4fdd\u5b58modal\u5b9e\u4f8b\uff0c\u53ef\u4f9b\u5916\u90e8\u8c03\u7528\u3002",Object(l.b)("inlineCode",{parentName:"p"},"{((this.modalInstance = modal), null)}")),Object(l.b)("pre",null,Object(l.b)("code",Object.assign({parentName:"pre"},{className:"language-typescript",metastring:"jsx",jsx:!0}),"import React, {Component} from 'react';\nimport {styled, css, WithModal, Box, Modal, palette} from 'galaco';\n\nconst CardWrapper = styled(Box)`\n    position: absolute;\n    width: 400px;\n    height: 200px;\n    box-shadow: 0 5px 20px 0 rgba(25, 46, 99, 0.1),\n        0 10px 40px 0 rgba(52, 65, 126, 0.1);\n    border-radius: 20px;\n    padding: 10px;\n`;\ntype Props = {};\ntype State = {};\nclass Demo extends Component<Props, State> {\n    state: State;\n    static defaultProps = {};\n    modal1 = null;\n    render() {\n        return (\n            <WithModal>\n                {modal => (\n                    <React.Fragment>\n                        {((this.modal1 = modal), null)}\n                        <button onClick={modal.show}>show</button>\n                        <Modal {...modal}>\n                            <CardWrapper backgroundColor=\"text\">\n                                <button onClick={modal.hide}>close</button>\n                            </CardWrapper>\n                        </Modal>\n                    </React.Fragment>\n                )}\n            </WithModal>\n        );\n    }\n\n    componentDidMount() {\n        setTimeout(() => {\n            this.modal1 && this.modal1.show();\n        }, 2000);\n    }\n}\nexport default Demo;\n\n\n")))}_&&_===Object(_)&&Object.isExtensible(_)&&Object.defineProperty(_,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"MDXContent",filename:"src/modal/Modal.mdx"}}),_.isMDXComponent=!0}}]);
//# sourceMappingURL=src-modal-modal.30381b9d90cf02f0257d.js.map