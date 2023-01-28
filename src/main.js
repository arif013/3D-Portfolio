import App from "./App.js"
import Portfolio from "./Portfolio.js";
import ShowData from "./ShowData.js";
import './style.css'
// import Cannon from "./Cannon.js"
// import RaycastScene from "./RaycastScene.js";

window.addEventListener('DOMContentLoaded',()=>{
    const canvas = document.getElementById('app')
    const app = new ShowData({canvas});
})