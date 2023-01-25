import App from "./App";
import * as THREE from "three"
import {OrbitControls} from 'three/examples/jsm/controls/OrbitControls'
export default class Portfolio extends App{

    torusSetup(){
        this.scene = new THREE.Scene()
        const geometry = new THREE.TorusGeometry( 15, 3, 16, 100 );
        const material = new THREE.MeshBasicMaterial( { color: 0xffff00, wireframe:true } );
        this.torus = new THREE.Mesh( geometry, material );
        this.scene.add( this.torus );
        this.torus.position.x =40
        this.torus.position.y = 20       
    }
    control(){
        this.torus.rotation.y+= 0.02
    }
    scroll(){
        var scrollPos = 0;
        document.addEventListener('scroll',()=>{
        // adding scroll event
        // detects new state and compares it with the new one
        if ((document.body.getBoundingClientRect()).top > scrollPos){
            this.torus.rotation.y+=0.0075
            this.torus.position.z+=0.0007
            this.torus.position.x+=0.0001
        }
	    else{
            this.torus.rotation.y-=0.0075
            this.torus.position.z-=0.0007
            this.torus.position.x-=0.0001
        }
	// saves the new position for iteration.
	scrollPos = (document.body.getBoundingClientRect()).top;
    });
    }
}