type WordSeparators = '-' | '_' | ' ';
type Split<
    S extends string,
    Delimiter extends WordSeparators,
    > = S extends `${infer Head}${Delimiter}${infer Tail}`
    ? [Head, ...Split<Tail, Delimiter>]
    : S extends Delimiter
    ? []
    : [S];

type InnerCamelCaseStringArray<Parts extends readonly any[], PreviousPart> =
    Parts extends [`${infer FirstPart}`, ...infer RemainingParts]
    ? FirstPart extends undefined
    ? ''
    : FirstPart extends ''
    ? InnerCamelCaseStringArray<RemainingParts, PreviousPart>
    : `${PreviousPart extends '' ? FirstPart : Capitalize<FirstPart>}${InnerCamelCaseStringArray<RemainingParts, FirstPart>}`
    : '';

type CamelCaseStringArray<Parts extends readonly string[]> =
    Parts extends [`${infer FirstPart}`, ...infer RemainingParts]
    ? Uncapitalize<`${FirstPart}${InnerCamelCaseStringArray<RemainingParts, FirstPart>}`>
    : never;

type CamelCase<K> = K extends string ? CamelCaseStringArray<Split<K extends Uppercase<K> ? Lowercase<K> : K, WordSeparators>> : K;

type CamelCasedProperties<T> = {
    [K in keyof T as CamelCase<K>]: T[K]
};

interface RawOptions {
    'dry-run': boolean;
    'full_family_name': string;
    foo: number;
    BAR: string;
    QUZ_QUX: number;
    'OTHER-FIELD': boolean;
}

type CamelRawOptions = CamelCasedProperties<RawOptions>;
const dbResult: CamelRawOptions = {
    dryRun: true,
    fullFamilyName: 'bar.js',
    foo: 123,
    bar: 'foo',
    quzQux: 6,
    otherField: false
};