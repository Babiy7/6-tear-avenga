export const convertToKebabCase = (sectionName: string, separator?: string): string => {
    if (!sectionName) return '';
    return sectionName
        .replace(/\s*-\s*/g, separator || '-')
        .replace(/["']/g, '')
        .replace(/(\d+)\s+(\d+\/\d+)/g, '$1-$2')
        .replace(/\s+/g, separator || '-')
        .toLowerCase();
};
