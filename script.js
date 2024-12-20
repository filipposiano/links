document.addEventListener('DOMContentLoaded', () => {
  const icon = document.getElementById('my-animated-icon');
  const link = icon ? icon.parentElement : null;

  if (icon && link) {
    const addBounce = () => icon.classList.add('fa-bounce');
    const removeBounce = () => icon.classList.remove('fa-bounce');

    icon.addEventListener('mouseover', addBounce);
    icon.addEventListener('mouseout', removeBounce);
    link.addEventListener('mouseover', addBounce);
    link.addEventListener('mouseout', removeBounce);
  }
});