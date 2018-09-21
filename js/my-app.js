// Initialize your app
var myApp = new Framework7({
	root:'#app',
	theme: 'md', //ios, md, auto
    modalTitle: 'Framework7', 	//title for modals
	panel: {
    	swipe: 'left',
  	},
	cache:false,
	pushState:false,
	swipeBackPage:true,
	material: true,
	routes: [
		{
		path: '/home/',
    	url: 'index.html',
    	name: 'home',
  		},
		{
		path: '/features/',
    	url: 'features.html',
    	name: 'features',
  		},
		{
		path: '/spa-info/',
    	url: 'spa-info.html',
    	name: 'spa-info',
  		},
		
	]
});

// Export selectors engine
var $$ = Dom7;





 

