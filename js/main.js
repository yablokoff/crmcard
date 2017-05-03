$( function() {
    var $window = $(window),
        $body = $('body'),

        $contentBox = $('[data-scroll]'),

        cssClassOpen = "open",
        cssClassActive = "active"
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

    //filter checkbox
    (function(){
        var $filters = $('[data-filter]');

        $filters.on ("change", "[data-checkbox-filter]", (function(){
            $(this).parent().parent().toggleClass(cssClassActive);
        }));

    })();

    //table open
    (function(){
        $body.on ("click", "[data-toggle='view-table']", (function(){
            viewBlock($(this).parent());
            setHeightContent();
        }));

    })();

    //calendar
    (function(){
        var $calendarsPeriod = $("[data-calendar-period]");

        $.fn.datepicker.language['ru'] =  {
            days: ['Воскресенье','Понедельник','Вторник','Среда','Четверг','Пятница','Суббота'],
            daysShort: ['Вос','Пон','Вто','Сре','Чет','Пят','Суб'],
            daysMin: ['Вс','Пн','Вт','Ср','Чт','Пт','Сб'],
            months: ['Январь','Февраль','Март','Апрель','Май','Июнь','Июль','Август','Сентябрь','Октябрь','Ноябрь','Декабрь'],
            monthsShort: ['Янв','Фев','Мар','Апр','Май','Июн','Июл','Авг','Сен','Окт','Ноя','Дек'],
            today: 'Сегодня',
            clear: 'Очистить',
            dateFormat: 'dd.mm.yyyy',
            timeFormat: 'hh:ii',
            firstDay: 1
        }

        if ($calendarsPeriod.length) {
            $calendarsPeriod.each(function () {
                $(this).datepicker({
                    language: 'ru',
                    inline: true,
                    range: true,
                    multipleDatesSeparator: "-",
                    toggleSelected: false
                });
            });
        }

    })();

});
