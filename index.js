const fs = require("fs");
const socket = require('socket.io-client')('http://192.168.0.9:3000');

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
                      "code":"var geometry=new THREE.BoxGeometry(.5,.5,.5),material=new THREE.MeshBasicMaterial({map:(new THREE.TextureLoader).load(\"imagenes/1.png\"),side:THREE.DoubleSide,color:16777215,transparent:!0,opacity:1}),cube=new THREE.Mesh(geometry,material);cube.position.z=-1,scene.add(cube),arrayObjects.push(cube);"
                    },
                      
                      {
                        "name":"fig2",
                        "x":1,
                        "y":0,
                        "z":0,
                        "code":"var geometry=new THREE.BoxGeometry(.5,.5,.5),material=new THREE.MeshBasicMaterial({map:(new THREE.TextureLoader).load(\"imagenes/2.png\"),side:THREE.DoubleSide,color:16777215,transparent:!0,opacity:1}),cube=new THREE.Mesh(geometry,material);cube.position.z=-1,scene.add(cube),arrayObjects.push(cube);"
                      },

                            
                      {
                        "name":"fig3",
                        "x":2,
                        "y":0,
                        "z":0,
                        "code":"var geometry=new THREE.BoxGeometry(.5,.5,.5),material=new THREE.MeshBasicMaterial({map:(new THREE.TextureLoader).load(\"imagenes/3.png\"),side:THREE.DoubleSide,color:16777215,transparent:!0,opacity:1}),cube=new THREE.Mesh(geometry,material);cube.position.z=-1,scene.add(cube),arrayObjects.push(cube);"
                     },

                     {
                        "name":"fig4",
                        "x":0,
                        "y":0,
                        "z":1,
                        "code":"var geometry=new THREE.BoxGeometry(.5,.5,.5),material=new THREE.MeshBasicMaterial({map:(new THREE.TextureLoader).load(\"imagenes/4.png\"),side:THREE.DoubleSide,color:16777215,transparent:!0,opacity:1}),cube=new THREE.Mesh(geometry,material);cube.position.z=-1,scene.add(cube),arrayObjects.push(cube);"
                     },

                     {
                        "name":"fig5",
                        "x":0,
                        "y":0,
                        "z":2,
                        "code":"var geometry=new THREE.BoxGeometry(.5,.5,.5),material=new THREE.MeshBasicMaterial({map:(new THREE.TextureLoader).load(\"imagenes/5.png\"),side:THREE.DoubleSide,color:16777215,transparent:!0,opacity:1}),cube=new THREE.Mesh(geometry,material);cube.position.z=-1,scene.add(cube),arrayObjects.push(cube);"
                     },

                     {
                        "name":"fig6",
                        "x":1,
                        "y":0,
                        "z":1,
                        "code":"var geometry=new THREE.BoxGeometry(.5,.5,.5),material=new THREE.MeshBasicMaterial({map:(new THREE.TextureLoader).load(\"imagenes/3.png\"),side:THREE.DoubleSide,color:16777215,transparent:!0,opacity:1}),cube=new THREE.Mesh(geometry,material);cube.position.z=-1,scene.add(cube),arrayObjects.push(cube);"
                     },

                     {
                        "name":"fig7",
                        "x":1,
                        "y":0,
                        "z":2,
                        "code":"var geometry=new THREE.BoxGeometry(.5,.5,.5),material=new THREE.MeshBasicMaterial({map:(new THREE.TextureLoader).load(\"imagenes/4.png\"),side:THREE.DoubleSide,color:16777215,transparent:!0,opacity:1}),cube=new THREE.Mesh(geometry,material);cube.position.z=-1,scene.add(cube),arrayObjects.push(cube);"
                     },

                     {
                        "name":"fig8",
                        "x":2,
                        "y":0,
                        "z":1,
                        "code":"var geometry=new THREE.BoxGeometry(.5,.5,.5),material=new THREE.MeshBasicMaterial({map:(new THREE.TextureLoader).load(\"imagenes/5.png\"),side:THREE.DoubleSide,color:16777215,transparent:!0,opacity:1}),cube=new THREE.Mesh(geometry,material);cube.position.z=-1,scene.add(cube),arrayObjects.push(cube);"
                     },

                     {"name":"fig9",
                      "x":2,
                      "y":0,
                      "z":2,
                      "code":"var geometry=new THREE.BoxGeometry(.5,.5,.5),material=new THREE.MeshBasicMaterial({map:(new THREE.TextureLoader).load(\"imagenes/1.png\"),side:THREE.DoubleSide,color:16777215,transparent:!0,opacity:1}),cube=new THREE.Mesh(geometry,material);cube.position.z=-1,scene.add(cube),arrayObjects.push(cube);"
                    },
                
                        //Segundo nivel horizontal
                            
                      {
                        "name":"fig10",
                        "x":0,
                        "y":1,
                        "z":0,
                        "code":"var geometry=new THREE.BoxGeometry(.5,.5,.5),material=new THREE.MeshBasicMaterial({map:(new THREE.TextureLoader).load(\"imagenes/3.png\"),side:THREE.DoubleSide,color:16777215,transparent:!0,opacity:1}),cube=new THREE.Mesh(geometry,material);cube.position.z=-1,scene.add(cube),arrayObjects.push(cube);"
                     },

                     {
                        "name":"fig11",
                        "x":0,
                        "y":1,
                        "z":1,
                        "code":"var geometry=new THREE.BoxGeometry(.5,.5,.5),material=new THREE.MeshBasicMaterial({map:(new THREE.TextureLoader).load(\"imagenes/4.png\"),side:THREE.DoubleSide,color:16777215,transparent:!0,opacity:1}),cube=new THREE.Mesh(geometry,material);cube.position.z=-1,scene.add(cube),arrayObjects.push(cube);"
                     },

                     {
                        "name":"fig12",
                        "x":0,
                        "y":1,
                        "z":2,
                        "code":"var geometry=new THREE.BoxGeometry(.5,.5,.5),material=new THREE.MeshBasicMaterial({map:(new THREE.TextureLoader).load(\"imagenes/5.png\"),side:THREE.DoubleSide,color:16777215,transparent:!0,opacity:1}),cube=new THREE.Mesh(geometry,material);cube.position.z=-1,scene.add(cube),arrayObjects.push(cube);"
                     },

                     {
                        "name":"fig13",
                        "x":1,
                        "y":1,
                        "z":0,
                        "code":"var geometry=new THREE.BoxGeometry(.5,.5,.5),material=new THREE.MeshBasicMaterial({map:(new THREE.TextureLoader).load(\"imagenes/3.png\"),side:THREE.DoubleSide,color:16777215,transparent:!0,opacity:1}),cube=new THREE.Mesh(geometry,material);cube.position.z=-1,scene.add(cube),arrayObjects.push(cube);"
                     },

                     {
                        "name":"fig14",
                        "x":1,
                        "y":1,
                        "z":2,
                        "code":"var geometry=new THREE.BoxGeometry(.5,.5,.5),material=new THREE.MeshBasicMaterial({map:(new THREE.TextureLoader).load(\"imagenes/4.png\"),side:THREE.DoubleSide,color:16777215,transparent:!0,opacity:1}),cube=new THREE.Mesh(geometry,material);cube.position.z=-1,scene.add(cube),arrayObjects.push(cube);"
                     },

                     {
                        "name":"fig15",
                        "x":2,
                        "y":1,
                        "z":0,
                        "code":"var geometry=new THREE.BoxGeometry(.5,.5,.5),material=new THREE.MeshBasicMaterial({map:(new THREE.TextureLoader).load(\"imagenes/3.png\"),side:THREE.DoubleSide,color:16777215,transparent:!0,opacity:1}),cube=new THREE.Mesh(geometry,material);cube.position.z=-1,scene.add(cube),arrayObjects.push(cube);"
                     },

                     {
                        "name":"fig16",
                        "x":2,
                        "y":1,
                        "z":1,
                        "code":"var geometry=new THREE.BoxGeometry(.5,.5,.5),material=new THREE.MeshBasicMaterial({map:(new THREE.TextureLoader).load(\"imagenes/4.png\"),side:THREE.DoubleSide,color:16777215,transparent:!0,opacity:1}),cube=new THREE.Mesh(geometry,material);cube.position.z=-1,scene.add(cube),arrayObjects.push(cube);"
                     },


                     {
                        "name":"fig17",
                        "x":2,
                        "y":1,
                        "z":2,
                        "code":"var geometry=new THREE.BoxGeometry(.5,.5,.5),material=new THREE.MeshBasicMaterial({map:(new THREE.TextureLoader).load(\"imagenes/5.png\"),side:THREE.DoubleSide,color:16777215,transparent:!0,opacity:1}),cube=new THREE.Mesh(geometry,material);cube.position.z=-1,scene.add(cube),arrayObjects.push(cube);"
                     },

                     //Tercer nivel horizontal

                     /*{"name":"fig18",
                      "x":0,
                      "y":2,
                      "z":0,
                      "code":"var geometry=new THREE.BoxGeometry(.5,.5,.5),material=new THREE.MeshBasicMaterial({map:(new THREE.TextureLoader).load(\"imagenes/1.png\"),side:THREE.DoubleSide,color:16777215,transparent:!0,opacity:1}),cube=new THREE.Mesh(geometry,material);cube.position.z=-1,scene.add(cube),arrayObjects.push(cube);"
                    },*/
                      
                      {
                        "name":"fig19",
                        "x":0,
                        "y":2,
                        "z":0,
                        "code":"var geometry=new THREE.BoxGeometry(.5,.5,.5),material=new THREE.MeshBasicMaterial({map:(new THREE.TextureLoader).load(\"imagenes/2.png\"),side:THREE.DoubleSide,color:16777215,transparent:!0,opacity:1}),cube=new THREE.Mesh(geometry,material);cube.position.z=-1,scene.add(cube),arrayObjects.push(cube);"
                      },

                            
                      {
                        "name":"fig20",
                        "x":0,
                        "y":2,
                        "z":1,
                        "code":"var geometry=new THREE.BoxGeometry(.5,.5,.5),material=new THREE.MeshBasicMaterial({map:(new THREE.TextureLoader).load(\"imagenes/3.png\"),side:THREE.DoubleSide,color:16777215,transparent:!0,opacity:1}),cube=new THREE.Mesh(geometry,material);cube.position.z=-1,scene.add(cube),arrayObjects.push(cube);"
                     },

                     {
                        "name":"fig21",
                        "x":0,
                        "y":2,
                        "z":2,
                        "code":"var geometry=new THREE.BoxGeometry(.5,.5,.5),material=new THREE.MeshBasicMaterial({map:(new THREE.TextureLoader).load(\"imagenes/4.png\"),side:THREE.DoubleSide,color:16777215,transparent:!0,opacity:1}),cube=new THREE.Mesh(geometry,material);cube.position.z=-1,scene.add(cube),arrayObjects.push(cube);"
                     },

                     {
                        "name":"fig22",
                        "x":1,
                        "y":2,
                        "z":0,
                        "code":"var geometry=new THREE.BoxGeometry(.5,.5,.5),material=new THREE.MeshBasicMaterial({map:(new THREE.TextureLoader).load(\"imagenes/5.png\"),side:THREE.DoubleSide,color:16777215,transparent:!0,opacity:1}),cube=new THREE.Mesh(geometry,material);cube.position.z=-1,scene.add(cube),arrayObjects.push(cube);"
                     },

                     {
                        "name":"fig23",
                        "x":1,
                        "y":3,
                        "z":1,
                        "code":"var geometry=new THREE.BoxGeometry(.5,.5,.5),material=new THREE.MeshBasicMaterial({map:(new THREE.TextureLoader).load(\"imagenes/3.png\"),side:THREE.DoubleSide,color:16777215,transparent:!0,opacity:1}),cube=new THREE.Mesh(geometry,material);cube.position.z=-1,scene.add(cube),arrayObjects.push(cube);"
                     },

                     {
                        "name":"fig24",
                        "x":1,
                        "y":2,
                        "z":2,
                        "code":"var geometry=new THREE.BoxGeometry(.5,.5,.5),material=new THREE.MeshBasicMaterial({map:(new THREE.TextureLoader).load(\"imagenes/4.png\"),side:THREE.DoubleSide,color:16777215,transparent:!0,opacity:1}),cube=new THREE.Mesh(geometry,material);cube.position.z=-1,scene.add(cube),arrayObjects.push(cube);"
                     },/**/

                     {
                        "name":"fig25",
                        "x":2,
                        "y":2,
                        "z":0,
                        "code":"var geometry=new THREE.BoxGeometry(.5,.5,.5),material=new THREE.MeshBasicMaterial({map:(new THREE.TextureLoader).load(\"imagenes/5.png\"),side:THREE.DoubleSide,color:16777215,transparent:!0,opacity:1}),cube=new THREE.Mesh(geometry,material);cube.position.z=-1,scene.add(cube),arrayObjects.push(cube);"
                     },

                     {"name":"fig26",
                      "x":2,
                      "y":2,
                      "z":1,
                      "code":"var geometry=new THREE.BoxGeometry(.5,.5,.5),material=new THREE.MeshBasicMaterial({map:(new THREE.TextureLoader).load(\"imagenes/1.png\"),side:THREE.DoubleSide,color:16777215,transparent:!0,opacity:1}),cube=new THREE.Mesh(geometry,material);cube.position.z=-1,scene.add(cube),arrayObjects.push(cube);"
                    },
                      
                     {
                        "name":"fig27",
                        "x":2,
                        "y":2,
                        "z":2,
                        "code":"var geometry=new THREE.BoxGeometry(.5,.5,.5),material=new THREE.MeshBasicMaterial({map:(new THREE.TextureLoader).load(\"imagenes/2.png\"),side:THREE.DoubleSide,color:16777215,transparent:!0,opacity:1}),cube=new THREE.Mesh(geometry,material);cube.position.z=-1,scene.add(cube),arrayObjects.push(cube);"
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
    let jsonObj = [{"ip":"192.168.0.24","hostname":"Inspiron-15-7000-Gaming","Ram_Total":8223408128,"Ram_Uso":997580800,"cpu":[{"model":"Intel(R) Core(TM) i7-7700HQ CPU @ 2.80GHz","speed":800,"times":{"user":5749400,"nice":4400,"sys":1483900,"idle":103657700,"irq":0}},{"model":"Intel(R) Core(TM) i7-7700HQ CPU @ 2.80GHz","speed":800,"times":{"user":5756000,"nice":3100,"sys":1447600,"idle":96250900,"irq":0}},{"model":"Intel(R) Core(TM) i7-7700HQ CPU @ 2.80GHz","speed":800,"times":{"user":5829800,"nice":4000,"sys":1544400,"idle":95997000,"irq":0}},{"model":"Intel(R) Core(TM) i7-7700HQ CPU @ 2.80GHz","speed":800,"times":{"user":6856200,"nice":3600,"sys":1958900,"idle":80861300,"irq":0}},{"model":"Intel(R) Core(TM) i7-7700HQ CPU @ 2.80GHz","speed":800,"times":{"user":5880800,"nice":4700,"sys":1625100,"idle":94029800,"irq":0}},{"model":"Intel(R) Core(TM) i7-7700HQ CPU @ 2.80GHz","speed":800,"times":{"user":5827000,"nice":3200,"sys":1642600,"idle":95366000,"irq":0}},{"model":"Intel(R) Core(TM) i7-7700HQ CPU @ 2.80GHz","speed":800,"times":{"user":5567800,"nice":5900,"sys":1995000,"idle":95539700,"irq":0}},{"model":"Intel(R) Core(TM) i7-7700HQ CPU @ 2.80GHz","speed":800,"times":{"user":5535300,"nice":5400,"sys":1450800,"idle":96449900,"irq":0}}],"status":"actualizar"}];
  socket.emit('client', jsonObj);
  console.log("Data has been sent")
}

//init call
init();
