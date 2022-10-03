////CARGAR AMIGOS
//import './server'

$('#boton').click(() => {
    
    $('#success').html('')
    $('#lista').empty()
    $(`<img src='https://upload.wikimedia.org/wikipedia/commons/c/c7/Loading_2.gif' />`).appendTo('#lista')
    $.get(`http://localhost:5000/amigos`, function(data){
    //console.log(data)
    
    data.forEach(obj => $(`<li>${obj.name}</li>`).appendTo('#lista'))
    })
    console.log('hola')
})


////BUSCAR AMIGO
$('#search').click(() => {
    let input = $('input');
    $('#success').html('')
    if(input[0].value==='') $('#amigo').html('Debe ingresar un valor!')
    else{
        

        $.get(`http://localhost:5000/amigos/${input[0].value}`, function(data){
            console.log(data.name)
            //$(data.name).appendTo('#amigo')
            //$(`${data.name}`).appendTo('#amigo')
            if(data.name!='' || data.name)
                $('#amigo').html(data.name)
            else
                $('#amigo').html('Amigo no encontrado!')
            })
        }
    input[0].value = '';
})

////ELIMINAR AMIGOS (ahora siiiiii)

$('#delete').click(() => {
    let input = $('#inputDelete');
    $.ajax({
        url:`http://localhost:5000/amigos/${input[0].value}`,
        type:'DELETE',
        success: (result) => {
            $('#success').html('Amigo borrado exitosamente!')    
        }
    })


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