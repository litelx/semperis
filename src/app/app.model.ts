export enum Operator {
    Include = 'Include',
    Exclude = 'Exclude',
    Equals = 'Equals',
    Contains = 'Contains',
    NotContains = 'Does Not Contain',
    StartsWith = 'Starts With',
    EndsWith = 'Ends With'
}

export type DropdownValue = string[];

export enum Field {
    WorkItemType = 'Work Item Type',
    Tags = 'Tags',
    CreatedBy = 'Created By',
    Team = 'Team',
    State = 'State',
    ID = 'ID',
}

export type QueryItem = {
    [key: string]: Criteria;
};

export interface Criteria {
    field: Field,
    operation: Operator[],
    values: DropdownValue,
    isVisible: () => boolean
    isExist: () => boolean
}

export type query = {
    field: string,
    operation: Operator | undefined,
    value: number | string,
}

export type QueryFields = { [key: string]: query }