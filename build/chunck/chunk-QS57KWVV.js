import{a as s,b as u}from"./chunk-XA33BQCL.js";var l=({getState:a})=>r=>e=>{switch(e.type){case s:fetch("https://reqres.in/api/users").then(t=>t.json()).then(t=>{e.value=`${t.data[0].first_name} => ${e.value}`,r(e)});break;case u:let n=r(e);return console.log("incrementing...",a().home.counter.count),n;default:return r(e)}},p=l;export{p as a};
//# sourceMappingURL=chunk-QS57KWVV.js.map
