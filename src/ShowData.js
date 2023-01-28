// import App from "./App";
import Portfolio from "./Portfolio";
import {projects} from './Data'

export default class ShowData extends Portfolio{
    education(){
        let innerEducation = document.getElementById('inner-education') 
        // console.log(projects.json())
        // let url = fetch(projects).then(f=>f.json())
        console.log(projects)
        for(let i=0; i<projects.length; i++){

            innerEducation.innerHTML+=`
            <li class="listOfProjects">
            <div class="card" style="width: 18rem;">
            <img class="card-img-top" style="width:286px; height: 180px" src='${projects[i].image} 'alt="Card image cap">
            <div class="card-body">
              <h5 class="card-title" style="font-size: 25px;">${projects[i].name}</h5>
              <h6 class="card-subtitle mb-2 text-muted">${projects[i].description}</h6>
              <a url='${projects[i].livePreview}' target=_blank class="btn btn-primary">Click me</a>
             
          </div></li>
            `;
        }
        
    }
}

  
 