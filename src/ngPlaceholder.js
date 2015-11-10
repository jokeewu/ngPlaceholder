/**
 * 
 */

(function(angular) {

    angular.module('ngPlaceholder', [])
        .directive('ngPlaceholder', Placeholder);

    Placeholder.$inject = [];

    function Placeholder() {
        return {
            restrict: 'A',
            link: function(scope, el, attrs, ctrl) {
                
            }
        };
    }

})(angular);