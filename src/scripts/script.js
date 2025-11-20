// Функция для переключения раскрытия строки
function toggleRow(element) {
    element.classList.toggle('expanded');
}

// Обработчики для предотвращения всплытия событий
//document.addEventListener('DOMContentLoaded', function() {
//    const noteTriggers = document.querySelectorAll('.note-trigger');
//    
//    noteTriggers.forEach(trigger => {
//        trigger.addEventListener('click', function(e) {
//            e.stopPropagation(); // Предотвращаем раскрытие строки при клике на примечание
//        });
//    });
//});
