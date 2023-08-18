document.addEventListener('DOMContentLoaded', function() {
    var links = document.querySelectorAll('a'); // すべての <a> タグを選択
    links.forEach(function(link) {
        link.addEventListener('click', function(event) {
            event.preventDefault(); // リンクのデフォルトの遷移をキャンセル
            var delay = 200; // 遅延するミリ秒数（例: 3秒）
            setTimeout(function() {
                window.location.href = link.getAttribute('href'); // 遷移を実行
            }, delay);
        });
    });
});



$(function () {
    $(window).scroll(function () {
        const windowHeight = $(window).height();
        const scroll = $(window).scrollTop();

        $('.element').each(function () {
            const targetPosition = $(this).offset().top;
            if (scroll > targetPosition - windowHeight + 100) {
                $(this).addClass("is-fadein");
            }
        });
    });
});

$(window).on("load", function () {
    $(".element").addClass("is-fadein");
});