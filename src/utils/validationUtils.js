/**
 * Valida um número de telefone brasileiro (com ou sem formatação)
 * Aceita formatos: XXXXXXXXXXX, (XX) XXXXXXXXX, XX XXXXXXXXX
 * @param {string} telefone - O número de telefone a ser validado
 * @returns {boolean} - True se o telefone for válido
 */
export const validarTelefone = (telefone) => {
    const numeroLimpo = telefone.replace(/\D/g, '');
    
    if (numeroLimpo.length < 10 || numeroLimpo.length > 11) {
        return false;
    }
    
    const ddd = parseInt(numeroLimpo.substring(0, 2));
    if (ddd < 11 || ddd > 99) {
        return false;
    }
    
    return true;
};

/**
 * Formata um número de WhatsApp limpo para o formato (XX) XXXXX-XXXX
 * @param {string} numero - Número limpo (apenas dígitos)
 * @returns {string} - Número formatado
 */
export const formatarWhatsApp = (numero) => {
    const numeroLimpo = numero.replace(/\D/g, '');
    
    if (numeroLimpo.length === 11) {
        return `(${numeroLimpo.slice(0, 2)}) ${numeroLimpo.slice(2, 7)}-${numeroLimpo.slice(7)}`;
    } else if (numeroLimpo.length === 10) {
        return `(${numeroLimpo.slice(0, 2)}) ${numeroLimpo.slice(2, 6)}-${numeroLimpo.slice(6)}`;
    }
    
    return numeroLimpo;
};
