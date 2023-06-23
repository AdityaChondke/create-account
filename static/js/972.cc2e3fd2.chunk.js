"use strict";(self.webpackChunkberry_free_material_react_cra=self.webpackChunkberry_free_material_react_cra||[]).push([[972],{3365:function(t,n,e){var o=e(7462),i=e(3366),r=e(7313),a=e(2242),s=e(9860),l=e(265),u=e(6983),c=e(6417);const d=["addEndListener","appear","children","easing","in","onEnter","onEntered","onEntering","onExit","onExited","onExiting","style","timeout","TransitionComponent"];function f(t){return`scale(${t}, ${t**2})`}const p={entering:{opacity:1,transform:f(1)},entered:{opacity:1,transform:"none"}},m="undefined"!==typeof navigator&&/^((?!chrome|android).)*(safari|mobile)/i.test(navigator.userAgent)&&/(os |version\/)15(.|_)4/i.test(navigator.userAgent),h=r.forwardRef((function(t,n){const{addEndListener:e,appear:h=!0,children:v,easing:E,in:x,onEnter:g,onEntered:y,onEntering:S,onExit:Z,onExited:b,onExiting:C,style:N,timeout:k="auto",TransitionComponent:R=a.ZP}=t,T=(0,i.Z)(t,d),w=r.useRef(),O=r.useRef(),D=(0,s.Z)(),P=r.useRef(null),z=(0,u.Z)(P,v.ref,n),j=t=>n=>{if(t){const e=P.current;void 0===n?t(e):t(e,n)}},M=j(S),I=j(((t,n)=>{(0,l.n)(t);const{duration:e,delay:o,easing:i}=(0,l.C)({style:N,timeout:k,easing:E},{mode:"enter"});let r;"auto"===k?(r=D.transitions.getAutoHeightDuration(t.clientHeight),O.current=r):r=e,t.style.transition=[D.transitions.create("opacity",{duration:r,delay:o}),D.transitions.create("transform",{duration:m?r:.666*r,delay:o,easing:i})].join(","),g&&g(t,n)})),A=j(y),L=j(C),_=j((t=>{const{duration:n,delay:e,easing:o}=(0,l.C)({style:N,timeout:k,easing:E},{mode:"exit"});let i;"auto"===k?(i=D.transitions.getAutoHeightDuration(t.clientHeight),O.current=i):i=n,t.style.transition=[D.transitions.create("opacity",{duration:i,delay:e}),D.transitions.create("transform",{duration:m?i:.666*i,delay:m?e:e||.333*i,easing:o})].join(","),t.style.opacity=0,t.style.transform=f(.75),Z&&Z(t)})),$=j(b);return r.useEffect((()=>()=>{clearTimeout(w.current)}),[]),(0,c.jsx)(R,(0,o.Z)({appear:h,in:x,nodeRef:P,onEnter:I,onEntered:A,onEntering:M,onExit:_,onExited:$,onExiting:L,addEndListener:t=>{"auto"===k&&(w.current=setTimeout(t,O.current||0)),e&&e(P.current,t)},timeout:"auto"===k?null:k},T,{children:(t,n)=>r.cloneElement(v,(0,o.Z)({style:(0,o.Z)({opacity:0,transform:f(.75),visibility:"exited"!==t||x?void 0:"hidden"},p[t],N,v.props.style),ref:z},n))}))}));h.muiSupportAuto=!0,n.Z=h},593:function(t,n,e){var o=e(7313),i=e(1168),r=e(7472),a=e(2678),s=e(9265),l=e(6417);const u=o.forwardRef((function(t,n){const{children:e,container:u,disablePortal:c=!1}=t,[d,f]=o.useState(null),p=(0,r.Z)(o.isValidElement(e)?e.ref:null,n);if((0,a.Z)((()=>{c||f(function(t){return"function"===typeof t?t():t}(u)||document.body)}),[u,c]),(0,a.Z)((()=>{if(d&&!c)return(0,s.Z)(n,d),()=>{(0,s.Z)(n,null)}}),[n,d,c]),c){if(o.isValidElement(e)){const t={ref:p};return o.cloneElement(e,t)}return(0,l.jsx)(o.Fragment,{children:e})}return(0,l.jsx)(o.Fragment,{children:d?i.createPortal(e,d):d})}));n.Z=u},4219:function(t,n,e){e.d(n,{T:function(){return a}});var o=e(7313);e(6417);const i={disableDefaultClasses:!1},r=o.createContext(i);function a(t){const{disableDefaultClasses:n}=o.useContext(r);return e=>n?"":t(e)}},1285:function(t,n,e){e.d(n,{Z:function(){return r}});var o=e(7462),i=e(3100);function r(t,n,e){return void 0===t||(0,i.Z)(t)?n:(0,o.Z)({},n,{ownerState:(0,o.Z)({},n.ownerState,e)})}},3100:function(t,n,e){function o(t){return"string"===typeof t}e.d(n,{Z:function(){return o}})},7530:function(t,n,e){function o(t,n){return"function"===typeof t?t(n):t}e.d(n,{Z:function(){return o}})},3546:function(t,n,e){e.d(n,{Z:function(){return f}});var o=e(7462),i=e(3366),r=e(7472),a=e(1285),s=e(3061);function l(t){if(void 0===t)return{};const n={};return Object.keys(t).filter((n=>!(n.match(/^on[A-Z]/)&&"function"===typeof t[n]))).forEach((e=>{n[e]=t[e]})),n}function u(t){const{getSlotProps:n,additionalProps:e,externalSlotProps:i,externalForwardedProps:r,className:a}=t;if(!n){const t=(0,s.Z)(null==r?void 0:r.className,null==i?void 0:i.className,a,null==e?void 0:e.className),n=(0,o.Z)({},null==e?void 0:e.style,null==r?void 0:r.style,null==i?void 0:i.style),l=(0,o.Z)({},e,r,i);return t.length>0&&(l.className=t),Object.keys(n).length>0&&(l.style=n),{props:l,internalRef:void 0}}const u=function(t){let n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[];if(void 0===t)return{};const e={};return Object.keys(t).filter((e=>e.match(/^on[A-Z]/)&&"function"===typeof t[e]&&!n.includes(e))).forEach((n=>{e[n]=t[n]})),e}((0,o.Z)({},r,i)),c=l(i),d=l(r),f=n(u),p=(0,s.Z)(null==f?void 0:f.className,null==e?void 0:e.className,a,null==r?void 0:r.className,null==i?void 0:i.className),m=(0,o.Z)({},null==f?void 0:f.style,null==e?void 0:e.style,null==r?void 0:r.style,null==i?void 0:i.style),h=(0,o.Z)({},f,e,d,c);return p.length>0&&(h.className=p),Object.keys(m).length>0&&(h.style=m),{props:h,internalRef:f.ref}}var c=e(7530);const d=["elementType","externalSlotProps","ownerState"];function f(t){var n;const{elementType:e,externalSlotProps:s,ownerState:l}=t,f=(0,i.Z)(t,d),p=(0,c.Z)(s,l),{props:m,internalRef:h}=u((0,o.Z)({},f,{externalSlotProps:p})),v=(0,r.Z)(h,null==p?void 0:p.ref,null==(n=t.additionalProps)?void 0:n.ref);return(0,a.Z)(e,(0,o.Z)({},m,{ref:v}),l)}},265:function(t,n,e){e.d(n,{C:function(){return i},n:function(){return o}});const o=t=>t.scrollTop;function i(t,n){var e,o;const{timeout:i,easing:r,style:a={}}=t;return{duration:null!=(e=a.transitionDuration)?e:"number"===typeof i?i:i[n.mode]||0,easing:null!=(o=a.transitionTimingFunction)?o:"object"===typeof r?r[n.mode]:r,delay:a.transitionDelay}}},1171:function(t,n,e){e.d(n,{Z:function(){return g}});var o=e(7462),i=e(7313),r=e(3366),a=e(3061),s=e(1921),l=e(1615),u=e(7342),c=e(7592),d=e(7430),f=e(2298);function p(t){return(0,f.Z)("MuiSvgIcon",t)}(0,d.Z)("MuiSvgIcon",["root","colorPrimary","colorSecondary","colorAction","colorError","colorDisabled","fontSizeInherit","fontSizeSmall","fontSizeMedium","fontSizeLarge"]);var m=e(6417);const h=["children","className","color","component","fontSize","htmlColor","inheritViewBox","titleAccess","viewBox"],v=(0,c.ZP)("svg",{name:"MuiSvgIcon",slot:"Root",overridesResolver:(t,n)=>{const{ownerState:e}=t;return[n.root,"inherit"!==e.color&&n[`color${(0,l.Z)(e.color)}`],n[`fontSize${(0,l.Z)(e.fontSize)}`]]}})((t=>{let{theme:n,ownerState:e}=t;var o,i,r,a,s,l,u,c,d,f,p,m,h,v,E,x,g;return{userSelect:"none",width:"1em",height:"1em",display:"inline-block",fill:"currentColor",flexShrink:0,transition:null==(o=n.transitions)||null==(i=o.create)?void 0:i.call(o,"fill",{duration:null==(r=n.transitions)||null==(a=r.duration)?void 0:a.shorter}),fontSize:{inherit:"inherit",small:(null==(s=n.typography)||null==(l=s.pxToRem)?void 0:l.call(s,20))||"1.25rem",medium:(null==(u=n.typography)||null==(c=u.pxToRem)?void 0:c.call(u,24))||"1.5rem",large:(null==(d=n.typography)||null==(f=d.pxToRem)?void 0:f.call(d,35))||"2.1875rem"}[e.fontSize],color:null!=(p=null==(m=(n.vars||n).palette)||null==(h=m[e.color])?void 0:h.main)?p:{action:null==(v=(n.vars||n).palette)||null==(E=v.action)?void 0:E.active,disabled:null==(x=(n.vars||n).palette)||null==(g=x.action)?void 0:g.disabled,inherit:void 0}[e.color]}})),E=i.forwardRef((function(t,n){const e=(0,u.Z)({props:t,name:"MuiSvgIcon"}),{children:i,className:c,color:d="inherit",component:f="svg",fontSize:E="medium",htmlColor:x,inheritViewBox:g=!1,titleAccess:y,viewBox:S="0 0 24 24"}=e,Z=(0,r.Z)(e,h),b=(0,o.Z)({},e,{color:d,component:f,fontSize:E,instanceFontSize:t.fontSize,inheritViewBox:g,viewBox:S}),C={};g||(C.viewBox=S);const N=(t=>{const{color:n,fontSize:e,classes:o}=t,i={root:["root","inherit"!==n&&`color${(0,l.Z)(n)}`,`fontSize${(0,l.Z)(e)}`]};return(0,s.Z)(i,p,o)})(b);return(0,m.jsxs)(v,(0,o.Z)({as:f,className:(0,a.Z)(N.root,c),focusable:"false",color:x,"aria-hidden":!y||void 0,role:y?"img":void 0,ref:n},C,Z,{ownerState:b,children:[i,y?(0,m.jsx)("title",{children:y}):null]}))}));E.muiName="SvgIcon";var x=E;function g(t,n){function e(e,i){return(0,m.jsx)(x,(0,o.Z)({"data-testid":`${n}Icon`,ref:i},e,{children:t}))}return e.muiName=x.muiName,i.memo(i.forwardRef(e))}},3800:function(t,n,e){var o=e(782);n.Z=o.Z},9081:function(t,n,e){function o(t){return t&&t.ownerDocument||document}e.d(n,{Z:function(){return o}})},782:function(t,n,e){e.d(n,{Z:function(){return i}});var o=e(7313);function i(t){let{controlled:n,default:e,name:i,state:r="value"}=t;const{current:a}=o.useRef(void 0!==n),[s,l]=o.useState(e);return[a?n:s,o.useCallback((t=>{a||l(t)}),[])]}},3362:function(t,n,e){var o;e.d(n,{Z:function(){return s}});var i=e(7313);let r=0;const a=(o||(o=e.t(i,2)))["useId".toString()];function s(t){if(void 0!==a){const n=a();return null!=t?t:n}return function(t){const[n,e]=i.useState(t),o=t||n;return i.useEffect((()=>{null==n&&(r+=1,e(`mui-${r}`))}),[n]),o}(t)}},2242:function(t,n,e){e.d(n,{ZP:function(){return E}});var o=e(3366),i=e(1721),r=e(7313),a=e(1168),s=!1,l=e(10),u=e(3695),c="unmounted",d="exited",f="entering",p="entered",m="exiting",h=function(t){function n(n,e){var o;o=t.call(this,n,e)||this;var i,r=e&&!e.isMounting?n.enter:n.appear;return o.appearStatus=null,n.in?r?(i=d,o.appearStatus=f):i=p:i=n.unmountOnExit||n.mountOnEnter?c:d,o.state={status:i},o.nextCallback=null,o}(0,i.Z)(n,t),n.getDerivedStateFromProps=function(t,n){return t.in&&n.status===c?{status:d}:null};var e=n.prototype;return e.componentDidMount=function(){this.updateStatus(!0,this.appearStatus)},e.componentDidUpdate=function(t){var n=null;if(t!==this.props){var e=this.state.status;this.props.in?e!==f&&e!==p&&(n=f):e!==f&&e!==p||(n=m)}this.updateStatus(!1,n)},e.componentWillUnmount=function(){this.cancelNextCallback()},e.getTimeouts=function(){var t,n,e,o=this.props.timeout;return t=n=e=o,null!=o&&"number"!==typeof o&&(t=o.exit,n=o.enter,e=void 0!==o.appear?o.appear:n),{exit:t,enter:n,appear:e}},e.updateStatus=function(t,n){if(void 0===t&&(t=!1),null!==n)if(this.cancelNextCallback(),n===f){if(this.props.unmountOnExit||this.props.mountOnEnter){var e=this.props.nodeRef?this.props.nodeRef.current:a.findDOMNode(this);e&&(0,u.Q)(e)}this.performEnter(t)}else this.performExit();else this.props.unmountOnExit&&this.state.status===d&&this.setState({status:c})},e.performEnter=function(t){var n=this,e=this.props.enter,o=this.context?this.context.isMounting:t,i=this.props.nodeRef?[o]:[a.findDOMNode(this),o],r=i[0],l=i[1],u=this.getTimeouts(),c=o?u.appear:u.enter;!t&&!e||s?this.safeSetState({status:p},(function(){n.props.onEntered(r)})):(this.props.onEnter(r,l),this.safeSetState({status:f},(function(){n.props.onEntering(r,l),n.onTransitionEnd(c,(function(){n.safeSetState({status:p},(function(){n.props.onEntered(r,l)}))}))})))},e.performExit=function(){var t=this,n=this.props.exit,e=this.getTimeouts(),o=this.props.nodeRef?void 0:a.findDOMNode(this);n&&!s?(this.props.onExit(o),this.safeSetState({status:m},(function(){t.props.onExiting(o),t.onTransitionEnd(e.exit,(function(){t.safeSetState({status:d},(function(){t.props.onExited(o)}))}))}))):this.safeSetState({status:d},(function(){t.props.onExited(o)}))},e.cancelNextCallback=function(){null!==this.nextCallback&&(this.nextCallback.cancel(),this.nextCallback=null)},e.safeSetState=function(t,n){n=this.setNextCallback(n),this.setState(t,n)},e.setNextCallback=function(t){var n=this,e=!0;return this.nextCallback=function(o){e&&(e=!1,n.nextCallback=null,t(o))},this.nextCallback.cancel=function(){e=!1},this.nextCallback},e.onTransitionEnd=function(t,n){this.setNextCallback(n);var e=this.props.nodeRef?this.props.nodeRef.current:a.findDOMNode(this),o=null==t&&!this.props.addEndListener;if(e&&!o){if(this.props.addEndListener){var i=this.props.nodeRef?[this.nextCallback]:[e,this.nextCallback],r=i[0],s=i[1];this.props.addEndListener(r,s)}null!=t&&setTimeout(this.nextCallback,t)}else setTimeout(this.nextCallback,0)},e.render=function(){var t=this.state.status;if(t===c)return null;var n=this.props,e=n.children,i=(n.in,n.mountOnEnter,n.unmountOnExit,n.appear,n.enter,n.exit,n.timeout,n.addEndListener,n.onEnter,n.onEntering,n.onEntered,n.onExit,n.onExiting,n.onExited,n.nodeRef,(0,o.Z)(n,["children","in","mountOnEnter","unmountOnExit","appear","enter","exit","timeout","addEndListener","onEnter","onEntering","onEntered","onExit","onExiting","onExited","nodeRef"]));return r.createElement(l.Z.Provider,{value:null},"function"===typeof e?e(t,i):r.cloneElement(r.Children.only(e),i))},n}(r.Component);function v(){}h.contextType=l.Z,h.propTypes={},h.defaultProps={in:!1,mountOnEnter:!1,unmountOnExit:!1,appear:!1,enter:!0,exit:!0,onEnter:v,onEntering:v,onEntered:v,onExit:v,onExiting:v,onExited:v},h.UNMOUNTED=c,h.EXITED=d,h.ENTERING=f,h.ENTERED=p,h.EXITING=m;var E=h},3695:function(t,n,e){e.d(n,{Q:function(){return o}});var o=function(t){return t.scrollTop}}}]);