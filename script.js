const btn  = document.getElementById('btn');
const input = document.getElementById('input');
const MyIcon = document.getElementById('myIcon');
const output = document.querySelector('.output')
const container = document.querySelector('.container')

btn.addEventListener('click', function(e) {
e.preventDefault()
if(!input.value){
    return 
}
fetch('https://api.weatherapi.com/v1/current.json?key=3ad63c8348b74864a20174216232001&q=' + input.value+'&aqi=no')
.then((res) => res.json())    
.then((data) => {
    const wrapper = document.createElement('div');
    const temp = document.createElement('p');
    const con = document.createElement('p');
    const local = document.createElement('p');
    const image = document.createElement('img');

    const {
        location: {name,localtime}, 
        current:{temp_c},
        current:{
            condition:{icon, text, code}
        }
    } = data

    image.src = icon; 

    wrapper.classList.add('dis'); 

    con.append(image);
    temp.append(temp_c + '°C    ' + name);
    local.append(localtime + '  ' + text);
 
    wrapper.append(local); 
    wrapper.append(con);
    wrapper.append(temp);

    if(output.hasChildNodes){
        output.innerHTML = ''; 
    }

    output.append(wrapper);

    if(!data.current.is_day){
        document.body.style.color = 'white'

        // Clear weather
        container.style.color = 'aliceblue'
        if(code == 1000){
            container.style.backgroundImage = 'url(./weather-condition-images/night/Clear.jpg)'
        }
        
        // cloudy
        else if(
            code == 1003 || 
            code == 1006 ||
            code == 1009 ||
            code == 1030 ||
            code == 1069 ||
            code == 1087 ||
            code == 1135 ||
            code == 1273 ||
            code == 1276 ||
            code == 1279 ||
            code == 1282
        ){
            container.style.backgroundImage = `url(./weather-condition-images/night/Cloudy.jpg)`
        }
        
        // //Rain
        else if(
            code == 1063 ||
            code == 1069 ||
            code == 1072 ||
            code == 1150 ||
            code == 1180 ||
            code == 1183 ||
            code == 1186 ||
            code == 1189 ||
            code == 1192 ||
            code == 1204 ||
            code == 1207 ||
            code == 1240 ||
            code == 1243 ||
            code == 1246 ||
            code == 1249 ||
            code == 1252 
        ){
            container.style.backgroundImage = `url(./weather-condition-images/night/Rainy.jpg)`
        }
        else{
            container.style.backgroundImage = `url(./weather-condition-images/night/Snowy.jpg)`
        }

    }

    if(data.current.is_day){
        document.body.style.color = 'white'

        // Clear weather
        container.style.color = 'black'
        if(code == 1000){
            container.style.backgroundImage = 'url(./weather-condition-images/day/Clear.jpg)'
        }
        
        // cloudy
        else if(
            code == 1003 || 
            code == 1006 ||
            code == 1009 ||
            code == 1030 ||
            code == 1069 ||
            code == 1087 ||
            code == 1135 ||
            code == 1273 ||
            code == 1276 ||
            code == 1279 ||
            code == 1282
        ){
            container.style.backgroundImage = `url(./weather-condition-images/day/Cloudy.jpg)`
        }
        
        // //Rain
        else if(
            code == 1063 ||
            code == 1069 ||
            code == 1072 ||
            code == 1150 ||
            code == 1180 ||
            code == 1183 ||
            code == 1186 ||
            code == 1189 ||
            code == 1192 ||
            code == 1204 ||
            code == 1207 ||
            code == 1240 ||
            code == 1243 ||
            code == 1246 ||
            code == 1249 ||
            code == 1252 
        ){
            container.style.backgroundImage = `url(./weather-condition-images/day/Rainy.jpg)`
        }
        else{
            container.style.backgroundImage = `url(./weather-condition-images/day/Snowy.jpg)`
        }
    }

})

.catch(err =>{
    console.log(err);
})

input.value = '';
document.body.classList.toggle('open'); 
})

window.onload = () =>{
        navigator.geolocation.getCurrentPosition(function(position){
        fetch('https://api.weatherapi.com/v1/current.json?key=3ad63c8348b74864a20174216232001&q=' +`${position.coords.latitude} + ${position.coords.longitude}`)
        .then((res) => res.json())    
        .then((data) => {
            const wrapper = document.createElement('div');
            const temp = document.createElement('p');
            const con = document.createElement('p');
            const local = document.createElement('p');
            const image = document.createElement('img');
        
            const {
                location: {name,localtime}, 
                current:{temp_c},
                current:{
                    condition:{icon, text, code}
                }
            } = data
        
            image.src = icon; 
        
            wrapper.classList.add('dis'); 

            temp.append(temp_c + '°C    ' + name);
            local.append(localtime + '  ' + text);
            con.append(image);

            wrapper.append(local); 
            wrapper.append(con);
            wrapper.append(temp);
        
            if(output.hasChildNodes){
                output.innerHTML = ''; 
            }
            output.append(wrapper);
            console.log(data);


            if(!data.current.is_day){
                document.body.style.color = 'white'
                // Clear weather
                if(code == 1000){
                    container.style.backgroundImage = 'url(./weather-condition-images/night/Clear.jpg)'
                }
                
                // cloudy
                else if(
                    code == 1003 || 
                    code == 1006 ||
                    code == 1009 ||
                    code == 1030 ||
                    code == 1069 ||
                    code == 1087 ||
                    code == 1135 ||
                    code == 1273 ||
                    code == 1276 ||
                    code == 1279 ||
                    code == 1282
                ){
                    container.style.backgroundImage = `url(./weather-condition-images/night/Cloudy.jpg)`
                }
                
                // //Rain
                else if(
                    code == 1063 ||
                    code == 1069 ||
                    code == 1072 ||
                    code == 1150 ||
                    code == 1180 ||
                    code == 1183 ||
                    code == 1186 ||
                    code == 1189 ||
                    code == 1192 ||
                    code == 1204 ||
                    code == 1207 ||
                    code == 1240 ||
                    code == 1243 ||
                    code == 1246 ||
                    code == 1249 ||
                    code == 1252 
                ){
                    container.style.backgroundImage = `url(./weather-condition-images/night/Rainy.jpg)`
                }
                else{
                    container.style.backgroundImage = `url(./weather-condition-images/night/Snowy.jpg)`
                }
            }

            if(data.current.is_day){
                document.body.style.color = 'black'


                // Clear weather
                if(code == 1000){
                    container.style.backgroundImage = 'url(./weather-condition-images/day/Clear.jpg)'
                    alert()
                }
                
                // cloudy
                else if(
                    code == 1003 || 
                    code == 1006 ||
                    code == 1009 ||
                    code == 1030 ||
                    code == 1069 ||
                    code == 1087 ||
                    code == 1135 ||
                    code == 1273 ||
                    code == 1276 ||
                    code == 1279 ||
                    code == 1282
                ){
                    container.style.backgroundImage = `url(./weather-condition-images/day/Cloudy.jpg)`
                }
                
                // //Rain
                else if(
                    code == 1063 ||
                    code == 1069 ||
                    code == 1072 ||
                    code == 1150 ||
                    code == 1180 ||
                    code == 1183 ||
                    code == 1186 ||
                    code == 1189 ||
                    code == 1192 ||
                    code == 1204 ||
                    code == 1207 ||
                    code == 1240 ||
                    code == 1243 ||
                    code == 1246 ||
                    code == 1249 ||
                    code == 1252 
                ){
                    container.style.backgroundImage = `url./weather-condition-images/day/Rainy.jpg)`
                }
                else{
                    container.style.backgroundImage = `url(./weather-condition-images/day/Snowy.jpg)`
                }
            }

        })
    }); 

}
