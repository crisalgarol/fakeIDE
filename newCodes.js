//Circle
const radius=7,segments=24,geometry=new THREE.CircleBufferGeometry(7,24);var material=new THREE.MeshNormalMaterial({color:255});velocityX=.01,velocityY=.01,velocityZ=.01;var graphingElement=new THREE.Mesh(geometry,material);graphingElement.position.z=-1,scene.add(graphingElement),arrayObjects.push(graphingElement),requestAnimationFrame(render);const box=(new THREE.Box3).setFromObject(graphingElement),boxSize=box.getSize(new THREE.Vector3).length(),boxCenter=box.getCenter(new THREE.Vector3);frameArea(.8*boxSize,boxSize,boxCenter,camera),controls.maxDistance=10*boxSize,controls.target.copy(boxCenter),controls.update(),requestAnimationFrame(render);
///

//Cone
const radius=6,height=8,segments=16,geometry=new THREE.ConeBufferGeometry(6,8,16);var material=new THREE.MeshNormalMaterial({color:255});velocityX=0,velocityY=.01,velocityZ=1e-4;var graphingElement=new THREE.Mesh(geometry,material);graphingElement.position.z=-1,scene.add(graphingElement),arrayObjects.push(graphingElement),requestAnimationFrame(render);const box=(new THREE.Box3).setFromObject(graphingElement),boxSize=box.getSize(new THREE.Vector3).length(),boxCenter=box.getCenter(new THREE.Vector3);frameArea(.8*boxSize,boxSize,boxCenter,camera),controls.maxDistance=10*boxSize,controls.target.copy(boxCenter),controls.update(),requestAnimationFrame(render);
///

//Cylinder
const radiusTop=4,radiusBottom=4,height=8,radialSegments=12,geometry=new THREE.CylinderBufferGeometry(4,4,8,12);var material=new THREE.MeshNormalMaterial({color:255});velocityX=.001,velocityY=.01,velocityZ=1e-4;var graphingElement=new THREE.Mesh(geometry,material);graphingElement.position.z=-1,scene.add(graphingElement),arrayObjects.push(graphingElement),requestAnimationFrame(render);const box=(new THREE.Box3).setFromObject(graphingElement),boxSize=box.getSize(new THREE.Vector3).length(),boxCenter=box.getCenter(new THREE.Vector3);frameArea(.8*boxSize,boxSize,boxCenter,camera),controls.maxDistance=10*boxSize,controls.target.copy(boxCenter),controls.update(),requestAnimationFrame(render);
///

//Dodecahedron
const radius=7,geometry=new THREE.DodecahedronBufferGeometry(7);var material=new THREE.MeshNormalMaterial({color:255});velocityX=.001,velocityY=.01,velocityZ=1e-4;var graphingElement=new THREE.Mesh(geometry,material);graphingElement.position.z=-1,scene.add(graphingElement),arrayObjects.push(graphingElement),requestAnimationFrame(render);const box=(new THREE.Box3).setFromObject(graphingElement),boxSize=box.getSize(new THREE.Vector3).length(),boxCenter=box.getCenter(new THREE.Vector3);frameArea(.8*boxSize,boxSize,boxCenter,camera),controls.maxDistance=10*boxSize,controls.target.copy(boxCenter),controls.update(),requestAnimationFrame(render);
///

//Heart
const shape=new THREE.Shape,x=-2.5,y=-5;shape.moveTo(0,-2.5),shape.bezierCurveTo(0,-2.5,-.5,y,x,y),shape.bezierCurveTo(x-3,y,x-3,-1.5,x-3,-1.5),shape.bezierCurveTo(x-3,.5,-4,2.7,0,4.5),shape.bezierCurveTo(3.5,2.7,5.5,-.5,5.5,-1.5),shape.bezierCurveTo(5.5,-1.5,5.5,y,2.5,y),shape.bezierCurveTo(1,y,0,-2.5,0,-2.5);const extrudeSettings={steps:2,depth:2,bevelEnabled:!0,bevelThickness:1,bevelSize:1,bevelSegments:2},geometry=new THREE.ExtrudeBufferGeometry(shape,extrudeSettings);var material=new THREE.MeshNormalMaterial({color:255});velocityX=.001,velocityY=.01,velocityZ=1e-4;var graphingElement=new THREE.Mesh(geometry,material);graphingElement.position.z=-1,scene.add(graphingElement),arrayObjects.push(graphingElement),requestAnimationFrame(render);const box=(new THREE.Box3).setFromObject(graphingElement),boxSize=box.getSize(new THREE.Vector3).length(),boxCenter=box.getCenter(new THREE.Vector3);frameArea(.8*boxSize,boxSize,boxCenter,camera),controls.maxDistance=10*boxSize,controls.target.copy(boxCenter),controls.update(),requestAnimationFrame(render);
///


//Octahedron
const radius=7,geometry=new THREE.OctahedronBufferGeometry(7);var material=new THREE.MeshNormalMaterial({color:255});velocityX=.001,velocityY=.01,velocityZ=1e-4;var graphingElement=new THREE.Mesh(geometry,material);graphingElement.position.z=-1,scene.add(graphingElement),arrayObjects.push(graphingElement),requestAnimationFrame(render);const box=(new THREE.Box3).setFromObject(graphingElement),boxSize=box.getSize(new THREE.Vector3).length(),boxCenter=box.getCenter(new THREE.Vector3);frameArea(.8*boxSize,boxSize,boxCenter,camera),controls.maxDistance=10*boxSize,controls.target.copy(boxCenter),controls.update(),requestAnimationFrame(render);
///

//Polyhedron
const verticesOfCube=[-1,-1,-1,1,-1,-1,1,1,-1,-1,1,-1,-1,-1,1,1,-1,1,1,1,1,-1,1,1],indicesOfFaces=[2,1,0,0,3,2,0,4,7,7,3,0,0,1,5,5,4,0,1,2,6,6,5,1,2,3,7,7,6,2,4,5,6,6,7,4],radius=7,detail=2,geometry=new THREE.PolyhedronBufferGeometry(verticesOfCube,indicesOfFaces,7,2);var material=new THREE.MeshNormalMaterial({color:255});velocityX=.001,velocityY=.01,velocityZ=1e-4;var graphingElement=new THREE.Mesh(geometry,material);graphingElement.position.z=-1,scene.add(graphingElement),arrayObjects.push(graphingElement),requestAnimationFrame(render);const box=(new THREE.Box3).setFromObject(graphingElement),boxSize=box.getSize(new THREE.Vector3).length(),boxCenter=box.getCenter(new THREE.Vector3);frameArea(.8*boxSize,boxSize,boxCenter,camera),controls.maxDistance=10*boxSize,controls.target.copy(boxCenter),controls.update(),requestAnimationFrame(render);
///

//Tetrahedron
const radius=7,geometry=new THREE.TetrahedronBufferGeometry(7);var material=new THREE.MeshNormalMaterial({color:255});velocityX=.001,velocityY=.01,velocityZ=1e-4;var graphingElement=new THREE.Mesh(geometry,material);graphingElement.position.z=-1,scene.add(graphingElement),arrayObjects.push(graphingElement),requestAnimationFrame(render);const box=(new THREE.Box3).setFromObject(graphingElement),boxSize=box.getSize(new THREE.Vector3).length(),boxCenter=box.getCenter(new THREE.Vector3);frameArea(.8*boxSize,boxSize,boxCenter,camera),controls.maxDistance=10*boxSize,controls.target.copy(boxCenter),controls.update(),requestAnimationFrame(render);
///

 //Torus
 const radius=5,tubeRadius=2,radialSegments=8,tubularSegments=24,geometry=new THREE.TorusBufferGeometry(5,2,8,24);var material=new THREE.MeshNormalMaterial({color:255});velocityX=.001,velocityY=.01,velocityZ=1e-4;var graphingElement=new THREE.Mesh(geometry,material);graphingElement.position.z=-1,scene.add(graphingElement),arrayObjects.push(graphingElement),requestAnimationFrame(render);const box=(new THREE.Box3).setFromObject(graphingElement),boxSize=box.getSize(new THREE.Vector3).length(),boxCenter=box.getCenter(new THREE.Vector3);frameArea(.8*boxSize,boxSize,boxCenter,camera),controls.maxDistance=10*boxSize,controls.target.copy(boxCenter),controls.update(),requestAnimationFrame(render);
///

