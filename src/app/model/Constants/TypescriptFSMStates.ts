export enum TypescriptFSMStates{
    Initial,
    IdentifierStart,
    IdentifierPart,
    EndOfLine,
    WhiteSpace,
    Exclamation,
    ExclamationEqualsEquals,
    ExclamationEquals,
    StringLiteralSingleQuotePart,
    StringLiteralSingleQuoteEnd,
    StringLiteralDoubleQuotePart,
    StringLiteralDoubleQuoteEnd,
    // TODO: Backtick
    Percent,
    PercentEquals,
    Ampersand,
    AmpersandAmpersand,
    AmpersandEquals,
    OpenParen,
    CloseParen,
    Asterisk,
    AsteriskEquals,
    AsteriskAsteriskEquals,
    AsteriskAsterisk,
    Plus,
    PlusPlus,
    PlusEqual,
    Comma,
    Minus,
    MinusMinus,
    MinusEquals,
    Dot,
    NumericLiteral,
    DotDot,
    DotDotDot,
    Slash,
    SingleLineComment,
    MultiLineCommentPart,
    MultiLineCommentEndStart,
    MultiLineCommentEnd,
    SlashEquals,
    Zero,
    HexNumberStart,
    HexNumber,
    BinaryNumberStart,
    BinaryNumber,
    OctalNumberStart,
    OctalNumber,
    NonZeroDigit,
    Number,
    Colon,
    Semicolon,
    LessThan,
    LessThanEquals,
    LessThanSlash,
    LessThanLessThan,
    LessThanLessThanEquals,    
    Equals,
    EqualsEquals,
    EqualsEqualsEquals,
    EqualsGreaterThan,
    GreaterThan,
    Question,
    OpenBracket,
    CloseBracket,
    Caret,
    CaretEquals,
    OpenBrace,
    Bar,
    BarBar,
    BarEquals,
    CloseBrace,
    Tilde,
    At,


    //Num 
    Entero,
    EnteroDecimal,
    EnteroDecimalStart,
    DecimalDirecto,
    DecimalExponente,
    ExpontenteStart,
    ExponentePositivo,
    ExponenteNegativo,
    ExponenteNegativoStart,
    NumHex,
    NumHexStart,
    NumHexX,
    NumBin,
    NumBinStart,
    NumBinB,
    NumOctal,
    NumOctalStart,
    NumOctalO
    // Backslash,
}