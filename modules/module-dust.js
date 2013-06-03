define(['data/data', 'dst!templates/template.dust'], function(data, compiledTemplate) {

    compiledTemplate(data, function(error, output){

        console.log(output);

    });
});
