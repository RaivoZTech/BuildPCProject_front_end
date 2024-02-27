(this.webpackJsonpuser_authentication=this.webpackJsonpuser_authentication||[]).push([[0],{13:function(e,a,t){e.exports=t(26)},26:function(e,a,t){"use strict";t.r(a);var l=t(0),n=t.n(l),s=t(12),r=t.n(s),c=(t(21),t(5)),m=t(3),o=t(27);class i extends l.Component{constructor(){super(...arguments),this.state={usernameOrEmail:"",password:"",errorMessage:"",isLoggedIn:!1,loginSuccessMessage:""},this.handleChange=e=>{this.setState({[e.target.name]:e.target.value})},this.handleSubmit=async e=>{e.preventDefault(),this.setState({errorMessage:"",loginSuccessMessage:""});try{const{usernameOrEmail:e,password:a}=this.state,t=await o.a.post("http://localhost:8080/api/auth/signin",{usernameOrEmail:e,password:a});console.log("Response data:",t.data),200===t.status&&(localStorage.setItem("userId",t.data.userId),localStorage.setItem("username",t.data.username),console.log("Username stored:",t.data.username),this.setState({isLoggedIn:!0}),this.setState({successMessage:"Welcome, ".concat(t.data.username,"!")}))}catch(a){console.error("Login error",a.response),this.setState({errorMessage:"Email or password is incorrect",usernameOrEmail:"",password:""})}}}render(){return this.state.isLoggedIn?n.a.createElement(m.a,{to:"/homepage"}):n.a.createElement("div",{className:"d-flex align-items-center justify-content-center min-vh-50"},n.a.createElement("div",{className:"col-md-6 col-lg-4 mx-auto"},n.a.createElement("div",{className:"bg-light rounded-4 py-5 px-4 px-md-5"},n.a.createElement("div",{className:"custom-form-container"},n.a.createElement("form",{onSubmit:this.handleSubmit},n.a.createElement("h3",null,"Sign In"),this.state.loginSuccessMessage&&n.a.createElement("div",{className:"alert alert-success",role:"alert"},this.state.loginSuccessMessage),this.state.errorMessage&&n.a.createElement("div",{className:"alert alert-danger",role:"alert"},this.state.errorMessage),n.a.createElement("div",{className:"mb-3"},n.a.createElement("label",null,"Username or Email"),n.a.createElement("input",{type:"text",className:"form-control",placeholder:"Enter username or Email",name:"usernameOrEmail",value:this.state.usernameOrEmail,onChange:this.handleChange})),n.a.createElement("div",{className:"mb-3"},n.a.createElement("label",null,"Password"),n.a.createElement("input",{type:"password",className:"form-control",placeholder:"Enter password",name:"password",value:this.state.password,onChange:this.handleChange})),n.a.createElement("div",{className:"d-grid"},n.a.createElement("button",{type:"submit",className:"btn btn-primary"},"Submit")))))))}}var d=i;class u extends l.Component{constructor(){super(...arguments),this.state={name:"",username:"",email:"",password:"",errorMessage:"",redirectToLogin:!1,showSignupModal:!1},this.handleChange=e=>{this.setState({[e.target.name]:e.target.value})},this.handleSubmit=async e=>{e.preventDefault(),this.setState({errorMessage:""});try{const{name:e,username:a,email:t,password:l}=this.state;await o.a.post("http://localhost:8080/api/auth/signup",{name:e,username:a,email:t,password:l}),this.setState({showSignupModal:!0}),setTimeout(()=>{this.setState({redirectToLogin:!0})},3e3)}catch(l){var a,t;console.error("Signup error",l.response),this.setState({errorMessage:(null===(a=l.response)||void 0===a||null===(t=a.data)||void 0===t?void 0:t.message)||"Username or email already exists."})}}}renderSignupModal(){return this.state.showSignupModal?n.a.createElement("div",{className:"save-build-modal-backdrop"},n.a.createElement("div",{className:"save-build-modal-content"},n.a.createElement("div",{className:"modal-header"},"Registration Successful"),n.a.createElement("div",{className:"modal-body"},"Your account has been created successfully. Redirecting to login page..."))):null}render(){return this.state.redirectToLogin?n.a.createElement(m.a,{to:"/sign-in"}):n.a.createElement("div",{className:"d-flex align-items-center justify-content-center min-vh-50"},n.a.createElement("div",{className:"col-md-6 col-lg-4 mx-auto"},n.a.createElement("div",{className:"bg-light rounded-4 py-5 px-4 px-md-5"},n.a.createElement("div",{className:"custom-form-container"},n.a.createElement("form",{onSubmit:this.handleSubmit},n.a.createElement("h3",null,"Sign Up"),this.state.errorMessage&&n.a.createElement("div",{className:"alert alert-danger",role:"alert"},this.state.errorMessage),n.a.createElement("div",{className:"mb-3"},n.a.createElement("label",null,"Name"),n.a.createElement("input",{type:"text",className:"form-control",placeholder:"Name",name:"name",value:this.state.name,onChange:this.handleChange})),n.a.createElement("div",{className:"mb-3"},n.a.createElement("label",null,"Username"),n.a.createElement("input",{type:"text",className:"form-control",placeholder:"Username",name:"username",value:this.state.username,onChange:this.handleChange})),n.a.createElement("div",{className:"mb-3"},n.a.createElement("label",null,"Email address"),n.a.createElement("input",{type:"email",className:"form-control",placeholder:"Enter email",name:"email",value:this.state.email,onChange:this.handleChange})),n.a.createElement("div",{className:"mb-3"},n.a.createElement("label",null,"Password"),n.a.createElement("input",{type:"password",className:"form-control",placeholder:"Enter password",name:"password",value:this.state.password,onChange:this.handleChange})),n.a.createElement("div",{className:"d-grid"},n.a.createElement("button",{type:"submit",className:"btn btn-primary"},"Sign Up")))))),this.renderSignupModal())}}var p=function(){const e=localStorage.getItem("username")||"User";return n.a.createElement("div",null,n.a.createElement("nav",{className:"navbar navbar-expand-lg navbar-light bg-white py-3"},n.a.createElement("div",{className:"container px-5"},n.a.createElement(c.b,{className:"navbar-brand",to:"/homepage"},n.a.createElement("span",{className:"fw-bolder text-primary"},"PC Builder & Compatibility Checker")),n.a.createElement("div",{className:"flex-grow-1 d-flex justify-content-center"},n.a.createElement("span",{style:{fontSize:"small"}},n.a.createElement("b",{className:"text-gradient d-inline"},"Welcome, ",e,"!"))),n.a.createElement("button",{className:"navbar-toggler",type:"button","data-bs-toggle":"collapse","data-bs-target":"#navbarSupportedContent","aria-controls":"navbarSupportedContent","aria-expanded":"false","aria-label":"Toggle navigation"},n.a.createElement("span",{className:"navbar-toggler-icon"})),n.a.createElement("div",{className:"collapse navbar-collapse",id:"navbarSupportedContent"},n.a.createElement("ul",{className:"navbar-nav ms-auto mb-2 mb-lg-0 small fw-bolder "},n.a.createElement("li",{className:"nav-item"},n.a.createElement("a",{className:"nav-link",href:"homepage"},"Home")),n.a.createElement("li",{className:"nav-item"},n.a.createElement("a",{className:"nav-link",href:"technews"},"News")),n.a.createElement("li",{className:"nav-item"},n.a.createElement("a",{className:"nav-link",href:"projects"},"My Builds")),n.a.createElement("li",{className:"nav-item"},n.a.createElement("a",{className:"nav-link",href:"buildpc"},"Build PC")),n.a.createElement("li",{className:"nav-item"},n.a.createElement("a",{className:"nav-link",href:"/logout"},"Log out"))))))," ")};var h=function(){return n.a.createElement("div",null,n.a.createElement("footer",{className:"bg-white py-4 mt-auto"},n.a.createElement("div",{className:"container px-5"},n.a.createElement("div",{className:"d-flex justify-content-center fs-2 gap-4"},n.a.createElement("a",{className:"text-gradient",href:"https://www.linkedin.com/in/raivo-zelcs92/"},n.a.createElement("i",{className:"bi bi-linkedin"})),n.a.createElement("a",{className:"text-gradient",href:"https://www.facebook.com/raivo.zelcs.96!"},n.a.createElement("i",{className:"bi bi-facebook"})),n.a.createElement("a",{className:"text-gradient",href:"https://github.com/RaivoZTech"},n.a.createElement("i",{className:"bi bi-github"}))),n.a.createElement("div",{className:"row align-items-center justify-content-between flex-column flex-sm-row"},n.a.createElement("div",{className:"col-auto"},n.a.createElement("div",{className:"small m-0"},"Copyright \xa9 PC@Comp 2023")),n.a.createElement("div",{className:"col-auto"},n.a.createElement("a",{className:"small",href:"#!"},"Privacy"),n.a.createElement("span",{className:"mx-1"},"\xb7"),n.a.createElement("a",{className:"small",href:"#!"},"Terms"),n.a.createElement("span",{className:"mx-1"},"\xb7"),n.a.createElement("a",{className:"small",href:"#!"},"Contact"))))))};var g=function(){return n.a.createElement("div",null,n.a.createElement(p,null),n.a.createElement("div",{className:"d-flex flex-column h-100"},n.a.createElement("main",{className:"flex-shrink-0"},n.a.createElement("header",{className:"py-5"},n.a.createElement("div",{className:"container px-5 pb-5"},n.a.createElement("div",{className:"row gx-5 align-items-center"},n.a.createElement("div",{className:"col-xxl-5"},n.a.createElement("div",{className:"text-center text-xxl-start"},n.a.createElement("div",{className:"badge bg-gradient-primary-to-secondary text-white mb-4"},n.a.createElement("div",{className:"text-uppercase"},"Design \xb7 Build \xb7 Creativity")),n.a.createElement("div",{className:"fs-3 fw-light text-muted"},"Welcome to PC Builder & compatibility checker"),n.a.createElement("h1",{className:"display-3 fw-bolder mb-5"},n.a.createElement("span",{className:"text-gradient d-inline"},"Let's start building your custom PC")),n.a.createElement("div",{className:"d-grid gap-3 d-sm-flex justify-content-sm-center justify-content-xxl-start mb-3"},n.a.createElement("a",{className:"btn btn-primary btn-lg px-5 py-3 me-sm-3 fs-6 fw-bolder",href:"buildpc"},"Start Build"),n.a.createElement("a",{className:"btn btn-outline-dark btn-lg px-5 py-3 fs-6 fw-bolder",href:"projects"},"View builds")))),n.a.createElement("div",{className:"col-xxl-7"},n.a.createElement("div",{className:"d-flex justify-content-center mt-5 mt-xxl-0"},n.a.createElement("div",{className:"profile bg-gradient-primary-to-secondary"},n.a.createElement("img",{className:"profile-img",src:"https://www.yugatech.com/wp-content/uploads/2021/03/pd-gundam.png",alt:"..."}))))))),n.a.createElement("section",{className:"bg-light py-5"},n.a.createElement("div",{className:"container px-5"},n.a.createElement("div",{className:"row gx-5 justify-content-center"},n.a.createElement("div",{className:"col-xxl-8"},n.a.createElement("div",{className:"text-center my-5"},n.a.createElement("h2",{className:"display-5 fw-bolder"},n.a.createElement("span",{className:"text-gradient d-inline"},"About the Project")),n.a.createElement("p",{className:"lead fw-light mb-4"},"Welcome to the PC Builder & Compatibility Checker."),n.a.createElement("p",{className:"text-muted"},"This project is designed to simplify the process of building your own PC by providing a user-friendly interface to select and assemble components. Our tool ensures compatibility between selected parts, saving time and reducing the complexity often associated with building a custom PC. Whether you are a gaming enthusiast, a professional content creator, or just stepping into the world of custom-built PCs, our platform is tailored to meet your needs. Here, you can explore, create, and validate your dream PC build with confidence."))))))),n.a.createElement(h,null)))};class E extends l.Component{constructor(){super(...arguments),this.state={builds:[],isLoading:!0,error:null,imageUrls:{},showModal:!1},this.fetchUserBuilds=async()=>{try{const e=localStorage.getItem("userId");if(!e)throw new Error("User ID not found");const a=await o.a.get("http://localhost:8080/api/pcbuilds/user/".concat(e));this.setState({builds:a.data,isLoading:!1,imageUrls:a.data.reduce((e,a)=>({...e,[a.id]:a.imageUrl||""}),{})})}catch(e){this.setState({error:e,isLoading:!1})}},this.calculateTotalPrice=e=>e.reduce((e,a)=>e+a.price,0),this.handleImageUrlChange=async(e,a)=>{try{await o.a.put("http://localhost:8080/api/pcbuilds/".concat(e,"/image"),{imageUrl:a}),this.fetchUserBuilds()}catch(t){console.error("Error updating image URL",t)}},this.handleImageUrlInputChange=(e,a)=>{this.setState(t=>({imageUrls:{...t.imageUrls,[e]:a}}))},this.handleDeleteBuild=async e=>{try{await o.a.delete("http://localhost:8080/api/pcbuilds/".concat(e)),this.fetchUserBuilds(),this.setState({showModal:!0})}catch(a){console.error("Error deleting build",a)}},this.renderComponentList=e=>e.map((e,a)=>n.a.createElement("div",{key:a,className:"mb-3"},n.a.createElement("h5",{className:"fw-bold"},e.type),n.a.createElement("p",{className:"small mb-0"},"Name: ",e.name),n.a.createElement("p",{className:"small"},"Specs: ",e.specs))),this.renderBuilds=()=>{const{imageUrls:e}=this.state;return this.state.builds.map((a,t)=>n.a.createElement("div",{className:"card overflow-hidden shadow rounded-4 border-0 mb-5",key:a.id},n.a.createElement("div",{className:"row g-0"},n.a.createElement("div",{className:"col-md-6 p-5"},n.a.createElement("h2",{className:"fw-bolder"},"Build ",t+1),this.renderComponentList(a.components),n.a.createElement("b",null,n.a.createElement("p",null,"Total Price: \u20ac",this.calculateTotalPrice(a.components).toFixed(2))),n.a.createElement("input",{type:"text",className:"form-control mb-2",placeholder:"Enter image URL",value:e[a.id]||"",onChange:e=>this.handleImageUrlInputChange(a.id,e.target.value)}),n.a.createElement("button",{className:"btn btn-primary",onClick:()=>this.handleImageUrlChange(a.id,e[a.id])},"Update Image"),n.a.createElement("button",{className:"btn btn-danger ms-3",onClick:()=>this.handleDeleteBuild(a.id)},"Delete Build")),n.a.createElement("div",{className:"col-md-6 position-relative"},n.a.createElement("img",{className:"img-fluid rounded-end",src:a.imageUrl||"https://dummyimage.com/600x400/343a40/6c757d",alt:"Build"})))))}}componentDidMount(){this.fetchUserBuilds()}renderModal(){return this.state.showModal?n.a.createElement("div",{className:"save-build-modal-backdrop"},n.a.createElement("div",{className:"save-build-modal-content"},n.a.createElement("div",{className:"modal-header"},"Build Deleted Successfully!"),n.a.createElement("div",{className:"modal-body"},"Your custom PC build has been deleted."),n.a.createElement("button",{onClick:()=>this.setState({showModal:!1}),className:"modal-button"},"Close"))):null}render(){const{isLoading:e,error:a,builds:t}=this.state,l=t.length>0;return n.a.createElement("div",{className:"d-flex flex-column h-100 bg-light"},n.a.createElement(p,null),n.a.createElement("main",{className:"flex-shrink-0"},n.a.createElement("section",{className:"py-5"},n.a.createElement("div",{className:"container px-5 mb-5"},n.a.createElement("div",{className:"text-center mb-5"},n.a.createElement("h1",{className:"display-5 fw-bolder mb-0"},n.a.createElement("span",{className:"text-gradient d-inline"},"My Builds"))),n.a.createElement("div",{className:"row gx-5 justify-content-center"},n.a.createElement("div",{className:"col-lg-11 col-xl-9 col-xxl-8"},e?n.a.createElement("p",null,"Loading builds..."):this.renderBuilds(),a&&n.a.createElement("p",{className:"text-danger"},a.message),!l&&!e&&n.a.createElement("div",{className:"alert alert-info"},"You haven't built anything yet.")))))),this.renderModal(),n.a.createElement(h,null))}}var b=E;var v=function(){return n.a.createElement("div",null,n.a.createElement("nav",{className:"navbar navbar-expand-lg navbar-light bg-white py-3"},n.a.createElement("div",{className:"container px-5"},n.a.createElement(c.b,{className:"navbar-brand",to:"/"},n.a.createElement("span",{className:"fw-bolder text-primary"},"PC Builder & Compatibility Checker")),n.a.createElement("button",{className:"navbar-toggler",type:"button","data-bs-toggle":"collapse","data-bs-target":"#navbarTogglerDemo02","aria-controls":"navbarTogglerDemo02","aria-expanded":"false","aria-label":"Toggle navigation"},n.a.createElement("span",{className:"navbar-toggler-icon"})),n.a.createElement("div",{className:"collapse navbar-collapse",id:"navbarTogglerDemo02"},n.a.createElement("ul",{className:"navbar-nav ms-auto mb-2 mb-lg-0 small fw-bolder"},n.a.createElement("li",{className:"nav-item"},n.a.createElement(c.b,{className:"nav-link",to:"/sign-in"},"Login")),n.a.createElement("li",{className:"nav-item"},n.a.createElement(c.b,{className:"nav-link",to:"/sign-up"},"Sign up")))))))};class N extends l.Component{constructor(e){super(e),this.state={navigate:!1,showLogoutModal:!1}}componentDidMount(){localStorage.removeItem("userId"),this.setState({showLogoutModal:!0}),setTimeout(()=>{this.setState({navigate:!0})},3e3)}renderLogoutModal(){return this.state.showLogoutModal?n.a.createElement("div",{className:"save-build-modal-backdrop"},n.a.createElement("div",{className:"save-build-modal-content"},n.a.createElement("h4",null,"Logged Out Successfully"),n.a.createElement("p",null,"You have been logged out."))):null}render(){return this.state.navigate?n.a.createElement(m.a,{to:"/sign-in"}):n.a.createElement("div",null,n.a.createElement("p",null,"Logging out..."),this.renderLogoutModal())}}var f=N;var y=function(){const[e,a]=Object(l.useState)([]),[t,s]=Object(l.useState)(1),[r,c]=Object(l.useState)(0),m="a0751c10fc4049d8a6a9bcf65c7cb8d5",i=Object(l.useCallback)(async()=>{try{const e='"CPU" OR "GPU" OR "MOTHERBOARD" OR "PSU" OR "SSD" OR "NVIDIA" OR "AMD" OR "COMPUTER HARDWARE" OR "PC COMPONENTS" OR "GAMING COMPUTERS"',l=await o.a.get("https://newsapi.org/v2/everything?q=".concat(encodeURIComponent(e),"&language=en&pageSize=10&page=").concat(t,"&apiKey=").concat(m));a(l.data.articles),c(Math.min(Math.ceil(l.data.totalResults/10),5))}catch(e){console.error("Error fetching news:",e)}},[t,m]);return Object(l.useEffect)(()=>{i()},[i]),n.a.createElement("div",null,n.a.createElement(p,null),n.a.createElement("div",{className:"d-flex flex-column h-100 bg-light"},n.a.createElement("main",{className:"flex-shrink-0"},n.a.createElement("div",{className:"container px-5 my-5"},n.a.createElement("div",{className:"text-center mb-5"},n.a.createElement("h1",{className:"display-5 fw-bolder mb-0"},n.a.createElement("span",{className:"text-gradient d-inline"},"Latest Tech News"))),n.a.createElement("div",{className:"news-container"},e.map((e,a)=>n.a.createElement("div",{key:a,className:"news-item"},n.a.createElement("img",{src:e.urlToImage,alt:e.title,className:"news-image"}),n.a.createElement("div",{className:"news-content"},n.a.createElement("h2",{className:"news-title"},e.title),n.a.createElement("p",{className:"news-description"},e.description),n.a.createElement("a",{href:e.url,className:"read-more-btn",target:"_blank",rel:"noopener noreferrer"},"Read More"))))),n.a.createElement("div",{className:"pagination-container"},Array.from({length:r},(e,a)=>a+1).map(e=>n.a.createElement("button",{key:e,onClick:()=>(s(e),void window.scrollTo(0,0)),className:e===t?"page-btn active":"page-btn"},e))))),n.a.createElement(h,null)))};class C extends l.Component{constructor(e){super(e),this.fetchComponentsByType=e=>{o.a.get("http://localhost:8080/api/components/type/".concat(e)).then(a=>{const t=a.data;this.setState(a=>({components:{...a.components,[e]:t}}))}).catch(e=>{console.error(e)})},this.handleSelectChange=(e,a)=>{this.setState(t=>({selectedComponents:{...t.selectedComponents,[e]:a}}))},this.addToBuild=async e=>{const a=Number(this.state.selectedComponents[e]);if(a){const l=this.state.components[e].find(e=>e.id===a),n=[...this.state.addedComponents,l];if(n.length>1){const a=n.map(e=>e.id);try{console.log("Sending for compatibility check:",{componentIds:a});const t=(await o.a.post("http://localhost:8080/api/pcbuilds/check-compatibility",{componentIds:a})).data;console.log("Response data:",t),"Compatible"===t?this.setState({addedComponents:n,recentlyAdded:{...this.state.recentlyAdded,[e]:!0}},()=>{setTimeout(()=>{this.setState(a=>({recentlyAdded:{...a.recentlyAdded,[e]:!1}}))},2e3)}):alert("Incompatibility Issue: ".concat(t))}catch(t){console.error("Error during compatibility check",t),alert("Error occurred while checking compatibility.")}}else this.setState(a=>({addedComponents:n,recentlyAdded:{...a.recentlyAdded,[e]:!0}}),()=>{setTimeout(()=>{this.setState(a=>({recentlyAdded:{...a.recentlyAdded,[e]:!1}}))})})}},this.removeFromBuild=e=>{const a=Number(this.state.selectedComponents[e]);a&&this.setState(t=>({addedComponents:t.addedComponents.filter(e=>e.id!==a),selectedComponents:{...t.selectedComponents,[e]:""}}))},this.saveBuild=async e=>{e.preventDefault();const a=localStorage.getItem("userId"),t=this.state.addedComponents.map(e=>e.id);try{await o.a.post("http://localhost:8080/api/pcbuilds",{userId:a,componentIds:t}),this.setState({showModal:!0})}catch(l){console.error("Error saving build",l)}},this.calculateTotalPrice=()=>this.state.addedComponents.reduce((e,a)=>e+a.price,0),this.state={components:{case:[],motherboard:[],cpu:[],ram:[],gpu:[],psu:[],ssd:[],cooler:[]},selectedComponents:{case:"",motherboard:"",cpu:"",ram:"",gpu:"",psu:"",ssd:"",cooler:""},recentlyAdded:{case:!1,motherboard:!1,cpu:!1,ram:!1,gpu:!1,psu:!1,ssd:!1,cooler:!1},addedComponents:[],showModal:!1}}componentDidMount(){this.fetchComponentsByType("case"),this.fetchComponentsByType("motherboard"),this.fetchComponentsByType("cpu"),this.fetchComponentsByType("ram"),this.fetchComponentsByType("gpu"),this.fetchComponentsByType("psu"),this.fetchComponentsByType("ssd"),this.fetchComponentsByType("cooler")}renderDropdown(e,a){const t=this.state.recentlyAdded[e]?"added-message-container added-message-active":"added-message-container";return n.a.createElement("div",{className:"mb-3"},n.a.createElement("b",null,n.a.createElement("label",{htmlFor:e,className:"form-label"},a)),n.a.createElement("div",{className:"input-group"},n.a.createElement("select",{className:"form-select",id:e,value:this.state.selectedComponents[e],onChange:a=>this.handleSelectChange(e,a.target.value)},n.a.createElement("option",{value:""},"Select a ",a),this.state.components[e].map((e,a)=>n.a.createElement("option",{key:a,value:e.id},e.name," - \u20ac",e.price.toFixed(2)))),n.a.createElement("button",{type:"button",className:"btn btn-outline-primary",onClick:()=>this.addToBuild(e)}," Add to Build"),n.a.createElement("div",{className:t},n.a.createElement("i",{className:"bi bi-check-circle"})," Added")))}renderSelectedComponent(e){const a=Number(this.state.selectedComponents[e]);if(a){if(this.state.addedComponents.some(e=>e.id===a)){const t=this.state.components[e].find(e=>e.id===a);if(t)return n.a.createElement("div",{className:"alert alert-info mt-2"},n.a.createElement("div",null,n.a.createElement("b",null,"Name:")," ",t.name),n.a.createElement("div",null,n.a.createElement("b",null,"Specifications:")," ",t.specs),n.a.createElement("div",null,n.a.createElement("b",null,"Price:")," ",t.price),n.a.createElement("button",{className:"btn btn-danger btn-sm",onClick:()=>this.removeFromBuild(e)},"Remove"))}}return null}renderModal(){return this.state.showModal?n.a.createElement("div",{className:"save-build-modal-backdrop"},n.a.createElement("div",{className:"save-build-modal-content"},n.a.createElement("div",{className:"modal-header"},"Build Saved Successfully!"),n.a.createElement("div",{className:"modal-body"},"Your custom PC build has been saved."),n.a.createElement("button",{onClick:()=>this.setState({showModal:!1}),className:"modal-button"},"Close"))):null}render(){const e=this.calculateTotalPrice();return n.a.createElement("div",{className:"d-flex flex-column h-100"},n.a.createElement(p,null),n.a.createElement("main",{className:"flex-shrink-0"},n.a.createElement("section",{className:"py-5"},n.a.createElement("div",{className:"container px-5"},n.a.createElement("div",{className:"bg-light rounded-4 py-5 px-4 px-md-5"},n.a.createElement("div",{className:"text-center mb-5"},n.a.createElement("h1",{className:"display-5 fw-bolder mb-0"},n.a.createElement("span",{className:"text-gradient d-inline"},"Build your PC"))),n.a.createElement("div",{className:"row gx-5 justify-content-center"},n.a.createElement("div",{className:"col-lg-8 col-xl-6"},n.a.createElement("form",null,this.renderDropdown("case","Case"),this.renderSelectedComponent("case"),this.renderDropdown("motherboard","Motherboard"),this.renderSelectedComponent("motherboard"),this.renderDropdown("cpu","CPU"),this.renderSelectedComponent("cpu"),this.renderDropdown("ram","RAM"),this.renderSelectedComponent("ram"),this.renderDropdown("gpu","GPU"),this.renderSelectedComponent("gpu"),this.renderDropdown("psu","PSU"),this.renderSelectedComponent("psu"),this.renderDropdown("ssd","SSD"),this.renderSelectedComponent("ssd"),this.renderDropdown("cooler","Cooler"),this.renderSelectedComponent("cooler"),n.a.createElement("div",{className:"text-center mb-3"},n.a.createElement("h3",null,"Total average price: \u20ac",e.toFixed(2))),n.a.createElement("button",{className:"btn btn-success",onClick:this.saveBuild},"Save Build")))))))),this.renderModal(),n.a.createElement(h,null))}}var w=C;var x=function(){return n.a.createElement(c.a,null,n.a.createElement("div",{className:"App"},n.a.createElement(m.d,null,n.a.createElement(m.b,{path:"/",element:n.a.createElement(n.a.Fragment,null,n.a.createElement(v,null),n.a.createElement(d,null))}),n.a.createElement(m.b,{path:"/sign-up",element:n.a.createElement(n.a.Fragment,null,n.a.createElement(v,null),n.a.createElement(u,null))}),n.a.createElement(m.b,{path:"/sign-in",element:n.a.createElement(n.a.Fragment,null,n.a.createElement(v,null),n.a.createElement(d,null))}),n.a.createElement(m.b,{path:"/homepage",element:n.a.createElement(n.a.Fragment,null,n.a.createElement(g,null))}),n.a.createElement(m.b,{path:"/technews",element:n.a.createElement(n.a.Fragment,null,n.a.createElement(y,null))}),n.a.createElement(m.b,{path:"/projects",element:n.a.createElement(n.a.Fragment,null,n.a.createElement(b,null))}),n.a.createElement(m.b,{path:"/buildPC",element:n.a.createElement(n.a.Fragment,null,n.a.createElement(w,null))}),n.a.createElement(m.b,{path:"/logout",element:n.a.createElement(f,null)}))))};var S=e=>{e&&e instanceof Function&&t.e(3).then(t.bind(null,28)).then(a=>{let{getCLS:t,getFID:l,getFCP:n,getLCP:s,getTTFB:r}=a;t(e),l(e),n(e),s(e),r(e)})};r.a.createRoot(document.getElementById("root")).render(n.a.createElement(n.a.StrictMode,null,n.a.createElement(x,null))),S()}},[[13,1,2]]]);
//# sourceMappingURL=main.87fb9f56.chunk.js.map