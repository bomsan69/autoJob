import dotenv from 'dotenv';
import { checkData,ProcessData } from './helper';
import { resData,reviewJob } from './types';
import moment from 'moment';

dotenv.config();

async function main(){

    console.log('Main function');

    const processData = new ProcessData();

    const res:resData = await processData.checkList();

    if(res.status === 'ok' && res.payload.length > 0){

        const checkList = res.payload;

        console.log('count',checkList.length);

        for (let index = 0; index < checkList.length; index++) {
            
            const element = checkList[index];

            const result = await checkData(element.url);

            const msg=`${index} : check_result : ${result}`;

            console.log(msg);

            

            if(result){

                const reviewJob: reviewJob = {
                    id: element.id,
                    customerId: element.customerId,
                    customerName:element.customerName,
                    email:element.email,
                    content:element.content,
                    expected_dt:element.expected_dt,
                    act_gb:'del',
                    url:element.url,
                    delete_dt:moment().format('YYYY-MM-DD'),
                    mode: 'update',
                }


                const res = await processData.updateItem(reviewJob);

                console.log('res',res);
            
             }


        }
    }
}

main();