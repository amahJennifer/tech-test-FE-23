export type StateDocument = {
    dateAndTime: string;
    status: string;
    username: string;
    value: string;
}

export type MetaDataDocument = {
    limit?: number | string;
    page: number;
    totalCount: number;
};
