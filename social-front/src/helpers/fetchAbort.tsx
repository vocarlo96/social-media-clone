export function fetchAbort(fn: any) {
    const abortController = new AbortController()
    return [fn(abortController.signal), abortController.abort]
}