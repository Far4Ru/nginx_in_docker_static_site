(function () {
    const modal = document.getElementById('thankYouModal');
    const closeBtn = modal ? modal.querySelector('.modal__close') : null;

    window.openModal = function () {
        if (modal) {
            modal.classList.add('show');
            document.body.style.overflow = 'hidden';
        }
    };

    window.closeModal = function () {
        if (modal) {
            modal.classList.remove('show');
            document.body.style.overflow = '';
        }
    };

    if (modal && closeBtn) {
        closeBtn.onclick = window.closeModal;

        modal.onclick = function (e) {
            if (e.target === modal) window.closeModal();
        };

        document.onkeydown = function (e) {
            if (e.key === 'Escape' && modal.classList.contains('show')) {
                window.closeModal();
            }
        };
    }
})();