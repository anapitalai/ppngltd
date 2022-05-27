(this.webpackJsonpfrontend=this.webpackJsonpfrontend||[]).push([[0],{120:function(e,a,t){"use strict";t.r(a);var r=t(0),n=t.n(r),o=t(25),l=t.n(o),c=t(10),i=t(30),s=t(71),u=t(72),d=t(8),E=t(53),p=Object(i.combineReducers)({productList:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{products:[]},a=arguments.length>1?arguments[1]:void 0;switch(a.type){case"PRODUCT_LIST_REQUEST":return{loading:!0,products:[]};case"PRODUCT_LIST_SUCCESS":return{loading:!1,products:a.payload.products,pages:a.payload.pages,page:a.payload.page};case"PRODUCT_LIST_FAIL":return{loading:!1,error:a.payload};default:return e}},productDetails:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{product:{reviews:[]}},a=arguments.length>1?arguments[1]:void 0;switch(a.type){case"PRODUCT_DETAILS_REQUEST":return Object(d.a)(Object(d.a)({},e),{},{loading:!0});case"PRODUCT_DETAILS_SUCCESS":return{loading:!1,product:a.payload};case"PRODUCT_DETAILS_FAIL":return{loading:!1,error:a.payload};default:return e}},productDelete:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},a=arguments.length>1?arguments[1]:void 0;switch(a.type){case"PRODUCT_DELETE_REQUEST":return{loading:!0};case"PRODUCT_DELETE_SUCCESS":return{loading:!1,success:!0};case"PRODUCT_DELETE_FAIL":return{loading:!1,error:a.payload};default:return e}},productCreate:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},a=arguments.length>1?arguments[1]:void 0;switch(a.type){case"PRODUCT_CREATE_REQUEST":return{loading:!0};case"PRODUCT_CREATE_SUCCESS":return{loading:!1,success:!0,product:a.payload};case"PRODUCT_CREATE_FAIL":return{loading:!1,error:a.payload};case"PRODUCT_CREATE_RESET":return{};default:return e}},productUpdate:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{product:{}},a=arguments.length>1?arguments[1]:void 0;switch(a.type){case"PRODUCT_UPDATE_REQUEST":return{loading:!0};case"PRODUCT_UPDATE_SUCCESS":return{loading:!1,success:!0,product:a.payload};case"PRODUCT_UPDATE_FAIL":return{loading:!1,error:a.payload};case"PRODUCT_UPDATE_RESET":return{product:{}};default:return e}},productReviewCreate:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},a=arguments.length>1?arguments[1]:void 0;switch(a.type){case"PRODUCT_CREATE_REVIEW_REQUEST":return{loading:!0};case"PRODUCT_CREATE_REVIEW_SUCCESS":return{loading:!1,success:!0};case"PRODUCT_CREATE_REVIEW_FAIL":return{loading:!1,error:a.payload};case"PRODUCT_CREATE_REVIEW_RESET":return{};default:return e}},productTopRated:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{products:[]},a=arguments.length>1?arguments[1]:void 0;switch(a.type){case"PRODUCT_TOP_REQUEST":return{loading:!0,products:[]};case"PRODUCT_TOP_SUCCESS":return{loading:!1,products:a.payload};case"PRODUCT_TOP_FAIL":return{loading:!1,error:a.payload};default:return e}},cart:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{cartItems:[],shippingAddress:{}},a=arguments.length>1?arguments[1]:void 0;switch(a.type){case"CART_ADD_ITEM":var t=a.payload,r=e.cartItems.find((function(e){return e.product===t.product}));return r?Object(d.a)(Object(d.a)({},e),{},{cartItems:e.cartItems.map((function(e){return e.product===r.product?t:e}))}):Object(d.a)(Object(d.a)({},e),{},{cartItems:[].concat(Object(E.a)(e.cartItems),[t])});case"CART_REMOVE_ITEM":return Object(d.a)(Object(d.a)({},e),{},{cartItems:e.cartItems.filter((function(e){return e.product!==a.payload}))});case"CART_SAVE_SHIPPING_ADDRESS":return Object(d.a)(Object(d.a)({},e),{},{shippingAddress:a.payload});case"CART_SAVE_PAYMENT_METHOD":return Object(d.a)(Object(d.a)({},e),{},{paymentMethod:a.payload});case"CART_RESET":return Object(d.a)(Object(d.a)({},e),{},{cartItems:[]});default:return e}},userLogin:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},a=arguments.length>1?arguments[1]:void 0;switch(a.type){case"USER_LOGIN_REQUEST":return{loading:!0};case"USER_LOGIN_SUCCESS":return{loading:!1,userInfo:a.payload};case"USER_LOGIN_FAIL":return{loading:!1,error:a.payload};case"USER_LOGOUT":return{};default:return e}},userRegister:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},a=arguments.length>1?arguments[1]:void 0;switch(a.type){case"USER_REGISTER_REQUEST":return{loading:!0};case"USER_REGISTER_SUCCESS":return{loading:!1,userInfo:a.payload};case"USER_REGISTER_FAIL":return{loading:!1,error:a.payload};case"USER_LOGOUT":return{};default:return e}},userDetails:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{user:{}},a=arguments.length>1?arguments[1]:void 0;switch(a.type){case"USER_DETAILS_REQUEST":return Object(d.a)(Object(d.a)({},e),{},{loading:!0});case"USER_DETAILS_SUCCESS":return{loading:!1,user:a.payload};case"USER_DETAILS_FAIL":return{loading:!1,error:a.payload};case"USER_DETAILS_RESET":return{user:{}};default:return e}},userUpdateProfile:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},a=arguments.length>1?arguments[1]:void 0;switch(a.type){case"USER_UPDATE_PROFILE_REQUEST":return{loading:!0};case"USER_UPDATE_PROFILE_SUCCESS":return{loading:!1,success:!0,userInfo:a.payload};case"USER_UPDATE_PROFILE_FAIL":return{loading:!1,error:a.payload};case"USER_UPDATE_PROFILE_RESET":return{};default:return e}},userList:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{users:[]},a=arguments.length>1?arguments[1]:void 0;switch(a.type){case"USER_LIST_REQUEST":return{loading:!0};case"USER_LIST_SUCCESS":return{loading:!1,users:a.payload};case"USER_LIST_FAIL":return{loading:!1,error:a.payload};case"USER_LIST_RESET":return{users:[]};default:return e}},userDelete:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},a=arguments.length>1?arguments[1]:void 0;switch(a.type){case"USER_DELETE_REQUEST":return{loading:!0};case"USER_DELETE_SUCCESS":return{loading:!1,success:!0};case"USER_DELETE_FAIL":return{loading:!1,error:a.payload};default:return e}},userUpdate:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{user:{}},a=arguments.length>1?arguments[1]:void 0;switch(a.type){case"USER_UPDATE_REQUEST":return{loading:!0};case"USER_UPDATE_SUCCESS":return{loading:!1,success:!0};case"USER_UPDATE_FAIL":return{loading:!1,error:a.payload};case"USER_UPDATE_RESET":return{user:{}};default:return e}},orderCreate:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},a=arguments.length>1?arguments[1]:void 0;switch(a.type){case"ORDER_CREATE_REQUEST":return{loading:!0};case"ORDER_CREATE_SUCCESS":return{loading:!1,success:!0,order:a.payload};case"ORDER_CREATE_FAIL":return{loading:!1,error:a.payload};case"ORDER_CREATE_RESET":return{};default:return e}},orderDetails:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{loading:!0,orderItems:[],shippingAddress:{}},a=arguments.length>1?arguments[1]:void 0;switch(a.type){case"ORDER_DETAILS_REQUEST":return Object(d.a)(Object(d.a)({},e),{},{loading:!0});case"ORDER_DETAILS_SUCCESS":return{loading:!1,order:a.payload};case"ORDER_DETAILS_FAIL":return{loading:!1,error:a.payload};default:return e}},orderPay:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},a=arguments.length>1?arguments[1]:void 0;switch(a.type){case"ORDER_PAY_REQUEST":return{loading:!0};case"ORDER_PAY_SUCCESS":return{loading:!1,success:!0};case"ORDER_PAY_FAIL":return{loading:!1,error:a.payload};case"ORDER_PAY_RESET":return{};default:return e}},orderDeliver:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},a=arguments.length>1?arguments[1]:void 0;switch(a.type){case"ORDER_DELIVER_REQUEST":return{loading:!0};case"ORDER_DELIVER_SUCCESS":return{loading:!1,success:!0};case"ORDER_DELIVER_FAIL":return{loading:!1,error:a.payload};case"ORDER_DELIVER_RESET":return{};default:return e}},orderListMy:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{orders:[]},a=arguments.length>1?arguments[1]:void 0;switch(a.type){case"ORDER_LIST_MY_REQUEST":return{loading:!0};case"ORDER_LIST_MY_SUCCESS":return{loading:!1,orders:a.payload};case"ORDER_LIST_MY_FAIL":return{loading:!1,error:a.payload};case"ORDER_LIST_MY_RESET":return{orders:[]};default:return e}},orderList:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{orders:[]},a=arguments.length>1?arguments[1]:void 0;switch(a.type){case"ORDER_LIST_REQUEST":return{loading:!0};case"ORDER_LIST_SUCCESS":return{loading:!1,orders:a.payload};case"ORDER_LIST_FAIL":return{loading:!1,error:a.payload};default:return e}}}),m=localStorage.getItem("cartItems")?JSON.parse(localStorage.getItem("cartItems")):[],g=localStorage.getItem("userInfo")?JSON.parse(localStorage.getItem("userInfo")):null,f={cart:{cartItems:m,shippingAddress:localStorage.getItem("shippingAddress")?JSON.parse(localStorage.getItem("shippingAddress")):{}},userLogin:{userInfo:g}},h=[s.a],y=Object(i.createStore)(p,f,Object(u.composeWithDevTools)(i.applyMiddleware.apply(void 0,h))),R=(t(96),t(97),t(17)),S=t(9),_=t(125),v=t(21),T=t(134),C=t(126),I=t(132),O=(t(83),t(131)),U=t(74),b=t(6),L=t.n(b),D=t(13),P=t(14),A=t.n(P),w=function(){Object(c.b)(),Object(c.c)((function(e){return e.userLogin})).userInfo;return n.a.createElement("header",null,n.a.createElement(T.a,{bg:"myred",variant:"dark",expand:"lg",collapseOnSelect:!0},n.a.createElement(_.a,null,n.a.createElement(C.a,{className:"mr-auto"},n.a.createElement(v.LinkContainer,{to:"/"},n.a.createElement(I.a.Item,null,"Home")),n.a.createElement(v.LinkContainer,{to:"/about"},n.a.createElement(I.a.Item,null,"About Us")),n.a.createElement(v.LinkContainer,{to:"/residential"},n.a.createElement(I.a.Item,null,"Residential")),n.a.createElement(v.LinkContainer,{to:"/commercial"},n.a.createElement(I.a.Item,null,"Commercial")),n.a.createElement(v.LinkContainer,{to:"/contacts"},n.a.createElement(I.a.Item,null,"Contact Us")),n.a.createElement(v.LinkContainer,{to:"/vaccant"},n.a.createElement(I.a.Item,null,"Vaccant Land")),n.a.createElement(v.LinkContainer,{to:"/otherservices"},n.a.createElement(I.a.Item,null,"Other Services"))))))},k=t(127),N=t(73),j=function(){return n.a.createElement("footer",null,n.a.createElement(_.a,null,n.a.createElement(k.a,null,n.a.createElement(N.a,{className:"text-center py-3"},"Copyright \xa9 Raliku.com"))))},x=t(130),F=t(136),G=function(e){var a=e.value,t=e.text,r=e.color;return n.a.createElement("div",{className:"rating"},n.a.createElement("span",null,n.a.createElement("i",{style:{color:r},className:a>=1?"fas fa-star":a>=.5?"fas fa-star-half-alt":"far fa-star"})),n.a.createElement("span",null,n.a.createElement("i",{style:{color:r},className:a>=2?"fas fa-star":a>=1.5?"fas fa-star-half-alt":"far fa-star"})),n.a.createElement("span",null,n.a.createElement("i",{style:{color:r},className:a>=3?"fas fa-star":a>=2.5?"fas fa-star-half-alt":"far fa-star"})),n.a.createElement("span",null,n.a.createElement("i",{style:{color:r},className:a>=4?"fas fa-star":a>=3.5?"fas fa-star-half-alt":"far fa-star"})),n.a.createElement("span",null,n.a.createElement("i",{style:{color:r},className:a>=5?"fas fa-star":a>=4.5?"fas fa-star-half-alt":"far fa-star"})),n.a.createElement("span",null,t&&t))};G.defaultProps={color:"#f8e825"};var V=t(135),M=function(e){var a=e.variant,t=e.children;return n.a.createElement(V.a,{variant:a},t)};M.defaultProps={variant:"info"};t(128),t(137),t(133);var Q=t(129),q=t(79),W=function(e){var a=e.title,t=e.description,r=e.keywords;return n.a.createElement(q.a,null,n.a.createElement("title",null,a),n.a.createElement("meta",{name:"description",content:t}),n.a.createElement("meta",{name:"keyword",content:r}))};W.defaultProps={title:"Welcome To ProShop",description:"We sell the best products for cheap",keywords:"electronics, buy electronics, cheap electroincs"};var B=function(e){var a=e.match,t=a.params.keyword,o=a.params.pageNumber||1,l=Object(c.b)(),i=Object(c.c)((function(e){return e.productList}));i.loading,i.error,i.products,i.page,i.pages;return Object(r.useEffect)((function(){l(function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"";return function(){var t=Object(D.a)(L.a.mark((function t(r){var n,o;return L.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,r({type:"PRODUCT_LIST_REQUEST"}),t.next=4,A.a.get("/api/products?keyword=".concat(e,"&pageNumber=").concat(a));case 4:n=t.sent,o=n.data,r({type:"PRODUCT_LIST_SUCCESS",payload:o}),t.next=12;break;case 9:t.prev=9,t.t0=t.catch(0),r({type:"PRODUCT_LIST_FAIL",payload:t.t0.response&&t.t0.response.data.message?t.t0.response.data.message:t.t0.message});case 12:case"end":return t.stop()}}),t,null,[[0,9]])})));return function(e){return t.apply(this,arguments)}}()}(t,o))}),[l,t,o]),n.a.createElement(n.a.Fragment,null,n.a.createElement("img",{id:"",src:"ppngltd-banner.png",rounded:!0,responsive:!0,fluid:!0,alt:"Logo"}),n.a.createElement(x.a,{className:"py-3"},n.a.createElement(F.a,{bg:"info"},n.a.createElement(F.a.Body,null,n.a.createElement(F.a.Title,null,"Property Valuation"),n.a.createElement(F.a.Text,null,"We provide property Valuation and advice.")),n.a.createElement(F.a.Footer,null)),n.a.createElement(F.a,{bg:"dark"},n.a.createElement(F.a.Body,null,n.a.createElement(F.a.Title,null,"Expertise"),n.a.createElement(F.a.Text,null,"Expert local knowledge and experience")),n.a.createElement(F.a.Footer,null)),n.a.createElement(F.a,{bg:"danger"},n.a.createElement(F.a.Body,null,n.a.createElement(F.a.Title,null,"Location"),n.a.createElement(F.a.Text,null,"Any property type in and location in Papua New Guinea.")),n.a.createElement(F.a.Footer,null))))},Y=t(138),H=function(e,a){return function(){var t=Object(D.a)(L.a.mark((function t(r,n){var o,l;return L.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,A.a.get("/api/products/".concat(e));case 2:o=t.sent,l=o.data,r({type:"CART_ADD_ITEM",payload:{product:l._id,name:l.name,image:l.image,price:l.price,countInStock:l.countInStock,qty:a}}),localStorage.setItem("cartItems",JSON.stringify(n().cart.cartItems));case 6:case"end":return t.stop()}}),t)})));return function(e,a){return t.apply(this,arguments)}}()},J=function(e){var a=e.match,t=e.location,o=(e.history,a.params.id),l=t.search?Number(t.search.split("=")[1]):1,i=Object(c.b)();Object(c.c)((function(e){return e.cart})).cartItems;Object(r.useEffect)((function(){o&&i(H(o,l))}),[i,o,l]);return n.a.createElement(k.a,null,n.a.createElement(N.a,{md:12},n.a.createElement("h1",null,"About the Company"),n.a.createElement("p",null,"Property PNG Limited is a PNG owned Property Valuation and Consultancy Practice. The Company was incorporated on 23rd February, 2010. The company provides independent property valuation and real estate consultancy services to meet the individual requirements of each client. Property PNG Ltd specialises in a diverse range of property valuation transactions and it is dedicated to providing a prompt and professional service. To ensure this commitment, the Company ensures compliance to International Valuation Standards and Generally Accepted Valuation Principles. Property PNG Limited is a PNG owned Property Valuation and Consultancy Practice. The Company was incorporated on 23rd February, 2010. The company provides independent property valuation and real estate consultancy services to meet the individual requirements of each client. Property PNG Ltd specialises in a diverse range of property valuation transactions and it is dedicated to providing a prompt and professional service. To ensure this commitment, the Company ensures compliance to International Valuation Standards and Generally Accepted Valuation Principles. Compensation Assessments We can provide compensation assessments for compulsory acquisitions for Private Individuals and Government Authorities and Corporations."),["Mortgauge Valuations for Financing","Fair Market Valuation for auditing Purposes","Stamp Duty Purposes","Rent Reviews for Lease Renewals","Building Replacement Costs foro Insurance","Portfolio valuation for corporate Bodies","Valauation for Pre-purchase","Retrospect Aceesment","Feaseability Assessment of property Development","vaulatuion for Coponsatation for comulsary acquisutin","Asset Register Development"].map((function(e){return n.a.createElement(F.a,{style:{width:"18rem"}},n.a.createElement(Y.a,{variant:"flush"},n.a.createElement(Y.a.Item,null,e)))}))))},z=function(e){var a=e.match,t=e.location,o=(e.history,a.params.id),l=t.search?Number(t.search.split("=")[1]):1,i=Object(c.b)();Object(c.c)((function(e){return e.cart})).cartItems;Object(r.useEffect)((function(){o&&i(H(o,l))}),[i,o,l]);return n.a.createElement(k.a,null,n.a.createElement(N.a,{md:8},n.a.createElement("h1",null,"Contacts")),n.a.createElement(N.a,{md:4},n.a.createElement("p",null,"I f you need to have your property valued in PNG, and if you have any questions about our valuation process or would like to receive a quote, please reach out to us via email at support@propertypngltd.com or by calling us directly on (+675) 341 6368. Our fees are competitive and are dependent on the nature of the work and time involved to carry out the valuation task required by the client.")))},X=function(e){var a=e.children;return n.a.createElement(_.a,null,n.a.createElement(k.a,{className:"justify-content-md-center"},n.a.createElement(N.a,{xs:12,md:6},a)))},$=function(){return n.a.createElement(k.a,{className:"py-3"},n.a.createElement(N.a,{md:8},n.a.createElement(X,null,n.a.createElement(O.a,{action:"https://formsubmit.co/anapitalai@gmail.com",method:"POST"},n.a.createElement(O.a.Group,null,n.a.createElement(O.a.Label,null,"Name"),n.a.createElement(O.a.Control,{type:"text",required:!0,placeholder:"Enter Your name",name:"name"})),n.a.createElement(O.a.Group,null,n.a.createElement(O.a.Label,null,"Company"),n.a.createElement(O.a.Control,{type:"text",required:!0,name:"company",placeholder:"Company Name"})),n.a.createElement(O.a.Group,null,n.a.createElement(O.a.Label,null,"email"),n.a.createElement(O.a.Control,{type:"email",required:!0,name:"email",placeholder:"Enter email"})),n.a.createElement(O.a.Group,null,n.a.createElement(O.a.Label,null,"Phone"),n.a.createElement(O.a.Control,{type:"phone",name:"phone",placeholder:"Enter phone"})),n.a.createElement(O.a.Group,null,n.a.createElement(O.a.Label,null,"Message"),n.a.createElement(O.a.Control,{type:"textarea",required:!0,name:"message",placeholder:"Enter Message"})),n.a.createElement(U.a,{type:"submit",variant:"info",required:!0},"Email")))),n.a.createElement(N.a,{md:4},n.a.createElement("div",{className:"col-12"},n.a.createElement("img",{src:"images/mail.svg",class:"w-75"}))))},K=function(){return n.a.createElement("header",null,n.a.createElement(T.a,{bg:"white",variant:"white",expand:"lg",collapseOnSelect:!0},n.a.createElement(_.a,null,n.a.createElement(v.LinkContainer,{to:"/"},n.a.createElement(T.a.Brand,null,n.a.createElement(Q.a,{id:"logo",src:"../PPNGL.webp",roundedCircle:!0,responsive:!0,fluid:!0,alt:"Logo"}),n.a.createElement("span",{className:"px-3"},"PPNGLTD"))),n.a.createElement(T.a.Toggle,{"aria-controls":"basic-navbar-nav"}),n.a.createElement(C.a,{className:"ml-auto"},n.a.createElement(v.LinkContainer,{to:"/email"},n.a.createElement(C.a.Link,null,n.a.createElement("i",{className:"fas fa-shopping-cart"})," Call (+675) 5333218"))))))},Z=function(){return n.a.createElement("img",{id:"",src:"https://images.unsplash.com/photo-1592595896551-12b371d546d5?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=80&raw_url=true&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170",rounded:!0,responsive:!0,fluid:!0,alt:"Logo"})},ee=function(){return n.a.createElement("div",null,n.a.createElement("img",{id:"",src:"https://media.istockphoto.com/photos/aerial-view-of-residential-distratic-at-major-mackenzie-dr-and-ave-picture-id1320991884?b=1&k=20&m=1320991884&s=170667a&w=0&h=N79xaO8j11u7tRWG7RCy8ksCkdTgujeFLFpXR_guaa0=",rounded:!0,responsive:!0,fluid:!0,alt:"Logo"}),n.a.createElement("p",null,"Our sister company Obsidian Conveyancing can assist you with all the real estate Conveyancing needs in PNG. Transferring property ownership from one party to another can be a complicated process however our team is able to assist and guide you through the process in a friendly, fast and efficient manner. We are an experienced real estate Conveyancor who assist with a range of issues related to property, including updating of titles, title searches and title replacements."),n.a.createElement("p",null," The team will make conveyancing processing as easy as possible.If you have and questionsor would like  a quotes please reach out to us via email ",n.a.createElement("email",null,"support@obsidsianconveryancing.com")," or by calling us directly on ",n.a.createElement("telephone",null,"(+765) 341 6467")))},ae=function(){return n.a.createElement("p",null,"Property PNG valuers can assist you with vacant land (be it residential, industrial or commercial) valuation in PNG. We can provide Feasibility Assessments of property development using Hypothetical Analysis. We also provide \u201cOn Completion\u201d valuations for individuals buying a house and land package for Mortgage Purposes.")},te=function(e){var a=e.match,t=e.location,o=(e.history,a.params.id),l=t.search?Number(t.search.split("=")[1]):1,i=Object(c.b)();Object(c.c)((function(e){return e.cart})).cartItems;Object(r.useEffect)((function(){o&&i(H(o,l))}),[i,o,l]);return n.a.createElement(k.a,null,n.a.createElement(N.a,{md:12},n.a.createElement("h1",null,"Valuation Service"),n.a.createElement("img",{id:"",src:"residential.png",rounded:!0,responsive:!0,fluid:!0,alt:"Logo"}),n.a.createElement(F.a,{bg:"info"},n.a.createElement(F.a.Header,null,"Residential"),n.a.createElement(F.a.Body,null,n.a.createElement(F.a.Title,null," Mortgauge Valuation for Financing "),n.a.createElement(F.a.Text,null,"Some quick example text to build on the card title and make up the bulk of the card's content."))),n.a.createElement(F.a,{bg:"danger"},n.a.createElement(F.a.Header,null,"commercial"),n.a.createElement(F.a.Body,null,n.a.createElement(F.a.Title,null," Card Title "),n.a.createElement(F.a.Text,null,"Some quick example text to build on the card title and make up the bulk of the card's content."))),n.a.createElement(F.a,{bg:"secondary"},n.a.createElement(F.a.Header,null,"Industrial"),n.a.createElement(F.a.Body,null,n.a.createElement(F.a.Title,null," Card Title "),n.a.createElement(F.a.Text,null,"Some quick example text to build on the card title and make up the bulk of the card's content.")))))},re=function(){return n.a.createElement(R.BrowserRouter,null,n.a.createElement(K,null),n.a.createElement(w,null),n.a.createElement("main",{className:"py-3"},n.a.createElement(_.a,null,n.a.createElement(S.d,{path:"/contacts",component:z}),n.a.createElement(S.d,{path:"/email",component:$}),n.a.createElement(S.d,{path:"/otherservices",component:ee}),n.a.createElement(S.d,{path:"/residential",component:te}),n.a.createElement(S.d,{path:"/vaccant",component:ae}),n.a.createElement(S.d,{path:"/commercial",component:Z}),n.a.createElement(S.d,{path:"/about",component:J}),n.a.createElement(S.d,{path:"/search/:keyword",component:B,exact:!0}),n.a.createElement(S.d,{path:"/page/:pageNumber",component:B,exact:!0}),n.a.createElement(S.d,{path:"/search/:keyword/page/:pageNumber",component:B,exact:!0}),n.a.createElement(S.d,{path:"/",component:B,exact:!0}))),n.a.createElement(j,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(n.a.createElement(c.a,{store:y},n.a.createElement(re,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},87:function(e,a,t){e.exports=t(120)},96:function(e,a,t){},97:function(e,a,t){}},[[87,1,2]]]);
//# sourceMappingURL=main.3e6cef0a.chunk.js.map