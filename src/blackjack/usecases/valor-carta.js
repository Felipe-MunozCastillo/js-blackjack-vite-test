/**
 * Obtiene el valor numerico de la carta enviada
 * @param {String} carta 
 * @returns {numeric} Retorna el valor numerico de una carta. En caso de que sea 'A' retorna 11, si es 'J, 'Q' o 'K' retorna 10.
 */
export const valorCarta = (carta) => {

    const valor = carta.substring(0, carta.length - 1);
    return (isNaN(valor)) ?
        (valor === 'A') ? 11 : 10
        : valor * 1;
}