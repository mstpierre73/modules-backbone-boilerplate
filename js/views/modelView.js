define([
    'jquery',
    'underscore',
    'backbone',
    'models/model'
], function($, _, Backbone, Model) {
    const ModelView = Backbone.View.extend({
        render: function(){
            this.$el.html(this.model.get("title"));
            return this;
        }
    });
    return ModelView;  
});