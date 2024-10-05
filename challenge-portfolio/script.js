let projectHeaders = document.getElementsByClassName("project-header");

document.getElementById("en").onclick = function () {
  /*hero*/
  document.getElementById("hero_subtitle").innerHTML =
    "Software Developer /<br/>Visual Communication Designer";
  document.getElementById("hero2_text").innerHTML =
    "Hello, I'm Roman! <br/><br/>👨‍💻 Software Developer and Visual Communication Designer from Argentina, passionate about creating high-impact experiences in web development and multimedia design.<br/><br/>🎓 I completed a Bachelor’s Degree in Visual Communication Design from the Universidad Nacional del Litoral, with specializations in Web Development and Programming. Currently, I am pursuing a Higher Technician Degree in Software Development, deepening my skills in software design, construction, verification, debugging, optimization, and maintenance.<br/><br/>💡 My approach is based on proactivity, teamwork, effective communication, and adaptability, with a commitment to continuous learning to face challenges and achieve goals.<br/><br/>🚀 Ready to bring my full potential and experience to your team. Let’s connect!";

  /*navbar y títulos*/
  document.getElementById("nav_inicio").innerHTML = "Home";
  document.getElementById("nav_experiencia").innerHTML = "Experience";
  document.getElementById("nav_habilidades").innerHTML = "Skills";
  document.getElementById("nav_proyectos").innerHTML = "Projects";
  document.getElementById("nav_contacto").innerHTML = "Contact";
  document.getElementById("nav_downloads").innerHTML = "Downloads";
  document.getElementById("title_experiencia").innerHTML = "Experience";
  document.getElementById("title_habilidades").innerHTML = "Skills";
  document.getElementById("title_proyectos").innerHTML = "Completed projects";
  document.getElementById("title_datos").innerHTML = "Contact";
  document.getElementById("title_downloads").innerHTML = "Downloads";

  /*experiencia*/
  document.getElementById("exp_academica").innerHTML = "ACADEMIC";
  document.getElementById("exp_cursos").innerHTML = "COURSES";
  document.getElementById("exp_laboral").innerHTML = "WORK";
  document.getElementById("exp_tecnicatura").innerHTML =
    "Higher Technician Degree in Software Development";
  document.getElementById("anio_tecnicatura").innerHTML = "2024 ~ In progress";
  document.getElementById("exp_freelance_title").innerHTML =
    "Freelance professional";
  document.getElementById("anio_freelance").innerHTML = "2018 ~ Present";
  document.getElementById("exp_universidad").innerHTML =
    "Bachelor in Visual Communication Design. University Degree. Facultad de Arquitectura, Diseño y Urbanismo.</p>";
  document.getElementById("anio_universidad").innerHTML =
    "2005 ~ Pending thesis";
  document.getElementById("exp_argentina").innerHTML =
    "■ #SeProgramar course (INTI)<br>■ Front-end Development (Ticmas)<br>■ Android App Development (Ticmas)<br>■ Front-end Development (Educado en Argentina)<br>■ English Level 8 B1.2 MCER (CUI-UBA)";
  document.getElementById("exp_motion_title").innerHTML =
    "Postgraduate course FADU UNL";
  document.getElementById("exp_motion").innerHTML =
    "Motion Graphics Design: From graphic design to motion design.";
  document.getElementById("exp_fusa").innerHTML =
    "Freelance multimedia design.";
  document.getElementById("exp_freelance").innerHTML =
    "Software development and multimedia design.";
  document.getElementById("exp_seal").innerHTML =
    "Administration and invoincing in the plastic products industry.";
  document.getElementById("exp_zona").innerHTML =
    "Sales and technical service of video games and computing.";
  document.getElementById("exp_codoacodo").innerHTML =
    "■ React JS specialization course<br/>■ Soft Skills Course<br/>■ Full Stack Web Development - Node.JS";
  document.getElementById("exp_pixi").innerHTML =
    "Game development with Pixi.JS";
  document.getElementById("exp_react").innerHTML =
    "Application development with React and React Native";

  /*habilidades*/
  document.getElementById("hab_desarrollo").innerHTML = "DEVELOPMENT";
  document.getElementById("hab_diseño").innerHTML = "DESIGN";
  document.getElementById("hab_musica").innerHTML = "OTHERS";
  document.getElementById("hab_identidadvisual").innerHTML = "Visual identity";
  document.getElementById("hab_diseñowebyapps").innerHTML = "Web design & Apps";
  document.getElementById("hab_interfazdeusuario").innerHTML = "User interface";
  document.getElementById("hab_diseñodeinformacion").innerHTML =
    "Infomation design";
  document.getElementById("hab_diseñoeditorial").innerHTML = "Editorial design";
  document.getElementById("hab_proactividad").innerHTML = "Proactivity";
  document.getElementById("hab_equipo").innerHTML = "Teamwork";
  document.getElementById("hab_comunicacion").innerHTML =
    "Effective communication";
  document.getElementById("hab_adaptabilidad").innerHTML = "Adaptability";
  document.getElementById("hab_musicaoriginal").innerHTML = "Original music";
  document.getElementById("hab_efectosdesonido").innerHTML = "Sound effects";
  document.getElementById("hab_vst").innerHTML = "VST Virtual instruments";
  /*proyectos*/

  document.getElementById("proyecto_pino").innerHTML = "Platform game";
  document.getElementById("proyecto_rockquiz").innerHTML =
    "Music, puzzle & quiz game";
  document.getElementById("proyecto_spacewars").innerHTML = "Shoot'em up game";
  document.getElementById("proyecto_mostrimaker").innerHTML =
    "Global Game Jam 2024 game";
  document.getElementById("proyecto_futumag").innerHTML =
    "Digital magazine about design and technology";
  document.getElementById("proyecto_wesound").innerHTML =
    "Social network for collab music production";
  document.getElementById("proyecto_pirogram").innerHTML =
    "Visual identity for design studio";
  document.getElementById("proyecto_seal").innerHTML = "ID, prints & web";
  document.getElementById("proyecto_bienal").innerHTML =
    "Animation and original music";
  // document.getElementById("proyecto_musicalexperiments").innerHTML =
  //   "Collection of original compositions ";
  document.getElementById("proyecto_weather").innerHTML =
    "Website to check the weather";

  document.getElementById("+desarrollo").innerHTML =
    "Development projects on GitHub";
  document.getElementById("+diseño").innerHTML = "Design projects on Behance";

  for (let i = 0; i < projectHeaders.length; i++) {
    // Obtén el contenido actual del elemento
    let currentContent = projectHeaders[i].innerHTML;

    // Realiza los reemplazos necesarios
    let updatedContent = currentContent
      .replace(/Diseño/g, "Design")
      .replace(/Desarrollo/g, "Development")
      .replace(/Música/g, "Music");

    // Asigna el nuevo contenido al elemento
    projectHeaders[i].innerHTML = updatedContent;
  }

  /*descargas*/
  document.getElementById("certificates").innerHTML = "📄 Certificates PDF";

  /*contacto*/
  document.getElementById("boton_enviar").value = "Send";
  document.getElementById("form_nombre").placeholder = "Name:";
  document.getElementById("form_mensaje").placeholder = "Message:";
};

document.getElementById("es").onclick = function () {
  /*hero*/
  document.getElementById("hero_subtitle").innerHTML =
    "Desarrollador de Software /<br/>Diseñador de Comunicación Visual";
  document.getElementById("hero2_text").innerHTML =
    "¡Hola, soy Román!<br /><br />👨‍💻 Desarrollador de Software y Diseñador de Comunicación Visual de Argentina, apasionado por crear experiencias de alto impacto en desarrollo web y diseño multimedia. <br /><br /> 🎓 Realicé la Licenciatura en Diseño de Comunicación Visual en la Universidad Nacional del Litoral, con especializaciones en Desarrollo Web y Programación. Actualmente, estoy cursando la Tecnicatura Superior en Desarrollo de Software, profundizando mis habilidades en el diseño, construcción, verificación, depuración, optimización y mantenimiento de software. <br /><br /> 💡 Mi enfoque se basa en la proactividad, el trabajo en equipo, la comunicación efectiva y la adaptabilidad, con una formación constante para afrontar desafíos y alcanzar objetivos. <br /><br />🚀 Listo para aportar todo mi potencial y experiencia a tu equipo. ¡Conectemos!";

  /*navbar y títulos*/
  document.getElementById("nav_inicio").innerHTML = "Inicio";
  document.getElementById("nav_experiencia").innerHTML = "Experiencia";
  document.getElementById("nav_habilidades").innerHTML = "Habilidades";
  document.getElementById("nav_proyectos").innerHTML = "Proyectos";
  document.getElementById("nav_contacto").innerHTML = "Contacto";
  document.getElementById("nav_downloads").innerHTML = "Descargas";
  document.getElementById("title_experiencia").innerHTML = "Experiencia";
  document.getElementById("title_habilidades").innerHTML = "Habilidades";
  document.getElementById("title_proyectos").innerHTML = "Proyectos realizados";
  document.getElementById("title_datos").innerHTML = "Contacto";
  document.getElementById("title_downloads").innerHTML = "Descargas";

  /*experiencia*/

  document.getElementById("exp_academica").innerHTML = "ACADÉMICA";
  document.getElementById("exp_cursos").innerHTML = "CURSOS";
  document.getElementById("exp_laboral").innerHTML = "LABORAL";
  document.getElementById("exp_tecnicatura").innerHTML =
    "Tecnicatura Superior en Desarrollo de Software";
  document.getElementById("anio_tecnicatura").innerHTML = "2024 ~ En curso";
  document.getElementById("exp_freelance_title").innerHTML =
    "Profesional independiente";
  document.getElementById("anio_freelance").innerHTML = "2018 ~ Presente";
  document.getElementById("exp_universidad").innerHTML =
    "Licenciatura en Diseño de Comunicación Visual. Carrera de grado. Facultad de Arquitectura, Diseño y Urbanismo.</p>";
  document.getElementById("anio_universidad").innerHTML =
    "2005 ~ Tesina pendiente";
  document.getElementById("exp_argentina").innerHTML =
    "■ Curso #SeProgramar (INTI)<br>■ Desarrollo Front-end (Ticmas)<br>■ Desarrollo de aplicaciones Android (Ticmas)<br>■ Desarrollo Front-end (Educado en Argentina)<br>■ Inglés Nivel 8 B1.2 MCER (CUI-UBA)";
  document.getElementById("exp_motion_title").innerHTML =
    "Curso de Posgrado FADU UNL";
  document.getElementById("exp_motion").innerHTML =
    "Motion Graphics Design: Del diseño gráfico al diseño en movimiento.";
  document.getElementById("exp_fusa").innerHTML =
    "Diseño multimedial  independiente.";
  document.getElementById("exp_freelance").innerHTML =
    "Desarrollo de software y diseño multimedial.";
  document.getElementById("exp_seal").innerHTML =
    "Administración y facturación en industria de productos plásticos.";
  document.getElementById("exp_zona").innerHTML =
    "Ventas y servicio técnico de videojuegos e informática.";
  document.getElementById("exp_codoacodo").innerHTML =
    "■ Curso de especialización React JS<br/>■ Curso de Habilidades Blandas<br/>■ Full Stack Desarrollo Web - Node.JS";
  document.getElementById("exp_pixi").innerHTML =
    "Desarrollo de videojuegos con Pixi.JS";
  document.getElementById("exp_react").innerHTML =
    "Desarrollo de aplicaciones con React y React Native";

  /*habilidades*/
  document.getElementById("hab_desarrollo").innerHTML = "DESARROLLO";
  document.getElementById("hab_diseño").innerHTML = "DISEÑO";
  document.getElementById("hab_musica").innerHTML = "OTRAS";
  document.getElementById("hab_identidadvisual").innerHTML = "Identidad visual";
  document.getElementById("hab_diseñowebyapps").innerHTML = "Diseño web y Apps";
  document.getElementById("hab_interfazdeusuario").innerHTML =
    "Interfaz de usuario";
  document.getElementById("hab_diseñodeinformacion").innerHTML =
    "Diseño de información";
  document.getElementById("hab_diseñoeditorial").innerHTML = "Diseño editorial";
  document.getElementById("hab_proactividad").innerHTML = "Proactividad";
  document.getElementById("hab_equipo").innerHTML = "Trabajo en equipo";
  document.getElementById("hab_comunicacion").innerHTML =
    "Comunicación efectiva";
  document.getElementById("hab_adaptabilidad").innerHTML = "Adaptabilidad";
  document.getElementById("hab_musicaoriginal").innerHTML = "Música original";
  document.getElementById("hab_efectosdesonido").innerHTML =
    "Efectos de sonido";
  document.getElementById("hab_vst").innerHTML = "Instrumentos virtuales VST";

  /*descargas*/
  document.getElementById("certificates").innerHTML = "📄 Certificados PDF";

  /*proyectos*/
  document.getElementById("proyecto_pino").innerHTML =
    "Videojuego de plataformas";
  document.getElementById("proyecto_rockquiz").innerHTML =
    "Videojuego de música, puzzle y quiz";
  document.getElementById("proyecto_spacewars").innerHTML =
    "Videojuego shoot'em up";
  document.getElementById("proyecto_mostrimaker").innerHTML =
    "Juego para la Global Game Jam 2024";
  document.getElementById("proyecto_futumag").innerHTML =
    "Magazine digital sobre diseño y tecnología";
  document.getElementById("proyecto_wesound").innerHTML =
    "Red social de producción musical colaborativa";
  document.getElementById("proyecto_pirogram").innerHTML =
    "Identidad visual para estudio de diseño";
  document.getElementById("proyecto_seal").innerHTML =
    "Identidad, impresos y web";
  document.getElementById("proyecto_bienal").innerHTML =
    "Animación y música original";
  document.getElementById("proyecto_weather").innerHTML =
    "Sitio web para consultar el clima";

  document.getElementById("+desarrollo").innerHTML =
    "Proyectos de Desarrollo en GitHub";
  document.getElementById("+diseño").innerHTML =
    "Proyectos de Diseño en Behance";

  for (let i = 0; i < projectHeaders.length; i++) {
    // Obtén el contenido actual del elemento
    let currentContent = projectHeaders[i].innerHTML;

    // Realiza los reemplazos necesarios
    let updatedContent = currentContent
      .replace(/Design/g, "Diseño")
      .replace(/Development/g, "Desarrollo")
      .replace(/Music/g, "Música");

    // Asigna el nuevo contenido al elemento
    projectHeaders[i].innerHTML = updatedContent;
  }

  /*contacto*/
  document.getElementById("boton_enviar").value = "Enviar";
  document.getElementById("form_nombre").placeholder = "Nombre:";
  document.getElementById("form_mensaje").placeholder = "Mensaje:";
};

let check = document.querySelector("#check");

document.getElementById("nav_inicio").onclick = function () {
  check.checked = false;
};
document.getElementById("nav_experiencia").onclick = function () {
  check.checked = false;
};
document.getElementById("nav_habilidades").onclick = function () {
  check.checked = false;
};
document.getElementById("nav_proyectos").onclick = function () {
  check.checked = false;
};
document.getElementById("nav_contacto").onclick = function () {
  check.checked = false;
};
document.getElementById("nav_downloads").onclick = function () {
  check.checked = false;
};
