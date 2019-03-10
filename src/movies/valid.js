export const isValid = (type, title, description) => {
    const isTypeValid = type !== 'all';
    const isTitleValid = title.trim().length > 0;
    const isDescriptionValid = description.trim().length > 0;
    return isTypeValid && isTitleValid && isDescriptionValid
}