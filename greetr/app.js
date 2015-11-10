(function(global, $){
    var Greetr = function(firstname, lastname, language) {
        return new init(firstname, lastname, language);
    }
}(window, null));

var init = function(firstname, lastname, language) {
    console.log(this);
    return this;
}

Greetr();