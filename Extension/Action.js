var Action = function() { }

Action.prototype = {
    
run: function(parameters) {
    parameters.comletionFunction({"URL": document.URL, "title": document.title});
},
    
finalize: function(parameters) {
    var customJavaScript = parameters["customJavaScript"];
    eval(customJavaScript);
}
    
};

var ExtensionPreprocessingJS = new Action
