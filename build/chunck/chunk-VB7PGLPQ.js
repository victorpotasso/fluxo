function o(s,u={}){let r=Object.assign(u,s()),n=[];return{subscribe:f,getState:i,dispatch:c};function i(){return r}function c(t){r=s(r,t),n.forEach(e=>e())}function f(t){n.push(t);let e=!1;return function(){return e?!1:(subscribers.splice(subscribers.indexOf(t),1),e=!0,!0)}}}var b=o;export{b as a};
//# sourceMappingURL=chunk-VB7PGLPQ.js.map
