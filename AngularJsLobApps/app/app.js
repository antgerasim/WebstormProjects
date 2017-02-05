/**
 * Created by Fenchelteefee on 18.06.2016.
 */
(function (){
    "use strict"
    var app = angular.module("productManagement",["common.services"]);
}());




//double parenthesis after curly braces - function become self executing.

/*Without putting the function in braces, the Js parser treats the fx as a fx declaration instead of a fx-
* epression and throws a syntax error. Because a fx-declaration requires a name. The accepted way to tell the parser
* to expect a function expression, is to just wrap it into parenthesis.
* */
