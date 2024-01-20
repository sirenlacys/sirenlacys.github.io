document.addEventListener('DOMContentLoaded', function () {
    var videoContainer = document.getElementById('videoContainer');
    var searchInput = document.getElementById('searchInput');

    // Mengumpulkan elemen video
    var videos = videoContainer.querySelectorAll('video');

    searchInput.addEventListener('input', function () {
        var searchQuery = searchInput.value.toLowerCase();

        videos.forEach(function (video) {
            var title = video.dataset.title.toLowerCase();

            if (title.includes(searchQuery)) {
                video.style.display = 'block';
            } else {
                video.style.display = 'none';
            }
        });
    });

    // Menanggapi acara play pada setiap video
    videos.forEach(function (video) {
        video.addEventListener('play', function () {
            // Menghentikan pemutaran video lain jika sedang diputar
            videos.forEach(function (otherVideo) {
                if (otherVideo !== video && !otherVideo.paused) {
                    otherVideo.pause();
                }
            });

            // Menampilkan judul video yang sedang diputar
            var title = video.dataset.title;
            var videoTitleElement = document.querySelector('.video-title');
            videoTitleElement.textContent = title;
        });
    });
});
