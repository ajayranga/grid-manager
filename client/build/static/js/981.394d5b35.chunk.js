"use strict";(self.webpackChunkclient2=self.webpackChunkclient2||[]).push([[981],{41671:function(e,n,r){r(72791);var o=r(6907),i=r(80184);n.Z=function(e){var n=e.title,r=void 0===n?"Welcome to Grid Manager app":n,t=e.description,a=void 0===t?"We provide you a Single Page App (SPA)":t,s=e.keywords,l=void 0===s?"React ,SPA":s;return(0,i.jsx)(o.B6,{children:(0,i.jsxs)(o.ql,{children:[(0,i.jsx)("title",{children:r}),(0,i.jsx)("meta",{name:"description",content:a}),(0,i.jsx)("meta",{name:"keywords",content:l}),(0,i.jsx)("meta",{name:"author",content:"Ajay Ranga"})]})})}},97981:function(e,n,r){r.r(n),r.d(n,{default:function(){return B}});var o=r(29439),i=r(72791),t=r(11647),a=r(81508),s=r(78711),l=r(45953),c=r(94162),d=r(79365),u=r(34420),m=r(37924),h=r(38254),p=r(13811),f=r(61091),v=r(46283),x=r(52791),Z=r(77194),j=r(86616),g=r(59434),w=r(57689),b=r(11087),P=r(55705),y=r(48178),S=r(68806),C=r(47103),z=C.Ry({name:C.Z_().min(2).max(25).required("Please enter your name"),email:C.Z_().email().required("Please enter your email"),phone:C.Z_().matches(/^[0-9]*$/,"Phone number can only contain digits").max(10).required("Please enter your phone number"),password:C.Z_().min(8).required("Please enter your password"),confirmPassword:C.Z_().required().oneOf([C.iH("password"),null],"Password must match")}),E=r(41671),A=r(80184);function B(){var e=(0,y.LK)().actions,n=(0,g.I0)(),r=(0,w.s0)(),C=(0,i.useState)(!1),B=(0,o.Z)(C,2),k=B[0],F=B[1],L=i.useState(!1),M=(0,o.Z)(L,2),W=M[0],D=M[1],I=(0,g.v9)(S.zh),R=(0,g.v9)(S.mU);(0,i.useEffect)((function(){""!==I&&F(!0)}),[I,n]);var N=(0,P.TA)({initialValues:{name:"",email:"",phone:"",password:"",confirmPassword:"",submit:null},validationSchema:z,validateOnChange:!0,validateOnBlur:!0,onSubmit:function(r,o){n(e.start({name:r.name,email:r.email,phone:r.phone,password:r.password})),o.resetForm()}}),V=N.values,O=N.handleBlur,q=N.handleChange,T=N.handleSubmit,H=N.errors,U=N.touched;return(0,i.useEffect)((function(){R&&r("/home")}),[r,R]),(0,A.jsxs)(A.Fragment,{children:[(0,A.jsx)(E.Z,{title:"Sign Up page"}),(0,A.jsxs)(x.Z,{component:"main",sx:{width:"50vw",minWidth:"350px",maxWidth:"550px",margin:"auto",height:"100vh",display:"flex",alignItems:"center"},children:[(0,A.jsx)(t.Z,{open:k,anchorOrigin:{vertical:"top",horizontal:"right"},autoHideDuration:6e3,onClose:function(){n(e.reset()),F(!1)},children:(0,A.jsxs)(a.Z,{severity:"warning",color:"warning",variant:"outlined",sx:{minWidth:"250px"},children:[(0,A.jsx)(s.Z,{children:"Error"}),I]})}),(0,A.jsx)("form",{onSubmit:T,style:{margin:"auto"},children:(0,A.jsxs)(l.ZP,{container:!0,spacing:3,children:[(0,A.jsx)(l.ZP,{item:!0,xs:12,children:(0,A.jsxs)(c.Z,{spacing:1,children:[(0,A.jsx)(d.Z,{htmlFor:"name",children:"Your Name"}),(0,A.jsx)(u.Z,{id:"name",type:"name",value:V.name,name:"name",onBlur:O,onChange:q,size:"small",placeholder:"Enter name",fullWidth:!0,error:Boolean(U.name&&H.name)}),U.name&&H.name&&(0,A.jsx)(m.Z,{error:!0,children:H.name})]})}),(0,A.jsx)(l.ZP,{item:!0,xs:12,children:(0,A.jsxs)(c.Z,{spacing:1,children:[(0,A.jsx)(d.Z,{htmlFor:"email",children:"Email Address"}),(0,A.jsx)(u.Z,{id:"email",type:"email",value:V.email,name:"email",onBlur:O,onChange:q,size:"small",placeholder:"Enter email address",fullWidth:!0,error:Boolean(U.email&&H.email)}),U.email&&H.email&&(0,A.jsx)(m.Z,{error:!0,children:H.email})]})}),(0,A.jsx)(l.ZP,{item:!0,xs:12,children:(0,A.jsxs)(c.Z,{spacing:1,children:[(0,A.jsx)(d.Z,{htmlFor:"phone",children:"Phone Number"}),(0,A.jsx)(u.Z,{id:"phone",type:"phone",value:V.phone,name:"phone",onBlur:O,onChange:q,size:"small",placeholder:"Enter Phone Number",fullWidth:!0,error:Boolean(U.phone&&H.phone)}),U.phone&&H.phone&&(0,A.jsx)(m.Z,{error:!0,children:H.phone})]})}),(0,A.jsx)(l.ZP,{item:!0,xs:12,children:(0,A.jsxs)(c.Z,{spacing:1,children:[(0,A.jsx)(d.Z,{htmlFor:"password",children:"Password"}),(0,A.jsx)(u.Z,{fullWidth:!0,error:Boolean(U.password&&H.password),id:"-password",type:W?"text":"password",value:V.password,name:"password",onBlur:O,onChange:q,size:"small",endAdornment:(0,A.jsx)(h.Z,{position:"end",children:(0,A.jsx)(p.Z,{"aria-label":"toggle password visibility",onClick:function(){return D(!W)},onMouseDown:function(e){return e.preventDefault()},edge:"end",size:"large",children:W?(0,A.jsx)(Z.Z,{}):(0,A.jsx)(j.Z,{})})}),placeholder:"Enter password"}),U.password&&H.password&&(0,A.jsx)(m.Z,{error:!0,children:H.password})]})}),(0,A.jsx)(l.ZP,{item:!0,xs:12,children:(0,A.jsxs)(c.Z,{spacing:1,children:[(0,A.jsx)(d.Z,{htmlFor:"confirmPassword",children:"Confirm Password"}),(0,A.jsx)(u.Z,{fullWidth:!0,error:Boolean(U.confirmPassword&&H.confirmPassword),id:"-confirmPassword",type:"password",value:V.confirmPassword,name:"confirmPassword",onBlur:O,onChange:q,size:"small",placeholder:"Enter confirmPassword"}),U.confirmPassword&&H.confirmPassword&&(0,A.jsx)(m.Z,{error:!0,children:H.confirmPassword})]})}),H.submit&&(0,A.jsx)(l.ZP,{item:!0,xs:12,children:(0,A.jsx)(m.Z,{error:!0,children:H.submit})}),(0,A.jsx)(l.ZP,{item:!0,xs:12,children:(0,A.jsx)(f.Z,{fullWidth:!0,size:"large",type:"submit",variant:"contained",color:"primary",children:"Sign Up"})}),(0,A.jsx)(l.ZP,{item:!0,children:(0,A.jsx)(v.Z,{variant:"h6",component:b.rU,to:"/",color:"text.primary",fontSize:"medium",sx:{textDecoration:"none"},children:"Already have an account! Sign In"})})]})})]})]})}},68806:function(e,n,r){r.d(n,{mU:function(){return l},zh:function(){return s},zr:function(){return a}});var o=r(46916),i=r(48178),t=function(e){return e.signup||i.E3},a=(0,o.P1)([t],(function(e){return e.userInfo.name})),s=((0,o.P1)([t],(function(e){return e.userInfo.email})),(0,o.P1)([t],(function(e){return e.userInfo.phone})),(0,o.P1)([t],(function(e){return e.userInfo.token})),(0,o.P1)([t],(function(e){return e.loading})),(0,o.P1)([t],(function(e){return e.error}))),l=(0,o.P1)([t],(function(e){return e.success}))},86616:function(e,n,r){var o=r(64836);n.Z=void 0;var i=o(r(45649)),t=r(80184),a=(0,i.default)((0,t.jsx)("path",{d:"M12 6c3.79 0 7.17 2.13 8.82 5.5-.59 1.22-1.42 2.27-2.41 3.12l1.41 1.41c1.39-1.23 2.49-2.77 3.18-4.53C21.27 7.11 17 4 12 4c-1.27 0-2.49.2-3.64.57l1.65 1.65C10.66 6.09 11.32 6 12 6zm-1.07 1.14L13 9.21c.57.25 1.03.71 1.28 1.28l2.07 2.07c.08-.34.14-.7.14-1.07C16.5 9.01 14.48 7 12 7c-.37 0-.72.05-1.07.14zM2.01 3.87l2.68 2.68C3.06 7.83 1.77 9.53 1 11.5 2.73 15.89 7 19 12 19c1.52 0 2.98-.29 4.32-.82l3.42 3.42 1.41-1.41L3.42 2.45 2.01 3.87zm7.5 7.5 2.61 2.61c-.04.01-.08.02-.12.02-1.38 0-2.5-1.12-2.5-2.5 0-.05.01-.08.01-.13zm-3.4-3.4 1.75 1.75c-.23.55-.36 1.15-.36 1.78 0 2.48 2.02 4.5 4.5 4.5.63 0 1.23-.13 1.77-.36l.98.98c-.88.24-1.8.38-2.75.38-3.79 0-7.17-2.13-8.82-5.5.7-1.43 1.72-2.61 2.93-3.53z"}),"VisibilityOffOutlined");n.Z=a},77194:function(e,n,r){var o=r(64836);n.Z=void 0;var i=o(r(45649)),t=r(80184),a=(0,i.default)((0,t.jsx)("path",{d:"M12 6c3.79 0 7.17 2.13 8.82 5.5C19.17 14.87 15.79 17 12 17s-7.17-2.13-8.82-5.5C4.83 8.13 8.21 6 12 6m0-2C7 4 2.73 7.11 1 11.5 2.73 15.89 7 19 12 19s9.27-3.11 11-7.5C21.27 7.11 17 4 12 4zm0 5c1.38 0 2.5 1.12 2.5 2.5S13.38 14 12 14s-2.5-1.12-2.5-2.5S10.62 9 12 9m0-2c-2.48 0-4.5 2.02-4.5 4.5S9.52 16 12 16s4.5-2.02 4.5-4.5S14.48 7 12 7z"}),"VisibilityOutlined");n.Z=a},38254:function(e,n,r){r.d(n,{Z:function(){return b}});var o=r(4942),i=r(63366),t=r(87462),a=r(72791),s=r(28182),l=r(94419),c=r(49853),d=r(4565),u=r(51211),m=r(66155),h=r(76863),p=r(21217);function f(e){return(0,p.Z)("MuiInputAdornment",e)}var v,x=(0,r(75878).Z)("MuiInputAdornment",["root","filled","standard","outlined","positionStart","positionEnd","disablePointerEvents","hiddenLabel","sizeSmall"]),Z=r(67254),j=r(80184),g=["children","className","component","disablePointerEvents","disableTypography","position","variant"],w=(0,h.ZP)("div",{name:"MuiInputAdornment",slot:"Root",overridesResolver:function(e,n){var r=e.ownerState;return[n.root,n["position".concat((0,c.Z)(r.position))],!0===r.disablePointerEvents&&n.disablePointerEvents,n[r.variant]]}})((function(e){var n=e.theme,r=e.ownerState;return(0,t.Z)({display:"flex",height:"0.01em",maxHeight:"2em",alignItems:"center",whiteSpace:"nowrap",color:(n.vars||n).palette.action.active},"filled"===r.variant&&(0,o.Z)({},"&.".concat(x.positionStart,"&:not(.").concat(x.hiddenLabel,")"),{marginTop:16}),"start"===r.position&&{marginRight:8},"end"===r.position&&{marginLeft:8},!0===r.disablePointerEvents&&{pointerEvents:"none"})})),b=a.forwardRef((function(e,n){var r=(0,Z.Z)({props:e,name:"MuiInputAdornment"}),o=r.children,h=r.className,p=r.component,x=void 0===p?"div":p,b=r.disablePointerEvents,P=void 0!==b&&b,y=r.disableTypography,S=void 0!==y&&y,C=r.position,z=r.variant,E=(0,i.Z)(r,g),A=(0,m.Z)()||{},B=z;z&&A.variant,A&&!B&&(B=A.variant);var k=(0,t.Z)({},r,{hiddenLabel:A.hiddenLabel,size:A.size,disablePointerEvents:P,position:C,variant:B}),F=function(e){var n=e.classes,r=e.disablePointerEvents,o=e.hiddenLabel,i=e.position,t=e.size,a=e.variant,s={root:["root",r&&"disablePointerEvents",i&&"position".concat((0,c.Z)(i)),a,o&&"hiddenLabel",t&&"size".concat((0,c.Z)(t))]};return(0,l.Z)(s,f,n)}(k);return(0,j.jsx)(u.Z.Provider,{value:null,children:(0,j.jsx)(w,(0,t.Z)({as:x,ownerState:k,className:(0,s.Z)(F.root,h),ref:n},E,{children:"string"!==typeof o||S?(0,j.jsxs)(a.Fragment,{children:["start"===C?v||(v=(0,j.jsx)("span",{className:"notranslate",children:"\u200b"})):null,o]}):(0,j.jsx)(d.Z,{color:"text.secondary",children:o})}))})}))},46283:function(e,n,r){r.d(n,{Z:function(){return z}});var o=r(93433),i=r(29439),t=r(4942),a=r(63366),s=r(87462),l=r(72791),c=r(28182),d=r(94419),u=r(49853),m=r(76863),h=r(67254),p=r(42763),f=r(57933),v=r(4565),x=r(21217);function Z(e){return(0,x.Z)("MuiLink",e)}var j=(0,r(75878).Z)("MuiLink",["root","underlineNone","underlineHover","underlineAlways","button","focusVisible"]),g=r(18529),w=r(12065),b={primary:"primary.main",textPrimary:"text.primary",secondary:"secondary.main",textSecondary:"text.secondary",error:"error.main"},P=function(e){var n=e.theme,r=e.ownerState,o=function(e){return b[e]||e}(r.color),i=(0,g.D)(n,"palette.".concat(o),!1)||r.color,t=(0,g.D)(n,"palette.".concat(o,"Channel"));return"vars"in n&&t?"rgba(".concat(t," / 0.4)"):(0,w.Fq)(i,.4)},y=r(80184),S=["className","color","component","onBlur","onFocus","TypographyClasses","underline","variant","sx"],C=(0,m.ZP)(v.Z,{name:"MuiLink",slot:"Root",overridesResolver:function(e,n){var r=e.ownerState;return[n.root,n["underline".concat((0,u.Z)(r.underline))],"button"===r.component&&n.button]}})((function(e){var n=e.theme,r=e.ownerState;return(0,s.Z)({},"none"===r.underline&&{textDecoration:"none"},"hover"===r.underline&&{textDecoration:"none","&:hover":{textDecoration:"underline"}},"always"===r.underline&&(0,s.Z)({textDecoration:"underline"},"inherit"!==r.color&&{textDecorationColor:P({theme:n,ownerState:r})},{"&:hover":{textDecorationColor:"inherit"}}),"button"===r.component&&(0,t.Z)({position:"relative",WebkitTapHighlightColor:"transparent",backgroundColor:"transparent",outline:0,border:0,margin:0,borderRadius:0,padding:0,cursor:"pointer",userSelect:"none",verticalAlign:"middle",MozAppearance:"none",WebkitAppearance:"none","&::-moz-focus-inner":{borderStyle:"none"}},"&.".concat(j.focusVisible),{outline:"auto"}))})),z=l.forwardRef((function(e,n){var r=(0,h.Z)({props:e,name:"MuiLink"}),t=r.className,m=r.color,v=void 0===m?"primary":m,x=r.component,j=void 0===x?"a":x,g=r.onBlur,w=r.onFocus,P=r.TypographyClasses,z=r.underline,E=void 0===z?"always":z,A=r.variant,B=void 0===A?"inherit":A,k=r.sx,F=(0,a.Z)(r,S),L=(0,p.Z)(),M=L.isFocusVisibleRef,W=L.onBlur,D=L.onFocus,I=L.ref,R=l.useState(!1),N=(0,i.Z)(R,2),V=N[0],O=N[1],q=(0,f.Z)(n,I),T=(0,s.Z)({},r,{color:v,component:j,focusVisible:V,underline:E,variant:B}),H=function(e){var n=e.classes,r=e.component,o=e.focusVisible,i=e.underline,t={root:["root","underline".concat((0,u.Z)(i)),"button"===r&&"button",o&&"focusVisible"]};return(0,d.Z)(t,Z,n)}(T);return(0,y.jsx)(C,(0,s.Z)({color:v,className:(0,c.Z)(H.root,t),classes:P,component:j,onBlur:function(e){W(e),!1===M.current&&O(!1),g&&g(e)},onFocus:function(e){D(e),!0===M.current&&O(!0),w&&w(e)},ref:q,ownerState:T,variant:B,sx:[].concat((0,o.Z)(Object.keys(b).includes(v)?[]:[{color:v}]),(0,o.Z)(Array.isArray(k)?k:[k]))},F))}))}}]);
//# sourceMappingURL=981.394d5b35.chunk.js.map