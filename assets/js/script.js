var btnAbrir = document.querySelector('.toggle1');
var btnClose = document.querySelector('.toggle2')

btnAbrir.addEventListener('click',()=>{
            let menu = document.querySelector('.nav-itens');
            let cotainer = document.querySelector('.container');
    
                menu.style.display = "flex";
                btnAbrir.style.display = "none";
                btnClose.style.display = "flex";
                cotainer.style.display = "none";
                
});
            
btnClose.addEventListener('click',(e)=>{
            
            e.preventDefault();
            
            let menu = document.querySelector('.nav-itens');
            let cotainer = document.querySelector('.container');
            
                menu.style.display = "none";
                btnAbrir.style.display = "flex";
                btnClose.style.display = "none";
                cotainer.style.display = "flex";
})