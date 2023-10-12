import dotenv from 'dotenv';
import { checkData,ProcessData } from '../src/helper';
import { reviewJob } from '../src/types';

dotenv.config();

describe('help', () => {

    test.skip('checkData', async () => {

        const url = 'https://maps.app.goo.gl/PgxLA1mnqactUWoK8';

        const result = await checkData(url);
       
        console.log(result);

        expect(result).toBe(false);
        
    },60000)

    
})

describe('ProcessData', () => {

    let processData: ProcessData;

   beforeAll(async () => {
       
    processData = new ProcessData();
   })


   test('checkList', async () => {
       
    const res = await processData.checkList();

    expect(res.status).toBe('ok');

   })

   test.skip('updateItem', async () => {

    const reviewJob: reviewJob = {
        id: 55,
        customerId: 1154,
        customerName:'KIMGANE',
        email:'goodjennie0405@gmail.com',
        content:'Test',
        expected_dt:'2023-10-09',
        act_gb:'del',
        url:'https://maps.app.goo.gl/ffbABbuT9tNiNSqg6',
        delete_dt:'2023-10-09',
        mode: 'update',
    }
       
    const res = await processData.updateItem(reviewJob);

    expect(res.status).toBe('ok');

   })



})
