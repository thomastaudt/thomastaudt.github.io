
var rootElement = document.getElementById( "impress" );

var callbacksOnEnter = new Array();

var onEnter = function( callback ) {
    callbacksOnEnter.push(callback);
};


var addClass = function(targetStepId, selector, className) {
    return function(currentStep) {
        if ( targetStepId == currentStep.id ) {
            console.log(selector);
            var element = document.querySelector( selector );
            console.log(element);
            if ( element != null ) {
                element.classList.add(className);
                console.log('added class to element');
            }
        }
    };
};

var removeClass = function(targetStepId, selector, className) {
    return function(currentStep) {
        if ( targetStepId == currentStep.id ) {
            document.querySelector( selector ).classList.remove(className);
        }
    };
};


rootElement.addEventListener( "impress:stepleave", function() {
    var currentStep = document.querySelector( ".active" );
    for ( var i = 0; i < callbacksOnEnter.length; i++ ) {
        console.log('had callback');
        callbacksOnEnter[i](currentStep);
    };
});

//onEnter( addClass('intro-lsw', '.test', 'duh') );

onEnter( addClass('ripening-zoom', '.ripening-svg', 'zoomed') );

onEnter( removeClass('ripening-zoom-end', '.ripening-svg', 'zoomed') );

//var callbacksOnLeave = new Array();



//var onLeave = function( callback ) {
    //callbacksOnLeave.push(callback);
//}


//rootElement.addEventListener( "impress:stepleave", function(event) {
    //for ( var i = 0; i < callbacksOnLeave.length; i++ ) {
        //callbacksOnLeave[i](event);
    //}
//});


//rootElement.addEventListener( "impress:stepenter", function() {
  //var currentStep = document.querySelector( ".present" );
  //console.log( "Entered the Step Element '" + currentStep.id + "'" );
//});




//var unhide = function(targetStepId, selector) {
    //return function(event) {
        //if ( targetStepId == event.target.id ) {
            //document.querySelector( selector ).style.visibility = 'visible';
    //}
//}

//var hide = function(targetStepId, selector) {
    //return function(event) {
        //if ( targetStepId == event.target.id ) {
            //document.querySelector( selector ).style.visibility = 'hidden';
    //}
//}

//var hardhide = function(targetStepId, selector) {
    //return function(currentStep) {
        //if ( targetStepId == currentStep.id ) {
            //document.querySelector( selector ).style.visibility = 'none';
    //}
//}


