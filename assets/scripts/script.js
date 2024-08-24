function submitForm() {
    const form = document.getElementById('registroForm');
    
    const formData = {
        nombre: form.nombre.value,
        email: form.email.value,
        opcion: form.opcion.value,
        comentarios: form.comentarios.value
    };
    
    console.log(formData);
}
