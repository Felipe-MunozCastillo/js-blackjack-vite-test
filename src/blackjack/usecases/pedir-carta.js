/**
 * Esta función me permite tomar una carta
 * @param {Array<String>} deck Es un arrego de String. Ejemplo: ['5H','QD','10S','KC','2S',...] 
 * @returns {String} Retorna un elemento eliminado del deck de entrada. Ejemplo '3H'
 */

export const pedirCarta = (deck) => {

    if (!deck || deck.length === 0) {
        throw 'No hay cartas en el deck';
    }

    return deck.pop();
}