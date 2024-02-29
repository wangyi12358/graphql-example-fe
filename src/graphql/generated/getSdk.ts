import type { GraphQLClient } from 'graphql-request';
import type { GraphQLClientRequestHeaders } from 'graphql-request/build/cjs/types';
import gql from 'graphql-tag';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
};

export type CreateLov = {
  /** 编码 */
  code: Scalars['String']['input'];
  /** 描述 */
  desc?: InputMaybe<Scalars['String']['input']>;
  /** 名称 */
  name: Scalars['String']['input'];
};

export type CreateLovField = {
  /** 描述 */
  desc?: InputMaybe<Scalars['String']['input']>;
  /** 名称 */
  label: Scalars['String']['input'];
  /** lovId */
  lovId: Scalars['Int']['input'];
  /** 状态 */
  status: Scalars['Int']['input'];
  /** 值 */
  value: Scalars['Int']['input'];
};

export type CreateUser = {
  email: Scalars['String']['input'];
  gender: Scalars['Int']['input'];
  nickname: Scalars['String']['input'];
  password: Scalars['String']['input'];
  phone: Scalars['String']['input'];
  remark?: InputMaybe<Scalars['String']['input']>;
  username: Scalars['String']['input'];
};

export type Login = {
  token: Scalars['String']['output'];
  user: User;
};

export type LoginInput = {
  password: Scalars['String']['input'];
  username: Scalars['String']['input'];
};

export type Lov = {
  /** 编码 */
  code: Scalars['String']['output'];
  /** 描述 */
  desc?: Maybe<Scalars['String']['output']>;
  id: Scalars['Int']['output'];
  /** 名称 */
  name: Scalars['String']['output'];
};

export type LovField = {
  /** 描述 */
  desc?: Maybe<Scalars['String']['output']>;
  id: Scalars['Int']['output'];
  /** 名称 */
  label: Scalars['String']['output'];
  /** 状态 */
  status: Scalars['Int']['output'];
  /** 值 */
  value: Scalars['Int']['output'];
};

export type LovPage = {
  /** 列表 */
  data: Array<Lov>;
  /** 总数 */
  total: Scalars['Int']['output'];
};

export type LovPageInput = {
  /** 编码模糊查询 */
  code?: InputMaybe<Scalars['String']['input']>;
  /** 名称模糊查询 */
  name?: InputMaybe<Scalars['String']['input']>;
};

export type Mutation = {
  createLov: Lov;
  createLovField: LovField;
  createUser: User;
  deleteLov: Scalars['Boolean']['output'];
  login: Login;
};


export type MutationCreateLovArgs = {
  input: CreateLov;
};


export type MutationCreateLovFieldArgs = {
  input: CreateLovField;
};


export type MutationCreateUserArgs = {
  input: CreateUser;
};


export type MutationDeleteLovArgs = {
  id: Scalars['Int']['input'];
};


export type MutationLoginArgs = {
  input: LoginInput;
};

export type Pagination = {
  /** 页码 */
  current: Scalars['Int']['input'];
  /** 每页数量 */
  pageSize: Scalars['Int']['input'];
};

export type Query = {
  findLov: Lov;
  lovFields: Array<LovField>;
  lovPage: LovPage;
  profile: User;
  users: Users;
};


export type QueryFindLovArgs = {
  id: Scalars['Int']['input'];
};


export type QueryLovFieldsArgs = {
  lovId: Scalars['Int']['input'];
};


export type QueryLovPageArgs = {
  lovPageInput?: InputMaybe<LovPageInput>;
  pagination: Pagination;
};


export type QueryUsersArgs = {
  pagination: Pagination;
  usersInput?: InputMaybe<UsersInput>;
};

export type User = {
  /** 创建时间 */
  createdAt: Scalars['Int']['output'];
  /** 邮箱 */
  email?: Maybe<Scalars['String']['output']>;
  /** 性别 */
  gender: Scalars['Int']['output'];
  /** 头像 */
  head?: Maybe<Scalars['String']['output']>;
  id: Scalars['Int']['output'];
  /** 昵称 */
  nickname?: Maybe<Scalars['String']['output']>;
  /** 手机号 */
  phone?: Maybe<Scalars['String']['output']>;
  /** 备注 */
  remark?: Maybe<Scalars['String']['output']>;
  /** 状态 */
  state: Scalars['Int']['output'];
  /** 用户名 */
  username: Scalars['String']['output'];
};

export type Users = {
  /** 列表 */
  data: Array<User>;
  /** 总数 */
  total: Scalars['Int']['output'];
};

export type UsersInput = {
  nickname?: InputMaybe<Scalars['String']['input']>;
};

export type LovFragment = { id: number, code: string, name: string, desc?: string | null };

export type LovFieldFragment = { id: number, label: string, value: number, status: number, desc?: string | null };

export type LovPageQueryVariables = Exact<{
  pagination: Pagination;
  input?: InputMaybe<LovPageInput>;
}>;


export type LovPageQuery = { lovPage: { total: number, data: Array<{ id: number, code: string, name: string, desc?: string | null }> } };

export type LovDetailQueryVariables = Exact<{
  id: Scalars['Int']['input'];
}>;


export type LovDetailQuery = { findLov: { id: number, code: string, name: string, desc?: string | null }, lovFields: Array<{ id: number, label: string, value: number, status: number, desc?: string | null }> };

export type CreateLovMutationVariables = Exact<{
  input: CreateLov;
}>;


export type CreateLovMutation = { createLov: { id: number } };

export type DeleteLovMutationVariables = Exact<{
  id: Scalars['Int']['input'];
}>;


export type DeleteLovMutation = { deleteLov: boolean };

export type UserFragment = { id: number, nickname?: string | null, phone?: string | null, gender: number };

export type UsersQueryVariables = Exact<{
  pagination: Pagination;
  input?: InputMaybe<UsersInput>;
}>;


export type UsersQuery = { users: { total: number, data: Array<{ id: number, nickname?: string | null, phone?: string | null, gender: number }> } };

export type ProfileQueryVariables = Exact<{ [key: string]: never; }>;


export type ProfileQuery = { profile: { id: number, nickname?: string | null, phone?: string | null, gender: number } };

export type LoginMutationVariables = Exact<{
  input: LoginInput;
}>;


export type LoginMutation = { login: { token: string, user: { id: number, nickname?: string | null, phone?: string | null, gender: number } } };

export const LovFragmentDoc = gql`
    fragment lov on Lov {
  id
  code
  name
  desc
}
    `;
export const LovFieldFragmentDoc = gql`
    fragment lovField on LovField {
  id
  label
  value
  status
  desc
}
    `;
export const UserFragmentDoc = gql`
    fragment user on User {
  id
  nickname
  phone
  gender
}
    `;
export const LovPageDocument = gql`
    query lovPage($pagination: Pagination!, $input: LovPageInput) {
  lovPage(pagination: $pagination, lovPageInput: $input) {
    data {
      ...lov
    }
    total
  }
}
    ${LovFragmentDoc}`;
export const LovDetailDocument = gql`
    query lovDetail($id: Int!) {
  findLov(id: $id) {
    ...lov
  }
  lovFields(lovId: $id) {
    ...lovField
  }
}
    ${LovFragmentDoc}
${LovFieldFragmentDoc}`;
export const CreateLovDocument = gql`
    mutation createLov($input: CreateLov!) {
  createLov(input: $input) {
    id
  }
}
    `;
export const DeleteLovDocument = gql`
    mutation deleteLov($id: Int!) {
  deleteLov(id: $id)
}
    `;
export const UsersDocument = gql`
    query users($pagination: Pagination!, $input: UsersInput) {
  users(pagination: $pagination, usersInput: $input) {
    data {
      ...user
    }
    total
  }
}
    ${UserFragmentDoc}`;
export const ProfileDocument = gql`
    query profile {
  profile {
    ...user
  }
}
    ${UserFragmentDoc}`;
export const LoginDocument = gql`
    mutation login($input: LoginInput!) {
  login(input: $input) {
    user {
      ...user
    }
    token
  }
}
    ${UserFragmentDoc}`;

export type SdkFunctionWrapper = <T>(action: (requestHeaders?:Record<string, string>) => Promise<T>, operationName: string, operationType?: string, variables?: any) => Promise<T>;


const defaultWrapper: SdkFunctionWrapper = (action, _operationName, _operationType, variables) => action();

export function getSdk(client: GraphQLClient, withWrapper: SdkFunctionWrapper = defaultWrapper) {
  return {
    lovPage(variables: LovPageQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<LovPageQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<LovPageQuery>(LovPageDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'lovPage', 'query', variables);
    },
    lovDetail(variables: LovDetailQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<LovDetailQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<LovDetailQuery>(LovDetailDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'lovDetail', 'query', variables);
    },
    createLov(variables: CreateLovMutationVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<CreateLovMutation> {
      return withWrapper((wrappedRequestHeaders) => client.request<CreateLovMutation>(CreateLovDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'createLov', 'mutation', variables);
    },
    deleteLov(variables: DeleteLovMutationVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<DeleteLovMutation> {
      return withWrapper((wrappedRequestHeaders) => client.request<DeleteLovMutation>(DeleteLovDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'deleteLov', 'mutation', variables);
    },
    users(variables: UsersQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<UsersQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<UsersQuery>(UsersDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'users', 'query', variables);
    },
    profile(variables?: ProfileQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<ProfileQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<ProfileQuery>(ProfileDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'profile', 'query', variables);
    },
    login(variables: LoginMutationVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<LoginMutation> {
      return withWrapper((wrappedRequestHeaders) => client.request<LoginMutation>(LoginDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'login', 'mutation', variables);
    }
  };
}
export type Sdk = ReturnType<typeof getSdk>;