define([
    "jquery",
    "underscore",
    "backbone",
    "models/model"

], function($, _, Bakbone, Model){
    const Collection = Bakbone.Collection.extend({
        model: Model
    });
    return Collection;
});