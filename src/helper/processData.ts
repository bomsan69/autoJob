
import {IprocessData, resData, reviewJob} from '../types';
import axios from 'axios';
import moment from 'moment';

const start_dt=moment().subtract(30, 'days').format('YYYY-MM-DD');
const end_dt=moment().format('YYYY-MM-DD');
let headers:any={

    "content-type": "application/json",
    "Authorization": ""
   
}


class ProcessData implements IprocessData {

    async checkList(): Promise<resData> {

     
        let resData: resData = {
            status: "ok"
        }


        headers.Authorization=process.env.API_KEY
    
        console.log('basicUrl',process.env.BASIC_URL);

        const url=`${process.env.BASIC_URL}/listREviewJob.do`;
        const param={act_gb:'complete',start_dt,end_dt}
        
        const {data} = await axios.post(url,param,{headers});

    
        resData.payload=data.result;


        return resData;



    }


    async updateItem(reviewJob: reviewJob): Promise<resData> {
        let resData: resData = {
            status: "ok"
        }
        
        headers.Authorization=process.env.API_KEY

        const url=`${process.env.BASIC_URL}/updateReviewJob.do`;
       
        try {

            const {data} = await axios.post(url,reviewJob,{headers});

            console.log('data',data);

            if(data.result !="ok"){

                resData.status="-1"

            }

            
        } catch (error) {

            resData.status="-1"
            
        }
       

        return resData;

    }
    
}

export {ProcessData}