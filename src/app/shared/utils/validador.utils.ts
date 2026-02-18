export class ValidadorUtils {

    static isNullOrEmpty(str: string | null | undefined): boolean {
        return !str;
    }

    static isNullOrBlank(str: string | null | undefined): boolean {
        return !str?.trim();
    }

    static isNotNullAndNotBlank(str: string | null | undefined): boolean {
        return !this.isNullOrBlank(str);
    }

}