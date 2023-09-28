
export class MaxLengthValidation {
    constructor (name, maxLength) {
        this.name = name
        this.maxLength = maxLength
        this.message = `O campo deve ter no máximo ${maxLength} caracteres.`
    }

    validate (value) {
        return value?.length <= this.maxLength || this.message
    }
}
