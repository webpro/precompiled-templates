define(['data/data', 'hgn!templates/template.mustache'], function(data, compiledTemplate) {

    var output = compiledTemplate.render(data);

    console.log(output);

});
