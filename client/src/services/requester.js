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


        // try {
        //     if (response.ok == false) {
        //         if (response.status == 403) {
        //             clearUserData();
        //         }
        //         const error = await response.json();
        //         throw new Error(error.message);
        //     }
    
        //     if (response.status == 204) {
        //         return response;
        //     } else {
        //         return response.json();
        //     }
        // } catch (err) {
        //     alert(err.message);
        //     throw err;
        // }

        if (response.ok === false) {
            const error = await response.json();
            throw new Error(error.message);
        }

        if (response.status === 204) {
            return response;
        } else {
            return response.json();
        }
    } catch (error) {
        throw error;
    }
};

export const get = request.bind(null, 'GET');
export const post = request.bind(null, 'POST');
export const put = request.bind(null, 'PUT');
export const patch = request.bind(null, 'PATCH');
export const del = request.bind(null, 'DELETE');