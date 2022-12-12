
const posts = JSON.parse(localStorage.getItem('posts')) || [];
const render = () => {
    const postList = document.getElementById('post-list');

    const postsTemplate = posts.map(t => '<li>' + t + '</li>' + '<form id="res-form">' + '<input type="text" id="res">' +
    '<input type="submit">' + '</form>');
    console.log(postsTemplate);

    postList.innerHTML = postsTemplate.join('');

    const elementos = document.querySelectorAll('#post-list li');

    elementos.forEach((elemento, i) => {
        elemento.addEventListener('click', () => {
            elemento.parentNode.removeChild(elemento);
            posts.splice(i, 1);
            actualizaT(posts);
            render();
        })
    });
}

const actualizaT = (posts) => {
    const postsstring = JSON.stringify(posts);
    localStorage.setItem('posts', postsstring);

}

window.onload = () => {
    render();
    const form = document.getElementById('post-form');
    form.onsubmit = (e) => {
        e.preventDefault();
        const post = document.getElementById('post');
        const posttext = post.value;
        post.value = '';
        console.log(posttext);
        posts.push(posttext);
        render()
        actualizaT(posts);

    }

}

