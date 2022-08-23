export type NodeEnv = "development" | "production"

export interface IEnv {
    NODE_ENV:       NodeEnv
    LOG_LEVEL:      string
    VERSION:        string
    CLIENT_APP_URL: string
}

// Provided using `webpack.DefinePlugin`
// @ts-ignore: next-line
const env: IEnv = ENV

export interface IConfig {
    env: NodeEnv
    version: string
    logLevel: string
    clientAppUrl: string
}

class Configuration implements IConfig {

    public env: NodeEnv
    public version: string
    public logLevel: string
    public clientAppUrl: string

    constructor() {
        this.env              = env.NODE_ENV
        this.version          = env.VERSION
        this.logLevel         = env.LOG_LEVEL
        this.clientAppUrl     = env.CLIENT_APP_URL
    }

    public assetPath(): string {
        const path = this.env == "production" ? "assets" : "public"
        return this.clientAppUrl + "/" + path
    }

    /**
     * Returns `true` if the application is not running in a production environment.
     */
    public notProduction(): boolean {
        return this.env != "production"
    }

    public toJSON() {
        return {
            env:       this.env,
            logLevel:  this.logLevel,
            assetPath: this.assetPath(),
        }
    }
}

const _CONFIG = new Configuration()

export const CONFIG = _CONFIG
