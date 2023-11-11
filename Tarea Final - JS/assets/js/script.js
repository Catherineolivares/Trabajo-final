async function ConvertirMoneda2() {
  try {
    let valorCLP = document.querySelector("#valorCLP").value;
    let moneda = document.getElementById("moneda").value;
    const boton = document.getElementById("boton").value;
    let res = await fetch("https://mindicador.cl/api/");
    let ConvertirMoneda = await res.json();
    // si la moneda es dolar , buscar en el objeto dolar
    if (moneda == "dolar") {
      let valor = ConvertirMoneda.dolar.valor;
      let ConvertirMoneda2 = valorCLP / valor;
      let ConvertirMoneda3 = ConvertirMoneda2.toFixed(2);
      document.getElementById("result").innerHTML = "$" + ConvertirMoneda3;
    }
    // si la moneda es euro , buscar en el objeto euro
    if (moneda == "euro") {
      let valor = ConvertirMoneda.euro.valor;
      let ConvertirMoneda2 = valorCLP / valor;
      let ConvertirMoneda3 = ConvertirMoneda2.toFixed(2);
      document.getElementById("result").innerHTML = "$" + ConvertirMoneda3;
    }
  
    Grafica();
   
  } catch (error) {
    console.error(error);
    document.getElementById("result").innerHTML = `Error: ${error.message}`;
  }
}

async function Grafica() {


  let moneda = document.getElementById("moneda").value;
  async function getAndCreateDataToChart() {
    const res = await fetch("https://mindicador.cl/api/"+moneda);
    const pikachu = await res.json();
    const labels = pikachu.serie.map((serie) => {
    let horizonte= serie.fecha;
    // quitamos los ultimos 10 caracteres
    let horizonte2 = horizonte.slice(0, -14);
    return horizonte2;

    });
    const data = pikachu.serie.map((serie) => {
    return serie.valor;
    }
    );

    const datasets = [
    {
      label: "Historial de " + moneda,
      borderColor: "rgb(255, 99, 132)",
      data
      }
      ];
      return { labels, datasets };
      }
      async function renderGrafica() {
      const data = await getAndCreateDataToChart();
      const config = {
      type: "line",
      data: {
      labels: data.labels,
      datasets: data.datasets
      }
      };
      
      const myChart = document.getElementById("myChart");
     
     
      myChart.style.backgroundColor = "white";
     
      

      new Chart(myChart, config);
      }
      
      renderGrafica();
     

      
  
}

