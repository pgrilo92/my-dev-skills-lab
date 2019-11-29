$(function(){
    let myStoredList = JSON.parse(localStorage.getItem("myList"))
    console.log(myStoredList)
    let listArr = myStoredList
    listArr.forEach(list => {
        return $('.add-list').append('<div class="listAndButton"><li><button id="remove-skill"> X </button>'+ list + '</li></div>')
    });

    $('#add-skill').on('click', function(){
        let $showWarning = $('.warning').hide()
        let newListText = $('input').val()
        if(newListText !== ''){
        let $newListItem = $('.add-list').append('<div class="listAndButton"><button id="remove-skill"> X </button><li>'+ newListText + '</li></div>')
        listArr.push(newListText)
        console.log(listArr)
        localStorage.setItem('myList', JSON.stringify(listArr))
        $('input').val('')
        } else{
            $hideWarning = $('.warning').show()
        }
    })
    $('input').keypress(function(evt){
        let key = evt.which
        if(key == 13){
            $('#add-skill').trigger('click')
            return false
        }
    })
    $('ul').on('click', 'button',function(){
        $(this).closest('div').remove()
    })
})