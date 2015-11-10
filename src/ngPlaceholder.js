/**
 * ngPlaceholder
 *
 * @author jacky_coder@163.com
 * @date 2015-11-10
 */

(function(angular) {

    angular.module('ngPlaceholder', [])
        .directive('ngPlaceholder', Placeholder);

    Placeholder.$inject = [];

    function Placeholder() {
        return {
            restrict: 'A',
            link: function(scope, el, attrs, ctrl) {
                var _$parent = el.parent(),
                    pm = attrs.placeholderMethod || 'blur',
                    pc = attrs.placeholderClass || 'placeholder',
                    _$ph = $('<span class="' + pc + '">' + attrs.ngPlaceholder + '</span>');

                // Append el to wrap container
                _$parent.append(_$ph);

                // Bind event listener for pre input 
                _$parent.on('click', 'input,.' + pc, function() {
                    el.focus();

                    switch (pm) {
                        case 'blur':
                            _$ph.hide();
                            break;
                        case 'input':
                            el.on('input', function() {
                                if (!$(this).val()) {
                                    _$ph.show();
                                } else {
                                    _$ph.hide();
                                }
                            });
                            break;
                    }

                });

                // After input and blur
                _$parent.on('blur', 'input', function() {
                    if (!$(this).val()) {
                        _$ph.show();
                    }
                });

            }
        };
    }

})(angular);
