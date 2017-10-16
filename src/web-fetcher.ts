/** Defines the {@link WebFetcher} interface. */

/**
 * The common interface for objects which can do a [fetch]{@link https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API}.
 */
export interface WebFetcher {
    /**
     * Perform a HTTP request like in [fetch]{@link https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API}.
     * @param url - The address of the resource to perform the request to.
     * @param options - The various request options as documented [here]{@link https://developer.mozilla.org/en-US/docs/Web/API/Request/Request}.
     * @returns A {@link Promise} with a [Response]{@link https://developer.mozilla.org/en-US/docs/Web/API/Response} type.
     */
    fetch(uri: string, options: RequestInit): Promise<Response>;
}
