const number= document.querySelector("number").value;
const ConvertirMoneda = document.querySelector("ConvertirMoneda").value;
const boton = document.querySelector("boton").value;


async function ConvertirMoneda() {
  try {
      
    // Realiza la consulta a mindicador.cl para obtener los tipos de cambio

   // const response = await axios.get(`https://mindicador.cl/api/${currency}`);
        let res = await fetch("https://mindicador.cl/api/");
       // const exchangeRate = response.data.serie[0].valor;
       let ConvertirMoneda = await res.json();
       return ConvertirMoneda;
       console.log(data);



       
    // Calcula la conversión
    const result = amount * exchangeRate;

    // Muestra el resultado en el DOM
    document.getElementById("result").innerHTML = `Resultado: ${amount} CLP = ${result.toFixed(2)} ${currency.toUpperCase()}`;

    // TODO: Implementa la lógica para mostrar el gráfico con la librería de gráficos
    // Puedes usar ApexCharts u otra librería de tu elección para esto
} catch (error) {
    
  // Muestra el error en el DOM en caso de problemas
    document.getElementById("result").innerHTML = `Error: ${error.message}`;
}
}












//Grafico//

    const options = {
        series: [{
          name: "Desktops",
          data: [10, 41, 35, 51, 49, 62, 69, 91, 148]
      }],

        chart: {
        height: 350,
        type: 'line',
        zoom: {
          enabled: false
        }
      },
      dataLabels: {
        enabled: false
      },
      stroke: {
        curve: 'straight'
      },
      title: {
        text: 'Product Trends by Month',
        align: 'left'
      },
      grid: {
        row: {
          colors: ['#f3f3f3', 'transparent'], // takes an array which will be repeated on columns
          opacity: 0.5
        },
      },
      xaxis: {
        categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep'],
      }
      };

      const chart = new ApexCharts(document.querySelector("#chart"), options)
      chart.render();
    