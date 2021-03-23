
let form = document.forms.article;
 
async function sendForm(url, body) {
    try {
        const response = await fetch(url,{
            method: 'POST',
            headers: {
                'Content-Type': 'application/json;charset=utf-8'
            },
            body: JSON.stringify(body)
            
        });
        return await response.json();
    } catch (error) {
        console.error(error);
    }
}
 
 
function renderArticles(data){
  let elem = document.querySelector('.result')
  elem.textContent = data.name
}
 
form.addEventListener('submit', async function(e){
    e.preventDefault();
   
    const title = document.forms.article.title
    const brand = document.forms.article.brand
    
 
   const response = await sendForm('../test.php', {title, brand})
   renderArticles(response)
})


