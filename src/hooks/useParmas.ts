export const useParams = (params: string): string | null => {
    const url = new URL(window.location.href)
    const searchParams = url.searchParams
    return searchParams.get(params);
}