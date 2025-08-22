let express = require ('express');
let app = express ();
let conn = require ('./dbconnect');
let cors = require ('cors');
let bodyParser = require ('body-parser');

let port = '8081';

app.use (express.json());
app.use (bodyParser.json());
app.use (cors());
 
app.post ('/login', function (req,res){
    let pesan = req.body; 
    conn.query('SELECT count(email) as hasil FROM user WHERE email="'+pesan.email+'"',function(err,result){
        if (err) throw err;
        console.log(result[0]['hasil'])
        console.log (pesan)
        res.json (result[0]['hasil']);
    })
})

let progress;

app.post ('/upload',bodyParser.json(), function (req,res){
    const pesan = req.body;
    const csv = pesan.map (row => Object.values(row))
    let array =[{}];
    let CleanQuery = 'DELETE FROM head_full'
    conn.query (CleanQuery);
    for (let i=0; i < (csv.length-1); i++){
        if (csv[i] != '') {
            array = csv[i];
        }
        const queries = 'INSERT INTO head_full (No,ANO,BRANCH,SEGMENT,SEGMENT_GROUP,MO_CODE,MO_NAME,INSURED_ID,INSURED_NAME,POLICYNO,TRANSACTION_TYPE,RENEWALNO,ISTYPE,INCEPTION,EXPIRY,BOOKING_DATE,EFFECTIVE_DATE,USER_INPUT,DATE_INPUT,USER_APPROVE,USER_APPROVE_DATE,REFNO,COB,TOC,TOC_DESCRIPTION,TOC_GROUP,PRODUCT,SOURCE_ID,SOURCE_NAME,CURRENCY_OC,KURS,TSI_OC,TSI,CURRENCY,PREMIUM_DIRECT_INSURED,PREMIUM_INWARD_COINSURANCE,PREMIUM_INWARD_REINSURANCE,PREMIUM_INWARD_TREATY,PREMIUM_COINSURANCE_OUT,PREMIUM_JOINT_PLACEMENT,PREMIUM_GROSS,UJROH_FEE,DISCOUNT,HANDLING_FEE_INWARD_COINSURANCE,HANDLING_FEE_COINSURANCE_OUT,HANDLING_FEE_JOINT_PLACEMENT,HANDLING_FEE_INWARD_REINSURANCE,HANDLING_FEE_INWARD_TREATY,UJROH_CEDANT_INWARD_COINSURANCE,UJROH_CEDANT_COINSURANCE_OUT,UJROH_CEDANT_JOINT_PLACEMENT,UJROH_CEDANT_INWARD_REINSURANCE,UJROH_CEDANT_INWARD_TREATY,COMMISSION_COINSURANCE_OUT,COMMISSION_JOINT_PLACEMENT,COMMISSION_INWARD_COINSURANCE,COMMISSION_INWARD_REINSURANCE,COMMISSION_INWARD_TREATY,COMMISSION_AGENT_BROKER,COMMISSION_POOL,VAT,TAX,REINSURANCE_PREMIUM_BPPDAN,REINSURANCE_PREMIUM_DECREE,'+
                        'REINSURANCE_PREMIUM_MAIPARK,REINSURANCE_PREMIUM_QUOTASHARE,REINSURANCE_PREMIUM_SURPLUS_1,REINSURANCE_PREMIUM_SURPLUS_2,REINSURANCE_PREMIUM_SURPLUS_3,REINSURANCE_PREMIUM_AUTO_FAC,REINSURANCE_PREMIUM_FAC_OUT,UJROH_CEDANT_BPPDAN,UJROH_CEDANT_DECREE,UJROH_CEDANT_MAIPARK,UJROH_CEDANT_QUOTASHARE,UJROH_CEDANT_SURPLUS_1,UJROH_CEDANT_SURPLUS_2,UJROH_CEDANT_SURPLUS_3,UJROH_CEDANT_AUTO_FAC,UJROH_CEDANT_FAC_OUT,REINSURANCE_COMMISSION_BPPDAN,REINSURANCE_COMMISSION_DECREE,REINSURANCE_COMMISSION_MAIPARK,REINSURANCE_COMMISSION_QUOTASHARE,REINSURANCE_COMMISSION_SURPLUS_1,REINSURANCE_COMMISSION_SURPLUS_2,REINSURANCE_COMMISSION_SURPLUS_3,REINSURANCE_COMMISSION_AUTO_FAC,REINSURANCE_COMMISSION_FAC_OUT,REINSURANCE_OVERRIDING_COMMISSION_BPPDAN,REINSURANCE_OVERRIDING_COMMISSION_DECREE,REINSURANCE_OVERRIDING_COMMISSION_MAIPARK,REINSURANCE_OVERRIDING_COMMISSION_QUOTASHARE,REINSURANCE_OVERRIDING_COMMISSION_SURPLUS_1,REINSURANCE_OVERRIDING_COMMISSION_SURPLUS_2,REINSURANCE_OVERRIDING_COMMISSION_SURPLUS_3,REINSURANCE_OVERRIDING_COMMISSION_AUTO_FAC,'+
                        'REINSURANCE_OVERRIDING_COMMISSION_FAC_OUT,REINSURANCE_ADJUSTMENT_BPPDAN,REINSURANCE_ADJUSTMENT_DECREE,REINSURANCE_ADJUSTMENT_MAIPARK,REINSURANCE_ADJUSTMENT_QUOTASHARE,REINSURANCE_ADJUSTMENT_SURPLUS_1,REINSURANCE_ADJUSTMENT_SURPLUS_2,REINSURANCE_ADJUSTMENT_SURPLUS_3,REINSURANCE_ADJUSTMENT_AUTO_FAC,REINSURANCE_ADJUSTMENT_FAC_OUT,REINSURANCE_ADVANCE_PROFIT_SHARING_BPPDAN,REINSURANCE_ADVANCE_PROFIT_SHARING_DECREE,REINSURANCE_ADVANCE_PROFIT_SHARING_MAIPARK,REINSURANCE_ADVANCE_PROFIT_SHARING_QUOTASHARE,REINSURANCE_ADVANCE_PROFIT_SHARING_SURPLUS_1,REINSURANCE_ADVANCE_PROFIT_SHARING_SURPLUS_2,REINSURANCE_ADVANCE_PROFIT_SHARING_SURPLUS_3,REINSURANCE_ADVANCE_PROFIT_SHARING_AUTO_FAC,REINSURANCE_ADVANCE_PROFIT_SHARING_FAC_OUT,REINSURANCE_PROFIT_SHARING_BPPDAN,REINSURANCE_PROFIT_SHARING_DECREE,REINSURANCE_PROFIT_SHARING_MAIPARK,REINSURANCE_PROFIT_SHARING_QUOTASHARE,REINSURANCE_PROFIT_SHARING_SURPLUS_1,REINSURANCE_PROFIT_SHARING_SURPLUS_2,REINSURANCE_PROFIT_SHARING_SURPLUS_3,REINSURANCE_PROFIT_SHARING_AUTO_FAC,REINSURANCE_PROFIT_SHARING_FAC_OUT,'+
                        'OTHER_PARTIES_FEE,OTHER_PARTIES_FEE_1,OTHER_PARTIES_FEE_2,POLICY_FEE,STAMP_DUTY,STAMP_DUTY_1,STAMP_DUTY_2,BACKDATED_FLAG,SHARIA_FLAG) VALUES ?;'
        conn.query (queries,[[array]])
        conn.query ('SELECT COUNT (No) as count FROM head_full', function (err,result){
        if (err) throw err;
        console.log ('panjang item :'+csv.length-1)
        let count = result[0]['count']; 
        progress = Math.round((count/(csv.length-1))*100);
        console.log(progress)
    })
    }
})

app.post ('/upload/profile', function(req,res){
    const pesan = req.body;
    const csv = pesan.map (row => Object.values(row))
    let array =[{}];
    let CleanQuery = 'DELETE FROM headprofile'
    conn.query (CleanQuery);
    for (let i=0; i < (csv.length-1); i++){
        if (csv[i] != '') {
            array = csv[i];
        }
        const queries = 'INSERT INTO headprofile (No,ID,REFID,NAME,ADDRESS_1,ADDRESS_2,ADDRESS_3,CITY,ZIPCODE,EMAIL_1,EMAIL_2,PHONE_1,PHONE_2,MOBILE_1,MOBILE_2,FAX_1,FAX_2,PROFILE_TYPE,PROFILE_TYPE_DESCRIPTION,'+
                        'PIC_NAME,PIC_TITLE,PIC_ADDRESS,PIC_PHONE,LOB,LOB_DESCRIPTION,CGROUP,CGROUP_DESCRIPTION,SCGROUP,SCGROUP_DESCRIPTION,RATING,COMPANY_TYPE,COUNTRY,COUNTRY_DESCRIPTION,'+
                        'MKT_AREA,MKT_AREA_DESCRIPTION,GENDER,BIRTH_DATE,BIRTH_PLACE,RELIGION,ID_TYPE,ID_NO,ID_NAME,ID_DATE,NICKNAME,CITIZENSHIP,EMPLOYMENT,ANNUAL_INCOME,OTHER_INCOME,COMPANY_WORKING_NAME,'+
                        'COMPANY_WORKING_ADDRESS,COMPANY_WORKING_PHONE_1,COMPANY_WORKING_PHONE_2) VALUES ?;'
        conn.query (queries,[[array]])
        conn.query ('SELECT COUNT (No) as count FROM headprofile', function (err,result){
        if (err) throw err;
        console.log ('panjang item :'+csv.length-1)
        let count = result[0]['count']; 
        progress = Math.round((count/(csv.length-1))*100);
        console.log(progress)
    })
    }
})

app.get ('/api/progress', function (req,res){
    // console.log ('hasil dari'+ progress)
    res.json (progress);
})

app.get ('/bybranch', function (req,res){
    conn.query ('SELECT * FROM premiumbybranch', function(err,result){
        if (err) throw err;
        res.json (result);
    })
})

app.get ('/bycob', function (req,res){
    conn.query ('SELECT * FROM premiumbycob', function(err,result){
        if (err) throw err
        res.json(result);
    })
})

app.get ('/bylob', function (req,res){
    conn.query ('SELECT * FROM premiumbylob;', function(err,result){
        if (err) throw err
        res.json(result);
    })
})

app.get('/legend', (req,res)=>{
    let ground = [{premi:'',date:''}]
    conn.query ('SELECT FORMAT(SUM(PREMIUM_GROSS),0) as Premi FROM head_full;', function (err,result){
        if (err) throw err;
        ground[0].premi = result[0]['Premi'];
    conn.query ('SELECT date_format(BOOKING_DATE,"%d %M %Y") as Date,'+
                'SUM(PREMIUM_GROSS) AS PREMI FROM head_full GROUP BY BOOKING_DATE '+
                'ORDER BY BOOKING_DATE DESC;', function (err,result){
        if (err) throw err;
        ground[0].date = result [0]['Date']
        res.json(ground);
    })
    })
         
})


app.listen (port , ()=>{
    console.log ('server koneksi')
})