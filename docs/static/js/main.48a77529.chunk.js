(this["webpackJsonpreact-starter-kit"]=this["webpackJsonpreact-starter-kit"]||[]).push([[0],[,,,,,,,,,,,,,function(e,s,t){},function(e,s,t){},,function(e,s,t){},function(e,s,t){},function(e,s,t){},function(e,s,t){"use strict";t.r(s);var n=t(1),i=t(8),a=t.n(i),c=t(5),o=t(3),r=(t(13),t(2)),l=function(){return fetch("https://opentdb.com/api.php?amount=10&category=19&type=multiple").then((function(e){return e.json()})).then((function(e){return e.results.map((function(e){return{questions:e.question,correctAnswer:e.correct_answer,incorrectAnswers:e.incorrect_answers}}))})).catch((function(e){console.error(e),alert("Hubo un error en la p\xe1gina, vuelve a cargar la p\xe1gina y si no espera unos minutos.")}))},u=(t(14),t(0)),_=function(){return Object(u.jsxs)("div",{className:"instructions",children:[Object(u.jsx)(c.b,{to:"/",children:Object(u.jsx)("button",{className:"instructions__button",children:"Volver"})}),Object(u.jsx)("section",{className:"instructions__section",children:Object(u.jsx)("p",{className:"instructions__section--paragraph",children:"Bienvenido a Tri-vi-al, este juego consiste en responder 10 preguntas basadas en matem\xe1ticas y ver el resultado de las preguntas una vez contestadas."})})]})},j=(t(16),function(e){console.log(e);return Object(u.jsxs)("section",{className:"landing",children:[Object(u.jsx)("h1",{className:"landing--title",children:"Tri-vi-al"}),Object(u.jsx)("form",{className:"landing--form",children:Object(u.jsxs)("div",{className:"landing--form__containerButtons",children:[Object(u.jsx)(c.b,{to:"game",children:Object(u.jsx)("input",{className:"landing--form__containerButtons--button",type:"button",value:"Comenzar juego",onClick:function(){for(var s=0;s<e.data.length;s++){for(var t=[],n=0;n<e.data[s].incorrectAnswers.length;n++)t.push(e.data[s].incorrectAnswers[n]);t.push(e.data[s].correctAnswer),t.sort((function(){return Math.random()-.5})),e.optionAnswerTotal.push(t)}e.loadNextQuestionAndAnswers()}})}),Object(u.jsx)(c.b,{to:"instructions",children:Object(u.jsx)("input",{className:"landing--form__containerButtons--button",type:"button",value:"\xbfC\xf3mo se juega?"})})]})})]})}),m=(t(17),function(){return Object(u.jsx)(c.b,{to:"/",children:Object(u.jsx)("h1",{className:"landing--title",children:"Tri-vi-al"})})}),d=function(e){console.log(e);var s=e.questionAnswerPack.map((function(s,t){return console.log(e),Object(u.jsxs)("li",{className:"main__sectionQuestions--viewQuestion__list--item",children:[Object(u.jsx)("p",{className:"main__sectionQuestions--viewQuestion__list--item__question",children:s[0]}),Object(u.jsxs)("div",{className:"main__sectionQuestions--viewQuestion__list--item__answer",children:[Object(u.jsxs)("div",{className:"main__sectionQuestions--viewQuestion__list--item__answer--iconSection",children:[!0===s[2]?Object(u.jsx)("i",{className:" main__sectionQuestions--viewQuestion__list--item__answer--iconSection__correct fas fa-check-circle"}):Object(u.jsx)("i",{className:"main__sectionQuestions--viewQuestion__list--item__answer--iconSection__error fas fa-times-circle"}),Object(u.jsx)("p",{className:"main__sectionQuestions--viewQuestion__list--item__answer--iconSection__answerClick",children:s[1]})]}),!1===s[2]?Object(u.jsxs)("p",{className:"main__sectionQuestions--viewQuestion__list--item__answer--correctAnswer",children:["Correct:",Object(u.jsxs)("span",{className:"main__sectionQuestions--viewQuestion__list--item__answer--correctAnswer__span",children:[e.data[t].correctAnswer," "]})]}):""]})]},t)}));return console.log(e),Object(u.jsx)(u.Fragment,{children:s})},b=function(e){console.log(e);return Object(u.jsxs)(u.Fragment,{children:[" ",Object(u.jsx)("section",{className:"main__sectionAnswers",children:Object(u.jsxs)("div",{className:"main__sectionAnswers--resumen ".concat(e.resumen),children:[Object(u.jsx)("h2",{className:"main__sectionAnswers--resumen__title",children:"Resumen del juego"}),Object(u.jsx)("ul",{className:"main__sectionAnswers--resumen__list",children:Object(u.jsx)(d,{questionAnswerPack:e.questionAnswerPack,setQuestionAnswerPack:e.setQuestionAnswerPack,data:e.data,optionAnswerTotal:e.optionAnswerTotal,loadNextQuestionAndAnswers:e.loadNextQuestionAndAnswers,question:e.question,setQuestion:e.setQuestion,answer:e.answer,setAnswer:e.setAnswer,counter:e.counter,setCounter:e.setCounter})}),Object(u.jsx)(c.b,{to:"/",children:Object(u.jsx)("button",{className:"main__sectionAnswers--resumen__buttonReset",onClick:function(){e.setCounter(0)},children:"Reset"})})]})})]})},h=function(e){console.log(e);var s=function(e){J(""),c(e.target.value),T(e.target.checked),M(e.target.value)},t=Object(n.useState)(""),i=Object(o.a)(t,2),a=i[0],c=i[1],r=Object(n.useState)("hidden"),l=Object(o.a)(r,2),_=l[0],j=l[1],h=Object(n.useState)("hidden"),O=Object(o.a)(h,2),w=O[0],x=O[1],p=Object(n.useState)(""),f=Object(o.a)(p,2),N=f[0],Q=f[1],A=Object(n.useState)(""),g=Object(o.a)(A,2),v=g[0],k=g[1],q=Object(n.useState)(!1),C=Object(o.a)(q,2),S=C[0],T=C[1],y=Object(n.useState)([]),P=Object(o.a)(y,2),B=P[0],F=P[1],z=Object(n.useState)(""),R=Object(o.a)(z,2),E=R[0],J=R[1],M=function(){return a===e.data[e.counter-1].correctAnswer},H=function(t){var n=[];!0!==S?(x(""),J("Tienes que seleccionar alguna respuesta")):(x("hidden"),n.push(e.question),n.push(a),n.push(M(t.target.value)),B.push(n),s(t),e.loadNextQuestionAndAnswers()),"10"===t.target.id&&(console.log(t),!0!==S?(x(""),J("Tienes que seleccionar alguna respuesta")):(j(""),k("hidden"),Q("hidden")))};return Object(u.jsxs)("main",{className:"main",children:[Object(u.jsx)(m,{}),Object(u.jsxs)("section",{className:"main__sectionQuestions",children:[Object(u.jsx)("ul",{className:N,children:Object(u.jsxs)("li",{className:"main__sectionQuestions--list",id:e.counter,children:[Object(u.jsxs)("p",{className:"main__sectionQuestions--list__question",children:[Object(u.jsx)("span",{className:"main__sectionQuestions--list__question--number",children:e.counter+" "}),e.question]}),Object(u.jsxs)("form",{className:"main__sectionQuestions--list__form",children:[" ",Object(u.jsxs)("label",{className:"main__sectionQuestions--list__form--labels",htmlFor:"firstOption",children:[Object(u.jsx)("input",{className:"main__sectionQuestions--list__form--labels__inputs",type:"radio",name:"firstOption",id:e.answer[0],value:e.answer[0],checked:a===e.answer[0],onChange:s}),Object(u.jsx)("p",{className:"main__sectionQuestions--list__form--labels__option",children:e.answer[0]})]}),Object(u.jsxs)("label",{className:"main__sectionQuestions--list__form--labels",htmlFor:"secondOption",children:[Object(u.jsx)("input",{className:"main__sectionQuestions--list__form--labels__inputs",type:"radio",name:"secondOption",id:e.answer[1],value:e.answer[1],checked:a===e.answer[1],onChange:s}),Object(u.jsx)("p",{className:"main__sectionQuestions--list__form--labels__option",children:e.answer[1]})]})," ",Object(u.jsxs)("label",{className:"main__sectionQuestions--list__form--labels",htmlFor:"thirdthOption",children:[Object(u.jsx)("input",{className:"main__sectionQuestions--list__form--labels__inputs",type:"radio",name:"thirdthOption",id:e.answer[2],value:e.answer[2],checked:a===e.answer[2],onChange:s})," ",Object(u.jsx)("p",{className:"main__sectionQuestions--list__form--labels__option",children:e.answer[2]})]}),Object(u.jsxs)("label",{className:"main__sectionQuestions--list__form--labels",htmlFor:"fourthOption",children:[Object(u.jsx)("input",{className:"main__sectionQuestions--list__form--labels__inputs",type:"radio",name:"fourthOption",id:e.answer[3],value:e.answer[3],checked:a===e.answer[3],onChange:s})," ",Object(u.jsx)("p",{className:"main__sectionQuestions--list__form--labels__option",children:e.answer[3]})]})]}),e.counter<e.data.length?Object(u.jsx)("div",{className:"main__sectionQuestions--list__containerButton",children:Object(u.jsx)("button",{className:"main__sectionQuestions--list__containerButton--button",onClick:H,children:"Siguiente"})}):Object(u.jsx)("div",{className:"main__sectionQuestions--list__containerButton",children:Object(u.jsx)("button",{className:"main__sectionQuestions--list__containerButton--button",id:e.data.length,onClick:H,children:"Finalizar"})})]},e.counter)}),Object(u.jsx)("article",{className:"main__error ".concat(w),children:Object(u.jsx)("p",{className:"main__error--title",children:E})}),Object(u.jsx)("article",{className:"main__sectionQuestions--viewQuestion",children:Object(u.jsx)("ul",{className:"main__sectionQuestions--viewQuestion__list ".concat(v),children:Object(u.jsx)(d,{questionAnswerPack:B,setQuestionAnswerPack:F,data:e.data,optionAnswerTotal:e.optionAnswerTotal,loadNextQuestionAndAnswers:e.loadNextQuestionAndAnswers,question:e.question,setQuestion:e.setQuestion,answer:e.answer,setAnswer:e.setAnswer,counter:e.counter,setCounter:e.setCounter})})})]}),Object(u.jsx)(b,{resumen:_,questionAnswerPack:B,setQuestionAnswerPack:F,data:e.data,optionAnswerTotal:e.optionAnswerTotal,loadNextQuestionAndAnswers:e.loadNextQuestionAndAnswers,question:e.question,setQuestion:e.setQuestion,answer:e.answer,setAnswer:e.setAnswer,counter:e.counter,setCounter:e.setCounter})]})},O=(t(18),function(){return Object(u.jsx)("footer",{className:"footer",children:"Maitane Abad Conde"})}),w=function(){var e=Object(n.useState)({}),s=Object(o.a)(e,2),t=s[0],i=s[1],a=Object(n.useState)(0),c=Object(o.a)(a,2),m=c[0],d=c[1],b=Object(n.useState)([]),w=Object(o.a)(b,2),x=w[0],p=w[1],f=Object(n.useState)(""),N=Object(o.a)(f,2),Q=N[0],A=N[1],g=Object(n.useState)(""),v=Object(o.a)(g,2),k=v[0],q=v[1],C=function(){if(m<t.length){for(var e=t[m].questions,s=x[m],n=0;n<s.length;n++);A(e),q(s),d(m+1)}};return Object(n.useEffect)((function(){l().then((function(e){i(e)}))}),[]),Object(u.jsxs)("div",{className:"body",children:[Object(u.jsxs)(r.c,{children:[Object(u.jsx)(r.a,{path:"/",element:Object(u.jsx)(j,{data:t,optionAnswerTotal:x,setOptionAnswerTotal:p,loadNextQuestionAndAnswers:C})}),Object(u.jsx)(r.a,{path:"/game",element:Object(u.jsx)(h,{data:t,optionAnswerTotal:x,loadNextQuestionAndAnswers:C,question:Q,setQuestion:A,answer:k,setAnswer:q,counter:m,setCounter:d})}),Object(u.jsx)(r.a,{path:"instructions",element:Object(u.jsx)(_,{})}),Object(u.jsx)(r.a,{path:"*",element:Object(u.jsx)(u.Fragment,{children:"P\xe1gina no encontrada"})})]}),Object(u.jsx)(O,{})]})};a.a.render(Object(u.jsx)(c.a,{children:Object(u.jsx)(w,{})}),document.getElementById("root"))}],[[19,1,2]]]);
//# sourceMappingURL=main.48a77529.chunk.js.map