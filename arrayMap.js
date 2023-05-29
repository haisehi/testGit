// const array = [1,2,3,4,5,6,7,8];
// const arrayMap = array.map(function(x){
//     return x = x +1;
// })
// console.log(arrayMap)


var root = document.querySelector('.root');
var submit = document.querySelector('.submit');
var titles = [
    {
        name:'All of us are dead',
        title:"korea",  
        img:"./allofusaredeadposter.jpg"

    },    
    {
        name:'The glogy',
        title:"korea",
        img:"./thegloryfilm.jpg"
    },
    {
        name:'All of us are dead 2',
        title:"korea",
        img:"./allofusaredeadposter.jpg"

    },    
    {
        name:'The glogy 2',
        title:"korea",
        img:"./thegloryfilm.jpg"
    },
    {
        name:'All of us are dead 3',
        title:"korea",
        img:"./allofusaredeadposter.jpg"

    },    
    {
        name:'The glogy 3',
        title:"korea",
        img:"./thegloryfilm.jpg"
    }
]
function render(){
    const array1 = titles.map(function(title){
        return `
            <div class="element">
            <div class="image1"
            style="background-image: url('${title.img}') ">
            >   
            </div>
            <h1>${title.name}</h1>
            <h2>${title.title}</h2>
            </div>
            </div>
        `
    })
    root.innerHTML = array1.join('')
}

function searchFunc(){
    let search = document.querySelector('#input').value
    const result = titles.filter(title=>title.name.toLowerCase()===search)
    console.log(result)
    render(result)
}
searchFunc()
render()