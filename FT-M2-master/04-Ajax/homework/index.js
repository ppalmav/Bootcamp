////CARGAR AMIGOS
//import './server'
function onClickAmigos(){
     
    $('#success').html('')
    $('#lista').empty()
    $(`<img src='https://upload.wikimedia.org/wikipedia/commons/c/c7/Loading_2.gif' />`).appendTo('#lista')
    $.get(`http://localhost:5000/amigos`, function(data){
    //console.log(data)
    $('#lista').empty()
    data.forEach(obj => $(`<li><button id='Delete${obj.id}' onClick='eliminarAmigoById(${obj.id})'>Delete</button>${obj.name}</li>`).appendTo('#lista'))
    })
    
}

function eliminarAmigoById(id){
    //let input = $('#inputDelete');
    $.ajax({
        url:`http://localhost:5000/amigos/${id}`,
        type:'DELETE',
        success: (result) => {
            $('#success').html('Amigo borrado exitosamente!')
            onClickAmigos();   
        }
    
    })
}

$('#boton').click(onClickAmigos)


////BUSCAR AMIGO
$('#search').click(() => {
    let input = $('input');
    id=input[0].value;
    $('#success').html('')
    $('#amigo').html('')
    if( (!Number(id) && id===0 )|| id==='') $('#amigo').html('Debe ingresar un valor numerico!')
    else{
        

        if(!$.get(`http://localhost:5000/amigos/${id}`, function(data){
            console.log(data.name)
            //$(data.name).appendTo('#amigo')
            //$(`${data.name}`).appendTo('#amigo')
            $('#amigo').html(data.name)
            }))
                $('#amigo').html('Amigo no encontrado!')
        }
    input[0].value = '';
})

////ELIMINAR AMIGOS (ahora siiiiii)

$('#delete').click(() => {
    let input = $('#inputDelete');
    eliminarAmigoById(input[0].value)
    

    // if($.delete(`http://localhost:5000/amigos/${input[0].value}`))
    //     $('#success').html(`Tu amigo fue borrado con exito`) 
    // else
    //     $('#success').html(`Debes ingresar un amigo registrado`) 
    // input[0].value = '';
})
// $('.pedidos').click(() => {
//     $.get(`https://jsonplaceholder.typicode.com/posts`, function(data){
//         console.log(data)
// ​
//         data.forEach(obj => $(`<div id=${obj.id}>
//                                 <p>UserID: ${obj.id}</p>
//                                 <p>
//                                     Title: ${obj.title}
//                                 </p>
//                             </div>`).appendTo('body'))
//     })
// })
// ​
// ​
// $('.pedido').click(() => {
//     let input = $('input');
//     console.log(input)
//     console.log(input[0])
//     console.log(input[0].value)
// ​
//     $.get(`https://jsonplaceholder.typicode.com/posts/${input[0].value}`, function(data){
        
//         $(`<div id=${data.id}>
//             <p>Id: ${data.id}</p>
//             <p>Title: ${data.title}</p>
//         </div>`).appendTo('body')
//     })
// ​
//     input[0].value = '';
// })