script.js

let fotos = [
    { id: 1, url: "foto1.jpg", likes: 0, comentarios: [] },
    { id: 2, url: "foto2.jpg", likes: 0, comentarios: [] }
];

function renderizarFotos() {
    let content = document.getElementById('main-content');
    content.innerHTML = '';
    fotos.forEach(foto => {
        let post = document.createElement('div');
        post.classList.add('post');

        
        let img = document.createElement('img');
        img.src = foto.url;
        post.appendChild(img);

        
        let likes = document.createElement('div');
        likes.classList.add('likes');
        likes.textContent = `Likes: ${foto.likes}`;
        post.appendChild(likes);

       
        let likeButton = document.createElement('button');
        likeButton.textContent = 'Like';
        likeButton.onclick = function() {
            foto.likes++;
            renderizarFotos();
        };
        post.appendChild(likeButton);

        
        foto.comentarios.forEach(comentario => {
            let p = document.createElement('p');
            p.textContent = comentario;
            post.appendChild(p);
        });

        let commentInput = document.createElement('input');
        commentInput.classList.add('comment-input');
        commentInput.placeholder = 'Añadir comentario...';
        post.appendChild(commentInput);

        let commentButton = document.createElement('button');
        commentButton.textContent = 'Comentar';
        commentButton.onclick = function() {
            let comentario = commentInput.value;
            if (comentario) {
                foto.comentarios.push(comentario);
                renderizarFotos();
            }
        };
        post.appendChild(commentButton);

        content.appendChild(post);
    });
}

function login() {
    alert('¡Iniciaste sesión!');
    
}

document.addEventListener('DOMContentLoaded', renderizarFotos);
