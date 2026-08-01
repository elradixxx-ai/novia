// =======================================
// CAMILA ❤️ UNIVERSE
// PARTE 1
// =======================================

// Elementos HTML
const intro = document.getElementById("intro");
const start = document.getElementById("start");
const music = document.getElementById("music");
const container = document.getElementById("space3d");

// Escena
const scene = new THREE.Scene();

// Cámara
const camera = new THREE.PerspectiveCamera(
60,
window.innerWidth/window.innerHeight,
0.1,
5000
);

camera.position.z = 180;

// Render
const renderer = new THREE.WebGLRenderer({
alpha:true,
antialias:true
});

renderer.setSize(
window.innerWidth,
window.innerHeight
);

renderer.setPixelRatio(window.devicePixelRatio);

container.appendChild(renderer.domElement);

// ==============================
// GALAXIA
// ==============================

const galaxyGeometry = new THREE.BufferGeometry();

const galaxyVertices=[];

for(let i=0;i<20000;i++){

galaxyVertices.push(

(Math.random()-0.5)*5000,
(Math.random()-0.5)*5000,
(Math.random()-0.5)*5000

);

}

galaxyGeometry.setAttribute(

"position",

new THREE.Float32BufferAttribute(
galaxyVertices,
3
)

);

const galaxyMaterial=new THREE.PointsMaterial({

color:0xffffff,
size:2,
transparent:true,
opacity:.85

});

const galaxy=new THREE.Points(

galaxyGeometry,
galaxyMaterial

);

scene.add(galaxy);

// ==============================
// NEBULOSA
// ==============================

const nebulaGeometry=new THREE.SphereGeometry(
600,
64,
64
);

const nebulaMaterial=new THREE.MeshBasicMaterial({

color:0x40104d,
transparent:true,
opacity:.12,
side:THREE.BackSide

});

const nebula=new THREE.Mesh(

nebulaGeometry,
nebulaMaterial

);

scene.add(nebula);

// ==============================
// LUZ
// ==============================

scene.add(

new THREE.AmbientLight(
0xffffff,
2
)

);

// ==============================
// BOTÓN
// ==============================

start.onclick=()=>{

    // ========================================
// CARTA
// ========================================

setTimeout(()=>{

    const letter=document.getElementById("letter");

    letter.style.display="block";

    letter.animate([

        {
            opacity:0,
            transform:"translateY(100px)"
        },

        {
            opacity:1,
            transform:"translateY(0)"
        }

    ],{

        duration:2000,
        fill:"forwards"

    });

},15000);
intro.style.opacity="0";

setTimeout(()=>{

intro.style.display="none";

},800);

music.play().catch(()=>{});

};

// ==============================
// RESIZE
// ==============================

window.addEventListener("resize",()=>{

camera.aspect=
window.innerWidth/window.innerHeight;

camera.updateProjectionMatrix();

renderer.setSize(

window.innerWidth,
window.innerHeight

);

});

// ========================================
// CORAZÓN DE PARTÍCULAS
// ========================================

const heartGeometry = new THREE.BufferGeometry();


const heartVertices = [];

function heartPoint(t){

const x = 16*Math.pow(Math.sin(t),3);

const y =
13*Math.cos(t)
-5*Math.cos(2*t)
-2*Math.cos(3*t)
-Math.cos(4*t);

return new THREE.Vector3(x,y,0);

}

for(let i=0;i<7000;i++){

const t=Math.random()*Math.PI*2;

const p=heartPoint(t);

const scale=Math.random()*2.8;

heartVertices.push(

p.x*scale,
p.y*scale,
(Math.random()-0.5)*8

);

}

heartGeometry.setAttribute(

"position",

new THREE.Float32BufferAttribute(
heartVertices,
3
)

);

const heartMaterial=new THREE.PointsMaterial({

color:0xff4da6,
size:2.5,
transparent:true,
opacity:.95

});

const heart=new THREE.Points(

heartGeometry,
heartMaterial

);

heart.scale.set(2.2,2.2,2.2);

scene.add(heart);

// ========================================
// AURA ROSADA
// ========================================

const glowGeometry = new THREE.SphereGeometry(38, 64, 64);

const glowMaterial = new THREE.MeshBasicMaterial({
    color: 0xff4da6,
    transparent: true,
    opacity: 0.08,
    side: THREE.BackSide
});

const glow = new THREE.Mesh(glowGeometry, glowMaterial);

scene.add(glow);
// ========================================
// FOTOS ORBITANDO
// ========================================

const textureLoader = new THREE.TextureLoader();

const photoFiles = [
    "assets/foto1.jpg",
    "assets/foto2.jpg",
    "assets/foto3.jpg",
    "assets/foto4.jpg",
    "assets/foto5.jpg",
    "assets/foto6.jpg"
];

const photoPlanes = [];

photoFiles.forEach((file,index)=>{

    const texture = textureLoader.load(file);

    const material = new THREE.MeshBasicMaterial({
        map:texture,
        transparent:true,
        side:THREE.DoubleSide
    });

  const geometry = new THREE.CircleGeometry(10,64);

const plane = new THREE.Mesh(
    geometry,
    material
);

    scene.add(plane);
    // ========================================
// BORDE NEÓN
// ========================================

const ringGeometry = new THREE.RingGeometry(
10.3,
11,
64
);

const ringMaterial = new THREE.MeshBasicMaterial({

color:0xff4da6,

transparent:true,

opacity:.95,

side:THREE.DoubleSide

});

const ring = new THREE.Mesh(
ringGeometry,
ringMaterial
);

scene.add(ring);

    photoPlanes.push({
        mesh:plane,
        angle:index*((Math.PI*2)/photoFiles.length),
        radius:70
    });

});

// ========================================
// CHISPAS
// ========================================

const sparkleGeometry = new THREE.BufferGeometry();

const sparkleVertices = [];

for(let i=0;i<3000;i++){

    const r = 45 + Math.random()*40;

    const a = Math.random()*Math.PI*2;

    const h = (Math.random()-0.5)*40;

    sparkleVertices.push(

        Math.cos(a)*r,
        h,
        Math.sin(a)*r

    );

}

sparkleGeometry.setAttribute(

    "position",

    new THREE.Float32BufferAttribute(
        sparkleVertices,
        3
    )

);

const sparkleMaterial = new THREE.PointsMaterial({

    color:0xffffff,
    size:1.4,
    transparent:true,
    opacity:.8

});

const sparkles = new THREE.Points(

    sparkleGeometry,
    sparkleMaterial

);

scene.add(sparkles);

// ==============================
// ANIMACIÓN
// ==============================

// ========================================
// COMETAS
// ========================================

const comets=[];

for(let i=0;i<8;i++){

    const geometry=new THREE.SphereGeometry(1.2,16,16);

    const material=new THREE.MeshBasicMaterial({
        color:0xffffff
    });

    const comet=new THREE.Mesh(
        geometry,
        material
    );

    comet.position.set(

        (Math.random()-0.5)*400,
        (Math.random()-0.5)*250,
        (Math.random()-0.5)*400

    );

    comet.userData.speed=
    0.4+Math.random()*0.8;

    scene.add(comet);

    comets.push(comet);

}

// ========================================
// ESTRELLAS FUGACES
// ========================================

setInterval(()=>{

    const star=new THREE.Mesh(

        new THREE.SphereGeometry(.8,8,8),

        new THREE.MeshBasicMaterial({
            color:0xffffff
        })

    );

    star.position.set(

        -250,

        Math.random()*180-90,

        Math.random()*180-90

    );

    scene.add(star);

    const speed=3+Math.random()*2;

    const id=setInterval(()=>{

        star.position.x+=speed;

        star.position.y-=speed*.25;

        if(star.position.x>250){

            clearInterval(id);

            scene.remove(star);

        }

    },16);

},2500);
// ========================================
// PARTÍCULAS DE AMOR
// ========================================

const loveParticles=[];

const loveGeometry=new THREE.SphereGeometry(.35,8,8);

const loveMaterial=new THREE.MeshBasicMaterial({
    color:0xff7ac8
});

for(let i=0;i<350;i++){

    const p=new THREE.Mesh(
        loveGeometry,
        loveMaterial
    );

    p.position.set(0,0,0);

    p.userData={

        angle:Math.random()*Math.PI*2,

        radius:Math.random()*8,

        speed:.2+Math.random()*1.2,

        height:(Math.random()-0.5)*6

    };

    scene.add(p);

    loveParticles.push(p);

}

let time=0;

function animate(){

    // ========================================
// MOVIMIENTO COMETAS
// ========================================

comets.forEach(c=>{

    c.position.x+=c.userData.speed;

    c.position.y-=c.userData.speed*0.2;

    if(c.position.x>220){

        c.position.x=-220;

        c.position.y=
        (Math.random()-0.5)*200;

    }

});

requestAnimationFrame(animate);

time+=0.002;

galaxy.rotation.y+=0.0004;

galaxy.rotation.x+=0.0001;

nebula.rotation.y+=0.0002;
heart.rotation.y+=0.003;

heart.rotation.x+=0.001;

const pulse =
2.2 +
Math.sin(time*4)*0.08;

heart.scale.set(
pulse,
pulse,
pulse
);

glow.rotation.y += 0.002;

glow.scale.set(
    pulse*1.08,
    pulse*1.08,
    pulse*1.08
);

sparkles.rotation.y += 0.0025;

sparkles.rotation.x += 0.0008;
camera.position.x=Math.sin(time)*8;

camera.position.y=Math.cos(time)*4;

camera.lookAt(0,0,0);
photoPlanes.forEach((photo,i)=>{

    photo.angle += 0.003;

    photo.mesh.position.x =
        Math.cos(photo.angle) * photo.radius;

    photo.mesh.position.z =
        Math.sin(photo.angle) * photo.radius;

    photo.mesh.position.y =
        Math.sin(time*2+i)*12;

    photo.mesh.lookAt(camera.position);

});

// ========================================
// PARTÍCULAS DEL CORAZÓN
// ========================================

loveParticles.forEach(p=>{

    p.userData.angle+=0.03;

    p.userData.radius+=0.05;

    p.position.x=
    Math.cos(p.userData.angle)*
    p.userData.radius;

    p.position.z=
    Math.sin(p.userData.angle)*
    p.userData.radius;

    p.position.y+=0.08;

    if(p.userData.radius>90){

        p.userData.radius=0;

        p.position.set(0,0,0);

        p.position.y=0;

    }

});
renderer.render(
scene,
camera
);

}

animate();