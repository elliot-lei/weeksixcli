(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0ced7d"],{"60d1":function(t,e,a){"use strict";a.r(e);a("caad"),a("2532");var i=a("7a23"),o={class:"position-relative d-flex align-items-center justify-content-center",style:{"min-height":"400px"}},c=Object(i["i"])("h2",{class:"fw-bold"},"Lorem ipsum.",-1),n={class:"container mt-md-5 mt-3 mb-7"},s={class:"row"},l={class:"col-md-4"},d={class:"list-group"},r={class:"col-md-8"},u={class:"row"},g={class:"card border-0 mb-4 position-relative position-relative"},p=Object(i["i"])("a",{href:"#",class:"text-dark"},[Object(i["i"])("i",{class:"far fa-heart position-absolute",style:{right:"16px",top:"16px"}})],-1),b={class:"card-body p-0"},m={class:"mb-0 mt-3"},f={class:"card-text mb-0"},h={class:"text-muted"},j={class:"text-muted mt-3"},v={class:"btn-group btn-group-sm"},O={key:0,class:"fas fa-spinner fa-pulse"},y=Object(i["h"])(" 查看更多 "),w={key:0,class:"fas fa-spinner fa-pulse"},k=Object(i["h"])(" 加到購物車 "),x={id:"domGetNewPage",ref:"domGetNewPage"},C=Object(i["g"])('<nav class="d-flex justify-content-center"><ul class="pagination"><li class="page-item"><a class="page-link" href="#" aria-label="Previous"><span aria-hidden="true">«</span></a></li><li class="page-item active"><a class="page-link" href="#">1</a></li><li class="page-item"><a class="page-link" href="#">2</a></li><li class="page-item"><a class="page-link" href="#">3</a></li><li class="page-item"><a class="page-link" href="#" aria-label="Next"><span aria-hidden="true">»</span></a></li></ul></nav>',1),P=Object(i["g"])('<div class="bg-light py-4"><div class="container"><div class="\n          d-flex\n          flex-column flex-md-row\n          justify-content-between\n          align-items-md-center align-items-start\n        "><p class="mb-0 fw-bold">Lorem ipsum dolor sit amet.</p><div class="input-group w-md-50 mt-md-0 mt-3"><input type="text" class="form-control rounded-0" placeholder=""><div class="input-group-append"><button class="btn btn-dark rounded-0" type="button" id="search"> Lorem ipsum </button></div></div></div></div></div>',1);function I(t,e,a,I,S,F){var L=Object(i["D"])("UserProductModal"),M=Object(i["D"])("router-link");return Object(i["u"])(),Object(i["e"])(i["a"],null,[Object(i["i"])(L,{ref:"userProductModal",product:S.product,onAddToCart:F.addToCart},null,8,["product","onAddToCart"]),Object(i["i"])("div",o,[Object(i["i"])("div",{class:"position-absolute",style:[{top:"0",bottom:"0",left:"0",right:"0","background-position":"center center",opacity:"0.1"},{backgroundImage:"url(".concat(S.products.imageUrl," )")}]},null,4),c]),Object(i["i"])("div",n,[Object(i["i"])("div",s,[Object(i["i"])("div",l,[Object(i["i"])("div",d,[(Object(i["u"])(!0),Object(i["e"])(i["a"],null,Object(i["B"])(S.categories,(function(t){return Object(i["u"])(),Object(i["e"])("a",{href:"#",class:"list-group-item list-group-item-action active","aria-current":"true",key:t.id,onClick:Object(i["R"])((function(e){return S.selectCategory=t}),["prevent"])},Object(i["G"])(t),9,["onClick"])})),128))])]),Object(i["i"])("div",r,[Object(i["i"])("div",u,[(Object(i["u"])(!0),Object(i["e"])(i["a"],null,Object(i["B"])(F.filterProducts,(function(t){return Object(i["u"])(),Object(i["e"])("div",{class:"col-md-6",key:t.id},[Object(i["i"])("div",g,[Object(i["i"])("img",{src:t.imageUrl,class:"card-img-top rounded-0",alt:"..."},null,8,["src"]),p,Object(i["i"])("div",b,[Object(i["i"])("h4",m,[Object(i["i"])(M,{to:"/product/".concat(t.id)},{default:Object(i["P"])((function(){return[Object(i["h"])(Object(i["G"])(t.title),1)]})),_:2},1032,["to"])]),Object(i["i"])("p",f,[Object(i["h"])(Object(i["G"])(t.price)+" ",1),Object(i["i"])("span",h,[Object(i["i"])("del",null," 原價 "+Object(i["G"])(t.origin_price),1)])]),Object(i["i"])("p",j,"現在只要"+Object(i["G"])(t.content),1)]),Object(i["i"])("div",v,[Object(i["i"])("button",{type:"button",class:"btn btn-outline-secondary",onClick:function(e){return F.getProduct(t.id)},disabled:S.loadingStatus.loadingItem===t.id||!t.is_enabled},[S.loadingStatus.loadingItem===t.id?(Object(i["u"])(),Object(i["e"])("i",O)):Object(i["f"])("",!0),y],8,["onClick","disabled"]),Object(i["i"])("button",{type:"button",class:"btn btn-outline-danger",onClick:function(e){return F.addToCart(t.id)},disabled:S.loadingStatus.loadingItem===t.id||!t.is_enabled},[S.loadingStatus.loadingItem===t.id?(Object(i["u"])(),Object(i["e"])("i",w)):Object(i["f"])("",!0),k],8,["onClick","disabled"]),Object(i["i"])("button",{type:"button",class:["btn btn-outline-success",{active:S.myFavorite.includes(t.id)}],onClick:function(e){return F.addMyFavorite(t)}}," 我的最愛 ",10,["onClick"])])])])})),128))]),Object(i["i"])("div",x,null,512),C])])]),P],64)}var S=a("2909"),F=(a("a434"),a("99af"),a("d3b7"),a("6062"),a("3ca3"),a("ddb0"),a("159b"),a("4de4"),a("ac1f"),a("466d"),a("1999")),L=a("253d"),M={save:function(t){var e=JSON.stringify(t);localStorage.setItem("favoriteItem",e)},get:function(){return JSON.parse(localStorage.getItem("favoriteItem"))}};console.log("storageMethods,",M);var G={name:"Products",data:function(){return{products:[],loadingStatus:{loadingItem:""},myFavorite:M.get()||[],isloading:!1,product:{},categories:[],selectCategory:"",pagination:{}}},components:{UserProductModal:L["a"]},created:function(){this.getProducts()},methods:{addMyFavorite:function(t){this.myFavorite.includes(t.id)?(this.myFavorite.splice(this.myFavorite.indexOf(t.id),1),console.log("有重複")):this.myFavorite.push(t.id),console.log(this.myFavorite)},getProducts:function(){var t=this,e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1,a="".concat("https://vue3-course-api.hexschool.io/","api/").concat("lj787448952","/products?page=").concat(e);this.$http.get(a).then((function(e){console.log(e),t.isloading=!0,e.data.success?(console.log(e),t.products=[].concat(Object(S["a"])(t.products),Object(S["a"])(e.data.products)),t.pagination=e.data.pagination,t.getCategories(),setTimeout((function(){t.isLoading=!1}),4e3)):alert(e.data.message)}))},getCategories:function(){var t=new Set;this.products.forEach((function(e){t.add(e.category)})),this.categories=Object(S["a"])(t),console.log(t)},getProduct:function(t){var e=this;this.isLoading=!0;var a="".concat("https://vue3-course-api.hexschool.io/","api/").concat("lj787448952","/product/").concat(t);this.loadingStatus.loadingItem=t,this.$http.get(a).then((function(t){t.data.success?(console.log(t),e.loadingStatus.loadingItem="",e.product=t.data.product,e.isLoading=!1,e.$refs.userProductModal.openModal()):alert(t.data.message)}))},addToCart:function(t){var e=this,a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1,i="".concat("https://vue3-course-api.hexschool.io/","api/").concat("lj787448952","/cart ");console.log(t),this.loadingStatus.loadingItem=t,console.log(this.loadingStatus.loadingItem);var o={product_id:t,qty:a};this.$refs.userProductModal.hideModal(),this.$http.post(i,{data:o}).then((function(t){t.data.success?(alert(t.data.message),e.loadingStatus.loadingItem="",F["a"].emit("update-cart"),e.getCart(),e.isLoading=!1):alert(t.data.message)}))},scrollFunction:function(){var t=this,e=this.$refs.domGetNewPage;window.addEventListener("scroll",(function(){console.log(e);var a=window.scrollY,i=window.innerHeight,o=e.offsetTop;console.log(a,i,o),a+i>o&&t.pagination.has_next&&!t.isloading&&t.getProducts(t.pagination.current_page+1)}))}},computed:{filterProducts:function(){var t=this;return this.products.filter((function(e){return e.category.match(t.selectCategory)}))}},mounted:function(){window.addEventListener("scroll",this.scrollFunction)},unmounted:function(){window.removeEventListener("scroll",this.scrollFunction)}};G.render=I;e["default"]=G}}]);
//# sourceMappingURL=chunk-2d0ced7d.1c513e57.js.map