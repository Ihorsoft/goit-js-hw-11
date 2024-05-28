import"./assets/modulepreload-polyfill-3cfb730f.js";/* empty css                      */import{i as o,S as y}from"./assets/vendor-b11e2a50.js";const u="https://pixabay.com",f="/api/",k="43441081-c9c9daac9af91d4227dda2db1",t={keySearch:""},i=document.querySelector(".feedback-form"),h=document.querySelector(".list"),s=document.querySelector(".loader");i.addEventListener("input",b);i.addEventListener("submit",v);n(s);function b(e){const a=e.target.name;return t[a]=e.target.value,t.keySearch}function S(e){e.style.display="block"}function n(e){e.style.display="none"}function v(e){if(e.preventDefault(),h.innerHTML="",S(s),t.keySearch.trim()=="")return n(s),o.error({message:"Sorry, there are no images matching your search query. Please try again!",position:"bottomRight",messageColor:"white",backgroundColor:"red",progressBarColor:"black"});$(k,t.keySearch).then(a=>{if(n(s),a.hits.length===0)return n(s),o.error({message:"Sorry, there are no images matching your search query. Please try again!",position:"bottomRight",messageColor:"white",backgroundColor:"red",progressBarColor:"black"});h.insertAdjacentHTML("beforeend",w(a.hits)),p.refresh(),i.reset(),t.keySearch=""}).catch(a=>{hideLoading(s),o.error({message:`${a}`})}).finally(()=>{i.reset()})}function $(e,a){const l=new URLSearchParams({key:e,q:a,image_type:"photo",orientation:"horizontal",safesearch:"true"}),c=`${u}${f}?${l}`;return fetch(c).then(r=>{if(!r.ok)throw new Error("Sorry, there are no images matching your search query. Please try again!");return r.json()}).catch(r=>o.error({message:`${r}`}))}function w(e){return e.map(({tags:a,likes:l,views:c,comments:r,downloads:d,previewURL:g,largeImageURL:m})=>`<li class="gallery-item">
  <a class="gallery-link" href="${m}">
    <img
      class="gallery-image"
      src="${g}"
      data-source="${m}"
      alt="${a}"
    />
  </a>
      <div class = "wrapper">
                 <div class = "parameters">
                 <span class ="title">Likes</span>
                 <span class = "info">${l}</span>
                 </div>
                  <div class = "parameters">
                 <span class ="title">Views</span>
                 <span class = "info">${c}</span>
                 </div>
                  <div class = "parameters">
                 <span class ="title">Comments</span>
                 <span class = "info">${r}</span>
                 </div>
                  <div class = "parameters">
                 <span class ="title">Downloads</span>
                 <span class = "info">${d}</span>
                 </div>
                 </div>
</li>`).join("")}let p=new y(".list a",{captionsData:"alt",captionClass:"text-center",captionDelay:250,overlayOpacity:.8});p.on("show.simplelightbox",function(){});p.on("error.simplelightbox",function(e){console.log(e)});
//# sourceMappingURL=commonHelpers5.js.map
