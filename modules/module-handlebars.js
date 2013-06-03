define(['data/data', 'hb!templates/template.mustache'], function(data, compiledTemplate) {

    var output = compiledTemplate(data);

    console.log(output);

});
