document.addEventListener('DOMContentLoaded', function () {
    var videoContainer = document.getElementById('videoContainer');
    var searchInput = document.getElementById('searchInput');
    var videos = videoContainer.querySelectorAll('.video-wrapper');

    searchInput.addEventListener('input', function () {
        var searchQuery = searchInput.value.toLowerCase();

        videos.forEach(function (video) {
            var titleElement = video.querySelector('.video-title');
            var title = titleElement.textContent.toLowerCase();

            if (title.includes(searchQuery)) {
                video.style.display = 'block';
                // Sorot kata kunci pencarian
                titleElement.innerHTML = highlightSearchTerm(title, searchQuery);
            } else {
                video.style.display = 'none';
            }
        });
    });

    function highlightSearchTerm(text, searchTerm) {
        var highlightedText = text.replace(new RegExp(searchTerm, 'gi'), function (match) {
            return '<span class="highlight">' + match + '</span>';
        });
        return highlightedText;
    }

    // Menanggapi acara play pada setiap video
    videos.forEach(function (video) {
        video.querySelector('video').addEventListener('play', function () {
            // Menghentikan pemutaran video lain jika sedang diputar
            videos.forEach(function (otherVideo) {
                if (otherVideo !== video && otherVideo.querySelector('video').paused === false) {
                    otherVideo.querySelector('video').pause();
                }
            });
        });
    });
});
