function login(){

  const usuario = document.getElementById("usuario").value;
  const clave = document.getElementById("clave").value;

  if(usuario === "" || clave === ""){

    Swal.fire({
      icon:'warning',
      title:'Campos vacíos',
      text:'Complete todos los campos'
    });

    return;
  }

  Swal.fire({
    icon:'success',
    title:'Bienvenido',
    text:'Inicio de sesión exitoso'
  });

}

function generarRadicado(){

  const numero = Math.floor(Math.random() * 999999);

  return "PQRS-2026-" + numero;

}

function enviarPQRS(){

  const tipo = document.getElementById("tipo").value;
  const area = document.getElementById("area").value;
  const ips = document.getElementById("ips").value;

  const nombre = document.getElementById("nombre").value;
  const documento = document.getElementById("documento").value;
  const correo = document.getElementById("correo").value;
  const celular = document.getElementById("celular").value;
  const descripcion = document.getElementById("descripcion").value;

  if(
    tipo === "" ||
    area === "" ||
    ips === "" ||
    nombre === "" ||
    documento === "" ||
    correo === "" ||
    celular === "" ||
    descripcion === ""
  ){

    Swal.fire({
      icon:'warning',
      title:'Campos incompletos',
      text:'Por favor complete toda la información'
    });

    return;
  }

  const radicado = generarRadicado();

  Swal.fire({
    icon:'success',
    title:'PQRS enviada',
    html:`
      <b>Radicado generado:</b>
      <br><br>
      ${radicado}
    `
  });

}

function consultarRadicado(){

  const radicado = document.getElementById("radicadoConsulta").value;

  if(radicado === ""){

    Swal.fire({
      icon:'warning',
      title:'Ingrese un radicado'
    });

    return;
  }

  Swal.fire({
    icon:'info',
    title:'Estado de solicitud',
    html:`
      <b>${radicado}</b>
      <br><br>
      Estado actual:
      <b>En revisión</b>
    `
  });

}