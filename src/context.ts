/** @module context */

/**
 * @enum
 * The context of a piece of code. Sometimes you want code to behave differently if
 * you're running it in a server (that is, a computer controlled by the company), or on
 * a client (that is, a computer controlled by a user).
 */
export enum Context {
    Client,
    Server
}


/**
 * Transform a string representation of a context into a {@link Context} value.
 * @param context - The string representation of the context.
 * @returns A {@link Context} value corresponding to the string representation.
 * @throws {Error} If the string can't be transformed to a {@link Context} value.
 */
export function parseContext(context: string | undefined): Context {
    if (context === undefined)
        throw new Error('Context is not defined');

    switch (context.toUpperCase()) {
        case "CLIENT":
            return Context.Client;
        case "SERVER":
            return Context.Server;
        default:
            throw new Error(`Invalid context ${context}`);
    }
}


/**
 * Checks whether a context is the client one or not.
 * @param context - The given context.
 * @returns A boolean value, indicating whether this is the {@link Context.Client} value or not.
 */
export function isClient(context: Context): boolean {
    return context == Context.Client;
}


/**
 * Checks whether a context is the server one or not.
 * @param context - The given context.
 * @returns A boolean value, indicating whether this is the {@link Context.Server} value or not.
 */
export function isServer(context: Context): boolean {
    return context == Context.Server;
}
