import React from 'react'
import 'chart.js/auto'
import {Bar, Doughnut } from 'react-chartjs-2'
import ChartDataLabel from 'chartjs-plugin-datalabels';
import { getBybranch,getBycob,getBylegend,getBylob } from '../api/api'
import { useState,useEffect } from 'react'
import { Legend } from 'chart.js/auto';

const LineChart = () =>  {
    const [ByBranch,setByBranch] = useState([{}]);
    const [ByCob, setByCob] = useState ([{}]);
    const [ByLob, setByLob] = useState ([{}]);
    const [ByLegend, setByLegend] = useState ([{}]);

    useEffect(()=>{
        getBybranch().then ((result)=>setByBranch(result))
    },[])

    useEffect(()=>{
        getBycob().then ((result)=>setByCob(result))
    },[])

    useEffect(()=>{
        getBylob().then ((result)=>setByLob(result))
    },[])

    useEffect(()=>{
        getBylegend().then ((result)=>setByLegend(result))
    },[])

    console.log (ByBranch);
    console.log (ByCob);
    console.log (ByLob);
    console.log (ByLegend);

    const Branch    = ByBranch.map (result=>result.BRANCH)
    const PremiBranch = ByBranch.map (result=>result.Premium)
    const JDesc = ByBranch.map (result => result.Jdesc)

    const COB      = ByCob.map (result=>result.COB);
    const PremiCOB = ByCob.map (result=>result.Percent)
    const JClass   = ByCob.map (result=>result.JClass)

    const LOB       = ByLob.map (result=>result.LOB);
    const PremiLOB  = ByLob.map (result=>result.Percent);

    const Legend   = ByLegend.map (result=>result.premi);
    const Tanggal  = ByLegend.map (result=>result.date);

    console.log (Branch);
    console.log (PremiBranch);
    console.log (ByLegend);
// ======================================Bar Branch=====================================================
    const lab = JDesc;
    const data1 = {
                labels: lab ,
                datasets: [{
                    label:'Total '+Legend+' (dalam rupiah) asat '+Tanggal,
                    backgroundColor: 'rgba(45, 55, 56, 1)',
                    borderColor: "rgba(245, 211, 98, 1)",
                    data: PremiBranch,
                }]
            }
    const option1 = {
        maintainAspectRatio: false,
        indexAxis:'y',
        scales: {
          x: { // x-axis for values
            grid: {display: false},
            beginAtZero: false,
            ticks:{
                label:{display:false},
                font:{size:12},
                formatter: (value)=>{return Math.round((value))}
            }
          },
          y: { 
            grid: {display: true},
            ticks:{
                font:{size:12}
                
            }
            // // y-axis for categories
            // You can add specific scale options here if needed
          }
        },
        plugins:{
            Legend:{position:'right'},
            datalabels: {
                anchor:'end',
                align:'end',
                font:{size:10},
                color:"#bb2f2fff",
                formatter: (value)=>{return Math.round((value/1000000),1);}    
        }        
        }
    }
// ======================================Doughnut COB=====================================================
    const labels = JClass;
    const data = {
            labels: labels,
            datasets: [{
                labels:labels, 
                // cutout :'20%',
                // borderRadius: 20,
                backgroundColor: ['rgba(28, 117, 158, 1)','rgba(45, 55, 56, 1)','green','rgba(180, 69, 69, 1)'],
                borderColor: "rgba(211, 211, 211, 1)",
                data: PremiCOB,
            }]
        }
const option = {
    layout:{
        padding:{
            top:50,
            left: 30,
            right: 30
    }},
    spacing:10,
    plugins:{
        legend:{
          position:'bottom'
        },
        datalabels: {
            offset: 10,
            anchor:'end',
            align:'end',
            font:{size:13},
            color:"#0f0f0fff",
            formatter: (value)=>{return value +'%';
        }}        
    }
}
// ====================================BarLOB================================================
    const Label3 = LOB;
    const data2 = {
                labels: Label3 ,
                datasets: [{
                    label:'Total '+Legend+' (dalam rupiah)',
                    backgroundColor: ['rgba(45, 55, 56, 1)'],
                    borderColor: "rgba(245, 211, 98, 1)",
                    data: PremiLOB,
                }]
            }
    const option2 = {
        maintainAspectRatio: false,
        indexAxis:'y',
        plugins:{
        legend:{
          position:'bottom'
        },
        datalabels: {
            offset: 10,
            anchor:'end',
            align:'end',
            font:{size:13},
            color:"#0f0f0fff",
            formatter: (value)=>{return value +'%';
        }}        
    }
    }

// ===========================================================================================
    return (
        <div>
            <div className='Barchart' style={{width:'1000px',height:'700px', marginBottom:'10px'}}>
                <Bar data={data1} options={option1} plugins={[ChartDataLabel]}/>
            </div>
            <div className='wrapper'>
                <div className='Pie' style={{width:'400px',height:'400px'} }>
                    <Doughnut data={data} options={option} plugins={[ChartDataLabel]}></Doughnut>
                </div>
                <div className='Barchart2' style={{width:'600px',height:'400px'}}>
                    <Bar data={data2} options={option2} plugins={[ChartDataLabel]}/>
                </div>
            </div>
        </div>  
    )
}

export default LineChart;