import 'whatwg-fetch';

class Net {
    static get(url) {
        return new Promise((resolve) => {
            fetch(url)
                .then(response => response.json())
                .then((body) => {
                    resolve(body);
                });
        });
    }

    static put(url, payload) {
        return new Promise((resolve) => {
            fetch(url, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(payload)
            }).then(response => response.json())
                .then((body) => {
                    resolve(body);
                });
        });
    }

    static patch(url, payload) {
        return new Promise((resolve) => {
            fetch(url, {
                method: 'PATCH',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(payload)
            }).then(response => response.json())
                .then((body) => {
                    resolve(body);
                });
        });
    }

    static delete(url, payload) {
        return new Promise((resolve) => {
            fetch(url, {
                method: 'DELETE',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(payload)
            }).then(response => response.json())
                .then((body) => {
                    resolve(body);
                });
        });
    }
}

export default Net;
