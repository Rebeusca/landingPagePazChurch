import { loadReCaptchaScript } from './recaptchaLoader';

/**
 * @param {string} token - Token gerado pelo reCAPTCHA
 * @returns {Promise<Object>} - Resposta do servidor com status de verificação
 */
export const verifyReCaptchaToken = async (token) => {
    try {
        if (!token) {
            throw new Error('Token reCAPTCHA não fornecido');
        }
        
        const controller = new AbortController();
        const timeoutId = setTimeout(() => controller.abort(), 10000); // 10 segundos de timeout
        
        const baseURL = import.meta.env.VITE_API_URL || 'http://localhost:5000';
        
        const response = await fetch(`${baseURL}/verify-captcha`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ token }),
            signal: controller.signal
        });
        
        clearTimeout(timeoutId);

        if (!response.ok) {
            throw new Error('Erro na resposta do servidor: ' + response.statusText);
        }

        const result = await response.json();
        return result;
    } catch (error) {
        if (error.name === 'AbortError') {
            throw new Error('Tempo limite excedido. O servidor pode estar inacessível.');
        }
        
        throw error;
    }
};

/**
 * @param {string} action - Nome da ação sendo executada (ex: 'login', 'form_submit', 'download')
 * @returns {Promise<Object>} - Resultado da verificação do reCAPTCHA
 */
export const executeReCaptcha = async (action) => {
    const siteKey = import.meta.env.VITE_RECAPTCHA_SITE_KEY;

    try {
        await loadReCaptchaScript(siteKey);
        
        if (!window.grecaptcha) {
            throw new Error('reCAPTCHA não está carregado. Verifique a conexão com a Internet.');
        }
        
        if (!window.grecaptcha.execute) {
            console.error('O método execute do grecaptcha não está disponível');
            throw new Error('API do reCAPTCHA não está carregada corretamente');
        }

        const token = await new Promise((resolve, reject) => {
            try {
                window.grecaptcha.ready(() => {
                    window.grecaptcha.execute(siteKey, { action })
                        .then(resolve)
                        .catch(reject);
                });
            } catch (err) {
                reject(err);
            }
        });
                
        const result = await verifyReCaptchaToken(token);
        
        return {
            ...result,
            token
        };
    } catch (error) {
        throw new Error('Não foi possível completar a verificação de segurança. Por favor, tente novamente ou recarregue a página.');
    }
};
