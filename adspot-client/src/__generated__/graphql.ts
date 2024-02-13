/* eslint-disable */
import { TypedDocumentNode as DocumentNode } from "@graphql-typed-document-node/core";
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = {
    [K in keyof T]: T[K];
};
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & {
    [SubKey in K]?: Maybe<T[SubKey]>;
};
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & {
    [SubKey in K]: Maybe<T[SubKey]>;
};
export type MakeEmpty<
    T extends { [key: string]: unknown },
    K extends keyof T,
> = { [_ in K]?: never };
export type Incremental<T> =
    | T
    | {
          [P in keyof T]?: P extends " $fragmentName" | "__typename"
              ? T[P]
              : never;
      };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
    ID: { input: string; output: string };
    String: { input: string; output: string };
    Boolean: { input: boolean; output: boolean };
    Int: { input: number; output: number };
    Float: { input: number; output: number };
};

export type AddAuthorError =
    | NameCannotBeBlankError
    | NameCannotContainNumbersError
    | NameCannotContainPunctuationError;

export type AddAuthorInput = {
    name: Scalars["String"]["input"];
};

export type AddAuthorPayload = {
    __typename?: "AddAuthorPayload";
    author?: Maybe<Author>;
    errors?: Maybe<Array<AddAuthorError>>;
};

export type AddUserInput = {
    email: Scalars["String"]["input"];
    password: Scalars["String"]["input"];
};

export type AddUserPayload = {
    __typename?: "AddUserPayload";
    user?: Maybe<User>;
};

export type Author = {
    __typename?: "Author";
    books: Array<Book>;
    id: Scalars["Int"]["output"];
    name: Scalars["String"]["output"];
};

export type AuthorFilterInput = {
    and?: InputMaybe<Array<AuthorFilterInput>>;
    books?: InputMaybe<ListFilterInputTypeOfBookFilterInput>;
    id?: InputMaybe<IntOperationFilterInput>;
    name?: InputMaybe<StringOperationFilterInput>;
    or?: InputMaybe<Array<AuthorFilterInput>>;
};

export type AuthorSortInput = {
    id?: InputMaybe<SortEnumType>;
    name?: InputMaybe<SortEnumType>;
};

export type Book = {
    __typename?: "Book";
    author: Author;
    authorId: Scalars["Int"]["output"];
    id: Scalars["Int"]["output"];
    title: Scalars["String"]["output"];
};

export type BookFilterInput = {
    and?: InputMaybe<Array<BookFilterInput>>;
    author?: InputMaybe<AuthorFilterInput>;
    authorId?: InputMaybe<IntOperationFilterInput>;
    id?: InputMaybe<IntOperationFilterInput>;
    or?: InputMaybe<Array<BookFilterInput>>;
    title?: InputMaybe<StringOperationFilterInput>;
};

export type BookSortInput = {
    author?: InputMaybe<AuthorSortInput>;
    authorId?: InputMaybe<SortEnumType>;
    id?: InputMaybe<SortEnumType>;
    title?: InputMaybe<SortEnumType>;
};

/** A connection to a list of items. */
export type BooksConnection = {
    __typename?: "BooksConnection";
    /** A list of edges. */
    edges?: Maybe<Array<BooksEdge>>;
    /** A flattened list of the nodes. */
    nodes?: Maybe<Array<Book>>;
    /** Information to aid in pagination. */
    pageInfo: PageInfo;
};

/** An edge in a connection. */
export type BooksEdge = {
    __typename?: "BooksEdge";
    /** A cursor for use in pagination. */
    cursor: Scalars["String"]["output"];
    /** The item at the end of the edge. */
    node: Book;
};

export type Error = {
    message: Scalars["String"]["output"];
};

export type IntOperationFilterInput = {
    eq?: InputMaybe<Scalars["Int"]["input"]>;
    gt?: InputMaybe<Scalars["Int"]["input"]>;
    gte?: InputMaybe<Scalars["Int"]["input"]>;
    in?: InputMaybe<Array<InputMaybe<Scalars["Int"]["input"]>>>;
    lt?: InputMaybe<Scalars["Int"]["input"]>;
    lte?: InputMaybe<Scalars["Int"]["input"]>;
    neq?: InputMaybe<Scalars["Int"]["input"]>;
    ngt?: InputMaybe<Scalars["Int"]["input"]>;
    ngte?: InputMaybe<Scalars["Int"]["input"]>;
    nin?: InputMaybe<Array<InputMaybe<Scalars["Int"]["input"]>>>;
    nlt?: InputMaybe<Scalars["Int"]["input"]>;
    nlte?: InputMaybe<Scalars["Int"]["input"]>;
};

export type ListFilterInputTypeOfBookFilterInput = {
    all?: InputMaybe<BookFilterInput>;
    any?: InputMaybe<Scalars["Boolean"]["input"]>;
    none?: InputMaybe<BookFilterInput>;
    some?: InputMaybe<BookFilterInput>;
};

export type Mutation = {
    __typename?: "Mutation";
    addAuthor: AddAuthorPayload;
    addUser: AddUserPayload;
};

export type MutationAddAuthorArgs = {
    input: AddAuthorInput;
};

export type MutationAddUserArgs = {
    input: AddUserInput;
};

export type NameCannotBeBlankError = Error & {
    __typename?: "NameCannotBeBlankError";
    message: Scalars["String"]["output"];
};

export type NameCannotContainNumbersError = Error & {
    __typename?: "NameCannotContainNumbersError";
    message: Scalars["String"]["output"];
};

export type NameCannotContainPunctuationError = Error & {
    __typename?: "NameCannotContainPunctuationError";
    message: Scalars["String"]["output"];
};

/** Information about pagination in a connection. */
export type PageInfo = {
    __typename?: "PageInfo";
    /** When paginating forwards, the cursor to continue. */
    endCursor?: Maybe<Scalars["String"]["output"]>;
    /** Indicates whether more edges exist following the set defined by the clients arguments. */
    hasNextPage: Scalars["Boolean"]["output"];
    /** Indicates whether more edges exist prior the set defined by the clients arguments. */
    hasPreviousPage: Scalars["Boolean"]["output"];
    /** When paginating backwards, the cursor to continue. */
    startCursor?: Maybe<Scalars["String"]["output"]>;
};

export type Query = {
    __typename?: "Query";
    authors: Array<Author>;
    books?: Maybe<BooksConnection>;
    users: Array<User>;
};

export type QueryAuthorsArgs = {
    order?: InputMaybe<Array<AuthorSortInput>>;
    where?: InputMaybe<AuthorFilterInput>;
};

export type QueryBooksArgs = {
    after?: InputMaybe<Scalars["String"]["input"]>;
    before?: InputMaybe<Scalars["String"]["input"]>;
    first?: InputMaybe<Scalars["Int"]["input"]>;
    last?: InputMaybe<Scalars["Int"]["input"]>;
    order?: InputMaybe<Array<BookSortInput>>;
    where?: InputMaybe<BookFilterInput>;
};

export enum SortEnumType {
    Asc = "ASC",
    Desc = "DESC",
}

export type StringOperationFilterInput = {
    and?: InputMaybe<Array<StringOperationFilterInput>>;
    contains?: InputMaybe<Scalars["String"]["input"]>;
    endsWith?: InputMaybe<Scalars["String"]["input"]>;
    eq?: InputMaybe<Scalars["String"]["input"]>;
    in?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
    ncontains?: InputMaybe<Scalars["String"]["input"]>;
    nendsWith?: InputMaybe<Scalars["String"]["input"]>;
    neq?: InputMaybe<Scalars["String"]["input"]>;
    nin?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
    nstartsWith?: InputMaybe<Scalars["String"]["input"]>;
    or?: InputMaybe<Array<StringOperationFilterInput>>;
    startsWith?: InputMaybe<Scalars["String"]["input"]>;
};

export type User = {
    __typename?: "User";
    email: Scalars["String"]["output"];
    password: Scalars["String"]["output"];
};

export type AddUserMutationVariables = Exact<{
    input: AddUserInput;
}>;

export type AddUserMutation = {
    __typename?: "Mutation";
    addUser: {
        __typename?: "AddUserPayload";
        user?: { __typename?: "User"; email: string; password: string } | null;
    };
};

export type GetAuthorsQueryVariables = Exact<{ [key: string]: never }>;

export type GetAuthorsQuery = {
    __typename?: "Query";
    authors: Array<{
        __typename?: "Author";
        id: number;
        name: string;
        books: Array<{ __typename?: "Book"; id: number; title: string }>;
    }>;
};

export const AddUserDocument = {
    kind: "Document",
    definitions: [
        {
            kind: "OperationDefinition",
            operation: "mutation",
            name: { kind: "Name", value: "AddUser" },
            variableDefinitions: [
                {
                    kind: "VariableDefinition",
                    variable: {
                        kind: "Variable",
                        name: { kind: "Name", value: "input" },
                    },
                    type: {
                        kind: "NonNullType",
                        type: {
                            kind: "NamedType",
                            name: { kind: "Name", value: "AddUserInput" },
                        },
                    },
                },
            ],
            selectionSet: {
                kind: "SelectionSet",
                selections: [
                    {
                        kind: "Field",
                        name: { kind: "Name", value: "addUser" },
                        arguments: [
                            {
                                kind: "Argument",
                                name: { kind: "Name", value: "input" },
                                value: {
                                    kind: "Variable",
                                    name: { kind: "Name", value: "input" },
                                },
                            },
                        ],
                        selectionSet: {
                            kind: "SelectionSet",
                            selections: [
                                {
                                    kind: "Field",
                                    name: { kind: "Name", value: "user" },
                                    selectionSet: {
                                        kind: "SelectionSet",
                                        selections: [
                                            {
                                                kind: "Field",
                                                name: {
                                                    kind: "Name",
                                                    value: "email",
                                                },
                                            },
                                            {
                                                kind: "Field",
                                                name: {
                                                    kind: "Name",
                                                    value: "password",
                                                },
                                            },
                                        ],
                                    },
                                },
                            ],
                        },
                    },
                ],
            },
        },
    ],
} as unknown as DocumentNode<AddUserMutation, AddUserMutationVariables>;
export const GetAuthorsDocument = {
    kind: "Document",
    definitions: [
        {
            kind: "OperationDefinition",
            operation: "query",
            name: { kind: "Name", value: "GetAuthors" },
            selectionSet: {
                kind: "SelectionSet",
                selections: [
                    {
                        kind: "Field",
                        name: { kind: "Name", value: "authors" },
                        arguments: [
                            {
                                kind: "Argument",
                                name: { kind: "Name", value: "order" },
                                value: {
                                    kind: "ListValue",
                                    values: [
                                        {
                                            kind: "ObjectValue",
                                            fields: [
                                                {
                                                    kind: "ObjectField",
                                                    name: {
                                                        kind: "Name",
                                                        value: "id",
                                                    },
                                                    value: {
                                                        kind: "EnumValue",
                                                        value: "ASC",
                                                    },
                                                },
                                            ],
                                        },
                                    ],
                                },
                            },
                        ],
                        selectionSet: {
                            kind: "SelectionSet",
                            selections: [
                                {
                                    kind: "Field",
                                    name: { kind: "Name", value: "id" },
                                },
                                {
                                    kind: "Field",
                                    name: { kind: "Name", value: "name" },
                                },
                                {
                                    kind: "Field",
                                    name: { kind: "Name", value: "books" },
                                    selectionSet: {
                                        kind: "SelectionSet",
                                        selections: [
                                            {
                                                kind: "Field",
                                                name: {
                                                    kind: "Name",
                                                    value: "id",
                                                },
                                            },
                                            {
                                                kind: "Field",
                                                name: {
                                                    kind: "Name",
                                                    value: "title",
                                                },
                                            },
                                        ],
                                    },
                                },
                            ],
                        },
                    },
                ],
            },
        },
    ],
} as unknown as DocumentNode<GetAuthorsQuery, GetAuthorsQueryVariables>;
