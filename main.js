console.log('Works')

$(document).ready(function(){
    $('.submit').click(function(event) {
        event.preventDefault()
        console.log('Clicked')

        var email = $('.email').val()
        var subject = $('.subject').val()
        var message = $('.message').val()
        var statusElm =$('.status')
        statusElm.empty()

        if(email.length > 5 && email.includes('@')&& email.includes('.')) 
        {
            statusElm.append('<div>email valid</div>')
        }
        else{
            event.preventDefault()
            statusElm.push('<div>email not valid</div>')
        }

        if(subject.length >= 2){
            statusElm.append('<div>subject valid</div>')
        }
        else{
            event.preventDefault()
            statusElm.push('<div>subject not valid</div>')
        }

        if(message.length >= 10){
            statusElm.append('<div>message valid</div>')
        }
        else{
            event.preventDefault()
            statusElm.push('<div>message not valid</div>')
        }
    })
})