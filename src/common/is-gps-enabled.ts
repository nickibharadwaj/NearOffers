export let isGPSEnabled = () => {

    let cordova = (<any>window).cordova;
                if (cordova) {
                        cordova.plugins.diagnostic.isGpsLocationEnabled(
            function(e) {
                if (e){
                  alert("location on")
                 
                }   
                else {
                  alert("Location Not Turned ON");
                  cordova.plugins.diagnostic.switchToLocationSettings();
                }
            },
            function(e) {
                alert('Error ' + e);
            }
        );
                }
                return true;
};
