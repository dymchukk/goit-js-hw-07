import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

const galleryContainer = document.querySelector('.gallery');
const galleryMarkup = createGalleryMarkup(galleryItems);
    
galleryContainer.insertAdjacentHTML('beforeend', galleryMarkup);   
    
function createGalleryMarkup(galleryItems) {
    return galleryItems
        .map(({ preview, original, description }) => {
            return `
                <div class="gallery__item">
                    <a class="gallery__link" href="${original}">
                            <img class="gallery__image" 
                                src="${preview}" 
                                alt="${description}"
                            />
                        </a>
                </div >
                `;
            })
        .join('');
}

          
let modalGallery = new SimpleLightbox('.gallery a', {
    captionsData: 'alt',
    captionPosition: 'bottom',
    captionDelay: 250,    
}); 
