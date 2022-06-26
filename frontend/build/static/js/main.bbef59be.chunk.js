(this.webpackJsonpfrontend=this.webpackJsonpfrontend||[]).push([[0],{124:function(e,a,t){"use strict";t.r(a);var r=t(0),n=t.n(r),l=t(26),o=t.n(l),c=t(11),i=t(32),s=t(74),u=t(75),d=t(8),m=t(53),E=Object(i.combineReducers)({productList:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{products:[]},a=arguments.length>1?arguments[1]:void 0;switch(a.type){case"PRODUCT_LIST_REQUEST":return{loading:!0,products:[]};case"PRODUCT_LIST_SUCCESS":return{loading:!1,products:a.payload.products,pages:a.payload.pages,page:a.payload.page};case"PRODUCT_LIST_FAIL":return{loading:!1,error:a.payload};default:return e}},productDetails:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{product:{reviews:[]}},a=arguments.length>1?arguments[1]:void 0;switch(a.type){case"PRODUCT_DETAILS_REQUEST":return Object(d.a)(Object(d.a)({},e),{},{loading:!0});case"PRODUCT_DETAILS_SUCCESS":return{loading:!1,product:a.payload};case"PRODUCT_DETAILS_FAIL":return{loading:!1,error:a.payload};default:return e}},productDelete:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},a=arguments.length>1?arguments[1]:void 0;switch(a.type){case"PRODUCT_DELETE_REQUEST":return{loading:!0};case"PRODUCT_DELETE_SUCCESS":return{loading:!1,success:!0};case"PRODUCT_DELETE_FAIL":return{loading:!1,error:a.payload};default:return e}},productCreate:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},a=arguments.length>1?arguments[1]:void 0;switch(a.type){case"PRODUCT_CREATE_REQUEST":return{loading:!0};case"PRODUCT_CREATE_SUCCESS":return{loading:!1,success:!0,product:a.payload};case"PRODUCT_CREATE_FAIL":return{loading:!1,error:a.payload};case"PRODUCT_CREATE_RESET":return{};default:return e}},productUpdate:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{product:{}},a=arguments.length>1?arguments[1]:void 0;switch(a.type){case"PRODUCT_UPDATE_REQUEST":return{loading:!0};case"PRODUCT_UPDATE_SUCCESS":return{loading:!1,success:!0,product:a.payload};case"PRODUCT_UPDATE_FAIL":return{loading:!1,error:a.payload};case"PRODUCT_UPDATE_RESET":return{product:{}};default:return e}},productReviewCreate:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},a=arguments.length>1?arguments[1]:void 0;switch(a.type){case"PRODUCT_CREATE_REVIEW_REQUEST":return{loading:!0};case"PRODUCT_CREATE_REVIEW_SUCCESS":return{loading:!1,success:!0};case"PRODUCT_CREATE_REVIEW_FAIL":return{loading:!1,error:a.payload};case"PRODUCT_CREATE_REVIEW_RESET":return{};default:return e}},productTopRated:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{products:[]},a=arguments.length>1?arguments[1]:void 0;switch(a.type){case"PRODUCT_TOP_REQUEST":return{loading:!0,products:[]};case"PRODUCT_TOP_SUCCESS":return{loading:!1,products:a.payload};case"PRODUCT_TOP_FAIL":return{loading:!1,error:a.payload};default:return e}},cart:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{cartItems:[],shippingAddress:{}},a=arguments.length>1?arguments[1]:void 0;switch(a.type){case"CART_ADD_ITEM":var t=a.payload,r=e.cartItems.find((function(e){return e.product===t.product}));return r?Object(d.a)(Object(d.a)({},e),{},{cartItems:e.cartItems.map((function(e){return e.product===r.product?t:e}))}):Object(d.a)(Object(d.a)({},e),{},{cartItems:[].concat(Object(m.a)(e.cartItems),[t])});case"CART_REMOVE_ITEM":return Object(d.a)(Object(d.a)({},e),{},{cartItems:e.cartItems.filter((function(e){return e.product!==a.payload}))});case"CART_SAVE_SHIPPING_ADDRESS":return Object(d.a)(Object(d.a)({},e),{},{shippingAddress:a.payload});case"CART_SAVE_PAYMENT_METHOD":return Object(d.a)(Object(d.a)({},e),{},{paymentMethod:a.payload});case"CART_RESET":return Object(d.a)(Object(d.a)({},e),{},{cartItems:[]});default:return e}},userLogin:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},a=arguments.length>1?arguments[1]:void 0;switch(a.type){case"USER_LOGIN_REQUEST":return{loading:!0};case"USER_LOGIN_SUCCESS":return{loading:!1,userInfo:a.payload};case"USER_LOGIN_FAIL":return{loading:!1,error:a.payload};case"USER_LOGOUT":return{};default:return e}},userRegister:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},a=arguments.length>1?arguments[1]:void 0;switch(a.type){case"USER_REGISTER_REQUEST":return{loading:!0};case"USER_REGISTER_SUCCESS":return{loading:!1,userInfo:a.payload};case"USER_REGISTER_FAIL":return{loading:!1,error:a.payload};case"USER_LOGOUT":return{};default:return e}},userDetails:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{user:{}},a=arguments.length>1?arguments[1]:void 0;switch(a.type){case"USER_DETAILS_REQUEST":return Object(d.a)(Object(d.a)({},e),{},{loading:!0});case"USER_DETAILS_SUCCESS":return{loading:!1,user:a.payload};case"USER_DETAILS_FAIL":return{loading:!1,error:a.payload};case"USER_DETAILS_RESET":return{user:{}};default:return e}},userUpdateProfile:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},a=arguments.length>1?arguments[1]:void 0;switch(a.type){case"USER_UPDATE_PROFILE_REQUEST":return{loading:!0};case"USER_UPDATE_PROFILE_SUCCESS":return{loading:!1,success:!0,userInfo:a.payload};case"USER_UPDATE_PROFILE_FAIL":return{loading:!1,error:a.payload};case"USER_UPDATE_PROFILE_RESET":return{};default:return e}},userList:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{users:[]},a=arguments.length>1?arguments[1]:void 0;switch(a.type){case"USER_LIST_REQUEST":return{loading:!0};case"USER_LIST_SUCCESS":return{loading:!1,users:a.payload};case"USER_LIST_FAIL":return{loading:!1,error:a.payload};case"USER_LIST_RESET":return{users:[]};default:return e}},userDelete:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},a=arguments.length>1?arguments[1]:void 0;switch(a.type){case"USER_DELETE_REQUEST":return{loading:!0};case"USER_DELETE_SUCCESS":return{loading:!1,success:!0};case"USER_DELETE_FAIL":return{loading:!1,error:a.payload};default:return e}},userUpdate:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{user:{}},a=arguments.length>1?arguments[1]:void 0;switch(a.type){case"USER_UPDATE_REQUEST":return{loading:!0};case"USER_UPDATE_SUCCESS":return{loading:!1,success:!0};case"USER_UPDATE_FAIL":return{loading:!1,error:a.payload};case"USER_UPDATE_RESET":return{user:{}};default:return e}},orderCreate:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},a=arguments.length>1?arguments[1]:void 0;switch(a.type){case"ORDER_CREATE_REQUEST":return{loading:!0};case"ORDER_CREATE_SUCCESS":return{loading:!1,success:!0,order:a.payload};case"ORDER_CREATE_FAIL":return{loading:!1,error:a.payload};case"ORDER_CREATE_RESET":return{};default:return e}},orderDetails:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{loading:!0,orderItems:[],shippingAddress:{}},a=arguments.length>1?arguments[1]:void 0;switch(a.type){case"ORDER_DETAILS_REQUEST":return Object(d.a)(Object(d.a)({},e),{},{loading:!0});case"ORDER_DETAILS_SUCCESS":return{loading:!1,order:a.payload};case"ORDER_DETAILS_FAIL":return{loading:!1,error:a.payload};default:return e}},orderPay:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},a=arguments.length>1?arguments[1]:void 0;switch(a.type){case"ORDER_PAY_REQUEST":return{loading:!0};case"ORDER_PAY_SUCCESS":return{loading:!1,success:!0};case"ORDER_PAY_FAIL":return{loading:!1,error:a.payload};case"ORDER_PAY_RESET":return{};default:return e}},orderDeliver:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},a=arguments.length>1?arguments[1]:void 0;switch(a.type){case"ORDER_DELIVER_REQUEST":return{loading:!0};case"ORDER_DELIVER_SUCCESS":return{loading:!1,success:!0};case"ORDER_DELIVER_FAIL":return{loading:!1,error:a.payload};case"ORDER_DELIVER_RESET":return{};default:return e}},orderListMy:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{orders:[]},a=arguments.length>1?arguments[1]:void 0;switch(a.type){case"ORDER_LIST_MY_REQUEST":return{loading:!0};case"ORDER_LIST_MY_SUCCESS":return{loading:!1,orders:a.payload};case"ORDER_LIST_MY_FAIL":return{loading:!1,error:a.payload};case"ORDER_LIST_MY_RESET":return{orders:[]};default:return e}},orderList:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{orders:[]},a=arguments.length>1?arguments[1]:void 0;switch(a.type){case"ORDER_LIST_REQUEST":return{loading:!0};case"ORDER_LIST_SUCCESS":return{loading:!1,orders:a.payload};case"ORDER_LIST_FAIL":return{loading:!1,error:a.payload};default:return e}}}),p=localStorage.getItem("cartItems")?JSON.parse(localStorage.getItem("cartItems")):[],g=localStorage.getItem("userInfo")?JSON.parse(localStorage.getItem("userInfo")):null,f={cart:{cartItems:p,shippingAddress:localStorage.getItem("shippingAddress")?JSON.parse(localStorage.getItem("shippingAddress")):{}},userLogin:{userInfo:g}},y=[s.a],h=Object(i.createStore)(E,f,Object(u.composeWithDevTools)(i.applyMiddleware.apply(void 0,y))),v=(t(98),t(99),t(16)),_=t(10),S=t(129),R=t(17),b=t(137),T=t(138),C=t(135),O=t(54),U=t(134),I=t(77),L=t(6),w=t.n(L),P=t(14),D=t(15),A=t.n(D),N=function(){Object(c.b)(),Object(c.c)((function(e){return e.userLogin})).userInfo;return n.a.createElement("header",null,n.a.createElement(b.a,{bg:"myred",variant:"dark",expand:"lg",collapseOnSelect:!0},n.a.createElement(S.a,null,n.a.createElement(T.a,{className:"mr-auto"},n.a.createElement(R.LinkContainer,{exact:!0,to:"/"},n.a.createElement(C.a.Item,null,"Home")),n.a.createElement(R.LinkContainer,{to:"/about"},n.a.createElement(C.a.Item,null,"About Us")),n.a.createElement(R.LinkContainer,{to:"/residential"},n.a.createElement(C.a.Item,null,"Residential")),n.a.createElement(R.LinkContainer,{to:"/commercial"},n.a.createElement(C.a.Item,null,"Commercial & Industrial")),n.a.createElement(R.LinkContainer,{to:"/vacant"},n.a.createElement(C.a.Item,null,"Vacant Land")),n.a.createElement(R.LinkContainer,{to:"/contacts"},n.a.createElement(C.a.Item,null,"Contact Us")),n.a.createElement(R.LinkContainer,{to:"/otherservices"},n.a.createElement(C.a.Item,null,"Other Services"))))))},j=t(130),k=t(76),G=function(){return n.a.createElement("footer",null,n.a.createElement(S.a,null,n.a.createElement(j.a,null,n.a.createElement(k.a,{className:"text-center py-3"},"Copyright \xa9 Raliku.com"))))},F=t(132),x=t(133),V=t(140),Q=function(e){var a=e.value,t=e.text,r=e.color;return n.a.createElement("div",{className:"rating"},n.a.createElement("span",null,n.a.createElement("i",{style:{color:r},className:a>=1?"fas fa-star":a>=.5?"fas fa-star-half-alt":"far fa-star"})),n.a.createElement("span",null,n.a.createElement("i",{style:{color:r},className:a>=2?"fas fa-star":a>=1.5?"fas fa-star-half-alt":"far fa-star"})),n.a.createElement("span",null,n.a.createElement("i",{style:{color:r},className:a>=3?"fas fa-star":a>=2.5?"fas fa-star-half-alt":"far fa-star"})),n.a.createElement("span",null,n.a.createElement("i",{style:{color:r},className:a>=4?"fas fa-star":a>=3.5?"fas fa-star-half-alt":"far fa-star"})),n.a.createElement("span",null,n.a.createElement("i",{style:{color:r},className:a>=5?"fas fa-star":a>=4.5?"fas fa-star-half-alt":"far fa-star"})),n.a.createElement("span",null,t&&t))};Q.defaultProps={color:"#f8e825"};var M=t(139),q=function(e){var a=e.variant,t=e.children;return n.a.createElement(M.a,{variant:a},t)};q.defaultProps={variant:"info"};t(131),t(141),t(136);var W=t(82),Y=function(e){var a=e.title,t=e.description,r=e.keywords;return n.a.createElement(W.a,null,n.a.createElement("title",null,a),n.a.createElement("meta",{name:"description",content:t}),n.a.createElement("meta",{name:"keyword",content:r}))};Y.defaultProps={title:"Welcome To ProShop",description:"We sell the best products for cheap",keywords:"electronics, buy electronics, cheap electroincs"};var B=t(28),H=t.n(B),J=function(e){var a=e.match,t=a.params.keyword,l=a.params.pageNumber||1,o=Object(c.b)(),i=Object(c.c)((function(e){return e.productList}));i.loading,i.error,i.products,i.page,i.pages;return Object(r.useEffect)((function(){o(function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"";return function(){var t=Object(P.a)(w.a.mark((function t(r){var n,l;return w.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,r({type:"PRODUCT_LIST_REQUEST"}),t.next=4,A.a.get("/api/products?keyword=".concat(e,"&pageNumber=").concat(a));case 4:n=t.sent,l=n.data,r({type:"PRODUCT_LIST_SUCCESS",payload:l}),t.next=12;break;case 9:t.prev=9,t.t0=t.catch(0),r({type:"PRODUCT_LIST_FAIL",payload:t.t0.response&&t.t0.response.data.message?t.t0.response.data.message:t.t0.message});case 12:case"end":return t.stop()}}),t,null,[[0,9]])})));return function(e){return t.apply(this,arguments)}}()}(t,l))}),[o,t,l]),n.a.createElement(n.a.Fragment,null,n.a.createElement(H.a,{left:!0,cascade:!0},n.a.createElement(F.a,{id:"",src:"ppngltd-banner.webp",srcSet:"ppngltd-banner.webp 1000w,ppngltd-banner_ ppngltd-banner_500.webp 500w ppngltd-banner_300.webp 300w",rounded:!0,responsive:!0,fluid:!0,alt:"Logo"})),n.a.createElement(x.a,{className:"py-3"},n.a.createElement(V.a,{id:"bg-red"},n.a.createElement(V.a.Body,null,n.a.createElement(V.a.Text,null,"We provide property valuations and advice"))),n.a.createElement(V.a,{id:"bg-red"},n.a.createElement(V.a.Body,null,n.a.createElement(V.a.Text,null,"Expert local knowledge & experience"))),n.a.createElement(V.a,{id:"bg-red"},n.a.createElement(V.a.Body,null,n.a.createElement(V.a.Text,null,"Any property type in any location in Papua New Guinea(PNG)")))))},z=function(e){var a=e.match,t=e.location;e.history,a.params.id,t.search&&Number(t.search.split("=")[1]),Object(c.b)(),Object(c.c)((function(e){return e.cart})).cartItems;return n.a.createElement(j.a,{id:"bg-yellow"},n.a.createElement(k.a,{md:12},n.a.createElement("h1",null,"About the Company"),n.a.createElement("p",{align:"justify"},"Property PNG Limited is a PNG owned Property Valuation and Consultancy Practice. The Company was incorporated on 23rd February, 2010. The company provides independent property valuation and real estate consultancy services to meet the individual requirements of each client. Property PNG Ltd specialises in a diverse range of property valuation transactions and it is dedicated to providing a prompt and professional service. To ensure this commitment, the Company ensures compliance to International Valuation Standards and Generally Accepted Valuation Principles. Property PNG Limited is a PNG owned Property Valuation and Consultancy Practice."),n.a.createElement("p",{align:"justify"},["Mortgage Valuations for Financing Purposes","Fair Market Valuation for auditing Purposes","Stamp Duty Purposes","Rent Reviews for Lease Renewals","Building Replacement Costs for Insurance","Portfolio valuation for Corporate Bodies","Valauation for Pre-purchase","Retrospect Assessment","Feasibility Assessment of Property Development","Valuation for Compensation for Compulsary Acquisition","Asset Register Development"].map((function(e){return n.a.createElement("div",null,"\u2714",e)}))),n.a.createElement("p",{align:"justify"},"We can provide compensation assessments for compulsary acquisitions for Private Individuals and Government Authorities and Corporations.")))},X=(t(123),function(e){var a=e.match,t=e.location;e.history,a.params.id,t.search&&Number(t.search.split("=")[1]),Object(c.b)(),Object(c.c)((function(e){return e.cart})).cartItems;return n.a.createElement(j.a,null,n.a.createElement("div",{id:"bg-yellow"},n.a.createElement("h1",null,"Contact Us"),n.a.createElement("p",null,"If you need to have your property valued in PNG, and if you have any questions about our valuation process or would like to receive a quote, please reach out to us via email at support@propertypngltd.com or by calling us directly on (+675) 341 6368. Our fees are competitive and are dependent on the nature of the work and time involved to carry out the valuation task required by the client. ",n.a.createElement("br",null))),n.a.createElement(S.a,null,n.a.createElement(R.LinkContainer,{to:"/email"},n.a.createElement(I.a,{variant:"outline-dark"},"Email Us @ support@propertypngltd.com")),n.a.createElement(F.a,{id:"",src:"con.jpeg",srcSet:"con.jpeg 1000w,con.jpeg 500w, land/land_crop_300.webp 300w",rounded:!0,responsive:!0,fluid:!0,alt:"Logo"})))}),$=function(e){var a=e.children;return n.a.createElement(S.a,null,n.a.createElement(j.a,{className:"justify-content-sm-center"},n.a.createElement(k.a,null,a)))},K=function(){return n.a.createElement(j.a,{className:"py-3"},n.a.createElement(k.a,{md:8},n.a.createElement("h2",null,"Send an Email to Property PNG Ltd "),n.a.createElement($,null,n.a.createElement(U.a,{action:"https://formsubmit.co/54fd3468f3d97b9ba9e9167c7fd913f1",method:"POST"},n.a.createElement(U.a.Group,{as:j.a},n.a.createElement(U.a.Label,{column:!0,sm:"2"},"Name"),n.a.createElement(k.a,{sm:"10"},n.a.createElement(U.a.Control,{type:"text",required:!0,placeholder:"Enter Your name",name:"name"}))),n.a.createElement(U.a.Group,{as:j.a},n.a.createElement(U.a.Label,{column:!0,sm:"2"},"Company"),n.a.createElement(k.a,{sm:"10"},n.a.createElement(U.a.Control,{type:"text",required:!0,name:"company",placeholder:"Company Name"}))),n.a.createElement(U.a.Group,{as:j.a},n.a.createElement(U.a.Label,{column:!0,sm:"2"},"Email"),n.a.createElement(k.a,{sm:"10"},n.a.createElement(U.a.Control,{type:"email",required:!0,name:"email",placeholder:"Enter email"}))),n.a.createElement(U.a.Group,{as:j.a},n.a.createElement(U.a.Label,{column:!0,sm:"2"},"Phone"),n.a.createElement(k.a,{sm:"10"},n.a.createElement(U.a.Control,{type:"phone",name:"phone",placeholder:"Enter phone"}))),n.a.createElement(U.a.Group,{as:j.a},n.a.createElement(U.a.Label,{column:!0,sm:"2"},"Message"),n.a.createElement(k.a,{sm:"10"},n.a.createElement(U.a.Control,{type:"textarea",required:!0,name:"message",placeholder:"Enter Message"}))),n.a.createElement(I.a,{type:"submit",variant:"info",required:!0},"Email")))),n.a.createElement(k.a,{md:4},n.a.createElement("div",{className:"col-12"},n.a.createElement("img",{src:"images/mail.svg",class:"w-75"}))))},Z=function(){return n.a.createElement("header",null,n.a.createElement(b.a,{bg:"white",variant:"white",expand:"lg",collapseOnSelect:!0},n.a.createElement(S.a,null,n.a.createElement(R.LinkContainer,{to:"/"},n.a.createElement(b.a.Brand,null,n.a.createElement(F.a,{id:"logo",src:"../logo.gif",responsive:!0,fluid:!0,alt:"Logo"}))),n.a.createElement(b.a.Toggle,{"aria-controls":"basic-navbar-nav"}),n.a.createElement(T.a,{className:"ml-auto"},n.a.createElement(R.LinkContainer,{to:""},n.a.createElement(T.a.Link,{id:"bg-yellow"},n.a.createElement("i",{className:"fas fa-phone"})," ",n.a.createElement("a",{id:"bg-yellow",href:"tel:+675 341 6368"},"+675 3416 368")))))))},ee=t(13);var ae=function(e){var a=e.setOpenModal;return n.a.createElement("div",{className:"modalBackground"},n.a.createElement("div",{className:"modalContainer"},n.a.createElement("div",{className:"titleCloseBtn"},n.a.createElement("button",{onClick:function(){a(!1)}},"X")),n.a.createElement("div",{className:"title"},n.a.createElement("h1",null,"Are You Sure You Want to Continue?")),n.a.createElement("div",{className:"body"},n.a.createElement("p",null,"The next page looks amazing. Hope you want to go there!")),n.a.createElement("div",{className:"footer"},n.a.createElement("button",{onClick:function(){a(!1)},id:"cancelBtn"},"Cancel"),n.a.createElement("button",{onClick:function(){a(!1)}},"Continue"))))},te=function(){var e,a,t=Object(r.useState)(!1),l=Object(O.a)(t,2);l[0],l[1];return n.a.createElement(n.a.Fragment,null,n.a.createElement(k.a,null,n.a.createElement(S.a,{className:"parent-image-grid"},n.a.createElement(H.a,{left:!0,cascade:!0},n.a.createElement("figure",{className:"position-relative"},n.a.createElement("img",(e={className:"image-items",src:"commercial/com_crop_500.webp"},Object(ee.a)(e,"className","img-fluid"),Object(ee.a)(e,"alt","Logo"),e)),n.a.createElement("img",(a={className:"image-items",src:"industrial/crop_building_500.webp"},Object(ee.a)(a,"className","img-fluid"),Object(ee.a)(a,"alt","Logo"),a)),n.a.createElement("figcaption",{id:"bg-yellow"},"Industrial | Commercial")))),n.a.createElement(j.a,{id:"bg-yellow"},n.a.createElement("h1",null,"Commercial and Industrial Property Valuation"),"Property PNG valuers can assist you with all your industrial/commercial property valuation in PNG. We have extensive experience in properties such small office to large multi-storey developments and industrial sites. Industrial/commercial property valuations is solely business related and as such are approached differently to residential property valuations.")))},re=function(){return n.a.createElement(n.a.Fragment,null,n.a.createElement(H.a,{right:!0,cascade:!0},n.a.createElement("figure",{className:"position-relative"},n.a.createElement(F.a,{id:"images",src:"bg_crop.webp",srcSet:"bg_crop_1000.webp 1000w, bg_crop_500.webp  500w, bg_crop_300.webp 300w",rounded:!0,responsive:!0,fluid:!0,alt:"Logo"}),n.a.createElement("figcaption",{id:"bg-yellow"},"Other Services"))),n.a.createElement("div",{id:"bg-yellow"},n.a.createElement("h1",null,"Conveyancing"),n.a.createElement("div",null,n.a.createElement("p",{align:"justify"},"Our sister company Obsidian Conveyancing can assist you with all the real estate Conveyancing needs in PNG. Transferring property ownership from one party to another can be a complicated process however our team is able to assist and guide you through the process in a friendly, fast and efficient manner. We are an experienced real estate Conveyancer who assist with a range of issues related to property, including updating of titles, title searches and title replacements."),n.a.createElement("p",{align:"justify"}," The team will make conveyancing processing as easy as possible.If you have and questions or would like  a quote, please reach out to us via email ",n.a.createElement("email",null,"support@obsidianconveyancing.com")," or by calling us directly on  ",n.a.createElement("a",{href:"tel:+675 341 6367"},"+675 341 6367")))),n.a.createElement(R.LinkContainer,{to:"/obsidian-email"},n.a.createElement(I.a,{variant:"outline-danger"},"Email Us @ support@obsidianconveyancing.com")))},ne=function(){return n.a.createElement(n.a.Fragment,null,n.a.createElement("div",{id:"bg-yellow"},n.a.createElement("h1",null,"Vacant Land"),n.a.createElement("p",{align:"justify"},"Property PNG valuers can assist you with vacant land (be it residential, industrial or commercial) valuation in PNG. We can provide Feasibility Assessments of property development using Hypothetical Analysis. We also provide \u201cOn Completion\u201d valuations for individuals buying a house and land package for Mortgage Purposes.")),n.a.createElement(H.a,{right:!0,cascade:!0},n.a.createElement("figure",{className:"position-relative"},n.a.createElement(F.a,{id:"images",src:"land/land_crop.webp",srcSet:"land/land_crop_1000.webp 1000w,land/land_crop_500.webp 500w, land/land_crop_300.webp 300w",rounded:!0,responsive:!0,fluid:!0,alt:"Logo"}),n.a.createElement("figcaption",{id:"bg-yellow"},"Vacant Land Valuation"))))},le=function(e){var a,t,r=e.match,l=e.location;e.history,r.params.id,l.search&&Number(l.search.split("=")[1]),Object(c.b)(),Object(c.c)((function(e){return e.cart})).cartItems;return n.a.createElement(j.a,null,n.a.createElement(k.a,{md:12},n.a.createElement(S.a,null,n.a.createElement(H.a,{right:!0,cascade:!0},n.a.createElement("figure",{className:"position-relative"},n.a.createElement("img",(a={className:"image-items",src:"hotel/hotel_crop_500.webp"},Object(ee.a)(a,"className","img-fluid"),Object(ee.a)(a,"rounded",!0),Object(ee.a)(a,"responsive",!0),Object(ee.a)(a,"fluid",!0),Object(ee.a)(a,"alt","Logo"),a)),n.a.createElement("img",(t={className:"image-items",src:"residential/residential_crop_500.webp"},Object(ee.a)(t,"className","img-fluid"),Object(ee.a)(t,"rounded",!0),Object(ee.a)(t,"responsive",!0),Object(ee.a)(t,"fluid",!0),Object(ee.a)(t,"alt","Logo"),t)),n.a.createElement("figcaption",{id:"bg-yellow"},"Residential"))))),n.a.createElement("div",{id:"bg-yellow"},n.a.createElement("p",{align:"justify"},n.a.createElement("b",null," If you need to know the value of your home or investment residential property"),"We provide independent residential property valuation services to owners and buyer of property (improved or vacant land), landlords and professional service providers.")))},oe=function(){return n.a.createElement(j.a,{className:"py-3"},n.a.createElement(k.a,{md:8},n.a.createElement("h2",null,"Send an Email to Obsidian Conveyancing "),n.a.createElement($,null,n.a.createElement(U.a,{action:"https://formsubmit.co/anapitalai@gmail.com",method:"POST"},n.a.createElement(U.a.Group,{as:j.a},n.a.createElement(U.a.Label,{column:!0,sm:"2"},"Name"),n.a.createElement(k.a,{sm:"10"},n.a.createElement(U.a.Control,{type:"text",required:!0,placeholder:"Enter Your name",name:"name"}))),n.a.createElement(U.a.Group,{as:j.a},n.a.createElement(U.a.Label,{column:!0,sm:"2"},"Company"),n.a.createElement(k.a,{sm:"10"},n.a.createElement(U.a.Control,{type:"text",required:!0,name:"company",placeholder:"Company Name"}))),n.a.createElement(U.a.Group,{as:j.a},n.a.createElement(U.a.Label,{column:!0,sm:"2"},"Email"),n.a.createElement(k.a,{sm:"10"},n.a.createElement(U.a.Control,{type:"email",required:!0,name:"email",placeholder:"Enter email"}))),n.a.createElement(U.a.Group,{as:j.a},n.a.createElement(U.a.Label,{column:!0,sm:"2"},"Phone"),n.a.createElement(k.a,{sm:"10"},n.a.createElement(U.a.Control,{type:"phone",name:"phone",placeholder:"Enter phone"}))),n.a.createElement(U.a.Group,{as:j.a},n.a.createElement(U.a.Label,{column:!0,sm:"2"},"Message"),n.a.createElement(k.a,{sm:"10"},n.a.createElement(U.a.Control,{type:"textarea",required:!0,name:"message",placeholder:"Enter Message"}))),n.a.createElement(I.a,{type:"submit",variant:"info",required:!0},"Email")))),n.a.createElement(k.a,{md:4},n.a.createElement("div",{className:"col-12"},n.a.createElement("img",{src:"images/mail.svg",class:"w-75"}))))},ce=function(){return n.a.createElement(v.BrowserRouter,null,n.a.createElement(Z,null),n.a.createElement(N,null),n.a.createElement("main",{className:"py-3"},n.a.createElement(S.a,null,n.a.createElement(_.d,{path:"/",component:J,exact:!0}),n.a.createElement(_.d,{path:"/contacts",component:X}),n.a.createElement(_.d,{path:"/email",component:K}),n.a.createElement(_.d,{path:"/obsidian-email",component:oe}),n.a.createElement(_.d,{path:"/otherservices",component:re}),n.a.createElement(_.d,{path:"/residential",component:le}),n.a.createElement(_.d,{path:"/vacant",component:ne}),n.a.createElement(_.d,{path:"/commercial",component:te}),n.a.createElement(_.d,{path:"/about",component:z}),n.a.createElement(_.d,{path:"/modal",component:ae}))),n.a.createElement(G,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(n.a.createElement(c.a,{store:h},n.a.createElement(ce,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},89:function(e,a,t){e.exports=t(124)},98:function(e,a,t){},99:function(e,a,t){}},[[89,1,2]]]);
//# sourceMappingURL=main.bbef59be.chunk.js.map