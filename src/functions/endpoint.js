export const endpointFetch = ( environment ) => {

    return environment === "staging" ? "https://staging.api.synetec.blupp.co" : "https://api.synetec.blupp.co"

}
