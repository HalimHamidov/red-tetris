(this["webpackJsonpred-tetris"]=this["webpackJsonpred-tetris"]||[]).push([[0],{130:function(e,n,t){},133:function(e,n,t){"use strict";t.r(n);var a=t(0),r=t.n(a),i=t(22),c=t.n(i),o=t(6),d=t(11),s={0:{shape:[[0]],color:"0, 0, 0"},P:{shape:[[0]],color:"36, 37, 38"},I:{shape:[["I","I","I","I"],[0,0,0,0],[0,0,0,0],[0,0,0,0]],color:"111,168,220"},J:{shape:[[0,"J",0],[0,"J",0],["J","J",0]],color:"0,0,255"},L:{shape:[[0,"L",0],[0,"L",0],[0,"L","L"]],color:"255,165,0"},S:{shape:[[0,"S","S"],["S","S",0],[0,0,0]],color:"0,128,0"},T:{shape:[["T","T","T"],[0,"T",0],[0,0,0]],color:"128,0,128"},Z:{shape:[["Z","Z",0],[0,"Z","Z"],[0,0,0]],color:"255,0,0"},D:{shape:[["D","D",0],["D","D",0],[0,0,0]],color:"255,255,0"}},p=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:20,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:10;return Array.from(Array(e),(function(){return new Array(n).fill([0,"clear"])}))},l=function(e,n,t){for(var a=t.x,r=t.y,i=0;i<e.tetromino.length;i++)for(var c=0;c<e.tetromino.length;c++)if(0!==e.tetromino[i][c]&&(!n[i+e.pos.y+r]||!n[i+e.pos.y+r][c+e.pos.x+a]||"clear"!==n[i+e.pos.y+r][c+e.pos.x+a][1]))return!0;return!1},x=t(64),u=t.n(x)()("http://localhost:4242"),m=function(e,n,t,r,i,c,d,s){var l=Object(a.useState)(p()),x=Object(o.a)(l,2),m=x[0],b=x[1],h=Object(a.useState)(p(4,4)),j=Object(o.a)(h,2),f=j[0],g=j[1],O=Object(a.useState)(0),w=Object(o.a)(O,2),y=w[0],v=w[1];return Object(a.useEffect)((function(){v(0);var a=function(n){var a=n.map((function(e){return e.map((function(e){return"clear"===e[1]?[0,"clear"]:e}))}));return e.tetromino.forEach((function(n,t){n.forEach((function(n,r){0!==n&&(a[t+e.pos.y][r+e.pos.x]=[n,"".concat(e.collided?"merged":"clear")])}))})),e.collided&&!r?(t(a),g(p(4,4)),u.emit("Stage",{stage:m,player:i,room:c,players:d}),function(e){return e.reduce((function(n,t){return-1===t.findIndex((function(e){return 0===e[0]||"P"===e[0]}))?(v((function(e){return e+1})),n.unshift(new Array(e[0].length).fill([0,"clear"])),n):(n.push(t),n)}),[])}(a)):a};s.length>0&&n.tetromino?n.tetromino.forEach((function(e,t){e.forEach((function(e,a){0!==e&&(f[t][a]=[e,"".concat(n.collided?"merged":"clear")])}))})):g(p(4,4)),b((function(e){return a(e)}))}),[e]),[m,f,b,y]},b=t(3),h="START_GAME",j="GAME_OVER",f="ROOM_JOINED",g="UPDATE_MODE",O="CHANGE_PIECE",w="CLEAR_PIECES",y="UPDATE_MEMBER",v="UPDATE_NAME";var E,S,_,z,A,T,k,R,D,I,C,P,L,N,M,J,U,Y,Z,W="ADD_PLAYER_NAME",F="UPDATE_PLAYER",B="ADMIN_PLAYER",G="PLAYER_LOST",H="SET_ROW",K=t(8),V=t(4),X=t(5),q=X.a.input(E||(E=Object(V.a)(["\npadding: 18px;\nborder-radius: 8px;\nborder: 2px solid #8e7cc3;\ncolor: #e06666;\nbackground: #fff;\nwidth: 60%;\nmin-width: 288px;\nfont-size: 21px;\n::placeholder {\n  color: #6aa84f;\n}\n@media screen and (min-width: 2048px) {\n  font-size: 20px;\n}\n@media screen and (max-width: 768px) {\n  font-size: 18px;\n}\n@media screen and (max-width: 480px) {\n  font-size: 16px;\n}\n"]))),Q=X.a.button(S||(S=Object(V.a)(["\npadding: 8px;\nborder-radius: 8px;\nborder: 8px groove #6aa84f;\ncolor: #FF0000;\nbackground: #9fc5e8;\nfont-size: 24px;\nmargin: 0.8em;\nwidth: 8%;\nmin-width: 160px;\n:hover {\n  background: #ffe599;\n}\n@media screen and (min-width: 2048px) {\n  font-size: 18px;\n  min-width: 135px;\n\n}\n@media screen and (max-width: 768px) {\n  font-size: 18px;\n  min-width: 135px;\n\n}\n@media screen and (max-width: 480px) {\n  font-size: 16px;\n  min-width: 135px;\n\n}\n"]))),$=X.a.form.attrs({"data-testid":"addName-form"})(_||(_=Object(V.a)(["\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  top: 50%;\n  left: 50%;\n  position: absolute;\n  margin: auto;\n  width: 50%;\n  padding: 10px;\n  transform: translate(-50%, -50%);\n  @media screen and (min-width: 2048px) {\n  }\n  @media screen and (max-width: 768px) {\n  }\n  @media screen and (max-width: 480px) {\n  }\n"]))),ee=X.a.div(z||(z=Object(V.a)(["\ndisplay: flex;\nflex-direction: column;\nalign-items: center;\njustify-content: center;\nwidth: 100%;\ntop: 30%;\nleft: 50%;\nposition: absolute;\ntransform: translate(-50%, -30%);\n@media screen and (min-width: 2048px) {\n}\n@media screen and (max-width: 768px) {\n}\n@media screen and (max-width: 480px) {\n}\n"]))),ne=X.a.form(A||(A=Object(V.a)(["\ndisplay: flex;\nflex-direction: column;\nalign-items: center;\njustify-content: center;\n\nmargin: auto;\npadding: 10px;\n@media screen and (min-width: 2048px) {\n}\n@media screen and (max-width: 768px) {\n}\n@media screen and (max-width: 480px) {\n}\n"]))),te=X.a.div(T||(T=Object(V.a)(["\ndisplay: flex;\nalign-items: center;\n@media screen and (min-width: 2048px) {\n  flex-direction: column;\n}\n@media screen and (max-width: 768px) {\n  flex-direction: column;\n}\n@media screen and (max-width: 480px) {\n  flex-direction: column;\n}\n"]))),ae=X.a.select(k||(k=Object(V.a)(["\npadding: 16px;\nborder-radius: 8px;\nborder: 4px ridge #333;\ncolor: #f9cb9c;\nbackground: #000;\nmargin: 0.5em;\noutline: none;\nwidth: 25%;\nmin-width: 188px;\nfont-size: 22px;\n@media screen and (min-width: 2048px) {\n  font-size: 18px;\n  width: 95%;\n  padding: 15px;\n}\n@media screen and (max-width: 768px) {\n  font-size: 18px;\n  width: 95%;\n  padding: 15px;\n}\n@media screen and (max-width: 480px) {\n  font-size: 16px;\n  width: 80%;\n  padding: 15px;\n  min-width: 300px;\n}\n"]))),re=X.a.table(R||(R=Object(V.a)(["\nborder-width: 5px;\nbackground: #000;\nborder-collapse: collapse;\nborder-spacing: 0;\nwidth: 50%;\nborder: 1px solid #333;\nfont-size: 18px;\n@media screen and (min-width: 2048px) {\n  width: 60%;\n}\n@media screen and (max-width: 768px) {\n  width: 80%;\n}\n@media screen and (max-width: 480px) {\n  width: 100%;\n}\n"]))),ie=X.a.thead(D||(D=Object(V.a)(["\n"]))),ce=X.a.tbody(I||(I=Object(V.a)(["\n"]))),oe=X.a.tr(C||(C=Object(V.a)(["\nborder-width: 5px;\n"]))),de=X.a.th(P||(P=Object(V.a)(["\n"]))),se=X.a.td(L||(L=Object(V.a)(["\n"]))),pe=X.a.button(N||(N=Object(V.a)(["\npadding: 12px;\nborder-radius: 10px;\nborder: 4px solid #333;\ncolor: #000;\nbackground: #fff;\n\ncursor: pointer;\nmargin: 0.5em;\n\n\n:hover {\n  background: #333;\n  color: #fff;\n}\n\n"]))),le=t(1),xe=function(){var e=Object(K.b)(),n=Object(a.useState)(""),t=Object(o.a)(n,2),r=t[0],i=t[1];function c(n){var t;n.preventDefault(),""!==r.trim()?e((t=r.trim(),{type:W,data:t})):(i(""),d.b.error("Please Enter correct 1 to 12 characters in length player and room names"))}return Object(a.useEffect)((function(){document.getElementById("username-i")&&document.getElementById("username-i").focus()})),Object(le.jsxs)($,{onSubmit:function(e){return c(e)},children:[Object(le.jsx)(q,{id:"username-i",placeholder:"Enter Username",onChange:function(e){return i(e.target.value)}}),Object(le.jsx)(Q,{children:"Submit"})]})},ue=X.a.div(M||(M=Object(V.a)(["\n  width: auto;\n  background: rgba(",", 0.8);\n  border: ",";\n  border-bottom-color: rgba(",", 0.5);\n  border-top-color: rgba(",", 1);\n  border-right-color: rgba(",", 1);\n  border-left-color: rgba(",", 0.5);\n"])),(function(e){return e.color}),(function(e){return 0===e.type?"0px solid":"4px solid"}),(function(e){return e.color}),(function(e){return e.color}),(function(e){return e.color}),(function(e){return e.color})),me=function(e){var n,t=e.type;return Object(le.jsx)(ue,{type:t,color:null===(n=s[t])||void 0===n?void 0:n.color})},be=r.a.memo(me),he=X.a.div(J||(J=Object(V.a)(["\n  position: relative;\n  display: grid;\n  grid-template-rows: repeat(20, calc(499px / 20));\n  grid-template-columns: repeat(10, calc(1002px / 40));\n  grid-gap: 1px;\n  border: 4px solid #DC143C;\n  background: #777;\n  width: 518px/2;\n  height: 1024px/2;\n  @media screen and (min-width: 2048px) {\n    grid-template-rows: repeat(20, calc(299px / 10));\n    grid-template-columns: repeat(10, calc(602px / 20));\n    width: 320px;\n    height: 624px;\n  }\n  @media screen and (max-width: 768px) {\n    grid-template-rows: repeat(20, calc(299px / 10));\n    grid-template-columns: repeat(10, calc(602px / 20));\n    width: 320px;\n    height: 624px;\n  }\n  @media screen and (max-width: 480px) {\n    grid-template-rows: repeat(20, calc(199px / 10));\n    grid-template-columns: repeat(10, calc(401px / 20));\n    width: 220px;\n    height: 424px;\n  }\n"]))),je=X.a.div(U||(U=Object(V.a)(["\n  position: absolute;\n  width: 100%;\n  height: 100%;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  background-color: #333333;\n  z-index: 2;\n  outline: 4px solid #333333;\n  opacity: 0.9;\n"]))),fe=X.a.div(Y||(Y=Object(V.a)(['\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  display: flex;\n  flex-direction: column;\n  padding: 1px;\n  font-size: 25px;\n  align-items: center;\n  color: white;\n  transform: translate(-50%,-50%);\n  -ms-transform: translate(-50%,-50%);\n  h1 {\n    color: white;\n    font-family: "Lato";\n    font-size: 18px;\n    text-shadow: none;\n    text-align: center;\n    font-weight: bolder;\n    padding: 50px 0px 50px;\n    letter-spacing: 3px;\n  }\n  p {\n\n  }\n  @media screen and (min-width: 2048px) {\n    h1 {\n      color: white;\n      font-family: "Lato";\n      font-size: 18px;\n      text-shadow: none;\n      text-align: center;\n      font-weight: bolder;\n      padding: 50px 0px 50px;\n      letter-spacing: 3px;\n    }\n  }\n  @media screen and (max-width: 768px) {\n    h1 {\n      color: white;\n      font-family: "Lato";\n      font-size: 18px;\n      text-shadow: none;\n      text-align: center;\n      font-weight: bolder;\n      padding: 50px 0px 50px;\n      letter-spacing: 3px;\n    }\n  }\n  @media screen and (max-width: 480px) {\n    h1 {\n      color: white;\n      font-family: "Lato";\n      font-size: 18px;\n      text-shadow: none;\n      text-align: center;\n      font-weight: bolder;\n      padding: 50px 0px 50px;\n      letter-spacing: 3px;\n      font-size: large;\n    }\n  }\n']))),ge=X.a.div(Z||(Z=Object(V.a)(["\n  text-align: center;  \n"]))),Oe=t.p+"static/media/Gameover.4ce9fc00.jpeg",we=t.p+"static/media/Tetris-Founder.3c5b5893.png";function ye(e){var n=e.player;return Object(le.jsx)(je,{children:Object(le.jsxs)(fe,{children:[!0===(null===n||void 0===n?void 0:n.lost)?Object(le.jsx)("img",{"data-testid":"gameOver-Lost-img",style:{width:"255px"},src:Oe}):Object(le.jsx)("img",{"data-testid":"gameOver-Won-img",style:{width:"255px"},src:we}),Object(le.jsx)("h1",{children:!0===(null===n||void 0===n?void 0:n.lost)?"You lost! Try HARD!":"You Win! Congratulations! "}),Object(le.jsx)("p",{children:!0===(null===n||void 0===n?void 0:n.admin)?"Restart the game":"Wait for host to restart the game"})]})})}var ve,Ee,Se,_e,ze,Ae,Te,ke=function(e){var n=e.stage,t=e.gameOver,a=e.player;return n?Object(le.jsxs)(he,{width:n[0].length,height:n.length,children:[t&&Object(le.jsx)(ye,{player:a}),n.map((function(e,n){return e.map((function(e,n){return Object(le.jsx)(be,{type:e[0]},n)}))}))]}):Object(le.jsx)("span",{children:"Loading..."})},Re=X.a.div(ve||(ve=Object(V.a)(["\n  box-sizing: border-box;\n  display: flex;\n  flex-direction: column;\n  margin: 0 0 20px 0;\n  padding: 10px;\n  border-radius: 10px;\n  border: 4px solid #333;\n  color: ",";\n  background: #000;\n  font-size: 0.8 rem;\n  position: relative;\n  width: 150px;\n  height: 70px;\n  justify-content: center;\n  align-items: center;\n  padding-top: 20px;\n  @media screen and (min-width: 2048px) {\n    width: 100px;\n    height: 102px;\n  }\n  @media screen and (max-width: 768px) {\n    width: 100px;\n    height: 102px;\n  }\n  @media screen and (max-width: 480px) {\n    width: 90px;\n    height: 60px;\n  }\n"])),(function(e){return e.gameOver?"red":"#999"})),De=X.a.div(Ee||(Ee=Object(V.a)(["\n  box-sizing: border-box;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  margin: 0 0 20px 0;\n  padding: 10px;\n  border-radius: 10px;\n  border: 4px solid #333;\n  color:  '#999';\n  background: #000;\n  font-size: 0.8 rem;\n  position: relative;\n  width: 150px;\n  height: 132px;\n  @media screen and (min-width: 2048px) {\n    width: 100px;\n    height: 102px;\n  }\n  @media screen and (max-width: 768px) {\n    width: 100px;\n    height: 102px;\n  }\n  @media screen and (max-width: 480px) {\n    width: 90px;\n    height: 90px;\n  }\n"]))),Ie=X.a.div(Se||(Se=Object(V.a)(["\n  position: absolute;\n  top: 0;\n  left: 50%;\n  border-radius: 20px;\n  padding: 6px 20px;\n  margin: 0px 0px 20px 0px;\n  background: #333;\n  font-size: 0.8 rem;\n  color: white;\n  transform: translate(-50%, -50%);\n    @media screen and (min-width: 480px) {\n    font-size: 12px;\n    padding: 5px 10px;\n  }\n  @media screen and (max-width: 480px) {\n    font-size: 12px;\n    padding: 5px 10px;\n  }\n"]))),Ce=X.a.div(_e||(_e=Object(V.a)(["\n  font-size: xxx-large;\n  padding: 6px;\n  font-size: 0.8 rem;\n  color: white;\n  @media screen and (min-width: 2048px) {\n    font-size: 30px;\n  }\n  @media screen and (max-width: 480px) {\n    font-size: 30px;\n  }\n"]))),Pe=X.a.div(ze||(ze=Object(V.a)(["\n  display: grid;\n  grid-template-rows: repeat( 3, calc(130px / 4));\n  grid-template-columns: repeat(4, calc(130px / 4));\n  grid-gap: 1px;\n  padding: 10px;\n  @media screen and (min-width: 2048px) {\n    display: grid;\n    grid-template-rows: repeat( 3, calc(110px / 5));\n    grid-template-columns: repeat(4, calc(110px / 5));\n    grid-gap: 2px;\n    padding: 10px;\n  }\n  @media screen and (max-width: 768px) {\n    display: grid;\n    grid-template-rows: repeat( 3, calc(110px / 5));\n    grid-template-columns: repeat(4, calc(110px / 5));\n    grid-gap: 2px;\n    padding: 10px;\n  }\n  @media screen and (max-width: 480px) {\n    display: grid;\n    grid-template-rows: repeat( 3, calc(70px / 4));\n    grid-template-columns: repeat(4, calc(70px / 4));\n    grid-gap: 1px;\n    padding: 10px;\n  }\n"]))),Le=function(e){var n=e.gameover,t=e.title,a=e.data;return Object(le.jsxs)(Re,{gameOver:n,children:[Object(le.jsx)(Ie,{children:t}),Object(le.jsx)(Ce,{children:a})]})},Ne=X.a.div(Ae||(Ae=Object(V.a)(["\n  width: 100vw;\n  height: 100vh;\n  background-size: cover;\n  outline: none;\n"]))),Me=X.a.div(Te||(Te=Object(V.a)(["\n  display: flex;\n  align-items: flex-start;\n  margin: 0 auto;\n  height: 80%;\n  aside {\n    width: 100%;\n    max-width: 200px;\n    display: block;\n    padding: 0 20px;\n  }\n"]))),Je=t.p+"static/media/pop.3397007d.mp3",Ue=t.p+"static/media/tetriminos.24b50935.mp3",Ye=t(28),Ze=t(30),We=function(e){var n=e.stage,t=e.user,a=e.score;return n?Object(le.jsxs)(ge,{children:[Object(le.jsxs)("div",{className:"flex align-center justify-sa",children:[Object(le.jsx)("h3",{style:{color:"#fff"},children:t}),Object(le.jsx)("h2",{style:{color:"#fff"},children:a})]}),Object(le.jsx)("table",{style:{border:"1px solid"},children:n.map((function(e,n){return Object(le.jsx)("tbody",{children:Object(le.jsx)("tr",{style:{height:"15px",padding:"0px",margin:"0px"},children:e.map((function(e,t){return 0===e[0]?Object(le.jsx)("td",{"data-testid":"stagePColE-".concat(n),style:{border:0,width:"15px",padding:"0px",margin:"0px",height:"2px",backgroundColor:"#000",opacity:"30%"},type:e[0]},"col-".concat(t)):Object(le.jsx)("td",{"data-testid":"stagePColF-".concat(n),style:{border:0,width:"27px",padding:"8px",margin:"0px",height:"2px",backgroundColor:"#b3ffff"},type:e[0]},t)}))})},"s-".concat(n))}))})]}):Object(le.jsx)("span",{children:"Loading..."})},Fe=function(e){var n=e.stage,t=e.nextPiece;return Object(le.jsxs)(De,{children:[Object(le.jsx)(Ie,{children:"Next"}),Object(le.jsx)(Pe,{children:n&&t.length>0&&(null===n||void 0===n?void 0:n.map((function(e,n){return e.map((function(e,n){var t;return Object(le.jsx)(ue,{type:e[0],color:null===(t=s[e[0]])||void 0===t?void 0:t.color},n)}))})))})]})},Be=t(135),Ge=t(136),He=t(137),Ke=function(){var e=Object(K.b)(),n=Object(K.c)((function(e){return e.player})),t=Object(K.c)((function(e){return e.room})),r=Object(K.c)((function(e){return e.players})),i=Object(a.useState)(!1),c=Object(o.a)(i,2),d=c[0],x=c[1],f=Object(a.useState)(new Audio(Ue)),g=Object(o.a)(f,1)[0];Object(a.useEffect)((function(){g.addEventListener("ended",(function(){return g.play()}))}),[]);var O=Object(a.useState)(null),y=Object(o.a)(O,2),v=y[0],E=y[1],S=function(e,n){var t=Object(a.useState)({pos:{x:2,y:2},tetromino:s[0].shape,collided:!1}),r=Object(o.a)(t,2),i=r[0],c=r[1],d=Object(a.useState)({pos:{x:0,y:0},tetromino:null,collided:!1}),p=Object(o.a)(d,2),x=p[0],u=p[1],m=function(e,n){var t=e.map((function(n,t){return e.map((function(e){return e[t]}))}));return n>0?t.map((function(e){return e.reverse()})):t.reverse()},h=Object(a.useCallback)((function(t){var a,r,i={pos:{x:4,y:0},tetromino:null===(a=s[n.next_piece[0]])||void 0===a?void 0:a.shape,collided:!1};n.next_piece.shift(),t&&l(i,t,{x:0,y:0})?(e({type:j}),e({type:G})):c({pos:{x:4,y:0},tetromino:i.tetromino,collided:!1}),u({pos:{x:2,y:2},tetromino:null===(r=s[n.next_piece[0]])||void 0===r?void 0:r.shape,collided:!1})}),[n.next_piece]);return[i,x,function(e){var n=e.x,t=e.y,a=e.collided;c((function(e){return Object(b.a)(Object(b.a)({},e),{},{pos:{x:e.pos.x+n,y:e.pos.y+t},collided:a})}))},h,function(e,n){var t=0,a=JSON.parse(JSON.stringify(i));if(4===a.tetromino.length){for(var r=0;r<a.tetromino[0].length;r++)if("I"!==a.tetromino[0][r]){t=1;break}a.tetromino=1==t?[["I","I","I","I"],[0,0,0,0],[0,0,0,0],[0,0,0,0]]:[[0,"I",0,0],[0,"I",0,0],[0,"I",0,0],[0,"I",0,0]]}else a.tetromino=m(a.tetromino,n);for(var o=a.pos.x,d=1;l(a,e,{x:0,y:0});)if(a.pos.x+=d,(d=-1*d-(d>0?1:-1))>a.tetromino[0].length)return m(a.tetromino,-n),void(a.pos.x=o);c(a)}]}(e,t),_=Object(o.a)(S,5),z=_[0],A=_[1],T=_[2],k=_[3],R=_[4],D=m(z,A,k,t.gameOver,n.username,t.name,r,t.next_piece),I=Object(o.a)(D,4),C=I[0],P=I[1],L=I[2],N=function(e,n,t){var r=Object(a.useState)(0),i=Object(o.a)(r,2),c=i[0],d=i[1],s=Object(a.useState)(0),p=Object(o.a)(s,2),l=p[0],x=p[1],m=Object(a.useState)(0),b=Object(o.a)(m,2),h=b[0],j=b[1],f=Object(a.useState)(new Audio(Je)),g=Object(o.a)(f,1)[0],O=[40,100,300,1200],w=Object(a.useCallback)((function(){e>0&&(d((function(n){return n+O[e-1]*(h+1)})),x((function(n){return n+e})),g.play(),u.emit("new score",{user:t,score:c+O[e-1]*(h-1),room:n}))}),[h,O,e]);return Object(a.useEffect)((function(){w()}),[w,e,c]),[c,d,l,x,h,j]}(I[3],t.name,n.username),M=Object(o.a)(N,6),J=M[0],U=M[1],Y=M[2],Z=M[3],W=M[4],F=M[5],B=function(e){l(z,C,{x:e,y:0})||T({x:e,y:0})};Object(a.useEffect)((function(){for(var e=t.gameStarted?1:0,n=new Array(10).fill(["P","merged"]),a=0;a<20;a++)C[a][0]===["P","merged"]&&e++;for(;e>0;)C.push(n),C.shift(),e--}),[n.row]),Object(a.useEffect)((function(){t.next_piece.length<=5&&!0===t.gameStarted&&u.emit("new_tetriminos",t.name)}),[t.next_piece.length]),Object(a.useEffect)((function(){var a;!0===t.gameOver&&(E(null),e((a={user:n.username,room:t.name},function(e){u.emit("Loser",a)})))}),[t.gameOver]),Object(a.useEffect)((function(){!0===t.gameStarted&&(x(!0),g.play(),L(p()),E(1e3),k(),e({type:h}),U(0),Z(0),F(0))}),[t.gameStarted]);var H=function(){l(z,C,{x:0,y:1})?(z.pos.y<1&&(e({type:j}),e({type:G}),E(v)),T({x:0,y:0,collided:!0})):T({x:0,y:1,collided:!1}),Y>10*(W+1)&&(F((function(e){return e+1})),W>0&&E(1e3/(W+1)+200))};return function(e,n){var t=Object(a.useRef)();Object(a.useEffect)((function(){t.current=e}),[e]),Object(a.useEffect)((function(){if(null!==n){var e=setInterval((function(){t.current()}),n);return function(){clearInterval(e)}}}),[n])}((function(){H()}),v),Object(le.jsx)(Ne,{"data-testid":"styled-tet-wra",role:"button",tabIndex:"0",onKeyDown:function(e){var n=e.keyCode;t.gameOver||(37===n?B(-1):39===n?B(1):40===n?(E(v),H()):38===n?"D"!=z.tetromino[0][1]&&R(C,1):83===n?"D"!=z.tetromino[0][1]&&R(C,-1):32===n&&function(){for(var e=0,n=0;n<20;n++)if(l(z,C,{x:0,y:n})){e=n;break}for(var t=e;t>0;t--)if(!l(z,C,{x:0,y:t})){T({x:0,y:t,collided:!1});break}}())},onKeyUp:function(e){e.preventDefault(),function(e){var n=e.keyCode;t.gameOver||40!==n||E(0==W?1e3:v)}(e)},children:Object(le.jsx)(Be.a,{children:Object(le.jsx)(Me,{children:Object(le.jsxs)(Ge.a,{className:"w-100",children:[Object(le.jsxs)(He.a,{xl:r.length>1?7:12,lg:12,className:"flex justify-center red-tetris__col-stage mb-20",children:[Object(le.jsx)(ke,{gameOver:t.gameOver,stage:C,player:n}),Object(le.jsxs)("aside",{children:[Object(le.jsx)(Fe,{nextPiece:t.next_piece,stage:P}),Object(le.jsx)(Le,{title:"Score",data:J}),Object(le.jsx)(Le,{title:"Level",data:W}),Object(le.jsx)(Le,{title:"Rows",data:Y}),Object(le.jsxs)("div",{style:{cursor:"pointer",textAlign:"center",padding:"10px 0px 20px"},className:"sound-icon-wrapper",children:[!n.admin||t.gameStarted||t.gameOver?"":Object(le.jsx)(Ye.a,{onClick:function(){u.emit("start game",t.name)},icon:Ze.a,size:"2x",className:"sound-icon"}),n.admin&&t.gameOver?Object(le.jsx)(Ye.a,{onClick:function(){e({type:w}),u.emit("start game",t.name)},icon:Ze.b,size:"2x",className:"sound-icon"}):"",d?Object(le.jsx)(Ye.a,{onClick:function(){x(!1),g.pause()},icon:Ze.d,size:"2x",className:"sound-icon"}):Object(le.jsx)(Ye.a,{onClick:function(){x(!0),g.play()},icon:Ze.c,size:"2x",className:"sound-icon"})]})]})]}),r?Object(le.jsx)(He.a,{className:"spectersWrapper",xl:5,lg:12,children:Object(le.jsx)(Ge.a,{className:"w-100",children:r.map((function(e,t){if(e.user!==n.user)return e.user!==n.username?Object(le.jsx)(He.a,{xl:6,lg:12,children:Object(le.jsx)(We,{stage:e.stage&&e.stage.length>0?e.stage:p(),user:e.user,score:e.score},t)}):""}))})}):""]})})})})},Ve=t(18),Xe=t(68),qe=t.n(Xe),Qe=function(){var e=Object(K.b)(),n=Object(a.useState)([]),t=Object(o.a)(n,2),r=t[0],i=t[1],c=Object(a.useState)(""),s=Object(o.a)(c,2),p=s[0],l=s[1],x=Object(a.useState)("Solo"),u=Object(o.a)(x,2),m=u[0],b=u[1],h=Object(K.c)((function(e){return e.player}));return Object(a.useEffect)((function(){return qe.a.get("".concat("http://localhost:4242","/getRooms")).then((function(e){i(Object(Ve.a)(e.data))})),function(){i([])}}),[]),Object(le.jsxs)(ee,{onSubmit:function(n){return function(n){n.preventDefault(),""!==p.trim()?(window.location.hash="".concat(p.trim(),"[").concat(h.username,"]"),e({type:g,data:m})):(l(""),d.b.error("Please enter 12 characters in length correct Player and Room names"))}(n)},children:[Object(le.jsxs)(ne,{children:[Object(le.jsxs)(te,{children:[Object(le.jsx)(q,{placeholder:"Type your Room Name",onChange:function(e){return l(e.target.value)}})," ",Object(le.jsxs)(ae,{value:m,onChange:function(e){return b(e.target.value)},children:[Object(le.jsx)("option",{children:" Solo "})," ",Object(le.jsx)("option",{children:" Multi - Player "})," "]})," "]})," ",Object(le.jsx)(Q,{type:"submit",children:" START "})," "]})," ",r.length>0&&Object(le.jsxs)(re,{children:[Object(le.jsxs)(ie,{children:[Object(le.jsxs)(oe,{children:[Object(le.jsx)(de,{children:" Room - Name "})," ",Object(le.jsx)(de,{children:" Members "})," ",Object(le.jsx)(de,{children:" Mode "})," ",Object(le.jsx)(de,{children:" "})," "]})," "]})," ",Object(le.jsxs)(ce,{children:[" ",r.map((function(e,n){return e.room.length>0&&Object(le.jsxs)(oe,{children:[Object(le.jsxs)(se,{children:[Object(le.jsxs)("strong",{children:[" ",e.room," "]})," "]})," ",Object(le.jsxs)(se,{children:[" ",e.members,"/5"]}),Object(le.jsxs)(se,{children:[" ",e.mode," "]})," ",Object(le.jsxs)(se,{children:[Object(le.jsxs)(pe,{onClick:function(){return window.location="".concat("http://localhost:3000","/#").concat(e.room,"[").concat(h.username,"]")},children:["Join"," "]})," "]})," "]},n)}))," "]})," "]})," "]})};t(130),t(131),t(132);var $e,en,nn=function(){var e=Object(K.c)((function(e){return e})),n=Object(K.b)();return Object(le.jsxs)("div",{children:[Object(le.jsxs)("h1",{onClick:function(){u.emit("leaveRoom"),n({type:"RESET_STATE"}),window.location.hash=""},style:{cursor:"pointer"},children:["Red Tetris"," "]})," ",Object(le.jsx)(d.a,{})," ",""===e.player.username?Object(le.jsx)(xe,{}):""===e.room.name?Object(le.jsx)(Qe,{}):Object(le.jsx)(Ke,{})," "]})},tn=t(24),an={username:"",connected:!1,lost:!1,admin:!1,row:0},rn={name:"",members:0,gameStarted:!1,mode:"Solo",next_piece:[],gameOver:!1},cn="UPDATE_SCORE",on="ADD_PLAYER",dn=[],sn=Object(tn.b)({player:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:an,n=arguments.length>1?arguments[1]:void 0;switch(n.type){case W:return Object(b.a)(Object(b.a)({},e),{},{username:n.data});case F:return Object(b.a)(Object(b.a)({},e),{},{username:n.data.user,connected:!0,admin:!!n.data.is_admin});case B:return Object(b.a)(Object(b.a)({},e),{},{admin:!0});case G:return Object(b.a)(Object(b.a)({},e),{},{lost:!0});case H:return Object(b.a)(Object(b.a)({},e),{},{row:n.data});case h:return Object(b.a)(Object(b.a)({},e),{},{lost:!1});default:return e}},players:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:dn,n=arguments.length>1?arguments[1]:void 0;switch(n.type){case"RESET_STATE":return dn;case cn:return{score:n.data};case on:return Object(Ve.a)(n.data);default:return e}},room:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:rn,n=arguments.length>1?arguments[1]:void 0;switch(n.type){case"RESET_STATE":return rn;case y:return Object(b.a)(Object(b.a)({},e),{},{members:n.data});case h:return Object(b.a)(Object(b.a)({},e),{},{gameStarted:!0,gameOver:!1});case j:return Object(b.a)(Object(b.a)({},e),{},{gameStarted:!1,gameOver:!0,next_piece:[]});case O:var t=[].concat(Object(Ve.a)(e.next_piece),Object(Ve.a)(n.data));return Object(b.a)(Object(b.a)({},e),{},{next_piece:Object(Ve.a)(t)});case w:return Object(b.a)(Object(b.a)({},e),{},{next_piece:[]});case v:return Object(b.a)(Object(b.a)({},e),{},{name:n.data});case f:return Object(b.a)(Object(b.a)({},e),{},{name:n.data.room});case g:return Object(b.a)(Object(b.a)({},e),{},{mode:n.data});default:return e}}}),pn=sn,ln=t(69),xn=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||tn.c,un=Object(tn.d)(pn,{},xn(Object(tn.a)(ln.a))),mn=t(70),bn=function(e){if(!e.trim())return!1;var n=function(e){var n=Object(mn.a)(/([0-9A-Za-z]{1,18})\[([0-9A-Za-z]{1,18})\]/,{room:1,usr:2});return e.match(n)||(d.b.error("[!] Please Enter Up to 18 characters[!]"),!1)}(e);return n?(u.emit("joinRoom",{user:n.groups.usr,room:n.groups.room,mode:un.getState().room.mode}),!0):void 0};$e=un.dispatch,en=un.getState,window.onhashchange=function(){bn(window.location.hash.substring(1))},u.on("new score",(function(e){$e({type:on,data:e})})),u.on("add row",(function(){var e=en();$e({type:H,data:e.player.row+1})})),u.on("Join_success",(function(e){$e({type:F,data:e}),$e({type:f,data:e})})),u.on("Stage",(function(e){for(var n=0;n<e.players.length;n++)e.user==e.players[n].user&&(e.players[n]={user:e.user,score:e.players[n].score,stage:e.stage});$e({type:on,data:e.players})})),u.on("start game",(function(e){$e({type:O,data:e}),$e({type:h});var n=[];un.getState().players.map((function(e){n.push(Object(b.a)(Object(b.a)({},e),{},{stage:[],score:0}))})),$e({type:on,data:n})})),u.on("new_tetriminos",(function(e){$e({type:O,data:e})})),u.on("new member",(function(e){var n=[],t=0;for(t=0;t<e.length;t++)""!==e[t].user&&n.push({user:e[t].user,score:e[t].score,stage:[]});$e({type:y,data:t}),$e({type:on,data:n})})),u.on("Winner",(function(e){$e({type:j}),un.getState().player.username!==e.user&&$e({type:G})})),u.on("Update Admin",(function(e){var n={user:e.user.user,is_admin:e.is_admin};$e({type:F,data:n})})),u.on("TOASTIFY",(function(e){switch(e.type){case"error":d.b.error(e.message),setTimeout((function(){$e({type:"RESET_STATE"}),window.location.hash=""}),500);break;case"success":d.b.success(e.message);break;default:d.b.error(e.message)}})),bn(window.location.hash.substring(1)),c.a.render(Object(le.jsx)(K.a,{store:un,children:Object(le.jsx)(nn,{})}),document.getElementById("root"))}},[[133,1,2]]]);
//# sourceMappingURL=main.a9a09e7e.chunk.js.map