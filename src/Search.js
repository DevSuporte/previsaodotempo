import './Previsao.css';

import {useState} from 'react';

function Search(props){

    

    const [cidade,setCidade] = useState("");



    function searchInput(e){

        e.preventDefault();


        let currentValue = document.querySelector('input[name=searchInput]')

        .value;

        

        const url = `https://api.openweathermap.org/data/2.5/weather?q=${currentValue}&appid=4d8fb5b93d4af21d66a2948710284366&units=metric`;

        fetch(url)

        .then(response=> response.json())

        .then(data=>{

            

            const {main, name, sys, weather} = data;

            if(sys != undefined){

                

            if(weather != undefined){

                const tempo = main.temp;

                const icon = `https://s3-us-west-2.amazonaws.com/s.cdpn.io/162656/${

             weather[0]["icon"]}.svg`;

                setCidade(`

                <div>

                <p id="nome">${name}</p>
                <p id="graus">${tempo.toFixed(0)+'°'} </p>
                <img id="icn" src="${icon}" />

                </div>

                `);



            }



            }else{

                setCidade("");

            }

        })

    

    }



    return(

        <div className="searchWraper">
<div className="border">
        <div className="search">

            <h2>PREVISÃO DO TEMPO</h2>

            <form onSubmit={(e)=>searchInput(e)}>

            <input placeholder={props.placeholder}  type="text" name="searchInput" />

            <input type="submit" value="PESQUISAR"/>
            </form>

           
           <h3 id="h3">© 2023 MATHEUS RAMALDES - TODOS OS DIREITOS RESERVADOS</h3>
        </div>



        {

            (cidade!= "")?

            <div dangerouslySetInnerHTML={{__html: cidade}} />:

            <div id="none">Pesquise por uma cidade...</div>

        }


</div>
        </div>

    )

}



export default Search;