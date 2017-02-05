/**
 * Created by Fenchelteefee on 19.06.2016.
 */
(function () {
    "use strict";

    angular
        .module("common.services")
        .factory("productResource",
            ["$resource",
                productResource]);

    function productResource($resource) {
        return $resource("/api/products/:productId")
    }

}());
