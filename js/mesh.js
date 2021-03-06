Earth = function() {

    THREE.Group.call(this);

    var mesh;
    let loader = new THREE.JSONLoader();
    let name = 'models/earth_bak.json';
    loader.load(name, function(geometry, materials) {
        mesh = new THREE.Mesh(geometry, new THREE.MeshFaceMaterial(materials));

        mesh.vertexColors = THREE.FaceColors;
        mesh.color = COLORS.blue;
        mesh.position.x = 100;
        mesh.position.y = 100;
        mesh.position.z = -100;

        var scale = 120;
        mesh.scale.set(scale, scale, scale);
        mesh.rotation.x = 0;
        mesh.rotation.y = 0;
        scene.add(mesh);
    })

    setTimeout(function() {
      this.mesh = mesh;
      this.add(this.mesh);
    }.bind(this), 1000);
}

Earth.prototype = Object.create(THREE.Group.prototype);
Earth.prototype.contructor = Earth;

Player = function() {

    THREE.Group.call(this);
    // this.position.z = 700;
    // this.position.y = -500;
    this.position.y = 900;

    var mesh;
    // Mesh
    let loader = new THREE.JSONLoader();
    loader.load('models/plane.json', function(geometry, materials) {
        mesh = new THREE.Mesh(geometry, new THREE.MeshFaceMaterial(materials));
        mesh.position.x = 0;
        mesh.position.y = 0;
        mesh.position.z = 0;

        mesh.scale.set(20, 20, 20);
        mesh.rotation.x = 0;
        mesh.rotation.y = Math.PI / 2; // with -1 forwardDir
        // mesh.rotation.y = 149.20; // with 1 forwardDir

        //console.log(mesh.position.x)
        //objects.push(mesh);

    });

    var cloud;
    loader.load('models/cloud.json', function(geometry, materials) {
        cloud = new THREE.Mesh(geometry, new THREE.MeshFaceMaterial(materials));
        cloud.position.x = 0;
        cloud.position.y = 150;
        cloud.position.z = 0;

        cloud.scale.set(20, 20, 20);
        cloud.rotation.x = 0;
        cloud.rotation.y = 1.45; // with -1 forwardDir
        // mesh.rotation.y = 149.20; // with 1 forwardDir

        //console.log(mesh.position.x)
        //objects.push(mesh);

        cloud.visible = false;

    });

    var sun;
loader.load('models/sun.json', function(geometry, materials) {
    sun = new THREE.Mesh(geometry, new THREE.MeshFaceMaterial(materials));
    sun.position.x = 0;
    sun.position.y = 200;
    sun.position.z = 0;

    sun.scale.set(20, 20, 20);
    sun.rotation.x = 0;
    sun.rotation.y = 1.45; // with -1 forwardDir
    // mesh.rotation.y = 149.20; // with 1 forwardDir

    //console.log(mesh.position.x)
    //objects.push(mesh);

    sun.visible = false;

});


    setTimeout(function() {
      this.mesh = mesh;
      this.add(this.mesh);
      this.cloud = cloud;
      this.add(this.cloud);
      this.sun = sun;
      this.add(this.sun);
    }.bind(this), 1000);

    // Camera that follows the player
    this.camera = new THREE.PerspectiveCamera;
    this.camera.position.y = 1300;
    this.camera.position.z = 300;
    this.add(this.camera);

}

Player.prototype = Object.create(THREE.Group.prototype);
Player.prototype.contructor = Player;
