/**
 * Função para carregar dinamicamente o script do Google reCAPTCHA v3
 * @param {string} siteKey - A chave do site para o reCAPTCHA
 * @returns {Promise} - Promise que resolve quando o script estiver carregado
 */
export const loadReCaptchaScript = (siteKey) => {
    return new Promise((resolve, reject) => {
        if (window.grecaptcha && window.grecaptcha.execute) {
            resolve();
            return;
        }
        
        const existingScript = document.querySelector(`script[src^="https://www.google.com/recaptcha/api.js"]`);
        if (existingScript) {
            const checkRecaptchaReady = () => {
                if (window.grecaptcha && window.grecaptcha.execute) {
                    resolve();
                } else {
                    setTimeout(checkRecaptchaReady, 100);
                }
            };
            
            setTimeout(checkRecaptchaReady, 500);
            return;
        }
        
        try {
            const script = document.createElement('script');
            script.src = `https://www.google.com/recaptcha/api.js?render=${siteKey}`;
            script.async = true;
            script.defer = true;
            
            const timeoutId = setTimeout(() => {
                reject(new Error('Tempo limite excedido ao carregar o reCAPTCHA.'));
            }, 10000);
            
            script.onload = () => {
                clearTimeout(timeoutId);
                
                const checkRecaptchaReady = () => {
                    if (window.grecaptcha && window.grecaptcha.execute) {
                        window.grecaptcha.ready(() => {
                            resolve();
                        });
                    } else {
                        setTimeout(checkRecaptchaReady, 100);
                    }
                };
                
                setTimeout(checkRecaptchaReady, 500);
            };
            
            script.onerror = (error) => {
                clearTimeout(timeoutId);
                reject(new Error('Erro ao carregar o script do reCAPTCHA. Verifique sua conexão com a internet.'));
            };
            
            document.head.appendChild(script);
        } catch (error) {
            reject(error);
        }
    });
};
