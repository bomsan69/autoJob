

export interface reviewJob {
    id: number,
    customerId: number,
    customerName: string,
    email: string,
    content: string,
    expected_dt: string,
    act_gb: string,
    mode: string,
    url: string,
    delete_dt: string
}

export interface resData {
    status: "ok" | "-1",
    payload?: any
    
}

export interface IprocessData {
   
    checkList(): Promise<resData>;
    updateItem(reviewJob: reviewJob): Promise<resData>;

    
}