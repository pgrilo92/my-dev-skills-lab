$(function(){
    let myStoredList = JSON.parse(localStorage.getItem("myList"))
    console.log(myStoredList)
    let listArr = myStoredList
    listArr.forEach(list => {
        return $('.add-list').append('<div class="listAndButton"><li><button id="remove-skill"> X </button>'+ list + '</li></div>')
    });

    $('#add-skill').on('click', function(){
        let $newListText = $('input').val()
        let $newListItem = $('.add-list').append('<div class="listAndButton"><button id="remove-skill"> X </button><li>'+ $newListText + '</li></div>')
        listArr.push($newListItem)
        console.log(listArr)
        localStorage.setItem('myList', JSON.stringify(listArr))
        $('input').val('')
    })
    $('ul').on('click', 'button',function(){
        $(this).closest('li').remove()
    })
})