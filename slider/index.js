const wrapperThumb = document.querySelectorAll("#wrapper-thumb .thumb");

wrapperThumb.forEach((thumb) => {
  const previewImage = document.getElementById("preview_img");
  thumb.addEventListener("click", (e) => {
    e.preventDefault();
    const color = thumb.getAttribute("data-color");
    previewImage.style.backgroundColor = color;
  });
});
