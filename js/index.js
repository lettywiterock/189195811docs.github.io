new Vue({
      el: '#app',
      data: function() {
        return { 
        	visible: false,
        	message:'测试右边'
        	}
      }
    })
// Grab the current date
var currentDate = new Date();

// Set some date in the past. In this case, it's always been since Jan 1
var pastDate  = new Date();

// Calculate the difference in seconds between the future and current date
var diff = currentDate.getTime() / 1000 - pastDate.getTime() / 1000;

// Instantiate a coutdown FlipClock
var clock = $('.your-clock').FlipClock(diff,{
	clockFace: 'TwentyFourHourClock'
});