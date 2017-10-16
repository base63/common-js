/** Define {@link Env} and associated helpers. */

/**
 * The environment in which a piece of code runs.
 */
export enum Env {
    /** The local environment, on a developer's work machine. */
    Local,
    /** The continuous integration test server. */
    Test,
    /** The staging system is a small-scale copy of the {@link Env.Prod} system, used for manual testing and exploration. */
    Staging,
    /** The production system is the one which serves user traffic and with which people interact. */
    Prod
}

/**
 * @returns A string representation of env.
 */
export function envToString(env: Env): string {
    switch (env) {
    case Env.Local:
        return 'LOCAL';
    case Env.Test:
        return 'TEST';
    case Env.Staging:
        return 'STAGING';
    case Env.Prod:
        return 'PROD';
    }
}


/**
 * Checks whether an environment is local or not.
 * @param env - The given environment.
 * @returns A boolean value, indicating whether this is the {@link Env.Local} environment or not.
 */
export function isLocal(env: Env): boolean {
    return env == Env.Local;
}


/**
 * Checks whether an environment is "server-side" or not.
 * @param env - The given environment.
 * @returns A boolean value, indicating whether this is the {@link Env.Staging} or {@link Env.Prod} environments.
 */
export function isOnServer(env: Env): boolean {
    return env == Env.Staging || env == Env.Prod;
}
