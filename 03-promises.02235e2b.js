const e=document.querySelector(".form");function t(e,t){return new Promise(((i,o)=>{setTimeout((()=>{Math.random()>.3?i({position:e,delay:t}):o({position:e,delay:t})}),t)}))}Notiflix.Notify.Init({position:"center",timeout:2e3}),e.addEventListener("submit",(function(e){e.preventDefault();const{amount:i,step:o,delay:n}=e.target.elements;let l=Number(i.value),s=Number(o.value),u=Number(n.value);for(let e=1;e<=l;e+=1)t(e,u).then((({position:e,delay:t})=>{Notiflix.Notify.Success(`✅ Fulfilled promise ${e} in ${t}ms`)})).catch((({position:e,delay:t})=>{Notiflix.Notify.Failure(`❌ Rejected promise ${e} in ${t}ms`)})),u+=s}));
//# sourceMappingURL=03-promises.02235e2b.js.map
