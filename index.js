const fs = require("fs");
const socket = require('socket.io-client')('http://192.168.0.6:3000');

function init (){
   
    console.log("Sent Message to Server");
    setUpWebSocketConnection();
    listenForAskingForIP();

}

function setUpWebSocketConnection(){

    let jsonObj =  {
                      //Primer nivel horizontal
                    "background":"espacio-marte",
                    "cube":[
                    {"name":"fig1",
                      "x":0,
                      "y":0,
                      "z":0,
                    "code":"var geometry=new THREE.BoxGeometry(.5,.5,.5),material=new THREE.MeshBasicMaterial({map:(new THREE.TextureLoader).load(\"imagenes/1.png\"),side:THREE.DoubleSide,color:16777215,transparent:!0,opacity:1}),cube=new THREE.Mesh(geometry,material);cube.position.z=-1,scene.add(cube),arrayObjects.push(cube),requestAnimationFrame(render);const box=(new THREE.Box3).setFromObject(cube),boxSize=box.getSize(new THREE.Vector3).length(),boxCenter=box.getCenter(new THREE.Vector3);frameArea(.8*boxSize,boxSize,boxCenter,camera),controls.maxDistance=10*boxSize,controls.target.copy(boxCenter),controls.update();requestAnimationFrame(render);"
                    },
                      
                      {
                        "name":"fig2",
                        "x":1,
                        "y":0,
                        "z":0,
                        "code" : "const gltfLoader=new THREE.GLTFLoader;gltfLoader.load(\"models/dinosaur/scene.gltf\",e=>{const t=e.scene;scene.add(t),arrayObjects.push(t);const r=(new THREE.Box3).setFromObject(t),o=r.getSize(new THREE.Vector3).length(),n=r.getCenter(new THREE.Vector3);frameArea(.8*o,o,n,camera),controls.maxDistance=10*o,controls.target.copy(n),controls.update(),counter=0,requestAnimationFrame(render)});const box=(new THREE.Box3).setFromObject(root),boxSize=box.getSize(new THREE.Vector3).length(),boxCenter=box.getCenter(new THREE.Vector3);frameArea(.8*boxSize,boxSize,boxCenter,camera),controls.maxDistance=10*boxSize,controls.target.copy(boxCenter),controls.update(),counter=0,requestAnimationFrame(render);"
                      },

                            
                      {
                        "name":"fig3",
                        "x":2,
                        "y":0,
                        "z":0,
                        "code" : "const gltfLoader=new THREE.GLTFLoader;gltfLoader.load(\"models/dinosaur/scene.gltf\",e=>{const t=e.scene;scene.add(t),arrayObjects.push(t);const r=(new THREE.Box3).setFromObject(t),o=r.getSize(new THREE.Vector3).length(),n=r.getCenter(new THREE.Vector3);frameArea(.8*o,o,n,camera),controls.maxDistance=10*o,controls.target.copy(n),controls.update(),counter=0,requestAnimationFrame(render)});const box=(new THREE.Box3).setFromObject(root),boxSize=box.getSize(new THREE.Vector3).length(),boxCenter=box.getCenter(new THREE.Vector3);frameArea(.8*boxSize,boxSize,boxCenter,camera),controls.maxDistance=10*boxSize,controls.target.copy(boxCenter),controls.update(),counter=0,requestAnimationFrame(render);"
                     },

                     {
                        "name":"fig4",
                        "x":0,
                        "y":0,
                        "z":1,
                        "code" : "const gltfLoader=new THREE.GLTFLoader;gltfLoader.load(\"models/dinosaur/scene.gltf\",e=>{const t=e.scene;scene.add(t),arrayObjects.push(t);const r=(new THREE.Box3).setFromObject(t),o=r.getSize(new THREE.Vector3).length(),n=r.getCenter(new THREE.Vector3);frameArea(.8*o,o,n,camera),controls.maxDistance=10*o,controls.target.copy(n),controls.update(),counter=0,requestAnimationFrame(render)});const box=(new THREE.Box3).setFromObject(root),boxSize=box.getSize(new THREE.Vector3).length(),boxCenter=box.getCenter(new THREE.Vector3);frameArea(.8*boxSize,boxSize,boxCenter,camera),controls.maxDistance=10*boxSize,controls.target.copy(boxCenter),controls.update(),counter=0,requestAnimationFrame(render);"
                     },

                     {
                        "name":"fig5",
                        "x":0,
                        "y":0,
                        "z":2,
                        "code":"var geometry=new THREE.BoxGeometry(.5,.5,.5),material=new THREE.MeshBasicMaterial({map:(new THREE.TextureLoader).load(\"imagenes/1.png\"),side:THREE.DoubleSide,color:16777215,transparent:!0,opacity:1}),cube=new THREE.Mesh(geometry,material);cube.position.z=-1,scene.add(cube),arrayObjects.push(cube),requestAnimationFrame(render);const box=(new THREE.Box3).setFromObject(cube),boxSize=box.getSize(new THREE.Vector3).length(),boxCenter=box.getCenter(new THREE.Vector3);frameArea(.8*boxSize,boxSize,boxCenter,camera),controls.maxDistance=10*boxSize,controls.target.copy(boxCenter),controls.update();requestAnimationFrame(render);"
                     },

                     {
                        "name":"fig6",
                        "x":1,
                        "y":0,
                        "z":1,
                        "code":"var geometry=new THREE.BoxGeometry(.5,.5,.5),material=new THREE.MeshBasicMaterial({map:(new THREE.TextureLoader).load(\"imagenes/1.png\"),side:THREE.DoubleSide,color:16777215,transparent:!0,opacity:1}),cube=new THREE.Mesh(geometry,material);cube.position.z=-1,scene.add(cube),arrayObjects.push(cube),requestAnimationFrame(render);const box=(new THREE.Box3).setFromObject(cube),boxSize=box.getSize(new THREE.Vector3).length(),boxCenter=box.getCenter(new THREE.Vector3);frameArea(.8*boxSize,boxSize,boxCenter,camera),controls.maxDistance=10*boxSize,controls.target.copy(boxCenter),controls.update();requestAnimationFrame(render);"
                     },

                     {
                        "name":"fig7",
                        "x":1,
                        "y":0,
                        "z":2,
                        "code" : "const gltfLoader=new THREE.GLTFLoader;gltfLoader.load(\"models/dinosaur/scene.gltf\",e=>{const t=e.scene;scene.add(t),arrayObjects.push(t);const r=(new THREE.Box3).setFromObject(t),o=r.getSize(new THREE.Vector3).length(),n=r.getCenter(new THREE.Vector3);frameArea(.8*o,o,n,camera),controls.maxDistance=10*o,controls.target.copy(n),controls.update(),counter=0,requestAnimationFrame(render)});const box=(new THREE.Box3).setFromObject(root),boxSize=box.getSize(new THREE.Vector3).length(),boxCenter=box.getCenter(new THREE.Vector3);frameArea(.8*boxSize,boxSize,boxCenter,camera),controls.maxDistance=10*boxSize,controls.target.copy(boxCenter),controls.update(),counter=0,requestAnimationFrame(render);"
                     },

                     {
                        "name":"fig8",
                        "x":2,
                        "y":0,
                        "z":1,
                        "code":"var geometry=new THREE.BoxGeometry(.5,.5,.5),material=new THREE.MeshBasicMaterial({map:(new THREE.TextureLoader).load(\"imagenes/1.png\"),side:THREE.DoubleSide,color:16777215,transparent:!0,opacity:1}),cube=new THREE.Mesh(geometry,material);cube.position.z=-1,scene.add(cube),arrayObjects.push(cube),requestAnimationFrame(render);const box=(new THREE.Box3).setFromObject(cube),boxSize=box.getSize(new THREE.Vector3).length(),boxCenter=box.getCenter(new THREE.Vector3);frameArea(.8*boxSize,boxSize,boxCenter,camera),controls.maxDistance=10*boxSize,controls.target.copy(boxCenter),controls.update();requestAnimationFrame(render);"
                     },

                     {"name":"fig9",
                      "x":2,
                      "y":0,
                      "z":2,
                        "code" : "const gltfLoader=new THREE.GLTFLoader;gltfLoader.load(\"models/dinosaur/scene.gltf\",e=>{const t=e.scene;scene.add(t),arrayObjects.push(t);const r=(new THREE.Box3).setFromObject(t),o=r.getSize(new THREE.Vector3).length(),n=r.getCenter(new THREE.Vector3);frameArea(.8*o,o,n,camera),controls.maxDistance=10*o,controls.target.copy(n),controls.update(),counter=0,requestAnimationFrame(render)});const box=(new THREE.Box3).setFromObject(root),boxSize=box.getSize(new THREE.Vector3).length(),boxCenter=box.getCenter(new THREE.Vector3);frameArea(.8*boxSize,boxSize,boxCenter,camera),controls.maxDistance=10*boxSize,controls.target.copy(boxCenter),controls.update(),counter=0,requestAnimationFrame(render);"
                    },
                
                        //Segundo nivel horizontal
                            
                      {
                        "name":"fig10",
                        "x":0,
                        "y":1,
                        "z":0,
                        "code":"var geometry=new THREE.BoxGeometry(.5,.5,.5),material=new THREE.MeshBasicMaterial({map:(new THREE.TextureLoader).load(\"imagenes/1.png\"),side:THREE.DoubleSide,color:16777215,transparent:!0,opacity:1}),cube=new THREE.Mesh(geometry,material);cube.position.z=-1,scene.add(cube),arrayObjects.push(cube),requestAnimationFrame(render);const box=(new THREE.Box3).setFromObject(cube),boxSize=box.getSize(new THREE.Vector3).length(),boxCenter=box.getCenter(new THREE.Vector3);frameArea(.8*boxSize,boxSize,boxCenter,camera),controls.maxDistance=10*boxSize,controls.target.copy(boxCenter),controls.update();requestAnimationFrame(render);"
                     },

                     {
                        "name":"fig11",
                        "x":0,
                        "y":1,
                        "z":1,
                        "code" : "const gltfLoader=new THREE.GLTFLoader;gltfLoader.load(\"models/dinosaur/scene.gltf\",e=>{const t=e.scene;scene.add(t),arrayObjects.push(t);const r=(new THREE.Box3).setFromObject(t),o=r.getSize(new THREE.Vector3).length(),n=r.getCenter(new THREE.Vector3);frameArea(.8*o,o,n,camera),controls.maxDistance=10*o,controls.target.copy(n),controls.update(),counter=0,requestAnimationFrame(render)});const box=(new THREE.Box3).setFromObject(root),boxSize=box.getSize(new THREE.Vector3).length(),boxCenter=box.getCenter(new THREE.Vector3);frameArea(.8*boxSize,boxSize,boxCenter,camera),controls.maxDistance=10*boxSize,controls.target.copy(boxCenter),controls.update(),counter=0,requestAnimationFrame(render);"
                     },

                     {
                        "name":"fig12",
                        "x":0,
                        "y":1,
                        "z":2,
                        "code":"var geometry=new THREE.BoxGeometry(.5,.5,.5),material=new THREE.MeshBasicMaterial({map:(new THREE.TextureLoader).load(\"imagenes/1.png\"),side:THREE.DoubleSide,color:16777215,transparent:!0,opacity:1}),cube=new THREE.Mesh(geometry,material);cube.position.z=-1,scene.add(cube),arrayObjects.push(cube),requestAnimationFrame(render);const box=(new THREE.Box3).setFromObject(cube),boxSize=box.getSize(new THREE.Vector3).length(),boxCenter=box.getCenter(new THREE.Vector3);frameArea(.8*boxSize,boxSize,boxCenter,camera),controls.maxDistance=10*boxSize,controls.target.copy(boxCenter),controls.update();requestAnimationFrame(render);"
                     },

                     {
                        "name":"fig13",
                        "x":1,
                        "y":1,
                        "z":0,
                        "code" : "const gltfLoader=new THREE.GLTFLoader;gltfLoader.load(\"models/dinosaur/scene.gltf\",e=>{const t=e.scene;scene.add(t),arrayObjects.push(t);const r=(new THREE.Box3).setFromObject(t),o=r.getSize(new THREE.Vector3).length(),n=r.getCenter(new THREE.Vector3);frameArea(.8*o,o,n,camera),controls.maxDistance=10*o,controls.target.copy(n),controls.update(),counter=0,requestAnimationFrame(render)});const box=(new THREE.Box3).setFromObject(root),boxSize=box.getSize(new THREE.Vector3).length(),boxCenter=box.getCenter(new THREE.Vector3);frameArea(.8*boxSize,boxSize,boxCenter,camera),controls.maxDistance=10*boxSize,controls.target.copy(boxCenter),controls.update(),counter=0,requestAnimationFrame(render);"
                     },

                     {
                        "name":"fig14",
                        "x":1,
                        "y":1,
                        "z":2,
                        "code":"var geometry=new THREE.BoxGeometry(.5,.5,.5),material=new THREE.MeshBasicMaterial({map:(new THREE.TextureLoader).load(\"imagenes/1.png\"),side:THREE.DoubleSide,color:16777215,transparent:!0,opacity:1}),cube=new THREE.Mesh(geometry,material);cube.position.z=-1,scene.add(cube),arrayObjects.push(cube),requestAnimationFrame(render);const box=(new THREE.Box3).setFromObject(cube),boxSize=box.getSize(new THREE.Vector3).length(),boxCenter=box.getCenter(new THREE.Vector3);frameArea(.8*boxSize,boxSize,boxCenter,camera),controls.maxDistance=10*boxSize,controls.target.copy(boxCenter),controls.update();requestAnimationFrame(render);"
                     },

                     {
                        "name":"fig15",
                        "x":2,
                        "y":1,
                        "z":0,
                        "code" : "const gltfLoader=new THREE.GLTFLoader;gltfLoader.load(\"models/dinosaur/scene.gltf\",e=>{const t=e.scene;scene.add(t),arrayObjects.push(t);const r=(new THREE.Box3).setFromObject(t),o=r.getSize(new THREE.Vector3).length(),n=r.getCenter(new THREE.Vector3);frameArea(.8*o,o,n,camera),controls.maxDistance=10*o,controls.target.copy(n),controls.update(),counter=0,requestAnimationFrame(render)});const box=(new THREE.Box3).setFromObject(root),boxSize=box.getSize(new THREE.Vector3).length(),boxCenter=box.getCenter(new THREE.Vector3);frameArea(.8*boxSize,boxSize,boxCenter,camera),controls.maxDistance=10*boxSize,controls.target.copy(boxCenter),controls.update(),counter=0,requestAnimationFrame(render);"
                     },

                     {
                        "name":"fig16",
                        "x":2,
                        "y":1,
                        "z":1,
                        "code":"var geometry=new THREE.BoxGeometry(.5,.5,.5),material=new THREE.MeshBasicMaterial({map:(new THREE.TextureLoader).load(\"imagenes/1.png\"),side:THREE.DoubleSide,color:16777215,transparent:!0,opacity:1}),cube=new THREE.Mesh(geometry,material);cube.position.z=-1,scene.add(cube),arrayObjects.push(cube),requestAnimationFrame(render);const box=(new THREE.Box3).setFromObject(cube),boxSize=box.getSize(new THREE.Vector3).length(),boxCenter=box.getCenter(new THREE.Vector3);frameArea(.8*boxSize,boxSize,boxCenter,camera),controls.maxDistance=10*boxSize,controls.target.copy(boxCenter),controls.update();requestAnimationFrame(render);"
                     },


                     {
                        "name":"fig17",
                        "x":2,
                        "y":1,
                        "z":2,
                        "code" : "const gltfLoader=new THREE.GLTFLoader;gltfLoader.load(\"models/dinosaur/scene.gltf\",e=>{const t=e.scene;scene.add(t),arrayObjects.push(t);const r=(new THREE.Box3).setFromObject(t),o=r.getSize(new THREE.Vector3).length(),n=r.getCenter(new THREE.Vector3);frameArea(.8*o,o,n,camera),controls.maxDistance=10*o,controls.target.copy(n),controls.update(),counter=0,requestAnimationFrame(render)});const box=(new THREE.Box3).setFromObject(root),boxSize=box.getSize(new THREE.Vector3).length(),boxCenter=box.getCenter(new THREE.Vector3);frameArea(.8*boxSize,boxSize,boxCenter,camera),controls.maxDistance=10*boxSize,controls.target.copy(boxCenter),controls.update(),counter=0,requestAnimationFrame(render);"
                     },

                     //Tercer nivel horizontal

                     {"name":"fig18",
                      "x":0,
                      "y":2,
                      "z":0,
                      "code":"var geometry=new THREE.BoxGeometry(.5,.5,.5),material=new THREE.MeshBasicMaterial({map:(new THREE.TextureLoader).load(\"imagenes/1.png\"),side:THREE.DoubleSide,color:16777215,transparent:!0,opacity:1}),cube=new THREE.Mesh(geometry,material);cube.position.z=-1,scene.add(cube),arrayObjects.push(cube);"
                    },
                      
                      {
                        "name":"fig19",
                        "x":0,
                        "y":2,
                        "z":0,
                        "code":"var geometry=new THREE.BoxGeometry(.5,.5,.5),material=new THREE.MeshBasicMaterial({map:(new THREE.TextureLoader).load(\"imagenes/1.png\"),side:THREE.DoubleSide,color:16777215,transparent:!0,opacity:1}),cube=new THREE.Mesh(geometry,material);cube.position.z=-1,scene.add(cube),arrayObjects.push(cube),requestAnimationFrame(render);const box=(new THREE.Box3).setFromObject(cube),boxSize=box.getSize(new THREE.Vector3).length(),boxCenter=box.getCenter(new THREE.Vector3);frameArea(.8*boxSize,boxSize,boxCenter,camera),controls.maxDistance=10*boxSize,controls.target.copy(boxCenter),controls.update();requestAnimationFrame(render);"
                      },

                            
                      {
                        "name":"fig20",
                        "x":0,
                        "y":2,
                        "z":1,
                        "code" : "const gltfLoader=new THREE.GLTFLoader;gltfLoader.load(\"models/dinosaur/scene.gltf\",e=>{const t=e.scene;scene.add(t),arrayObjects.push(t);const r=(new THREE.Box3).setFromObject(t),o=r.getSize(new THREE.Vector3).length(),n=r.getCenter(new THREE.Vector3);frameArea(.8*o,o,n,camera),controls.maxDistance=10*o,controls.target.copy(n),controls.update(),counter=0,requestAnimationFrame(render)});const box=(new THREE.Box3).setFromObject(root),boxSize=box.getSize(new THREE.Vector3).length(),boxCenter=box.getCenter(new THREE.Vector3);frameArea(.8*boxSize,boxSize,boxCenter,camera),controls.maxDistance=10*boxSize,controls.target.copy(boxCenter),controls.update(),counter=0,requestAnimationFrame(render);"
                     },

                     {
                        "name":"fig21",
                        "x":0,
                        "y":2,
                        "z":2,
                        "code":"var geometry=new THREE.BoxGeometry(.5,.5,.5),material=new THREE.MeshBasicMaterial({map:(new THREE.TextureLoader).load(\"imagenes/1.png\"),side:THREE.DoubleSide,color:16777215,transparent:!0,opacity:1}),cube=new THREE.Mesh(geometry,material);cube.position.z=-1,scene.add(cube),arrayObjects.push(cube),requestAnimationFrame(render);const box=(new THREE.Box3).setFromObject(cube),boxSize=box.getSize(new THREE.Vector3).length(),boxCenter=box.getCenter(new THREE.Vector3);frameArea(.8*boxSize,boxSize,boxCenter,camera),controls.maxDistance=10*boxSize,controls.target.copy(boxCenter),controls.update();requestAnimationFrame(render);"
                     },

                     {
                        "name":"fig22",
                        "x":1,
                        "y":2,
                        "z":0,
                        "code" : "const gltfLoader=new THREE.GLTFLoader;gltfLoader.load(\"models/dinosaur/scene.gltf\",e=>{const t=e.scene;scene.add(t),arrayObjects.push(t);const r=(new THREE.Box3).setFromObject(t),o=r.getSize(new THREE.Vector3).length(),n=r.getCenter(new THREE.Vector3);frameArea(.8*o,o,n,camera),controls.maxDistance=10*o,controls.target.copy(n),controls.update(),counter=0,requestAnimationFrame(render)});const box=(new THREE.Box3).setFromObject(root),boxSize=box.getSize(new THREE.Vector3).length(),boxCenter=box.getCenter(new THREE.Vector3);frameArea(.8*boxSize,boxSize,boxCenter,camera),controls.maxDistance=10*boxSize,controls.target.copy(boxCenter),controls.update(),counter=0,requestAnimationFrame(render);"
                     },

                     {
                        "name":"fig23",
                        "x":1,
                        "y":3,
                        "z":1,
                        "code":"var geometry=new THREE.BoxGeometry(.5,.5,.5),material=new THREE.MeshBasicMaterial({map:(new THREE.TextureLoader).load(\"imagenes/1.png\"),side:THREE.DoubleSide,color:16777215,transparent:!0,opacity:1}),cube=new THREE.Mesh(geometry,material);cube.position.z=-1,scene.add(cube),arrayObjects.push(cube),requestAnimationFrame(render);const box=(new THREE.Box3).setFromObject(cube),boxSize=box.getSize(new THREE.Vector3).length(),boxCenter=box.getCenter(new THREE.Vector3);frameArea(.8*boxSize,boxSize,boxCenter,camera),controls.maxDistance=10*boxSize,controls.target.copy(boxCenter),controls.update();requestAnimationFrame(render);"
                     },

                     {
                        "name":"fig24",
                        "x":1,
                        "y":2,
                        "z":2,
                        "code" : "const gltfLoader=new THREE.GLTFLoader;gltfLoader.load(\"models/dinosaur/scene.gltf\",e=>{const t=e.scene;scene.add(t),arrayObjects.push(t);const r=(new THREE.Box3).setFromObject(t),o=r.getSize(new THREE.Vector3).length(),n=r.getCenter(new THREE.Vector3);frameArea(.8*o,o,n,camera),controls.maxDistance=10*o,controls.target.copy(n),controls.update(),counter=0,requestAnimationFrame(render)});const box=(new THREE.Box3).setFromObject(root),boxSize=box.getSize(new THREE.Vector3).length(),boxCenter=box.getCenter(new THREE.Vector3);frameArea(.8*boxSize,boxSize,boxCenter,camera),controls.maxDistance=10*boxSize,controls.target.copy(boxCenter),controls.update(),counter=0,requestAnimationFrame(render);"
                     },

                     {
                        "name":"fig25",
                        "x":2,
                        "y":2,
                        "z":0,
                        "code":"var geometry=new THREE.BoxGeometry(.5,.5,.5),material=new THREE.MeshBasicMaterial({map:(new THREE.TextureLoader).load(\"imagenes/1.png\"),side:THREE.DoubleSide,color:16777215,transparent:!0,opacity:1}),cube=new THREE.Mesh(geometry,material);cube.position.z=-1,scene.add(cube),arrayObjects.push(cube),requestAnimationFrame(render);const box=(new THREE.Box3).setFromObject(cube),boxSize=box.getSize(new THREE.Vector3).length(),boxCenter=box.getCenter(new THREE.Vector3);frameArea(.8*boxSize,boxSize,boxCenter,camera),controls.maxDistance=10*boxSize,controls.target.copy(boxCenter),controls.update();requestAnimationFrame(render);"
                     },

                     {"name":"fig26",
                      "x":2,
                      "y":2,
                      "z":1,
                        "code" : "const gltfLoader=new THREE.GLTFLoader;gltfLoader.load(\"models/dinosaur/scene.gltf\",e=>{const t=e.scene;scene.add(t),arrayObjects.push(t);const r=(new THREE.Box3).setFromObject(t),o=r.getSize(new THREE.Vector3).length(),n=r.getCenter(new THREE.Vector3);frameArea(.8*o,o,n,camera),controls.maxDistance=10*o,controls.target.copy(n),controls.update(),counter=0,requestAnimationFrame(render)});const box=(new THREE.Box3).setFromObject(root),boxSize=box.getSize(new THREE.Vector3).length(),boxCenter=box.getCenter(new THREE.Vector3);frameArea(.8*boxSize,boxSize,boxCenter,camera),controls.maxDistance=10*boxSize,controls.target.copy(boxCenter),controls.update(),counter=0,requestAnimationFrame(render);"
                    },
                      
                     {
                        "name":"fig27",
                        "x":2,
                        "y":2,
                        "z":2,
                        "code":"var geometry=new THREE.BoxGeometry(.5,.5,.5),material=new THREE.MeshBasicMaterial({map:(new THREE.TextureLoader).load(\"imagenes/1.png\"),side:THREE.DoubleSide,color:16777215,transparent:!0,opacity:1}),cube=new THREE.Mesh(geometry,material);cube.position.z=-1,scene.add(cube),arrayObjects.push(cube),requestAnimationFrame(render);const box=(new THREE.Box3).setFromObject(cube),boxSize=box.getSize(new THREE.Vector3).length(),boxCenter=box.getCenter(new THREE.Vector3);frameArea(.8*boxSize,boxSize,boxCenter,camera),controls.maxDistance=10*boxSize,controls.target.copy(boxCenter),controls.update();requestAnimationFrame(render);"
                      }

                      ]
                    
                  };


    socket.emit('message', JSON.stringify(jsonObj));
   
    
}

function listenForAskingForIP(){
    socket.on('user', function(){
        console.log("IPs requested: ");
        sendDataOfCluster();
    });
}

function sendDataOfCluster(){
    let jsonObj = [{"ip":"192.168.0.2","hostname":"Inspiron-15-7000-Gaming","Ram_Total":8223408128,"Ram_Uso":997580800,"cpu":[{"model":"Intel(R) Core(TM) i7-7700HQ CPU @ 2.80GHz","speed":800,"times":{"user":5749400,"nice":4400,"sys":1483900,"idle":103657700,"irq":0}},{"model":"Intel(R) Core(TM) i7-7700HQ CPU @ 2.80GHz","speed":800,"times":{"user":5756000,"nice":3100,"sys":1447600,"idle":96250900,"irq":0}},{"model":"Intel(R) Core(TM) i7-7700HQ CPU @ 2.80GHz","speed":800,"times":{"user":5829800,"nice":4000,"sys":1544400,"idle":95997000,"irq":0}},{"model":"Intel(R) Core(TM) i7-7700HQ CPU @ 2.80GHz","speed":800,"times":{"user":6856200,"nice":3600,"sys":1958900,"idle":80861300,"irq":0}},{"model":"Intel(R) Core(TM) i7-7700HQ CPU @ 2.80GHz","speed":800,"times":{"user":5880800,"nice":4700,"sys":1625100,"idle":94029800,"irq":0}},{"model":"Intel(R) Core(TM) i7-7700HQ CPU @ 2.80GHz","speed":800,"times":{"user":5827000,"nice":3200,"sys":1642600,"idle":95366000,"irq":0}},{"model":"Intel(R) Core(TM) i7-7700HQ CPU @ 2.80GHz","speed":800,"times":{"user":5567800,"nice":5900,"sys":1995000,"idle":95539700,"irq":0}},{"model":"Intel(R) Core(TM) i7-7700HQ CPU @ 2.80GHz","speed":800,"times":{"user":5535300,"nice":5400,"sys":1450800,"idle":96449900,"irq":0}}],"status":"actualizar"}];
  socket.emit('client', jsonObj);
  console.log("Data has been sent")
}

//init call
init();
