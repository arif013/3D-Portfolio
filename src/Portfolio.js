import App from "./App";
import * as THREE from "three"
import {OrbitControls} from 'three/examples/jsm/controls/OrbitControls'
export default class Portfolio extends App{

    torusSetup(){
        this.scene = new THREE.Scene()

        // Initiating an array to store the individual cubes
        this.cubes=[]
        for(let i=0;i<31;i++){
            // Defining the random axis points
            this.x = Math.random()*100-50
            this.y = Math.random()*100-50
            this.z = Math.random()*100-50
            // Geometry of Boxes
            const geometry = new THREE.BoxGeometry( 1, 5, this.z);
            const material = new THREE.MeshBasicMaterial( {color: 0xc0c0c0, wireframe:true} );
            this.cube = new THREE.Mesh( geometry, material );
            this.scene.add( this.cube );
            this.cube.position.set(this.x,this.y,this.z)
            this.cubes.push(this.cube)
        }

        // Cube 2
        this.cubes2=[]
        for(let j=0;j<31;j++){
            // Defining the random axis points
            this.a = Math.random()*100-50
            this.b = Math.random()*100-50
            this.c = Math.random()*100-50
            // Geometry of Boxes
            const geometry2 = new THREE.BoxGeometry( 1, 5, this.c);
            const material2 = new THREE.MeshBasicMaterial( {color: 0xc0c0c0, wireframe:true} );
            this.cube2 = new THREE.Mesh( geometry2, material2 );
            this.scene.add( this.cube2 );
            this.cube2.position.set(this.a,this.b,this.c)
            this.cubes2.push(this.cube2)
        }
        
        // Cube 3
        this.cubes3=[]
        for(let k=0;k<21;k++){
            // Defining the random axis points
            this.d = Math.random()*100-50
            this.e = Math.random()*100-50
            this.f = Math.random()*100-50
            // Geometry of Boxes
            const geometry3 = new THREE.BoxGeometry( 1, 5, this.f);
            const material3 = new THREE.MeshBasicMaterial( {color: 0xc0c0c0, wireframe:true} );
            this.cube3 = new THREE.Mesh( geometry3, material3 );
            this.scene.add( this.cube3 );
            this.cube3.position.set(this.c,this.d,this.f)
            this.cubes3.push(this.cube3)
        }
    }
    control(){
        let arif=document.getElementById('arif')

        arif.addEventListener('mouseover',()=>{
            this.torusSetup()

        // Hover function for cube1
            this.cubes.forEach(element => {
                element.position.set(50,15,10)
                element.rotation.x = Math.PI/2
            });

        // Hover function for cube2
            this.cubes2.forEach(element => {
                element.position.set(35,15,10)
                element.rotation.x = 3*Math.PI/4
            });

        // Hover function for cube3
            // this.torusSetup()
            this.cubes3.forEach(element => {
                element.position.set(45,10,10)
                element.rotation.x = 5*Math.PI/4
            });
            
        })
        // Function on mouseout
        arif.addEventListener('mouseout',()=>{
            this.torusSetup()
        })
    }

    // Scroll animation for the torus
    scroll(){
        var scrollPos = 0;
        
        document.addEventListener('scroll',()=>{
        // adding scroll event
        // detects new state and compares it with the new one
        this.cubes.forEach(element=>{
            element.rotation.x += Math.random()* 0.0004
            element.rotation.y += Math.random()* 0.0004

        })
        this.cubes2.forEach(element=>{
            element.rotation.x += Math.random()* 0.0001
            element.rotation.y += Math.random()* 0.0001
        })
        this.cubes3.forEach(element=>{
            element.rotation.x += Math.random()* 0.0001
            element.rotation.y += Math.random()* 0.0001
        })
	// saves the new position for iteration.
        });
    }
}