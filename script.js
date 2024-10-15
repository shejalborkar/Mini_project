const filterBtns = document.querySelectorAll('.filter-btn');
const videoGrid = document.querySelectorAll('.video-grid');

filterBtns.forEach((btn)) => {
    btn.addEventListener('click',() => {
        const filter = btn.dataset.filter;
        const videos = document.querySelectorAll('.video-thumb');
    
 videos.forEach((video)) => {
            if (filter === 'all' || video.dataset.category === filter)
            {
                video.style.display = 'block';
            } else {
                video.style.display=''
            }
        }
    }
    function filterVideos(category) { 
            let videos = document.querySelectorAll('.video-container'); 
            videos.forEach(video => { 
            if (category === 'all' || video.classList.contains(category)) { 
            video.style.display = 'block'; 
            } else { 
            video.style.display = 'none'; 
            } 
            });  
    })
}
