import { Operator, QueryItem, Field } from "./app.model";

export const queryTemplate: QueryItem = {
    [Field.WorkItemType]:
    {
        field: Field.WorkItemType,
        operation: [
            Operator.Equals,
            Operator.Contains,
            Operator.NotContains
        ],
        values: [
            "Backlog",
            "Bug",
            "Task"
        ],
        isExist: () => true,
        isVisible: () => true
    },
    [Field.Tags]:
    {
        field: Field.Tags,
        operation: [
            Operator.Include,
            Operator.Exclude
        ],
        values: [
            "UI",
            "DSP",
            "ADFR",
            "DB"
        ],
        isExist: () => true,
        isVisible: () => true
    },
    [Field.CreatedBy]:
    {
        field: Field.CreatedBy,
        operation: [
            Operator.Include,
            Operator.Exclude
        ],
        values: [
            "User A",
            "User B",
            "User C"
        ],
        isExist: () => true,
        isVisible: () => true
    },
    [Field.Team]: 
    {
        field: Field.Team,
        operation: [
            Operator.Include,
            Operator.Exclude
        ],
        values: [
            "User A",
            "User B",
            "User C"
        ],
        isExist: () => true,
        isVisible: () => true
    },
    [Field.State]: 
    {
        field: Field.State,
        operation: [
            Operator.Equals,
            Operator.Contains,
            Operator.NotContains
        ],
        values: [
            "New",
            "In Progress",
            "Done"
        ],
        isExist: () => true,
        isVisible: () => true
    },
    [Field.ID]:
    {
        field: Field.ID,
        operation: [
            Operator.Equals,
            Operator.StartsWith,
            Operator.EndsWith
        ],
        values: [],
        isExist: () => true,
        isVisible: () => true
    }
}