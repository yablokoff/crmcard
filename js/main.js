$( function() {
    var $window = $(window),
        $body = $('body'),

        $contentBox = $('[data-scroll]'),

        cssClassOpen = "open"
    ;

    function setHeightContent() {
        var height = $body.height() - $contentBox.offset().top;
        $contentBox.height(height);

        $contentBox.jScrollPane();
    }

    function viewBlock($block) {
        $block.toggleClass(cssClassOpen);
    }

    setHeightContent();

    $window.resize(function() {
        setHeightContent();
    });

    //filter open
    (function(){
        var $filters = $('[data-filter]');

        $body.on ("click", "[data-toggle='show']", (function(){
            viewBlock($(this).parent());
		}));

        $filters.on ("click", "[data-toggle='close']", (function(){
			$(this).closest('[data-filter]').removeClass(cssClassOpen);
		}));

    })();

    //table open
    (function(){
        $body.on ("click", "[data-toggle='view-table']", (function(){
            viewBlock($(this).parent());
            setHeightContent();
        }));

    })();

});
