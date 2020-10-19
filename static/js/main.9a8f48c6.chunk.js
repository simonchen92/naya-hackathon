(this["webpackJsonpnaya-hackathon"]=this["webpackJsonpnaya-hackathon"]||[]).push([[0],{21:function(e,t,a){e.exports=a(42)},41:function(e,t,a){},42:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),c=a(10),r=a.n(c),o=a(1),i=a(2),m=function(){return l.a.createElement("div",{className:"navbar"},l.a.createElement(o.c,{to:"/"},l.a.createElement("h1",{className:"naya-home-link"},"naya")),l.a.createElement("div",{className:"navbar-menu"},l.a.createElement(o.c,{to:"/why-naya"},l.a.createElement("p",{className:"why-naya-link"},"why naya?")),l.a.createElement(o.c,{to:"/how-it-works"},l.a.createElement("p",{className:"how-it-works-link"},"how it works")),l.a.createElement(o.c,{to:"/login"},l.a.createElement("p",{className:"login-link"},"login"))))},u=function(){return l.a.createElement("div",{className:"home-page"},l.a.createElement("section",null,l.a.createElement("h1",null,"Idea to Furniture"),l.a.createElement("p",null,"Naya Studio is a platform built to bring your unique furniture idea to life"),l.a.createElement(o.c,{to:"/get-started"},l.a.createElement("button",null,"Get Started"))))},s=function(){return l.a.createElement("form",{className:"login-form"},l.a.createElement("h3",{className:"login-form-title"},"Sign In"),l.a.createElement("label",null,"Email",l.a.createElement("input",{type:"text",name:"email"})),l.a.createElement("label",null,"Password",l.a.createElement("input",{type:"text",name:"password"})),l.a.createElement("button",{type:"submit"},"Login"))},E=(a(31),a(9)),p=function(e){var t=e.percent;return l.a.createElement("div",{className:"indexed-progress-bar"},l.a.createElement(E.ProgressBar,{percent:t},l.a.createElement(E.Step,null,(function(e){var t=e.accomplished,a=e.index;return l.a.createElement("div",{className:"indexedStep ".concat(t?"accomplished":null)},l.a.createElement(o.c,{to:"/get-started"},a+1))})),l.a.createElement(E.Step,null,(function(e){var t=e.accomplished,a=e.index;return l.a.createElement("div",{className:"indexedStep ".concat(t?"accomplished":null)},l.a.createElement(o.c,{to:"/question-two"},a+1))})),l.a.createElement(E.Step,null,(function(e){var t=e.accomplished,a=e.index;return l.a.createElement("div",{className:"indexedStep ".concat(t?"accomplished":null)},l.a.createElement(o.c,{to:"/question-three"},a+1))})),l.a.createElement(E.Step,null,(function(e){var t=e.accomplished,a=e.index;return l.a.createElement("div",{className:"indexedStep ".concat(t?"accomplished":null)},l.a.createElement(o.c,{to:"/question-four"},a+1))})),l.a.createElement(E.Step,null,(function(e){var t=e.accomplished,a=e.index;return l.a.createElement("div",{className:"indexedStep ".concat(t?"accomplished":null)},l.a.createElement(o.c,{to:"/question-five"},a+1))}))))},d=function(){return l.a.createElement("div",null,l.a.createElement(p,{percent:0}),l.a.createElement("div",{className:"question-one"},l.a.createElement("h2",null,"Do you have an idea of funiture you would like to create?"),l.a.createElement("div",{className:"options"},l.a.createElement(o.c,{to:{pathname:"/question-two"}},"Yes"),l.a.createElement(o.c,{to:{pathname:"/question-two"}},"No"))))},h=function(){return l.a.createElement("div",null,l.a.createElement(p,{percent:25}),l.a.createElement("div",{className:"question-two"},l.a.createElement("h2",null,"Do you know how to communicate it?"),l.a.createElement("div",{className:"option-two"},l.a.createElement(o.c,{to:"/question-three"},"Yes"),l.a.createElement(o.c,{to:"/question-three"},"No"))))},f=function(){var e=["Living Room","Dining Room","Bedroom","Nursery","Office","Kitchen","Bathroom","Patio","Other"].sort();return l.a.createElement("div",null,l.a.createElement(p,{percent:50}),l.a.createElement("div",{className:"question-three"},l.a.createElement("div",{className:"question-prompt"},l.a.createElement("h2",null,"Where will it go?"),l.a.createElement("p",null,"Select locations where you think your furniture will be located?")),l.a.createElement("div",{className:"option-three"},e.map((function(e,t){return l.a.createElement("div",{key:t,className:"furniture-location"},l.a.createElement("a",{href:"/question-four"},e))})))))},v=function(){var e=["Chair","Bench","Desk","Tall Table","Side Table","Standing Shelf","Wall Shelf","Nightstand","Dining Table","Table","Coffee Table","Other"].sort();return l.a.createElement("div",null,l.a.createElement(p,{percent:75}),l.a.createElement("div",{className:"question-four"},l.a.createElement("div",{className:"product-prompt"},l.a.createElement("h2",null,"What do you want?"),l.a.createElement("p",null,"Pick the option that is the closest to your idea")),l.a.createElement("div",{className:"option-four"},e.map((function(e,t){return l.a.createElement("div",{key:t,className:"furniture-product"},l.a.createElement("a",{href:"/question-five"},e))})))))},N=function(){var e=["Work Surface","Eating","Drinking","Storage","Sitting","Studying","Heavy Objects","Display Items","Other"].sort(),t=function(e){return e.preventDefault()};return l.a.createElement("div",null,l.a.createElement(p,{percent:100}),l.a.createElement("div",{className:"question-five"},l.a.createElement("div",{className:"product-use-prompt"},l.a.createElement("h2",null,"What will you use it for?"),l.a.createElement("p",null,"Your choices help us make the right decisions in design and fabrication")),l.a.createElement("div",{className:"option-five"},e.map((function(e,a){return l.a.createElement("div",{key:a,className:"product-usage"},l.a.createElement("a",{href:"/",onClick:t},e))}))),l.a.createElement("button",{className:"submit-button",type:"submit"},"Submit")))};var y=function(){return l.a.createElement("div",{className:"pages"},l.a.createElement(o.a,null,l.a.createElement(m,null),l.a.createElement(i.c,null,l.a.createElement(i.a,{exact:!0,path:"/",component:u}),l.a.createElement(i.a,{exact:!0,path:"/login",component:s}),l.a.createElement(i.a,{exact:!0,path:"/get-started",component:d}),l.a.createElement(i.a,{exact:!0,path:"/question-two",component:h}),l.a.createElement(i.a,{exact:!0,path:"/question-three",component:f}),l.a.createElement(i.a,{exact:!0,path:"/question-four",component:v}),l.a.createElement(i.a,{exact:!0,path:"/question-five",component:N}))))};var g=function(){return l.a.createElement("div",{className:"naya-app"},l.a.createElement(y,null))},w=(a(41),l.a.createElement(o.b,null,l.a.createElement(g,null)));r.a.render(w,document.getElementById("root"))}},[[21,1,2]]]);
//# sourceMappingURL=main.9a8f48c6.chunk.js.map