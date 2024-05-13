document.addEventListener('DOMContentLoaded', function () {
  const filterLinks = document.querySelectorAll('#portfolio-filter a');

  filterLinks.forEach(link => {
    link.addEventListener('click', function (e) {
      e.preventDefault();
      const category = this.getAttribute('data-filter');

      // Remove active class from all links
      filterLinks.forEach(item => {
        item.classList.remove('active');
      });

      // Add active class to the clicked link
      this.classList.add('active');

      // Show or hide items based on category
      const portfolioItems = document.querySelectorAll('.portfolio-item');
      portfolioItems.forEach(item => {
        const itemCategory = item.getAttribute('data-category');

        if (category === '*' || itemCategory.includes(category)) {
          item.style.display = 'block';
        } else {
          item.style.display = 'none';
        }
      });
    });
  });
});
