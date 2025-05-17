import {convertToKebabCase} from "./helpers.ts";

describe('helpers', () => {
    it('should return "test-name" if argument is "Test name"', () => {
        const result = convertToKebabCase('Test name');
        expect(result).toEqual('test-name');
    });

    it('should return "test-name-new-test" if argument is "Test name-new-test"', () => {
        const result = convertToKebabCase('Test name-new-test');
        expect(result).toEqual('test-name-new-test');
    });

    it('should return "test+name+new+test" if arguments are "Test name-new-test" and "+"', () => {
        const result = convertToKebabCase('Test name-new-test', '+');
        expect(result).toEqual('test+name+new+test');
    });

    it('should return "test-name-new-test" if arguments are "Test name-new-test" and null', () => {
        const result = convertToKebabCase('Test name-new-test', null);
        expect(result).toEqual('test-name-new-test');
    });

    it('should return "test-name-new-test" if arguments are "Test name-new-test" and undefined', () => {
        const result = convertToKebabCase('Test name-new-test', undefined);
        expect(result).toEqual('test-name-new-test');
    });


    it('should return empty string if arguments are not set', () => {
        const result = convertToKebabCase();
        expect(result).toEqual('');
    });

    it('should return empty string is argument is null', () => {
        const result = convertToKebabCase(null);
        expect(result).toEqual('');
    });

    it('should return empty string is argument is undefined', () => {
        const result = convertToKebabCase(undefined);
        expect(result).toEqual('');
    });

    it('should return empty string is argument is empty string', () => {
        const result = convertToKebabCase('');
        expect(result).toEqual('');
    });
});
