(this.webpackJsonptkngen=this.webpackJsonptkngen||[]).push([[0],{285:function(e,t,n){},320:function(e,t){},343:function(e,t){},345:function(e,t){},421:function(e,t){},423:function(e,t){},455:function(e,t){},460:function(e,t){},462:function(e,t){},469:function(e,t){},482:function(e,t){},500:function(e,t){},507:function(e,t){},509:function(e,t){},582:function(e,t,n){"use strict";n.r(t);var a=n(1),c=n.n(a),o=n(27),r=n.n(o),s=(n(284),n(285),n(63)),i=n(32),l=n.n(i),d=n(5),b=n(12),h=n(20),p=n(19),u=n(96),j=n.p+"static/media/eth-logo.a85b6de0.png",m=n.p+"static/media/eth.fc2007e0.png",O=n.p+"static/media/binance-logo.12f6ca37.png",k=n(113),C=n(2),f=function(){return Object(C.jsx)("div",{className:"sidebar-header",children:Object(C.jsx)("img",{src:j,alt:"",style:{width:"2rem",height:"2rem"}})})},x=function(e){var t=e.img,n=e.h2Data,a=e.activeChange,c=e.which,o=e.active;return Object(C.jsxs)("div",{className:"gen-token-link "+o,onClick:function(e){a(e,c)},children:[Object(C.jsx)("img",{src:t,alt:"",style:{height:"2rem",width:"2rem"}}),Object(C.jsx)("h2",{children:n})]})},v=function(e){var t=e.activeChange,n=e.ERCComp,a=e.BEPComp;return Object(C.jsxs)("div",{className:"gen-token-links",children:[Object(C.jsx)(x,{img:m,h2Data:"ERC",activeChange:t,which:"ERCComp",active:n?"active":""}),Object(C.jsx)(x,{img:O,h2Data:"BEP",activeChange:t,which:"BEPComp",active:a?"active":""})]})},g=function(){return Object(C.jsxs)("a",{style:{textDecoration:"none"},href:"https://github.com/sntsabode/tkngen",className:"github-credits btn-gradient",children:[Object(C.jsx)("h3",{children:"Check it out on Github"}),Object(C.jsx)(k.a,{className:"github-logo",style:{width:"4rem",height:"4rem"}})]})},y=function(e){var t=e.activeChange,n=e.ERCComp,a=e.BEPComp;return Object(C.jsxs)("div",{className:"sidebar",children:[Object(C.jsx)(f,{}),Object(C.jsx)(v,{activeChange:t,ERCComp:n,BEPComp:a}),Object(C.jsx)(g,{})]})},S=function(){return Object(C.jsxs)(C.Fragment,{children:[Object(C.jsx)("div",{className:"circle-1"}),Object(C.jsx)("div",{className:"circle-2"})]})},N=n(628),w=n(619),T=n(633),E=n(623),P=n(585),M=n(634),B=n(631),R=n(635),D=n(622),W={modal:{position:"absolute",width:"35%",height:"60%",border:"none",background:"linear-gradient(to right bottom, rgba(255, 255, 255, 0.7), rgba(255, 255, 255, 0.3))",borderRadius:"2rem",display:"flex",flexDirection:"column",alignItems:"center"},"modal-btn":{width:"40%",height:"4rem",color:"gray !important",border:"none",borderRadius:"2rem",fontSize:"14pt",fontWeight:700}},A=Object(w.a)((function(){return Object(T.a)({"token-name-sym-modal":W.modal,"tkn-name-sym-inputs":{display:"flex",flexDirection:"column",alignItems:"center",padding:"0rem 2rem"},"tkn-input":{margin:"2rem 2rem","& :hover":{borderColor:"#bfbfbf"}},"tkn-input-box":{"& :active":{borderColor:"#bfbfbf"},"& :hover":{borderColor:"#bfbfbf"}},"deploy-tkn-f-btn":W["modal-btn"]})})),K=function(e){var t=e.setOpenClose,n=e.modalOpen,a=e.handleOnchange,c=e.TokenName,o=e.TokenSymbol,r=e.onClick,s=A(),i=Object(C.jsxs)("div",{className:"modal stan token-name-sym",children:[Object(C.jsx)("h2",{id:"metadata-step-title",className:"tkn-ns-title",children:"Meta Data"}),Object(C.jsxs)("form",{className:s["tkn-name-sym-inputs"],noValidate:!0,autoComplete:"off",children:[Object(C.jsxs)(M.a,{fullWidth:!0,className:s["tkn-input"],variant:"outlined",children:[Object(C.jsx)(R.a,{htmlFor:"outlined-adornment-amount",children:"Token Name"}),Object(C.jsx)(B.a,{id:"outlined-adornment-amount",value:c,startAdornment:Object(C.jsx)(D.a,{position:"start",children:"$"}),labelWidth:100,className:s["tkn-input-box"],onChange:a("TokenName")})]}),Object(C.jsxs)(M.a,{fullWidth:!0,className:s["tkn-input"],variant:"outlined",children:[Object(C.jsx)(R.a,{htmlFor:"outlined-adornment-amount",children:"Token Symbol"}),Object(C.jsx)(B.a,{id:"outlined-adornment-amount",value:o,startAdornment:Object(C.jsx)(D.a,{position:"start",children:"$"}),labelWidth:110,className:s["tkn-input-box"],onChange:a("TokenSymbol")})]})]}),Object(C.jsx)("div",{style:{marginTop:"2rem"}}),Object(C.jsx)("button",{className:s["deploy-tkn-f-btn"]+" secondary-btn-tkn",onClick:r,children:"NEXT"})]});return Object(C.jsx)(N.a,{open:n,onClose:function(){t(!1)},"aria-labelledby":"metadata-step-title",closeAfterTransition:!0,BackdropComponent:E.a,BackdropProps:{timeout:800,style:{backdropFilter:"blur(2rem)"}},children:Object(C.jsx)(P.a,{in:n,children:i})})},F=n(624),I=n(269),U=n(13),_=n(636),H=Object(U.a)((function(e){return Object(T.a)({root:{width:42,height:26,padding:0,margin:e.spacing(1)},switchBase:{padding:1,"&$checked":{transform:"translateX(16px)",color:e.palette.common.white,"& + $track":{backgroundColor:"#52d869",opacity:1,border:"none"}},"&$focusVisible $thumb":{color:"#52d869",border:"6px solid #fff"}},thumb:{width:24,height:24},track:{borderRadius:13,border:"1px solid ".concat(e.palette.grey[400]),backgroundColor:e.palette.grey[50],opacity:1,transition:e.transitions.create(["background-color","border"])},checked:{},focusVisible:{}})}))((function(e){var t=e.classes,n=Object(I.a)(e,["classes"]);return Object(C.jsx)(_.a,Object(d.a)({focusVisibleClassName:t.focusVisible,disableRipple:!0,classes:{root:t.root,switchBase:t.switchBase,thumb:t.thumb,track:t.track,checked:t.checked},className:"switch-btn"},n))})),V=n(584);function L(e){var t=e.networkModalOpen,n=e.setOpenClose,a=e.networks,c=e.onChange,o=e.deployToken,r=Object(C.jsxs)("div",{style:{top:"12.5%",left:"32.5%"},className:"modal tenup",children:[Object(C.jsx)("h2",{id:"network-step-title",className:"tkn-ns-title",children:"Network"}),Object(C.jsx)("p",{className:"modal-explain",children:"Select the network you want your token deployed on."}),Object(C.jsxs)("div",{className:"network-switches-container",children:[Object(C.jsx)(V.a,{component:"div",children:Object(C.jsxs)(F.a,{component:"label",container:!0,alignItems:"center",spacing:1,children:[Object(C.jsx)(F.a,{item:!0,className:"switch-label",children:a.netOne.net}),Object(C.jsx)(F.a,{item:!0,children:Object(C.jsx)(H,{checked:a.netOne.checked,onChange:function(e){c(e,a.netOne.net,"netOneChecked")},name:"mintable-check"})})]})}),Object(C.jsx)(V.a,{component:"div",children:Object(C.jsxs)(F.a,{component:"label",container:!0,alignItems:"center",spacing:1,children:[Object(C.jsx)(F.a,{item:!0,children:Object(C.jsx)(H,{checked:a.netTwo.checked,onChange:function(e){c(e,a.netTwo.net,"netTwoChecked")},name:"mintable-check"})}),Object(C.jsx)(F.a,{item:!0,className:"switch-label",children:a.netTwo.net})]})})]}),Object(C.jsx)("div",{className:"network-exper-switch",children:Object(C.jsx)(V.a,{component:"div",children:Object(C.jsxs)(F.a,{component:"label",style:{display:"flex",flexDirection:"column"},container:!0,alignItems:"center",spacing:1,children:[Object(C.jsx)(F.a,{item:!0,className:"switch-label",children:a.netThree.net}),Object(C.jsx)(F.a,{item:!0,children:Object(C.jsx)(H,{checked:a.netThree.checked,onChange:function(e){c(e,a.netThree.net,"netThreeChecked")},name:"mintable-check"})})]})})}),Object(C.jsx)("button",{className:"modal-btn confirm-button secondary-btn-tkn",onClick:o,children:"Deploy!"})]});return Object(C.jsx)(N.a,{open:t,onClose:function(){n(!1)},"aria-labelledby":"network-step-title",closeAfterTransition:!0,BackdropComponent:E.a,BackdropProps:{timeout:800,style:{backdropFilter:"blur(2rem)"}},children:Object(C.jsx)(P.a,{in:t,children:r})})}var z=n(264),$=function(e){var t=e.pvtkModalOpen,n=e.setOpenClose,a=e.pvtkOnChange,c=e.PrivateKey,o=e.confirmPvtk,r=Object(C.jsxs)("div",{style:{top:"15%",left:"32.5%"},className:"modal fiveup pvtk-modal",children:[Object(C.jsx)("h2",{id:"pvtk-step-title",className:"tkn-ns-title",children:"Private Key"}),Object(C.jsx)("p",{className:"modal-explain",children:"Unfortunately we have to ask for your private key as most of the complexity pertaining the contract deployment is handled serverside."}),Object(C.jsx)("form",{noValidate:!0,autoComplete:"off",children:Object(C.jsx)(M.a,{fullWidth:!0,className:"pvtk-input",variant:"outlined",children:Object(C.jsx)(B.a,{id:"pvtk-input",value:c,startAdornment:Object(C.jsx)(D.a,{position:"start",children:Object(C.jsx)(z.a,{})}),labelWidth:50,onChange:a})})}),Object(C.jsx)("button",{className:"modal-btn confirm-button secondary-btn-tkn",onClick:o,children:"Confirm"})]});return Object(C.jsx)(N.a,{open:t,onClose:function(){n(!1)},"aria-labelledby":"pvtk-step-title",closeAfterTransition:!0,BackdropComponent:E.a,BackdropProps:{timeout:800,style:{backdropFilter:"blur(2rem)"}},children:Object(C.jsx)(P.a,{in:t,children:r})})},q=n(120),X=function(e){var t=e.BEPComp,n=e.ERCComp,a=e.connectWeb3,c=e.Web3Status;return Object(C.jsx)("h3",{className:"heading",children:Object(C.jsxs)("div",{className:"status",children:[Object(C.jsxs)("div",{children:[n&&Object(C.jsxs)(C.Fragment,{children:[Object(C.jsx)("h1",{children:"Deploy ERC20"}),Object(C.jsx)("p",{children:"Fill in the form to deploy your ERC20 token!"})]}),t&&Object(C.jsxs)(C.Fragment,{children:[Object(C.jsx)("h1",{children:"Deploy BEP20"}),Object(C.jsx)("p",{children:"Fill in the form to deploy your BEP20 token!"})]})]}),Object(C.jsxs)("button",{id:"main-connect-web3-btn",className:"connect-web3-btn secondary-btn-tkn",onClick:a,children:[Object(C.jsx)("p",{children:"Connect Web3"}),Object(C.jsx)(q.a,{className:"web3-status-icon",style:{color:c}})]})]})})},Y=function(e){var t=e.mintableChecked,n=e.burnableChecked,a=e.handleSwitchChange;return Object(C.jsxs)("div",{className:"mintable-burnable-switches push-down",children:[Object(C.jsx)(V.a,{component:"div",children:Object(C.jsxs)(F.a,{component:"label",container:!0,alignItems:"center",spacing:1,children:[Object(C.jsx)(F.a,{item:!0,className:"switch-label",children:"Mintable"}),Object(C.jsx)(F.a,{item:!0,children:Object(C.jsx)(H,{checked:t,onChange:function(e){a(e,"mintableChecked")},name:"mintable-check"})})]})}),Object(C.jsx)(V.a,{component:"div",children:Object(C.jsxs)(F.a,{component:"label",container:!0,alignItems:"center",spacing:1,children:[Object(C.jsx)(F.a,{item:!0,children:Object(C.jsx)(H,{checked:n,onChange:function(e){a(e,"burnableChecked")},name:"burnable-check"})}),Object(C.jsx)(F.a,{item:!0,className:"switch-label",children:"Burnable"})]})})]})},G=n(637),J="0 3px 1px rgba(0,0,0,0.1),0 4px 8px rgba(0,0,0,0.13),0 0 0 1px rgba(0,0,0,0.02)",Q=Object(U.a)({root:{color:"#3880ff",height:2,padding:"15px 0"},thumb:{height:28,width:28,backgroundColor:"#fff",boxShadow:J,marginTop:-14,marginLeft:-14,"&:focus, &:hover, &$active":{boxShadow:"0 3px 1px rgba(0,0,0,0.1),0 4px 8px rgba(0,0,0,0.3),0 0 0 1px rgba(0,0,0,0.02)","@media (hover: none)":{boxShadow:J}}},active:{},valueLabel:{left:"calc(-50% + 12px)",top:-22,"& *":{color:"#000",background:"transparent"}},track:{height:2},rail:{height:2,opacity:.5,backgroundColor:"#bfbfbf"},mark:{backgroundColor:"#bfbfbf",height:8,width:1,marginTop:-3},markActive:{opacity:1,backgroundColor:"currentColor"}})(G.a),Z=function(e){var t=e.label,n=e.marks,a=e.defaultValue,c=e.max,o=e.restricted,r=e.onChange;return Object(C.jsxs)(C.Fragment,{children:[Object(C.jsx)("p",{className:"switch-label",children:t}),Object(C.jsx)(Q,{"aria-label":"slider",defaultValue:a,marks:n,valueLabelDisplay:"on",step:o?null:a/10,max:c,onChange:r})]})},ee=function(e){var t=e.handleSliderChange;return Object(C.jsxs)("div",{className:"slider-comps",children:[Object(C.jsx)("div",{className:"deploy-token-comp",children:Object(C.jsx)(Z,{label:"Decimals",defaultValue:18,max:18,restricted:!0,marks:[{value:6},{value:8},{value:12},{value:18}],onChange:function(e,n){t(e,"Decimals",n)}})}),Object(C.jsx)("div",{className:"deploy-token-comp class2",children:Object(C.jsx)(Z,{label:"Total Supply",defaultValue:1e5,max:1e5,restricted:!0,marks:[{value:1e4},{value:5e4},{value:1e5}],onChange:function(e,n){t(e,"TotalSupply",n)}})})]})},te=function(e){var t=e.mintableChecked,n=e.burnableChecked,a=e.handleSwitchChange,c=e.handleSliderChange,o=e.ERCComp,r=e.BEPComp,s=e.openTknNameSymModal,i=e.Web3Status,l=e.connectWeb3;return Object(C.jsxs)("div",{className:"main-content",children:[Object(C.jsx)(X,{ERCComp:o,BEPComp:r,Web3Status:i,connectWeb3:l}),Object(C.jsxs)("div",{className:"deploy-token-card",children:[Object(C.jsx)(Y,{mintableChecked:t,burnableChecked:n,handleSwitchChange:a}),Object(C.jsx)(ee,{handleSliderChange:c}),Object(C.jsx)("div",{className:"deploy-token-btn-div",children:Object(C.jsx)("button",{className:"deploy-token-btn secondary-btn-tkn",onClick:s,children:"NEXT"})})]})]})},ne=n(265),ae=n.n(ne),ce=n(266),oe=n.n(ce),re=n(626),se=Object(w.a)((function(e){return{root:{width:"100%","& > * + *":{marginTop:e.spacing(2)}}}})),ie=function(){var e=se();return Object(C.jsx)("div",{className:e.root,children:Object(C.jsx)(re.a,{})})},le=function(e){var t=e.loadingModalOpen;return Object(C.jsx)(N.a,{open:t,closeAfterTransition:!0,BackdropComponent:E.a,BackdropProps:{timeout:500,style:{backdropFilter:"blur(2rem)"}},children:Object(C.jsx)(P.a,{in:t,children:Object(C.jsx)(ie,{})})})},de=n(632),be=n(629),he=function(e){return Object(C.jsx)(be.a,Object(d.a)({elevation:6,variant:"filled"},e))},pe=Object(w.a)((function(){return{root:{width:"100%"}}})),ue=function(e){var t=e.successSnackOpen,n=e.errorSnackOpen,a=e.enterPvtkSnackOpen,c=e.forgotTknNameSymSnackOpen,o=e.tokenType,r=e.handleClose,s=e.infoSnackOpen,i=e.enteredPrivateKeySnackOpen,l=pe();return Object(C.jsxs)("div",{className:l.root,children:[Object(C.jsx)(de.a,{anchorOrigin:{vertical:"top",horizontal:"center"},open:t,autoHideDuration:6e3,onClose:r("successSnackOpen"),children:Object(C.jsxs)(he,{onClose:r("successSnackOpen"),severity:"success",children:["Successfully deployed your ",o," token! \ud83c\udf89\ud83d\udc83\ud83d\udc83"]})}),Object(C.jsx)(de.a,{anchorOrigin:{vertical:"top",horizontal:"center"},open:n,autoHideDuration:6e3,onClose:r("errorSnackOpen"),children:Object(C.jsx)(he,{onClose:r("errorSnackOpen"),severity:"error",children:"There has been an error deploying your token..."})}),Object(C.jsx)(de.a,{anchorOrigin:{vertical:"top",horizontal:"center"},open:s,autoHideDuration:6e3,onClose:r("infoSnackOpen"),children:Object(C.jsx)(he,{onClose:r("infoSnackOpen"),severity:"info",children:"You will be redirected shortly..."})}),Object(C.jsx)(de.a,{anchorOrigin:{vertical:"top",horizontal:"center"},open:a,autoHideDuration:9e3,onClose:r("enterPvtkSnackOpen"),children:Object(C.jsxs)(he,{onClose:r("enterPvtkSnackOpen"),severity:"info",children:["Please enter your private key. (We recommend not using this service for mainnet deployments for this exact reason. If you wish to deploy a ",o," token, please kindly contact the developer)"]})}),Object(C.jsx)(de.a,{anchorOrigin:{vertical:"top",horizontal:"center"},open:i,autoHideDuration:9e3,onClose:r("enteredPrivateKeySnackOpen"),children:Object(C.jsx)(he,{onClose:r("enteredPrivateKeySnackOpen"),severity:"warning",children:"You have successfully entered your private key. We hope this is a test net key and not a real private key. For your safety we recommend not using this service for mainnet deployments."})}),Object(C.jsx)(de.a,{anchorOrigin:{vertical:"top",horizontal:"center"},open:c,autoHideDuration:9e3,onClose:r("forgotTknNameSymSnackOpen"),children:Object(C.jsxs)(he,{onClose:r("forgotTknNameSymSnackOpen"),severity:"error",children:["Uh oh. You forgot to enter the name and symbol for your ",o," token."]})})]})},je=n(268),me=n(97),Oe=function(){return Object(C.jsx)("div",{className:"not-on-mobile-container",children:Object(C.jsxs)("div",{className:"glass",children:[Object(C.jsx)("h1",{children:"Unfortunately tkngen is not available on mobile."}),Object(C.jsxs)("a",{style:{textDecoration:"none"},href:"https://github.com/sntsabode/tkngen",className:"github-credits sceondary-btn-tkn",children:[Object(C.jsx)("h3",{children:"Check it out on Github"}),Object(C.jsx)(k.a,{className:"github-logo",style:{width:"4rem",height:"4rem"}})]})]})})},ke=function(e){var t=e.connectWeb3,n=e.Web3Status,a=e.openCloseSidebar;return Object(C.jsxs)("div",{className:"top-nav",children:[Object(C.jsx)(je.a,{onClick:a,className:"menu-icon"}),Object(C.jsxs)("button",{id:"secondary-connect-web3-btn",className:"connect-web3-btn secondary-btn-tkn",onClick:t,children:[Object(C.jsx)("p",{children:"Connect Web3"}),Object(C.jsx)(q.a,{className:"web3-status-icon",style:{color:n}})]})]})};function Ce(e,t){return fe.apply(this,arguments)}function fe(){return(fe=Object(u.a)(l.a.mark((function e(t,n){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",ae.a.post(t,n));case 1:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var xe="http://localhost:9000/ERC-20/",ve="http://localhost:9000/BEP-20/",ge={mainnet:"",testnet:"https://testnet.bscscan.com/tx/"},ye={mainnet:"",kovan:""},Se=function(e){Object(h.a)(n,e);var t=Object(p.a)(n);function n(){var e;Object(b.a)(this,n);for(var a=arguments.length,c=new Array(a),o=0;o<a;o++)c[o]=arguments[o];return(e=t.call.apply(t,[this].concat(c))).Web3=void 0,e.state={URL:xe,ERCComp:!0,BEPComp:!1,mintableChecked:!1,burnableChecked:!0,TokenName:"",TokenSymbol:"",Decimals:18,TotalSupply:1e5,tokenNameSymModalOpen:!1,networkModalOpen:!1,loadingModalOpen:!1,pvtkModalOpen:!1,PrivateKey:"",Network:"",netOneChecked:!1,netTwoChecked:!1,netThreeChecked:!1,Web3Status:"#ff4444",tokenType:"ERC20",successSnackOpen:!1,errorSnackOpen:!1,infoSnackOpen:!1,enterPvtkSnackOpen:!1,enteredPrivateKeySnackOpen:!1,forgotTknNameSymSnackOpen:!1,sidebarOpen:!1,pvtk:""},e.deployToken=Object(u.a)(l.a.mark((function t(){var n,a,c,o;return l.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(e.deployToken_.checkParams()){t.next=3;break}return e.state.tokenNameSymModalOpen||setTimeout((function(){return e.setState(Object(d.a)(Object(d.a)({},e.state),{},{tokenNameSymModalOpen:!0}))}),2e3),t.abrupt("return");case 3:if(e.state.Network){t.next=6;break}return me.b.error("Please select a network",{position:"top-left"}),t.abrupt("return");case 6:if(n=!1,e.handlers.handlepvtkModalOpenClose=function(t){n=!0,e.setState(Object(d.a)(Object(d.a)({},e.state),{},{pvtkModalOpen:t}))},t.prev=8,e.state.pvtk){t.next=13;break}return e.setState(Object(d.a)(Object(d.a)({},e.state),{},{networkModalOpen:!1,enterPvtkSnackOpen:!0})),setTimeout((function(){return e.state.pvtkModalOpen||n?{}:e.setState(Object(d.a)(Object(d.a)({},e.state),{},{pvtkModalOpen:!0}))}),1e4),t.abrupt("return");case 13:return a=e.deployToken_.determineUrlPath(),e.setState(Object(d.a)(Object(d.a)({},e.state),{},{networkModalOpen:!1,loadingModalOpen:!0})),t.next=17,e.deployToken_.sendRequest(a);case 17:c=t.sent,o=e.deployToken_.determineRedirectUrl(c.data.data.receipt.transactionHash),console.log(c),e.handlers.handlepvtkModalOpenClose=function(t){e.setState(Object(d.a)(Object(d.a)({},e.state),{},{pvtkModalOpen:t}))},e.deployToken_.redirectUser(o),t.next=30;break;case 24:if(t.prev=24,t.t0=t.catch(8),e.setState(Object(d.a)(Object(d.a)({},e.state),{},{loadingModalOpen:!1,errorSnackOpen:!0})),t.t0.response){t.next=29;break}return t.abrupt("return");case 29:t.t0.response.data.err?setTimeout((function(){t.t0.response.data.err.errors.forEach((function(e){me.b.error(e.msg,{position:"top-left"})})),e.setState(Object(d.a)(Object(d.a)({},e.state),{},{errorSnackOpen:!1}))}),1e3):t.t0.response.data.e&&setTimeout((function(){e.setState(Object(d.a)(Object(d.a)({},e.state),{},{errorSnackOpen:!1})),me.b.error(t.t0.response.data.e,{position:"top-left"})}),1e3);case 30:case"end":return t.stop()}}),t,null,[[8,24]])}))),e.deployToken_={redirectUser:function(t){e.setState(Object(d.a)(Object(d.a)({},e.state),{},{loadingModalOpen:!1})),setTimeout((function(){return e.setState(Object(d.a)(Object(d.a)({},e.state),{},{successSnackOpen:!0}))}),500),setTimeout((function(){return e.setState(Object(d.a)(Object(d.a)({},e.state),{},{infoSnackOpen:!0,successSnackOpen:!1}))}),2e3),setTimeout((function(){return window.location.href=t}),5e3)},determineUrlPath:function(){return e.state.mintableChecked&&!e.state.burnableChecked?e.state.URL+"Mintable":e.state.burnableChecked&&!e.state.mintableChecked?e.state.URL+"Burnable":e.state.mintableChecked&&e.state.burnableChecked?e.state.URL+"MintableBurnable":e.state.URL+"Standard"},determineRedirectUrl:function(t){return"BSC Test Net"===e.state.Network?ge.testnet+t:"BSC"===e.state.Network?ge.mainnet+t:"KOVAN"===e.state.Network?ye.kovan+t:"MAINNET"===e.state.Network?ye.mainnet+t:"/"},sendRequest:function(t){return Ce(t,{tokenName:e.state.TokenName,tokenDecimals:e.state.Decimals,tokenSymbol:e.state.TokenSymbol,totalSupply:e.state.TotalSupply,privateKey:e.state.pvtk,network:"BSC Test Net"===e.state.Network?"BINANCESMARTCHAIN_TEST":"BSC"===e.state.Network?"BINANCESMARTCHAIN":"ETH FORK"===e.state.Network?"MAINNET_FORK":"BSC FORK"===e.state.Network?"BINANCESMARTCHAIN_FORK":e.state.Network})},checkParams:function(){return!(!e.state.TokenName||!e.state.TokenSymbol)||(e.setState(Object(d.a)(Object(d.a)({},e.state),{},{networkModalOpen:!1,forgotTknNameSymSnackOpen:!0})),!1)}},e.connectWeb3=function(){var t=Object(u.a)(l.a.mark((function t(n){return l.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(n.preventDefault(),window.ethereum){t.next=3;break}return t.abrupt("return",alert("Uh oh"));case 3:return t.next=5,window.ethereum.send("eth_requestAccounts");case 5:e.Web3=new oe.a(window.ethereum),e.setState(Object(d.a)(Object(d.a)({},e.state),{},{Web3Status:"#00C851"})),e.handlers.handlepvtkModalOpenClose(!0);case 8:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),e.render=function(){return Object(C.jsxs)(C.Fragment,{children:[Object(C.jsxs)("main",{className:"main-container",children:[Object(C.jsxs)("section",{className:"glass",children:[Object(C.jsx)(y,{activeChange:e.handlers.activeChange,ERCComp:e.state.ERCComp,BEPComp:e.state.BEPComp}),Object(C.jsxs)("div",{className:"container",children:[Object(C.jsx)(ke,{connectWeb3:e.connectWeb3,Web3Status:e.state.Web3Status,openCloseSidebar:function(t){e.state.sidebarOpen||(document.getElementById("sidebar_").style.display="flex !important",e.setState(Object(d.a)(Object(d.a)({},e.state),{},{sidebarOpen:!0})),console.log("sidebar open")),document.getElementById("sidebar_").style.display="none !important",e.setState(Object(d.a)(Object(d.a)({},e.state),{},{sidebarOpen:!1}))}}),Object(C.jsx)(te,{mintableChecked:e.state.mintableChecked,burnableChecked:e.state.burnableChecked,handleSwitchChange:e.handlers.handleSwitchChange,handleSliderChange:e.handlers.handleSliderChange,ERCComp:e.state.ERCComp,BEPComp:e.state.BEPComp,openTknNameSymModal:function(t){t.preventDefault(),console.log(e.deployToken_.determineUrlPath()),e.handlers.handletokenNameSymModalOpenClose(!0)},Web3Status:e.state.Web3Status,connectWeb3:e.connectWeb3}),Object(C.jsx)(K,{modalOpen:e.state.tokenNameSymModalOpen,setOpenClose:e.handlers.handletokenNameSymModalOpenClose,handleOnchange:e.handlers.handleTknNameSymOnChange,TokenName:e.state.TokenName,TokenSymbol:e.state.TokenSymbol,onClick:function(t){t.preventDefault(),e.handlers.handletokenNameSymModalOpenClose(!1),setTimeout((function(){return e.handlers.handlenetworkModalOpenClose(!0)}),200)}}),Object(C.jsx)(L,{networkModalOpen:e.state.networkModalOpen,setOpenClose:e.handlers.handlenetworkModalOpenClose,networks:{netOne:{net:e.state.ERCComp?"MAINNET":"BSC",checked:e.state.netOneChecked},netTwo:{net:e.state.ERCComp?"KOVAN":"BSC Test Net",checked:e.state.netTwoChecked},netThree:{net:e.state.ERCComp?"ETH FORK":"BSC FORK",checked:e.state.netThreeChecked}},onChange:e.handlers.handleNetworkChange,deployToken:function(){var t=Object(u.a)(l.a.mark((function t(n){return l.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n.preventDefault(),t.abrupt("return",e.deployToken());case 2:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()}),Object(C.jsx)($,{pvtkModalOpen:e.state.pvtkModalOpen,setOpenClose:e.handlers.handlepvtkModalOpenClose,pvtkOnChange:function(t){return e.setState(Object(d.a)(Object(d.a)({},e.state),{},{PrivateKey:t.target.value}))},PrivateKey:e.state.PrivateKey,confirmPvtk:e.handlers.confirmPvtk}),Object(C.jsx)(le,{loadingModalOpen:e.state.loadingModalOpen}),Object(C.jsx)(ue,{successSnackOpen:e.state.successSnackOpen,forgotTknNameSymSnackOpen:e.state.forgotTknNameSymSnackOpen,errorSnackOpen:e.state.errorSnackOpen,tokenType:e.state.tokenType,infoSnackOpen:e.state.infoSnackOpen,handleClose:function(t){return function(){return e.setState(Object(d.a)(Object(d.a)({},e.state),{},Object(s.a)({},t,!1)))}},enterPvtkSnackOpen:e.state.enterPvtkSnackOpen,enteredPrivateKeySnackOpen:e.state.enteredPrivateKeySnackOpen})]})]}),Object(C.jsx)(me.a,{}),Object(C.jsx)(S,{})]}),Object(C.jsx)(Oe,{})]})},e.handlers={activeChange:function(t,n){if(t.preventDefault(),"ERCComp"===n){var a=!e.state.ERCComp;e.setState(Object(d.a)(Object(d.a)({},e.state),{},{ERCComp:a,BEPComp:!a,URL:xe,Network:"KOVAN",tokenType:"ERC20"}))}else{var c=!e.state.BEPComp;e.setState(Object(d.a)(Object(d.a)({},e.state),{},{BEPComp:c,ERCComp:!c,URL:ve,Network:"BINANCESMARTCHAIN_TEST",tokenType:"BEP20"}))}},handleSwitchChange:function(t,n){t.preventDefault(),e.setState(Object(d.a)(Object(d.a)({},e.state),{},Object(s.a)({},n,!e.state[n])))},handleSliderChange:function(t,n,a){t.preventDefault(),e.setState(Object(d.a)(Object(d.a)({},e.state),{},Object(s.a)({},n,a)))},handletokenNameSymModalOpenClose:function(t){e.setState(Object(d.a)(Object(d.a)({},e.state),{},{tokenNameSymModalOpen:t}))},handleTknNameSymOnChange:function(t){return function(n){e.setState(Object(d.a)(Object(d.a)({},e.state),{},Object(s.a)({},t,n.target.value)))}},handlenetworkModalOpenClose:function(t){e.setState(Object(d.a)(Object(d.a)({},e.state),{},{networkModalOpen:t}))},handleNetworkChange:function(t,n,a){return{netOneChecked:function(){return e.state.netOneChecked?e.setState(Object(d.a)(Object(d.a)({},e.state),{},{Network:n,netOneChecked:!1,netTwoChecked:!1,netThreeChecked:!1})):e.setState(Object(d.a)(Object(d.a)({},e.state),{},{Network:n,netOneChecked:!0,netTwoChecked:!1,netThreeChecked:!1}))},netTwoChecked:function(){return e.state.netTwoChecked?e.setState(Object(d.a)(Object(d.a)({},e.state),{},{Network:n,netOneChecked:!1,netTwoChecked:!1,netThreeChecked:!1})):e.setState(Object(d.a)(Object(d.a)({},e.state),{},{Network:n,netOneChecked:!1,netTwoChecked:!0,netThreeChecked:!1}))},netThreeChecked:function(){return e.state.netThreeChecked?e.setState(Object(d.a)(Object(d.a)({},e.state),{},{Network:n,netOneChecked:!1,netTwoChecked:!1,netThreeChecked:!1})):e.setState(Object(d.a)(Object(d.a)({},e.state),{},{Network:n,netOneChecked:!1,netTwoChecked:!1,netThreeChecked:!0}))}}[a]()},handlepvtkModalOpenClose:function(t){e.setState(Object(d.a)(Object(d.a)({},e.state),{},{pvtkModalOpen:t}))},confirmPvtk:function(t){t.preventDefault();"\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022"!==e.state.PrivateKey&&e.setState(Object(d.a)(Object(d.a)({},e.state),{},{pvtk:e.state.PrivateKey,PrivateKey:"\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022"})),setTimeout((function(){e.setState(Object(d.a)(Object(d.a)({},e.state),{},{pvtkModalOpen:!1,enteredPrivateKeySnackOpen:!0}))}),800)}},e}return n}(c.a.Component),Ne=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,638)).then((function(t){var n=t.getCLS,a=t.getFID,c=t.getFCP,o=t.getLCP,r=t.getTTFB;n(e),a(e),c(e),o(e),r(e)}))};r.a.render(Object(C.jsx)(c.a.StrictMode,{children:Object(C.jsx)(Se,{})}),document.getElementById("root")),Ne()}},[[582,1,2]]]);
//# sourceMappingURL=main.65cb10f9.chunk.js.map