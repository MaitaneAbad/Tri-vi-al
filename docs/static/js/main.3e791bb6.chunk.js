(this["webpackJsonpreact-starter-kit"]=this["webpackJsonpreact-starter-kit"]||[]).push([[0],{12:function(e,t,s){},13:function(e,t,s){},15:function(e,t,s){},16:function(e,t,s){"use strict";s.r(t);var n=s(0),i=s(6),a=s.n(i),c=s(7),o=s(2),r=(s(12),function(){return fetch("http://opentdb.com/api.php?amount=10&category=19&type=multiple").then((function(e){return e.json()})).then((function(e){return e.results.map((function(e){return{questions:e.question,correctAnswer:e.correct_answer,incorrectAnswers:e.incorrect_answers}}))})).catch((function(e){console.error(e),alert("Hubo un error en la p\xe1gina, vuelve a cargar la p\xe1gina y si no espera unos minutos.")}))}),l=(s(13),s(1)),u=function(e){console.log(e);return Object(l.jsxs)("section",{className:"landing ".concat(e.hiddenStart),children:[Object(l.jsx)("h1",{className:"landing--title",children:"Tri-vi-al"}),Object(l.jsx)("form",{className:"landing--form",children:Object(l.jsx)("input",{className:"landing--form__button",type:"button",value:"Comenzar juego",onClick:function(){for(var t=0;t<e.data.length;t++){for(var s=[],n=0;n<e.data[t].incorrectAnswers.length;n++)s.push(e.data[t].incorrectAnswers[n]);s.push(e.data[t].correctAnswer),s.sort((function(){return Math.random()-.5})),e.optionAnswerTotal.push(s)}e.loadNextQuestionAndAnswers(),e.setHiddenStart("hidden"),e.setHiddenGame("")}})})]})},_=(s(15),s(3)),j=function(){return Object(l.jsx)("h1",{className:"landing--title",children:"Tri-vi-al"})},d=function(e){var t=Object(_.useState)(""),s=Object(o.a)(t,2),n=s[0],i=s[1],a=Object(_.useState)("hidden"),c=Object(o.a)(a,2),r=c[0],u=c[1],d=Object(_.useState)("hidden"),m=Object(o.a)(d,2),b=m[0],h=m[1],O=Object(_.useState)(""),w=Object(o.a)(O,2),p=w[0],f=w[1],x=Object(_.useState)(""),N=Object(o.a)(x,2),Q=N[0],v=N[1],g=Object(_.useState)(!1),S=Object(o.a)(g,2),A=S[0],k=S[1],C=Object(_.useState)([]),y=Object(o.a)(C,2),q=y[0],T=(y[1],Object(_.useState)(0)),H=Object(o.a)(T,2),B=(H[0],H[1],Object(_.useState)(0)),F=Object(o.a)(B,2),G=(F[0],F[1],Object(_.useState)("")),z=Object(o.a)(G,2),E=z[0],J=z[1];console.log(e);var R=function(e){J(""),i(e.target.value),k(e.target.checked),D(e.target.value)},D=function(){return n===e.data[e.counter-1].correctAnswer},I=function(t){var s=[];!0!==A?(h(""),J("Tienes que seleccionar alguna respuesta")):(h("hidden"),s.push(e.question),s.push(n),s.push(D(t.target.value)),q.push(s),R(t),e.loadNextQuestionAndAnswers()),"10"===t.target.id&&(u(""),v("hidden"),f("hidden"))},M=q.map((function(t,s){return console.log(e),Object(l.jsxs)("li",{className:"main__sectionQuestions--viewQuestion__list--item",children:[Object(l.jsx)("p",{className:"main__sectionQuestions--viewQuestion__list--item__question",children:t[0]}),Object(l.jsxs)("div",{className:"main__sectionQuestions--viewQuestion__list--item__answer",children:[Object(l.jsxs)("div",{className:"main__sectionQuestions--viewQuestion__list--item__answer--iconSection",children:[!0===t[2]?Object(l.jsx)("i",{className:" main__sectionQuestions--viewQuestion__list--item__answer--iconSection__correct fas fa-check-circle"}):Object(l.jsx)("i",{className:"main__sectionQuestions--viewQuestion__list--item__answer--iconSection__error fas fa-times-circle"}),Object(l.jsx)("p",{className:"main__sectionQuestions--viewQuestion__list--item__answer--iconSection__answerClick",children:t[1]})]}),!1===t[2]?Object(l.jsxs)("p",{className:"main__sectionQuestions--viewQuestion__list--item__answer--correctAnswer",children:["Correct:",Object(l.jsxs)("span",{className:"main__sectionQuestions--viewQuestion__list--item__answer--correctAnswer__span",children:[e.data[s].correctAnswer," "]})]}):""]})]},s)}));return Object(l.jsxs)("main",{className:"main ".concat(e.hiddenGame),children:[Object(l.jsx)(j,{}),Object(l.jsxs)("section",{className:"main__sectionQuestions",children:[Object(l.jsx)("ul",{className:p,children:Object(l.jsxs)("li",{className:"main__sectionQuestions--list",id:e.counter,children:[Object(l.jsx)("p",{className:"main__sectionQuestions--list__question",children:e.question}),Object(l.jsxs)("form",{onSubmit:function(e){e.preventDefault()},className:"main__sectionQuestions--list__form",children:[" ",Object(l.jsxs)("label",{className:"main__sectionQuestions--list__form--labels",htmlFor:"firstOption",children:[Object(l.jsx)("input",{className:"main__sectionQuestions--list__form--labels__inputs",type:"radio",name:"firstOption",id:e.answer[0],value:e.answer[0],checked:n===e.answer[0],onChange:R}),e.answer[0]]}),Object(l.jsxs)("label",{className:"main__sectionQuestions--list__form--labels",htmlFor:"secondOption",children:[Object(l.jsx)("input",{className:"main__sectionQuestions--list__form--labels__inputs",type:"radio",name:"secondOption",id:e.answer[1],value:e.answer[1],checked:n===e.answer[1],onChange:R}),e.answer[1]]})," ",Object(l.jsxs)("label",{className:"main__sectionQuestions--list__form--labels",htmlFor:"thirdthOption",children:[Object(l.jsx)("input",{className:"main__sectionQuestions--list__form--labels__inputs",type:"radio",name:"thirdthOption",id:e.answer[2],value:e.answer[2],checked:n===e.answer[2],onChange:R}),e.answer[2]]}),Object(l.jsxs)("label",{className:"main__sectionQuestions--list__form--labels",htmlFor:"fourthOption",children:[Object(l.jsx)("input",{className:"main__sectionQuestions--list__form--labels__inputs",type:"radio",name:"fourthOption",id:e.answer[3],value:e.answer[3],checked:n===e.answer[3],onChange:R}),e.answer[3]]})]}),e.counter<e.data.length?Object(l.jsx)("div",{className:"main__sectionQuestions--list__containerButton",children:Object(l.jsx)("button",{className:"main__sectionQuestions--list__containerButton--button",onClick:I,children:"Siguiente"})}):Object(l.jsx)("div",{className:"main__sectionQuestions--list__containerButton",children:Object(l.jsx)("button",{className:"main__sectionQuestions--list__containerButton--button",id:e.data.length,onClick:I,children:"Finalizar"})})]},e.counter)}),Object(l.jsx)("article",{className:"main__error ".concat(b),children:Object(l.jsx)("p",{className:"main__error--title",children:E})}),Object(l.jsx)("article",{className:"main__sectionQuestions--viewQuestion",children:Object(l.jsx)("ul",{className:"main__sectionQuestions--viewQuestion__list ".concat(Q),children:M})})]}),Object(l.jsx)("section",{className:"main__sectionAnswers",children:Object(l.jsxs)("div",{className:r,children:[Object(l.jsx)("h2",{children:"Resumen del Tri-vi-al"}),Object(l.jsx)("ul",{children:M}),Object(l.jsx)("button",{onClick:function(){window.location.reload()},children:"Reset"})]})})]})},m=function(){var e=Object(n.useState)({}),t=Object(o.a)(e,2),s=t[0],i=t[1],a=Object(n.useState)(0),c=Object(o.a)(a,2),_=c[0],j=c[1],m=Object(n.useState)([]),b=Object(o.a)(m,2),h=b[0],O=b[1],w=Object(n.useState)(""),p=Object(o.a)(w,2),f=p[0],x=p[1],N=Object(n.useState)(""),Q=Object(o.a)(N,2),v=Q[0],g=Q[1],S=Object(n.useState)(""),A=Object(o.a)(S,2),k=A[0],C=A[1],y=Object(n.useState)("hidden"),q=Object(o.a)(y,2),T=q[0],H=q[1],B=function(){if(_<s.length){for(var e=s[_].questions,t=h[_],n=0;n<t.length;n++);x(e),g(t),j(_+1)}};return Object(n.useEffect)((function(){r().then((function(e){i(e)}))}),[]),Object(l.jsxs)("div",{className:"body",children:[Object(l.jsx)(u,{data:s,optionAnswerTotal:h,setOptionAnswerTotal:O,loadNextQuestionAndAnswers:B,setHiddenStart:C,hiddenStart:k,setHiddenGame:H}),Object(l.jsx)(d,{setHiddenStart:C,hiddenStart:k,data:s,optionAnswerTotal:h,loadNextQuestionAndAnswers:B,question:f,setQuestion:x,answer:v,setAnswer:g,counter:_,hiddenGame:T})]})};a.a.render(Object(l.jsx)(c.a,{children:Object(l.jsx)(m,{})}),document.getElementById("root"))}},[[16,1,2]]]);
//# sourceMappingURL=main.3e791bb6.chunk.js.map