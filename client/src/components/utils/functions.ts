export const LINKEDIN_URL = 'https://www.linkedin.com/in/saad-shaikh-278452193/';
export const GITHUB_URL = 'https://github.com/saad696';
export const truncate = (
    string: string,
    length: number = 100,
    replaceText: string = '...'
): string => {
    let truncatedString = '';

    if (string.length <= 30) {
        return string;
    } else {
        truncatedString = `${string.substring(0, length)}${replaceText}`;
        return truncatedString;
    }
};
