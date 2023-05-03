$(document).ready(function(){
    $('form').on('submit', function(e){
        // console.log("here");

        e.preventDefault();

        const costPrice = $('#cost').val();

        const sellPrice = $('#sell').val();

        // const outputs = $('#output');

        const background = $('html');

        // console.log('cost' - 'sell')
        if (costPrice,sellPrice === ''){
            alert('please enter some text')
        } else {
            $('cost').val('')
            $('sell').val('')
            
            $('.btnSubmit').addClass( "smallBtnSubmit" );
            
            $('.btnClear').addClass( "largeBtnClear" );

            if(costPrice < sellPrice) {
                background.addClass( "green" );
            
                $('#output').text(`You made a profit of $${sellPrice - costPrice}.`);

            } else if(costPrice > sellPrice) {
                background.addClass( "red" );

                $('#output').text(`You lost $${ costPrice - sellPrice}.`);

            } else {
                background.addClass( "yellow" );

                $('#output').text("You broke even.");
            }

        }

    });



  
    $('form').on('reset',function(){
        const outputs = $('#output');

        const background = $('html');

        outputs.text("");
        background.removeClass( "green");
        background.removeClass( "yellow");
        background.removeClass( "red");
        $('.btnSubmit').removeClass( "smallBtnSubmit" );
        $('.btnClear').removeClass( "largeBtnClear" );
    });

});