const request = async (method, url, data) => {
    try {
        const userData = localStorage.getItem('auth');
        const parsedData = JSON.parse(userData || '{}');
        
        const options = {
            method,
            headers: {},
        };
   
        if (parsedData.accessToken) {
            options.headers['X-Authorization'] = parsedData.accessToken;
        }

        if (data !== undefined) {
            options.headers['Content-Type'] = 'application/json';
            options.body = JSON.stringify(data);
        }

        const response = await fetch(url, options);
        const responseData = await response.json();
        return responseData;
    } catch (error) {
        console.log(error);
    }
};

export const get = request.bind(null, 'GET');
export const post = request.bind(null, 'POST');
export const put = request.bind(null, 'PUT');
export const patch = request.bind(null, 'PATCH');
export const del = request.bind(null, 'DELETE');