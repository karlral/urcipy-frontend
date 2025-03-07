let ProgramsDataService = {
  getData: function () {
    return [
      { image: "trail.png", heading: "Trail Running", details: "Carrera de senderos, carrera de montaña o también conocida con el anglicismo trail running, es un deporte que consiste en correr por senderos de montaña." },
      { image: "mtb.png", heading: "MTB", details: "Las competencias de ciclismo de montaña (MTB) son pruebas de competición que se realizan en circuitos naturales. Entre las pruebas más conocidas se encuentran el cross-country" },
      { image: "autoloco.png", heading: "Auto loco", details: "Las competencias de coches artesanales son eventos en los que participan vehículos hechos a mano, sin motor, que se impulsan por la fuerza de la gravedad" },
      { image: "running.png", heading: "Running", details: "El running es un deporte que consiste en correr de forma continua a un ritmo mayor que el de caminar" },
    ];
  }
};

export default ProgramsDataService.getData(); 

