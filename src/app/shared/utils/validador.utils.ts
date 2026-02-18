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


    static isUndefined(value: any): boolean {
        return value == undefined;
    }

    static isNotUndefined(value: any): boolean {
        return !this.isUndefined(value);
    }

}