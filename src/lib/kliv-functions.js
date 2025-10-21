/**
 * Kliv Functions Client Library
 * Minimal API for invoking edge functions
 *
 * @module kliv-functions
 */

/**
 * Client for invoking Kliv edge functions
 */
export class KlivFunctions {

    constructor(options = {}) {
        this.baseUrl = options.baseUrl || '';
        this.headers = options.headers || {};
    }

    async invoke(functionName, data = null, options = {}) {
        let url = `${this.baseUrl}/v2/function/${functionName}`;

        const fetchOptions = {
            method: options.method || (data ? 'POST' : 'GET'),
            headers: {
                ...this.headers,
                ...options.headers
            },
            credentials: 'include' // Include cookies for auth
        };

        // Add body for non-GET requests
        if (data && fetchOptions.method !== 'GET') {
            fetchOptions.headers['Content-Type'] = 'application/json';
            fetchOptions.body = JSON.stringify(data);
        }

        // Add query params for GET
        if (options.query && Object.keys(options.query).length > 0) {
            const params = new URLSearchParams(options.query);
            url += '?' + params.toString();
        }

        const response = await fetch(url, fetchOptions);

        if (!response.ok) {
            let error;
            try {
                error = await response.json();
            } catch {
                error = {
                    error: 'Function invocation failed',
                    status: response.status
                };
            }
            const errorMessage = error.error || error.message || 'Function invocation failed';
            const err = new Error(errorMessage);
            err.status = response.status;
            err.details = error;
            throw err;
        }

        // Handle empty responses
        const contentType = response.headers.get('content-type');
        if (!contentType || !contentType.includes('application/json')) {
            return await response.text();
        }

        return response.json();
    }

    async get(functionName, query = {}) {
        return this.invoke(functionName, null, {
            method: 'GET',
            query
        });
    }

    async post(functionName, data) {
        return this.invoke(functionName, data, {
            method: 'POST'
        });
    }

    async put(functionName, data) {
        return this.invoke(functionName, data, {
            method: 'PUT'
        });
    }

    async delete(functionName, data = null) {
        return this.invoke(functionName, data, {
            method: 'DELETE'
        });
    }
}

export default KlivFunctions;