$(document).ready(function(){
    console.log('hello');
    $('#target').submit(function(e){
        e.preventDefault;
        
        var city = $('#city').val();

        $.get('http://api.openweathermap.org/data/2.5/weather?q='+city+'&units=imperial&appid=c5d364a1743b6a69d0ec28484d414efa', function(res) {
            $('#view').remove();
            var name = res.name;
            var temp = res.main.temp;
            $('#main').append('<div id="view"><h1>'+name+'</h1><p>Temperature: '+ temp +'</p>');
        });
        return false;
    });


});