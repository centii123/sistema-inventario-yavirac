export function obtenerFecha(fechaISO: any): string {
    const indiceT = fechaISO.indexOf('T');
    if (indiceT !== -1) {
        return fechaISO.substring(0, indiceT);
    } else {
        return fechaISO;
    }
}