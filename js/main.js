document.addEventListener('DOMContentLoaded', function () {
  	app.init();
});

var app = {
  
  	siButton: document.getElementById('si'),
  	noButton: document.getElementById('no'),
  	audio: new Audio(),

  	playSound: function(srcSound){
			app.audio.src = "./sound/" + srcSound + ".ogg";
			app.audio.play();
  	},

  	playSi: function(){
	  	app.playSound('si');
  	},

  	playNo: function(){
	  	app.playSound('no');
  	},

  	init: function() {			
    	app.siButton.addEventListener('click', app.playSi);
    	app.noButton.addEventListener('click', app.playNo);
    	
	    if ('serviceWorker' in navigator) {
      		navigator.serviceWorker
        		.register('service-worker.js')
        		.then(function() {
          		//console.log('Service Worker Registered');
        	});
    	}
  	}
};
