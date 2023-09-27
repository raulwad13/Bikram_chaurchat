function Chauchat(cargador) {
    this.cargador = cargador;
  
    this.disparar = function () {
      while (this.cargador > 0) {
        console.log("pium!");
        this.cargador--;
      }
      console.log("¡Cargador vacío!");
    };
  }
  
  // Crear una Chauchat con 7 "pium!" en el cargador
  const miChauchat = new Chauchat(5);
  
  // Disparar la Chauchat para reproducir los "pium!"
  miChauchat.disparar();