window.addEventListener("DOMContentLoaded", () => {
  const horoscopes = [
    { name: "Aries", dates: "21 Mar - 19 Abr", color: "#E63946", prediction: "Probablemente, se sentirá presionado entre la diversión y el deber en esta jornada. Lo mejor será que se entregue a la soledad y ponga en orden sus ideas.", image: "img/aries.png" },
    { name: "Tauro", dates: "20 Abr - 20 May", color: "#4CAF50", prediction: "Comprenda que no se puede resolver todo en un solo día. Empiece a ser más paciente y deje que trascurra el tiempo necesario para que todo se acomode.", image: "img/tauro.png" },
    { name: "Géminis", dates: "21 May - 20 Jun", color: "#FFEB3B", prediction: "Deje de seguir vacilando y empiece a actuar sin demora, ya que será un período de decisiones. No deje para después lo que puede y quiere hacer hoy.", image: "img/geminis.png" },
    { name: "Cáncer", dates: "21 Jun - 22 Jul", color: "#B0BEC5", prediction: "No desvíe por ninguna razón su visión, de lo contrario, no podrá cumplir con los objetivos que se propuso para su vida. Si se lo propone, conseguirá todo.", image: "img/cancer.png" },
    { name: "Leo", dates: "23 Jul - 22 Ago", color: "#FFB300", prediction: "Sepa que aislarse no le traerá ningún beneficio, no permita que su timidez le gane. No es momento para reprimirse, intente abrirse a los demás.", image: "img/leo.png" },
    { name: "Virgo", dates: "23 Ago - 22 Sep", color: "#8D6E63", prediction: "Resérvese un par de horas en este día para compartirlas con sus amigos o seres queridos, ya que se sentirá atraído por la vida social. No se quede encerrado.", image: "img/virgo.png" },
    { name: "Libra", dates: "23 Sep - 22 Oct", color: "#F48FB1", prediction: "No es momento para detenerse. Prepárese, ya que se sentirá pleno de vitalidad y confianza, todo lo que emprenda en esta jornada tendrá un final exitoso.", image: "img/libra.png" },
    { name: "Escorpio", dates: "23 Oct - 21 Nov", color: "#600000", prediction: "Durante esta jornada, sentirá una gran contradicción entre sus propios deseos y lo que tiene, no se ahogue en ellos. Crea en usted mismo y todo saldrá como esperaba.", image: "img/escorpion.png" },
    { name: "Sagitario", dates: "22 Nov - 21 Dic", color: "#673AB7", prediction: "Transitará por un período optimo para comenzar con una renovación en su vida personal. No olvide aceptarse tal cual es e incremente su autoestima.", image: "img/sagitario.png" },
    { name: "Capricornio", dates: "22 Dic - 19 Ene", color: "#263238", prediction: "Comenzará el día deseando estar en soledad. No piense que algo funciona mal, sepa que se trata de una necesidad de reencontrarse con usted mismo.", image: "img/capricornio.png" },
    { name: "Acuario", dates: "20 Ene - 18 Feb", color: "#00B0FF", prediction: "Deje de exponer tanto su vida privada a los demás, ya que las decisiones deberá tomarla usted mismo. Hoy su inseguridad le afectará en todos los planos.", image: "img/acuario.png" },
    { name: "Piscis", dates: "19 Feb - 20 Mar", color: "#4DB6AC", prediction: "Sepa que pronto recuperará la autoestima y la seguridad en si mismo, así podrá alcanzar el éxito en sus próximos emprendimientos y proyectos planeados.", image: "img/piscis.png" }
  ];

  const container = document.querySelector(".container-el");
  
  horoscopes.forEach(horoscope => {
    const canvasWrapper = document.createElement("div");
    canvasWrapper.style.display = "inline-block";
    canvasWrapper.style.width = "33.33%";
    canvasWrapper.style.padding = "10px";
    canvasWrapper.style.boxSizing = "border-box";
    
    const canvas = document.createElement("canvas");
    canvas.className = "horoscope-canvas";
    canvas.width = 200;
    canvas.height = 220;
    canvas.style.borderRadius = "15px";
    canvas.style.transition = "transform 0.3s ease";
    canvas.style.cursor = "pointer";
    canvas.style.display = "block";
    
    // Hover effect
    canvas.addEventListener("mouseenter", () => {
      canvas.style.transform = "scale(1.1)";
    });
    
    canvas.addEventListener("mouseleave", () => {
      canvas.style.transform = "scale(1)";
    });
    
    const ctx = canvas.getContext("2d");
    // crea y carga imagen
    const img = new Image();
    img.src = horoscope.image;

    img.onload = () => {
      // 1. Dibujar fondo
      ctx.fillStyle = horoscope.color;
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      ctx.drawImage(img, 145, 12, 45, 45);
      ctx.fillStyle = "#000000";
      ctx.font = "bold 24px serif";
      ctx.fillText(horoscope.name, 20, 40);
      ctx.font = "14px serif";
      ctx.fillText(horoscope.dates, 20, 65);
      ctx.font = "12px serif";
      //Envolver texto de prediccion 
      const maxWidth = 160;
      const lineHeight = 15;
      const words = horoscope.prediction.split(" ");
      let line = "";
      let y = 90;
      
      words.forEach(word => {
        const testLine = line + word + " ";
        const metrics = ctx.measureText(testLine);
        if (metrics.width > maxWidth && line) {
          ctx.fillText(line, 20, y);
          line = word + " ";
          y += lineHeight;
        } else {
          line = testLine;
        }
      });
      ctx.fillText(line, 20, y);
    };

    canvasWrapper.appendChild(canvas);
    container.appendChild(canvasWrapper);
  });
});