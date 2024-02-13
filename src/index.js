const init = () => {
    const inputForm = document.querySelector('form')
    inputForm.addEventListener("submit", (event) => {
        event.preventDefault();
        const input = event.target.querySelector("#searchByID").value
        fetch(`http://localhost:3000/movies/${input}`)
            .then(resp => resp.json())
            .then(data => {
                let title = document.querySelector("section#movieDetails h4");
                let summary = document.querySelector("section#movieDetails p")
                title.innerText = data.title;
                summary.innerText = data.summary})
        })
    }







document.addEventListener('DOMContentLoaded', init);