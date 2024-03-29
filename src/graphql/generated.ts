import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
const defaultOptions = {} as const;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  Date: any;
  DateTime: any;
  Hex: any;
  Json: any;
  Long: any;
  RGBAHue: any;
  RGBATransparency: any;
  RichTextAST: any;
};

export type Aggregate = {
  __typename?: 'Aggregate';
  count: Scalars['Int'];
};

export type Apoiador = Node & {
  __typename?: 'Apoiador';
  ativo: Scalars['Boolean'];
  /** The time the document was created */
  createdAt: Scalars['DateTime'];
  /** User that created this document */
  createdBy?: Maybe<User>;
  description?: Maybe<Scalars['String']>;
  /** Get the document in other stages */
  documentInStages: Array<Apoiador>;
  /** List of Apoiador versions */
  history: Array<Version>;
  /** The unique identifier */
  id: Scalars['ID'];
  image?: Maybe<Asset>;
  name: Scalars['String'];
  /** The time the document was published. Null on documents in draft stage. */
  publishedAt?: Maybe<Scalars['DateTime']>;
  /** User that last published this document */
  publishedBy?: Maybe<User>;
  scheduledIn: Array<ScheduledOperation>;
  slug: Scalars['String'];
  /** System stage field */
  stage: Stage;
  /** The time the document was updated */
  updatedAt: Scalars['DateTime'];
  /** User that last updated this document */
  updatedBy?: Maybe<User>;
  url?: Maybe<Scalars['String']>;
};


export type ApoiadorCreatedByArgs = {
  forceParentLocale?: InputMaybe<Scalars['Boolean']>;
  locales?: InputMaybe<Array<Locale>>;
};


export type ApoiadorDocumentInStagesArgs = {
  includeCurrent?: Scalars['Boolean'];
  inheritLocale?: Scalars['Boolean'];
  stages?: Array<Stage>;
};


export type ApoiadorHistoryArgs = {
  limit?: Scalars['Int'];
  skip?: Scalars['Int'];
  stageOverride?: InputMaybe<Stage>;
};


export type ApoiadorImageArgs = {
  forceParentLocale?: InputMaybe<Scalars['Boolean']>;
  locales?: InputMaybe<Array<Locale>>;
};


export type ApoiadorPublishedByArgs = {
  forceParentLocale?: InputMaybe<Scalars['Boolean']>;
  locales?: InputMaybe<Array<Locale>>;
};


export type ApoiadorScheduledInArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  forceParentLocale?: InputMaybe<Scalars['Boolean']>;
  last?: InputMaybe<Scalars['Int']>;
  locales?: InputMaybe<Array<Locale>>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<ScheduledOperationWhereInput>;
};


export type ApoiadorUpdatedByArgs = {
  forceParentLocale?: InputMaybe<Scalars['Boolean']>;
  locales?: InputMaybe<Array<Locale>>;
};

export type ApoiadorConnectInput = {
  /** Allow to specify document position in list of connected documents, will default to appending at end of list */
  position?: InputMaybe<ConnectPositionInput>;
  /** Document to connect */
  where: ApoiadorWhereUniqueInput;
};

/** A connection to a list of items. */
export type ApoiadorConnection = {
  __typename?: 'ApoiadorConnection';
  aggregate: Aggregate;
  /** A list of edges. */
  edges: Array<ApoiadorEdge>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

export type ApoiadorCreateInput = {
  ativo: Scalars['Boolean'];
  createdAt?: InputMaybe<Scalars['DateTime']>;
  description?: InputMaybe<Scalars['String']>;
  image?: InputMaybe<AssetCreateOneInlineInput>;
  name: Scalars['String'];
  slug: Scalars['String'];
  updatedAt?: InputMaybe<Scalars['DateTime']>;
  url?: InputMaybe<Scalars['String']>;
};

export type ApoiadorCreateManyInlineInput = {
  /** Connect multiple existing Apoiador documents */
  connect?: InputMaybe<Array<ApoiadorWhereUniqueInput>>;
  /** Create and connect multiple existing Apoiador documents */
  create?: InputMaybe<Array<ApoiadorCreateInput>>;
};

export type ApoiadorCreateOneInlineInput = {
  /** Connect one existing Apoiador document */
  connect?: InputMaybe<ApoiadorWhereUniqueInput>;
  /** Create and connect one Apoiador document */
  create?: InputMaybe<ApoiadorCreateInput>;
};

/** An edge in a connection. */
export type ApoiadorEdge = {
  __typename?: 'ApoiadorEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
  /** The item at the end of the edge. */
  node: Apoiador;
};

/** Identifies documents */
export type ApoiadorManyWhereInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<ApoiadorWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<ApoiadorWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<ApoiadorWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars['String']>;
  ativo?: InputMaybe<Scalars['Boolean']>;
  /** Any other value that exists and is not equal to the given value. */
  ativo_not?: InputMaybe<Scalars['Boolean']>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  createdAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  createdAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  /** All values less than the given value. */
  createdAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  createdAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** Any other value that exists and is not equal to the given value. */
  createdAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  createdBy?: InputMaybe<UserWhereInput>;
  description?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  description_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  description_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  description_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** Any other value that exists and is not equal to the given value. */
  description_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  description_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  description_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  description_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values not starting with the given string. */
  description_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  description_starts_with?: InputMaybe<Scalars['String']>;
  documentInStages_every?: InputMaybe<ApoiadorWhereStageInput>;
  documentInStages_none?: InputMaybe<ApoiadorWhereStageInput>;
  documentInStages_some?: InputMaybe<ApoiadorWhereStageInput>;
  id?: InputMaybe<Scalars['ID']>;
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars['ID']>;
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars['ID']>;
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** Any other value that exists and is not equal to the given value. */
  id_not?: InputMaybe<Scalars['ID']>;
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars['ID']>;
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars['ID']>;
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars['ID']>;
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars['ID']>;
  image?: InputMaybe<AssetWhereInput>;
  name?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  name_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  name_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  name_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** Any other value that exists and is not equal to the given value. */
  name_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  name_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  name_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  name_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values not starting with the given string. */
  name_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  name_starts_with?: InputMaybe<Scalars['String']>;
  publishedAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  publishedAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  publishedAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  publishedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  /** All values less than the given value. */
  publishedAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  publishedAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** Any other value that exists and is not equal to the given value. */
  publishedAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  publishedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  publishedBy?: InputMaybe<UserWhereInput>;
  scheduledIn_every?: InputMaybe<ScheduledOperationWhereInput>;
  scheduledIn_none?: InputMaybe<ScheduledOperationWhereInput>;
  scheduledIn_some?: InputMaybe<ScheduledOperationWhereInput>;
  slug?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  slug_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  slug_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  slug_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** Any other value that exists and is not equal to the given value. */
  slug_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  slug_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  slug_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  slug_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values not starting with the given string. */
  slug_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  slug_starts_with?: InputMaybe<Scalars['String']>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  updatedAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  updatedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  /** All values less than the given value. */
  updatedAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** Any other value that exists and is not equal to the given value. */
  updatedAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  updatedBy?: InputMaybe<UserWhereInput>;
  url?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  url_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  url_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  url_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** Any other value that exists and is not equal to the given value. */
  url_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  url_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  url_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  url_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values not starting with the given string. */
  url_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  url_starts_with?: InputMaybe<Scalars['String']>;
};

export enum ApoiadorOrderByInput {
  AtivoAsc = 'ativo_ASC',
  AtivoDesc = 'ativo_DESC',
  CreatedAtAsc = 'createdAt_ASC',
  CreatedAtDesc = 'createdAt_DESC',
  DescriptionAsc = 'description_ASC',
  DescriptionDesc = 'description_DESC',
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  NameAsc = 'name_ASC',
  NameDesc = 'name_DESC',
  PublishedAtAsc = 'publishedAt_ASC',
  PublishedAtDesc = 'publishedAt_DESC',
  SlugAsc = 'slug_ASC',
  SlugDesc = 'slug_DESC',
  UpdatedAtAsc = 'updatedAt_ASC',
  UpdatedAtDesc = 'updatedAt_DESC',
  UrlAsc = 'url_ASC',
  UrlDesc = 'url_DESC'
}

export type ApoiadorUpdateInput = {
  ativo?: InputMaybe<Scalars['Boolean']>;
  description?: InputMaybe<Scalars['String']>;
  image?: InputMaybe<AssetUpdateOneInlineInput>;
  name?: InputMaybe<Scalars['String']>;
  slug?: InputMaybe<Scalars['String']>;
  url?: InputMaybe<Scalars['String']>;
};

export type ApoiadorUpdateManyInlineInput = {
  /** Connect multiple existing Apoiador documents */
  connect?: InputMaybe<Array<ApoiadorConnectInput>>;
  /** Create and connect multiple Apoiador documents */
  create?: InputMaybe<Array<ApoiadorCreateInput>>;
  /** Delete multiple Apoiador documents */
  delete?: InputMaybe<Array<ApoiadorWhereUniqueInput>>;
  /** Disconnect multiple Apoiador documents */
  disconnect?: InputMaybe<Array<ApoiadorWhereUniqueInput>>;
  /** Override currently-connected documents with multiple existing Apoiador documents */
  set?: InputMaybe<Array<ApoiadorWhereUniqueInput>>;
  /** Update multiple Apoiador documents */
  update?: InputMaybe<Array<ApoiadorUpdateWithNestedWhereUniqueInput>>;
  /** Upsert multiple Apoiador documents */
  upsert?: InputMaybe<Array<ApoiadorUpsertWithNestedWhereUniqueInput>>;
};

export type ApoiadorUpdateManyInput = {
  ativo?: InputMaybe<Scalars['Boolean']>;
  description?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
  url?: InputMaybe<Scalars['String']>;
};

export type ApoiadorUpdateManyWithNestedWhereInput = {
  /** Update many input */
  data: ApoiadorUpdateManyInput;
  /** Document search */
  where: ApoiadorWhereInput;
};

export type ApoiadorUpdateOneInlineInput = {
  /** Connect existing Apoiador document */
  connect?: InputMaybe<ApoiadorWhereUniqueInput>;
  /** Create and connect one Apoiador document */
  create?: InputMaybe<ApoiadorCreateInput>;
  /** Delete currently connected Apoiador document */
  delete?: InputMaybe<Scalars['Boolean']>;
  /** Disconnect currently connected Apoiador document */
  disconnect?: InputMaybe<Scalars['Boolean']>;
  /** Update single Apoiador document */
  update?: InputMaybe<ApoiadorUpdateWithNestedWhereUniqueInput>;
  /** Upsert single Apoiador document */
  upsert?: InputMaybe<ApoiadorUpsertWithNestedWhereUniqueInput>;
};

export type ApoiadorUpdateWithNestedWhereUniqueInput = {
  /** Document to update */
  data: ApoiadorUpdateInput;
  /** Unique document search */
  where: ApoiadorWhereUniqueInput;
};

export type ApoiadorUpsertInput = {
  /** Create document if it didn't exist */
  create: ApoiadorCreateInput;
  /** Update document if it exists */
  update: ApoiadorUpdateInput;
};

export type ApoiadorUpsertWithNestedWhereUniqueInput = {
  /** Upsert data */
  data: ApoiadorUpsertInput;
  /** Unique document search */
  where: ApoiadorWhereUniqueInput;
};

/** This contains a set of filters that can be used to compare values internally */
export type ApoiadorWhereComparatorInput = {
  /** This field can be used to request to check if the entry is outdated by internal comparison */
  outdated_to?: InputMaybe<Scalars['Boolean']>;
};

/** Identifies documents */
export type ApoiadorWhereInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<ApoiadorWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<ApoiadorWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<ApoiadorWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars['String']>;
  ativo?: InputMaybe<Scalars['Boolean']>;
  /** Any other value that exists and is not equal to the given value. */
  ativo_not?: InputMaybe<Scalars['Boolean']>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  createdAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  createdAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  /** All values less than the given value. */
  createdAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  createdAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** Any other value that exists and is not equal to the given value. */
  createdAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  createdBy?: InputMaybe<UserWhereInput>;
  description?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  description_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  description_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  description_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** Any other value that exists and is not equal to the given value. */
  description_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  description_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  description_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  description_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values not starting with the given string. */
  description_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  description_starts_with?: InputMaybe<Scalars['String']>;
  documentInStages_every?: InputMaybe<ApoiadorWhereStageInput>;
  documentInStages_none?: InputMaybe<ApoiadorWhereStageInput>;
  documentInStages_some?: InputMaybe<ApoiadorWhereStageInput>;
  id?: InputMaybe<Scalars['ID']>;
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars['ID']>;
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars['ID']>;
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** Any other value that exists and is not equal to the given value. */
  id_not?: InputMaybe<Scalars['ID']>;
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars['ID']>;
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars['ID']>;
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars['ID']>;
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars['ID']>;
  image?: InputMaybe<AssetWhereInput>;
  name?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  name_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  name_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  name_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** Any other value that exists and is not equal to the given value. */
  name_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  name_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  name_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  name_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values not starting with the given string. */
  name_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  name_starts_with?: InputMaybe<Scalars['String']>;
  publishedAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  publishedAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  publishedAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  publishedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  /** All values less than the given value. */
  publishedAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  publishedAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** Any other value that exists and is not equal to the given value. */
  publishedAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  publishedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  publishedBy?: InputMaybe<UserWhereInput>;
  scheduledIn_every?: InputMaybe<ScheduledOperationWhereInput>;
  scheduledIn_none?: InputMaybe<ScheduledOperationWhereInput>;
  scheduledIn_some?: InputMaybe<ScheduledOperationWhereInput>;
  slug?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  slug_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  slug_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  slug_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** Any other value that exists and is not equal to the given value. */
  slug_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  slug_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  slug_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  slug_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values not starting with the given string. */
  slug_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  slug_starts_with?: InputMaybe<Scalars['String']>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  updatedAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  updatedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  /** All values less than the given value. */
  updatedAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** Any other value that exists and is not equal to the given value. */
  updatedAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  updatedBy?: InputMaybe<UserWhereInput>;
  url?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  url_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  url_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  url_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** Any other value that exists and is not equal to the given value. */
  url_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  url_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  url_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  url_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values not starting with the given string. */
  url_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  url_starts_with?: InputMaybe<Scalars['String']>;
};

/** The document in stages filter allows specifying a stage entry to cross compare the same document between different stages */
export type ApoiadorWhereStageInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<ApoiadorWhereStageInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<ApoiadorWhereStageInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<ApoiadorWhereStageInput>>;
  /** This field contains fields which can be set as true or false to specify an internal comparison */
  compareWithParent?: InputMaybe<ApoiadorWhereComparatorInput>;
  /** Specify the stage to compare with */
  stage?: InputMaybe<Stage>;
};

/** References Apoiador record uniquely */
export type ApoiadorWhereUniqueInput = {
  id?: InputMaybe<Scalars['ID']>;
  slug?: InputMaybe<Scalars['String']>;
};

/** Asset system model */
export type Asset = Node & {
  __typename?: 'Asset';
  /** The time the document was created */
  createdAt: Scalars['DateTime'];
  /** User that created this document */
  createdBy?: Maybe<User>;
  /** Get the document in other stages */
  documentInStages: Array<Asset>;
  /** The file name */
  fileName: Scalars['String'];
  /** The file handle */
  handle: Scalars['String'];
  /** The height of the file */
  height?: Maybe<Scalars['Float']>;
  /** List of Asset versions */
  history: Array<Version>;
  /** The unique identifier */
  id: Scalars['ID'];
  imageApoiador: Array<Apoiador>;
  imageProduto: Array<Produto>;
  imageUsuario: Array<Usuario>;
  /** System Locale field */
  locale: Locale;
  /** Get the other localizations for this document */
  localizations: Array<Asset>;
  /** The mime type of the file */
  mimeType?: Maybe<Scalars['String']>;
  /** The time the document was published. Null on documents in draft stage. */
  publishedAt?: Maybe<Scalars['DateTime']>;
  /** User that last published this document */
  publishedBy?: Maybe<User>;
  scheduledIn: Array<ScheduledOperation>;
  /** The file size */
  size?: Maybe<Scalars['Float']>;
  /** System stage field */
  stage: Stage;
  thumbnailFarmacia: Array<Farmacia>;
  thumbnailPost: Array<Post>;
  /** The time the document was updated */
  updatedAt: Scalars['DateTime'];
  /** User that last updated this document */
  updatedBy?: Maybe<User>;
  /** Get the url for the asset with provided transformations applied. */
  url: Scalars['String'];
  /** The file width */
  width?: Maybe<Scalars['Float']>;
};


/** Asset system model */
export type AssetCreatedAtArgs = {
  variation?: SystemDateTimeFieldVariation;
};


/** Asset system model */
export type AssetCreatedByArgs = {
  forceParentLocale?: InputMaybe<Scalars['Boolean']>;
  locales?: InputMaybe<Array<Locale>>;
};


/** Asset system model */
export type AssetDocumentInStagesArgs = {
  includeCurrent?: Scalars['Boolean'];
  inheritLocale?: Scalars['Boolean'];
  stages?: Array<Stage>;
};


/** Asset system model */
export type AssetHistoryArgs = {
  limit?: Scalars['Int'];
  skip?: Scalars['Int'];
  stageOverride?: InputMaybe<Stage>;
};


/** Asset system model */
export type AssetImageApoiadorArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  forceParentLocale?: InputMaybe<Scalars['Boolean']>;
  last?: InputMaybe<Scalars['Int']>;
  locales?: InputMaybe<Array<Locale>>;
  orderBy?: InputMaybe<ApoiadorOrderByInput>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<ApoiadorWhereInput>;
};


/** Asset system model */
export type AssetImageProdutoArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  forceParentLocale?: InputMaybe<Scalars['Boolean']>;
  last?: InputMaybe<Scalars['Int']>;
  locales?: InputMaybe<Array<Locale>>;
  orderBy?: InputMaybe<ProdutoOrderByInput>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<ProdutoWhereInput>;
};


/** Asset system model */
export type AssetImageUsuarioArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  forceParentLocale?: InputMaybe<Scalars['Boolean']>;
  last?: InputMaybe<Scalars['Int']>;
  locales?: InputMaybe<Array<Locale>>;
  orderBy?: InputMaybe<UsuarioOrderByInput>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<UsuarioWhereInput>;
};


/** Asset system model */
export type AssetLocalizationsArgs = {
  includeCurrent?: Scalars['Boolean'];
  locales?: Array<Locale>;
};


/** Asset system model */
export type AssetPublishedAtArgs = {
  variation?: SystemDateTimeFieldVariation;
};


/** Asset system model */
export type AssetPublishedByArgs = {
  forceParentLocale?: InputMaybe<Scalars['Boolean']>;
  locales?: InputMaybe<Array<Locale>>;
};


/** Asset system model */
export type AssetScheduledInArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  forceParentLocale?: InputMaybe<Scalars['Boolean']>;
  last?: InputMaybe<Scalars['Int']>;
  locales?: InputMaybe<Array<Locale>>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<ScheduledOperationWhereInput>;
};


/** Asset system model */
export type AssetThumbnailFarmaciaArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  forceParentLocale?: InputMaybe<Scalars['Boolean']>;
  last?: InputMaybe<Scalars['Int']>;
  locales?: InputMaybe<Array<Locale>>;
  orderBy?: InputMaybe<FarmaciaOrderByInput>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<FarmaciaWhereInput>;
};


/** Asset system model */
export type AssetThumbnailPostArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  forceParentLocale?: InputMaybe<Scalars['Boolean']>;
  last?: InputMaybe<Scalars['Int']>;
  locales?: InputMaybe<Array<Locale>>;
  orderBy?: InputMaybe<PostOrderByInput>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<PostWhereInput>;
};


/** Asset system model */
export type AssetUpdatedAtArgs = {
  variation?: SystemDateTimeFieldVariation;
};


/** Asset system model */
export type AssetUpdatedByArgs = {
  forceParentLocale?: InputMaybe<Scalars['Boolean']>;
  locales?: InputMaybe<Array<Locale>>;
};


/** Asset system model */
export type AssetUrlArgs = {
  transformation?: InputMaybe<AssetTransformationInput>;
};

export type AssetConnectInput = {
  /** Allow to specify document position in list of connected documents, will default to appending at end of list */
  position?: InputMaybe<ConnectPositionInput>;
  /** Document to connect */
  where: AssetWhereUniqueInput;
};

/** A connection to a list of items. */
export type AssetConnection = {
  __typename?: 'AssetConnection';
  aggregate: Aggregate;
  /** A list of edges. */
  edges: Array<AssetEdge>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

export type AssetCreateInput = {
  createdAt?: InputMaybe<Scalars['DateTime']>;
  fileName: Scalars['String'];
  handle: Scalars['String'];
  height?: InputMaybe<Scalars['Float']>;
  imageApoiador?: InputMaybe<ApoiadorCreateManyInlineInput>;
  imageProduto?: InputMaybe<ProdutoCreateManyInlineInput>;
  imageUsuario?: InputMaybe<UsuarioCreateManyInlineInput>;
  /** Inline mutations for managing document localizations excluding the default locale */
  localizations?: InputMaybe<AssetCreateLocalizationsInput>;
  mimeType?: InputMaybe<Scalars['String']>;
  size?: InputMaybe<Scalars['Float']>;
  thumbnailFarmacia?: InputMaybe<FarmaciaCreateManyInlineInput>;
  thumbnailPost?: InputMaybe<PostCreateManyInlineInput>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
  width?: InputMaybe<Scalars['Float']>;
};

export type AssetCreateLocalizationDataInput = {
  createdAt?: InputMaybe<Scalars['DateTime']>;
  fileName: Scalars['String'];
  handle: Scalars['String'];
  height?: InputMaybe<Scalars['Float']>;
  mimeType?: InputMaybe<Scalars['String']>;
  size?: InputMaybe<Scalars['Float']>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
  width?: InputMaybe<Scalars['Float']>;
};

export type AssetCreateLocalizationInput = {
  /** Localization input */
  data: AssetCreateLocalizationDataInput;
  locale: Locale;
};

export type AssetCreateLocalizationsInput = {
  /** Create localizations for the newly-created document */
  create?: InputMaybe<Array<AssetCreateLocalizationInput>>;
};

export type AssetCreateManyInlineInput = {
  /** Connect multiple existing Asset documents */
  connect?: InputMaybe<Array<AssetWhereUniqueInput>>;
  /** Create and connect multiple existing Asset documents */
  create?: InputMaybe<Array<AssetCreateInput>>;
};

export type AssetCreateOneInlineInput = {
  /** Connect one existing Asset document */
  connect?: InputMaybe<AssetWhereUniqueInput>;
  /** Create and connect one Asset document */
  create?: InputMaybe<AssetCreateInput>;
};

/** An edge in a connection. */
export type AssetEdge = {
  __typename?: 'AssetEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
  /** The item at the end of the edge. */
  node: Asset;
};

/** Identifies documents */
export type AssetManyWhereInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<AssetWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<AssetWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<AssetWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars['String']>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  createdAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  createdAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  /** All values less than the given value. */
  createdAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  createdAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** Any other value that exists and is not equal to the given value. */
  createdAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  createdBy?: InputMaybe<UserWhereInput>;
  documentInStages_every?: InputMaybe<AssetWhereStageInput>;
  documentInStages_none?: InputMaybe<AssetWhereStageInput>;
  documentInStages_some?: InputMaybe<AssetWhereStageInput>;
  id?: InputMaybe<Scalars['ID']>;
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars['ID']>;
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars['ID']>;
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** Any other value that exists and is not equal to the given value. */
  id_not?: InputMaybe<Scalars['ID']>;
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars['ID']>;
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars['ID']>;
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars['ID']>;
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars['ID']>;
  imageApoiador_every?: InputMaybe<ApoiadorWhereInput>;
  imageApoiador_none?: InputMaybe<ApoiadorWhereInput>;
  imageApoiador_some?: InputMaybe<ApoiadorWhereInput>;
  imageProduto_every?: InputMaybe<ProdutoWhereInput>;
  imageProduto_none?: InputMaybe<ProdutoWhereInput>;
  imageProduto_some?: InputMaybe<ProdutoWhereInput>;
  imageUsuario_every?: InputMaybe<UsuarioWhereInput>;
  imageUsuario_none?: InputMaybe<UsuarioWhereInput>;
  imageUsuario_some?: InputMaybe<UsuarioWhereInput>;
  publishedAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  publishedAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  publishedAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  publishedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  /** All values less than the given value. */
  publishedAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  publishedAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** Any other value that exists and is not equal to the given value. */
  publishedAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  publishedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  publishedBy?: InputMaybe<UserWhereInput>;
  scheduledIn_every?: InputMaybe<ScheduledOperationWhereInput>;
  scheduledIn_none?: InputMaybe<ScheduledOperationWhereInput>;
  scheduledIn_some?: InputMaybe<ScheduledOperationWhereInput>;
  thumbnailFarmacia_every?: InputMaybe<FarmaciaWhereInput>;
  thumbnailFarmacia_none?: InputMaybe<FarmaciaWhereInput>;
  thumbnailFarmacia_some?: InputMaybe<FarmaciaWhereInput>;
  thumbnailPost_every?: InputMaybe<PostWhereInput>;
  thumbnailPost_none?: InputMaybe<PostWhereInput>;
  thumbnailPost_some?: InputMaybe<PostWhereInput>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  updatedAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  updatedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  /** All values less than the given value. */
  updatedAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** Any other value that exists and is not equal to the given value. */
  updatedAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  updatedBy?: InputMaybe<UserWhereInput>;
};

export enum AssetOrderByInput {
  CreatedAtAsc = 'createdAt_ASC',
  CreatedAtDesc = 'createdAt_DESC',
  FileNameAsc = 'fileName_ASC',
  FileNameDesc = 'fileName_DESC',
  HandleAsc = 'handle_ASC',
  HandleDesc = 'handle_DESC',
  HeightAsc = 'height_ASC',
  HeightDesc = 'height_DESC',
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  MimeTypeAsc = 'mimeType_ASC',
  MimeTypeDesc = 'mimeType_DESC',
  PublishedAtAsc = 'publishedAt_ASC',
  PublishedAtDesc = 'publishedAt_DESC',
  SizeAsc = 'size_ASC',
  SizeDesc = 'size_DESC',
  UpdatedAtAsc = 'updatedAt_ASC',
  UpdatedAtDesc = 'updatedAt_DESC',
  WidthAsc = 'width_ASC',
  WidthDesc = 'width_DESC'
}

/** Transformations for Assets */
export type AssetTransformationInput = {
  document?: InputMaybe<DocumentTransformationInput>;
  image?: InputMaybe<ImageTransformationInput>;
  /** Pass true if you want to validate the passed transformation parameters */
  validateOptions?: InputMaybe<Scalars['Boolean']>;
};

export type AssetUpdateInput = {
  fileName?: InputMaybe<Scalars['String']>;
  handle?: InputMaybe<Scalars['String']>;
  height?: InputMaybe<Scalars['Float']>;
  imageApoiador?: InputMaybe<ApoiadorUpdateManyInlineInput>;
  imageProduto?: InputMaybe<ProdutoUpdateManyInlineInput>;
  imageUsuario?: InputMaybe<UsuarioUpdateManyInlineInput>;
  /** Manage document localizations */
  localizations?: InputMaybe<AssetUpdateLocalizationsInput>;
  mimeType?: InputMaybe<Scalars['String']>;
  size?: InputMaybe<Scalars['Float']>;
  thumbnailFarmacia?: InputMaybe<FarmaciaUpdateManyInlineInput>;
  thumbnailPost?: InputMaybe<PostUpdateManyInlineInput>;
  width?: InputMaybe<Scalars['Float']>;
};

export type AssetUpdateLocalizationDataInput = {
  fileName?: InputMaybe<Scalars['String']>;
  handle?: InputMaybe<Scalars['String']>;
  height?: InputMaybe<Scalars['Float']>;
  mimeType?: InputMaybe<Scalars['String']>;
  size?: InputMaybe<Scalars['Float']>;
  width?: InputMaybe<Scalars['Float']>;
};

export type AssetUpdateLocalizationInput = {
  data: AssetUpdateLocalizationDataInput;
  locale: Locale;
};

export type AssetUpdateLocalizationsInput = {
  /** Localizations to create */
  create?: InputMaybe<Array<AssetCreateLocalizationInput>>;
  /** Localizations to delete */
  delete?: InputMaybe<Array<Locale>>;
  /** Localizations to update */
  update?: InputMaybe<Array<AssetUpdateLocalizationInput>>;
  upsert?: InputMaybe<Array<AssetUpsertLocalizationInput>>;
};

export type AssetUpdateManyInlineInput = {
  /** Connect multiple existing Asset documents */
  connect?: InputMaybe<Array<AssetConnectInput>>;
  /** Create and connect multiple Asset documents */
  create?: InputMaybe<Array<AssetCreateInput>>;
  /** Delete multiple Asset documents */
  delete?: InputMaybe<Array<AssetWhereUniqueInput>>;
  /** Disconnect multiple Asset documents */
  disconnect?: InputMaybe<Array<AssetWhereUniqueInput>>;
  /** Override currently-connected documents with multiple existing Asset documents */
  set?: InputMaybe<Array<AssetWhereUniqueInput>>;
  /** Update multiple Asset documents */
  update?: InputMaybe<Array<AssetUpdateWithNestedWhereUniqueInput>>;
  /** Upsert multiple Asset documents */
  upsert?: InputMaybe<Array<AssetUpsertWithNestedWhereUniqueInput>>;
};

export type AssetUpdateManyInput = {
  fileName?: InputMaybe<Scalars['String']>;
  height?: InputMaybe<Scalars['Float']>;
  /** Optional updates to localizations */
  localizations?: InputMaybe<AssetUpdateManyLocalizationsInput>;
  mimeType?: InputMaybe<Scalars['String']>;
  size?: InputMaybe<Scalars['Float']>;
  width?: InputMaybe<Scalars['Float']>;
};

export type AssetUpdateManyLocalizationDataInput = {
  fileName?: InputMaybe<Scalars['String']>;
  height?: InputMaybe<Scalars['Float']>;
  mimeType?: InputMaybe<Scalars['String']>;
  size?: InputMaybe<Scalars['Float']>;
  width?: InputMaybe<Scalars['Float']>;
};

export type AssetUpdateManyLocalizationInput = {
  data: AssetUpdateManyLocalizationDataInput;
  locale: Locale;
};

export type AssetUpdateManyLocalizationsInput = {
  /** Localizations to update */
  update?: InputMaybe<Array<AssetUpdateManyLocalizationInput>>;
};

export type AssetUpdateManyWithNestedWhereInput = {
  /** Update many input */
  data: AssetUpdateManyInput;
  /** Document search */
  where: AssetWhereInput;
};

export type AssetUpdateOneInlineInput = {
  /** Connect existing Asset document */
  connect?: InputMaybe<AssetWhereUniqueInput>;
  /** Create and connect one Asset document */
  create?: InputMaybe<AssetCreateInput>;
  /** Delete currently connected Asset document */
  delete?: InputMaybe<Scalars['Boolean']>;
  /** Disconnect currently connected Asset document */
  disconnect?: InputMaybe<Scalars['Boolean']>;
  /** Update single Asset document */
  update?: InputMaybe<AssetUpdateWithNestedWhereUniqueInput>;
  /** Upsert single Asset document */
  upsert?: InputMaybe<AssetUpsertWithNestedWhereUniqueInput>;
};

export type AssetUpdateWithNestedWhereUniqueInput = {
  /** Document to update */
  data: AssetUpdateInput;
  /** Unique document search */
  where: AssetWhereUniqueInput;
};

export type AssetUpsertInput = {
  /** Create document if it didn't exist */
  create: AssetCreateInput;
  /** Update document if it exists */
  update: AssetUpdateInput;
};

export type AssetUpsertLocalizationInput = {
  create: AssetCreateLocalizationDataInput;
  locale: Locale;
  update: AssetUpdateLocalizationDataInput;
};

export type AssetUpsertWithNestedWhereUniqueInput = {
  /** Upsert data */
  data: AssetUpsertInput;
  /** Unique document search */
  where: AssetWhereUniqueInput;
};

/** This contains a set of filters that can be used to compare values internally */
export type AssetWhereComparatorInput = {
  /** This field can be used to request to check if the entry is outdated by internal comparison */
  outdated_to?: InputMaybe<Scalars['Boolean']>;
};

/** Identifies documents */
export type AssetWhereInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<AssetWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<AssetWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<AssetWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars['String']>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  createdAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  createdAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  /** All values less than the given value. */
  createdAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  createdAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** Any other value that exists and is not equal to the given value. */
  createdAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  createdBy?: InputMaybe<UserWhereInput>;
  documentInStages_every?: InputMaybe<AssetWhereStageInput>;
  documentInStages_none?: InputMaybe<AssetWhereStageInput>;
  documentInStages_some?: InputMaybe<AssetWhereStageInput>;
  fileName?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  fileName_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  fileName_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  fileName_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** Any other value that exists and is not equal to the given value. */
  fileName_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  fileName_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  fileName_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  fileName_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values not starting with the given string. */
  fileName_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  fileName_starts_with?: InputMaybe<Scalars['String']>;
  handle?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  handle_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  handle_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  handle_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** Any other value that exists and is not equal to the given value. */
  handle_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  handle_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  handle_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  handle_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values not starting with the given string. */
  handle_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  handle_starts_with?: InputMaybe<Scalars['String']>;
  height?: InputMaybe<Scalars['Float']>;
  /** All values greater than the given value. */
  height_gt?: InputMaybe<Scalars['Float']>;
  /** All values greater than or equal the given value. */
  height_gte?: InputMaybe<Scalars['Float']>;
  /** All values that are contained in given list. */
  height_in?: InputMaybe<Array<InputMaybe<Scalars['Float']>>>;
  /** All values less than the given value. */
  height_lt?: InputMaybe<Scalars['Float']>;
  /** All values less than or equal the given value. */
  height_lte?: InputMaybe<Scalars['Float']>;
  /** Any other value that exists and is not equal to the given value. */
  height_not?: InputMaybe<Scalars['Float']>;
  /** All values that are not contained in given list. */
  height_not_in?: InputMaybe<Array<InputMaybe<Scalars['Float']>>>;
  id?: InputMaybe<Scalars['ID']>;
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars['ID']>;
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars['ID']>;
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** Any other value that exists and is not equal to the given value. */
  id_not?: InputMaybe<Scalars['ID']>;
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars['ID']>;
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars['ID']>;
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars['ID']>;
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars['ID']>;
  imageApoiador_every?: InputMaybe<ApoiadorWhereInput>;
  imageApoiador_none?: InputMaybe<ApoiadorWhereInput>;
  imageApoiador_some?: InputMaybe<ApoiadorWhereInput>;
  imageProduto_every?: InputMaybe<ProdutoWhereInput>;
  imageProduto_none?: InputMaybe<ProdutoWhereInput>;
  imageProduto_some?: InputMaybe<ProdutoWhereInput>;
  imageUsuario_every?: InputMaybe<UsuarioWhereInput>;
  imageUsuario_none?: InputMaybe<UsuarioWhereInput>;
  imageUsuario_some?: InputMaybe<UsuarioWhereInput>;
  mimeType?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  mimeType_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  mimeType_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  mimeType_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** Any other value that exists and is not equal to the given value. */
  mimeType_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  mimeType_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  mimeType_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  mimeType_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values not starting with the given string. */
  mimeType_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  mimeType_starts_with?: InputMaybe<Scalars['String']>;
  publishedAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  publishedAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  publishedAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  publishedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  /** All values less than the given value. */
  publishedAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  publishedAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** Any other value that exists and is not equal to the given value. */
  publishedAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  publishedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  publishedBy?: InputMaybe<UserWhereInput>;
  scheduledIn_every?: InputMaybe<ScheduledOperationWhereInput>;
  scheduledIn_none?: InputMaybe<ScheduledOperationWhereInput>;
  scheduledIn_some?: InputMaybe<ScheduledOperationWhereInput>;
  size?: InputMaybe<Scalars['Float']>;
  /** All values greater than the given value. */
  size_gt?: InputMaybe<Scalars['Float']>;
  /** All values greater than or equal the given value. */
  size_gte?: InputMaybe<Scalars['Float']>;
  /** All values that are contained in given list. */
  size_in?: InputMaybe<Array<InputMaybe<Scalars['Float']>>>;
  /** All values less than the given value. */
  size_lt?: InputMaybe<Scalars['Float']>;
  /** All values less than or equal the given value. */
  size_lte?: InputMaybe<Scalars['Float']>;
  /** Any other value that exists and is not equal to the given value. */
  size_not?: InputMaybe<Scalars['Float']>;
  /** All values that are not contained in given list. */
  size_not_in?: InputMaybe<Array<InputMaybe<Scalars['Float']>>>;
  thumbnailFarmacia_every?: InputMaybe<FarmaciaWhereInput>;
  thumbnailFarmacia_none?: InputMaybe<FarmaciaWhereInput>;
  thumbnailFarmacia_some?: InputMaybe<FarmaciaWhereInput>;
  thumbnailPost_every?: InputMaybe<PostWhereInput>;
  thumbnailPost_none?: InputMaybe<PostWhereInput>;
  thumbnailPost_some?: InputMaybe<PostWhereInput>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  updatedAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  updatedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  /** All values less than the given value. */
  updatedAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** Any other value that exists and is not equal to the given value. */
  updatedAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  updatedBy?: InputMaybe<UserWhereInput>;
  width?: InputMaybe<Scalars['Float']>;
  /** All values greater than the given value. */
  width_gt?: InputMaybe<Scalars['Float']>;
  /** All values greater than or equal the given value. */
  width_gte?: InputMaybe<Scalars['Float']>;
  /** All values that are contained in given list. */
  width_in?: InputMaybe<Array<InputMaybe<Scalars['Float']>>>;
  /** All values less than the given value. */
  width_lt?: InputMaybe<Scalars['Float']>;
  /** All values less than or equal the given value. */
  width_lte?: InputMaybe<Scalars['Float']>;
  /** Any other value that exists and is not equal to the given value. */
  width_not?: InputMaybe<Scalars['Float']>;
  /** All values that are not contained in given list. */
  width_not_in?: InputMaybe<Array<InputMaybe<Scalars['Float']>>>;
};

/** The document in stages filter allows specifying a stage entry to cross compare the same document between different stages */
export type AssetWhereStageInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<AssetWhereStageInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<AssetWhereStageInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<AssetWhereStageInput>>;
  /** This field contains fields which can be set as true or false to specify an internal comparison */
  compareWithParent?: InputMaybe<AssetWhereComparatorInput>;
  /** Specify the stage to compare with */
  stage?: InputMaybe<Stage>;
};

/** References Asset record uniquely */
export type AssetWhereUniqueInput = {
  id?: InputMaybe<Scalars['ID']>;
};

export type BatchPayload = {
  __typename?: 'BatchPayload';
  /** The number of nodes that have been affected by the Batch operation. */
  count: Scalars['Long'];
};

/** Representing a color value comprising of HEX, RGBA and css color values */
export type Color = {
  __typename?: 'Color';
  css: Scalars['String'];
  hex: Scalars['Hex'];
  rgba: Rgba;
};

/** Accepts either HEX or RGBA color value. At least one of hex or rgba value should be passed. If both are passed RGBA is used. */
export type ColorInput = {
  hex?: InputMaybe<Scalars['Hex']>;
  rgba?: InputMaybe<RgbaInput>;
};

export type ConnectPositionInput = {
  /** Connect document after specified document */
  after?: InputMaybe<Scalars['ID']>;
  /** Connect document before specified document */
  before?: InputMaybe<Scalars['ID']>;
  /** Connect document at last position */
  end?: InputMaybe<Scalars['Boolean']>;
  /** Connect document at first position */
  start?: InputMaybe<Scalars['Boolean']>;
};

export enum DocumentFileTypes {
  Doc = 'doc',
  Docx = 'docx',
  Html = 'html',
  Jpg = 'jpg',
  Odp = 'odp',
  Ods = 'ods',
  Odt = 'odt',
  Pdf = 'pdf',
  Png = 'png',
  Ppt = 'ppt',
  Pptx = 'pptx',
  Svg = 'svg',
  Txt = 'txt',
  Webp = 'webp',
  Xls = 'xls',
  Xlsx = 'xlsx'
}

export type DocumentOutputInput = {
  /**
   * Transforms a document into a desired file type.
   * See this matrix for format support:
   *
   * PDF:	jpg, odp, ods, odt, png, svg, txt, and webp
   * DOC:	docx, html, jpg, odt, pdf, png, svg, txt, and webp
   * DOCX:	doc, html, jpg, odt, pdf, png, svg, txt, and webp
   * ODT:	doc, docx, html, jpg, pdf, png, svg, txt, and webp
   * XLS:	jpg, pdf, ods, png, svg, xlsx, and webp
   * XLSX:	jpg, pdf, ods, png, svg, xls, and webp
   * ODS:	jpg, pdf, png, xls, svg, xlsx, and webp
   * PPT:	jpg, odp, pdf, png, svg, pptx, and webp
   * PPTX:	jpg, odp, pdf, png, svg, ppt, and webp
   * ODP:	jpg, pdf, png, ppt, svg, pptx, and webp
   * BMP:	jpg, odp, ods, odt, pdf, png, svg, and webp
   * GIF:	jpg, odp, ods, odt, pdf, png, svg, and webp
   * JPG:	jpg, odp, ods, odt, pdf, png, svg, and webp
   * PNG:	jpg, odp, ods, odt, pdf, png, svg, and webp
   * WEBP:	jpg, odp, ods, odt, pdf, png, svg, and webp
   * TIFF:	jpg, odp, ods, odt, pdf, png, svg, and webp
   * AI:	    jpg, odp, ods, odt, pdf, png, svg, and webp
   * PSD:	jpg, odp, ods, odt, pdf, png, svg, and webp
   * SVG:	jpg, odp, ods, odt, pdf, png, and webp
   * HTML:	jpg, odt, pdf, svg, txt, and webp
   * TXT:	jpg, html, odt, pdf, svg, and webp
   */
  format?: InputMaybe<DocumentFileTypes>;
};

/** Transformations for Documents */
export type DocumentTransformationInput = {
  /** Changes the output for the file. */
  output?: InputMaybe<DocumentOutputInput>;
};

export type DocumentVersion = {
  __typename?: 'DocumentVersion';
  createdAt: Scalars['DateTime'];
  data?: Maybe<Scalars['Json']>;
  id: Scalars['ID'];
  revision: Scalars['Int'];
  stage: Stage;
};

export type Farmacia = Node & {
  __typename?: 'Farmacia';
  city: Scalars['String'];
  /** The time the document was created */
  createdAt: Scalars['DateTime'];
  /** User that created this document */
  createdBy?: Maybe<User>;
  description?: Maybe<Scalars['String']>;
  /** Get the document in other stages */
  documentInStages: Array<Farmacia>;
  email?: Maybe<Scalars['String']>;
  fazentrega?: Maybe<Scalars['Boolean']>;
  /** List of Farmacia versions */
  history: Array<Version>;
  /** The unique identifier */
  id: Scalars['ID'];
  instagram?: Maybe<Scalars['String']>;
  localization?: Maybe<Location>;
  name: Scalars['String'];
  neighborhood: Scalars['String'];
  phone: Scalars['Int'];
  plantoes: Array<Plantao>;
  programas: Array<FarmaciaprogramasUnion>;
  /** The time the document was published. Null on documents in draft stage. */
  publishedAt?: Maybe<Scalars['DateTime']>;
  /** User that last published this document */
  publishedBy?: Maybe<User>;
  scheduledIn: Array<ScheduledOperation>;
  slug: Scalars['String'];
  /** System stage field */
  stage: Stage;
  street: Scalars['String'];
  thumbnail?: Maybe<Asset>;
  /** The time the document was updated */
  updatedAt: Scalars['DateTime'];
  /** User that last updated this document */
  updatedBy?: Maybe<User>;
  urllogo: Scalars['String'];
  whatsapp?: Maybe<Scalars['Int']>;
  zipCode?: Maybe<Scalars['Int']>;
};


export type FarmaciaCreatedByArgs = {
  forceParentLocale?: InputMaybe<Scalars['Boolean']>;
  locales?: InputMaybe<Array<Locale>>;
};


export type FarmaciaDocumentInStagesArgs = {
  includeCurrent?: Scalars['Boolean'];
  inheritLocale?: Scalars['Boolean'];
  stages?: Array<Stage>;
};


export type FarmaciaHistoryArgs = {
  limit?: Scalars['Int'];
  skip?: Scalars['Int'];
  stageOverride?: InputMaybe<Stage>;
};


export type FarmaciaPlantoesArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  forceParentLocale?: InputMaybe<Scalars['Boolean']>;
  last?: InputMaybe<Scalars['Int']>;
  locales?: InputMaybe<Array<Locale>>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<PlantaoWhereInput>;
};


export type FarmaciaProgramasArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  forceParentLocale?: InputMaybe<Scalars['Boolean']>;
  last?: InputMaybe<Scalars['Int']>;
  locales?: InputMaybe<Array<Locale>>;
  skip?: InputMaybe<Scalars['Int']>;
};


export type FarmaciaPublishedByArgs = {
  forceParentLocale?: InputMaybe<Scalars['Boolean']>;
  locales?: InputMaybe<Array<Locale>>;
};


export type FarmaciaScheduledInArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  forceParentLocale?: InputMaybe<Scalars['Boolean']>;
  last?: InputMaybe<Scalars['Int']>;
  locales?: InputMaybe<Array<Locale>>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<ScheduledOperationWhereInput>;
};


export type FarmaciaThumbnailArgs = {
  forceParentLocale?: InputMaybe<Scalars['Boolean']>;
  locales?: InputMaybe<Array<Locale>>;
};


export type FarmaciaUpdatedByArgs = {
  forceParentLocale?: InputMaybe<Scalars['Boolean']>;
  locales?: InputMaybe<Array<Locale>>;
};

export type FarmaciaConnectInput = {
  /** Allow to specify document position in list of connected documents, will default to appending at end of list */
  position?: InputMaybe<ConnectPositionInput>;
  /** Document to connect */
  where: FarmaciaWhereUniqueInput;
};

/** A connection to a list of items. */
export type FarmaciaConnection = {
  __typename?: 'FarmaciaConnection';
  aggregate: Aggregate;
  /** A list of edges. */
  edges: Array<FarmaciaEdge>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

export type FarmaciaCreateInput = {
  city: Scalars['String'];
  createdAt?: InputMaybe<Scalars['DateTime']>;
  description?: InputMaybe<Scalars['String']>;
  email?: InputMaybe<Scalars['String']>;
  fazentrega?: InputMaybe<Scalars['Boolean']>;
  instagram?: InputMaybe<Scalars['String']>;
  localization?: InputMaybe<LocationInput>;
  name: Scalars['String'];
  neighborhood: Scalars['String'];
  phone: Scalars['Int'];
  plantoes?: InputMaybe<PlantaoCreateManyInlineInput>;
  programas?: InputMaybe<FarmaciaprogramasUnionCreateManyInlineInput>;
  slug: Scalars['String'];
  street: Scalars['String'];
  thumbnail?: InputMaybe<AssetCreateOneInlineInput>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
  urllogo: Scalars['String'];
  whatsapp?: InputMaybe<Scalars['Int']>;
  zipCode?: InputMaybe<Scalars['Int']>;
};

export type FarmaciaCreateManyInlineInput = {
  /** Connect multiple existing Farmacia documents */
  connect?: InputMaybe<Array<FarmaciaWhereUniqueInput>>;
  /** Create and connect multiple existing Farmacia documents */
  create?: InputMaybe<Array<FarmaciaCreateInput>>;
};

export type FarmaciaCreateOneInlineInput = {
  /** Connect one existing Farmacia document */
  connect?: InputMaybe<FarmaciaWhereUniqueInput>;
  /** Create and connect one Farmacia document */
  create?: InputMaybe<FarmaciaCreateInput>;
};

/** An edge in a connection. */
export type FarmaciaEdge = {
  __typename?: 'FarmaciaEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
  /** The item at the end of the edge. */
  node: Farmacia;
};

/** Identifies documents */
export type FarmaciaManyWhereInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<FarmaciaWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<FarmaciaWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<FarmaciaWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars['String']>;
  city?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  city_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  city_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  city_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** Any other value that exists and is not equal to the given value. */
  city_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  city_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  city_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  city_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values not starting with the given string. */
  city_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  city_starts_with?: InputMaybe<Scalars['String']>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  createdAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  createdAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  /** All values less than the given value. */
  createdAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  createdAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** Any other value that exists and is not equal to the given value. */
  createdAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  createdBy?: InputMaybe<UserWhereInput>;
  description?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  description_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  description_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  description_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** Any other value that exists and is not equal to the given value. */
  description_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  description_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  description_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  description_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values not starting with the given string. */
  description_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  description_starts_with?: InputMaybe<Scalars['String']>;
  documentInStages_every?: InputMaybe<FarmaciaWhereStageInput>;
  documentInStages_none?: InputMaybe<FarmaciaWhereStageInput>;
  documentInStages_some?: InputMaybe<FarmaciaWhereStageInput>;
  email?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  email_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  email_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  email_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** Any other value that exists and is not equal to the given value. */
  email_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  email_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  email_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  email_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values not starting with the given string. */
  email_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  email_starts_with?: InputMaybe<Scalars['String']>;
  fazentrega?: InputMaybe<Scalars['Boolean']>;
  /** Any other value that exists and is not equal to the given value. */
  fazentrega_not?: InputMaybe<Scalars['Boolean']>;
  id?: InputMaybe<Scalars['ID']>;
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars['ID']>;
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars['ID']>;
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** Any other value that exists and is not equal to the given value. */
  id_not?: InputMaybe<Scalars['ID']>;
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars['ID']>;
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars['ID']>;
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars['ID']>;
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars['ID']>;
  instagram?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  instagram_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  instagram_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  instagram_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** Any other value that exists and is not equal to the given value. */
  instagram_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  instagram_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  instagram_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  instagram_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values not starting with the given string. */
  instagram_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  instagram_starts_with?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  name_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  name_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  name_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** Any other value that exists and is not equal to the given value. */
  name_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  name_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  name_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  name_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values not starting with the given string. */
  name_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  name_starts_with?: InputMaybe<Scalars['String']>;
  neighborhood?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  neighborhood_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  neighborhood_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  neighborhood_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** Any other value that exists and is not equal to the given value. */
  neighborhood_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  neighborhood_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  neighborhood_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  neighborhood_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values not starting with the given string. */
  neighborhood_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  neighborhood_starts_with?: InputMaybe<Scalars['String']>;
  phone?: InputMaybe<Scalars['Int']>;
  /** All values greater than the given value. */
  phone_gt?: InputMaybe<Scalars['Int']>;
  /** All values greater than or equal the given value. */
  phone_gte?: InputMaybe<Scalars['Int']>;
  /** All values that are contained in given list. */
  phone_in?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  /** All values less than the given value. */
  phone_lt?: InputMaybe<Scalars['Int']>;
  /** All values less than or equal the given value. */
  phone_lte?: InputMaybe<Scalars['Int']>;
  /** Any other value that exists and is not equal to the given value. */
  phone_not?: InputMaybe<Scalars['Int']>;
  /** All values that are not contained in given list. */
  phone_not_in?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  plantoes_every?: InputMaybe<PlantaoWhereInput>;
  plantoes_none?: InputMaybe<PlantaoWhereInput>;
  plantoes_some?: InputMaybe<PlantaoWhereInput>;
  /** All values in which the union is empty. */
  programas_empty?: InputMaybe<Scalars['Boolean']>;
  /** Matches if the modular component contains at least one connection to the item provided to the filter */
  programas_some?: InputMaybe<FarmaciaprogramasUnionWhereInput>;
  publishedAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  publishedAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  publishedAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  publishedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  /** All values less than the given value. */
  publishedAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  publishedAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** Any other value that exists and is not equal to the given value. */
  publishedAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  publishedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  publishedBy?: InputMaybe<UserWhereInput>;
  scheduledIn_every?: InputMaybe<ScheduledOperationWhereInput>;
  scheduledIn_none?: InputMaybe<ScheduledOperationWhereInput>;
  scheduledIn_some?: InputMaybe<ScheduledOperationWhereInput>;
  slug?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  slug_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  slug_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  slug_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** Any other value that exists and is not equal to the given value. */
  slug_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  slug_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  slug_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  slug_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values not starting with the given string. */
  slug_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  slug_starts_with?: InputMaybe<Scalars['String']>;
  street?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  street_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  street_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  street_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** Any other value that exists and is not equal to the given value. */
  street_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  street_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  street_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  street_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values not starting with the given string. */
  street_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  street_starts_with?: InputMaybe<Scalars['String']>;
  thumbnail?: InputMaybe<AssetWhereInput>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  updatedAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  updatedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  /** All values less than the given value. */
  updatedAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** Any other value that exists and is not equal to the given value. */
  updatedAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  updatedBy?: InputMaybe<UserWhereInput>;
  urllogo?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  urllogo_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  urllogo_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  urllogo_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** Any other value that exists and is not equal to the given value. */
  urllogo_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  urllogo_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  urllogo_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  urllogo_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values not starting with the given string. */
  urllogo_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  urllogo_starts_with?: InputMaybe<Scalars['String']>;
  whatsapp?: InputMaybe<Scalars['Int']>;
  /** All values greater than the given value. */
  whatsapp_gt?: InputMaybe<Scalars['Int']>;
  /** All values greater than or equal the given value. */
  whatsapp_gte?: InputMaybe<Scalars['Int']>;
  /** All values that are contained in given list. */
  whatsapp_in?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  /** All values less than the given value. */
  whatsapp_lt?: InputMaybe<Scalars['Int']>;
  /** All values less than or equal the given value. */
  whatsapp_lte?: InputMaybe<Scalars['Int']>;
  /** Any other value that exists and is not equal to the given value. */
  whatsapp_not?: InputMaybe<Scalars['Int']>;
  /** All values that are not contained in given list. */
  whatsapp_not_in?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  zipCode?: InputMaybe<Scalars['Int']>;
  /** All values greater than the given value. */
  zipCode_gt?: InputMaybe<Scalars['Int']>;
  /** All values greater than or equal the given value. */
  zipCode_gte?: InputMaybe<Scalars['Int']>;
  /** All values that are contained in given list. */
  zipCode_in?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  /** All values less than the given value. */
  zipCode_lt?: InputMaybe<Scalars['Int']>;
  /** All values less than or equal the given value. */
  zipCode_lte?: InputMaybe<Scalars['Int']>;
  /** Any other value that exists and is not equal to the given value. */
  zipCode_not?: InputMaybe<Scalars['Int']>;
  /** All values that are not contained in given list. */
  zipCode_not_in?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
};

export enum FarmaciaOrderByInput {
  CityAsc = 'city_ASC',
  CityDesc = 'city_DESC',
  CreatedAtAsc = 'createdAt_ASC',
  CreatedAtDesc = 'createdAt_DESC',
  DescriptionAsc = 'description_ASC',
  DescriptionDesc = 'description_DESC',
  EmailAsc = 'email_ASC',
  EmailDesc = 'email_DESC',
  FazentregaAsc = 'fazentrega_ASC',
  FazentregaDesc = 'fazentrega_DESC',
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  InstagramAsc = 'instagram_ASC',
  InstagramDesc = 'instagram_DESC',
  NameAsc = 'name_ASC',
  NameDesc = 'name_DESC',
  NeighborhoodAsc = 'neighborhood_ASC',
  NeighborhoodDesc = 'neighborhood_DESC',
  PhoneAsc = 'phone_ASC',
  PhoneDesc = 'phone_DESC',
  PublishedAtAsc = 'publishedAt_ASC',
  PublishedAtDesc = 'publishedAt_DESC',
  SlugAsc = 'slug_ASC',
  SlugDesc = 'slug_DESC',
  StreetAsc = 'street_ASC',
  StreetDesc = 'street_DESC',
  UpdatedAtAsc = 'updatedAt_ASC',
  UpdatedAtDesc = 'updatedAt_DESC',
  UrllogoAsc = 'urllogo_ASC',
  UrllogoDesc = 'urllogo_DESC',
  WhatsappAsc = 'whatsapp_ASC',
  WhatsappDesc = 'whatsapp_DESC',
  ZipCodeAsc = 'zipCode_ASC',
  ZipCodeDesc = 'zipCode_DESC'
}

export type FarmaciaUpdateInput = {
  city?: InputMaybe<Scalars['String']>;
  description?: InputMaybe<Scalars['String']>;
  email?: InputMaybe<Scalars['String']>;
  fazentrega?: InputMaybe<Scalars['Boolean']>;
  instagram?: InputMaybe<Scalars['String']>;
  localization?: InputMaybe<LocationInput>;
  name?: InputMaybe<Scalars['String']>;
  neighborhood?: InputMaybe<Scalars['String']>;
  phone?: InputMaybe<Scalars['Int']>;
  plantoes?: InputMaybe<PlantaoUpdateManyInlineInput>;
  programas?: InputMaybe<FarmaciaprogramasUnionUpdateManyInlineInput>;
  slug?: InputMaybe<Scalars['String']>;
  street?: InputMaybe<Scalars['String']>;
  thumbnail?: InputMaybe<AssetUpdateOneInlineInput>;
  urllogo?: InputMaybe<Scalars['String']>;
  whatsapp?: InputMaybe<Scalars['Int']>;
  zipCode?: InputMaybe<Scalars['Int']>;
};

export type FarmaciaUpdateManyInlineInput = {
  /** Connect multiple existing Farmacia documents */
  connect?: InputMaybe<Array<FarmaciaConnectInput>>;
  /** Create and connect multiple Farmacia documents */
  create?: InputMaybe<Array<FarmaciaCreateInput>>;
  /** Delete multiple Farmacia documents */
  delete?: InputMaybe<Array<FarmaciaWhereUniqueInput>>;
  /** Disconnect multiple Farmacia documents */
  disconnect?: InputMaybe<Array<FarmaciaWhereUniqueInput>>;
  /** Override currently-connected documents with multiple existing Farmacia documents */
  set?: InputMaybe<Array<FarmaciaWhereUniqueInput>>;
  /** Update multiple Farmacia documents */
  update?: InputMaybe<Array<FarmaciaUpdateWithNestedWhereUniqueInput>>;
  /** Upsert multiple Farmacia documents */
  upsert?: InputMaybe<Array<FarmaciaUpsertWithNestedWhereUniqueInput>>;
};

export type FarmaciaUpdateManyInput = {
  city?: InputMaybe<Scalars['String']>;
  description?: InputMaybe<Scalars['String']>;
  email?: InputMaybe<Scalars['String']>;
  fazentrega?: InputMaybe<Scalars['Boolean']>;
  instagram?: InputMaybe<Scalars['String']>;
  localization?: InputMaybe<LocationInput>;
  name?: InputMaybe<Scalars['String']>;
  neighborhood?: InputMaybe<Scalars['String']>;
  phone?: InputMaybe<Scalars['Int']>;
  street?: InputMaybe<Scalars['String']>;
  urllogo?: InputMaybe<Scalars['String']>;
  whatsapp?: InputMaybe<Scalars['Int']>;
  zipCode?: InputMaybe<Scalars['Int']>;
};

export type FarmaciaUpdateManyWithNestedWhereInput = {
  /** Update many input */
  data: FarmaciaUpdateManyInput;
  /** Document search */
  where: FarmaciaWhereInput;
};

export type FarmaciaUpdateOneInlineInput = {
  /** Connect existing Farmacia document */
  connect?: InputMaybe<FarmaciaWhereUniqueInput>;
  /** Create and connect one Farmacia document */
  create?: InputMaybe<FarmaciaCreateInput>;
  /** Delete currently connected Farmacia document */
  delete?: InputMaybe<Scalars['Boolean']>;
  /** Disconnect currently connected Farmacia document */
  disconnect?: InputMaybe<Scalars['Boolean']>;
  /** Update single Farmacia document */
  update?: InputMaybe<FarmaciaUpdateWithNestedWhereUniqueInput>;
  /** Upsert single Farmacia document */
  upsert?: InputMaybe<FarmaciaUpsertWithNestedWhereUniqueInput>;
};

export type FarmaciaUpdateWithNestedWhereUniqueInput = {
  /** Document to update */
  data: FarmaciaUpdateInput;
  /** Unique document search */
  where: FarmaciaWhereUniqueInput;
};

export type FarmaciaUpsertInput = {
  /** Create document if it didn't exist */
  create: FarmaciaCreateInput;
  /** Update document if it exists */
  update: FarmaciaUpdateInput;
};

export type FarmaciaUpsertWithNestedWhereUniqueInput = {
  /** Upsert data */
  data: FarmaciaUpsertInput;
  /** Unique document search */
  where: FarmaciaWhereUniqueInput;
};

/** This contains a set of filters that can be used to compare values internally */
export type FarmaciaWhereComparatorInput = {
  /** This field can be used to request to check if the entry is outdated by internal comparison */
  outdated_to?: InputMaybe<Scalars['Boolean']>;
};

/** Identifies documents */
export type FarmaciaWhereInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<FarmaciaWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<FarmaciaWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<FarmaciaWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars['String']>;
  city?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  city_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  city_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  city_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** Any other value that exists and is not equal to the given value. */
  city_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  city_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  city_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  city_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values not starting with the given string. */
  city_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  city_starts_with?: InputMaybe<Scalars['String']>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  createdAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  createdAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  /** All values less than the given value. */
  createdAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  createdAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** Any other value that exists and is not equal to the given value. */
  createdAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  createdBy?: InputMaybe<UserWhereInput>;
  description?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  description_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  description_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  description_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** Any other value that exists and is not equal to the given value. */
  description_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  description_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  description_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  description_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values not starting with the given string. */
  description_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  description_starts_with?: InputMaybe<Scalars['String']>;
  documentInStages_every?: InputMaybe<FarmaciaWhereStageInput>;
  documentInStages_none?: InputMaybe<FarmaciaWhereStageInput>;
  documentInStages_some?: InputMaybe<FarmaciaWhereStageInput>;
  email?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  email_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  email_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  email_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** Any other value that exists and is not equal to the given value. */
  email_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  email_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  email_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  email_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values not starting with the given string. */
  email_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  email_starts_with?: InputMaybe<Scalars['String']>;
  fazentrega?: InputMaybe<Scalars['Boolean']>;
  /** Any other value that exists and is not equal to the given value. */
  fazentrega_not?: InputMaybe<Scalars['Boolean']>;
  id?: InputMaybe<Scalars['ID']>;
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars['ID']>;
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars['ID']>;
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** Any other value that exists and is not equal to the given value. */
  id_not?: InputMaybe<Scalars['ID']>;
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars['ID']>;
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars['ID']>;
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars['ID']>;
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars['ID']>;
  instagram?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  instagram_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  instagram_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  instagram_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** Any other value that exists and is not equal to the given value. */
  instagram_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  instagram_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  instagram_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  instagram_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values not starting with the given string. */
  instagram_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  instagram_starts_with?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  name_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  name_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  name_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** Any other value that exists and is not equal to the given value. */
  name_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  name_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  name_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  name_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values not starting with the given string. */
  name_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  name_starts_with?: InputMaybe<Scalars['String']>;
  neighborhood?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  neighborhood_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  neighborhood_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  neighborhood_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** Any other value that exists and is not equal to the given value. */
  neighborhood_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  neighborhood_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  neighborhood_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  neighborhood_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values not starting with the given string. */
  neighborhood_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  neighborhood_starts_with?: InputMaybe<Scalars['String']>;
  phone?: InputMaybe<Scalars['Int']>;
  /** All values greater than the given value. */
  phone_gt?: InputMaybe<Scalars['Int']>;
  /** All values greater than or equal the given value. */
  phone_gte?: InputMaybe<Scalars['Int']>;
  /** All values that are contained in given list. */
  phone_in?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  /** All values less than the given value. */
  phone_lt?: InputMaybe<Scalars['Int']>;
  /** All values less than or equal the given value. */
  phone_lte?: InputMaybe<Scalars['Int']>;
  /** Any other value that exists and is not equal to the given value. */
  phone_not?: InputMaybe<Scalars['Int']>;
  /** All values that are not contained in given list. */
  phone_not_in?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  plantoes_every?: InputMaybe<PlantaoWhereInput>;
  plantoes_none?: InputMaybe<PlantaoWhereInput>;
  plantoes_some?: InputMaybe<PlantaoWhereInput>;
  /** All values in which the union is empty. */
  programas_empty?: InputMaybe<Scalars['Boolean']>;
  /** Matches if the modular component contains at least one connection to the item provided to the filter */
  programas_some?: InputMaybe<FarmaciaprogramasUnionWhereInput>;
  publishedAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  publishedAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  publishedAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  publishedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  /** All values less than the given value. */
  publishedAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  publishedAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** Any other value that exists and is not equal to the given value. */
  publishedAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  publishedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  publishedBy?: InputMaybe<UserWhereInput>;
  scheduledIn_every?: InputMaybe<ScheduledOperationWhereInput>;
  scheduledIn_none?: InputMaybe<ScheduledOperationWhereInput>;
  scheduledIn_some?: InputMaybe<ScheduledOperationWhereInput>;
  slug?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  slug_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  slug_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  slug_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** Any other value that exists and is not equal to the given value. */
  slug_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  slug_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  slug_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  slug_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values not starting with the given string. */
  slug_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  slug_starts_with?: InputMaybe<Scalars['String']>;
  street?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  street_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  street_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  street_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** Any other value that exists and is not equal to the given value. */
  street_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  street_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  street_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  street_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values not starting with the given string. */
  street_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  street_starts_with?: InputMaybe<Scalars['String']>;
  thumbnail?: InputMaybe<AssetWhereInput>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  updatedAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  updatedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  /** All values less than the given value. */
  updatedAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** Any other value that exists and is not equal to the given value. */
  updatedAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  updatedBy?: InputMaybe<UserWhereInput>;
  urllogo?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  urllogo_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  urllogo_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  urllogo_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** Any other value that exists and is not equal to the given value. */
  urllogo_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  urllogo_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  urllogo_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  urllogo_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values not starting with the given string. */
  urllogo_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  urllogo_starts_with?: InputMaybe<Scalars['String']>;
  whatsapp?: InputMaybe<Scalars['Int']>;
  /** All values greater than the given value. */
  whatsapp_gt?: InputMaybe<Scalars['Int']>;
  /** All values greater than or equal the given value. */
  whatsapp_gte?: InputMaybe<Scalars['Int']>;
  /** All values that are contained in given list. */
  whatsapp_in?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  /** All values less than the given value. */
  whatsapp_lt?: InputMaybe<Scalars['Int']>;
  /** All values less than or equal the given value. */
  whatsapp_lte?: InputMaybe<Scalars['Int']>;
  /** Any other value that exists and is not equal to the given value. */
  whatsapp_not?: InputMaybe<Scalars['Int']>;
  /** All values that are not contained in given list. */
  whatsapp_not_in?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  zipCode?: InputMaybe<Scalars['Int']>;
  /** All values greater than the given value. */
  zipCode_gt?: InputMaybe<Scalars['Int']>;
  /** All values greater than or equal the given value. */
  zipCode_gte?: InputMaybe<Scalars['Int']>;
  /** All values that are contained in given list. */
  zipCode_in?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  /** All values less than the given value. */
  zipCode_lt?: InputMaybe<Scalars['Int']>;
  /** All values less than or equal the given value. */
  zipCode_lte?: InputMaybe<Scalars['Int']>;
  /** Any other value that exists and is not equal to the given value. */
  zipCode_not?: InputMaybe<Scalars['Int']>;
  /** All values that are not contained in given list. */
  zipCode_not_in?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
};

/** The document in stages filter allows specifying a stage entry to cross compare the same document between different stages */
export type FarmaciaWhereStageInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<FarmaciaWhereStageInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<FarmaciaWhereStageInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<FarmaciaWhereStageInput>>;
  /** This field contains fields which can be set as true or false to specify an internal comparison */
  compareWithParent?: InputMaybe<FarmaciaWhereComparatorInput>;
  /** Specify the stage to compare with */
  stage?: InputMaybe<Stage>;
};

/** References Farmacia record uniquely */
export type FarmaciaWhereUniqueInput = {
  id?: InputMaybe<Scalars['ID']>;
  slug?: InputMaybe<Scalars['String']>;
};

export type FarmaciaprogramasUnion = Itemprograma;

export type FarmaciaprogramasUnionConnectInput = {
  Itemprograma?: InputMaybe<ItemprogramaConnectInput>;
};

export type FarmaciaprogramasUnionCreateInput = {
  Itemprograma?: InputMaybe<ItemprogramaCreateInput>;
};

export type FarmaciaprogramasUnionCreateManyInlineInput = {
  /** Create and connect multiple existing FarmaciaprogramasUnion documents */
  create?: InputMaybe<Array<FarmaciaprogramasUnionCreateInput>>;
};

export type FarmaciaprogramasUnionCreateOneInlineInput = {
  /** Create and connect one FarmaciaprogramasUnion document */
  create?: InputMaybe<FarmaciaprogramasUnionCreateInput>;
};

export type FarmaciaprogramasUnionCreateWithPositionInput = {
  Itemprograma?: InputMaybe<ItemprogramaCreateWithPositionInput>;
};

export type FarmaciaprogramasUnionUpdateInput = {
  Itemprograma?: InputMaybe<ItemprogramaUpdateInput>;
};

export type FarmaciaprogramasUnionUpdateManyInlineInput = {
  /** Create and connect multiple FarmaciaprogramasUnion component instances */
  create?: InputMaybe<Array<FarmaciaprogramasUnionCreateWithPositionInput>>;
  /** Delete multiple FarmaciaprogramasUnion documents */
  delete?: InputMaybe<Array<FarmaciaprogramasUnionWhereUniqueInput>>;
  /** Update multiple FarmaciaprogramasUnion component instances */
  update?: InputMaybe<Array<FarmaciaprogramasUnionUpdateWithNestedWhereUniqueAndPositionInput>>;
  /** Upsert multiple FarmaciaprogramasUnion component instances */
  upsert?: InputMaybe<Array<FarmaciaprogramasUnionUpsertWithNestedWhereUniqueAndPositionInput>>;
};

export type FarmaciaprogramasUnionUpdateManyWithNestedWhereInput = {
  Itemprograma?: InputMaybe<ItemprogramaUpdateManyWithNestedWhereInput>;
};

export type FarmaciaprogramasUnionUpdateOneInlineInput = {
  /** Create and connect one FarmaciaprogramasUnion document */
  create?: InputMaybe<FarmaciaprogramasUnionCreateInput>;
  /** Delete currently connected FarmaciaprogramasUnion document */
  delete?: InputMaybe<Scalars['Boolean']>;
  /** Update single FarmaciaprogramasUnion document */
  update?: InputMaybe<FarmaciaprogramasUnionUpdateWithNestedWhereUniqueInput>;
  /** Upsert single FarmaciaprogramasUnion document */
  upsert?: InputMaybe<FarmaciaprogramasUnionUpsertWithNestedWhereUniqueInput>;
};

export type FarmaciaprogramasUnionUpdateWithNestedWhereUniqueAndPositionInput = {
  Itemprograma?: InputMaybe<ItemprogramaUpdateWithNestedWhereUniqueAndPositionInput>;
};

export type FarmaciaprogramasUnionUpdateWithNestedWhereUniqueInput = {
  Itemprograma?: InputMaybe<ItemprogramaUpdateWithNestedWhereUniqueInput>;
};

export type FarmaciaprogramasUnionUpsertWithNestedWhereUniqueAndPositionInput = {
  Itemprograma?: InputMaybe<ItemprogramaUpsertWithNestedWhereUniqueAndPositionInput>;
};

export type FarmaciaprogramasUnionUpsertWithNestedWhereUniqueInput = {
  Itemprograma?: InputMaybe<ItemprogramaUpsertWithNestedWhereUniqueInput>;
};

export type FarmaciaprogramasUnionWhereInput = {
  Itemprograma?: InputMaybe<ItemprogramaWhereInput>;
};

export type FarmaciaprogramasUnionWhereUniqueInput = {
  Itemprograma?: InputMaybe<ItemprogramaWhereUniqueInput>;
};

export enum ImageFit {
  /** Resizes the image to fit within the specified parameters without distorting, cropping, or changing the aspect ratio. */
  Clip = 'clip',
  /** Resizes the image to fit the specified parameters exactly by removing any parts of the image that don't fit within the boundaries. */
  Crop = 'crop',
  /** Resizes the image to fit within the parameters, but as opposed to 'fit:clip' will not scale the image if the image is smaller than the output size. */
  Max = 'max',
  /** Resizes the image to fit the specified parameters exactly by scaling the image to the desired size. The aspect ratio of the image is not respected and the image can be distorted using this method. */
  Scale = 'scale'
}

export type ImageResizeInput = {
  /** The default value for the fit parameter is fit:clip. */
  fit?: InputMaybe<ImageFit>;
  /** The height in pixels to resize the image to. The value must be an integer from 1 to 10000. */
  height?: InputMaybe<Scalars['Int']>;
  /** The width in pixels to resize the image to. The value must be an integer from 1 to 10000. */
  width?: InputMaybe<Scalars['Int']>;
};

/** Transformations for Images */
export type ImageTransformationInput = {
  /** Resizes the image */
  resize?: InputMaybe<ImageResizeInput>;
};

export type Itemprograma = {
  __typename?: 'Itemprograma';
  ativo?: Maybe<Scalars['Boolean']>;
  /** The unique identifier */
  id: Scalars['ID'];
  name: Scalars['String'];
  /** System stage field */
  stage: Stage;
};

export type ItemprogramaConnectInput = {
  /** Allow to specify document position in list of connected documents, will default to appending at end of list */
  position?: InputMaybe<ConnectPositionInput>;
  /** Document to connect */
  where: ItemprogramaWhereUniqueInput;
};

/** A connection to a list of items. */
export type ItemprogramaConnection = {
  __typename?: 'ItemprogramaConnection';
  aggregate: Aggregate;
  /** A list of edges. */
  edges: Array<ItemprogramaEdge>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

export type ItemprogramaCreateInput = {
  ativo?: InputMaybe<Scalars['Boolean']>;
  name: Scalars['String'];
};

export type ItemprogramaCreateManyInlineInput = {
  /** Create and connect multiple existing Itemprograma documents */
  create?: InputMaybe<Array<ItemprogramaCreateInput>>;
};

export type ItemprogramaCreateOneInlineInput = {
  /** Create and connect one Itemprograma document */
  create?: InputMaybe<ItemprogramaCreateInput>;
};

export type ItemprogramaCreateWithPositionInput = {
  /** Document to create */
  data: ItemprogramaCreateInput;
  /** Position in the list of existing component instances, will default to appending at the end of list */
  position?: InputMaybe<ConnectPositionInput>;
};

/** An edge in a connection. */
export type ItemprogramaEdge = {
  __typename?: 'ItemprogramaEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
  /** The item at the end of the edge. */
  node: Itemprograma;
};

/** Identifies documents */
export type ItemprogramaManyWhereInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<ItemprogramaWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<ItemprogramaWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<ItemprogramaWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars['String']>;
  ativo?: InputMaybe<Scalars['Boolean']>;
  /** Any other value that exists and is not equal to the given value. */
  ativo_not?: InputMaybe<Scalars['Boolean']>;
  id?: InputMaybe<Scalars['ID']>;
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars['ID']>;
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars['ID']>;
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** Any other value that exists and is not equal to the given value. */
  id_not?: InputMaybe<Scalars['ID']>;
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars['ID']>;
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars['ID']>;
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars['ID']>;
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars['ID']>;
  name?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  name_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  name_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  name_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** Any other value that exists and is not equal to the given value. */
  name_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  name_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  name_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  name_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values not starting with the given string. */
  name_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  name_starts_with?: InputMaybe<Scalars['String']>;
};

export enum ItemprogramaOrderByInput {
  AtivoAsc = 'ativo_ASC',
  AtivoDesc = 'ativo_DESC',
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  NameAsc = 'name_ASC',
  NameDesc = 'name_DESC'
}

export type ItemprogramaParent = Farmacia;

export type ItemprogramaParentConnectInput = {
  Farmacia?: InputMaybe<FarmaciaConnectInput>;
};

export type ItemprogramaParentCreateInput = {
  Farmacia?: InputMaybe<FarmaciaCreateInput>;
};

export type ItemprogramaParentCreateManyInlineInput = {
  /** Connect multiple existing ItemprogramaParent documents */
  connect?: InputMaybe<Array<ItemprogramaParentWhereUniqueInput>>;
  /** Create and connect multiple existing ItemprogramaParent documents */
  create?: InputMaybe<Array<ItemprogramaParentCreateInput>>;
};

export type ItemprogramaParentCreateOneInlineInput = {
  /** Connect one existing ItemprogramaParent document */
  connect?: InputMaybe<ItemprogramaParentWhereUniqueInput>;
  /** Create and connect one ItemprogramaParent document */
  create?: InputMaybe<ItemprogramaParentCreateInput>;
};

export type ItemprogramaParentUpdateInput = {
  Farmacia?: InputMaybe<FarmaciaUpdateInput>;
};

export type ItemprogramaParentUpdateManyInlineInput = {
  /** Connect multiple existing ItemprogramaParent documents */
  connect?: InputMaybe<Array<ItemprogramaParentConnectInput>>;
  /** Create and connect multiple ItemprogramaParent documents */
  create?: InputMaybe<Array<ItemprogramaParentCreateInput>>;
  /** Delete multiple ItemprogramaParent documents */
  delete?: InputMaybe<Array<ItemprogramaParentWhereUniqueInput>>;
  /** Disconnect multiple ItemprogramaParent documents */
  disconnect?: InputMaybe<Array<ItemprogramaParentWhereUniqueInput>>;
  /** Override currently-connected documents with multiple existing ItemprogramaParent documents */
  set?: InputMaybe<Array<ItemprogramaParentWhereUniqueInput>>;
  /** Update multiple ItemprogramaParent documents */
  update?: InputMaybe<Array<ItemprogramaParentUpdateWithNestedWhereUniqueInput>>;
  /** Upsert multiple ItemprogramaParent documents */
  upsert?: InputMaybe<Array<ItemprogramaParentUpsertWithNestedWhereUniqueInput>>;
};

export type ItemprogramaParentUpdateManyWithNestedWhereInput = {
  Farmacia?: InputMaybe<FarmaciaUpdateManyWithNestedWhereInput>;
};

export type ItemprogramaParentUpdateOneInlineInput = {
  /** Connect existing ItemprogramaParent document */
  connect?: InputMaybe<ItemprogramaParentWhereUniqueInput>;
  /** Create and connect one ItemprogramaParent document */
  create?: InputMaybe<ItemprogramaParentCreateInput>;
  /** Delete currently connected ItemprogramaParent document */
  delete?: InputMaybe<Scalars['Boolean']>;
  /** Disconnect currently connected ItemprogramaParent document */
  disconnect?: InputMaybe<Scalars['Boolean']>;
  /** Update single ItemprogramaParent document */
  update?: InputMaybe<ItemprogramaParentUpdateWithNestedWhereUniqueInput>;
  /** Upsert single ItemprogramaParent document */
  upsert?: InputMaybe<ItemprogramaParentUpsertWithNestedWhereUniqueInput>;
};

export type ItemprogramaParentUpdateWithNestedWhereUniqueInput = {
  Farmacia?: InputMaybe<FarmaciaUpdateWithNestedWhereUniqueInput>;
};

export type ItemprogramaParentUpsertWithNestedWhereUniqueInput = {
  Farmacia?: InputMaybe<FarmaciaUpsertWithNestedWhereUniqueInput>;
};

export type ItemprogramaParentWhereInput = {
  Farmacia?: InputMaybe<FarmaciaWhereInput>;
};

export type ItemprogramaParentWhereUniqueInput = {
  Farmacia?: InputMaybe<FarmaciaWhereUniqueInput>;
};

export type ItemprogramaUpdateInput = {
  ativo?: InputMaybe<Scalars['Boolean']>;
  name?: InputMaybe<Scalars['String']>;
};

export type ItemprogramaUpdateManyInlineInput = {
  /** Create and connect multiple Itemprograma component instances */
  create?: InputMaybe<Array<ItemprogramaCreateWithPositionInput>>;
  /** Delete multiple Itemprograma documents */
  delete?: InputMaybe<Array<ItemprogramaWhereUniqueInput>>;
  /** Update multiple Itemprograma component instances */
  update?: InputMaybe<Array<ItemprogramaUpdateWithNestedWhereUniqueAndPositionInput>>;
  /** Upsert multiple Itemprograma component instances */
  upsert?: InputMaybe<Array<ItemprogramaUpsertWithNestedWhereUniqueAndPositionInput>>;
};

export type ItemprogramaUpdateManyInput = {
  ativo?: InputMaybe<Scalars['Boolean']>;
  name?: InputMaybe<Scalars['String']>;
};

export type ItemprogramaUpdateManyWithNestedWhereInput = {
  /** Update many input */
  data: ItemprogramaUpdateManyInput;
  /** Document search */
  where: ItemprogramaWhereInput;
};

export type ItemprogramaUpdateOneInlineInput = {
  /** Create and connect one Itemprograma document */
  create?: InputMaybe<ItemprogramaCreateInput>;
  /** Delete currently connected Itemprograma document */
  delete?: InputMaybe<Scalars['Boolean']>;
  /** Update single Itemprograma document */
  update?: InputMaybe<ItemprogramaUpdateWithNestedWhereUniqueInput>;
  /** Upsert single Itemprograma document */
  upsert?: InputMaybe<ItemprogramaUpsertWithNestedWhereUniqueInput>;
};

export type ItemprogramaUpdateWithNestedWhereUniqueAndPositionInput = {
  /** Document to update */
  data?: InputMaybe<ItemprogramaUpdateInput>;
  /** Position in the list of existing component instances, will default to appending at the end of list */
  position?: InputMaybe<ConnectPositionInput>;
  /** Unique component instance search */
  where: ItemprogramaWhereUniqueInput;
};

export type ItemprogramaUpdateWithNestedWhereUniqueInput = {
  /** Document to update */
  data: ItemprogramaUpdateInput;
  /** Unique document search */
  where: ItemprogramaWhereUniqueInput;
};

export type ItemprogramaUpsertInput = {
  /** Create document if it didn't exist */
  create: ItemprogramaCreateInput;
  /** Update document if it exists */
  update: ItemprogramaUpdateInput;
};

export type ItemprogramaUpsertWithNestedWhereUniqueAndPositionInput = {
  /** Document to upsert */
  data?: InputMaybe<ItemprogramaUpsertInput>;
  /** Position in the list of existing component instances, will default to appending at the end of list */
  position?: InputMaybe<ConnectPositionInput>;
  /** Unique component instance search */
  where: ItemprogramaWhereUniqueInput;
};

export type ItemprogramaUpsertWithNestedWhereUniqueInput = {
  /** Upsert data */
  data: ItemprogramaUpsertInput;
  /** Unique document search */
  where: ItemprogramaWhereUniqueInput;
};

/** Identifies documents */
export type ItemprogramaWhereInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<ItemprogramaWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<ItemprogramaWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<ItemprogramaWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars['String']>;
  ativo?: InputMaybe<Scalars['Boolean']>;
  /** Any other value that exists and is not equal to the given value. */
  ativo_not?: InputMaybe<Scalars['Boolean']>;
  id?: InputMaybe<Scalars['ID']>;
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars['ID']>;
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars['ID']>;
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** Any other value that exists and is not equal to the given value. */
  id_not?: InputMaybe<Scalars['ID']>;
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars['ID']>;
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars['ID']>;
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars['ID']>;
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars['ID']>;
  name?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  name_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  name_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  name_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** Any other value that exists and is not equal to the given value. */
  name_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  name_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  name_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  name_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values not starting with the given string. */
  name_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  name_starts_with?: InputMaybe<Scalars['String']>;
};

/** References Itemprograma record uniquely */
export type ItemprogramaWhereUniqueInput = {
  id?: InputMaybe<Scalars['ID']>;
};

export type Itemtelefone = {
  __typename?: 'Itemtelefone';
  ativo?: Maybe<Scalars['Boolean']>;
  /** The unique identifier */
  id: Scalars['ID'];
  linkPhone: Scalars['String'];
  numero?: Maybe<Scalars['String']>;
  /** System stage field */
  stage: Stage;
};

export type ItemtelefoneConnectInput = {
  /** Allow to specify document position in list of connected documents, will default to appending at end of list */
  position?: InputMaybe<ConnectPositionInput>;
  /** Document to connect */
  where: ItemtelefoneWhereUniqueInput;
};

/** A connection to a list of items. */
export type ItemtelefoneConnection = {
  __typename?: 'ItemtelefoneConnection';
  aggregate: Aggregate;
  /** A list of edges. */
  edges: Array<ItemtelefoneEdge>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

export type ItemtelefoneCreateInput = {
  ativo?: InputMaybe<Scalars['Boolean']>;
  linkPhone: Scalars['String'];
  numero?: InputMaybe<Scalars['String']>;
};

export type ItemtelefoneCreateManyInlineInput = {
  /** Create and connect multiple existing Itemtelefone documents */
  create?: InputMaybe<Array<ItemtelefoneCreateInput>>;
};

export type ItemtelefoneCreateOneInlineInput = {
  /** Create and connect one Itemtelefone document */
  create?: InputMaybe<ItemtelefoneCreateInput>;
};

export type ItemtelefoneCreateWithPositionInput = {
  /** Document to create */
  data: ItemtelefoneCreateInput;
  /** Position in the list of existing component instances, will default to appending at the end of list */
  position?: InputMaybe<ConnectPositionInput>;
};

/** An edge in a connection. */
export type ItemtelefoneEdge = {
  __typename?: 'ItemtelefoneEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
  /** The item at the end of the edge. */
  node: Itemtelefone;
};

/** Identifies documents */
export type ItemtelefoneManyWhereInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<ItemtelefoneWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<ItemtelefoneWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<ItemtelefoneWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars['String']>;
  ativo?: InputMaybe<Scalars['Boolean']>;
  /** Any other value that exists and is not equal to the given value. */
  ativo_not?: InputMaybe<Scalars['Boolean']>;
  id?: InputMaybe<Scalars['ID']>;
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars['ID']>;
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars['ID']>;
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** Any other value that exists and is not equal to the given value. */
  id_not?: InputMaybe<Scalars['ID']>;
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars['ID']>;
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars['ID']>;
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars['ID']>;
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars['ID']>;
  linkPhone?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  linkPhone_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  linkPhone_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  linkPhone_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** Any other value that exists and is not equal to the given value. */
  linkPhone_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  linkPhone_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  linkPhone_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  linkPhone_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values not starting with the given string. */
  linkPhone_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  linkPhone_starts_with?: InputMaybe<Scalars['String']>;
  numero?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  numero_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  numero_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  numero_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** Any other value that exists and is not equal to the given value. */
  numero_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  numero_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  numero_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  numero_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values not starting with the given string. */
  numero_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  numero_starts_with?: InputMaybe<Scalars['String']>;
};

export enum ItemtelefoneOrderByInput {
  AtivoAsc = 'ativo_ASC',
  AtivoDesc = 'ativo_DESC',
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  LinkPhoneAsc = 'linkPhone_ASC',
  LinkPhoneDesc = 'linkPhone_DESC',
  NumeroAsc = 'numero_ASC',
  NumeroDesc = 'numero_DESC'
}

export type ItemtelefoneParent = TelefonesUteis;

export type ItemtelefoneParentConnectInput = {
  TelefonesUteis?: InputMaybe<TelefonesUteisConnectInput>;
};

export type ItemtelefoneParentCreateInput = {
  TelefonesUteis?: InputMaybe<TelefonesUteisCreateInput>;
};

export type ItemtelefoneParentCreateManyInlineInput = {
  /** Connect multiple existing ItemtelefoneParent documents */
  connect?: InputMaybe<Array<ItemtelefoneParentWhereUniqueInput>>;
  /** Create and connect multiple existing ItemtelefoneParent documents */
  create?: InputMaybe<Array<ItemtelefoneParentCreateInput>>;
};

export type ItemtelefoneParentCreateOneInlineInput = {
  /** Connect one existing ItemtelefoneParent document */
  connect?: InputMaybe<ItemtelefoneParentWhereUniqueInput>;
  /** Create and connect one ItemtelefoneParent document */
  create?: InputMaybe<ItemtelefoneParentCreateInput>;
};

export type ItemtelefoneParentUpdateInput = {
  TelefonesUteis?: InputMaybe<TelefonesUteisUpdateInput>;
};

export type ItemtelefoneParentUpdateManyInlineInput = {
  /** Connect multiple existing ItemtelefoneParent documents */
  connect?: InputMaybe<Array<ItemtelefoneParentConnectInput>>;
  /** Create and connect multiple ItemtelefoneParent documents */
  create?: InputMaybe<Array<ItemtelefoneParentCreateInput>>;
  /** Delete multiple ItemtelefoneParent documents */
  delete?: InputMaybe<Array<ItemtelefoneParentWhereUniqueInput>>;
  /** Disconnect multiple ItemtelefoneParent documents */
  disconnect?: InputMaybe<Array<ItemtelefoneParentWhereUniqueInput>>;
  /** Override currently-connected documents with multiple existing ItemtelefoneParent documents */
  set?: InputMaybe<Array<ItemtelefoneParentWhereUniqueInput>>;
  /** Update multiple ItemtelefoneParent documents */
  update?: InputMaybe<Array<ItemtelefoneParentUpdateWithNestedWhereUniqueInput>>;
  /** Upsert multiple ItemtelefoneParent documents */
  upsert?: InputMaybe<Array<ItemtelefoneParentUpsertWithNestedWhereUniqueInput>>;
};

export type ItemtelefoneParentUpdateManyWithNestedWhereInput = {
  TelefonesUteis?: InputMaybe<TelefonesUteisUpdateManyWithNestedWhereInput>;
};

export type ItemtelefoneParentUpdateOneInlineInput = {
  /** Connect existing ItemtelefoneParent document */
  connect?: InputMaybe<ItemtelefoneParentWhereUniqueInput>;
  /** Create and connect one ItemtelefoneParent document */
  create?: InputMaybe<ItemtelefoneParentCreateInput>;
  /** Delete currently connected ItemtelefoneParent document */
  delete?: InputMaybe<Scalars['Boolean']>;
  /** Disconnect currently connected ItemtelefoneParent document */
  disconnect?: InputMaybe<Scalars['Boolean']>;
  /** Update single ItemtelefoneParent document */
  update?: InputMaybe<ItemtelefoneParentUpdateWithNestedWhereUniqueInput>;
  /** Upsert single ItemtelefoneParent document */
  upsert?: InputMaybe<ItemtelefoneParentUpsertWithNestedWhereUniqueInput>;
};

export type ItemtelefoneParentUpdateWithNestedWhereUniqueInput = {
  TelefonesUteis?: InputMaybe<TelefonesUteisUpdateWithNestedWhereUniqueInput>;
};

export type ItemtelefoneParentUpsertWithNestedWhereUniqueInput = {
  TelefonesUteis?: InputMaybe<TelefonesUteisUpsertWithNestedWhereUniqueInput>;
};

export type ItemtelefoneParentWhereInput = {
  TelefonesUteis?: InputMaybe<TelefonesUteisWhereInput>;
};

export type ItemtelefoneParentWhereUniqueInput = {
  TelefonesUteis?: InputMaybe<TelefonesUteisWhereUniqueInput>;
};

export type ItemtelefoneUpdateInput = {
  ativo?: InputMaybe<Scalars['Boolean']>;
  linkPhone?: InputMaybe<Scalars['String']>;
  numero?: InputMaybe<Scalars['String']>;
};

export type ItemtelefoneUpdateManyInlineInput = {
  /** Create and connect multiple Itemtelefone component instances */
  create?: InputMaybe<Array<ItemtelefoneCreateWithPositionInput>>;
  /** Delete multiple Itemtelefone documents */
  delete?: InputMaybe<Array<ItemtelefoneWhereUniqueInput>>;
  /** Update multiple Itemtelefone component instances */
  update?: InputMaybe<Array<ItemtelefoneUpdateWithNestedWhereUniqueAndPositionInput>>;
  /** Upsert multiple Itemtelefone component instances */
  upsert?: InputMaybe<Array<ItemtelefoneUpsertWithNestedWhereUniqueAndPositionInput>>;
};

export type ItemtelefoneUpdateManyInput = {
  ativo?: InputMaybe<Scalars['Boolean']>;
  linkPhone?: InputMaybe<Scalars['String']>;
  numero?: InputMaybe<Scalars['String']>;
};

export type ItemtelefoneUpdateManyWithNestedWhereInput = {
  /** Update many input */
  data: ItemtelefoneUpdateManyInput;
  /** Document search */
  where: ItemtelefoneWhereInput;
};

export type ItemtelefoneUpdateOneInlineInput = {
  /** Create and connect one Itemtelefone document */
  create?: InputMaybe<ItemtelefoneCreateInput>;
  /** Delete currently connected Itemtelefone document */
  delete?: InputMaybe<Scalars['Boolean']>;
  /** Update single Itemtelefone document */
  update?: InputMaybe<ItemtelefoneUpdateWithNestedWhereUniqueInput>;
  /** Upsert single Itemtelefone document */
  upsert?: InputMaybe<ItemtelefoneUpsertWithNestedWhereUniqueInput>;
};

export type ItemtelefoneUpdateWithNestedWhereUniqueAndPositionInput = {
  /** Document to update */
  data?: InputMaybe<ItemtelefoneUpdateInput>;
  /** Position in the list of existing component instances, will default to appending at the end of list */
  position?: InputMaybe<ConnectPositionInput>;
  /** Unique component instance search */
  where: ItemtelefoneWhereUniqueInput;
};

export type ItemtelefoneUpdateWithNestedWhereUniqueInput = {
  /** Document to update */
  data: ItemtelefoneUpdateInput;
  /** Unique document search */
  where: ItemtelefoneWhereUniqueInput;
};

export type ItemtelefoneUpsertInput = {
  /** Create document if it didn't exist */
  create: ItemtelefoneCreateInput;
  /** Update document if it exists */
  update: ItemtelefoneUpdateInput;
};

export type ItemtelefoneUpsertWithNestedWhereUniqueAndPositionInput = {
  /** Document to upsert */
  data?: InputMaybe<ItemtelefoneUpsertInput>;
  /** Position in the list of existing component instances, will default to appending at the end of list */
  position?: InputMaybe<ConnectPositionInput>;
  /** Unique component instance search */
  where: ItemtelefoneWhereUniqueInput;
};

export type ItemtelefoneUpsertWithNestedWhereUniqueInput = {
  /** Upsert data */
  data: ItemtelefoneUpsertInput;
  /** Unique document search */
  where: ItemtelefoneWhereUniqueInput;
};

/** Identifies documents */
export type ItemtelefoneWhereInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<ItemtelefoneWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<ItemtelefoneWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<ItemtelefoneWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars['String']>;
  ativo?: InputMaybe<Scalars['Boolean']>;
  /** Any other value that exists and is not equal to the given value. */
  ativo_not?: InputMaybe<Scalars['Boolean']>;
  id?: InputMaybe<Scalars['ID']>;
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars['ID']>;
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars['ID']>;
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** Any other value that exists and is not equal to the given value. */
  id_not?: InputMaybe<Scalars['ID']>;
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars['ID']>;
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars['ID']>;
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars['ID']>;
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars['ID']>;
  linkPhone?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  linkPhone_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  linkPhone_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  linkPhone_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** Any other value that exists and is not equal to the given value. */
  linkPhone_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  linkPhone_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  linkPhone_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  linkPhone_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values not starting with the given string. */
  linkPhone_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  linkPhone_starts_with?: InputMaybe<Scalars['String']>;
  numero?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  numero_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  numero_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  numero_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** Any other value that exists and is not equal to the given value. */
  numero_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  numero_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  numero_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  numero_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values not starting with the given string. */
  numero_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  numero_starts_with?: InputMaybe<Scalars['String']>;
};

/** References Itemtelefone record uniquely */
export type ItemtelefoneWhereUniqueInput = {
  id?: InputMaybe<Scalars['ID']>;
};

/** Locale system enumeration */
export enum Locale {
  /** System locale */
  En = 'en',
  PtBr = 'pt_BR'
}

/** Representing a geolocation point with latitude and longitude */
export type Location = {
  __typename?: 'Location';
  distance: Scalars['Float'];
  latitude: Scalars['Float'];
  longitude: Scalars['Float'];
};


/** Representing a geolocation point with latitude and longitude */
export type LocationDistanceArgs = {
  from: LocationInput;
};

/** Input for a geolocation point with latitude and longitude */
export type LocationInput = {
  latitude: Scalars['Float'];
  longitude: Scalars['Float'];
};

export type Mutation = {
  __typename?: 'Mutation';
  /** Create one apoiador */
  createApoiador?: Maybe<Apoiador>;
  /**
   * Create one asset
   * @deprecated Asset mutations will be overhauled soon
   */
  createAsset?: Maybe<Asset>;
  /** Create one farmacia */
  createFarmacia?: Maybe<Farmacia>;
  /** Create one plantao */
  createPlantao?: Maybe<Plantao>;
  /** Create one post */
  createPost?: Maybe<Post>;
  /** Create one produto */
  createProduto?: Maybe<Produto>;
  /** Create one scheduledRelease */
  createScheduledRelease?: Maybe<ScheduledRelease>;
  /** Create one subscriber */
  createSubscriber?: Maybe<Subscriber>;
  /** Create one telefoneCategoria */
  createTelefoneCategoria?: Maybe<TelefoneCategoria>;
  /** Create one telefonesUteis */
  createTelefonesUteis?: Maybe<TelefonesUteis>;
  /** Create one usuario */
  createUsuario?: Maybe<Usuario>;
  /** Delete one apoiador from _all_ existing stages. Returns deleted document. */
  deleteApoiador?: Maybe<Apoiador>;
  /** Delete one asset from _all_ existing stages. Returns deleted document. */
  deleteAsset?: Maybe<Asset>;
  /** Delete one farmacia from _all_ existing stages. Returns deleted document. */
  deleteFarmacia?: Maybe<Farmacia>;
  /**
   * Delete many Apoiador documents
   * @deprecated Please use the new paginated many mutation (deleteManyApoiadoresConnection)
   */
  deleteManyApoiadores: BatchPayload;
  /** Delete many Apoiador documents, return deleted documents */
  deleteManyApoiadoresConnection: ApoiadorConnection;
  /**
   * Delete many Asset documents
   * @deprecated Please use the new paginated many mutation (deleteManyAssetsConnection)
   */
  deleteManyAssets: BatchPayload;
  /** Delete many Asset documents, return deleted documents */
  deleteManyAssetsConnection: AssetConnection;
  /**
   * Delete many Farmacia documents
   * @deprecated Please use the new paginated many mutation (deleteManyFarmaciasConnection)
   */
  deleteManyFarmacias: BatchPayload;
  /** Delete many Farmacia documents, return deleted documents */
  deleteManyFarmaciasConnection: FarmaciaConnection;
  /**
   * Delete many Plantao documents
   * @deprecated Please use the new paginated many mutation (deleteManyPlantoesConnection)
   */
  deleteManyPlantoes: BatchPayload;
  /** Delete many Plantao documents, return deleted documents */
  deleteManyPlantoesConnection: PlantaoConnection;
  /**
   * Delete many Post documents
   * @deprecated Please use the new paginated many mutation (deleteManyPostsConnection)
   */
  deleteManyPosts: BatchPayload;
  /** Delete many Post documents, return deleted documents */
  deleteManyPostsConnection: PostConnection;
  /**
   * Delete many Produto documents
   * @deprecated Please use the new paginated many mutation (deleteManyProdutosConnection)
   */
  deleteManyProdutos: BatchPayload;
  /** Delete many Produto documents, return deleted documents */
  deleteManyProdutosConnection: ProdutoConnection;
  /**
   * Delete many Subscriber documents
   * @deprecated Please use the new paginated many mutation (deleteManySubscribersConnection)
   */
  deleteManySubscribers: BatchPayload;
  /** Delete many Subscriber documents, return deleted documents */
  deleteManySubscribersConnection: SubscriberConnection;
  /**
   * Delete many TelefoneCategoria documents
   * @deprecated Please use the new paginated many mutation (deleteManyTelefoneCategoriasConnection)
   */
  deleteManyTelefoneCategorias: BatchPayload;
  /** Delete many TelefoneCategoria documents, return deleted documents */
  deleteManyTelefoneCategoriasConnection: TelefoneCategoriaConnection;
  /**
   * Delete many TelefonesUteis documents
   * @deprecated Please use the new paginated many mutation (deleteManyTelefoneUtilConnection)
   */
  deleteManyTelefoneUtil: BatchPayload;
  /** Delete many TelefonesUteis documents, return deleted documents */
  deleteManyTelefoneUtilConnection: TelefonesUteisConnection;
  /**
   * Delete many Usuario documents
   * @deprecated Please use the new paginated many mutation (deleteManyUsuariosConnection)
   */
  deleteManyUsuarios: BatchPayload;
  /** Delete many Usuario documents, return deleted documents */
  deleteManyUsuariosConnection: UsuarioConnection;
  /** Delete one plantao from _all_ existing stages. Returns deleted document. */
  deletePlantao?: Maybe<Plantao>;
  /** Delete one post from _all_ existing stages. Returns deleted document. */
  deletePost?: Maybe<Post>;
  /** Delete one produto from _all_ existing stages. Returns deleted document. */
  deleteProduto?: Maybe<Produto>;
  /** Delete and return scheduled operation */
  deleteScheduledOperation?: Maybe<ScheduledOperation>;
  /** Delete one scheduledRelease from _all_ existing stages. Returns deleted document. */
  deleteScheduledRelease?: Maybe<ScheduledRelease>;
  /** Delete one subscriber from _all_ existing stages. Returns deleted document. */
  deleteSubscriber?: Maybe<Subscriber>;
  /** Delete one telefoneCategoria from _all_ existing stages. Returns deleted document. */
  deleteTelefoneCategoria?: Maybe<TelefoneCategoria>;
  /** Delete one telefonesUteis from _all_ existing stages. Returns deleted document. */
  deleteTelefonesUteis?: Maybe<TelefonesUteis>;
  /** Delete one usuario from _all_ existing stages. Returns deleted document. */
  deleteUsuario?: Maybe<Usuario>;
  /** Publish one apoiador */
  publishApoiador?: Maybe<Apoiador>;
  /** Publish one asset */
  publishAsset?: Maybe<Asset>;
  /** Publish one farmacia */
  publishFarmacia?: Maybe<Farmacia>;
  /**
   * Publish many Apoiador documents
   * @deprecated Please use the new paginated many mutation (publishManyApoiadoresConnection)
   */
  publishManyApoiadores: BatchPayload;
  /** Publish many Apoiador documents */
  publishManyApoiadoresConnection: ApoiadorConnection;
  /**
   * Publish many Asset documents
   * @deprecated Please use the new paginated many mutation (publishManyAssetsConnection)
   */
  publishManyAssets: BatchPayload;
  /** Publish many Asset documents */
  publishManyAssetsConnection: AssetConnection;
  /**
   * Publish many Farmacia documents
   * @deprecated Please use the new paginated many mutation (publishManyFarmaciasConnection)
   */
  publishManyFarmacias: BatchPayload;
  /** Publish many Farmacia documents */
  publishManyFarmaciasConnection: FarmaciaConnection;
  /**
   * Publish many Plantao documents
   * @deprecated Please use the new paginated many mutation (publishManyPlantoesConnection)
   */
  publishManyPlantoes: BatchPayload;
  /** Publish many Plantao documents */
  publishManyPlantoesConnection: PlantaoConnection;
  /**
   * Publish many Post documents
   * @deprecated Please use the new paginated many mutation (publishManyPostsConnection)
   */
  publishManyPosts: BatchPayload;
  /** Publish many Post documents */
  publishManyPostsConnection: PostConnection;
  /**
   * Publish many Produto documents
   * @deprecated Please use the new paginated many mutation (publishManyProdutosConnection)
   */
  publishManyProdutos: BatchPayload;
  /** Publish many Produto documents */
  publishManyProdutosConnection: ProdutoConnection;
  /**
   * Publish many Subscriber documents
   * @deprecated Please use the new paginated many mutation (publishManySubscribersConnection)
   */
  publishManySubscribers: BatchPayload;
  /** Publish many Subscriber documents */
  publishManySubscribersConnection: SubscriberConnection;
  /**
   * Publish many TelefoneCategoria documents
   * @deprecated Please use the new paginated many mutation (publishManyTelefoneCategoriasConnection)
   */
  publishManyTelefoneCategorias: BatchPayload;
  /** Publish many TelefoneCategoria documents */
  publishManyTelefoneCategoriasConnection: TelefoneCategoriaConnection;
  /**
   * Publish many TelefonesUteis documents
   * @deprecated Please use the new paginated many mutation (publishManyTelefoneUtilConnection)
   */
  publishManyTelefoneUtil: BatchPayload;
  /** Publish many TelefonesUteis documents */
  publishManyTelefoneUtilConnection: TelefonesUteisConnection;
  /**
   * Publish many Usuario documents
   * @deprecated Please use the new paginated many mutation (publishManyUsuariosConnection)
   */
  publishManyUsuarios: BatchPayload;
  /** Publish many Usuario documents */
  publishManyUsuariosConnection: UsuarioConnection;
  /** Publish one plantao */
  publishPlantao?: Maybe<Plantao>;
  /** Publish one post */
  publishPost?: Maybe<Post>;
  /** Publish one produto */
  publishProduto?: Maybe<Produto>;
  /** Publish one subscriber */
  publishSubscriber?: Maybe<Subscriber>;
  /** Publish one telefoneCategoria */
  publishTelefoneCategoria?: Maybe<TelefoneCategoria>;
  /** Publish one telefonesUteis */
  publishTelefonesUteis?: Maybe<TelefonesUteis>;
  /** Publish one usuario */
  publishUsuario?: Maybe<Usuario>;
  /** Schedule to publish one apoiador */
  schedulePublishApoiador?: Maybe<Apoiador>;
  /** Schedule to publish one asset */
  schedulePublishAsset?: Maybe<Asset>;
  /** Schedule to publish one farmacia */
  schedulePublishFarmacia?: Maybe<Farmacia>;
  /** Schedule to publish one plantao */
  schedulePublishPlantao?: Maybe<Plantao>;
  /** Schedule to publish one post */
  schedulePublishPost?: Maybe<Post>;
  /** Schedule to publish one produto */
  schedulePublishProduto?: Maybe<Produto>;
  /** Schedule to publish one subscriber */
  schedulePublishSubscriber?: Maybe<Subscriber>;
  /** Schedule to publish one telefoneCategoria */
  schedulePublishTelefoneCategoria?: Maybe<TelefoneCategoria>;
  /** Schedule to publish one telefonesUteis */
  schedulePublishTelefonesUteis?: Maybe<TelefonesUteis>;
  /** Schedule to publish one usuario */
  schedulePublishUsuario?: Maybe<Usuario>;
  /** Unpublish one apoiador from selected stages. Unpublish either the complete document with its relations, localizations and base data or specific localizations only. */
  scheduleUnpublishApoiador?: Maybe<Apoiador>;
  /** Unpublish one asset from selected stages. Unpublish either the complete document with its relations, localizations and base data or specific localizations only. */
  scheduleUnpublishAsset?: Maybe<Asset>;
  /** Unpublish one farmacia from selected stages. Unpublish either the complete document with its relations, localizations and base data or specific localizations only. */
  scheduleUnpublishFarmacia?: Maybe<Farmacia>;
  /** Unpublish one plantao from selected stages. Unpublish either the complete document with its relations, localizations and base data or specific localizations only. */
  scheduleUnpublishPlantao?: Maybe<Plantao>;
  /** Unpublish one post from selected stages. Unpublish either the complete document with its relations, localizations and base data or specific localizations only. */
  scheduleUnpublishPost?: Maybe<Post>;
  /** Unpublish one produto from selected stages. Unpublish either the complete document with its relations, localizations and base data or specific localizations only. */
  scheduleUnpublishProduto?: Maybe<Produto>;
  /** Unpublish one subscriber from selected stages. Unpublish either the complete document with its relations, localizations and base data or specific localizations only. */
  scheduleUnpublishSubscriber?: Maybe<Subscriber>;
  /** Unpublish one telefoneCategoria from selected stages. Unpublish either the complete document with its relations, localizations and base data or specific localizations only. */
  scheduleUnpublishTelefoneCategoria?: Maybe<TelefoneCategoria>;
  /** Unpublish one telefonesUteis from selected stages. Unpublish either the complete document with its relations, localizations and base data or specific localizations only. */
  scheduleUnpublishTelefonesUteis?: Maybe<TelefonesUteis>;
  /** Unpublish one usuario from selected stages. Unpublish either the complete document with its relations, localizations and base data or specific localizations only. */
  scheduleUnpublishUsuario?: Maybe<Usuario>;
  /** Unpublish one apoiador from selected stages. Unpublish either the complete document with its relations, localizations and base data or specific localizations only. */
  unpublishApoiador?: Maybe<Apoiador>;
  /** Unpublish one asset from selected stages. Unpublish either the complete document with its relations, localizations and base data or specific localizations only. */
  unpublishAsset?: Maybe<Asset>;
  /** Unpublish one farmacia from selected stages. Unpublish either the complete document with its relations, localizations and base data or specific localizations only. */
  unpublishFarmacia?: Maybe<Farmacia>;
  /**
   * Unpublish many Apoiador documents
   * @deprecated Please use the new paginated many mutation (unpublishManyApoiadoresConnection)
   */
  unpublishManyApoiadores: BatchPayload;
  /** Find many Apoiador documents that match criteria in specified stage and unpublish from target stages */
  unpublishManyApoiadoresConnection: ApoiadorConnection;
  /**
   * Unpublish many Asset documents
   * @deprecated Please use the new paginated many mutation (unpublishManyAssetsConnection)
   */
  unpublishManyAssets: BatchPayload;
  /** Find many Asset documents that match criteria in specified stage and unpublish from target stages */
  unpublishManyAssetsConnection: AssetConnection;
  /**
   * Unpublish many Farmacia documents
   * @deprecated Please use the new paginated many mutation (unpublishManyFarmaciasConnection)
   */
  unpublishManyFarmacias: BatchPayload;
  /** Find many Farmacia documents that match criteria in specified stage and unpublish from target stages */
  unpublishManyFarmaciasConnection: FarmaciaConnection;
  /**
   * Unpublish many Plantao documents
   * @deprecated Please use the new paginated many mutation (unpublishManyPlantoesConnection)
   */
  unpublishManyPlantoes: BatchPayload;
  /** Find many Plantao documents that match criteria in specified stage and unpublish from target stages */
  unpublishManyPlantoesConnection: PlantaoConnection;
  /**
   * Unpublish many Post documents
   * @deprecated Please use the new paginated many mutation (unpublishManyPostsConnection)
   */
  unpublishManyPosts: BatchPayload;
  /** Find many Post documents that match criteria in specified stage and unpublish from target stages */
  unpublishManyPostsConnection: PostConnection;
  /**
   * Unpublish many Produto documents
   * @deprecated Please use the new paginated many mutation (unpublishManyProdutosConnection)
   */
  unpublishManyProdutos: BatchPayload;
  /** Find many Produto documents that match criteria in specified stage and unpublish from target stages */
  unpublishManyProdutosConnection: ProdutoConnection;
  /**
   * Unpublish many Subscriber documents
   * @deprecated Please use the new paginated many mutation (unpublishManySubscribersConnection)
   */
  unpublishManySubscribers: BatchPayload;
  /** Find many Subscriber documents that match criteria in specified stage and unpublish from target stages */
  unpublishManySubscribersConnection: SubscriberConnection;
  /**
   * Unpublish many TelefoneCategoria documents
   * @deprecated Please use the new paginated many mutation (unpublishManyTelefoneCategoriasConnection)
   */
  unpublishManyTelefoneCategorias: BatchPayload;
  /** Find many TelefoneCategoria documents that match criteria in specified stage and unpublish from target stages */
  unpublishManyTelefoneCategoriasConnection: TelefoneCategoriaConnection;
  /**
   * Unpublish many TelefonesUteis documents
   * @deprecated Please use the new paginated many mutation (unpublishManyTelefoneUtilConnection)
   */
  unpublishManyTelefoneUtil: BatchPayload;
  /** Find many TelefonesUteis documents that match criteria in specified stage and unpublish from target stages */
  unpublishManyTelefoneUtilConnection: TelefonesUteisConnection;
  /**
   * Unpublish many Usuario documents
   * @deprecated Please use the new paginated many mutation (unpublishManyUsuariosConnection)
   */
  unpublishManyUsuarios: BatchPayload;
  /** Find many Usuario documents that match criteria in specified stage and unpublish from target stages */
  unpublishManyUsuariosConnection: UsuarioConnection;
  /** Unpublish one plantao from selected stages. Unpublish either the complete document with its relations, localizations and base data or specific localizations only. */
  unpublishPlantao?: Maybe<Plantao>;
  /** Unpublish one post from selected stages. Unpublish either the complete document with its relations, localizations and base data or specific localizations only. */
  unpublishPost?: Maybe<Post>;
  /** Unpublish one produto from selected stages. Unpublish either the complete document with its relations, localizations and base data or specific localizations only. */
  unpublishProduto?: Maybe<Produto>;
  /** Unpublish one subscriber from selected stages. Unpublish either the complete document with its relations, localizations and base data or specific localizations only. */
  unpublishSubscriber?: Maybe<Subscriber>;
  /** Unpublish one telefoneCategoria from selected stages. Unpublish either the complete document with its relations, localizations and base data or specific localizations only. */
  unpublishTelefoneCategoria?: Maybe<TelefoneCategoria>;
  /** Unpublish one telefonesUteis from selected stages. Unpublish either the complete document with its relations, localizations and base data or specific localizations only. */
  unpublishTelefonesUteis?: Maybe<TelefonesUteis>;
  /** Unpublish one usuario from selected stages. Unpublish either the complete document with its relations, localizations and base data or specific localizations only. */
  unpublishUsuario?: Maybe<Usuario>;
  /** Update one apoiador */
  updateApoiador?: Maybe<Apoiador>;
  /** Update one asset */
  updateAsset?: Maybe<Asset>;
  /** Update one farmacia */
  updateFarmacia?: Maybe<Farmacia>;
  /**
   * Update many apoiadores
   * @deprecated Please use the new paginated many mutation (updateManyApoiadoresConnection)
   */
  updateManyApoiadores: BatchPayload;
  /** Update many Apoiador documents */
  updateManyApoiadoresConnection: ApoiadorConnection;
  /**
   * Update many assets
   * @deprecated Please use the new paginated many mutation (updateManyAssetsConnection)
   */
  updateManyAssets: BatchPayload;
  /** Update many Asset documents */
  updateManyAssetsConnection: AssetConnection;
  /**
   * Update many farmacias
   * @deprecated Please use the new paginated many mutation (updateManyFarmaciasConnection)
   */
  updateManyFarmacias: BatchPayload;
  /** Update many Farmacia documents */
  updateManyFarmaciasConnection: FarmaciaConnection;
  /**
   * Update many plantoes
   * @deprecated Please use the new paginated many mutation (updateManyPlantoesConnection)
   */
  updateManyPlantoes: BatchPayload;
  /** Update many Plantao documents */
  updateManyPlantoesConnection: PlantaoConnection;
  /**
   * Update many posts
   * @deprecated Please use the new paginated many mutation (updateManyPostsConnection)
   */
  updateManyPosts: BatchPayload;
  /** Update many Post documents */
  updateManyPostsConnection: PostConnection;
  /**
   * Update many produtos
   * @deprecated Please use the new paginated many mutation (updateManyProdutosConnection)
   */
  updateManyProdutos: BatchPayload;
  /** Update many Produto documents */
  updateManyProdutosConnection: ProdutoConnection;
  /**
   * Update many subscribers
   * @deprecated Please use the new paginated many mutation (updateManySubscribersConnection)
   */
  updateManySubscribers: BatchPayload;
  /** Update many Subscriber documents */
  updateManySubscribersConnection: SubscriberConnection;
  /**
   * Update many telefoneCategorias
   * @deprecated Please use the new paginated many mutation (updateManyTelefoneCategoriasConnection)
   */
  updateManyTelefoneCategorias: BatchPayload;
  /** Update many TelefoneCategoria documents */
  updateManyTelefoneCategoriasConnection: TelefoneCategoriaConnection;
  /**
   * Update many telefoneUtil
   * @deprecated Please use the new paginated many mutation (updateManyTelefoneUtilConnection)
   */
  updateManyTelefoneUtil: BatchPayload;
  /** Update many TelefonesUteis documents */
  updateManyTelefoneUtilConnection: TelefonesUteisConnection;
  /**
   * Update many usuarios
   * @deprecated Please use the new paginated many mutation (updateManyUsuariosConnection)
   */
  updateManyUsuarios: BatchPayload;
  /** Update many Usuario documents */
  updateManyUsuariosConnection: UsuarioConnection;
  /** Update one plantao */
  updatePlantao?: Maybe<Plantao>;
  /** Update one post */
  updatePost?: Maybe<Post>;
  /** Update one produto */
  updateProduto?: Maybe<Produto>;
  /** Update one scheduledRelease */
  updateScheduledRelease?: Maybe<ScheduledRelease>;
  /** Update one subscriber */
  updateSubscriber?: Maybe<Subscriber>;
  /** Update one telefoneCategoria */
  updateTelefoneCategoria?: Maybe<TelefoneCategoria>;
  /** Update one telefonesUteis */
  updateTelefonesUteis?: Maybe<TelefonesUteis>;
  /** Update one usuario */
  updateUsuario?: Maybe<Usuario>;
  /** Upsert one apoiador */
  upsertApoiador?: Maybe<Apoiador>;
  /** Upsert one asset */
  upsertAsset?: Maybe<Asset>;
  /** Upsert one farmacia */
  upsertFarmacia?: Maybe<Farmacia>;
  /** Upsert one plantao */
  upsertPlantao?: Maybe<Plantao>;
  /** Upsert one post */
  upsertPost?: Maybe<Post>;
  /** Upsert one produto */
  upsertProduto?: Maybe<Produto>;
  /** Upsert one subscriber */
  upsertSubscriber?: Maybe<Subscriber>;
  /** Upsert one telefoneCategoria */
  upsertTelefoneCategoria?: Maybe<TelefoneCategoria>;
  /** Upsert one telefonesUteis */
  upsertTelefonesUteis?: Maybe<TelefonesUteis>;
  /** Upsert one usuario */
  upsertUsuario?: Maybe<Usuario>;
};


export type MutationCreateApoiadorArgs = {
  data: ApoiadorCreateInput;
};


export type MutationCreateAssetArgs = {
  data: AssetCreateInput;
};


export type MutationCreateFarmaciaArgs = {
  data: FarmaciaCreateInput;
};


export type MutationCreatePlantaoArgs = {
  data: PlantaoCreateInput;
};


export type MutationCreatePostArgs = {
  data: PostCreateInput;
};


export type MutationCreateProdutoArgs = {
  data: ProdutoCreateInput;
};


export type MutationCreateScheduledReleaseArgs = {
  data: ScheduledReleaseCreateInput;
};


export type MutationCreateSubscriberArgs = {
  data: SubscriberCreateInput;
};


export type MutationCreateTelefoneCategoriaArgs = {
  data: TelefoneCategoriaCreateInput;
};


export type MutationCreateTelefonesUteisArgs = {
  data: TelefonesUteisCreateInput;
};


export type MutationCreateUsuarioArgs = {
  data: UsuarioCreateInput;
};


export type MutationDeleteApoiadorArgs = {
  where: ApoiadorWhereUniqueInput;
};


export type MutationDeleteAssetArgs = {
  where: AssetWhereUniqueInput;
};


export type MutationDeleteFarmaciaArgs = {
  where: FarmaciaWhereUniqueInput;
};


export type MutationDeleteManyApoiadoresArgs = {
  where?: InputMaybe<ApoiadorManyWhereInput>;
};


export type MutationDeleteManyApoiadoresConnectionArgs = {
  after?: InputMaybe<Scalars['ID']>;
  before?: InputMaybe<Scalars['ID']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<ApoiadorManyWhereInput>;
};


export type MutationDeleteManyAssetsArgs = {
  where?: InputMaybe<AssetManyWhereInput>;
};


export type MutationDeleteManyAssetsConnectionArgs = {
  after?: InputMaybe<Scalars['ID']>;
  before?: InputMaybe<Scalars['ID']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<AssetManyWhereInput>;
};


export type MutationDeleteManyFarmaciasArgs = {
  where?: InputMaybe<FarmaciaManyWhereInput>;
};


export type MutationDeleteManyFarmaciasConnectionArgs = {
  after?: InputMaybe<Scalars['ID']>;
  before?: InputMaybe<Scalars['ID']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<FarmaciaManyWhereInput>;
};


export type MutationDeleteManyPlantoesArgs = {
  where?: InputMaybe<PlantaoManyWhereInput>;
};


export type MutationDeleteManyPlantoesConnectionArgs = {
  after?: InputMaybe<Scalars['ID']>;
  before?: InputMaybe<Scalars['ID']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<PlantaoManyWhereInput>;
};


export type MutationDeleteManyPostsArgs = {
  where?: InputMaybe<PostManyWhereInput>;
};


export type MutationDeleteManyPostsConnectionArgs = {
  after?: InputMaybe<Scalars['ID']>;
  before?: InputMaybe<Scalars['ID']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<PostManyWhereInput>;
};


export type MutationDeleteManyProdutosArgs = {
  where?: InputMaybe<ProdutoManyWhereInput>;
};


export type MutationDeleteManyProdutosConnectionArgs = {
  after?: InputMaybe<Scalars['ID']>;
  before?: InputMaybe<Scalars['ID']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<ProdutoManyWhereInput>;
};


export type MutationDeleteManySubscribersArgs = {
  where?: InputMaybe<SubscriberManyWhereInput>;
};


export type MutationDeleteManySubscribersConnectionArgs = {
  after?: InputMaybe<Scalars['ID']>;
  before?: InputMaybe<Scalars['ID']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<SubscriberManyWhereInput>;
};


export type MutationDeleteManyTelefoneCategoriasArgs = {
  where?: InputMaybe<TelefoneCategoriaManyWhereInput>;
};


export type MutationDeleteManyTelefoneCategoriasConnectionArgs = {
  after?: InputMaybe<Scalars['ID']>;
  before?: InputMaybe<Scalars['ID']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<TelefoneCategoriaManyWhereInput>;
};


export type MutationDeleteManyTelefoneUtilArgs = {
  where?: InputMaybe<TelefonesUteisManyWhereInput>;
};


export type MutationDeleteManyTelefoneUtilConnectionArgs = {
  after?: InputMaybe<Scalars['ID']>;
  before?: InputMaybe<Scalars['ID']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<TelefonesUteisManyWhereInput>;
};


export type MutationDeleteManyUsuariosArgs = {
  where?: InputMaybe<UsuarioManyWhereInput>;
};


export type MutationDeleteManyUsuariosConnectionArgs = {
  after?: InputMaybe<Scalars['ID']>;
  before?: InputMaybe<Scalars['ID']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<UsuarioManyWhereInput>;
};


export type MutationDeletePlantaoArgs = {
  where: PlantaoWhereUniqueInput;
};


export type MutationDeletePostArgs = {
  where: PostWhereUniqueInput;
};


export type MutationDeleteProdutoArgs = {
  where: ProdutoWhereUniqueInput;
};


export type MutationDeleteScheduledOperationArgs = {
  where: ScheduledOperationWhereUniqueInput;
};


export type MutationDeleteScheduledReleaseArgs = {
  where: ScheduledReleaseWhereUniqueInput;
};


export type MutationDeleteSubscriberArgs = {
  where: SubscriberWhereUniqueInput;
};


export type MutationDeleteTelefoneCategoriaArgs = {
  where: TelefoneCategoriaWhereUniqueInput;
};


export type MutationDeleteTelefonesUteisArgs = {
  where: TelefonesUteisWhereUniqueInput;
};


export type MutationDeleteUsuarioArgs = {
  where: UsuarioWhereUniqueInput;
};


export type MutationPublishApoiadorArgs = {
  to?: Array<Stage>;
  where: ApoiadorWhereUniqueInput;
};


export type MutationPublishAssetArgs = {
  locales?: InputMaybe<Array<Locale>>;
  publishBase?: InputMaybe<Scalars['Boolean']>;
  to?: Array<Stage>;
  where: AssetWhereUniqueInput;
  withDefaultLocale?: InputMaybe<Scalars['Boolean']>;
};


export type MutationPublishFarmaciaArgs = {
  to?: Array<Stage>;
  where: FarmaciaWhereUniqueInput;
};


export type MutationPublishManyApoiadoresArgs = {
  to?: Array<Stage>;
  where?: InputMaybe<ApoiadorManyWhereInput>;
};


export type MutationPublishManyApoiadoresConnectionArgs = {
  after?: InputMaybe<Scalars['ID']>;
  before?: InputMaybe<Scalars['ID']>;
  first?: InputMaybe<Scalars['Int']>;
  from?: InputMaybe<Stage>;
  last?: InputMaybe<Scalars['Int']>;
  skip?: InputMaybe<Scalars['Int']>;
  to?: Array<Stage>;
  where?: InputMaybe<ApoiadorManyWhereInput>;
};


export type MutationPublishManyAssetsArgs = {
  locales?: InputMaybe<Array<Locale>>;
  publishBase?: InputMaybe<Scalars['Boolean']>;
  to?: Array<Stage>;
  where?: InputMaybe<AssetManyWhereInput>;
  withDefaultLocale?: InputMaybe<Scalars['Boolean']>;
};


export type MutationPublishManyAssetsConnectionArgs = {
  after?: InputMaybe<Scalars['ID']>;
  before?: InputMaybe<Scalars['ID']>;
  first?: InputMaybe<Scalars['Int']>;
  from?: InputMaybe<Stage>;
  last?: InputMaybe<Scalars['Int']>;
  locales?: InputMaybe<Array<Locale>>;
  publishBase?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
  to?: Array<Stage>;
  where?: InputMaybe<AssetManyWhereInput>;
  withDefaultLocale?: InputMaybe<Scalars['Boolean']>;
};


export type MutationPublishManyFarmaciasArgs = {
  to?: Array<Stage>;
  where?: InputMaybe<FarmaciaManyWhereInput>;
};


export type MutationPublishManyFarmaciasConnectionArgs = {
  after?: InputMaybe<Scalars['ID']>;
  before?: InputMaybe<Scalars['ID']>;
  first?: InputMaybe<Scalars['Int']>;
  from?: InputMaybe<Stage>;
  last?: InputMaybe<Scalars['Int']>;
  skip?: InputMaybe<Scalars['Int']>;
  to?: Array<Stage>;
  where?: InputMaybe<FarmaciaManyWhereInput>;
};


export type MutationPublishManyPlantoesArgs = {
  locales?: InputMaybe<Array<Locale>>;
  publishBase?: InputMaybe<Scalars['Boolean']>;
  to?: Array<Stage>;
  where?: InputMaybe<PlantaoManyWhereInput>;
  withDefaultLocale?: InputMaybe<Scalars['Boolean']>;
};


export type MutationPublishManyPlantoesConnectionArgs = {
  after?: InputMaybe<Scalars['ID']>;
  before?: InputMaybe<Scalars['ID']>;
  first?: InputMaybe<Scalars['Int']>;
  from?: InputMaybe<Stage>;
  last?: InputMaybe<Scalars['Int']>;
  locales?: InputMaybe<Array<Locale>>;
  publishBase?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
  to?: Array<Stage>;
  where?: InputMaybe<PlantaoManyWhereInput>;
  withDefaultLocale?: InputMaybe<Scalars['Boolean']>;
};


export type MutationPublishManyPostsArgs = {
  to?: Array<Stage>;
  where?: InputMaybe<PostManyWhereInput>;
};


export type MutationPublishManyPostsConnectionArgs = {
  after?: InputMaybe<Scalars['ID']>;
  before?: InputMaybe<Scalars['ID']>;
  first?: InputMaybe<Scalars['Int']>;
  from?: InputMaybe<Stage>;
  last?: InputMaybe<Scalars['Int']>;
  skip?: InputMaybe<Scalars['Int']>;
  to?: Array<Stage>;
  where?: InputMaybe<PostManyWhereInput>;
};


export type MutationPublishManyProdutosArgs = {
  to?: Array<Stage>;
  where?: InputMaybe<ProdutoManyWhereInput>;
};


export type MutationPublishManyProdutosConnectionArgs = {
  after?: InputMaybe<Scalars['ID']>;
  before?: InputMaybe<Scalars['ID']>;
  first?: InputMaybe<Scalars['Int']>;
  from?: InputMaybe<Stage>;
  last?: InputMaybe<Scalars['Int']>;
  skip?: InputMaybe<Scalars['Int']>;
  to?: Array<Stage>;
  where?: InputMaybe<ProdutoManyWhereInput>;
};


export type MutationPublishManySubscribersArgs = {
  to?: Array<Stage>;
  where?: InputMaybe<SubscriberManyWhereInput>;
};


export type MutationPublishManySubscribersConnectionArgs = {
  after?: InputMaybe<Scalars['ID']>;
  before?: InputMaybe<Scalars['ID']>;
  first?: InputMaybe<Scalars['Int']>;
  from?: InputMaybe<Stage>;
  last?: InputMaybe<Scalars['Int']>;
  skip?: InputMaybe<Scalars['Int']>;
  to?: Array<Stage>;
  where?: InputMaybe<SubscriberManyWhereInput>;
};


export type MutationPublishManyTelefoneCategoriasArgs = {
  to?: Array<Stage>;
  where?: InputMaybe<TelefoneCategoriaManyWhereInput>;
};


export type MutationPublishManyTelefoneCategoriasConnectionArgs = {
  after?: InputMaybe<Scalars['ID']>;
  before?: InputMaybe<Scalars['ID']>;
  first?: InputMaybe<Scalars['Int']>;
  from?: InputMaybe<Stage>;
  last?: InputMaybe<Scalars['Int']>;
  skip?: InputMaybe<Scalars['Int']>;
  to?: Array<Stage>;
  where?: InputMaybe<TelefoneCategoriaManyWhereInput>;
};


export type MutationPublishManyTelefoneUtilArgs = {
  to?: Array<Stage>;
  where?: InputMaybe<TelefonesUteisManyWhereInput>;
};


export type MutationPublishManyTelefoneUtilConnectionArgs = {
  after?: InputMaybe<Scalars['ID']>;
  before?: InputMaybe<Scalars['ID']>;
  first?: InputMaybe<Scalars['Int']>;
  from?: InputMaybe<Stage>;
  last?: InputMaybe<Scalars['Int']>;
  skip?: InputMaybe<Scalars['Int']>;
  to?: Array<Stage>;
  where?: InputMaybe<TelefonesUteisManyWhereInput>;
};


export type MutationPublishManyUsuariosArgs = {
  to?: Array<Stage>;
  where?: InputMaybe<UsuarioManyWhereInput>;
};


export type MutationPublishManyUsuariosConnectionArgs = {
  after?: InputMaybe<Scalars['ID']>;
  before?: InputMaybe<Scalars['ID']>;
  first?: InputMaybe<Scalars['Int']>;
  from?: InputMaybe<Stage>;
  last?: InputMaybe<Scalars['Int']>;
  skip?: InputMaybe<Scalars['Int']>;
  to?: Array<Stage>;
  where?: InputMaybe<UsuarioManyWhereInput>;
};


export type MutationPublishPlantaoArgs = {
  locales?: InputMaybe<Array<Locale>>;
  publishBase?: InputMaybe<Scalars['Boolean']>;
  to?: Array<Stage>;
  where: PlantaoWhereUniqueInput;
  withDefaultLocale?: InputMaybe<Scalars['Boolean']>;
};


export type MutationPublishPostArgs = {
  to?: Array<Stage>;
  where: PostWhereUniqueInput;
};


export type MutationPublishProdutoArgs = {
  to?: Array<Stage>;
  where: ProdutoWhereUniqueInput;
};


export type MutationPublishSubscriberArgs = {
  to?: Array<Stage>;
  where: SubscriberWhereUniqueInput;
};


export type MutationPublishTelefoneCategoriaArgs = {
  to?: Array<Stage>;
  where: TelefoneCategoriaWhereUniqueInput;
};


export type MutationPublishTelefonesUteisArgs = {
  to?: Array<Stage>;
  where: TelefonesUteisWhereUniqueInput;
};


export type MutationPublishUsuarioArgs = {
  to?: Array<Stage>;
  where: UsuarioWhereUniqueInput;
};


export type MutationSchedulePublishApoiadorArgs = {
  releaseAt?: InputMaybe<Scalars['DateTime']>;
  releaseId?: InputMaybe<Scalars['String']>;
  to?: Array<Stage>;
  where: ApoiadorWhereUniqueInput;
};


export type MutationSchedulePublishAssetArgs = {
  locales?: InputMaybe<Array<Locale>>;
  publishBase?: InputMaybe<Scalars['Boolean']>;
  releaseAt?: InputMaybe<Scalars['DateTime']>;
  releaseId?: InputMaybe<Scalars['String']>;
  to?: Array<Stage>;
  where: AssetWhereUniqueInput;
  withDefaultLocale?: InputMaybe<Scalars['Boolean']>;
};


export type MutationSchedulePublishFarmaciaArgs = {
  releaseAt?: InputMaybe<Scalars['DateTime']>;
  releaseId?: InputMaybe<Scalars['String']>;
  to?: Array<Stage>;
  where: FarmaciaWhereUniqueInput;
};


export type MutationSchedulePublishPlantaoArgs = {
  locales?: InputMaybe<Array<Locale>>;
  publishBase?: InputMaybe<Scalars['Boolean']>;
  releaseAt?: InputMaybe<Scalars['DateTime']>;
  releaseId?: InputMaybe<Scalars['String']>;
  to?: Array<Stage>;
  where: PlantaoWhereUniqueInput;
  withDefaultLocale?: InputMaybe<Scalars['Boolean']>;
};


export type MutationSchedulePublishPostArgs = {
  releaseAt?: InputMaybe<Scalars['DateTime']>;
  releaseId?: InputMaybe<Scalars['String']>;
  to?: Array<Stage>;
  where: PostWhereUniqueInput;
};


export type MutationSchedulePublishProdutoArgs = {
  releaseAt?: InputMaybe<Scalars['DateTime']>;
  releaseId?: InputMaybe<Scalars['String']>;
  to?: Array<Stage>;
  where: ProdutoWhereUniqueInput;
};


export type MutationSchedulePublishSubscriberArgs = {
  releaseAt?: InputMaybe<Scalars['DateTime']>;
  releaseId?: InputMaybe<Scalars['String']>;
  to?: Array<Stage>;
  where: SubscriberWhereUniqueInput;
};


export type MutationSchedulePublishTelefoneCategoriaArgs = {
  releaseAt?: InputMaybe<Scalars['DateTime']>;
  releaseId?: InputMaybe<Scalars['String']>;
  to?: Array<Stage>;
  where: TelefoneCategoriaWhereUniqueInput;
};


export type MutationSchedulePublishTelefonesUteisArgs = {
  releaseAt?: InputMaybe<Scalars['DateTime']>;
  releaseId?: InputMaybe<Scalars['String']>;
  to?: Array<Stage>;
  where: TelefonesUteisWhereUniqueInput;
};


export type MutationSchedulePublishUsuarioArgs = {
  releaseAt?: InputMaybe<Scalars['DateTime']>;
  releaseId?: InputMaybe<Scalars['String']>;
  to?: Array<Stage>;
  where: UsuarioWhereUniqueInput;
};


export type MutationScheduleUnpublishApoiadorArgs = {
  from?: Array<Stage>;
  releaseAt?: InputMaybe<Scalars['DateTime']>;
  releaseId?: InputMaybe<Scalars['String']>;
  where: ApoiadorWhereUniqueInput;
};


export type MutationScheduleUnpublishAssetArgs = {
  from?: Array<Stage>;
  locales?: InputMaybe<Array<Locale>>;
  releaseAt?: InputMaybe<Scalars['DateTime']>;
  releaseId?: InputMaybe<Scalars['String']>;
  unpublishBase?: InputMaybe<Scalars['Boolean']>;
  where: AssetWhereUniqueInput;
};


export type MutationScheduleUnpublishFarmaciaArgs = {
  from?: Array<Stage>;
  releaseAt?: InputMaybe<Scalars['DateTime']>;
  releaseId?: InputMaybe<Scalars['String']>;
  where: FarmaciaWhereUniqueInput;
};


export type MutationScheduleUnpublishPlantaoArgs = {
  from?: Array<Stage>;
  locales?: InputMaybe<Array<Locale>>;
  releaseAt?: InputMaybe<Scalars['DateTime']>;
  releaseId?: InputMaybe<Scalars['String']>;
  unpublishBase?: InputMaybe<Scalars['Boolean']>;
  where: PlantaoWhereUniqueInput;
};


export type MutationScheduleUnpublishPostArgs = {
  from?: Array<Stage>;
  releaseAt?: InputMaybe<Scalars['DateTime']>;
  releaseId?: InputMaybe<Scalars['String']>;
  where: PostWhereUniqueInput;
};


export type MutationScheduleUnpublishProdutoArgs = {
  from?: Array<Stage>;
  releaseAt?: InputMaybe<Scalars['DateTime']>;
  releaseId?: InputMaybe<Scalars['String']>;
  where: ProdutoWhereUniqueInput;
};


export type MutationScheduleUnpublishSubscriberArgs = {
  from?: Array<Stage>;
  releaseAt?: InputMaybe<Scalars['DateTime']>;
  releaseId?: InputMaybe<Scalars['String']>;
  where: SubscriberWhereUniqueInput;
};


export type MutationScheduleUnpublishTelefoneCategoriaArgs = {
  from?: Array<Stage>;
  releaseAt?: InputMaybe<Scalars['DateTime']>;
  releaseId?: InputMaybe<Scalars['String']>;
  where: TelefoneCategoriaWhereUniqueInput;
};


export type MutationScheduleUnpublishTelefonesUteisArgs = {
  from?: Array<Stage>;
  releaseAt?: InputMaybe<Scalars['DateTime']>;
  releaseId?: InputMaybe<Scalars['String']>;
  where: TelefonesUteisWhereUniqueInput;
};


export type MutationScheduleUnpublishUsuarioArgs = {
  from?: Array<Stage>;
  releaseAt?: InputMaybe<Scalars['DateTime']>;
  releaseId?: InputMaybe<Scalars['String']>;
  where: UsuarioWhereUniqueInput;
};


export type MutationUnpublishApoiadorArgs = {
  from?: Array<Stage>;
  where: ApoiadorWhereUniqueInput;
};


export type MutationUnpublishAssetArgs = {
  from?: Array<Stage>;
  locales?: InputMaybe<Array<Locale>>;
  unpublishBase?: InputMaybe<Scalars['Boolean']>;
  where: AssetWhereUniqueInput;
};


export type MutationUnpublishFarmaciaArgs = {
  from?: Array<Stage>;
  where: FarmaciaWhereUniqueInput;
};


export type MutationUnpublishManyApoiadoresArgs = {
  from?: Array<Stage>;
  where?: InputMaybe<ApoiadorManyWhereInput>;
};


export type MutationUnpublishManyApoiadoresConnectionArgs = {
  after?: InputMaybe<Scalars['ID']>;
  before?: InputMaybe<Scalars['ID']>;
  first?: InputMaybe<Scalars['Int']>;
  from?: Array<Stage>;
  last?: InputMaybe<Scalars['Int']>;
  skip?: InputMaybe<Scalars['Int']>;
  stage?: InputMaybe<Stage>;
  where?: InputMaybe<ApoiadorManyWhereInput>;
};


export type MutationUnpublishManyAssetsArgs = {
  from?: Array<Stage>;
  locales?: InputMaybe<Array<Locale>>;
  unpublishBase?: InputMaybe<Scalars['Boolean']>;
  where?: InputMaybe<AssetManyWhereInput>;
};


export type MutationUnpublishManyAssetsConnectionArgs = {
  after?: InputMaybe<Scalars['ID']>;
  before?: InputMaybe<Scalars['ID']>;
  first?: InputMaybe<Scalars['Int']>;
  from?: Array<Stage>;
  last?: InputMaybe<Scalars['Int']>;
  locales?: InputMaybe<Array<Locale>>;
  skip?: InputMaybe<Scalars['Int']>;
  stage?: InputMaybe<Stage>;
  unpublishBase?: InputMaybe<Scalars['Boolean']>;
  where?: InputMaybe<AssetManyWhereInput>;
};


export type MutationUnpublishManyFarmaciasArgs = {
  from?: Array<Stage>;
  where?: InputMaybe<FarmaciaManyWhereInput>;
};


export type MutationUnpublishManyFarmaciasConnectionArgs = {
  after?: InputMaybe<Scalars['ID']>;
  before?: InputMaybe<Scalars['ID']>;
  first?: InputMaybe<Scalars['Int']>;
  from?: Array<Stage>;
  last?: InputMaybe<Scalars['Int']>;
  skip?: InputMaybe<Scalars['Int']>;
  stage?: InputMaybe<Stage>;
  where?: InputMaybe<FarmaciaManyWhereInput>;
};


export type MutationUnpublishManyPlantoesArgs = {
  from?: Array<Stage>;
  locales?: InputMaybe<Array<Locale>>;
  unpublishBase?: InputMaybe<Scalars['Boolean']>;
  where?: InputMaybe<PlantaoManyWhereInput>;
};


export type MutationUnpublishManyPlantoesConnectionArgs = {
  after?: InputMaybe<Scalars['ID']>;
  before?: InputMaybe<Scalars['ID']>;
  first?: InputMaybe<Scalars['Int']>;
  from?: Array<Stage>;
  last?: InputMaybe<Scalars['Int']>;
  locales?: InputMaybe<Array<Locale>>;
  skip?: InputMaybe<Scalars['Int']>;
  stage?: InputMaybe<Stage>;
  unpublishBase?: InputMaybe<Scalars['Boolean']>;
  where?: InputMaybe<PlantaoManyWhereInput>;
};


export type MutationUnpublishManyPostsArgs = {
  from?: Array<Stage>;
  where?: InputMaybe<PostManyWhereInput>;
};


export type MutationUnpublishManyPostsConnectionArgs = {
  after?: InputMaybe<Scalars['ID']>;
  before?: InputMaybe<Scalars['ID']>;
  first?: InputMaybe<Scalars['Int']>;
  from?: Array<Stage>;
  last?: InputMaybe<Scalars['Int']>;
  skip?: InputMaybe<Scalars['Int']>;
  stage?: InputMaybe<Stage>;
  where?: InputMaybe<PostManyWhereInput>;
};


export type MutationUnpublishManyProdutosArgs = {
  from?: Array<Stage>;
  where?: InputMaybe<ProdutoManyWhereInput>;
};


export type MutationUnpublishManyProdutosConnectionArgs = {
  after?: InputMaybe<Scalars['ID']>;
  before?: InputMaybe<Scalars['ID']>;
  first?: InputMaybe<Scalars['Int']>;
  from?: Array<Stage>;
  last?: InputMaybe<Scalars['Int']>;
  skip?: InputMaybe<Scalars['Int']>;
  stage?: InputMaybe<Stage>;
  where?: InputMaybe<ProdutoManyWhereInput>;
};


export type MutationUnpublishManySubscribersArgs = {
  from?: Array<Stage>;
  where?: InputMaybe<SubscriberManyWhereInput>;
};


export type MutationUnpublishManySubscribersConnectionArgs = {
  after?: InputMaybe<Scalars['ID']>;
  before?: InputMaybe<Scalars['ID']>;
  first?: InputMaybe<Scalars['Int']>;
  from?: Array<Stage>;
  last?: InputMaybe<Scalars['Int']>;
  skip?: InputMaybe<Scalars['Int']>;
  stage?: InputMaybe<Stage>;
  where?: InputMaybe<SubscriberManyWhereInput>;
};


export type MutationUnpublishManyTelefoneCategoriasArgs = {
  from?: Array<Stage>;
  where?: InputMaybe<TelefoneCategoriaManyWhereInput>;
};


export type MutationUnpublishManyTelefoneCategoriasConnectionArgs = {
  after?: InputMaybe<Scalars['ID']>;
  before?: InputMaybe<Scalars['ID']>;
  first?: InputMaybe<Scalars['Int']>;
  from?: Array<Stage>;
  last?: InputMaybe<Scalars['Int']>;
  skip?: InputMaybe<Scalars['Int']>;
  stage?: InputMaybe<Stage>;
  where?: InputMaybe<TelefoneCategoriaManyWhereInput>;
};


export type MutationUnpublishManyTelefoneUtilArgs = {
  from?: Array<Stage>;
  where?: InputMaybe<TelefonesUteisManyWhereInput>;
};


export type MutationUnpublishManyTelefoneUtilConnectionArgs = {
  after?: InputMaybe<Scalars['ID']>;
  before?: InputMaybe<Scalars['ID']>;
  first?: InputMaybe<Scalars['Int']>;
  from?: Array<Stage>;
  last?: InputMaybe<Scalars['Int']>;
  skip?: InputMaybe<Scalars['Int']>;
  stage?: InputMaybe<Stage>;
  where?: InputMaybe<TelefonesUteisManyWhereInput>;
};


export type MutationUnpublishManyUsuariosArgs = {
  from?: Array<Stage>;
  where?: InputMaybe<UsuarioManyWhereInput>;
};


export type MutationUnpublishManyUsuariosConnectionArgs = {
  after?: InputMaybe<Scalars['ID']>;
  before?: InputMaybe<Scalars['ID']>;
  first?: InputMaybe<Scalars['Int']>;
  from?: Array<Stage>;
  last?: InputMaybe<Scalars['Int']>;
  skip?: InputMaybe<Scalars['Int']>;
  stage?: InputMaybe<Stage>;
  where?: InputMaybe<UsuarioManyWhereInput>;
};


export type MutationUnpublishPlantaoArgs = {
  from?: Array<Stage>;
  locales?: InputMaybe<Array<Locale>>;
  unpublishBase?: InputMaybe<Scalars['Boolean']>;
  where: PlantaoWhereUniqueInput;
};


export type MutationUnpublishPostArgs = {
  from?: Array<Stage>;
  where: PostWhereUniqueInput;
};


export type MutationUnpublishProdutoArgs = {
  from?: Array<Stage>;
  where: ProdutoWhereUniqueInput;
};


export type MutationUnpublishSubscriberArgs = {
  from?: Array<Stage>;
  where: SubscriberWhereUniqueInput;
};


export type MutationUnpublishTelefoneCategoriaArgs = {
  from?: Array<Stage>;
  where: TelefoneCategoriaWhereUniqueInput;
};


export type MutationUnpublishTelefonesUteisArgs = {
  from?: Array<Stage>;
  where: TelefonesUteisWhereUniqueInput;
};


export type MutationUnpublishUsuarioArgs = {
  from?: Array<Stage>;
  where: UsuarioWhereUniqueInput;
};


export type MutationUpdateApoiadorArgs = {
  data: ApoiadorUpdateInput;
  where: ApoiadorWhereUniqueInput;
};


export type MutationUpdateAssetArgs = {
  data: AssetUpdateInput;
  where: AssetWhereUniqueInput;
};


export type MutationUpdateFarmaciaArgs = {
  data: FarmaciaUpdateInput;
  where: FarmaciaWhereUniqueInput;
};


export type MutationUpdateManyApoiadoresArgs = {
  data: ApoiadorUpdateManyInput;
  where?: InputMaybe<ApoiadorManyWhereInput>;
};


export type MutationUpdateManyApoiadoresConnectionArgs = {
  after?: InputMaybe<Scalars['ID']>;
  before?: InputMaybe<Scalars['ID']>;
  data: ApoiadorUpdateManyInput;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<ApoiadorManyWhereInput>;
};


export type MutationUpdateManyAssetsArgs = {
  data: AssetUpdateManyInput;
  where?: InputMaybe<AssetManyWhereInput>;
};


export type MutationUpdateManyAssetsConnectionArgs = {
  after?: InputMaybe<Scalars['ID']>;
  before?: InputMaybe<Scalars['ID']>;
  data: AssetUpdateManyInput;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<AssetManyWhereInput>;
};


export type MutationUpdateManyFarmaciasArgs = {
  data: FarmaciaUpdateManyInput;
  where?: InputMaybe<FarmaciaManyWhereInput>;
};


export type MutationUpdateManyFarmaciasConnectionArgs = {
  after?: InputMaybe<Scalars['ID']>;
  before?: InputMaybe<Scalars['ID']>;
  data: FarmaciaUpdateManyInput;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<FarmaciaManyWhereInput>;
};


export type MutationUpdateManyPlantoesArgs = {
  data: PlantaoUpdateManyInput;
  where?: InputMaybe<PlantaoManyWhereInput>;
};


export type MutationUpdateManyPlantoesConnectionArgs = {
  after?: InputMaybe<Scalars['ID']>;
  before?: InputMaybe<Scalars['ID']>;
  data: PlantaoUpdateManyInput;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<PlantaoManyWhereInput>;
};


export type MutationUpdateManyPostsArgs = {
  data: PostUpdateManyInput;
  where?: InputMaybe<PostManyWhereInput>;
};


export type MutationUpdateManyPostsConnectionArgs = {
  after?: InputMaybe<Scalars['ID']>;
  before?: InputMaybe<Scalars['ID']>;
  data: PostUpdateManyInput;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<PostManyWhereInput>;
};


export type MutationUpdateManyProdutosArgs = {
  data: ProdutoUpdateManyInput;
  where?: InputMaybe<ProdutoManyWhereInput>;
};


export type MutationUpdateManyProdutosConnectionArgs = {
  after?: InputMaybe<Scalars['ID']>;
  before?: InputMaybe<Scalars['ID']>;
  data: ProdutoUpdateManyInput;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<ProdutoManyWhereInput>;
};


export type MutationUpdateManySubscribersArgs = {
  data: SubscriberUpdateManyInput;
  where?: InputMaybe<SubscriberManyWhereInput>;
};


export type MutationUpdateManySubscribersConnectionArgs = {
  after?: InputMaybe<Scalars['ID']>;
  before?: InputMaybe<Scalars['ID']>;
  data: SubscriberUpdateManyInput;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<SubscriberManyWhereInput>;
};


export type MutationUpdateManyTelefoneCategoriasArgs = {
  data: TelefoneCategoriaUpdateManyInput;
  where?: InputMaybe<TelefoneCategoriaManyWhereInput>;
};


export type MutationUpdateManyTelefoneCategoriasConnectionArgs = {
  after?: InputMaybe<Scalars['ID']>;
  before?: InputMaybe<Scalars['ID']>;
  data: TelefoneCategoriaUpdateManyInput;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<TelefoneCategoriaManyWhereInput>;
};


export type MutationUpdateManyTelefoneUtilArgs = {
  data: TelefonesUteisUpdateManyInput;
  where?: InputMaybe<TelefonesUteisManyWhereInput>;
};


export type MutationUpdateManyTelefoneUtilConnectionArgs = {
  after?: InputMaybe<Scalars['ID']>;
  before?: InputMaybe<Scalars['ID']>;
  data: TelefonesUteisUpdateManyInput;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<TelefonesUteisManyWhereInput>;
};


export type MutationUpdateManyUsuariosArgs = {
  data: UsuarioUpdateManyInput;
  where?: InputMaybe<UsuarioManyWhereInput>;
};


export type MutationUpdateManyUsuariosConnectionArgs = {
  after?: InputMaybe<Scalars['ID']>;
  before?: InputMaybe<Scalars['ID']>;
  data: UsuarioUpdateManyInput;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<UsuarioManyWhereInput>;
};


export type MutationUpdatePlantaoArgs = {
  data: PlantaoUpdateInput;
  where: PlantaoWhereUniqueInput;
};


export type MutationUpdatePostArgs = {
  data: PostUpdateInput;
  where: PostWhereUniqueInput;
};


export type MutationUpdateProdutoArgs = {
  data: ProdutoUpdateInput;
  where: ProdutoWhereUniqueInput;
};


export type MutationUpdateScheduledReleaseArgs = {
  data: ScheduledReleaseUpdateInput;
  where: ScheduledReleaseWhereUniqueInput;
};


export type MutationUpdateSubscriberArgs = {
  data: SubscriberUpdateInput;
  where: SubscriberWhereUniqueInput;
};


export type MutationUpdateTelefoneCategoriaArgs = {
  data: TelefoneCategoriaUpdateInput;
  where: TelefoneCategoriaWhereUniqueInput;
};


export type MutationUpdateTelefonesUteisArgs = {
  data: TelefonesUteisUpdateInput;
  where: TelefonesUteisWhereUniqueInput;
};


export type MutationUpdateUsuarioArgs = {
  data: UsuarioUpdateInput;
  where: UsuarioWhereUniqueInput;
};


export type MutationUpsertApoiadorArgs = {
  upsert: ApoiadorUpsertInput;
  where: ApoiadorWhereUniqueInput;
};


export type MutationUpsertAssetArgs = {
  upsert: AssetUpsertInput;
  where: AssetWhereUniqueInput;
};


export type MutationUpsertFarmaciaArgs = {
  upsert: FarmaciaUpsertInput;
  where: FarmaciaWhereUniqueInput;
};


export type MutationUpsertPlantaoArgs = {
  upsert: PlantaoUpsertInput;
  where: PlantaoWhereUniqueInput;
};


export type MutationUpsertPostArgs = {
  upsert: PostUpsertInput;
  where: PostWhereUniqueInput;
};


export type MutationUpsertProdutoArgs = {
  upsert: ProdutoUpsertInput;
  where: ProdutoWhereUniqueInput;
};


export type MutationUpsertSubscriberArgs = {
  upsert: SubscriberUpsertInput;
  where: SubscriberWhereUniqueInput;
};


export type MutationUpsertTelefoneCategoriaArgs = {
  upsert: TelefoneCategoriaUpsertInput;
  where: TelefoneCategoriaWhereUniqueInput;
};


export type MutationUpsertTelefonesUteisArgs = {
  upsert: TelefonesUteisUpsertInput;
  where: TelefonesUteisWhereUniqueInput;
};


export type MutationUpsertUsuarioArgs = {
  upsert: UsuarioUpsertInput;
  where: UsuarioWhereUniqueInput;
};

/** An object with an ID */
export type Node = {
  /** The id of the object. */
  id: Scalars['ID'];
  /** The Stage of an object */
  stage: Stage;
};

/** Information about pagination in a connection. */
export type PageInfo = {
  __typename?: 'PageInfo';
  /** When paginating forwards, the cursor to continue. */
  endCursor?: Maybe<Scalars['String']>;
  /** When paginating forwards, are there more items? */
  hasNextPage: Scalars['Boolean'];
  /** When paginating backwards, are there more items? */
  hasPreviousPage: Scalars['Boolean'];
  /** Number of items in the current page. */
  pageSize?: Maybe<Scalars['Int']>;
  /** When paginating backwards, the cursor to continue. */
  startCursor?: Maybe<Scalars['String']>;
};

export type Plantao = Node & {
  __typename?: 'Plantao';
  /** The time the document was created */
  createdAt: Scalars['DateTime'];
  /** User that created this document */
  createdBy?: Maybe<User>;
  datetimeend: Scalars['DateTime'];
  datetimestart: Scalars['DateTime'];
  /** Get the document in other stages */
  documentInStages: Array<Plantao>;
  farmacias?: Maybe<PlantaoFarmacias>;
  /** List of Plantao versions */
  history: Array<Version>;
  /** The unique identifier */
  id: Scalars['ID'];
  /** System Locale field */
  locale: Locale;
  /** Get the other localizations for this document */
  localizations: Array<Plantao>;
  /** The time the document was published. Null on documents in draft stage. */
  publishedAt?: Maybe<Scalars['DateTime']>;
  /** User that last published this document */
  publishedBy?: Maybe<User>;
  scheduledIn: Array<ScheduledOperation>;
  /** System stage field */
  stage: Stage;
  /** The time the document was updated */
  updatedAt: Scalars['DateTime'];
  /** User that last updated this document */
  updatedBy?: Maybe<User>;
};


export type PlantaoCreatedAtArgs = {
  variation?: SystemDateTimeFieldVariation;
};


export type PlantaoCreatedByArgs = {
  forceParentLocale?: InputMaybe<Scalars['Boolean']>;
  locales?: InputMaybe<Array<Locale>>;
};


export type PlantaoDocumentInStagesArgs = {
  includeCurrent?: Scalars['Boolean'];
  inheritLocale?: Scalars['Boolean'];
  stages?: Array<Stage>;
};


export type PlantaoFarmaciasArgs = {
  forceParentLocale?: InputMaybe<Scalars['Boolean']>;
  locales?: InputMaybe<Array<Locale>>;
};


export type PlantaoHistoryArgs = {
  limit?: Scalars['Int'];
  skip?: Scalars['Int'];
  stageOverride?: InputMaybe<Stage>;
};


export type PlantaoLocalizationsArgs = {
  includeCurrent?: Scalars['Boolean'];
  locales?: Array<Locale>;
};


export type PlantaoPublishedAtArgs = {
  variation?: SystemDateTimeFieldVariation;
};


export type PlantaoPublishedByArgs = {
  forceParentLocale?: InputMaybe<Scalars['Boolean']>;
  locales?: InputMaybe<Array<Locale>>;
};


export type PlantaoScheduledInArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  forceParentLocale?: InputMaybe<Scalars['Boolean']>;
  last?: InputMaybe<Scalars['Int']>;
  locales?: InputMaybe<Array<Locale>>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<ScheduledOperationWhereInput>;
};


export type PlantaoUpdatedAtArgs = {
  variation?: SystemDateTimeFieldVariation;
};


export type PlantaoUpdatedByArgs = {
  forceParentLocale?: InputMaybe<Scalars['Boolean']>;
  locales?: InputMaybe<Array<Locale>>;
};

export type PlantaoConnectInput = {
  /** Allow to specify document position in list of connected documents, will default to appending at end of list */
  position?: InputMaybe<ConnectPositionInput>;
  /** Document to connect */
  where: PlantaoWhereUniqueInput;
};

/** A connection to a list of items. */
export type PlantaoConnection = {
  __typename?: 'PlantaoConnection';
  aggregate: Aggregate;
  /** A list of edges. */
  edges: Array<PlantaoEdge>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

export type PlantaoCreateInput = {
  createdAt?: InputMaybe<Scalars['DateTime']>;
  /** datetimeend input for default locale (en) */
  datetimeend: Scalars['DateTime'];
  /** datetimestart input for default locale (en) */
  datetimestart: Scalars['DateTime'];
  farmacias?: InputMaybe<PlantaoFarmaciasCreateOneInlineInput>;
  /** Inline mutations for managing document localizations excluding the default locale */
  localizations?: InputMaybe<PlantaoCreateLocalizationsInput>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
};

export type PlantaoCreateLocalizationDataInput = {
  createdAt?: InputMaybe<Scalars['DateTime']>;
  datetimeend: Scalars['DateTime'];
  datetimestart: Scalars['DateTime'];
  updatedAt?: InputMaybe<Scalars['DateTime']>;
};

export type PlantaoCreateLocalizationInput = {
  /** Localization input */
  data: PlantaoCreateLocalizationDataInput;
  locale: Locale;
};

export type PlantaoCreateLocalizationsInput = {
  /** Create localizations for the newly-created document */
  create?: InputMaybe<Array<PlantaoCreateLocalizationInput>>;
};

export type PlantaoCreateManyInlineInput = {
  /** Connect multiple existing Plantao documents */
  connect?: InputMaybe<Array<PlantaoWhereUniqueInput>>;
  /** Create and connect multiple existing Plantao documents */
  create?: InputMaybe<Array<PlantaoCreateInput>>;
};

export type PlantaoCreateOneInlineInput = {
  /** Connect one existing Plantao document */
  connect?: InputMaybe<PlantaoWhereUniqueInput>;
  /** Create and connect one Plantao document */
  create?: InputMaybe<PlantaoCreateInput>;
};

/** An edge in a connection. */
export type PlantaoEdge = {
  __typename?: 'PlantaoEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
  /** The item at the end of the edge. */
  node: Plantao;
};

export type PlantaoFarmacias = Farmacia;

export type PlantaoFarmaciasConnectInput = {
  Farmacia?: InputMaybe<FarmaciaConnectInput>;
};

export type PlantaoFarmaciasCreateInput = {
  Farmacia?: InputMaybe<FarmaciaCreateInput>;
};

export type PlantaoFarmaciasCreateManyInlineInput = {
  /** Connect multiple existing PlantaoFarmacias documents */
  connect?: InputMaybe<Array<PlantaoFarmaciasWhereUniqueInput>>;
  /** Create and connect multiple existing PlantaoFarmacias documents */
  create?: InputMaybe<Array<PlantaoFarmaciasCreateInput>>;
};

export type PlantaoFarmaciasCreateOneInlineInput = {
  /** Connect one existing PlantaoFarmacias document */
  connect?: InputMaybe<PlantaoFarmaciasWhereUniqueInput>;
  /** Create and connect one PlantaoFarmacias document */
  create?: InputMaybe<PlantaoFarmaciasCreateInput>;
};

export type PlantaoFarmaciasUpdateInput = {
  Farmacia?: InputMaybe<FarmaciaUpdateInput>;
};

export type PlantaoFarmaciasUpdateManyInlineInput = {
  /** Connect multiple existing PlantaoFarmacias documents */
  connect?: InputMaybe<Array<PlantaoFarmaciasConnectInput>>;
  /** Create and connect multiple PlantaoFarmacias documents */
  create?: InputMaybe<Array<PlantaoFarmaciasCreateInput>>;
  /** Delete multiple PlantaoFarmacias documents */
  delete?: InputMaybe<Array<PlantaoFarmaciasWhereUniqueInput>>;
  /** Disconnect multiple PlantaoFarmacias documents */
  disconnect?: InputMaybe<Array<PlantaoFarmaciasWhereUniqueInput>>;
  /** Override currently-connected documents with multiple existing PlantaoFarmacias documents */
  set?: InputMaybe<Array<PlantaoFarmaciasWhereUniqueInput>>;
  /** Update multiple PlantaoFarmacias documents */
  update?: InputMaybe<Array<PlantaoFarmaciasUpdateWithNestedWhereUniqueInput>>;
  /** Upsert multiple PlantaoFarmacias documents */
  upsert?: InputMaybe<Array<PlantaoFarmaciasUpsertWithNestedWhereUniqueInput>>;
};

export type PlantaoFarmaciasUpdateManyWithNestedWhereInput = {
  Farmacia?: InputMaybe<FarmaciaUpdateManyWithNestedWhereInput>;
};

export type PlantaoFarmaciasUpdateOneInlineInput = {
  /** Connect existing PlantaoFarmacias document */
  connect?: InputMaybe<PlantaoFarmaciasWhereUniqueInput>;
  /** Create and connect one PlantaoFarmacias document */
  create?: InputMaybe<PlantaoFarmaciasCreateInput>;
  /** Delete currently connected PlantaoFarmacias document */
  delete?: InputMaybe<Scalars['Boolean']>;
  /** Disconnect currently connected PlantaoFarmacias document */
  disconnect?: InputMaybe<Scalars['Boolean']>;
  /** Update single PlantaoFarmacias document */
  update?: InputMaybe<PlantaoFarmaciasUpdateWithNestedWhereUniqueInput>;
  /** Upsert single PlantaoFarmacias document */
  upsert?: InputMaybe<PlantaoFarmaciasUpsertWithNestedWhereUniqueInput>;
};

export type PlantaoFarmaciasUpdateWithNestedWhereUniqueInput = {
  Farmacia?: InputMaybe<FarmaciaUpdateWithNestedWhereUniqueInput>;
};

export type PlantaoFarmaciasUpsertWithNestedWhereUniqueInput = {
  Farmacia?: InputMaybe<FarmaciaUpsertWithNestedWhereUniqueInput>;
};

export type PlantaoFarmaciasWhereInput = {
  Farmacia?: InputMaybe<FarmaciaWhereInput>;
};

export type PlantaoFarmaciasWhereUniqueInput = {
  Farmacia?: InputMaybe<FarmaciaWhereUniqueInput>;
};

/** Identifies documents */
export type PlantaoManyWhereInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<PlantaoWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<PlantaoWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<PlantaoWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars['String']>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  createdAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  createdAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  /** All values less than the given value. */
  createdAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  createdAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** Any other value that exists and is not equal to the given value. */
  createdAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  createdBy?: InputMaybe<UserWhereInput>;
  documentInStages_every?: InputMaybe<PlantaoWhereStageInput>;
  documentInStages_none?: InputMaybe<PlantaoWhereStageInput>;
  documentInStages_some?: InputMaybe<PlantaoWhereStageInput>;
  /** All values in which the union is connected to the given models */
  farmacias?: InputMaybe<PlantaoFarmaciasWhereInput>;
  /** All values in which the union is empty */
  farmacias_empty?: InputMaybe<Scalars['Boolean']>;
  id?: InputMaybe<Scalars['ID']>;
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars['ID']>;
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars['ID']>;
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** Any other value that exists and is not equal to the given value. */
  id_not?: InputMaybe<Scalars['ID']>;
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars['ID']>;
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars['ID']>;
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars['ID']>;
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars['ID']>;
  publishedAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  publishedAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  publishedAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  publishedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  /** All values less than the given value. */
  publishedAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  publishedAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** Any other value that exists and is not equal to the given value. */
  publishedAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  publishedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  publishedBy?: InputMaybe<UserWhereInput>;
  scheduledIn_every?: InputMaybe<ScheduledOperationWhereInput>;
  scheduledIn_none?: InputMaybe<ScheduledOperationWhereInput>;
  scheduledIn_some?: InputMaybe<ScheduledOperationWhereInput>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  updatedAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  updatedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  /** All values less than the given value. */
  updatedAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** Any other value that exists and is not equal to the given value. */
  updatedAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  updatedBy?: InputMaybe<UserWhereInput>;
};

export enum PlantaoOrderByInput {
  CreatedAtAsc = 'createdAt_ASC',
  CreatedAtDesc = 'createdAt_DESC',
  DatetimeendAsc = 'datetimeend_ASC',
  DatetimeendDesc = 'datetimeend_DESC',
  DatetimestartAsc = 'datetimestart_ASC',
  DatetimestartDesc = 'datetimestart_DESC',
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  PublishedAtAsc = 'publishedAt_ASC',
  PublishedAtDesc = 'publishedAt_DESC',
  UpdatedAtAsc = 'updatedAt_ASC',
  UpdatedAtDesc = 'updatedAt_DESC'
}

export type PlantaoUpdateInput = {
  /** datetimeend input for default locale (en) */
  datetimeend?: InputMaybe<Scalars['DateTime']>;
  /** datetimestart input for default locale (en) */
  datetimestart?: InputMaybe<Scalars['DateTime']>;
  farmacias?: InputMaybe<PlantaoFarmaciasUpdateOneInlineInput>;
  /** Manage document localizations */
  localizations?: InputMaybe<PlantaoUpdateLocalizationsInput>;
};

export type PlantaoUpdateLocalizationDataInput = {
  datetimeend?: InputMaybe<Scalars['DateTime']>;
  datetimestart?: InputMaybe<Scalars['DateTime']>;
};

export type PlantaoUpdateLocalizationInput = {
  data: PlantaoUpdateLocalizationDataInput;
  locale: Locale;
};

export type PlantaoUpdateLocalizationsInput = {
  /** Localizations to create */
  create?: InputMaybe<Array<PlantaoCreateLocalizationInput>>;
  /** Localizations to delete */
  delete?: InputMaybe<Array<Locale>>;
  /** Localizations to update */
  update?: InputMaybe<Array<PlantaoUpdateLocalizationInput>>;
  upsert?: InputMaybe<Array<PlantaoUpsertLocalizationInput>>;
};

export type PlantaoUpdateManyInlineInput = {
  /** Connect multiple existing Plantao documents */
  connect?: InputMaybe<Array<PlantaoConnectInput>>;
  /** Create and connect multiple Plantao documents */
  create?: InputMaybe<Array<PlantaoCreateInput>>;
  /** Delete multiple Plantao documents */
  delete?: InputMaybe<Array<PlantaoWhereUniqueInput>>;
  /** Disconnect multiple Plantao documents */
  disconnect?: InputMaybe<Array<PlantaoWhereUniqueInput>>;
  /** Override currently-connected documents with multiple existing Plantao documents */
  set?: InputMaybe<Array<PlantaoWhereUniqueInput>>;
  /** Update multiple Plantao documents */
  update?: InputMaybe<Array<PlantaoUpdateWithNestedWhereUniqueInput>>;
  /** Upsert multiple Plantao documents */
  upsert?: InputMaybe<Array<PlantaoUpsertWithNestedWhereUniqueInput>>;
};

export type PlantaoUpdateManyInput = {
  /** datetimeend input for default locale (en) */
  datetimeend?: InputMaybe<Scalars['DateTime']>;
  /** datetimestart input for default locale (en) */
  datetimestart?: InputMaybe<Scalars['DateTime']>;
  /** Optional updates to localizations */
  localizations?: InputMaybe<PlantaoUpdateManyLocalizationsInput>;
};

export type PlantaoUpdateManyLocalizationDataInput = {
  datetimeend?: InputMaybe<Scalars['DateTime']>;
  datetimestart?: InputMaybe<Scalars['DateTime']>;
};

export type PlantaoUpdateManyLocalizationInput = {
  data: PlantaoUpdateManyLocalizationDataInput;
  locale: Locale;
};

export type PlantaoUpdateManyLocalizationsInput = {
  /** Localizations to update */
  update?: InputMaybe<Array<PlantaoUpdateManyLocalizationInput>>;
};

export type PlantaoUpdateManyWithNestedWhereInput = {
  /** Update many input */
  data: PlantaoUpdateManyInput;
  /** Document search */
  where: PlantaoWhereInput;
};

export type PlantaoUpdateOneInlineInput = {
  /** Connect existing Plantao document */
  connect?: InputMaybe<PlantaoWhereUniqueInput>;
  /** Create and connect one Plantao document */
  create?: InputMaybe<PlantaoCreateInput>;
  /** Delete currently connected Plantao document */
  delete?: InputMaybe<Scalars['Boolean']>;
  /** Disconnect currently connected Plantao document */
  disconnect?: InputMaybe<Scalars['Boolean']>;
  /** Update single Plantao document */
  update?: InputMaybe<PlantaoUpdateWithNestedWhereUniqueInput>;
  /** Upsert single Plantao document */
  upsert?: InputMaybe<PlantaoUpsertWithNestedWhereUniqueInput>;
};

export type PlantaoUpdateWithNestedWhereUniqueInput = {
  /** Document to update */
  data: PlantaoUpdateInput;
  /** Unique document search */
  where: PlantaoWhereUniqueInput;
};

export type PlantaoUpsertInput = {
  /** Create document if it didn't exist */
  create: PlantaoCreateInput;
  /** Update document if it exists */
  update: PlantaoUpdateInput;
};

export type PlantaoUpsertLocalizationInput = {
  create: PlantaoCreateLocalizationDataInput;
  locale: Locale;
  update: PlantaoUpdateLocalizationDataInput;
};

export type PlantaoUpsertWithNestedWhereUniqueInput = {
  /** Upsert data */
  data: PlantaoUpsertInput;
  /** Unique document search */
  where: PlantaoWhereUniqueInput;
};

/** This contains a set of filters that can be used to compare values internally */
export type PlantaoWhereComparatorInput = {
  /** This field can be used to request to check if the entry is outdated by internal comparison */
  outdated_to?: InputMaybe<Scalars['Boolean']>;
};

/** Identifies documents */
export type PlantaoWhereInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<PlantaoWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<PlantaoWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<PlantaoWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars['String']>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  createdAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  createdAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  /** All values less than the given value. */
  createdAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  createdAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** Any other value that exists and is not equal to the given value. */
  createdAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  createdBy?: InputMaybe<UserWhereInput>;
  datetimeend?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  datetimeend_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  datetimeend_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  datetimeend_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  /** All values less than the given value. */
  datetimeend_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  datetimeend_lte?: InputMaybe<Scalars['DateTime']>;
  /** Any other value that exists and is not equal to the given value. */
  datetimeend_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  datetimeend_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  datetimestart?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  datetimestart_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  datetimestart_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  datetimestart_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  /** All values less than the given value. */
  datetimestart_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  datetimestart_lte?: InputMaybe<Scalars['DateTime']>;
  /** Any other value that exists and is not equal to the given value. */
  datetimestart_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  datetimestart_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  documentInStages_every?: InputMaybe<PlantaoWhereStageInput>;
  documentInStages_none?: InputMaybe<PlantaoWhereStageInput>;
  documentInStages_some?: InputMaybe<PlantaoWhereStageInput>;
  /** All values in which the union is connected to the given models */
  farmacias?: InputMaybe<PlantaoFarmaciasWhereInput>;
  /** All values in which the union is empty */
  farmacias_empty?: InputMaybe<Scalars['Boolean']>;
  id?: InputMaybe<Scalars['ID']>;
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars['ID']>;
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars['ID']>;
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** Any other value that exists and is not equal to the given value. */
  id_not?: InputMaybe<Scalars['ID']>;
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars['ID']>;
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars['ID']>;
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars['ID']>;
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars['ID']>;
  publishedAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  publishedAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  publishedAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  publishedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  /** All values less than the given value. */
  publishedAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  publishedAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** Any other value that exists and is not equal to the given value. */
  publishedAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  publishedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  publishedBy?: InputMaybe<UserWhereInput>;
  scheduledIn_every?: InputMaybe<ScheduledOperationWhereInput>;
  scheduledIn_none?: InputMaybe<ScheduledOperationWhereInput>;
  scheduledIn_some?: InputMaybe<ScheduledOperationWhereInput>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  updatedAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  updatedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  /** All values less than the given value. */
  updatedAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** Any other value that exists and is not equal to the given value. */
  updatedAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  updatedBy?: InputMaybe<UserWhereInput>;
};

/** The document in stages filter allows specifying a stage entry to cross compare the same document between different stages */
export type PlantaoWhereStageInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<PlantaoWhereStageInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<PlantaoWhereStageInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<PlantaoWhereStageInput>>;
  /** This field contains fields which can be set as true or false to specify an internal comparison */
  compareWithParent?: InputMaybe<PlantaoWhereComparatorInput>;
  /** Specify the stage to compare with */
  stage?: InputMaybe<Stage>;
};

/** References Plantao record uniquely */
export type PlantaoWhereUniqueInput = {
  id?: InputMaybe<Scalars['ID']>;
};

export type Post = Node & {
  __typename?: 'Post';
  ativo: Scalars['Boolean'];
  author?: Maybe<Usuario>;
  category: Scalars['String'];
  content?: Maybe<RichText>;
  /** The time the document was created */
  createdAt: Scalars['DateTime'];
  /** User that created this document */
  createdBy?: Maybe<User>;
  /** Get the document in other stages */
  documentInStages: Array<Post>;
  /** List of Post versions */
  history: Array<Version>;
  /** The unique identifier */
  id: Scalars['ID'];
  /** The time the document was published. Null on documents in draft stage. */
  publishedAt?: Maybe<Scalars['DateTime']>;
  /** User that last published this document */
  publishedBy?: Maybe<User>;
  scheduledIn: Array<ScheduledOperation>;
  slug: Scalars['String'];
  /** System stage field */
  stage: Stage;
  thumbnail: Asset;
  title: Scalars['String'];
  /** The time the document was updated */
  updatedAt: Scalars['DateTime'];
  /** User that last updated this document */
  updatedBy?: Maybe<User>;
  views?: Maybe<Scalars['Int']>;
};


export type PostAuthorArgs = {
  forceParentLocale?: InputMaybe<Scalars['Boolean']>;
  locales?: InputMaybe<Array<Locale>>;
};


export type PostCreatedByArgs = {
  forceParentLocale?: InputMaybe<Scalars['Boolean']>;
  locales?: InputMaybe<Array<Locale>>;
};


export type PostDocumentInStagesArgs = {
  includeCurrent?: Scalars['Boolean'];
  inheritLocale?: Scalars['Boolean'];
  stages?: Array<Stage>;
};


export type PostHistoryArgs = {
  limit?: Scalars['Int'];
  skip?: Scalars['Int'];
  stageOverride?: InputMaybe<Stage>;
};


export type PostPublishedByArgs = {
  forceParentLocale?: InputMaybe<Scalars['Boolean']>;
  locales?: InputMaybe<Array<Locale>>;
};


export type PostScheduledInArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  forceParentLocale?: InputMaybe<Scalars['Boolean']>;
  last?: InputMaybe<Scalars['Int']>;
  locales?: InputMaybe<Array<Locale>>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<ScheduledOperationWhereInput>;
};


export type PostThumbnailArgs = {
  forceParentLocale?: InputMaybe<Scalars['Boolean']>;
  locales?: InputMaybe<Array<Locale>>;
};


export type PostUpdatedByArgs = {
  forceParentLocale?: InputMaybe<Scalars['Boolean']>;
  locales?: InputMaybe<Array<Locale>>;
};

export type PostConnectInput = {
  /** Allow to specify document position in list of connected documents, will default to appending at end of list */
  position?: InputMaybe<ConnectPositionInput>;
  /** Document to connect */
  where: PostWhereUniqueInput;
};

/** A connection to a list of items. */
export type PostConnection = {
  __typename?: 'PostConnection';
  aggregate: Aggregate;
  /** A list of edges. */
  edges: Array<PostEdge>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

export type PostCreateInput = {
  ativo: Scalars['Boolean'];
  author?: InputMaybe<UsuarioCreateOneInlineInput>;
  category: Scalars['String'];
  content?: InputMaybe<Scalars['RichTextAST']>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  slug: Scalars['String'];
  thumbnail: AssetCreateOneInlineInput;
  title: Scalars['String'];
  updatedAt?: InputMaybe<Scalars['DateTime']>;
  views?: InputMaybe<Scalars['Int']>;
};

export type PostCreateManyInlineInput = {
  /** Connect multiple existing Post documents */
  connect?: InputMaybe<Array<PostWhereUniqueInput>>;
  /** Create and connect multiple existing Post documents */
  create?: InputMaybe<Array<PostCreateInput>>;
};

export type PostCreateOneInlineInput = {
  /** Connect one existing Post document */
  connect?: InputMaybe<PostWhereUniqueInput>;
  /** Create and connect one Post document */
  create?: InputMaybe<PostCreateInput>;
};

/** An edge in a connection. */
export type PostEdge = {
  __typename?: 'PostEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
  /** The item at the end of the edge. */
  node: Post;
};

/** Identifies documents */
export type PostManyWhereInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<PostWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<PostWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<PostWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars['String']>;
  ativo?: InputMaybe<Scalars['Boolean']>;
  /** Any other value that exists and is not equal to the given value. */
  ativo_not?: InputMaybe<Scalars['Boolean']>;
  author?: InputMaybe<UsuarioWhereInput>;
  category?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  category_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  category_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  category_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** Any other value that exists and is not equal to the given value. */
  category_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  category_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  category_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  category_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values not starting with the given string. */
  category_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  category_starts_with?: InputMaybe<Scalars['String']>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  createdAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  createdAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  /** All values less than the given value. */
  createdAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  createdAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** Any other value that exists and is not equal to the given value. */
  createdAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  createdBy?: InputMaybe<UserWhereInput>;
  documentInStages_every?: InputMaybe<PostWhereStageInput>;
  documentInStages_none?: InputMaybe<PostWhereStageInput>;
  documentInStages_some?: InputMaybe<PostWhereStageInput>;
  id?: InputMaybe<Scalars['ID']>;
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars['ID']>;
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars['ID']>;
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** Any other value that exists and is not equal to the given value. */
  id_not?: InputMaybe<Scalars['ID']>;
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars['ID']>;
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars['ID']>;
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars['ID']>;
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars['ID']>;
  publishedAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  publishedAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  publishedAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  publishedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  /** All values less than the given value. */
  publishedAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  publishedAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** Any other value that exists and is not equal to the given value. */
  publishedAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  publishedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  publishedBy?: InputMaybe<UserWhereInput>;
  scheduledIn_every?: InputMaybe<ScheduledOperationWhereInput>;
  scheduledIn_none?: InputMaybe<ScheduledOperationWhereInput>;
  scheduledIn_some?: InputMaybe<ScheduledOperationWhereInput>;
  slug?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  slug_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  slug_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  slug_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** Any other value that exists and is not equal to the given value. */
  slug_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  slug_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  slug_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  slug_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values not starting with the given string. */
  slug_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  slug_starts_with?: InputMaybe<Scalars['String']>;
  thumbnail?: InputMaybe<AssetWhereInput>;
  title?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  title_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  title_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  title_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** Any other value that exists and is not equal to the given value. */
  title_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  title_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  title_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  title_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values not starting with the given string. */
  title_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  title_starts_with?: InputMaybe<Scalars['String']>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  updatedAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  updatedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  /** All values less than the given value. */
  updatedAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** Any other value that exists and is not equal to the given value. */
  updatedAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  updatedBy?: InputMaybe<UserWhereInput>;
  views?: InputMaybe<Scalars['Int']>;
  /** All values greater than the given value. */
  views_gt?: InputMaybe<Scalars['Int']>;
  /** All values greater than or equal the given value. */
  views_gte?: InputMaybe<Scalars['Int']>;
  /** All values that are contained in given list. */
  views_in?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  /** All values less than the given value. */
  views_lt?: InputMaybe<Scalars['Int']>;
  /** All values less than or equal the given value. */
  views_lte?: InputMaybe<Scalars['Int']>;
  /** Any other value that exists and is not equal to the given value. */
  views_not?: InputMaybe<Scalars['Int']>;
  /** All values that are not contained in given list. */
  views_not_in?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
};

export enum PostOrderByInput {
  AtivoAsc = 'ativo_ASC',
  AtivoDesc = 'ativo_DESC',
  CategoryAsc = 'category_ASC',
  CategoryDesc = 'category_DESC',
  CreatedAtAsc = 'createdAt_ASC',
  CreatedAtDesc = 'createdAt_DESC',
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  PublishedAtAsc = 'publishedAt_ASC',
  PublishedAtDesc = 'publishedAt_DESC',
  SlugAsc = 'slug_ASC',
  SlugDesc = 'slug_DESC',
  TitleAsc = 'title_ASC',
  TitleDesc = 'title_DESC',
  UpdatedAtAsc = 'updatedAt_ASC',
  UpdatedAtDesc = 'updatedAt_DESC',
  ViewsAsc = 'views_ASC',
  ViewsDesc = 'views_DESC'
}

export type PostUpdateInput = {
  ativo?: InputMaybe<Scalars['Boolean']>;
  author?: InputMaybe<UsuarioUpdateOneInlineInput>;
  category?: InputMaybe<Scalars['String']>;
  content?: InputMaybe<Scalars['RichTextAST']>;
  slug?: InputMaybe<Scalars['String']>;
  thumbnail?: InputMaybe<AssetUpdateOneInlineInput>;
  title?: InputMaybe<Scalars['String']>;
  views?: InputMaybe<Scalars['Int']>;
};

export type PostUpdateManyInlineInput = {
  /** Connect multiple existing Post documents */
  connect?: InputMaybe<Array<PostConnectInput>>;
  /** Create and connect multiple Post documents */
  create?: InputMaybe<Array<PostCreateInput>>;
  /** Delete multiple Post documents */
  delete?: InputMaybe<Array<PostWhereUniqueInput>>;
  /** Disconnect multiple Post documents */
  disconnect?: InputMaybe<Array<PostWhereUniqueInput>>;
  /** Override currently-connected documents with multiple existing Post documents */
  set?: InputMaybe<Array<PostWhereUniqueInput>>;
  /** Update multiple Post documents */
  update?: InputMaybe<Array<PostUpdateWithNestedWhereUniqueInput>>;
  /** Upsert multiple Post documents */
  upsert?: InputMaybe<Array<PostUpsertWithNestedWhereUniqueInput>>;
};

export type PostUpdateManyInput = {
  ativo?: InputMaybe<Scalars['Boolean']>;
  category?: InputMaybe<Scalars['String']>;
  content?: InputMaybe<Scalars['RichTextAST']>;
  title?: InputMaybe<Scalars['String']>;
  views?: InputMaybe<Scalars['Int']>;
};

export type PostUpdateManyWithNestedWhereInput = {
  /** Update many input */
  data: PostUpdateManyInput;
  /** Document search */
  where: PostWhereInput;
};

export type PostUpdateOneInlineInput = {
  /** Connect existing Post document */
  connect?: InputMaybe<PostWhereUniqueInput>;
  /** Create and connect one Post document */
  create?: InputMaybe<PostCreateInput>;
  /** Delete currently connected Post document */
  delete?: InputMaybe<Scalars['Boolean']>;
  /** Disconnect currently connected Post document */
  disconnect?: InputMaybe<Scalars['Boolean']>;
  /** Update single Post document */
  update?: InputMaybe<PostUpdateWithNestedWhereUniqueInput>;
  /** Upsert single Post document */
  upsert?: InputMaybe<PostUpsertWithNestedWhereUniqueInput>;
};

export type PostUpdateWithNestedWhereUniqueInput = {
  /** Document to update */
  data: PostUpdateInput;
  /** Unique document search */
  where: PostWhereUniqueInput;
};

export type PostUpsertInput = {
  /** Create document if it didn't exist */
  create: PostCreateInput;
  /** Update document if it exists */
  update: PostUpdateInput;
};

export type PostUpsertWithNestedWhereUniqueInput = {
  /** Upsert data */
  data: PostUpsertInput;
  /** Unique document search */
  where: PostWhereUniqueInput;
};

/** This contains a set of filters that can be used to compare values internally */
export type PostWhereComparatorInput = {
  /** This field can be used to request to check if the entry is outdated by internal comparison */
  outdated_to?: InputMaybe<Scalars['Boolean']>;
};

/** Identifies documents */
export type PostWhereInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<PostWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<PostWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<PostWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars['String']>;
  ativo?: InputMaybe<Scalars['Boolean']>;
  /** Any other value that exists and is not equal to the given value. */
  ativo_not?: InputMaybe<Scalars['Boolean']>;
  author?: InputMaybe<UsuarioWhereInput>;
  category?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  category_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  category_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  category_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** Any other value that exists and is not equal to the given value. */
  category_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  category_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  category_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  category_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values not starting with the given string. */
  category_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  category_starts_with?: InputMaybe<Scalars['String']>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  createdAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  createdAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  /** All values less than the given value. */
  createdAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  createdAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** Any other value that exists and is not equal to the given value. */
  createdAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  createdBy?: InputMaybe<UserWhereInput>;
  documentInStages_every?: InputMaybe<PostWhereStageInput>;
  documentInStages_none?: InputMaybe<PostWhereStageInput>;
  documentInStages_some?: InputMaybe<PostWhereStageInput>;
  id?: InputMaybe<Scalars['ID']>;
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars['ID']>;
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars['ID']>;
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** Any other value that exists and is not equal to the given value. */
  id_not?: InputMaybe<Scalars['ID']>;
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars['ID']>;
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars['ID']>;
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars['ID']>;
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars['ID']>;
  publishedAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  publishedAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  publishedAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  publishedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  /** All values less than the given value. */
  publishedAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  publishedAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** Any other value that exists and is not equal to the given value. */
  publishedAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  publishedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  publishedBy?: InputMaybe<UserWhereInput>;
  scheduledIn_every?: InputMaybe<ScheduledOperationWhereInput>;
  scheduledIn_none?: InputMaybe<ScheduledOperationWhereInput>;
  scheduledIn_some?: InputMaybe<ScheduledOperationWhereInput>;
  slug?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  slug_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  slug_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  slug_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** Any other value that exists and is not equal to the given value. */
  slug_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  slug_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  slug_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  slug_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values not starting with the given string. */
  slug_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  slug_starts_with?: InputMaybe<Scalars['String']>;
  thumbnail?: InputMaybe<AssetWhereInput>;
  title?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  title_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  title_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  title_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** Any other value that exists and is not equal to the given value. */
  title_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  title_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  title_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  title_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values not starting with the given string. */
  title_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  title_starts_with?: InputMaybe<Scalars['String']>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  updatedAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  updatedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  /** All values less than the given value. */
  updatedAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** Any other value that exists and is not equal to the given value. */
  updatedAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  updatedBy?: InputMaybe<UserWhereInput>;
  views?: InputMaybe<Scalars['Int']>;
  /** All values greater than the given value. */
  views_gt?: InputMaybe<Scalars['Int']>;
  /** All values greater than or equal the given value. */
  views_gte?: InputMaybe<Scalars['Int']>;
  /** All values that are contained in given list. */
  views_in?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  /** All values less than the given value. */
  views_lt?: InputMaybe<Scalars['Int']>;
  /** All values less than or equal the given value. */
  views_lte?: InputMaybe<Scalars['Int']>;
  /** Any other value that exists and is not equal to the given value. */
  views_not?: InputMaybe<Scalars['Int']>;
  /** All values that are not contained in given list. */
  views_not_in?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
};

/** The document in stages filter allows specifying a stage entry to cross compare the same document between different stages */
export type PostWhereStageInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<PostWhereStageInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<PostWhereStageInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<PostWhereStageInput>>;
  /** This field contains fields which can be set as true or false to specify an internal comparison */
  compareWithParent?: InputMaybe<PostWhereComparatorInput>;
  /** Specify the stage to compare with */
  stage?: InputMaybe<Stage>;
};

/** References Post record uniquely */
export type PostWhereUniqueInput = {
  id?: InputMaybe<Scalars['ID']>;
  slug?: InputMaybe<Scalars['String']>;
};

export type Produto = Node & {
  __typename?: 'Produto';
  active: Scalars['Boolean'];
  /** The time the document was created */
  createdAt: Scalars['DateTime'];
  /** User that created this document */
  createdBy?: Maybe<User>;
  description?: Maybe<RichText>;
  /** Get the document in other stages */
  documentInStages: Array<Produto>;
  /** List of Produto versions */
  history: Array<Version>;
  /** The unique identifier */
  id: Scalars['ID'];
  image: Asset;
  name: Scalars['String'];
  price: Scalars['Int'];
  promotion?: Maybe<Scalars['Int']>;
  /** The time the document was published. Null on documents in draft stage. */
  publishedAt?: Maybe<Scalars['DateTime']>;
  /** User that last published this document */
  publishedBy?: Maybe<User>;
  scheduledIn: Array<ScheduledOperation>;
  slug: Scalars['String'];
  /** System stage field */
  stage: Stage;
  /** The time the document was updated */
  updatedAt: Scalars['DateTime'];
  /** User that last updated this document */
  updatedBy?: Maybe<User>;
  urlstore: Scalars['String'];
};


export type ProdutoCreatedByArgs = {
  forceParentLocale?: InputMaybe<Scalars['Boolean']>;
  locales?: InputMaybe<Array<Locale>>;
};


export type ProdutoDocumentInStagesArgs = {
  includeCurrent?: Scalars['Boolean'];
  inheritLocale?: Scalars['Boolean'];
  stages?: Array<Stage>;
};


export type ProdutoHistoryArgs = {
  limit?: Scalars['Int'];
  skip?: Scalars['Int'];
  stageOverride?: InputMaybe<Stage>;
};


export type ProdutoImageArgs = {
  forceParentLocale?: InputMaybe<Scalars['Boolean']>;
  locales?: InputMaybe<Array<Locale>>;
};


export type ProdutoPublishedByArgs = {
  forceParentLocale?: InputMaybe<Scalars['Boolean']>;
  locales?: InputMaybe<Array<Locale>>;
};


export type ProdutoScheduledInArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  forceParentLocale?: InputMaybe<Scalars['Boolean']>;
  last?: InputMaybe<Scalars['Int']>;
  locales?: InputMaybe<Array<Locale>>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<ScheduledOperationWhereInput>;
};


export type ProdutoUpdatedByArgs = {
  forceParentLocale?: InputMaybe<Scalars['Boolean']>;
  locales?: InputMaybe<Array<Locale>>;
};

export type ProdutoConnectInput = {
  /** Allow to specify document position in list of connected documents, will default to appending at end of list */
  position?: InputMaybe<ConnectPositionInput>;
  /** Document to connect */
  where: ProdutoWhereUniqueInput;
};

/** A connection to a list of items. */
export type ProdutoConnection = {
  __typename?: 'ProdutoConnection';
  aggregate: Aggregate;
  /** A list of edges. */
  edges: Array<ProdutoEdge>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

export type ProdutoCreateInput = {
  active: Scalars['Boolean'];
  createdAt?: InputMaybe<Scalars['DateTime']>;
  description?: InputMaybe<Scalars['RichTextAST']>;
  image: AssetCreateOneInlineInput;
  name: Scalars['String'];
  price: Scalars['Int'];
  promotion?: InputMaybe<Scalars['Int']>;
  slug: Scalars['String'];
  updatedAt?: InputMaybe<Scalars['DateTime']>;
  urlstore: Scalars['String'];
};

export type ProdutoCreateManyInlineInput = {
  /** Connect multiple existing Produto documents */
  connect?: InputMaybe<Array<ProdutoWhereUniqueInput>>;
  /** Create and connect multiple existing Produto documents */
  create?: InputMaybe<Array<ProdutoCreateInput>>;
};

export type ProdutoCreateOneInlineInput = {
  /** Connect one existing Produto document */
  connect?: InputMaybe<ProdutoWhereUniqueInput>;
  /** Create and connect one Produto document */
  create?: InputMaybe<ProdutoCreateInput>;
};

/** An edge in a connection. */
export type ProdutoEdge = {
  __typename?: 'ProdutoEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
  /** The item at the end of the edge. */
  node: Produto;
};

/** Identifies documents */
export type ProdutoManyWhereInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<ProdutoWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<ProdutoWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<ProdutoWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars['String']>;
  active?: InputMaybe<Scalars['Boolean']>;
  /** Any other value that exists and is not equal to the given value. */
  active_not?: InputMaybe<Scalars['Boolean']>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  createdAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  createdAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  /** All values less than the given value. */
  createdAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  createdAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** Any other value that exists and is not equal to the given value. */
  createdAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  createdBy?: InputMaybe<UserWhereInput>;
  documentInStages_every?: InputMaybe<ProdutoWhereStageInput>;
  documentInStages_none?: InputMaybe<ProdutoWhereStageInput>;
  documentInStages_some?: InputMaybe<ProdutoWhereStageInput>;
  id?: InputMaybe<Scalars['ID']>;
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars['ID']>;
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars['ID']>;
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** Any other value that exists and is not equal to the given value. */
  id_not?: InputMaybe<Scalars['ID']>;
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars['ID']>;
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars['ID']>;
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars['ID']>;
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars['ID']>;
  image?: InputMaybe<AssetWhereInput>;
  name?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  name_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  name_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  name_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** Any other value that exists and is not equal to the given value. */
  name_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  name_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  name_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  name_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values not starting with the given string. */
  name_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  name_starts_with?: InputMaybe<Scalars['String']>;
  price?: InputMaybe<Scalars['Int']>;
  /** All values greater than the given value. */
  price_gt?: InputMaybe<Scalars['Int']>;
  /** All values greater than or equal the given value. */
  price_gte?: InputMaybe<Scalars['Int']>;
  /** All values that are contained in given list. */
  price_in?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  /** All values less than the given value. */
  price_lt?: InputMaybe<Scalars['Int']>;
  /** All values less than or equal the given value. */
  price_lte?: InputMaybe<Scalars['Int']>;
  /** Any other value that exists and is not equal to the given value. */
  price_not?: InputMaybe<Scalars['Int']>;
  /** All values that are not contained in given list. */
  price_not_in?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  promotion?: InputMaybe<Scalars['Int']>;
  /** All values greater than the given value. */
  promotion_gt?: InputMaybe<Scalars['Int']>;
  /** All values greater than or equal the given value. */
  promotion_gte?: InputMaybe<Scalars['Int']>;
  /** All values that are contained in given list. */
  promotion_in?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  /** All values less than the given value. */
  promotion_lt?: InputMaybe<Scalars['Int']>;
  /** All values less than or equal the given value. */
  promotion_lte?: InputMaybe<Scalars['Int']>;
  /** Any other value that exists and is not equal to the given value. */
  promotion_not?: InputMaybe<Scalars['Int']>;
  /** All values that are not contained in given list. */
  promotion_not_in?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  publishedAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  publishedAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  publishedAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  publishedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  /** All values less than the given value. */
  publishedAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  publishedAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** Any other value that exists and is not equal to the given value. */
  publishedAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  publishedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  publishedBy?: InputMaybe<UserWhereInput>;
  scheduledIn_every?: InputMaybe<ScheduledOperationWhereInput>;
  scheduledIn_none?: InputMaybe<ScheduledOperationWhereInput>;
  scheduledIn_some?: InputMaybe<ScheduledOperationWhereInput>;
  slug?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  slug_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  slug_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  slug_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** Any other value that exists and is not equal to the given value. */
  slug_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  slug_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  slug_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  slug_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values not starting with the given string. */
  slug_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  slug_starts_with?: InputMaybe<Scalars['String']>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  updatedAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  updatedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  /** All values less than the given value. */
  updatedAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** Any other value that exists and is not equal to the given value. */
  updatedAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  updatedBy?: InputMaybe<UserWhereInput>;
  urlstore?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  urlstore_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  urlstore_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  urlstore_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** Any other value that exists and is not equal to the given value. */
  urlstore_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  urlstore_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  urlstore_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  urlstore_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values not starting with the given string. */
  urlstore_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  urlstore_starts_with?: InputMaybe<Scalars['String']>;
};

export enum ProdutoOrderByInput {
  ActiveAsc = 'active_ASC',
  ActiveDesc = 'active_DESC',
  CreatedAtAsc = 'createdAt_ASC',
  CreatedAtDesc = 'createdAt_DESC',
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  NameAsc = 'name_ASC',
  NameDesc = 'name_DESC',
  PriceAsc = 'price_ASC',
  PriceDesc = 'price_DESC',
  PromotionAsc = 'promotion_ASC',
  PromotionDesc = 'promotion_DESC',
  PublishedAtAsc = 'publishedAt_ASC',
  PublishedAtDesc = 'publishedAt_DESC',
  SlugAsc = 'slug_ASC',
  SlugDesc = 'slug_DESC',
  UpdatedAtAsc = 'updatedAt_ASC',
  UpdatedAtDesc = 'updatedAt_DESC',
  UrlstoreAsc = 'urlstore_ASC',
  UrlstoreDesc = 'urlstore_DESC'
}

export type ProdutoUpdateInput = {
  active?: InputMaybe<Scalars['Boolean']>;
  description?: InputMaybe<Scalars['RichTextAST']>;
  image?: InputMaybe<AssetUpdateOneInlineInput>;
  name?: InputMaybe<Scalars['String']>;
  price?: InputMaybe<Scalars['Int']>;
  promotion?: InputMaybe<Scalars['Int']>;
  slug?: InputMaybe<Scalars['String']>;
  urlstore?: InputMaybe<Scalars['String']>;
};

export type ProdutoUpdateManyInlineInput = {
  /** Connect multiple existing Produto documents */
  connect?: InputMaybe<Array<ProdutoConnectInput>>;
  /** Create and connect multiple Produto documents */
  create?: InputMaybe<Array<ProdutoCreateInput>>;
  /** Delete multiple Produto documents */
  delete?: InputMaybe<Array<ProdutoWhereUniqueInput>>;
  /** Disconnect multiple Produto documents */
  disconnect?: InputMaybe<Array<ProdutoWhereUniqueInput>>;
  /** Override currently-connected documents with multiple existing Produto documents */
  set?: InputMaybe<Array<ProdutoWhereUniqueInput>>;
  /** Update multiple Produto documents */
  update?: InputMaybe<Array<ProdutoUpdateWithNestedWhereUniqueInput>>;
  /** Upsert multiple Produto documents */
  upsert?: InputMaybe<Array<ProdutoUpsertWithNestedWhereUniqueInput>>;
};

export type ProdutoUpdateManyInput = {
  active?: InputMaybe<Scalars['Boolean']>;
  description?: InputMaybe<Scalars['RichTextAST']>;
  name?: InputMaybe<Scalars['String']>;
  price?: InputMaybe<Scalars['Int']>;
  promotion?: InputMaybe<Scalars['Int']>;
  urlstore?: InputMaybe<Scalars['String']>;
};

export type ProdutoUpdateManyWithNestedWhereInput = {
  /** Update many input */
  data: ProdutoUpdateManyInput;
  /** Document search */
  where: ProdutoWhereInput;
};

export type ProdutoUpdateOneInlineInput = {
  /** Connect existing Produto document */
  connect?: InputMaybe<ProdutoWhereUniqueInput>;
  /** Create and connect one Produto document */
  create?: InputMaybe<ProdutoCreateInput>;
  /** Delete currently connected Produto document */
  delete?: InputMaybe<Scalars['Boolean']>;
  /** Disconnect currently connected Produto document */
  disconnect?: InputMaybe<Scalars['Boolean']>;
  /** Update single Produto document */
  update?: InputMaybe<ProdutoUpdateWithNestedWhereUniqueInput>;
  /** Upsert single Produto document */
  upsert?: InputMaybe<ProdutoUpsertWithNestedWhereUniqueInput>;
};

export type ProdutoUpdateWithNestedWhereUniqueInput = {
  /** Document to update */
  data: ProdutoUpdateInput;
  /** Unique document search */
  where: ProdutoWhereUniqueInput;
};

export type ProdutoUpsertInput = {
  /** Create document if it didn't exist */
  create: ProdutoCreateInput;
  /** Update document if it exists */
  update: ProdutoUpdateInput;
};

export type ProdutoUpsertWithNestedWhereUniqueInput = {
  /** Upsert data */
  data: ProdutoUpsertInput;
  /** Unique document search */
  where: ProdutoWhereUniqueInput;
};

/** This contains a set of filters that can be used to compare values internally */
export type ProdutoWhereComparatorInput = {
  /** This field can be used to request to check if the entry is outdated by internal comparison */
  outdated_to?: InputMaybe<Scalars['Boolean']>;
};

/** Identifies documents */
export type ProdutoWhereInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<ProdutoWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<ProdutoWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<ProdutoWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars['String']>;
  active?: InputMaybe<Scalars['Boolean']>;
  /** Any other value that exists and is not equal to the given value. */
  active_not?: InputMaybe<Scalars['Boolean']>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  createdAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  createdAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  /** All values less than the given value. */
  createdAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  createdAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** Any other value that exists and is not equal to the given value. */
  createdAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  createdBy?: InputMaybe<UserWhereInput>;
  documentInStages_every?: InputMaybe<ProdutoWhereStageInput>;
  documentInStages_none?: InputMaybe<ProdutoWhereStageInput>;
  documentInStages_some?: InputMaybe<ProdutoWhereStageInput>;
  id?: InputMaybe<Scalars['ID']>;
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars['ID']>;
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars['ID']>;
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** Any other value that exists and is not equal to the given value. */
  id_not?: InputMaybe<Scalars['ID']>;
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars['ID']>;
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars['ID']>;
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars['ID']>;
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars['ID']>;
  image?: InputMaybe<AssetWhereInput>;
  name?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  name_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  name_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  name_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** Any other value that exists and is not equal to the given value. */
  name_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  name_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  name_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  name_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values not starting with the given string. */
  name_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  name_starts_with?: InputMaybe<Scalars['String']>;
  price?: InputMaybe<Scalars['Int']>;
  /** All values greater than the given value. */
  price_gt?: InputMaybe<Scalars['Int']>;
  /** All values greater than or equal the given value. */
  price_gte?: InputMaybe<Scalars['Int']>;
  /** All values that are contained in given list. */
  price_in?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  /** All values less than the given value. */
  price_lt?: InputMaybe<Scalars['Int']>;
  /** All values less than or equal the given value. */
  price_lte?: InputMaybe<Scalars['Int']>;
  /** Any other value that exists and is not equal to the given value. */
  price_not?: InputMaybe<Scalars['Int']>;
  /** All values that are not contained in given list. */
  price_not_in?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  promotion?: InputMaybe<Scalars['Int']>;
  /** All values greater than the given value. */
  promotion_gt?: InputMaybe<Scalars['Int']>;
  /** All values greater than or equal the given value. */
  promotion_gte?: InputMaybe<Scalars['Int']>;
  /** All values that are contained in given list. */
  promotion_in?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  /** All values less than the given value. */
  promotion_lt?: InputMaybe<Scalars['Int']>;
  /** All values less than or equal the given value. */
  promotion_lte?: InputMaybe<Scalars['Int']>;
  /** Any other value that exists and is not equal to the given value. */
  promotion_not?: InputMaybe<Scalars['Int']>;
  /** All values that are not contained in given list. */
  promotion_not_in?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  publishedAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  publishedAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  publishedAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  publishedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  /** All values less than the given value. */
  publishedAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  publishedAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** Any other value that exists and is not equal to the given value. */
  publishedAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  publishedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  publishedBy?: InputMaybe<UserWhereInput>;
  scheduledIn_every?: InputMaybe<ScheduledOperationWhereInput>;
  scheduledIn_none?: InputMaybe<ScheduledOperationWhereInput>;
  scheduledIn_some?: InputMaybe<ScheduledOperationWhereInput>;
  slug?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  slug_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  slug_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  slug_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** Any other value that exists and is not equal to the given value. */
  slug_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  slug_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  slug_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  slug_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values not starting with the given string. */
  slug_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  slug_starts_with?: InputMaybe<Scalars['String']>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  updatedAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  updatedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  /** All values less than the given value. */
  updatedAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** Any other value that exists and is not equal to the given value. */
  updatedAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  updatedBy?: InputMaybe<UserWhereInput>;
  urlstore?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  urlstore_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  urlstore_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  urlstore_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** Any other value that exists and is not equal to the given value. */
  urlstore_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  urlstore_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  urlstore_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  urlstore_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values not starting with the given string. */
  urlstore_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  urlstore_starts_with?: InputMaybe<Scalars['String']>;
};

/** The document in stages filter allows specifying a stage entry to cross compare the same document between different stages */
export type ProdutoWhereStageInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<ProdutoWhereStageInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<ProdutoWhereStageInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<ProdutoWhereStageInput>>;
  /** This field contains fields which can be set as true or false to specify an internal comparison */
  compareWithParent?: InputMaybe<ProdutoWhereComparatorInput>;
  /** Specify the stage to compare with */
  stage?: InputMaybe<Stage>;
};

/** References Produto record uniquely */
export type ProdutoWhereUniqueInput = {
  id?: InputMaybe<Scalars['ID']>;
  slug?: InputMaybe<Scalars['String']>;
};

export type PublishLocaleInput = {
  /** Locales to publish */
  locale: Locale;
  /** Stages to publish selected locales to */
  stages: Array<Stage>;
};

export type Query = {
  __typename?: 'Query';
  /** Retrieve a single apoiador */
  apoiador?: Maybe<Apoiador>;
  /** Retrieve document version */
  apoiadorVersion?: Maybe<DocumentVersion>;
  /** Retrieve multiple apoiadores */
  apoiadores: Array<Apoiador>;
  /** Retrieve multiple apoiadores using the Relay connection interface */
  apoiadoresConnection: ApoiadorConnection;
  /** Retrieve a single asset */
  asset?: Maybe<Asset>;
  /** Retrieve document version */
  assetVersion?: Maybe<DocumentVersion>;
  /** Retrieve multiple assets */
  assets: Array<Asset>;
  /** Retrieve multiple assets using the Relay connection interface */
  assetsConnection: AssetConnection;
  /** Retrieve a single farmacia */
  farmacia?: Maybe<Farmacia>;
  /** Retrieve document version */
  farmaciaVersion?: Maybe<DocumentVersion>;
  /** Retrieve multiple farmacias */
  farmacias: Array<Farmacia>;
  /** Retrieve multiple farmacias using the Relay connection interface */
  farmaciasConnection: FarmaciaConnection;
  /** Fetches an object given its ID */
  node?: Maybe<Node>;
  /** Retrieve a single plantao */
  plantao?: Maybe<Plantao>;
  /** Retrieve document version */
  plantaoVersion?: Maybe<DocumentVersion>;
  /** Retrieve multiple plantoes */
  plantoes: Array<Plantao>;
  /** Retrieve multiple plantoes using the Relay connection interface */
  plantoesConnection: PlantaoConnection;
  /** Retrieve a single post */
  post?: Maybe<Post>;
  /** Retrieve document version */
  postVersion?: Maybe<DocumentVersion>;
  /** Retrieve multiple posts */
  posts: Array<Post>;
  /** Retrieve multiple posts using the Relay connection interface */
  postsConnection: PostConnection;
  /** Retrieve a single produto */
  produto?: Maybe<Produto>;
  /** Retrieve document version */
  produtoVersion?: Maybe<DocumentVersion>;
  /** Retrieve multiple produtos */
  produtos: Array<Produto>;
  /** Retrieve multiple produtos using the Relay connection interface */
  produtosConnection: ProdutoConnection;
  /** Retrieve a single scheduledOperation */
  scheduledOperation?: Maybe<ScheduledOperation>;
  /** Retrieve multiple scheduledOperations */
  scheduledOperations: Array<ScheduledOperation>;
  /** Retrieve multiple scheduledOperations using the Relay connection interface */
  scheduledOperationsConnection: ScheduledOperationConnection;
  /** Retrieve a single scheduledRelease */
  scheduledRelease?: Maybe<ScheduledRelease>;
  /** Retrieve multiple scheduledReleases */
  scheduledReleases: Array<ScheduledRelease>;
  /** Retrieve multiple scheduledReleases using the Relay connection interface */
  scheduledReleasesConnection: ScheduledReleaseConnection;
  /** Retrieve a single subscriber */
  subscriber?: Maybe<Subscriber>;
  /** Retrieve document version */
  subscriberVersion?: Maybe<DocumentVersion>;
  /** Retrieve multiple subscribers */
  subscribers: Array<Subscriber>;
  /** Retrieve multiple subscribers using the Relay connection interface */
  subscribersConnection: SubscriberConnection;
  /** Retrieve a single telefoneCategoria */
  telefoneCategoria?: Maybe<TelefoneCategoria>;
  /** Retrieve document version */
  telefoneCategoriaVersion?: Maybe<DocumentVersion>;
  /** Retrieve multiple telefoneCategorias */
  telefoneCategorias: Array<TelefoneCategoria>;
  /** Retrieve multiple telefoneCategorias using the Relay connection interface */
  telefoneCategoriasConnection: TelefoneCategoriaConnection;
  /** Retrieve multiple telefoneUtil */
  telefoneUtil: Array<TelefonesUteis>;
  /** Retrieve multiple telefoneUtil using the Relay connection interface */
  telefoneUtilConnection: TelefonesUteisConnection;
  /** Retrieve a single telefonesUteis */
  telefonesUteis?: Maybe<TelefonesUteis>;
  /** Retrieve document version */
  telefonesUteisVersion?: Maybe<DocumentVersion>;
  /** Retrieve a single user */
  user?: Maybe<User>;
  /** Retrieve multiple users */
  users: Array<User>;
  /** Retrieve multiple users using the Relay connection interface */
  usersConnection: UserConnection;
  /** Retrieve a single usuario */
  usuario?: Maybe<Usuario>;
  /** Retrieve document version */
  usuarioVersion?: Maybe<DocumentVersion>;
  /** Retrieve multiple usuarios */
  usuarios: Array<Usuario>;
  /** Retrieve multiple usuarios using the Relay connection interface */
  usuariosConnection: UsuarioConnection;
};


export type QueryApoiadorArgs = {
  locales?: Array<Locale>;
  stage?: Stage;
  where: ApoiadorWhereUniqueInput;
};


export type QueryApoiadorVersionArgs = {
  where: VersionWhereInput;
};


export type QueryApoiadoresArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  locales?: Array<Locale>;
  orderBy?: InputMaybe<ApoiadorOrderByInput>;
  skip?: InputMaybe<Scalars['Int']>;
  stage?: Stage;
  where?: InputMaybe<ApoiadorWhereInput>;
};


export type QueryApoiadoresConnectionArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  locales?: Array<Locale>;
  orderBy?: InputMaybe<ApoiadorOrderByInput>;
  skip?: InputMaybe<Scalars['Int']>;
  stage?: Stage;
  where?: InputMaybe<ApoiadorWhereInput>;
};


export type QueryAssetArgs = {
  locales?: Array<Locale>;
  stage?: Stage;
  where: AssetWhereUniqueInput;
};


export type QueryAssetVersionArgs = {
  where: VersionWhereInput;
};


export type QueryAssetsArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  locales?: Array<Locale>;
  orderBy?: InputMaybe<AssetOrderByInput>;
  skip?: InputMaybe<Scalars['Int']>;
  stage?: Stage;
  where?: InputMaybe<AssetWhereInput>;
};


export type QueryAssetsConnectionArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  locales?: Array<Locale>;
  orderBy?: InputMaybe<AssetOrderByInput>;
  skip?: InputMaybe<Scalars['Int']>;
  stage?: Stage;
  where?: InputMaybe<AssetWhereInput>;
};


export type QueryFarmaciaArgs = {
  locales?: Array<Locale>;
  stage?: Stage;
  where: FarmaciaWhereUniqueInput;
};


export type QueryFarmaciaVersionArgs = {
  where: VersionWhereInput;
};


export type QueryFarmaciasArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  locales?: Array<Locale>;
  orderBy?: InputMaybe<FarmaciaOrderByInput>;
  skip?: InputMaybe<Scalars['Int']>;
  stage?: Stage;
  where?: InputMaybe<FarmaciaWhereInput>;
};


export type QueryFarmaciasConnectionArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  locales?: Array<Locale>;
  orderBy?: InputMaybe<FarmaciaOrderByInput>;
  skip?: InputMaybe<Scalars['Int']>;
  stage?: Stage;
  where?: InputMaybe<FarmaciaWhereInput>;
};


export type QueryNodeArgs = {
  id: Scalars['ID'];
  locales?: Array<Locale>;
  stage?: Stage;
};


export type QueryPlantaoArgs = {
  locales?: Array<Locale>;
  stage?: Stage;
  where: PlantaoWhereUniqueInput;
};


export type QueryPlantaoVersionArgs = {
  where: VersionWhereInput;
};


export type QueryPlantoesArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  locales?: Array<Locale>;
  orderBy?: InputMaybe<PlantaoOrderByInput>;
  skip?: InputMaybe<Scalars['Int']>;
  stage?: Stage;
  where?: InputMaybe<PlantaoWhereInput>;
};


export type QueryPlantoesConnectionArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  locales?: Array<Locale>;
  orderBy?: InputMaybe<PlantaoOrderByInput>;
  skip?: InputMaybe<Scalars['Int']>;
  stage?: Stage;
  where?: InputMaybe<PlantaoWhereInput>;
};


export type QueryPostArgs = {
  locales?: Array<Locale>;
  stage?: Stage;
  where: PostWhereUniqueInput;
};


export type QueryPostVersionArgs = {
  where: VersionWhereInput;
};


export type QueryPostsArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  locales?: Array<Locale>;
  orderBy?: InputMaybe<PostOrderByInput>;
  skip?: InputMaybe<Scalars['Int']>;
  stage?: Stage;
  where?: InputMaybe<PostWhereInput>;
};


export type QueryPostsConnectionArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  locales?: Array<Locale>;
  orderBy?: InputMaybe<PostOrderByInput>;
  skip?: InputMaybe<Scalars['Int']>;
  stage?: Stage;
  where?: InputMaybe<PostWhereInput>;
};


export type QueryProdutoArgs = {
  locales?: Array<Locale>;
  stage?: Stage;
  where: ProdutoWhereUniqueInput;
};


export type QueryProdutoVersionArgs = {
  where: VersionWhereInput;
};


export type QueryProdutosArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  locales?: Array<Locale>;
  orderBy?: InputMaybe<ProdutoOrderByInput>;
  skip?: InputMaybe<Scalars['Int']>;
  stage?: Stage;
  where?: InputMaybe<ProdutoWhereInput>;
};


export type QueryProdutosConnectionArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  locales?: Array<Locale>;
  orderBy?: InputMaybe<ProdutoOrderByInput>;
  skip?: InputMaybe<Scalars['Int']>;
  stage?: Stage;
  where?: InputMaybe<ProdutoWhereInput>;
};


export type QueryScheduledOperationArgs = {
  locales?: Array<Locale>;
  stage?: Stage;
  where: ScheduledOperationWhereUniqueInput;
};


export type QueryScheduledOperationsArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  locales?: Array<Locale>;
  orderBy?: InputMaybe<ScheduledOperationOrderByInput>;
  skip?: InputMaybe<Scalars['Int']>;
  stage?: Stage;
  where?: InputMaybe<ScheduledOperationWhereInput>;
};


export type QueryScheduledOperationsConnectionArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  locales?: Array<Locale>;
  orderBy?: InputMaybe<ScheduledOperationOrderByInput>;
  skip?: InputMaybe<Scalars['Int']>;
  stage?: Stage;
  where?: InputMaybe<ScheduledOperationWhereInput>;
};


export type QueryScheduledReleaseArgs = {
  locales?: Array<Locale>;
  stage?: Stage;
  where: ScheduledReleaseWhereUniqueInput;
};


export type QueryScheduledReleasesArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  locales?: Array<Locale>;
  orderBy?: InputMaybe<ScheduledReleaseOrderByInput>;
  skip?: InputMaybe<Scalars['Int']>;
  stage?: Stage;
  where?: InputMaybe<ScheduledReleaseWhereInput>;
};


export type QueryScheduledReleasesConnectionArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  locales?: Array<Locale>;
  orderBy?: InputMaybe<ScheduledReleaseOrderByInput>;
  skip?: InputMaybe<Scalars['Int']>;
  stage?: Stage;
  where?: InputMaybe<ScheduledReleaseWhereInput>;
};


export type QuerySubscriberArgs = {
  locales?: Array<Locale>;
  stage?: Stage;
  where: SubscriberWhereUniqueInput;
};


export type QuerySubscriberVersionArgs = {
  where: VersionWhereInput;
};


export type QuerySubscribersArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  locales?: Array<Locale>;
  orderBy?: InputMaybe<SubscriberOrderByInput>;
  skip?: InputMaybe<Scalars['Int']>;
  stage?: Stage;
  where?: InputMaybe<SubscriberWhereInput>;
};


export type QuerySubscribersConnectionArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  locales?: Array<Locale>;
  orderBy?: InputMaybe<SubscriberOrderByInput>;
  skip?: InputMaybe<Scalars['Int']>;
  stage?: Stage;
  where?: InputMaybe<SubscriberWhereInput>;
};


export type QueryTelefoneCategoriaArgs = {
  locales?: Array<Locale>;
  stage?: Stage;
  where: TelefoneCategoriaWhereUniqueInput;
};


export type QueryTelefoneCategoriaVersionArgs = {
  where: VersionWhereInput;
};


export type QueryTelefoneCategoriasArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  locales?: Array<Locale>;
  orderBy?: InputMaybe<TelefoneCategoriaOrderByInput>;
  skip?: InputMaybe<Scalars['Int']>;
  stage?: Stage;
  where?: InputMaybe<TelefoneCategoriaWhereInput>;
};


export type QueryTelefoneCategoriasConnectionArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  locales?: Array<Locale>;
  orderBy?: InputMaybe<TelefoneCategoriaOrderByInput>;
  skip?: InputMaybe<Scalars['Int']>;
  stage?: Stage;
  where?: InputMaybe<TelefoneCategoriaWhereInput>;
};


export type QueryTelefoneUtilArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  locales?: Array<Locale>;
  orderBy?: InputMaybe<TelefonesUteisOrderByInput>;
  skip?: InputMaybe<Scalars['Int']>;
  stage?: Stage;
  where?: InputMaybe<TelefonesUteisWhereInput>;
};


export type QueryTelefoneUtilConnectionArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  locales?: Array<Locale>;
  orderBy?: InputMaybe<TelefonesUteisOrderByInput>;
  skip?: InputMaybe<Scalars['Int']>;
  stage?: Stage;
  where?: InputMaybe<TelefonesUteisWhereInput>;
};


export type QueryTelefonesUteisArgs = {
  locales?: Array<Locale>;
  stage?: Stage;
  where: TelefonesUteisWhereUniqueInput;
};


export type QueryTelefonesUteisVersionArgs = {
  where: VersionWhereInput;
};


export type QueryUserArgs = {
  locales?: Array<Locale>;
  stage?: Stage;
  where: UserWhereUniqueInput;
};


export type QueryUsersArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  locales?: Array<Locale>;
  orderBy?: InputMaybe<UserOrderByInput>;
  skip?: InputMaybe<Scalars['Int']>;
  stage?: Stage;
  where?: InputMaybe<UserWhereInput>;
};


export type QueryUsersConnectionArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  locales?: Array<Locale>;
  orderBy?: InputMaybe<UserOrderByInput>;
  skip?: InputMaybe<Scalars['Int']>;
  stage?: Stage;
  where?: InputMaybe<UserWhereInput>;
};


export type QueryUsuarioArgs = {
  locales?: Array<Locale>;
  stage?: Stage;
  where: UsuarioWhereUniqueInput;
};


export type QueryUsuarioVersionArgs = {
  where: VersionWhereInput;
};


export type QueryUsuariosArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  locales?: Array<Locale>;
  orderBy?: InputMaybe<UsuarioOrderByInput>;
  skip?: InputMaybe<Scalars['Int']>;
  stage?: Stage;
  where?: InputMaybe<UsuarioWhereInput>;
};


export type QueryUsuariosConnectionArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  locales?: Array<Locale>;
  orderBy?: InputMaybe<UsuarioOrderByInput>;
  skip?: InputMaybe<Scalars['Int']>;
  stage?: Stage;
  where?: InputMaybe<UsuarioWhereInput>;
};

/** Representing a RGBA color value: https://developer.mozilla.org/en-US/docs/Web/CSS/color_value#rgb()_and_rgba() */
export type Rgba = {
  __typename?: 'RGBA';
  a: Scalars['RGBATransparency'];
  b: Scalars['RGBAHue'];
  g: Scalars['RGBAHue'];
  r: Scalars['RGBAHue'];
};

/** Input type representing a RGBA color value: https://developer.mozilla.org/en-US/docs/Web/CSS/color_value#rgb()_and_rgba() */
export type RgbaInput = {
  a: Scalars['RGBATransparency'];
  b: Scalars['RGBAHue'];
  g: Scalars['RGBAHue'];
  r: Scalars['RGBAHue'];
};

/** Custom type representing a rich text value comprising of raw rich text ast, html, markdown and text values */
export type RichText = {
  __typename?: 'RichText';
  /** Returns HTMl representation */
  html: Scalars['String'];
  /** Returns Markdown representation */
  markdown: Scalars['String'];
  /** Returns AST representation */
  raw: Scalars['RichTextAST'];
  /** Returns plain-text contents of RichText */
  text: Scalars['String'];
};

/** Scheduled Operation system model */
export type ScheduledOperation = Node & {
  __typename?: 'ScheduledOperation';
  affectedDocuments: Array<ScheduledOperationAffectedDocument>;
  /** The time the document was created */
  createdAt: Scalars['DateTime'];
  /** User that created this document */
  createdBy?: Maybe<User>;
  /** Operation description */
  description?: Maybe<Scalars['String']>;
  /** Get the document in other stages */
  documentInStages: Array<ScheduledOperation>;
  /** Operation error message */
  errorMessage?: Maybe<Scalars['String']>;
  /** The unique identifier */
  id: Scalars['ID'];
  /** The time the document was published. Null on documents in draft stage. */
  publishedAt?: Maybe<Scalars['DateTime']>;
  /** User that last published this document */
  publishedBy?: Maybe<User>;
  /** Raw operation payload including all details, this field is subject to change */
  rawPayload: Scalars['Json'];
  /** The release this operation is scheduled for */
  release?: Maybe<ScheduledRelease>;
  /** System stage field */
  stage: Stage;
  /** operation Status */
  status: ScheduledOperationStatus;
  /** The time the document was updated */
  updatedAt: Scalars['DateTime'];
  /** User that last updated this document */
  updatedBy?: Maybe<User>;
};


/** Scheduled Operation system model */
export type ScheduledOperationAffectedDocumentsArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  forceParentLocale?: InputMaybe<Scalars['Boolean']>;
  last?: InputMaybe<Scalars['Int']>;
  locales?: InputMaybe<Array<Locale>>;
  skip?: InputMaybe<Scalars['Int']>;
};


/** Scheduled Operation system model */
export type ScheduledOperationCreatedByArgs = {
  forceParentLocale?: InputMaybe<Scalars['Boolean']>;
  locales?: InputMaybe<Array<Locale>>;
};


/** Scheduled Operation system model */
export type ScheduledOperationDocumentInStagesArgs = {
  includeCurrent?: Scalars['Boolean'];
  inheritLocale?: Scalars['Boolean'];
  stages?: Array<Stage>;
};


/** Scheduled Operation system model */
export type ScheduledOperationPublishedByArgs = {
  forceParentLocale?: InputMaybe<Scalars['Boolean']>;
  locales?: InputMaybe<Array<Locale>>;
};


/** Scheduled Operation system model */
export type ScheduledOperationReleaseArgs = {
  forceParentLocale?: InputMaybe<Scalars['Boolean']>;
  locales?: InputMaybe<Array<Locale>>;
};


/** Scheduled Operation system model */
export type ScheduledOperationUpdatedByArgs = {
  forceParentLocale?: InputMaybe<Scalars['Boolean']>;
  locales?: InputMaybe<Array<Locale>>;
};

export type ScheduledOperationAffectedDocument = Apoiador | Asset | Farmacia | Plantao | Post | Produto | Subscriber | TelefoneCategoria | TelefonesUteis | Usuario;

export type ScheduledOperationConnectInput = {
  /** Allow to specify document position in list of connected documents, will default to appending at end of list */
  position?: InputMaybe<ConnectPositionInput>;
  /** Document to connect */
  where: ScheduledOperationWhereUniqueInput;
};

/** A connection to a list of items. */
export type ScheduledOperationConnection = {
  __typename?: 'ScheduledOperationConnection';
  aggregate: Aggregate;
  /** A list of edges. */
  edges: Array<ScheduledOperationEdge>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

export type ScheduledOperationCreateManyInlineInput = {
  /** Connect multiple existing ScheduledOperation documents */
  connect?: InputMaybe<Array<ScheduledOperationWhereUniqueInput>>;
};

export type ScheduledOperationCreateOneInlineInput = {
  /** Connect one existing ScheduledOperation document */
  connect?: InputMaybe<ScheduledOperationWhereUniqueInput>;
};

/** An edge in a connection. */
export type ScheduledOperationEdge = {
  __typename?: 'ScheduledOperationEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
  /** The item at the end of the edge. */
  node: ScheduledOperation;
};

/** Identifies documents */
export type ScheduledOperationManyWhereInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<ScheduledOperationWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<ScheduledOperationWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<ScheduledOperationWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars['String']>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  createdAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  createdAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  /** All values less than the given value. */
  createdAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  createdAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** Any other value that exists and is not equal to the given value. */
  createdAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  createdBy?: InputMaybe<UserWhereInput>;
  description?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  description_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  description_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  description_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** Any other value that exists and is not equal to the given value. */
  description_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  description_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  description_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  description_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values not starting with the given string. */
  description_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  description_starts_with?: InputMaybe<Scalars['String']>;
  errorMessage?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  errorMessage_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  errorMessage_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  errorMessage_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** Any other value that exists and is not equal to the given value. */
  errorMessage_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  errorMessage_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  errorMessage_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  errorMessage_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values not starting with the given string. */
  errorMessage_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  errorMessage_starts_with?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['ID']>;
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars['ID']>;
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars['ID']>;
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** Any other value that exists and is not equal to the given value. */
  id_not?: InputMaybe<Scalars['ID']>;
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars['ID']>;
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars['ID']>;
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars['ID']>;
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars['ID']>;
  publishedAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  publishedAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  publishedAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  publishedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  /** All values less than the given value. */
  publishedAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  publishedAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** Any other value that exists and is not equal to the given value. */
  publishedAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  publishedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  publishedBy?: InputMaybe<UserWhereInput>;
  /** All values containing the given json path. */
  rawPayload_json_path_exists?: InputMaybe<Scalars['String']>;
  /**
   * Recursively tries to find the provided JSON scalar value inside the field.
   * It does use an exact match when comparing values.
   * If you pass `null` as value the filter will be ignored.
   * Note: This filter fails if you try to look for a non scalar JSON value!
   */
  rawPayload_value_recursive?: InputMaybe<Scalars['Json']>;
  release?: InputMaybe<ScheduledReleaseWhereInput>;
  status?: InputMaybe<ScheduledOperationStatus>;
  /** All values that are contained in given list. */
  status_in?: InputMaybe<Array<InputMaybe<ScheduledOperationStatus>>>;
  /** Any other value that exists and is not equal to the given value. */
  status_not?: InputMaybe<ScheduledOperationStatus>;
  /** All values that are not contained in given list. */
  status_not_in?: InputMaybe<Array<InputMaybe<ScheduledOperationStatus>>>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  updatedAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  updatedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  /** All values less than the given value. */
  updatedAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** Any other value that exists and is not equal to the given value. */
  updatedAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  updatedBy?: InputMaybe<UserWhereInput>;
};

export enum ScheduledOperationOrderByInput {
  CreatedAtAsc = 'createdAt_ASC',
  CreatedAtDesc = 'createdAt_DESC',
  DescriptionAsc = 'description_ASC',
  DescriptionDesc = 'description_DESC',
  ErrorMessageAsc = 'errorMessage_ASC',
  ErrorMessageDesc = 'errorMessage_DESC',
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  PublishedAtAsc = 'publishedAt_ASC',
  PublishedAtDesc = 'publishedAt_DESC',
  StatusAsc = 'status_ASC',
  StatusDesc = 'status_DESC',
  UpdatedAtAsc = 'updatedAt_ASC',
  UpdatedAtDesc = 'updatedAt_DESC'
}

/** System Scheduled Operation Status */
export enum ScheduledOperationStatus {
  Canceled = 'CANCELED',
  Completed = 'COMPLETED',
  Failed = 'FAILED',
  InProgress = 'IN_PROGRESS',
  Pending = 'PENDING'
}

export type ScheduledOperationUpdateManyInlineInput = {
  /** Connect multiple existing ScheduledOperation documents */
  connect?: InputMaybe<Array<ScheduledOperationConnectInput>>;
  /** Disconnect multiple ScheduledOperation documents */
  disconnect?: InputMaybe<Array<ScheduledOperationWhereUniqueInput>>;
  /** Override currently-connected documents with multiple existing ScheduledOperation documents */
  set?: InputMaybe<Array<ScheduledOperationWhereUniqueInput>>;
};

export type ScheduledOperationUpdateOneInlineInput = {
  /** Connect existing ScheduledOperation document */
  connect?: InputMaybe<ScheduledOperationWhereUniqueInput>;
  /** Disconnect currently connected ScheduledOperation document */
  disconnect?: InputMaybe<Scalars['Boolean']>;
};

/** Identifies documents */
export type ScheduledOperationWhereInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<ScheduledOperationWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<ScheduledOperationWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<ScheduledOperationWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars['String']>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  createdAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  createdAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  /** All values less than the given value. */
  createdAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  createdAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** Any other value that exists and is not equal to the given value. */
  createdAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  createdBy?: InputMaybe<UserWhereInput>;
  description?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  description_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  description_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  description_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** Any other value that exists and is not equal to the given value. */
  description_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  description_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  description_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  description_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values not starting with the given string. */
  description_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  description_starts_with?: InputMaybe<Scalars['String']>;
  errorMessage?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  errorMessage_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  errorMessage_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  errorMessage_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** Any other value that exists and is not equal to the given value. */
  errorMessage_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  errorMessage_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  errorMessage_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  errorMessage_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values not starting with the given string. */
  errorMessage_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  errorMessage_starts_with?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['ID']>;
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars['ID']>;
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars['ID']>;
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** Any other value that exists and is not equal to the given value. */
  id_not?: InputMaybe<Scalars['ID']>;
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars['ID']>;
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars['ID']>;
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars['ID']>;
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars['ID']>;
  publishedAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  publishedAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  publishedAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  publishedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  /** All values less than the given value. */
  publishedAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  publishedAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** Any other value that exists and is not equal to the given value. */
  publishedAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  publishedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  publishedBy?: InputMaybe<UserWhereInput>;
  /** All values containing the given json path. */
  rawPayload_json_path_exists?: InputMaybe<Scalars['String']>;
  /**
   * Recursively tries to find the provided JSON scalar value inside the field.
   * It does use an exact match when comparing values.
   * If you pass `null` as value the filter will be ignored.
   * Note: This filter fails if you try to look for a non scalar JSON value!
   */
  rawPayload_value_recursive?: InputMaybe<Scalars['Json']>;
  release?: InputMaybe<ScheduledReleaseWhereInput>;
  status?: InputMaybe<ScheduledOperationStatus>;
  /** All values that are contained in given list. */
  status_in?: InputMaybe<Array<InputMaybe<ScheduledOperationStatus>>>;
  /** Any other value that exists and is not equal to the given value. */
  status_not?: InputMaybe<ScheduledOperationStatus>;
  /** All values that are not contained in given list. */
  status_not_in?: InputMaybe<Array<InputMaybe<ScheduledOperationStatus>>>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  updatedAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  updatedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  /** All values less than the given value. */
  updatedAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** Any other value that exists and is not equal to the given value. */
  updatedAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  updatedBy?: InputMaybe<UserWhereInput>;
};

/** References ScheduledOperation record uniquely */
export type ScheduledOperationWhereUniqueInput = {
  id?: InputMaybe<Scalars['ID']>;
};

/** Scheduled Release system model */
export type ScheduledRelease = Node & {
  __typename?: 'ScheduledRelease';
  /** The time the document was created */
  createdAt: Scalars['DateTime'];
  /** User that created this document */
  createdBy?: Maybe<User>;
  /** Release description */
  description?: Maybe<Scalars['String']>;
  /** Get the document in other stages */
  documentInStages: Array<ScheduledRelease>;
  /** Release error message */
  errorMessage?: Maybe<Scalars['String']>;
  /** The unique identifier */
  id: Scalars['ID'];
  /** Whether scheduled release should be run */
  isActive: Scalars['Boolean'];
  /** Whether scheduled release is implicit */
  isImplicit: Scalars['Boolean'];
  /** Operations to run with this release */
  operations: Array<ScheduledOperation>;
  /** The time the document was published. Null on documents in draft stage. */
  publishedAt?: Maybe<Scalars['DateTime']>;
  /** User that last published this document */
  publishedBy?: Maybe<User>;
  /** Release date and time */
  releaseAt?: Maybe<Scalars['DateTime']>;
  /** System stage field */
  stage: Stage;
  /** Release Status */
  status: ScheduledReleaseStatus;
  /** Release Title */
  title?: Maybe<Scalars['String']>;
  /** The time the document was updated */
  updatedAt: Scalars['DateTime'];
  /** User that last updated this document */
  updatedBy?: Maybe<User>;
};


/** Scheduled Release system model */
export type ScheduledReleaseCreatedByArgs = {
  forceParentLocale?: InputMaybe<Scalars['Boolean']>;
  locales?: InputMaybe<Array<Locale>>;
};


/** Scheduled Release system model */
export type ScheduledReleaseDocumentInStagesArgs = {
  includeCurrent?: Scalars['Boolean'];
  inheritLocale?: Scalars['Boolean'];
  stages?: Array<Stage>;
};


/** Scheduled Release system model */
export type ScheduledReleaseOperationsArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  forceParentLocale?: InputMaybe<Scalars['Boolean']>;
  last?: InputMaybe<Scalars['Int']>;
  locales?: InputMaybe<Array<Locale>>;
  orderBy?: InputMaybe<ScheduledOperationOrderByInput>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<ScheduledOperationWhereInput>;
};


/** Scheduled Release system model */
export type ScheduledReleasePublishedByArgs = {
  forceParentLocale?: InputMaybe<Scalars['Boolean']>;
  locales?: InputMaybe<Array<Locale>>;
};


/** Scheduled Release system model */
export type ScheduledReleaseUpdatedByArgs = {
  forceParentLocale?: InputMaybe<Scalars['Boolean']>;
  locales?: InputMaybe<Array<Locale>>;
};

export type ScheduledReleaseConnectInput = {
  /** Allow to specify document position in list of connected documents, will default to appending at end of list */
  position?: InputMaybe<ConnectPositionInput>;
  /** Document to connect */
  where: ScheduledReleaseWhereUniqueInput;
};

/** A connection to a list of items. */
export type ScheduledReleaseConnection = {
  __typename?: 'ScheduledReleaseConnection';
  aggregate: Aggregate;
  /** A list of edges. */
  edges: Array<ScheduledReleaseEdge>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

export type ScheduledReleaseCreateInput = {
  createdAt?: InputMaybe<Scalars['DateTime']>;
  description?: InputMaybe<Scalars['String']>;
  errorMessage?: InputMaybe<Scalars['String']>;
  isActive?: InputMaybe<Scalars['Boolean']>;
  releaseAt?: InputMaybe<Scalars['DateTime']>;
  title?: InputMaybe<Scalars['String']>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
};

export type ScheduledReleaseCreateManyInlineInput = {
  /** Connect multiple existing ScheduledRelease documents */
  connect?: InputMaybe<Array<ScheduledReleaseWhereUniqueInput>>;
  /** Create and connect multiple existing ScheduledRelease documents */
  create?: InputMaybe<Array<ScheduledReleaseCreateInput>>;
};

export type ScheduledReleaseCreateOneInlineInput = {
  /** Connect one existing ScheduledRelease document */
  connect?: InputMaybe<ScheduledReleaseWhereUniqueInput>;
  /** Create and connect one ScheduledRelease document */
  create?: InputMaybe<ScheduledReleaseCreateInput>;
};

/** An edge in a connection. */
export type ScheduledReleaseEdge = {
  __typename?: 'ScheduledReleaseEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
  /** The item at the end of the edge. */
  node: ScheduledRelease;
};

/** Identifies documents */
export type ScheduledReleaseManyWhereInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<ScheduledReleaseWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<ScheduledReleaseWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<ScheduledReleaseWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars['String']>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  createdAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  createdAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  /** All values less than the given value. */
  createdAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  createdAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** Any other value that exists and is not equal to the given value. */
  createdAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  createdBy?: InputMaybe<UserWhereInput>;
  description?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  description_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  description_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  description_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** Any other value that exists and is not equal to the given value. */
  description_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  description_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  description_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  description_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values not starting with the given string. */
  description_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  description_starts_with?: InputMaybe<Scalars['String']>;
  errorMessage?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  errorMessage_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  errorMessage_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  errorMessage_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** Any other value that exists and is not equal to the given value. */
  errorMessage_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  errorMessage_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  errorMessage_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  errorMessage_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values not starting with the given string. */
  errorMessage_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  errorMessage_starts_with?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['ID']>;
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars['ID']>;
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars['ID']>;
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** Any other value that exists and is not equal to the given value. */
  id_not?: InputMaybe<Scalars['ID']>;
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars['ID']>;
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars['ID']>;
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars['ID']>;
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars['ID']>;
  isActive?: InputMaybe<Scalars['Boolean']>;
  /** Any other value that exists and is not equal to the given value. */
  isActive_not?: InputMaybe<Scalars['Boolean']>;
  isImplicit?: InputMaybe<Scalars['Boolean']>;
  /** Any other value that exists and is not equal to the given value. */
  isImplicit_not?: InputMaybe<Scalars['Boolean']>;
  operations_every?: InputMaybe<ScheduledOperationWhereInput>;
  operations_none?: InputMaybe<ScheduledOperationWhereInput>;
  operations_some?: InputMaybe<ScheduledOperationWhereInput>;
  publishedAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  publishedAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  publishedAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  publishedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  /** All values less than the given value. */
  publishedAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  publishedAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** Any other value that exists and is not equal to the given value. */
  publishedAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  publishedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  publishedBy?: InputMaybe<UserWhereInput>;
  releaseAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  releaseAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  releaseAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  releaseAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  /** All values less than the given value. */
  releaseAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  releaseAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** Any other value that exists and is not equal to the given value. */
  releaseAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  releaseAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  status?: InputMaybe<ScheduledReleaseStatus>;
  /** All values that are contained in given list. */
  status_in?: InputMaybe<Array<InputMaybe<ScheduledReleaseStatus>>>;
  /** Any other value that exists and is not equal to the given value. */
  status_not?: InputMaybe<ScheduledReleaseStatus>;
  /** All values that are not contained in given list. */
  status_not_in?: InputMaybe<Array<InputMaybe<ScheduledReleaseStatus>>>;
  title?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  title_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  title_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  title_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** Any other value that exists and is not equal to the given value. */
  title_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  title_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  title_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  title_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values not starting with the given string. */
  title_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  title_starts_with?: InputMaybe<Scalars['String']>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  updatedAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  updatedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  /** All values less than the given value. */
  updatedAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** Any other value that exists and is not equal to the given value. */
  updatedAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  updatedBy?: InputMaybe<UserWhereInput>;
};

export enum ScheduledReleaseOrderByInput {
  CreatedAtAsc = 'createdAt_ASC',
  CreatedAtDesc = 'createdAt_DESC',
  DescriptionAsc = 'description_ASC',
  DescriptionDesc = 'description_DESC',
  ErrorMessageAsc = 'errorMessage_ASC',
  ErrorMessageDesc = 'errorMessage_DESC',
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  IsActiveAsc = 'isActive_ASC',
  IsActiveDesc = 'isActive_DESC',
  IsImplicitAsc = 'isImplicit_ASC',
  IsImplicitDesc = 'isImplicit_DESC',
  PublishedAtAsc = 'publishedAt_ASC',
  PublishedAtDesc = 'publishedAt_DESC',
  ReleaseAtAsc = 'releaseAt_ASC',
  ReleaseAtDesc = 'releaseAt_DESC',
  StatusAsc = 'status_ASC',
  StatusDesc = 'status_DESC',
  TitleAsc = 'title_ASC',
  TitleDesc = 'title_DESC',
  UpdatedAtAsc = 'updatedAt_ASC',
  UpdatedAtDesc = 'updatedAt_DESC'
}

/** System Scheduled Release Status */
export enum ScheduledReleaseStatus {
  Completed = 'COMPLETED',
  Failed = 'FAILED',
  InProgress = 'IN_PROGRESS',
  Pending = 'PENDING'
}

export type ScheduledReleaseUpdateInput = {
  description?: InputMaybe<Scalars['String']>;
  errorMessage?: InputMaybe<Scalars['String']>;
  isActive?: InputMaybe<Scalars['Boolean']>;
  releaseAt?: InputMaybe<Scalars['DateTime']>;
  title?: InputMaybe<Scalars['String']>;
};

export type ScheduledReleaseUpdateManyInlineInput = {
  /** Connect multiple existing ScheduledRelease documents */
  connect?: InputMaybe<Array<ScheduledReleaseConnectInput>>;
  /** Create and connect multiple ScheduledRelease documents */
  create?: InputMaybe<Array<ScheduledReleaseCreateInput>>;
  /** Delete multiple ScheduledRelease documents */
  delete?: InputMaybe<Array<ScheduledReleaseWhereUniqueInput>>;
  /** Disconnect multiple ScheduledRelease documents */
  disconnect?: InputMaybe<Array<ScheduledReleaseWhereUniqueInput>>;
  /** Override currently-connected documents with multiple existing ScheduledRelease documents */
  set?: InputMaybe<Array<ScheduledReleaseWhereUniqueInput>>;
  /** Update multiple ScheduledRelease documents */
  update?: InputMaybe<Array<ScheduledReleaseUpdateWithNestedWhereUniqueInput>>;
  /** Upsert multiple ScheduledRelease documents */
  upsert?: InputMaybe<Array<ScheduledReleaseUpsertWithNestedWhereUniqueInput>>;
};

export type ScheduledReleaseUpdateManyInput = {
  description?: InputMaybe<Scalars['String']>;
  errorMessage?: InputMaybe<Scalars['String']>;
  isActive?: InputMaybe<Scalars['Boolean']>;
  releaseAt?: InputMaybe<Scalars['DateTime']>;
  title?: InputMaybe<Scalars['String']>;
};

export type ScheduledReleaseUpdateManyWithNestedWhereInput = {
  /** Update many input */
  data: ScheduledReleaseUpdateManyInput;
  /** Document search */
  where: ScheduledReleaseWhereInput;
};

export type ScheduledReleaseUpdateOneInlineInput = {
  /** Connect existing ScheduledRelease document */
  connect?: InputMaybe<ScheduledReleaseWhereUniqueInput>;
  /** Create and connect one ScheduledRelease document */
  create?: InputMaybe<ScheduledReleaseCreateInput>;
  /** Delete currently connected ScheduledRelease document */
  delete?: InputMaybe<Scalars['Boolean']>;
  /** Disconnect currently connected ScheduledRelease document */
  disconnect?: InputMaybe<Scalars['Boolean']>;
  /** Update single ScheduledRelease document */
  update?: InputMaybe<ScheduledReleaseUpdateWithNestedWhereUniqueInput>;
  /** Upsert single ScheduledRelease document */
  upsert?: InputMaybe<ScheduledReleaseUpsertWithNestedWhereUniqueInput>;
};

export type ScheduledReleaseUpdateWithNestedWhereUniqueInput = {
  /** Document to update */
  data: ScheduledReleaseUpdateInput;
  /** Unique document search */
  where: ScheduledReleaseWhereUniqueInput;
};

export type ScheduledReleaseUpsertInput = {
  /** Create document if it didn't exist */
  create: ScheduledReleaseCreateInput;
  /** Update document if it exists */
  update: ScheduledReleaseUpdateInput;
};

export type ScheduledReleaseUpsertWithNestedWhereUniqueInput = {
  /** Upsert data */
  data: ScheduledReleaseUpsertInput;
  /** Unique document search */
  where: ScheduledReleaseWhereUniqueInput;
};

/** Identifies documents */
export type ScheduledReleaseWhereInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<ScheduledReleaseWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<ScheduledReleaseWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<ScheduledReleaseWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars['String']>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  createdAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  createdAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  /** All values less than the given value. */
  createdAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  createdAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** Any other value that exists and is not equal to the given value. */
  createdAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  createdBy?: InputMaybe<UserWhereInput>;
  description?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  description_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  description_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  description_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** Any other value that exists and is not equal to the given value. */
  description_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  description_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  description_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  description_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values not starting with the given string. */
  description_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  description_starts_with?: InputMaybe<Scalars['String']>;
  errorMessage?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  errorMessage_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  errorMessage_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  errorMessage_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** Any other value that exists and is not equal to the given value. */
  errorMessage_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  errorMessage_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  errorMessage_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  errorMessage_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values not starting with the given string. */
  errorMessage_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  errorMessage_starts_with?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['ID']>;
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars['ID']>;
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars['ID']>;
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** Any other value that exists and is not equal to the given value. */
  id_not?: InputMaybe<Scalars['ID']>;
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars['ID']>;
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars['ID']>;
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars['ID']>;
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars['ID']>;
  isActive?: InputMaybe<Scalars['Boolean']>;
  /** Any other value that exists and is not equal to the given value. */
  isActive_not?: InputMaybe<Scalars['Boolean']>;
  isImplicit?: InputMaybe<Scalars['Boolean']>;
  /** Any other value that exists and is not equal to the given value. */
  isImplicit_not?: InputMaybe<Scalars['Boolean']>;
  operations_every?: InputMaybe<ScheduledOperationWhereInput>;
  operations_none?: InputMaybe<ScheduledOperationWhereInput>;
  operations_some?: InputMaybe<ScheduledOperationWhereInput>;
  publishedAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  publishedAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  publishedAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  publishedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  /** All values less than the given value. */
  publishedAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  publishedAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** Any other value that exists and is not equal to the given value. */
  publishedAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  publishedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  publishedBy?: InputMaybe<UserWhereInput>;
  releaseAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  releaseAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  releaseAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  releaseAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  /** All values less than the given value. */
  releaseAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  releaseAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** Any other value that exists and is not equal to the given value. */
  releaseAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  releaseAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  status?: InputMaybe<ScheduledReleaseStatus>;
  /** All values that are contained in given list. */
  status_in?: InputMaybe<Array<InputMaybe<ScheduledReleaseStatus>>>;
  /** Any other value that exists and is not equal to the given value. */
  status_not?: InputMaybe<ScheduledReleaseStatus>;
  /** All values that are not contained in given list. */
  status_not_in?: InputMaybe<Array<InputMaybe<ScheduledReleaseStatus>>>;
  title?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  title_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  title_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  title_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** Any other value that exists and is not equal to the given value. */
  title_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  title_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  title_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  title_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values not starting with the given string. */
  title_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  title_starts_with?: InputMaybe<Scalars['String']>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  updatedAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  updatedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  /** All values less than the given value. */
  updatedAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** Any other value that exists and is not equal to the given value. */
  updatedAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  updatedBy?: InputMaybe<UserWhereInput>;
};

/** References ScheduledRelease record uniquely */
export type ScheduledReleaseWhereUniqueInput = {
  id?: InputMaybe<Scalars['ID']>;
};

/** Stage system enumeration */
export enum Stage {
  /** The Draft is the default stage for all your content. */
  Draft = 'DRAFT',
  /** The Published stage is where you can publish your content to. */
  Published = 'PUBLISHED'
}

export type Subscriber = Node & {
  __typename?: 'Subscriber';
  /** The time the document was created */
  createdAt: Scalars['DateTime'];
  /** User that created this document */
  createdBy?: Maybe<User>;
  /** Get the document in other stages */
  documentInStages: Array<Subscriber>;
  email: Scalars['String'];
  /** List of Subscriber versions */
  history: Array<Version>;
  /** The unique identifier */
  id: Scalars['ID'];
  messagem?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  /** The time the document was published. Null on documents in draft stage. */
  publishedAt?: Maybe<Scalars['DateTime']>;
  /** User that last published this document */
  publishedBy?: Maybe<User>;
  scheduledIn: Array<ScheduledOperation>;
  /** System stage field */
  stage: Stage;
  /** The time the document was updated */
  updatedAt: Scalars['DateTime'];
  /** User that last updated this document */
  updatedBy?: Maybe<User>;
};


export type SubscriberCreatedByArgs = {
  forceParentLocale?: InputMaybe<Scalars['Boolean']>;
  locales?: InputMaybe<Array<Locale>>;
};


export type SubscriberDocumentInStagesArgs = {
  includeCurrent?: Scalars['Boolean'];
  inheritLocale?: Scalars['Boolean'];
  stages?: Array<Stage>;
};


export type SubscriberHistoryArgs = {
  limit?: Scalars['Int'];
  skip?: Scalars['Int'];
  stageOverride?: InputMaybe<Stage>;
};


export type SubscriberPublishedByArgs = {
  forceParentLocale?: InputMaybe<Scalars['Boolean']>;
  locales?: InputMaybe<Array<Locale>>;
};


export type SubscriberScheduledInArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  forceParentLocale?: InputMaybe<Scalars['Boolean']>;
  last?: InputMaybe<Scalars['Int']>;
  locales?: InputMaybe<Array<Locale>>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<ScheduledOperationWhereInput>;
};


export type SubscriberUpdatedByArgs = {
  forceParentLocale?: InputMaybe<Scalars['Boolean']>;
  locales?: InputMaybe<Array<Locale>>;
};

export type SubscriberConnectInput = {
  /** Allow to specify document position in list of connected documents, will default to appending at end of list */
  position?: InputMaybe<ConnectPositionInput>;
  /** Document to connect */
  where: SubscriberWhereUniqueInput;
};

/** A connection to a list of items. */
export type SubscriberConnection = {
  __typename?: 'SubscriberConnection';
  aggregate: Aggregate;
  /** A list of edges. */
  edges: Array<SubscriberEdge>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

export type SubscriberCreateInput = {
  createdAt?: InputMaybe<Scalars['DateTime']>;
  email: Scalars['String'];
  messagem?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
};

export type SubscriberCreateManyInlineInput = {
  /** Connect multiple existing Subscriber documents */
  connect?: InputMaybe<Array<SubscriberWhereUniqueInput>>;
  /** Create and connect multiple existing Subscriber documents */
  create?: InputMaybe<Array<SubscriberCreateInput>>;
};

export type SubscriberCreateOneInlineInput = {
  /** Connect one existing Subscriber document */
  connect?: InputMaybe<SubscriberWhereUniqueInput>;
  /** Create and connect one Subscriber document */
  create?: InputMaybe<SubscriberCreateInput>;
};

/** An edge in a connection. */
export type SubscriberEdge = {
  __typename?: 'SubscriberEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
  /** The item at the end of the edge. */
  node: Subscriber;
};

/** Identifies documents */
export type SubscriberManyWhereInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<SubscriberWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<SubscriberWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<SubscriberWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars['String']>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  createdAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  createdAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  /** All values less than the given value. */
  createdAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  createdAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** Any other value that exists and is not equal to the given value. */
  createdAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  createdBy?: InputMaybe<UserWhereInput>;
  documentInStages_every?: InputMaybe<SubscriberWhereStageInput>;
  documentInStages_none?: InputMaybe<SubscriberWhereStageInput>;
  documentInStages_some?: InputMaybe<SubscriberWhereStageInput>;
  email?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  email_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  email_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  email_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** Any other value that exists and is not equal to the given value. */
  email_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  email_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  email_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  email_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values not starting with the given string. */
  email_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  email_starts_with?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['ID']>;
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars['ID']>;
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars['ID']>;
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** Any other value that exists and is not equal to the given value. */
  id_not?: InputMaybe<Scalars['ID']>;
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars['ID']>;
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars['ID']>;
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars['ID']>;
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars['ID']>;
  messagem?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  messagem_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  messagem_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  messagem_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** Any other value that exists and is not equal to the given value. */
  messagem_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  messagem_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  messagem_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  messagem_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values not starting with the given string. */
  messagem_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  messagem_starts_with?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  name_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  name_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  name_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** Any other value that exists and is not equal to the given value. */
  name_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  name_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  name_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  name_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values not starting with the given string. */
  name_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  name_starts_with?: InputMaybe<Scalars['String']>;
  publishedAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  publishedAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  publishedAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  publishedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  /** All values less than the given value. */
  publishedAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  publishedAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** Any other value that exists and is not equal to the given value. */
  publishedAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  publishedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  publishedBy?: InputMaybe<UserWhereInput>;
  scheduledIn_every?: InputMaybe<ScheduledOperationWhereInput>;
  scheduledIn_none?: InputMaybe<ScheduledOperationWhereInput>;
  scheduledIn_some?: InputMaybe<ScheduledOperationWhereInput>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  updatedAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  updatedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  /** All values less than the given value. */
  updatedAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** Any other value that exists and is not equal to the given value. */
  updatedAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  updatedBy?: InputMaybe<UserWhereInput>;
};

export enum SubscriberOrderByInput {
  CreatedAtAsc = 'createdAt_ASC',
  CreatedAtDesc = 'createdAt_DESC',
  EmailAsc = 'email_ASC',
  EmailDesc = 'email_DESC',
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  MessagemAsc = 'messagem_ASC',
  MessagemDesc = 'messagem_DESC',
  NameAsc = 'name_ASC',
  NameDesc = 'name_DESC',
  PublishedAtAsc = 'publishedAt_ASC',
  PublishedAtDesc = 'publishedAt_DESC',
  UpdatedAtAsc = 'updatedAt_ASC',
  UpdatedAtDesc = 'updatedAt_DESC'
}

export type SubscriberUpdateInput = {
  email?: InputMaybe<Scalars['String']>;
  messagem?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
};

export type SubscriberUpdateManyInlineInput = {
  /** Connect multiple existing Subscriber documents */
  connect?: InputMaybe<Array<SubscriberConnectInput>>;
  /** Create and connect multiple Subscriber documents */
  create?: InputMaybe<Array<SubscriberCreateInput>>;
  /** Delete multiple Subscriber documents */
  delete?: InputMaybe<Array<SubscriberWhereUniqueInput>>;
  /** Disconnect multiple Subscriber documents */
  disconnect?: InputMaybe<Array<SubscriberWhereUniqueInput>>;
  /** Override currently-connected documents with multiple existing Subscriber documents */
  set?: InputMaybe<Array<SubscriberWhereUniqueInput>>;
  /** Update multiple Subscriber documents */
  update?: InputMaybe<Array<SubscriberUpdateWithNestedWhereUniqueInput>>;
  /** Upsert multiple Subscriber documents */
  upsert?: InputMaybe<Array<SubscriberUpsertWithNestedWhereUniqueInput>>;
};

export type SubscriberUpdateManyInput = {
  messagem?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
};

export type SubscriberUpdateManyWithNestedWhereInput = {
  /** Update many input */
  data: SubscriberUpdateManyInput;
  /** Document search */
  where: SubscriberWhereInput;
};

export type SubscriberUpdateOneInlineInput = {
  /** Connect existing Subscriber document */
  connect?: InputMaybe<SubscriberWhereUniqueInput>;
  /** Create and connect one Subscriber document */
  create?: InputMaybe<SubscriberCreateInput>;
  /** Delete currently connected Subscriber document */
  delete?: InputMaybe<Scalars['Boolean']>;
  /** Disconnect currently connected Subscriber document */
  disconnect?: InputMaybe<Scalars['Boolean']>;
  /** Update single Subscriber document */
  update?: InputMaybe<SubscriberUpdateWithNestedWhereUniqueInput>;
  /** Upsert single Subscriber document */
  upsert?: InputMaybe<SubscriberUpsertWithNestedWhereUniqueInput>;
};

export type SubscriberUpdateWithNestedWhereUniqueInput = {
  /** Document to update */
  data: SubscriberUpdateInput;
  /** Unique document search */
  where: SubscriberWhereUniqueInput;
};

export type SubscriberUpsertInput = {
  /** Create document if it didn't exist */
  create: SubscriberCreateInput;
  /** Update document if it exists */
  update: SubscriberUpdateInput;
};

export type SubscriberUpsertWithNestedWhereUniqueInput = {
  /** Upsert data */
  data: SubscriberUpsertInput;
  /** Unique document search */
  where: SubscriberWhereUniqueInput;
};

/** This contains a set of filters that can be used to compare values internally */
export type SubscriberWhereComparatorInput = {
  /** This field can be used to request to check if the entry is outdated by internal comparison */
  outdated_to?: InputMaybe<Scalars['Boolean']>;
};

/** Identifies documents */
export type SubscriberWhereInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<SubscriberWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<SubscriberWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<SubscriberWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars['String']>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  createdAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  createdAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  /** All values less than the given value. */
  createdAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  createdAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** Any other value that exists and is not equal to the given value. */
  createdAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  createdBy?: InputMaybe<UserWhereInput>;
  documentInStages_every?: InputMaybe<SubscriberWhereStageInput>;
  documentInStages_none?: InputMaybe<SubscriberWhereStageInput>;
  documentInStages_some?: InputMaybe<SubscriberWhereStageInput>;
  email?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  email_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  email_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  email_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** Any other value that exists and is not equal to the given value. */
  email_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  email_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  email_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  email_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values not starting with the given string. */
  email_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  email_starts_with?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['ID']>;
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars['ID']>;
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars['ID']>;
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** Any other value that exists and is not equal to the given value. */
  id_not?: InputMaybe<Scalars['ID']>;
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars['ID']>;
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars['ID']>;
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars['ID']>;
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars['ID']>;
  messagem?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  messagem_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  messagem_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  messagem_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** Any other value that exists and is not equal to the given value. */
  messagem_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  messagem_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  messagem_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  messagem_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values not starting with the given string. */
  messagem_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  messagem_starts_with?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  name_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  name_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  name_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** Any other value that exists and is not equal to the given value. */
  name_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  name_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  name_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  name_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values not starting with the given string. */
  name_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  name_starts_with?: InputMaybe<Scalars['String']>;
  publishedAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  publishedAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  publishedAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  publishedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  /** All values less than the given value. */
  publishedAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  publishedAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** Any other value that exists and is not equal to the given value. */
  publishedAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  publishedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  publishedBy?: InputMaybe<UserWhereInput>;
  scheduledIn_every?: InputMaybe<ScheduledOperationWhereInput>;
  scheduledIn_none?: InputMaybe<ScheduledOperationWhereInput>;
  scheduledIn_some?: InputMaybe<ScheduledOperationWhereInput>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  updatedAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  updatedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  /** All values less than the given value. */
  updatedAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** Any other value that exists and is not equal to the given value. */
  updatedAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  updatedBy?: InputMaybe<UserWhereInput>;
};

/** The document in stages filter allows specifying a stage entry to cross compare the same document between different stages */
export type SubscriberWhereStageInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<SubscriberWhereStageInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<SubscriberWhereStageInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<SubscriberWhereStageInput>>;
  /** This field contains fields which can be set as true or false to specify an internal comparison */
  compareWithParent?: InputMaybe<SubscriberWhereComparatorInput>;
  /** Specify the stage to compare with */
  stage?: InputMaybe<Stage>;
};

/** References Subscriber record uniquely */
export type SubscriberWhereUniqueInput = {
  email?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['ID']>;
};

export enum SystemDateTimeFieldVariation {
  Base = 'BASE',
  Combined = 'COMBINED',
  Localization = 'LOCALIZATION'
}

export type TelefoneCategoria = Node & {
  __typename?: 'TelefoneCategoria';
  /** The time the document was created */
  createdAt: Scalars['DateTime'];
  /** User that created this document */
  createdBy?: Maybe<User>;
  description?: Maybe<RichText>;
  /** Get the document in other stages */
  documentInStages: Array<TelefoneCategoria>;
  /** List of TelefoneCategoria versions */
  history: Array<Version>;
  /** The unique identifier */
  id: Scalars['ID'];
  name: Scalars['String'];
  /** The time the document was published. Null on documents in draft stage. */
  publishedAt?: Maybe<Scalars['DateTime']>;
  /** User that last published this document */
  publishedBy?: Maybe<User>;
  scheduledIn: Array<ScheduledOperation>;
  shortDescription?: Maybe<Scalars['String']>;
  slug?: Maybe<Scalars['String']>;
  /** System stage field */
  stage: Stage;
  telefoneUtil: Array<TelefonesUteis>;
  /** The time the document was updated */
  updatedAt: Scalars['DateTime'];
  /** User that last updated this document */
  updatedBy?: Maybe<User>;
};


export type TelefoneCategoriaCreatedByArgs = {
  forceParentLocale?: InputMaybe<Scalars['Boolean']>;
  locales?: InputMaybe<Array<Locale>>;
};


export type TelefoneCategoriaDocumentInStagesArgs = {
  includeCurrent?: Scalars['Boolean'];
  inheritLocale?: Scalars['Boolean'];
  stages?: Array<Stage>;
};


export type TelefoneCategoriaHistoryArgs = {
  limit?: Scalars['Int'];
  skip?: Scalars['Int'];
  stageOverride?: InputMaybe<Stage>;
};


export type TelefoneCategoriaPublishedByArgs = {
  forceParentLocale?: InputMaybe<Scalars['Boolean']>;
  locales?: InputMaybe<Array<Locale>>;
};


export type TelefoneCategoriaScheduledInArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  forceParentLocale?: InputMaybe<Scalars['Boolean']>;
  last?: InputMaybe<Scalars['Int']>;
  locales?: InputMaybe<Array<Locale>>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<ScheduledOperationWhereInput>;
};


export type TelefoneCategoriaTelefoneUtilArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  forceParentLocale?: InputMaybe<Scalars['Boolean']>;
  last?: InputMaybe<Scalars['Int']>;
  locales?: InputMaybe<Array<Locale>>;
  orderBy?: InputMaybe<TelefonesUteisOrderByInput>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<TelefonesUteisWhereInput>;
};


export type TelefoneCategoriaUpdatedByArgs = {
  forceParentLocale?: InputMaybe<Scalars['Boolean']>;
  locales?: InputMaybe<Array<Locale>>;
};

export type TelefoneCategoriaConnectInput = {
  /** Allow to specify document position in list of connected documents, will default to appending at end of list */
  position?: InputMaybe<ConnectPositionInput>;
  /** Document to connect */
  where: TelefoneCategoriaWhereUniqueInput;
};

/** A connection to a list of items. */
export type TelefoneCategoriaConnection = {
  __typename?: 'TelefoneCategoriaConnection';
  aggregate: Aggregate;
  /** A list of edges. */
  edges: Array<TelefoneCategoriaEdge>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

export type TelefoneCategoriaCreateInput = {
  createdAt?: InputMaybe<Scalars['DateTime']>;
  description?: InputMaybe<Scalars['RichTextAST']>;
  name: Scalars['String'];
  shortDescription?: InputMaybe<Scalars['String']>;
  slug?: InputMaybe<Scalars['String']>;
  telefoneUtil?: InputMaybe<TelefonesUteisCreateManyInlineInput>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
};

export type TelefoneCategoriaCreateManyInlineInput = {
  /** Connect multiple existing TelefoneCategoria documents */
  connect?: InputMaybe<Array<TelefoneCategoriaWhereUniqueInput>>;
  /** Create and connect multiple existing TelefoneCategoria documents */
  create?: InputMaybe<Array<TelefoneCategoriaCreateInput>>;
};

export type TelefoneCategoriaCreateOneInlineInput = {
  /** Connect one existing TelefoneCategoria document */
  connect?: InputMaybe<TelefoneCategoriaWhereUniqueInput>;
  /** Create and connect one TelefoneCategoria document */
  create?: InputMaybe<TelefoneCategoriaCreateInput>;
};

/** An edge in a connection. */
export type TelefoneCategoriaEdge = {
  __typename?: 'TelefoneCategoriaEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
  /** The item at the end of the edge. */
  node: TelefoneCategoria;
};

/** Identifies documents */
export type TelefoneCategoriaManyWhereInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<TelefoneCategoriaWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<TelefoneCategoriaWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<TelefoneCategoriaWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars['String']>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  createdAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  createdAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  /** All values less than the given value. */
  createdAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  createdAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** Any other value that exists and is not equal to the given value. */
  createdAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  createdBy?: InputMaybe<UserWhereInput>;
  documentInStages_every?: InputMaybe<TelefoneCategoriaWhereStageInput>;
  documentInStages_none?: InputMaybe<TelefoneCategoriaWhereStageInput>;
  documentInStages_some?: InputMaybe<TelefoneCategoriaWhereStageInput>;
  id?: InputMaybe<Scalars['ID']>;
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars['ID']>;
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars['ID']>;
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** Any other value that exists and is not equal to the given value. */
  id_not?: InputMaybe<Scalars['ID']>;
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars['ID']>;
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars['ID']>;
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars['ID']>;
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars['ID']>;
  name?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  name_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  name_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  name_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** Any other value that exists and is not equal to the given value. */
  name_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  name_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  name_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  name_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values not starting with the given string. */
  name_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  name_starts_with?: InputMaybe<Scalars['String']>;
  publishedAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  publishedAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  publishedAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  publishedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  /** All values less than the given value. */
  publishedAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  publishedAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** Any other value that exists and is not equal to the given value. */
  publishedAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  publishedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  publishedBy?: InputMaybe<UserWhereInput>;
  scheduledIn_every?: InputMaybe<ScheduledOperationWhereInput>;
  scheduledIn_none?: InputMaybe<ScheduledOperationWhereInput>;
  scheduledIn_some?: InputMaybe<ScheduledOperationWhereInput>;
  shortDescription?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  shortDescription_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  shortDescription_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  shortDescription_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** Any other value that exists and is not equal to the given value. */
  shortDescription_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  shortDescription_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  shortDescription_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  shortDescription_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values not starting with the given string. */
  shortDescription_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  shortDescription_starts_with?: InputMaybe<Scalars['String']>;
  slug?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  slug_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  slug_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  slug_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** Any other value that exists and is not equal to the given value. */
  slug_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  slug_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  slug_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  slug_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values not starting with the given string. */
  slug_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  slug_starts_with?: InputMaybe<Scalars['String']>;
  telefoneUtil_every?: InputMaybe<TelefonesUteisWhereInput>;
  telefoneUtil_none?: InputMaybe<TelefonesUteisWhereInput>;
  telefoneUtil_some?: InputMaybe<TelefonesUteisWhereInput>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  updatedAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  updatedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  /** All values less than the given value. */
  updatedAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** Any other value that exists and is not equal to the given value. */
  updatedAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  updatedBy?: InputMaybe<UserWhereInput>;
};

export enum TelefoneCategoriaOrderByInput {
  CreatedAtAsc = 'createdAt_ASC',
  CreatedAtDesc = 'createdAt_DESC',
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  NameAsc = 'name_ASC',
  NameDesc = 'name_DESC',
  PublishedAtAsc = 'publishedAt_ASC',
  PublishedAtDesc = 'publishedAt_DESC',
  ShortDescriptionAsc = 'shortDescription_ASC',
  ShortDescriptionDesc = 'shortDescription_DESC',
  SlugAsc = 'slug_ASC',
  SlugDesc = 'slug_DESC',
  UpdatedAtAsc = 'updatedAt_ASC',
  UpdatedAtDesc = 'updatedAt_DESC'
}

export type TelefoneCategoriaUpdateInput = {
  description?: InputMaybe<Scalars['RichTextAST']>;
  name?: InputMaybe<Scalars['String']>;
  shortDescription?: InputMaybe<Scalars['String']>;
  slug?: InputMaybe<Scalars['String']>;
  telefoneUtil?: InputMaybe<TelefonesUteisUpdateManyInlineInput>;
};

export type TelefoneCategoriaUpdateManyInlineInput = {
  /** Connect multiple existing TelefoneCategoria documents */
  connect?: InputMaybe<Array<TelefoneCategoriaConnectInput>>;
  /** Create and connect multiple TelefoneCategoria documents */
  create?: InputMaybe<Array<TelefoneCategoriaCreateInput>>;
  /** Delete multiple TelefoneCategoria documents */
  delete?: InputMaybe<Array<TelefoneCategoriaWhereUniqueInput>>;
  /** Disconnect multiple TelefoneCategoria documents */
  disconnect?: InputMaybe<Array<TelefoneCategoriaWhereUniqueInput>>;
  /** Override currently-connected documents with multiple existing TelefoneCategoria documents */
  set?: InputMaybe<Array<TelefoneCategoriaWhereUniqueInput>>;
  /** Update multiple TelefoneCategoria documents */
  update?: InputMaybe<Array<TelefoneCategoriaUpdateWithNestedWhereUniqueInput>>;
  /** Upsert multiple TelefoneCategoria documents */
  upsert?: InputMaybe<Array<TelefoneCategoriaUpsertWithNestedWhereUniqueInput>>;
};

export type TelefoneCategoriaUpdateManyInput = {
  description?: InputMaybe<Scalars['RichTextAST']>;
  name?: InputMaybe<Scalars['String']>;
  shortDescription?: InputMaybe<Scalars['String']>;
};

export type TelefoneCategoriaUpdateManyWithNestedWhereInput = {
  /** Update many input */
  data: TelefoneCategoriaUpdateManyInput;
  /** Document search */
  where: TelefoneCategoriaWhereInput;
};

export type TelefoneCategoriaUpdateOneInlineInput = {
  /** Connect existing TelefoneCategoria document */
  connect?: InputMaybe<TelefoneCategoriaWhereUniqueInput>;
  /** Create and connect one TelefoneCategoria document */
  create?: InputMaybe<TelefoneCategoriaCreateInput>;
  /** Delete currently connected TelefoneCategoria document */
  delete?: InputMaybe<Scalars['Boolean']>;
  /** Disconnect currently connected TelefoneCategoria document */
  disconnect?: InputMaybe<Scalars['Boolean']>;
  /** Update single TelefoneCategoria document */
  update?: InputMaybe<TelefoneCategoriaUpdateWithNestedWhereUniqueInput>;
  /** Upsert single TelefoneCategoria document */
  upsert?: InputMaybe<TelefoneCategoriaUpsertWithNestedWhereUniqueInput>;
};

export type TelefoneCategoriaUpdateWithNestedWhereUniqueInput = {
  /** Document to update */
  data: TelefoneCategoriaUpdateInput;
  /** Unique document search */
  where: TelefoneCategoriaWhereUniqueInput;
};

export type TelefoneCategoriaUpsertInput = {
  /** Create document if it didn't exist */
  create: TelefoneCategoriaCreateInput;
  /** Update document if it exists */
  update: TelefoneCategoriaUpdateInput;
};

export type TelefoneCategoriaUpsertWithNestedWhereUniqueInput = {
  /** Upsert data */
  data: TelefoneCategoriaUpsertInput;
  /** Unique document search */
  where: TelefoneCategoriaWhereUniqueInput;
};

/** This contains a set of filters that can be used to compare values internally */
export type TelefoneCategoriaWhereComparatorInput = {
  /** This field can be used to request to check if the entry is outdated by internal comparison */
  outdated_to?: InputMaybe<Scalars['Boolean']>;
};

/** Identifies documents */
export type TelefoneCategoriaWhereInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<TelefoneCategoriaWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<TelefoneCategoriaWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<TelefoneCategoriaWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars['String']>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  createdAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  createdAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  /** All values less than the given value. */
  createdAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  createdAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** Any other value that exists and is not equal to the given value. */
  createdAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  createdBy?: InputMaybe<UserWhereInput>;
  documentInStages_every?: InputMaybe<TelefoneCategoriaWhereStageInput>;
  documentInStages_none?: InputMaybe<TelefoneCategoriaWhereStageInput>;
  documentInStages_some?: InputMaybe<TelefoneCategoriaWhereStageInput>;
  id?: InputMaybe<Scalars['ID']>;
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars['ID']>;
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars['ID']>;
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** Any other value that exists and is not equal to the given value. */
  id_not?: InputMaybe<Scalars['ID']>;
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars['ID']>;
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars['ID']>;
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars['ID']>;
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars['ID']>;
  name?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  name_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  name_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  name_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** Any other value that exists and is not equal to the given value. */
  name_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  name_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  name_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  name_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values not starting with the given string. */
  name_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  name_starts_with?: InputMaybe<Scalars['String']>;
  publishedAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  publishedAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  publishedAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  publishedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  /** All values less than the given value. */
  publishedAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  publishedAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** Any other value that exists and is not equal to the given value. */
  publishedAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  publishedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  publishedBy?: InputMaybe<UserWhereInput>;
  scheduledIn_every?: InputMaybe<ScheduledOperationWhereInput>;
  scheduledIn_none?: InputMaybe<ScheduledOperationWhereInput>;
  scheduledIn_some?: InputMaybe<ScheduledOperationWhereInput>;
  shortDescription?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  shortDescription_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  shortDescription_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  shortDescription_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** Any other value that exists and is not equal to the given value. */
  shortDescription_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  shortDescription_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  shortDescription_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  shortDescription_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values not starting with the given string. */
  shortDescription_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  shortDescription_starts_with?: InputMaybe<Scalars['String']>;
  slug?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  slug_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  slug_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  slug_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** Any other value that exists and is not equal to the given value. */
  slug_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  slug_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  slug_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  slug_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values not starting with the given string. */
  slug_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  slug_starts_with?: InputMaybe<Scalars['String']>;
  telefoneUtil_every?: InputMaybe<TelefonesUteisWhereInput>;
  telefoneUtil_none?: InputMaybe<TelefonesUteisWhereInput>;
  telefoneUtil_some?: InputMaybe<TelefonesUteisWhereInput>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  updatedAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  updatedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  /** All values less than the given value. */
  updatedAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** Any other value that exists and is not equal to the given value. */
  updatedAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  updatedBy?: InputMaybe<UserWhereInput>;
};

/** The document in stages filter allows specifying a stage entry to cross compare the same document between different stages */
export type TelefoneCategoriaWhereStageInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<TelefoneCategoriaWhereStageInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<TelefoneCategoriaWhereStageInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<TelefoneCategoriaWhereStageInput>>;
  /** This field contains fields which can be set as true or false to specify an internal comparison */
  compareWithParent?: InputMaybe<TelefoneCategoriaWhereComparatorInput>;
  /** Specify the stage to compare with */
  stage?: InputMaybe<Stage>;
};

/** References TelefoneCategoria record uniquely */
export type TelefoneCategoriaWhereUniqueInput = {
  id?: InputMaybe<Scalars['ID']>;
  slug?: InputMaybe<Scalars['String']>;
};

export type TelefonesUteis = Node & {
  __typename?: 'TelefonesUteis';
  /** The time the document was created */
  createdAt: Scalars['DateTime'];
  /** User that created this document */
  createdBy?: Maybe<User>;
  descricao: Scalars['String'];
  /** Get the document in other stages */
  documentInStages: Array<TelefonesUteis>;
  /** List of TelefonesUteis versions */
  history: Array<Version>;
  /** The unique identifier */
  id: Scalars['ID'];
  /** The time the document was published. Null on documents in draft stage. */
  publishedAt?: Maybe<Scalars['DateTime']>;
  /** User that last published this document */
  publishedBy?: Maybe<User>;
  scheduledIn: Array<ScheduledOperation>;
  /** System stage field */
  stage: Stage;
  telefoneCategorias: Array<TelefoneCategoria>;
  telefones: Array<TelefonesUteistelefonesUnion>;
  /** The time the document was updated */
  updatedAt: Scalars['DateTime'];
  /** User that last updated this document */
  updatedBy?: Maybe<User>;
};


export type TelefonesUteisCreatedByArgs = {
  forceParentLocale?: InputMaybe<Scalars['Boolean']>;
  locales?: InputMaybe<Array<Locale>>;
};


export type TelefonesUteisDocumentInStagesArgs = {
  includeCurrent?: Scalars['Boolean'];
  inheritLocale?: Scalars['Boolean'];
  stages?: Array<Stage>;
};


export type TelefonesUteisHistoryArgs = {
  limit?: Scalars['Int'];
  skip?: Scalars['Int'];
  stageOverride?: InputMaybe<Stage>;
};


export type TelefonesUteisPublishedByArgs = {
  forceParentLocale?: InputMaybe<Scalars['Boolean']>;
  locales?: InputMaybe<Array<Locale>>;
};


export type TelefonesUteisScheduledInArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  forceParentLocale?: InputMaybe<Scalars['Boolean']>;
  last?: InputMaybe<Scalars['Int']>;
  locales?: InputMaybe<Array<Locale>>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<ScheduledOperationWhereInput>;
};


export type TelefonesUteisTelefoneCategoriasArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  forceParentLocale?: InputMaybe<Scalars['Boolean']>;
  last?: InputMaybe<Scalars['Int']>;
  locales?: InputMaybe<Array<Locale>>;
  orderBy?: InputMaybe<TelefoneCategoriaOrderByInput>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<TelefoneCategoriaWhereInput>;
};


export type TelefonesUteisTelefonesArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  forceParentLocale?: InputMaybe<Scalars['Boolean']>;
  last?: InputMaybe<Scalars['Int']>;
  locales?: InputMaybe<Array<Locale>>;
  skip?: InputMaybe<Scalars['Int']>;
};


export type TelefonesUteisUpdatedByArgs = {
  forceParentLocale?: InputMaybe<Scalars['Boolean']>;
  locales?: InputMaybe<Array<Locale>>;
};

export type TelefonesUteisConnectInput = {
  /** Allow to specify document position in list of connected documents, will default to appending at end of list */
  position?: InputMaybe<ConnectPositionInput>;
  /** Document to connect */
  where: TelefonesUteisWhereUniqueInput;
};

/** A connection to a list of items. */
export type TelefonesUteisConnection = {
  __typename?: 'TelefonesUteisConnection';
  aggregate: Aggregate;
  /** A list of edges. */
  edges: Array<TelefonesUteisEdge>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

export type TelefonesUteisCreateInput = {
  createdAt?: InputMaybe<Scalars['DateTime']>;
  descricao: Scalars['String'];
  telefoneCategorias?: InputMaybe<TelefoneCategoriaCreateManyInlineInput>;
  telefones?: InputMaybe<TelefonesUteistelefonesUnionCreateManyInlineInput>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
};

export type TelefonesUteisCreateManyInlineInput = {
  /** Connect multiple existing TelefonesUteis documents */
  connect?: InputMaybe<Array<TelefonesUteisWhereUniqueInput>>;
  /** Create and connect multiple existing TelefonesUteis documents */
  create?: InputMaybe<Array<TelefonesUteisCreateInput>>;
};

export type TelefonesUteisCreateOneInlineInput = {
  /** Connect one existing TelefonesUteis document */
  connect?: InputMaybe<TelefonesUteisWhereUniqueInput>;
  /** Create and connect one TelefonesUteis document */
  create?: InputMaybe<TelefonesUteisCreateInput>;
};

/** An edge in a connection. */
export type TelefonesUteisEdge = {
  __typename?: 'TelefonesUteisEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
  /** The item at the end of the edge. */
  node: TelefonesUteis;
};

/** Identifies documents */
export type TelefonesUteisManyWhereInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<TelefonesUteisWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<TelefonesUteisWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<TelefonesUteisWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars['String']>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  createdAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  createdAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  /** All values less than the given value. */
  createdAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  createdAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** Any other value that exists and is not equal to the given value. */
  createdAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  createdBy?: InputMaybe<UserWhereInput>;
  descricao?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  descricao_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  descricao_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  descricao_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** Any other value that exists and is not equal to the given value. */
  descricao_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  descricao_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  descricao_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  descricao_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values not starting with the given string. */
  descricao_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  descricao_starts_with?: InputMaybe<Scalars['String']>;
  documentInStages_every?: InputMaybe<TelefonesUteisWhereStageInput>;
  documentInStages_none?: InputMaybe<TelefonesUteisWhereStageInput>;
  documentInStages_some?: InputMaybe<TelefonesUteisWhereStageInput>;
  id?: InputMaybe<Scalars['ID']>;
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars['ID']>;
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars['ID']>;
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** Any other value that exists and is not equal to the given value. */
  id_not?: InputMaybe<Scalars['ID']>;
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars['ID']>;
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars['ID']>;
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars['ID']>;
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars['ID']>;
  publishedAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  publishedAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  publishedAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  publishedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  /** All values less than the given value. */
  publishedAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  publishedAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** Any other value that exists and is not equal to the given value. */
  publishedAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  publishedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  publishedBy?: InputMaybe<UserWhereInput>;
  scheduledIn_every?: InputMaybe<ScheduledOperationWhereInput>;
  scheduledIn_none?: InputMaybe<ScheduledOperationWhereInput>;
  scheduledIn_some?: InputMaybe<ScheduledOperationWhereInput>;
  telefoneCategorias_every?: InputMaybe<TelefoneCategoriaWhereInput>;
  telefoneCategorias_none?: InputMaybe<TelefoneCategoriaWhereInput>;
  telefoneCategorias_some?: InputMaybe<TelefoneCategoriaWhereInput>;
  /** All values in which the union is empty. */
  telefones_empty?: InputMaybe<Scalars['Boolean']>;
  /** Matches if the modular component contains at least one connection to the item provided to the filter */
  telefones_some?: InputMaybe<TelefonesUteistelefonesUnionWhereInput>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  updatedAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  updatedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  /** All values less than the given value. */
  updatedAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** Any other value that exists and is not equal to the given value. */
  updatedAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  updatedBy?: InputMaybe<UserWhereInput>;
};

export enum TelefonesUteisOrderByInput {
  CreatedAtAsc = 'createdAt_ASC',
  CreatedAtDesc = 'createdAt_DESC',
  DescricaoAsc = 'descricao_ASC',
  DescricaoDesc = 'descricao_DESC',
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  PublishedAtAsc = 'publishedAt_ASC',
  PublishedAtDesc = 'publishedAt_DESC',
  UpdatedAtAsc = 'updatedAt_ASC',
  UpdatedAtDesc = 'updatedAt_DESC'
}

export type TelefonesUteisUpdateInput = {
  descricao?: InputMaybe<Scalars['String']>;
  telefoneCategorias?: InputMaybe<TelefoneCategoriaUpdateManyInlineInput>;
  telefones?: InputMaybe<TelefonesUteistelefonesUnionUpdateManyInlineInput>;
};

export type TelefonesUteisUpdateManyInlineInput = {
  /** Connect multiple existing TelefonesUteis documents */
  connect?: InputMaybe<Array<TelefonesUteisConnectInput>>;
  /** Create and connect multiple TelefonesUteis documents */
  create?: InputMaybe<Array<TelefonesUteisCreateInput>>;
  /** Delete multiple TelefonesUteis documents */
  delete?: InputMaybe<Array<TelefonesUteisWhereUniqueInput>>;
  /** Disconnect multiple TelefonesUteis documents */
  disconnect?: InputMaybe<Array<TelefonesUteisWhereUniqueInput>>;
  /** Override currently-connected documents with multiple existing TelefonesUteis documents */
  set?: InputMaybe<Array<TelefonesUteisWhereUniqueInput>>;
  /** Update multiple TelefonesUteis documents */
  update?: InputMaybe<Array<TelefonesUteisUpdateWithNestedWhereUniqueInput>>;
  /** Upsert multiple TelefonesUteis documents */
  upsert?: InputMaybe<Array<TelefonesUteisUpsertWithNestedWhereUniqueInput>>;
};

export type TelefonesUteisUpdateManyInput = {
  descricao?: InputMaybe<Scalars['String']>;
};

export type TelefonesUteisUpdateManyWithNestedWhereInput = {
  /** Update many input */
  data: TelefonesUteisUpdateManyInput;
  /** Document search */
  where: TelefonesUteisWhereInput;
};

export type TelefonesUteisUpdateOneInlineInput = {
  /** Connect existing TelefonesUteis document */
  connect?: InputMaybe<TelefonesUteisWhereUniqueInput>;
  /** Create and connect one TelefonesUteis document */
  create?: InputMaybe<TelefonesUteisCreateInput>;
  /** Delete currently connected TelefonesUteis document */
  delete?: InputMaybe<Scalars['Boolean']>;
  /** Disconnect currently connected TelefonesUteis document */
  disconnect?: InputMaybe<Scalars['Boolean']>;
  /** Update single TelefonesUteis document */
  update?: InputMaybe<TelefonesUteisUpdateWithNestedWhereUniqueInput>;
  /** Upsert single TelefonesUteis document */
  upsert?: InputMaybe<TelefonesUteisUpsertWithNestedWhereUniqueInput>;
};

export type TelefonesUteisUpdateWithNestedWhereUniqueInput = {
  /** Document to update */
  data: TelefonesUteisUpdateInput;
  /** Unique document search */
  where: TelefonesUteisWhereUniqueInput;
};

export type TelefonesUteisUpsertInput = {
  /** Create document if it didn't exist */
  create: TelefonesUteisCreateInput;
  /** Update document if it exists */
  update: TelefonesUteisUpdateInput;
};

export type TelefonesUteisUpsertWithNestedWhereUniqueInput = {
  /** Upsert data */
  data: TelefonesUteisUpsertInput;
  /** Unique document search */
  where: TelefonesUteisWhereUniqueInput;
};

/** This contains a set of filters that can be used to compare values internally */
export type TelefonesUteisWhereComparatorInput = {
  /** This field can be used to request to check if the entry is outdated by internal comparison */
  outdated_to?: InputMaybe<Scalars['Boolean']>;
};

/** Identifies documents */
export type TelefonesUteisWhereInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<TelefonesUteisWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<TelefonesUteisWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<TelefonesUteisWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars['String']>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  createdAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  createdAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  /** All values less than the given value. */
  createdAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  createdAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** Any other value that exists and is not equal to the given value. */
  createdAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  createdBy?: InputMaybe<UserWhereInput>;
  descricao?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  descricao_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  descricao_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  descricao_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** Any other value that exists and is not equal to the given value. */
  descricao_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  descricao_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  descricao_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  descricao_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values not starting with the given string. */
  descricao_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  descricao_starts_with?: InputMaybe<Scalars['String']>;
  documentInStages_every?: InputMaybe<TelefonesUteisWhereStageInput>;
  documentInStages_none?: InputMaybe<TelefonesUteisWhereStageInput>;
  documentInStages_some?: InputMaybe<TelefonesUteisWhereStageInput>;
  id?: InputMaybe<Scalars['ID']>;
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars['ID']>;
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars['ID']>;
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** Any other value that exists and is not equal to the given value. */
  id_not?: InputMaybe<Scalars['ID']>;
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars['ID']>;
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars['ID']>;
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars['ID']>;
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars['ID']>;
  publishedAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  publishedAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  publishedAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  publishedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  /** All values less than the given value. */
  publishedAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  publishedAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** Any other value that exists and is not equal to the given value. */
  publishedAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  publishedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  publishedBy?: InputMaybe<UserWhereInput>;
  scheduledIn_every?: InputMaybe<ScheduledOperationWhereInput>;
  scheduledIn_none?: InputMaybe<ScheduledOperationWhereInput>;
  scheduledIn_some?: InputMaybe<ScheduledOperationWhereInput>;
  telefoneCategorias_every?: InputMaybe<TelefoneCategoriaWhereInput>;
  telefoneCategorias_none?: InputMaybe<TelefoneCategoriaWhereInput>;
  telefoneCategorias_some?: InputMaybe<TelefoneCategoriaWhereInput>;
  /** All values in which the union is empty. */
  telefones_empty?: InputMaybe<Scalars['Boolean']>;
  /** Matches if the modular component contains at least one connection to the item provided to the filter */
  telefones_some?: InputMaybe<TelefonesUteistelefonesUnionWhereInput>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  updatedAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  updatedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  /** All values less than the given value. */
  updatedAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** Any other value that exists and is not equal to the given value. */
  updatedAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  updatedBy?: InputMaybe<UserWhereInput>;
};

/** The document in stages filter allows specifying a stage entry to cross compare the same document between different stages */
export type TelefonesUteisWhereStageInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<TelefonesUteisWhereStageInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<TelefonesUteisWhereStageInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<TelefonesUteisWhereStageInput>>;
  /** This field contains fields which can be set as true or false to specify an internal comparison */
  compareWithParent?: InputMaybe<TelefonesUteisWhereComparatorInput>;
  /** Specify the stage to compare with */
  stage?: InputMaybe<Stage>;
};

/** References TelefonesUteis record uniquely */
export type TelefonesUteisWhereUniqueInput = {
  id?: InputMaybe<Scalars['ID']>;
};

export type TelefonesUteistelefonesUnion = Itemtelefone;

export type TelefonesUteistelefonesUnionConnectInput = {
  Itemtelefone?: InputMaybe<ItemtelefoneConnectInput>;
};

export type TelefonesUteistelefonesUnionCreateInput = {
  Itemtelefone?: InputMaybe<ItemtelefoneCreateInput>;
};

export type TelefonesUteistelefonesUnionCreateManyInlineInput = {
  /** Create and connect multiple existing TelefonesUteistelefonesUnion documents */
  create?: InputMaybe<Array<TelefonesUteistelefonesUnionCreateInput>>;
};

export type TelefonesUteistelefonesUnionCreateOneInlineInput = {
  /** Create and connect one TelefonesUteistelefonesUnion document */
  create?: InputMaybe<TelefonesUteistelefonesUnionCreateInput>;
};

export type TelefonesUteistelefonesUnionCreateWithPositionInput = {
  Itemtelefone?: InputMaybe<ItemtelefoneCreateWithPositionInput>;
};

export type TelefonesUteistelefonesUnionUpdateInput = {
  Itemtelefone?: InputMaybe<ItemtelefoneUpdateInput>;
};

export type TelefonesUteistelefonesUnionUpdateManyInlineInput = {
  /** Create and connect multiple TelefonesUteistelefonesUnion component instances */
  create?: InputMaybe<Array<TelefonesUteistelefonesUnionCreateWithPositionInput>>;
  /** Delete multiple TelefonesUteistelefonesUnion documents */
  delete?: InputMaybe<Array<TelefonesUteistelefonesUnionWhereUniqueInput>>;
  /** Update multiple TelefonesUteistelefonesUnion component instances */
  update?: InputMaybe<Array<TelefonesUteistelefonesUnionUpdateWithNestedWhereUniqueAndPositionInput>>;
  /** Upsert multiple TelefonesUteistelefonesUnion component instances */
  upsert?: InputMaybe<Array<TelefonesUteistelefonesUnionUpsertWithNestedWhereUniqueAndPositionInput>>;
};

export type TelefonesUteistelefonesUnionUpdateManyWithNestedWhereInput = {
  Itemtelefone?: InputMaybe<ItemtelefoneUpdateManyWithNestedWhereInput>;
};

export type TelefonesUteistelefonesUnionUpdateOneInlineInput = {
  /** Create and connect one TelefonesUteistelefonesUnion document */
  create?: InputMaybe<TelefonesUteistelefonesUnionCreateInput>;
  /** Delete currently connected TelefonesUteistelefonesUnion document */
  delete?: InputMaybe<Scalars['Boolean']>;
  /** Update single TelefonesUteistelefonesUnion document */
  update?: InputMaybe<TelefonesUteistelefonesUnionUpdateWithNestedWhereUniqueInput>;
  /** Upsert single TelefonesUteistelefonesUnion document */
  upsert?: InputMaybe<TelefonesUteistelefonesUnionUpsertWithNestedWhereUniqueInput>;
};

export type TelefonesUteistelefonesUnionUpdateWithNestedWhereUniqueAndPositionInput = {
  Itemtelefone?: InputMaybe<ItemtelefoneUpdateWithNestedWhereUniqueAndPositionInput>;
};

export type TelefonesUteistelefonesUnionUpdateWithNestedWhereUniqueInput = {
  Itemtelefone?: InputMaybe<ItemtelefoneUpdateWithNestedWhereUniqueInput>;
};

export type TelefonesUteistelefonesUnionUpsertWithNestedWhereUniqueAndPositionInput = {
  Itemtelefone?: InputMaybe<ItemtelefoneUpsertWithNestedWhereUniqueAndPositionInput>;
};

export type TelefonesUteistelefonesUnionUpsertWithNestedWhereUniqueInput = {
  Itemtelefone?: InputMaybe<ItemtelefoneUpsertWithNestedWhereUniqueInput>;
};

export type TelefonesUteistelefonesUnionWhereInput = {
  Itemtelefone?: InputMaybe<ItemtelefoneWhereInput>;
};

export type TelefonesUteistelefonesUnionWhereUniqueInput = {
  Itemtelefone?: InputMaybe<ItemtelefoneWhereUniqueInput>;
};

export type UnpublishLocaleInput = {
  /** Locales to unpublish */
  locale: Locale;
  /** Stages to unpublish selected locales from */
  stages: Array<Stage>;
};

/** User system model */
export type User = Node & {
  __typename?: 'User';
  /** The time the document was created */
  createdAt: Scalars['DateTime'];
  /** Get the document in other stages */
  documentInStages: Array<User>;
  /** The unique identifier */
  id: Scalars['ID'];
  /** Flag to determine if user is active or not */
  isActive: Scalars['Boolean'];
  /** User Kind. Can be either MEMBER, PAT or PUBLIC */
  kind: UserKind;
  /** The username */
  name: Scalars['String'];
  /** Profile Picture url */
  picture?: Maybe<Scalars['String']>;
  /** The time the document was published. Null on documents in draft stage. */
  publishedAt?: Maybe<Scalars['DateTime']>;
  /** System stage field */
  stage: Stage;
  /** The time the document was updated */
  updatedAt: Scalars['DateTime'];
};


/** User system model */
export type UserDocumentInStagesArgs = {
  includeCurrent?: Scalars['Boolean'];
  inheritLocale?: Scalars['Boolean'];
  stages?: Array<Stage>;
};

export type UserConnectInput = {
  /** Allow to specify document position in list of connected documents, will default to appending at end of list */
  position?: InputMaybe<ConnectPositionInput>;
  /** Document to connect */
  where: UserWhereUniqueInput;
};

/** A connection to a list of items. */
export type UserConnection = {
  __typename?: 'UserConnection';
  aggregate: Aggregate;
  /** A list of edges. */
  edges: Array<UserEdge>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

export type UserCreateManyInlineInput = {
  /** Connect multiple existing User documents */
  connect?: InputMaybe<Array<UserWhereUniqueInput>>;
};

export type UserCreateOneInlineInput = {
  /** Connect one existing User document */
  connect?: InputMaybe<UserWhereUniqueInput>;
};

/** An edge in a connection. */
export type UserEdge = {
  __typename?: 'UserEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
  /** The item at the end of the edge. */
  node: User;
};

/** System User Kind */
export enum UserKind {
  Member = 'MEMBER',
  Pat = 'PAT',
  Public = 'PUBLIC',
  Webhook = 'WEBHOOK'
}

/** Identifies documents */
export type UserManyWhereInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<UserWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<UserWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<UserWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars['String']>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  createdAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  createdAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  /** All values less than the given value. */
  createdAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  createdAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** Any other value that exists and is not equal to the given value. */
  createdAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  documentInStages_every?: InputMaybe<UserWhereStageInput>;
  documentInStages_none?: InputMaybe<UserWhereStageInput>;
  documentInStages_some?: InputMaybe<UserWhereStageInput>;
  id?: InputMaybe<Scalars['ID']>;
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars['ID']>;
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars['ID']>;
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** Any other value that exists and is not equal to the given value. */
  id_not?: InputMaybe<Scalars['ID']>;
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars['ID']>;
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars['ID']>;
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars['ID']>;
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars['ID']>;
  isActive?: InputMaybe<Scalars['Boolean']>;
  /** Any other value that exists and is not equal to the given value. */
  isActive_not?: InputMaybe<Scalars['Boolean']>;
  kind?: InputMaybe<UserKind>;
  /** All values that are contained in given list. */
  kind_in?: InputMaybe<Array<InputMaybe<UserKind>>>;
  /** Any other value that exists and is not equal to the given value. */
  kind_not?: InputMaybe<UserKind>;
  /** All values that are not contained in given list. */
  kind_not_in?: InputMaybe<Array<InputMaybe<UserKind>>>;
  name?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  name_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  name_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  name_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** Any other value that exists and is not equal to the given value. */
  name_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  name_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  name_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  name_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values not starting with the given string. */
  name_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  name_starts_with?: InputMaybe<Scalars['String']>;
  picture?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  picture_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  picture_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  picture_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** Any other value that exists and is not equal to the given value. */
  picture_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  picture_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  picture_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  picture_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values not starting with the given string. */
  picture_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  picture_starts_with?: InputMaybe<Scalars['String']>;
  publishedAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  publishedAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  publishedAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  publishedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  /** All values less than the given value. */
  publishedAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  publishedAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** Any other value that exists and is not equal to the given value. */
  publishedAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  publishedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  updatedAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  updatedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  /** All values less than the given value. */
  updatedAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** Any other value that exists and is not equal to the given value. */
  updatedAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
};

export enum UserOrderByInput {
  CreatedAtAsc = 'createdAt_ASC',
  CreatedAtDesc = 'createdAt_DESC',
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  IsActiveAsc = 'isActive_ASC',
  IsActiveDesc = 'isActive_DESC',
  KindAsc = 'kind_ASC',
  KindDesc = 'kind_DESC',
  NameAsc = 'name_ASC',
  NameDesc = 'name_DESC',
  PictureAsc = 'picture_ASC',
  PictureDesc = 'picture_DESC',
  PublishedAtAsc = 'publishedAt_ASC',
  PublishedAtDesc = 'publishedAt_DESC',
  UpdatedAtAsc = 'updatedAt_ASC',
  UpdatedAtDesc = 'updatedAt_DESC'
}

export type UserUpdateManyInlineInput = {
  /** Connect multiple existing User documents */
  connect?: InputMaybe<Array<UserConnectInput>>;
  /** Disconnect multiple User documents */
  disconnect?: InputMaybe<Array<UserWhereUniqueInput>>;
  /** Override currently-connected documents with multiple existing User documents */
  set?: InputMaybe<Array<UserWhereUniqueInput>>;
};

export type UserUpdateOneInlineInput = {
  /** Connect existing User document */
  connect?: InputMaybe<UserWhereUniqueInput>;
  /** Disconnect currently connected User document */
  disconnect?: InputMaybe<Scalars['Boolean']>;
};

/** This contains a set of filters that can be used to compare values internally */
export type UserWhereComparatorInput = {
  /** This field can be used to request to check if the entry is outdated by internal comparison */
  outdated_to?: InputMaybe<Scalars['Boolean']>;
};

/** Identifies documents */
export type UserWhereInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<UserWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<UserWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<UserWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars['String']>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  createdAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  createdAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  /** All values less than the given value. */
  createdAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  createdAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** Any other value that exists and is not equal to the given value. */
  createdAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  documentInStages_every?: InputMaybe<UserWhereStageInput>;
  documentInStages_none?: InputMaybe<UserWhereStageInput>;
  documentInStages_some?: InputMaybe<UserWhereStageInput>;
  id?: InputMaybe<Scalars['ID']>;
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars['ID']>;
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars['ID']>;
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** Any other value that exists and is not equal to the given value. */
  id_not?: InputMaybe<Scalars['ID']>;
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars['ID']>;
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars['ID']>;
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars['ID']>;
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars['ID']>;
  isActive?: InputMaybe<Scalars['Boolean']>;
  /** Any other value that exists and is not equal to the given value. */
  isActive_not?: InputMaybe<Scalars['Boolean']>;
  kind?: InputMaybe<UserKind>;
  /** All values that are contained in given list. */
  kind_in?: InputMaybe<Array<InputMaybe<UserKind>>>;
  /** Any other value that exists and is not equal to the given value. */
  kind_not?: InputMaybe<UserKind>;
  /** All values that are not contained in given list. */
  kind_not_in?: InputMaybe<Array<InputMaybe<UserKind>>>;
  name?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  name_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  name_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  name_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** Any other value that exists and is not equal to the given value. */
  name_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  name_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  name_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  name_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values not starting with the given string. */
  name_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  name_starts_with?: InputMaybe<Scalars['String']>;
  picture?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  picture_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  picture_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  picture_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** Any other value that exists and is not equal to the given value. */
  picture_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  picture_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  picture_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  picture_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values not starting with the given string. */
  picture_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  picture_starts_with?: InputMaybe<Scalars['String']>;
  publishedAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  publishedAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  publishedAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  publishedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  /** All values less than the given value. */
  publishedAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  publishedAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** Any other value that exists and is not equal to the given value. */
  publishedAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  publishedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  updatedAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  updatedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  /** All values less than the given value. */
  updatedAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** Any other value that exists and is not equal to the given value. */
  updatedAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
};

/** The document in stages filter allows specifying a stage entry to cross compare the same document between different stages */
export type UserWhereStageInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<UserWhereStageInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<UserWhereStageInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<UserWhereStageInput>>;
  /** This field contains fields which can be set as true or false to specify an internal comparison */
  compareWithParent?: InputMaybe<UserWhereComparatorInput>;
  /** Specify the stage to compare with */
  stage?: InputMaybe<Stage>;
};

/** References User record uniquely */
export type UserWhereUniqueInput = {
  id?: InputMaybe<Scalars['ID']>;
};

export type Usuario = Node & {
  __typename?: 'Usuario';
  ativo: Scalars['Boolean'];
  /** The time the document was created */
  createdAt: Scalars['DateTime'];
  /** User that created this document */
  createdBy?: Maybe<User>;
  description?: Maybe<Scalars['String']>;
  /** Get the document in other stages */
  documentInStages: Array<Usuario>;
  /** List of Usuario versions */
  history: Array<Version>;
  /** The unique identifier */
  id: Scalars['ID'];
  image?: Maybe<Asset>;
  name: Scalars['String'];
  posts: Array<Post>;
  /** The time the document was published. Null on documents in draft stage. */
  publishedAt?: Maybe<Scalars['DateTime']>;
  /** User that last published this document */
  publishedBy?: Maybe<User>;
  scheduledIn: Array<ScheduledOperation>;
  slug: Scalars['String'];
  /** System stage field */
  stage: Stage;
  /** The time the document was updated */
  updatedAt: Scalars['DateTime'];
  /** User that last updated this document */
  updatedBy?: Maybe<User>;
};


export type UsuarioCreatedByArgs = {
  forceParentLocale?: InputMaybe<Scalars['Boolean']>;
  locales?: InputMaybe<Array<Locale>>;
};


export type UsuarioDocumentInStagesArgs = {
  includeCurrent?: Scalars['Boolean'];
  inheritLocale?: Scalars['Boolean'];
  stages?: Array<Stage>;
};


export type UsuarioHistoryArgs = {
  limit?: Scalars['Int'];
  skip?: Scalars['Int'];
  stageOverride?: InputMaybe<Stage>;
};


export type UsuarioImageArgs = {
  forceParentLocale?: InputMaybe<Scalars['Boolean']>;
  locales?: InputMaybe<Array<Locale>>;
};


export type UsuarioPostsArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  forceParentLocale?: InputMaybe<Scalars['Boolean']>;
  last?: InputMaybe<Scalars['Int']>;
  locales?: InputMaybe<Array<Locale>>;
  orderBy?: InputMaybe<PostOrderByInput>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<PostWhereInput>;
};


export type UsuarioPublishedByArgs = {
  forceParentLocale?: InputMaybe<Scalars['Boolean']>;
  locales?: InputMaybe<Array<Locale>>;
};


export type UsuarioScheduledInArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  forceParentLocale?: InputMaybe<Scalars['Boolean']>;
  last?: InputMaybe<Scalars['Int']>;
  locales?: InputMaybe<Array<Locale>>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<ScheduledOperationWhereInput>;
};


export type UsuarioUpdatedByArgs = {
  forceParentLocale?: InputMaybe<Scalars['Boolean']>;
  locales?: InputMaybe<Array<Locale>>;
};

export type UsuarioConnectInput = {
  /** Allow to specify document position in list of connected documents, will default to appending at end of list */
  position?: InputMaybe<ConnectPositionInput>;
  /** Document to connect */
  where: UsuarioWhereUniqueInput;
};

/** A connection to a list of items. */
export type UsuarioConnection = {
  __typename?: 'UsuarioConnection';
  aggregate: Aggregate;
  /** A list of edges. */
  edges: Array<UsuarioEdge>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

export type UsuarioCreateInput = {
  ativo: Scalars['Boolean'];
  createdAt?: InputMaybe<Scalars['DateTime']>;
  description?: InputMaybe<Scalars['String']>;
  image?: InputMaybe<AssetCreateOneInlineInput>;
  name: Scalars['String'];
  posts?: InputMaybe<PostCreateManyInlineInput>;
  slug: Scalars['String'];
  updatedAt?: InputMaybe<Scalars['DateTime']>;
};

export type UsuarioCreateManyInlineInput = {
  /** Connect multiple existing Usuario documents */
  connect?: InputMaybe<Array<UsuarioWhereUniqueInput>>;
  /** Create and connect multiple existing Usuario documents */
  create?: InputMaybe<Array<UsuarioCreateInput>>;
};

export type UsuarioCreateOneInlineInput = {
  /** Connect one existing Usuario document */
  connect?: InputMaybe<UsuarioWhereUniqueInput>;
  /** Create and connect one Usuario document */
  create?: InputMaybe<UsuarioCreateInput>;
};

/** An edge in a connection. */
export type UsuarioEdge = {
  __typename?: 'UsuarioEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
  /** The item at the end of the edge. */
  node: Usuario;
};

/** Identifies documents */
export type UsuarioManyWhereInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<UsuarioWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<UsuarioWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<UsuarioWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars['String']>;
  ativo?: InputMaybe<Scalars['Boolean']>;
  /** Any other value that exists and is not equal to the given value. */
  ativo_not?: InputMaybe<Scalars['Boolean']>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  createdAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  createdAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  /** All values less than the given value. */
  createdAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  createdAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** Any other value that exists and is not equal to the given value. */
  createdAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  createdBy?: InputMaybe<UserWhereInput>;
  description?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  description_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  description_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  description_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** Any other value that exists and is not equal to the given value. */
  description_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  description_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  description_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  description_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values not starting with the given string. */
  description_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  description_starts_with?: InputMaybe<Scalars['String']>;
  documentInStages_every?: InputMaybe<UsuarioWhereStageInput>;
  documentInStages_none?: InputMaybe<UsuarioWhereStageInput>;
  documentInStages_some?: InputMaybe<UsuarioWhereStageInput>;
  id?: InputMaybe<Scalars['ID']>;
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars['ID']>;
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars['ID']>;
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** Any other value that exists and is not equal to the given value. */
  id_not?: InputMaybe<Scalars['ID']>;
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars['ID']>;
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars['ID']>;
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars['ID']>;
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars['ID']>;
  image?: InputMaybe<AssetWhereInput>;
  name?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  name_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  name_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  name_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** Any other value that exists and is not equal to the given value. */
  name_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  name_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  name_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  name_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values not starting with the given string. */
  name_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  name_starts_with?: InputMaybe<Scalars['String']>;
  posts_every?: InputMaybe<PostWhereInput>;
  posts_none?: InputMaybe<PostWhereInput>;
  posts_some?: InputMaybe<PostWhereInput>;
  publishedAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  publishedAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  publishedAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  publishedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  /** All values less than the given value. */
  publishedAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  publishedAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** Any other value that exists and is not equal to the given value. */
  publishedAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  publishedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  publishedBy?: InputMaybe<UserWhereInput>;
  scheduledIn_every?: InputMaybe<ScheduledOperationWhereInput>;
  scheduledIn_none?: InputMaybe<ScheduledOperationWhereInput>;
  scheduledIn_some?: InputMaybe<ScheduledOperationWhereInput>;
  slug?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  slug_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  slug_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  slug_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** Any other value that exists and is not equal to the given value. */
  slug_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  slug_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  slug_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  slug_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values not starting with the given string. */
  slug_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  slug_starts_with?: InputMaybe<Scalars['String']>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  updatedAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  updatedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  /** All values less than the given value. */
  updatedAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** Any other value that exists and is not equal to the given value. */
  updatedAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  updatedBy?: InputMaybe<UserWhereInput>;
};

export enum UsuarioOrderByInput {
  AtivoAsc = 'ativo_ASC',
  AtivoDesc = 'ativo_DESC',
  CreatedAtAsc = 'createdAt_ASC',
  CreatedAtDesc = 'createdAt_DESC',
  DescriptionAsc = 'description_ASC',
  DescriptionDesc = 'description_DESC',
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  NameAsc = 'name_ASC',
  NameDesc = 'name_DESC',
  PublishedAtAsc = 'publishedAt_ASC',
  PublishedAtDesc = 'publishedAt_DESC',
  SlugAsc = 'slug_ASC',
  SlugDesc = 'slug_DESC',
  UpdatedAtAsc = 'updatedAt_ASC',
  UpdatedAtDesc = 'updatedAt_DESC'
}

export type UsuarioUpdateInput = {
  ativo?: InputMaybe<Scalars['Boolean']>;
  description?: InputMaybe<Scalars['String']>;
  image?: InputMaybe<AssetUpdateOneInlineInput>;
  name?: InputMaybe<Scalars['String']>;
  posts?: InputMaybe<PostUpdateManyInlineInput>;
  slug?: InputMaybe<Scalars['String']>;
};

export type UsuarioUpdateManyInlineInput = {
  /** Connect multiple existing Usuario documents */
  connect?: InputMaybe<Array<UsuarioConnectInput>>;
  /** Create and connect multiple Usuario documents */
  create?: InputMaybe<Array<UsuarioCreateInput>>;
  /** Delete multiple Usuario documents */
  delete?: InputMaybe<Array<UsuarioWhereUniqueInput>>;
  /** Disconnect multiple Usuario documents */
  disconnect?: InputMaybe<Array<UsuarioWhereUniqueInput>>;
  /** Override currently-connected documents with multiple existing Usuario documents */
  set?: InputMaybe<Array<UsuarioWhereUniqueInput>>;
  /** Update multiple Usuario documents */
  update?: InputMaybe<Array<UsuarioUpdateWithNestedWhereUniqueInput>>;
  /** Upsert multiple Usuario documents */
  upsert?: InputMaybe<Array<UsuarioUpsertWithNestedWhereUniqueInput>>;
};

export type UsuarioUpdateManyInput = {
  ativo?: InputMaybe<Scalars['Boolean']>;
  description?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
};

export type UsuarioUpdateManyWithNestedWhereInput = {
  /** Update many input */
  data: UsuarioUpdateManyInput;
  /** Document search */
  where: UsuarioWhereInput;
};

export type UsuarioUpdateOneInlineInput = {
  /** Connect existing Usuario document */
  connect?: InputMaybe<UsuarioWhereUniqueInput>;
  /** Create and connect one Usuario document */
  create?: InputMaybe<UsuarioCreateInput>;
  /** Delete currently connected Usuario document */
  delete?: InputMaybe<Scalars['Boolean']>;
  /** Disconnect currently connected Usuario document */
  disconnect?: InputMaybe<Scalars['Boolean']>;
  /** Update single Usuario document */
  update?: InputMaybe<UsuarioUpdateWithNestedWhereUniqueInput>;
  /** Upsert single Usuario document */
  upsert?: InputMaybe<UsuarioUpsertWithNestedWhereUniqueInput>;
};

export type UsuarioUpdateWithNestedWhereUniqueInput = {
  /** Document to update */
  data: UsuarioUpdateInput;
  /** Unique document search */
  where: UsuarioWhereUniqueInput;
};

export type UsuarioUpsertInput = {
  /** Create document if it didn't exist */
  create: UsuarioCreateInput;
  /** Update document if it exists */
  update: UsuarioUpdateInput;
};

export type UsuarioUpsertWithNestedWhereUniqueInput = {
  /** Upsert data */
  data: UsuarioUpsertInput;
  /** Unique document search */
  where: UsuarioWhereUniqueInput;
};

/** This contains a set of filters that can be used to compare values internally */
export type UsuarioWhereComparatorInput = {
  /** This field can be used to request to check if the entry is outdated by internal comparison */
  outdated_to?: InputMaybe<Scalars['Boolean']>;
};

/** Identifies documents */
export type UsuarioWhereInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<UsuarioWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<UsuarioWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<UsuarioWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars['String']>;
  ativo?: InputMaybe<Scalars['Boolean']>;
  /** Any other value that exists and is not equal to the given value. */
  ativo_not?: InputMaybe<Scalars['Boolean']>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  createdAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  createdAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  /** All values less than the given value. */
  createdAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  createdAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** Any other value that exists and is not equal to the given value. */
  createdAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  createdBy?: InputMaybe<UserWhereInput>;
  description?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  description_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  description_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  description_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** Any other value that exists and is not equal to the given value. */
  description_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  description_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  description_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  description_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values not starting with the given string. */
  description_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  description_starts_with?: InputMaybe<Scalars['String']>;
  documentInStages_every?: InputMaybe<UsuarioWhereStageInput>;
  documentInStages_none?: InputMaybe<UsuarioWhereStageInput>;
  documentInStages_some?: InputMaybe<UsuarioWhereStageInput>;
  id?: InputMaybe<Scalars['ID']>;
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars['ID']>;
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars['ID']>;
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** Any other value that exists and is not equal to the given value. */
  id_not?: InputMaybe<Scalars['ID']>;
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars['ID']>;
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars['ID']>;
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars['ID']>;
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars['ID']>;
  image?: InputMaybe<AssetWhereInput>;
  name?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  name_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  name_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  name_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** Any other value that exists and is not equal to the given value. */
  name_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  name_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  name_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  name_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values not starting with the given string. */
  name_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  name_starts_with?: InputMaybe<Scalars['String']>;
  posts_every?: InputMaybe<PostWhereInput>;
  posts_none?: InputMaybe<PostWhereInput>;
  posts_some?: InputMaybe<PostWhereInput>;
  publishedAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  publishedAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  publishedAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  publishedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  /** All values less than the given value. */
  publishedAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  publishedAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** Any other value that exists and is not equal to the given value. */
  publishedAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  publishedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  publishedBy?: InputMaybe<UserWhereInput>;
  scheduledIn_every?: InputMaybe<ScheduledOperationWhereInput>;
  scheduledIn_none?: InputMaybe<ScheduledOperationWhereInput>;
  scheduledIn_some?: InputMaybe<ScheduledOperationWhereInput>;
  slug?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  slug_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  slug_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  slug_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** Any other value that exists and is not equal to the given value. */
  slug_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  slug_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  slug_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  slug_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values not starting with the given string. */
  slug_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  slug_starts_with?: InputMaybe<Scalars['String']>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  updatedAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  updatedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  /** All values less than the given value. */
  updatedAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** Any other value that exists and is not equal to the given value. */
  updatedAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  updatedBy?: InputMaybe<UserWhereInput>;
};

/** The document in stages filter allows specifying a stage entry to cross compare the same document between different stages */
export type UsuarioWhereStageInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<UsuarioWhereStageInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<UsuarioWhereStageInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<UsuarioWhereStageInput>>;
  /** This field contains fields which can be set as true or false to specify an internal comparison */
  compareWithParent?: InputMaybe<UsuarioWhereComparatorInput>;
  /** Specify the stage to compare with */
  stage?: InputMaybe<Stage>;
};

/** References Usuario record uniquely */
export type UsuarioWhereUniqueInput = {
  id?: InputMaybe<Scalars['ID']>;
  slug?: InputMaybe<Scalars['String']>;
};

export type Version = {
  __typename?: 'Version';
  createdAt: Scalars['DateTime'];
  id: Scalars['ID'];
  revision: Scalars['Int'];
  stage: Stage;
};

export type VersionWhereInput = {
  id: Scalars['ID'];
  revision: Scalars['Int'];
  stage: Stage;
};

export enum _FilterKind {
  And = 'AND',
  Not = 'NOT',
  Or = 'OR',
  Contains = 'contains',
  ContainsAll = 'contains_all',
  ContainsNone = 'contains_none',
  ContainsSome = 'contains_some',
  EndsWith = 'ends_with',
  Eq = 'eq',
  EqNot = 'eq_not',
  Gt = 'gt',
  Gte = 'gte',
  In = 'in',
  JsonPathExists = 'json_path_exists',
  JsonValueRecursive = 'json_value_recursive',
  Lt = 'lt',
  Lte = 'lte',
  NotContains = 'not_contains',
  NotEndsWith = 'not_ends_with',
  NotIn = 'not_in',
  NotStartsWith = 'not_starts_with',
  RelationalEvery = 'relational_every',
  RelationalNone = 'relational_none',
  RelationalSingle = 'relational_single',
  RelationalSome = 'relational_some',
  Search = 'search',
  StartsWith = 'starts_with',
  UnionEmpty = 'union_empty',
  UnionEvery = 'union_every',
  UnionNone = 'union_none',
  UnionSingle = 'union_single',
  UnionSome = 'union_some'
}

export enum _MutationInputFieldKind {
  Enum = 'enum',
  Relation = 'relation',
  RichText = 'richText',
  RichTextWithEmbeds = 'richTextWithEmbeds',
  Scalar = 'scalar',
  Union = 'union',
  Virtual = 'virtual'
}

export enum _MutationKind {
  Create = 'create',
  Delete = 'delete',
  DeleteMany = 'deleteMany',
  Publish = 'publish',
  PublishMany = 'publishMany',
  SchedulePublish = 'schedulePublish',
  ScheduleUnpublish = 'scheduleUnpublish',
  Unpublish = 'unpublish',
  UnpublishMany = 'unpublishMany',
  Update = 'update',
  UpdateMany = 'updateMany',
  Upsert = 'upsert'
}

export enum _OrderDirection {
  Asc = 'asc',
  Desc = 'desc'
}

export enum _RelationInputCardinality {
  Many = 'many',
  One = 'one'
}

export enum _RelationInputKind {
  Create = 'create',
  Update = 'update'
}

export enum _RelationKind {
  Regular = 'regular',
  Union = 'union'
}

export enum _SystemDateTimeFieldVariation {
  Base = 'base',
  Combined = 'combined',
  Localization = 'localization'
}

export type CreateSubscriberMutationVariables = Exact<{
  email: Scalars['String'];
}>;


export type CreateSubscriberMutation = { __typename?: 'Mutation', createSubscriber?: { __typename?: 'Subscriber', id: string } | null };

export type GetApoiadoresQueryQueryVariables = Exact<{ [key: string]: never; }>;


export type GetApoiadoresQueryQuery = { __typename?: 'Query', apoiadores: Array<{ __typename?: 'Apoiador', ativo: boolean, name: string, slug: string, url?: string | null, id: string }> };

export type GetTelefoneCategoriaAllQueryVariables = Exact<{ [key: string]: never; }>;


export type GetTelefoneCategoriaAllQuery = { __typename?: 'Query', telefoneCategorias: Array<{ __typename?: 'TelefoneCategoria', id: string, name: string, telefoneUtil: Array<{ __typename?: 'TelefonesUteis', id: string, descricao: string, telefones: Array<{ __typename?: 'Itemtelefone', id: string, linkPhone: string, numero?: string | null, ativo?: boolean | null }> }> }> };

export type GetFarmaciaBySlugQueryVariables = Exact<{
  slug?: InputMaybe<Scalars['String']>;
}>;


export type GetFarmaciaBySlugQuery = { __typename?: 'Query', farmacia?: { __typename?: 'Farmacia', id: string, slug: string, urllogo: string, name: string, phone: number, whatsapp?: number | null, instagram?: string | null, description?: string | null, street: string, neighborhood: string, zipCode?: number | null, city: string, email?: string | null, fazentrega?: boolean | null, thumbnail?: { __typename?: 'Asset', url: string } | null, programas: Array<{ __typename?: 'Itemprograma', name: string, ativo?: boolean | null, id: string }> } | null };

export type GetFarmaciasAllQueryVariables = Exact<{ [key: string]: never; }>;


export type GetFarmaciasAllQuery = { __typename?: 'Query', farmacias: Array<{ __typename?: 'Farmacia', id: string, slug: string, name: string, urllogo: string, neighborhood: string, phone: number, thumbnail?: { __typename?: 'Asset', url: string } | null }> };

export type GetFarmaciasQueryVariables = Exact<{ [key: string]: never; }>;


export type GetFarmaciasQuery = { __typename?: 'Query', farmacias: Array<{ __typename?: 'Farmacia', id: string, slug: string, name: string, urllogo: string, neighborhood: string, phone: number, thumbnail?: { __typename?: 'Asset', url: string } | null }> };

export type GetPlantaoByIdQueryVariables = Exact<{
  id?: InputMaybe<Scalars['ID']>;
}>;


export type GetPlantaoByIdQuery = { __typename?: 'Query', plantao?: { __typename?: 'Plantao', farmacias?: { __typename?: 'Farmacia', id: string, email?: string | null, description?: string | null, instagram?: string | null, name: string, neighborhood: string, phone: number, street: string, urllogo: string, whatsapp?: number | null, slug: string, thumbnail?: { __typename?: 'Asset', url: string } | null, programas: Array<{ __typename?: 'Itemprograma', name: string, ativo?: boolean | null, id: string }> } | null } | null };

export type GetPlantoesDateEndQueryVariables = Exact<{
  end?: InputMaybe<Scalars['DateTime']>;
}>;


export type GetPlantoesDateEndQuery = { __typename?: 'Query', plantoes: Array<{ __typename?: 'Plantao', id: string, datetimestart: any, datetimeend: any, farmacias?: { __typename?: 'Farmacia', id: string, name: string, phone: number, neighborhood: string, street: string, slug: string, urllogo: string, thumbnail?: { __typename?: 'Asset', url: string } | null } | null }> };

export type GetPlantoesStartSkipQueryVariables = Exact<{
  end?: InputMaybe<Scalars['DateTime']>;
}>;


export type GetPlantoesStartSkipQuery = { __typename?: 'Query', plantoes: Array<{ __typename?: 'Plantao', id: string, datetimestart: any, datetimeend: any, farmacias?: { __typename?: 'Farmacia', id: string, name: string, neighborhood: string, phone: number } | null }> };

export type GetPostBySlugQueryVariables = Exact<{
  slug?: InputMaybe<Scalars['String']>;
}>;


export type GetPostBySlugQuery = { __typename?: 'Query', post?: { __typename?: 'Post', category: string, publishedAt?: any | null, slug: string, title: string, views?: number | null, content?: { __typename?: 'RichText', html: string } | null, thumbnail: { __typename?: 'Asset', url: string }, author?: { __typename?: 'Usuario', name: string } | null } | null };

export type GetPostsQueryQueryVariables = Exact<{ [key: string]: never; }>;


export type GetPostsQueryQuery = { __typename?: 'Query', posts: Array<{ __typename?: 'Post', title: string, slug: string, id: string, views?: number | null, thumbnail: { __typename?: 'Asset', url: string }, author?: { __typename?: 'Usuario', name: string, slug: string } | null, content?: { __typename?: 'RichText', html: string } | null }> };

export type GetProdutoBySlugQueryVariables = Exact<{
  slug?: InputMaybe<Scalars['String']>;
}>;


export type GetProdutoBySlugQuery = { __typename?: 'Query', produto?: { __typename?: 'Produto', id: string, name: string, price: number, slug: string, urlstore: string, description?: { __typename?: 'RichText', raw: any, text: string, html: string } | null, image: { __typename?: 'Asset', url: string } } | null };

export type GetProdutosQueryVariables = Exact<{ [key: string]: never; }>;


export type GetProdutosQuery = { __typename?: 'Query', produtos: Array<{ __typename?: 'Produto', id: string, name: string, price: number, promotion?: number | null, slug: string, urlstore: string, description?: { __typename?: 'RichText', html: string, text: string } | null, image: { __typename?: 'Asset', url: string } }> };

export type SuperHomeQueryVariables = Exact<{
  end?: InputMaybe<Scalars['DateTime']>;
}>;


export type SuperHomeQuery = { __typename?: 'Query', plantoes: Array<{ __typename?: 'Plantao', id: string, datetimestart: any, datetimeend: any, farmacias?: { __typename?: 'Farmacia', id: string, name: string, phone: number, neighborhood: string, street: string, slug: string, urllogo: string, thumbnail?: { __typename?: 'Asset', url: string } | null } | null }>, farmacias: Array<{ __typename?: 'Farmacia', id: string, slug: string, name: string, urllogo: string, neighborhood: string, phone: number, thumbnail?: { __typename?: 'Asset', url: string } | null }>, apoiadores: Array<{ __typename?: 'Apoiador', ativo: boolean, name: string, slug: string, url?: string | null, id: string }>, posts: Array<{ __typename?: 'Post', title: string, slug: string, id: string, views?: number | null, thumbnail: { __typename?: 'Asset', url: string } }> };


export const CreateSubscriberDocument = gql`
    mutation CreateSubscriber($email: String!) {
  createSubscriber(data: {email: $email}) {
    id
  }
}
    `;
export type CreateSubscriberMutationFn = Apollo.MutationFunction<CreateSubscriberMutation, CreateSubscriberMutationVariables>;

/**
 * __useCreateSubscriberMutation__
 *
 * To run a mutation, you first call `useCreateSubscriberMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateSubscriberMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createSubscriberMutation, { data, loading, error }] = useCreateSubscriberMutation({
 *   variables: {
 *      email: // value for 'email'
 *   },
 * });
 */
export function useCreateSubscriberMutation(baseOptions?: Apollo.MutationHookOptions<CreateSubscriberMutation, CreateSubscriberMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreateSubscriberMutation, CreateSubscriberMutationVariables>(CreateSubscriberDocument, options);
      }
export type CreateSubscriberMutationHookResult = ReturnType<typeof useCreateSubscriberMutation>;
export type CreateSubscriberMutationResult = Apollo.MutationResult<CreateSubscriberMutation>;
export type CreateSubscriberMutationOptions = Apollo.BaseMutationOptions<CreateSubscriberMutation, CreateSubscriberMutationVariables>;
export const GetApoiadoresQueryDocument = gql`
    query GetApoiadoresQuery {
  apoiadores(last: 20) {
    ativo
    name
    slug
    url
    id
  }
}
    `;

/**
 * __useGetApoiadoresQueryQuery__
 *
 * To run a query within a React component, call `useGetApoiadoresQueryQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetApoiadoresQueryQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetApoiadoresQueryQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetApoiadoresQueryQuery(baseOptions?: Apollo.QueryHookOptions<GetApoiadoresQueryQuery, GetApoiadoresQueryQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetApoiadoresQueryQuery, GetApoiadoresQueryQueryVariables>(GetApoiadoresQueryDocument, options);
      }
export function useGetApoiadoresQueryLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetApoiadoresQueryQuery, GetApoiadoresQueryQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetApoiadoresQueryQuery, GetApoiadoresQueryQueryVariables>(GetApoiadoresQueryDocument, options);
        }
export type GetApoiadoresQueryQueryHookResult = ReturnType<typeof useGetApoiadoresQueryQuery>;
export type GetApoiadoresQueryLazyQueryHookResult = ReturnType<typeof useGetApoiadoresQueryLazyQuery>;
export type GetApoiadoresQueryQueryResult = Apollo.QueryResult<GetApoiadoresQueryQuery, GetApoiadoresQueryQueryVariables>;
export const GetTelefoneCategoriaAllDocument = gql`
    query GetTelefoneCategoriaAll {
  telefoneCategorias(stage: PUBLISHED, last: 80) {
    id
    name
    telefoneUtil {
      id
      descricao
      telefones {
        ... on Itemtelefone {
          id
          linkPhone
          numero
          ativo
        }
      }
    }
  }
}
    `;

/**
 * __useGetTelefoneCategoriaAllQuery__
 *
 * To run a query within a React component, call `useGetTelefoneCategoriaAllQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetTelefoneCategoriaAllQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetTelefoneCategoriaAllQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetTelefoneCategoriaAllQuery(baseOptions?: Apollo.QueryHookOptions<GetTelefoneCategoriaAllQuery, GetTelefoneCategoriaAllQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetTelefoneCategoriaAllQuery, GetTelefoneCategoriaAllQueryVariables>(GetTelefoneCategoriaAllDocument, options);
      }
export function useGetTelefoneCategoriaAllLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetTelefoneCategoriaAllQuery, GetTelefoneCategoriaAllQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetTelefoneCategoriaAllQuery, GetTelefoneCategoriaAllQueryVariables>(GetTelefoneCategoriaAllDocument, options);
        }
export type GetTelefoneCategoriaAllQueryHookResult = ReturnType<typeof useGetTelefoneCategoriaAllQuery>;
export type GetTelefoneCategoriaAllLazyQueryHookResult = ReturnType<typeof useGetTelefoneCategoriaAllLazyQuery>;
export type GetTelefoneCategoriaAllQueryResult = Apollo.QueryResult<GetTelefoneCategoriaAllQuery, GetTelefoneCategoriaAllQueryVariables>;
export const GetFarmaciaBySlugDocument = gql`
    query GetFarmaciaBySlug($slug: String) {
  farmacia(where: {slug: $slug}) {
    id
    slug
    urllogo
    name
    phone
    whatsapp
    instagram
    description
    street
    neighborhood
    zipCode
    city
    email
    fazentrega
    thumbnail {
      url
    }
    programas {
      ... on Itemprograma {
        name
        ativo
        id
      }
    }
  }
}
    `;

/**
 * __useGetFarmaciaBySlugQuery__
 *
 * To run a query within a React component, call `useGetFarmaciaBySlugQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetFarmaciaBySlugQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetFarmaciaBySlugQuery({
 *   variables: {
 *      slug: // value for 'slug'
 *   },
 * });
 */
export function useGetFarmaciaBySlugQuery(baseOptions?: Apollo.QueryHookOptions<GetFarmaciaBySlugQuery, GetFarmaciaBySlugQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetFarmaciaBySlugQuery, GetFarmaciaBySlugQueryVariables>(GetFarmaciaBySlugDocument, options);
      }
export function useGetFarmaciaBySlugLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetFarmaciaBySlugQuery, GetFarmaciaBySlugQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetFarmaciaBySlugQuery, GetFarmaciaBySlugQueryVariables>(GetFarmaciaBySlugDocument, options);
        }
export type GetFarmaciaBySlugQueryHookResult = ReturnType<typeof useGetFarmaciaBySlugQuery>;
export type GetFarmaciaBySlugLazyQueryHookResult = ReturnType<typeof useGetFarmaciaBySlugLazyQuery>;
export type GetFarmaciaBySlugQueryResult = Apollo.QueryResult<GetFarmaciaBySlugQuery, GetFarmaciaBySlugQueryVariables>;
export const GetFarmaciasAllDocument = gql`
    query GetFarmaciasAll {
  farmacias(stage: PUBLISHED, last: 20) {
    id
    slug
    name
    urllogo
    neighborhood
    phone
    thumbnail {
      url
    }
  }
}
    `;

/**
 * __useGetFarmaciasAllQuery__
 *
 * To run a query within a React component, call `useGetFarmaciasAllQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetFarmaciasAllQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetFarmaciasAllQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetFarmaciasAllQuery(baseOptions?: Apollo.QueryHookOptions<GetFarmaciasAllQuery, GetFarmaciasAllQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetFarmaciasAllQuery, GetFarmaciasAllQueryVariables>(GetFarmaciasAllDocument, options);
      }
export function useGetFarmaciasAllLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetFarmaciasAllQuery, GetFarmaciasAllQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetFarmaciasAllQuery, GetFarmaciasAllQueryVariables>(GetFarmaciasAllDocument, options);
        }
export type GetFarmaciasAllQueryHookResult = ReturnType<typeof useGetFarmaciasAllQuery>;
export type GetFarmaciasAllLazyQueryHookResult = ReturnType<typeof useGetFarmaciasAllLazyQuery>;
export type GetFarmaciasAllQueryResult = Apollo.QueryResult<GetFarmaciasAllQuery, GetFarmaciasAllQueryVariables>;
export const GetFarmaciasDocument = gql`
    query GetFarmacias {
  farmacias(stage: PUBLISHED, first: 5) {
    id
    slug
    name
    urllogo
    neighborhood
    phone
    thumbnail {
      url
    }
  }
}
    `;

/**
 * __useGetFarmaciasQuery__
 *
 * To run a query within a React component, call `useGetFarmaciasQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetFarmaciasQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetFarmaciasQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetFarmaciasQuery(baseOptions?: Apollo.QueryHookOptions<GetFarmaciasQuery, GetFarmaciasQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetFarmaciasQuery, GetFarmaciasQueryVariables>(GetFarmaciasDocument, options);
      }
export function useGetFarmaciasLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetFarmaciasQuery, GetFarmaciasQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetFarmaciasQuery, GetFarmaciasQueryVariables>(GetFarmaciasDocument, options);
        }
export type GetFarmaciasQueryHookResult = ReturnType<typeof useGetFarmaciasQuery>;
export type GetFarmaciasLazyQueryHookResult = ReturnType<typeof useGetFarmaciasLazyQuery>;
export type GetFarmaciasQueryResult = Apollo.QueryResult<GetFarmaciasQuery, GetFarmaciasQueryVariables>;
export const GetPlantaoByIdDocument = gql`
    query GetPlantaoById($id: ID) {
  plantao(where: {id: $id}) {
    farmacias {
      ... on Farmacia {
        id
        email
        description
        instagram
        name
        neighborhood
        phone
        street
        urllogo
        whatsapp
        slug
        thumbnail {
          url
        }
        programas {
          ... on Itemprograma {
            name
            ativo
            id
          }
        }
      }
    }
  }
}
    `;

/**
 * __useGetPlantaoByIdQuery__
 *
 * To run a query within a React component, call `useGetPlantaoByIdQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetPlantaoByIdQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetPlantaoByIdQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useGetPlantaoByIdQuery(baseOptions?: Apollo.QueryHookOptions<GetPlantaoByIdQuery, GetPlantaoByIdQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetPlantaoByIdQuery, GetPlantaoByIdQueryVariables>(GetPlantaoByIdDocument, options);
      }
export function useGetPlantaoByIdLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetPlantaoByIdQuery, GetPlantaoByIdQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetPlantaoByIdQuery, GetPlantaoByIdQueryVariables>(GetPlantaoByIdDocument, options);
        }
export type GetPlantaoByIdQueryHookResult = ReturnType<typeof useGetPlantaoByIdQuery>;
export type GetPlantaoByIdLazyQueryHookResult = ReturnType<typeof useGetPlantaoByIdLazyQuery>;
export type GetPlantaoByIdQueryResult = Apollo.QueryResult<GetPlantaoByIdQuery, GetPlantaoByIdQueryVariables>;
export const GetPlantoesDateEndDocument = gql`
    query GetPlantoesDateEnd($end: DateTime) {
  plantoes(where: {datetimeend_gte: $end}) {
    id
    datetimestart
    datetimeend
    farmacias {
      ... on Farmacia {
        id
        name
        phone
        neighborhood
        street
        slug
        urllogo
        thumbnail {
          url
        }
      }
    }
  }
}
    `;

/**
 * __useGetPlantoesDateEndQuery__
 *
 * To run a query within a React component, call `useGetPlantoesDateEndQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetPlantoesDateEndQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetPlantoesDateEndQuery({
 *   variables: {
 *      end: // value for 'end'
 *   },
 * });
 */
export function useGetPlantoesDateEndQuery(baseOptions?: Apollo.QueryHookOptions<GetPlantoesDateEndQuery, GetPlantoesDateEndQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetPlantoesDateEndQuery, GetPlantoesDateEndQueryVariables>(GetPlantoesDateEndDocument, options);
      }
export function useGetPlantoesDateEndLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetPlantoesDateEndQuery, GetPlantoesDateEndQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetPlantoesDateEndQuery, GetPlantoesDateEndQueryVariables>(GetPlantoesDateEndDocument, options);
        }
export type GetPlantoesDateEndQueryHookResult = ReturnType<typeof useGetPlantoesDateEndQuery>;
export type GetPlantoesDateEndLazyQueryHookResult = ReturnType<typeof useGetPlantoesDateEndLazyQuery>;
export type GetPlantoesDateEndQueryResult = Apollo.QueryResult<GetPlantoesDateEndQuery, GetPlantoesDateEndQueryVariables>;
export const GetPlantoesStartSkipDocument = gql`
    query GetPlantoesStartSkip($end: DateTime) {
  plantoes(where: {datetimeend_gte: $end}, skip: 3) {
    id
    datetimestart
    datetimeend
    farmacias {
      ... on Farmacia {
        id
        name
        neighborhood
        phone
      }
    }
  }
}
    `;

/**
 * __useGetPlantoesStartSkipQuery__
 *
 * To run a query within a React component, call `useGetPlantoesStartSkipQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetPlantoesStartSkipQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetPlantoesStartSkipQuery({
 *   variables: {
 *      end: // value for 'end'
 *   },
 * });
 */
export function useGetPlantoesStartSkipQuery(baseOptions?: Apollo.QueryHookOptions<GetPlantoesStartSkipQuery, GetPlantoesStartSkipQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetPlantoesStartSkipQuery, GetPlantoesStartSkipQueryVariables>(GetPlantoesStartSkipDocument, options);
      }
export function useGetPlantoesStartSkipLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetPlantoesStartSkipQuery, GetPlantoesStartSkipQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetPlantoesStartSkipQuery, GetPlantoesStartSkipQueryVariables>(GetPlantoesStartSkipDocument, options);
        }
export type GetPlantoesStartSkipQueryHookResult = ReturnType<typeof useGetPlantoesStartSkipQuery>;
export type GetPlantoesStartSkipLazyQueryHookResult = ReturnType<typeof useGetPlantoesStartSkipLazyQuery>;
export type GetPlantoesStartSkipQueryResult = Apollo.QueryResult<GetPlantoesStartSkipQuery, GetPlantoesStartSkipQueryVariables>;
export const GetPostBySlugDocument = gql`
    query GetPostBySlug($slug: String) {
  post(where: {slug: $slug}) {
    category
    content {
      html
    }
    publishedAt
    slug
    title
    views
    thumbnail {
      url
    }
    author {
      name
    }
  }
}
    `;

/**
 * __useGetPostBySlugQuery__
 *
 * To run a query within a React component, call `useGetPostBySlugQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetPostBySlugQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetPostBySlugQuery({
 *   variables: {
 *      slug: // value for 'slug'
 *   },
 * });
 */
export function useGetPostBySlugQuery(baseOptions?: Apollo.QueryHookOptions<GetPostBySlugQuery, GetPostBySlugQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetPostBySlugQuery, GetPostBySlugQueryVariables>(GetPostBySlugDocument, options);
      }
export function useGetPostBySlugLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetPostBySlugQuery, GetPostBySlugQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetPostBySlugQuery, GetPostBySlugQueryVariables>(GetPostBySlugDocument, options);
        }
export type GetPostBySlugQueryHookResult = ReturnType<typeof useGetPostBySlugQuery>;
export type GetPostBySlugLazyQueryHookResult = ReturnType<typeof useGetPostBySlugLazyQuery>;
export type GetPostBySlugQueryResult = Apollo.QueryResult<GetPostBySlugQuery, GetPostBySlugQueryVariables>;
export const GetPostsQueryDocument = gql`
    query GetPostsQuery {
  posts(orderBy: publishedAt_ASC) {
    title
    thumbnail {
      url
    }
    slug
    id
    author {
      name
      slug
    }
    content {
      html
    }
    views
  }
}
    `;

/**
 * __useGetPostsQueryQuery__
 *
 * To run a query within a React component, call `useGetPostsQueryQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetPostsQueryQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetPostsQueryQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetPostsQueryQuery(baseOptions?: Apollo.QueryHookOptions<GetPostsQueryQuery, GetPostsQueryQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetPostsQueryQuery, GetPostsQueryQueryVariables>(GetPostsQueryDocument, options);
      }
export function useGetPostsQueryLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetPostsQueryQuery, GetPostsQueryQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetPostsQueryQuery, GetPostsQueryQueryVariables>(GetPostsQueryDocument, options);
        }
export type GetPostsQueryQueryHookResult = ReturnType<typeof useGetPostsQueryQuery>;
export type GetPostsQueryLazyQueryHookResult = ReturnType<typeof useGetPostsQueryLazyQuery>;
export type GetPostsQueryQueryResult = Apollo.QueryResult<GetPostsQueryQuery, GetPostsQueryQueryVariables>;
export const GetProdutoBySlugDocument = gql`
    query GetProdutoBySlug($slug: String) {
  produto(where: {slug: $slug}) {
    description {
      raw
      text
      html
    }
    id
    image {
      url
    }
    name
    price
    slug
    urlstore
  }
}
    `;

/**
 * __useGetProdutoBySlugQuery__
 *
 * To run a query within a React component, call `useGetProdutoBySlugQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetProdutoBySlugQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetProdutoBySlugQuery({
 *   variables: {
 *      slug: // value for 'slug'
 *   },
 * });
 */
export function useGetProdutoBySlugQuery(baseOptions?: Apollo.QueryHookOptions<GetProdutoBySlugQuery, GetProdutoBySlugQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetProdutoBySlugQuery, GetProdutoBySlugQueryVariables>(GetProdutoBySlugDocument, options);
      }
export function useGetProdutoBySlugLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetProdutoBySlugQuery, GetProdutoBySlugQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetProdutoBySlugQuery, GetProdutoBySlugQueryVariables>(GetProdutoBySlugDocument, options);
        }
export type GetProdutoBySlugQueryHookResult = ReturnType<typeof useGetProdutoBySlugQuery>;
export type GetProdutoBySlugLazyQueryHookResult = ReturnType<typeof useGetProdutoBySlugLazyQuery>;
export type GetProdutoBySlugQueryResult = Apollo.QueryResult<GetProdutoBySlugQuery, GetProdutoBySlugQueryVariables>;
export const GetProdutosDocument = gql`
    query GetProdutos {
  produtos {
    description {
      html
      text
    }
    id
    name
    price
    promotion
    slug
    urlstore
    image {
      url
    }
  }
}
    `;

/**
 * __useGetProdutosQuery__
 *
 * To run a query within a React component, call `useGetProdutosQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetProdutosQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetProdutosQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetProdutosQuery(baseOptions?: Apollo.QueryHookOptions<GetProdutosQuery, GetProdutosQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetProdutosQuery, GetProdutosQueryVariables>(GetProdutosDocument, options);
      }
export function useGetProdutosLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetProdutosQuery, GetProdutosQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetProdutosQuery, GetProdutosQueryVariables>(GetProdutosDocument, options);
        }
export type GetProdutosQueryHookResult = ReturnType<typeof useGetProdutosQuery>;
export type GetProdutosLazyQueryHookResult = ReturnType<typeof useGetProdutosLazyQuery>;
export type GetProdutosQueryResult = Apollo.QueryResult<GetProdutosQuery, GetProdutosQueryVariables>;
export const SuperHomeDocument = gql`
    query SuperHome($end: DateTime) {
  plantoes(where: {datetimeend_gte: $end}, first: 3) {
    id
    datetimestart
    datetimeend
    farmacias {
      ... on Farmacia {
        id
        name
        phone
        neighborhood
        street
        slug
        urllogo
        thumbnail {
          url
        }
      }
    }
  }
  farmacias(stage: PUBLISHED, first: 5) {
    id
    slug
    name
    urllogo
    neighborhood
    phone
    thumbnail {
      url
    }
  }
  apoiadores(last: 20) {
    ativo
    name
    slug
    url
    id
  }
  posts(orderBy: publishedAt_ASC) {
    title
    thumbnail {
      url
    }
    slug
    id
    views
  }
}
    `;

/**
 * __useSuperHomeQuery__
 *
 * To run a query within a React component, call `useSuperHomeQuery` and pass it any options that fit your needs.
 * When your component renders, `useSuperHomeQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useSuperHomeQuery({
 *   variables: {
 *      end: // value for 'end'
 *   },
 * });
 */
export function useSuperHomeQuery(baseOptions?: Apollo.QueryHookOptions<SuperHomeQuery, SuperHomeQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<SuperHomeQuery, SuperHomeQueryVariables>(SuperHomeDocument, options);
      }
export function useSuperHomeLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<SuperHomeQuery, SuperHomeQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<SuperHomeQuery, SuperHomeQueryVariables>(SuperHomeDocument, options);
        }
export type SuperHomeQueryHookResult = ReturnType<typeof useSuperHomeQuery>;
export type SuperHomeLazyQueryHookResult = ReturnType<typeof useSuperHomeLazyQuery>;
export type SuperHomeQueryResult = Apollo.QueryResult<SuperHomeQuery, SuperHomeQueryVariables>;