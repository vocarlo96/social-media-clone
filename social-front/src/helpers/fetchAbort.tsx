export function a(fn: any) {
    const abortController = new AbortController()
    return [fn(abortController.signal), abortController.abort]
}