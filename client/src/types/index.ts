import { Address } from "cluster";

export type Dao = { 
    address: Address, 
    name: string, 
    id: string,
    visibility: boolean,
    membershipMode: string,
    description: string,
    member: number,
    Members: []
    modules: [] 
};

export type Member = { 
    address: Address, 
    id: number,
    status: number
};

export type Module = { 
    address: Address, 
    type: string,
    code: string
};

export type AddDaoFormValues = {
    name: string,
    visibility: boolean,
    //membershipMode: string,
    description: string,
    note: string
};

export type InviteDaoFormValues = {
    address: string
}