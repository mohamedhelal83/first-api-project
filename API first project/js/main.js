

 async function getApi(){
    var ahmed = await fetch('https://jsonplaceholder.typicode.com/photos');
    var mohamed = await ahmed.json();
    var text="";
    for(var i=0; i<mohamed.length; i++){
    var cartoona = `
                    <div class="col-md-4 text-center my-4">
                    <img class="img-fluid" src="${mohamed[i].url}">
                    <h3>${mohamed[i].title}</h3>
                    <h5>${mohamed[i].id}</h5>
                    </div>
                    `;
                    text = text + cartoona;
                }
    
    document.querySelector(".test").innerHTML = text;
}
getApi();