define([
    'underscore',
    'backbone',
    'models/model',
    'views/modelView'
], function(_, Backbone, Model, ModelView) {
    const initialize = function(){
        let model = new Model({title: "Blue Moon"});
        let modelView = new ModelView({el: "#container", model: model});
        modelView.render();
    }

    return {
        initialize: initialize
    };
});