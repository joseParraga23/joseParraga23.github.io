const tarot = [
  {
    nombre: "El Mago",
    AspectoNegativo:
      "Demasiado intelectual, escéptico, tendencia a fingir, indiferente engañoso",
    PalabraClave:
      "Flexibilidad, intercambio de opiniones, potencial, independiente",
    consejo: "Aclara tus ideas. Confía en tu memoria. Muestra tus aptitudes.",
    img: "../assets/multimedia/img/cartas/01ElMago.png",
    id: 1,
  },
  {
    nombre: "La Sacerdotisa",
    AspectoNegativo:
      "Supersticiosa, fría, fantasías incontrolables, papel pasivo",
    PalabraClave: "Sentido común, buena memoria, información, enérgica, neutra",
    consejo:
      "Estudia las flores, gemas y sus poderes curativos. No te entrometas en la vida de los demás. Pasa un día contemplando el mar.",
    img: "../assets/multimedia/img/cartas/02LaSacerdotisa.png",
    id: 2,
  },
  {
    nombre: "La Emperatriz",
    AspectoNegativo:
      "Falta de firmeza, tímida, miedo a envejecer, ofendida o rechazada",
    PalabraClave:
      "Empatía, bondad, sabiduría, cariño, familia, embarazo, simpatía.",
    consejo:
      "Sé consciente de las necesidades de su cuerpo. Cultiva tu creatividad. Brinda amor a todos.",
    img: "../assets/multimedia/img/cartas/03LaEmperatriz.png",
    id: 3,
  },
  {
    nombre: "El Emperador",
    AspectoNegativo:
      "Riguroso, vanidoso, dictatorial, intolerante, extremista, impaciente, egoísta, rivalidad",
    PalabraClave:
      "Perseverancia, poder, deporte, competición, valiente, directo, autoestima.",
    consejo:
      "Sé trabajador y fiel a sus objetivos. No te subestimes. Lucha por tu independencia.",
    img: "../assets/multimedia/img/cartas/04ElEmperador.png",
    id: 4,
  },
  {
    nombre: "El Hierofante",
    AspectoNegativo: "Sermoneador, inmoral, inflexible, hipócrita, ingrato.",
    PalabraClave:
      "Jerarquía, ética, vocación, honores, fraternidad, comunidad.",
    consejo:
      "Aprende a escuchar. Da crédito a los demás. Crea tus propios ritos para ganar coraje y eliminar los miedos.",
    img: "../assets/multimedia/img/cartas/05ElHierofante.png",
    id: 5,
  },
  {
    nombre: "Los Enamorados",
    AspectoNegativo:
      "Promiscuidad, inconstante, manipulador, falta de compromiso.",
    PalabraClave:
      "Relación intensa, intimidad, proximidad, considerado, fidelidad, amistad, unión.",
    consejo:
      "Evita encuentros inadecuados cuando buscas un amante. Habla abiertamente con tu pareja.",
    img: "../assets/multimedia/img/cartas/06LosEnamorados.png",
    id:6,
  },
  {
    nombre: "El Carro",
    AspectoNegativo:
      "Humor variable, desconectado, confusión, demasiado protector, distraído.",
    PalabraClave:
      "Confrontación, resolución, vínculo, maternal, selectivo, fortaleza.",
    consejo:
      "Convierte tu espacio en un lugar seguro. Aprende a concluir tareas. Protege tu cuerpo y cabeza del sol.",
    img: "../assets/multimedia/img/cartas/07ElCarro.png",
    id:7,
  },
  {
    nombre: "La Justicia",
    AspectoNegativo:
      "Indecisión, injusticia, enfermedad, caos, sufrimiento, prisión, desventaja.",
    PalabraClave:
      "Reajuste, diplomático, testigo, culpa, pacto, pena, castigo, sentencia.",
    consejo:
      "Sé imparcial y objetivo. Lucha contra las injusticias. Busca el equilibrio y la igualdad.",
    img: "../assets/multimedia/img/cartas/08LaJusticia.png",
    id:8,
  },
  {
    nombre: "El Ermitaño",
    AspectoNegativo:
      "Frialdad, extraño, soledad, insociable, aislamiento, rechaza la ayuda.",
    PalabraClave:
      "Estimación, valoración, modesto, pensador, reservado, selectivo.",
    consejo:
      "Echa una mano cuando sea necesario. No perjudique a las personas de buena voluntad. Busque la bondad en la gente.",
    img: "../assets/multimedia/img/cartas/09ElErmitaño.png",
    id:9,
  },
  {
    nombre: "La Rueda de la Fortuna",
    AspectoNegativo: "Demasiado optimista, altibajos, exceso, bebe en exceso.",
    PalabraClave:
      "Ciclos, caridad, obsequio, abundancia, prueba de fe, sociable, alegre.",
    consejo:
      "Valora tu buena fortuna. Desea buena suerte a los demás. No prometas lo que no puedas cumplir.",
    img: "../assets/multimedia/img/cartas/10LaRuedadelaFortuna.png",
    id:10,
  },
  {
    nombre: "La Fuerza",
    AspectoNegativo: "Vanidad, lujuria, agresividad, impulsividad",
    PalabraClave:
      "Compasión, generosidad, coraje, orgullo, creatividad, lealtad",
    consejo:
      "Enciende una vela para renovar tus vínculos con el fuego. Pon tus conocimientos en acción.",
    img: "../assets/multimedia/img/cartas/11LaFuerza.png",
    id:11,
  },
  {
    nombre: "El Ahorcado",
    AspectoNegativo: "Influenciable, maleable, resignado, descuidado, confuso, victimista, esquivo.",
    PalabraClave:
      "Obediente, visiones, desinterés, bruma, calma, sacrificio.",
    consejo:
      "No te dejes influenciar por la opinión pública. No permitas que te digan que hacer o pensar. Busca la verdad, no escuches chismorreos.",
    img: "../assets/multimedia/img/cartas/12ElAhorcado.png",
    id:12,
  },
  {
    nombre: "La Muerte",
    AspectoNegativo: "Agotamiento, celoso, egoísmo, apatía, acumulación, tóxico.",
    PalabraClave:
      "Secreto, resurrección, enigma, profundidad, dolor y placer, terror, cambio.",
    consejo:
      "No temas el cambio. Si fracasas, inténtalo de nuevo. Aprende a superar las pérdidas y sigue adelante.",
    img: "../assets/multimedia/img/cartas/13LaMuerte.png",
    id:13,
  },
  {
    nombre: "La Templanza",
    AspectoNegativo: "Atascada en el pasado, sensible al dolor, se resiste a aprender",
    PalabraClave:
      "Honrada, enérgica, iluminación, fusión, misión",
    consejo:
      "Practica la autocorrección. Si no puedes hacerlo sola busca ayuda.",
    img: "../assets/multimedia/img/cartas/14LaTemplanza.png",
    id:14,
  },
  {
    nombre: "La Templanza",
    AspectoNegativo: "Atascada en el pasado, sensible al dolor, se resiste a aprender",
    PalabraClave:
      "Honrada, enérgica, iluminación, fusión, misión",
    consejo:
      "Practica la autocorrección. Si no puedes hacerlo sola busca ayuda.",
    img: "../assets/multimedia/img/cartas/14LaTemplanza.png",
    id:14,
  },
  {
    nombre: "El Diablo",
    AspectoNegativo: "Ignorancia, codicia, intolerante, odio, represión, negación, terco, perverso",
    PalabraClave:
      "Pensante, reflejo, compara, futuro, respeto, prudente, disciplinado, reservado",
    consejo:
      "Aprende a reírte de tus problemas. Sé amable contigo mismo y los demás. Aprende a amar.",
    img: "../assets/multimedia/img/cartas/15ElDiablo.png",
    id:15,
  },
  {
    nombre: "La Torre",
    AspectoNegativo: "Vandalismo, confusión, error, ruina, caída, construir.",
    PalabraClave:
      "Repentina, agitación, advertencia, sorprendente, impetuosa.",
    consejo:
      "Debes estar preparado para cuando surjan problemas. No reprimas la ira, dirígela. Cambia las viejas formas.",
    img: "../assets/multimedia/img/cartas/16LaTorre.png",
    id:16,
  },
  {
    nombre: "La Estrella",
    AspectoNegativo: "Racismo, dictadura, impersonal, represión, desconexión.",
    PalabraClave:
      "Ancla, avión, innovadores, ideales, comunión, posibilidades.",
    consejo:
      "Aprende sobre la agricultura orgánica. Restablece la paz. Aprende a reciclar y reduce los desechos.",
    img: "../assets/multimedia/img/cartas/17LaEstrella.png",
    id:17,
  },
  {
    nombre: "La Luna",
    AspectoNegativo: "Enfermedades psicosomáticas, demasiado sensible, locura, delirio, vulnerable, angustia.",
    PalabraClave:
      "Sacrificio, maternal, sensibilidad, incitante.",
    consejo:
      "Sé consciente de tus reacciones y sentimientos. Analiza los sueños. Recuerda que tus miedos no se cumplirán.",
    img: "../assets/multimedia/img/cartas/18LaLuna.png",
    id:18,
  },
  {
    nombre: "El Sol",
    AspectoNegativo: "Quemador, cáncer de piel, ceguera, desperdicio de energía.",
    PalabraClave:
      "Auténtico, belleza, luminoso, vivo, armonioso, amor, definitivo.",
    consejo:
      "No abuses del sol. La vía luminosa conduce a la verdad.",
    img: "../assets/multimedia/img/cartas/19ElSol.png",
    id:19,
  },
  {
    nombre: "El Juicio",
    AspectoNegativo: "Manipulador, fobia, obsesión, fanático.",
    PalabraClave:
      "Decisivo, alteración, reforma, análisis, presión",
    consejo:
      "Sé más flexible. No juzgues a los demás ni a ti mismo.",
    img: "../assets/multimedia/img/cartas/20ElJuicio.png",
    id:20,
  },
  {
    nombre: "El Mundo",
    AspectoNegativo: "Martirio, cargas anteriores, falta de confianza.",
    PalabraClave:
      "Trabajo, deber, historia, sabio, fiable.",
    consejo:
      "Ayuda a quien te ha ayudado. Muéstrate agradecido por tu éxito. Actúa con confianza.",
    img: "../assets/multimedia/img/cartas/21ElMundo.png",
    id:21,
  },
  {
    nombre: "El Loco",
    AspectoNegativo: "	Irregular, caótico, irresponsable, ingenuo.",
    PalabraClave:
      "Absurdo, versátil, espontáneo, corazón joven, imprevisible",
    consejo:
      "Rompe con la rutina. Busca intereses nuevos. Habla con gente nueva.",
    img: "../assets/multimedia/img/cartas/22ElLoco.png",
    id:22,
  },
];
