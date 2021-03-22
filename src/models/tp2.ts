enum NumberToString {
    zero,
    un,
    deux,
    trois,
    quatre,
    cinq,
    six,
    sept,
    huit,
    neuf,
}

export const returnPeopleAndLength = (
    stringArray: string[] = ['Miles', 'Mick']
): [string, number][] => {
    return stringArray.map((element) => {
        return [element, element.length];
    });
};

export const displayPeopleAndLength = (
    stringArray?: string[],
    mustConvert?: boolean
): void => {
    returnPeopleAndLength(stringArray).forEach(([name, lenght]) => {
        console.log(
            `${name} contient ${
                mustConvert ? NumberToString[lenght] : lenght
            } caractères`
        );
    });
};
