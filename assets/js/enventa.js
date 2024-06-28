const propiedades = [

    {
      nombre: "Apartamento de lujo en zona exclusiva",
      descripcion:
        "Este apartamento de lujo está ubicado en una exclusiva zona residencial",
      src: "https://fotos.perfil.com/2018/09/21/trim/950/534/nueva-york-09212018-366965.jpg",
      ubicacion: "123 Luxury av, Ricardo Goycochea, CA 45678",
      habitaciones: "4 habitaciones",
      baños: "4 baños",
      costo: "5.000",
      smoke: false,
      pets: false,
      piscina: false,
      estacionamiento:false,
      lavanderia:true,
    },
  
    {
      nombre: "Apartamento acogedor en la montaña",
      descripcion:
        "Este apartamento acogedor está situado en lo alto de una montaña con impresionantes vistas",
      src: "https://cdn.bioguia.com/embed/3d0fb0142790e6b90664042cbafcb1581427139/furgoneta.jpg",
      ubicacion: "789 carretera Austral, CA 23456",
      habitaciones: "2 habitaciones",
      baños: "1 baño",
      costo: "1.200",
      smoke: true,
      pets: true,
      piscina: false,
      estacionamiento:false,
      lavanderia:false,
    },
  
    {
      nombre: "Penthouse de lujo con terraza panorámica",
      descripcion:" Este penthouse de lujo ofrece una terraza panorámica con vistas espectaculares",
      src: "https://resizer.glanacion.com/resizer/fhK-tSVag_8UGJjPMgWrspslPoU=/768x0/filters:quality(80)/cloudfront-us-east-1.images.arcpublishing.com/lanacionar/CUXVMXQE4JD5XIXX4X3PDZAVMY.jpg",
      ubicacion: "km 45 Ruta 56 ,Caburga, CA 56789",
      habitaciones: "8 habitaciones",
      baños: "9 baños",
      costo: "4.500",
      smoke: true,
      pets: true,
      piscina: true,
      estacionamiento:true,
      lavanderia:true,
    },
    {
        nombre: "Casa moderna frente al lago",
        descripcion:"Casa de dos plantas y 300m2 ubicada a las orillas del lago Llanquihue, cuenta con hermosa vista ",
        src: "https://images.adsttc.com/media/images/5912/f28b/e58e/ceea/f900/0028/newsletter/3R.jpg?1494413944",
        ubicacion: "Camino encenada km 13, CA 542695",
        habitaciones: " 5 habitaciones",
        baños: " 4 baños",
        costo: "6.000",
        smoke: true,
        pets: true ,
        piscina: true ,
        estacionamiento: true,
        lavanderia: false,
        
      },
      {
        nombre: "Condominio a pocos kilometros del centro",
        descripcion:"Moderno y amplio condominio, con parques y facil acceso a pocos kilometro de la capital",
        src: "https://www.mexicanconsulting.com/wp-content/uploads/2018/12/Tipos-de-condominio.jpg",
        ubicacion: "Chamisero 8000, Altos de Colina CA 78512 ",
        habitaciones: " 3 habitaciones",
        baños: " 3 baños",
        costo: "4.500",
        smoke: true ,
        pets: true ,
        piscina: false,
        estacionamiento: true,
        lavanderia:false,
        
      },
      {
        nombre: "Departamento de lujo en barrio historico",
        descripcion:"Amplio y comodo departamento ubicado en el casco historico de la ciudad, a pocos pasos del metro",
        src: "https://imanquehue.com/content/uploads/departamento-piloto.png",
        ubicacion: "Diagonal Henriquez Peña, A204, CA 47214",
        habitaciones: " 2 habitaciones",
        baños: " 2 baños",
        costo: "4.500",
        smoke: false,
        pets: true,
        piscina: false ,
        estacionamiento: true,
        lavanderia: true,
        
      },
      {
        nombre: "Domo mono ambiente con excelente vista ",
        descripcion:"Domo mono ambiente en condominio cerrado, ubicado en la montaña con vista al Embalse del hielo, con buen acceso",
        src: "https://domosdelmaipo.cl/wp-content/uploads/2022/07/Domo-Madre-inicio-.jpg",
        ubicacion: "km 356 camino al cajon de Maipo, CA 468125",
        habitaciones: " 1 habitación ",
        baños: " 1 baño",
        costo: "2.600",
        smoke: true,
        pets: true,
        piscina: true,
        estacionamiento: true,
        lavanderia: false,
        
      },
      {
        nombre: "Departamentos cascada en medio de la naturalez",
        descripcion:"Modernos y sustentables departamentos ubicados en Saltos del Laja, para convivir con la naturaleza con las comodidades de la modernidad  ",
        src: "https://static.abc.es/media/2018/11/21/Intercontinental-Wonderland-kNpF--1240x698@abc-k6KE--940x529@abc.jpg",
        ubicacion: "Saltos de Laja, CA 651254",
        habitaciones: " 3 habitaciones ",
        baños: " 2 baños ",
        costo: "6.500",
        smoke: true ,
        pets: true ,
        piscina: true,
        estacionamiento: true,
        lavanderia:true,
        
      },
  ];

  // Función para generar una tarjeta
  const createCard = ({ nombre, descripcion, src, ubicacion, habitaciones, baños, costo, smoke, pets, piscina, estacionamiento, lavanderia }) => `
  <div class="card">
    <img src="${src}" class="card-img-top" alt="Imagen del departamento" />
    <div class="card-body">
      <h5 class="card-title">${nombre}</h5>
      <p class="card-text">${descripcion}</p>
      <p><i class="fas fa-map-marker-alt"></i> ${ubicacion}</p>
      <p>
        <i class="fas fa-bed"></i> ${habitaciones} |
        <i class="fas fa-bath"></i> ${baños}
      </p>
      <p><i class="fas fa-dollar-sign"></i> ${costo}</p>
      <p class="${smoke ? 'text-success' : 'text-danger'}">
        <i class="fas fa-smoking"></i> ${smoke ? 'Permitido fumar' : 'No permitido fumar'}
      </p>
      <p class="${pets ? 'text-success' : 'text-danger'}">
        <i class="fas fa-paw"></i> ${pets ? 'Mascotas permitidas' : 'Mascotas no permitidas'}
      </p>
      <p class="${piscina ? 'text-success' : 'text-danger'}">
        <i class="fas fa-swimmer"></i> ${piscina ? 'Piscina disponible' : 'Sin piscina'}
      </p>
      <p class="${estacionamiento ? 'text-success' : 'text-danger'}">
        <i class="fas fa-parking"></i> ${estacionamiento ? 'Estacionamiento disponible' : 'Sin estacionamiento'}
      </p>
      <p class="${lavanderia ? 'text-success' : 'text-danger'}">
        <i class="fas fa-washer"></i> ${lavanderia ? 'Lavandería disponible' : 'Sin lavandería'}
      </p>
    </div>
  </div>
`;

// Seleccionar el contenedor de las tarjetas
const cardContainer = document.getElementById('card-container');
let template = '';
for (const apartment of propiedades) {
  template += createCard(apartment);
}

cardContainer.innerHTML = template;