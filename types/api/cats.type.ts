import CommonRequest from "../commonRequest.type.ts";

export type GetCat = CommonRequest<undefined, { _id: string }>;

export type GetCats = CommonRequest<undefined, undefined>;

export type PostCat = CommonRequest<{ name: string; owner: string | null }, undefined>;