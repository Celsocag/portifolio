(($)=>{
  const $projectButtons = $.querySelectorAll('.projects__bt');
  const $gallery = $.querySelector('.gallery');
  
  $projectButtons.forEach(item => {
    item.addEventListener('click', () => {
      $gallery.classList.add('active');     
    })
  });
})(document)

//# sourceMappingURL=index-debug.js.map

//# sourceMappingURL=index-debug-debug.js.map

//# sourceMappingURL=index-debug-debug-debug.js.map
