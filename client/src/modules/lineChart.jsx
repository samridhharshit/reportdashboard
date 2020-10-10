import ReactEcharts from 'echarts-for-react'
import React from "react";


export default function  LineChart() {
    const getOption = () => {
        return {
            title: {
                text: 'Data Statistics',
                top: '8%',
                left: '4%',
                right: '4%'
            },
            tooltip : {
                trigger: 'axis',
                backgroundColor: '#fff',
                axisPointer: {
                    animation: true
                },
                formatter: function (params) {
                    let rez = '<p>' + params[0].axisValue + '</p>';
                    //console.log(params); //quite useful for debug
                    params.forEach(item => {
                        //console.log(item); //quite useful for debug
                        var xx = '<div class="tooltip-format">' + '<h3 class="tooltip-h3">' + item.data + '</h3>' + '<p style="color: #282c34; text-align: left">' + item.seriesName + '</p>' + '</div>'
                        rez += xx;
                    });

                    return rez;
                }
            },
            legend: {
                top: '8%',
                textStyle: {
                    color: '#73d7ff'
                },
                data: ['Incoming data', 'No. of errors detected', 'No. of errors fixed', 'No. of errors unassigned', 'No. of errors assigned']
            },
            grid: {
                left: '3%',
                right: '4%',
                bottom: '3%',
                containLabel: true
            },
            xAxis: {
                type: 'category',
                boundaryGap: false,
                data: ['Jan', 'Feb', 'Mar', 'April', 'May', 'June', 'July', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
            },
            yAxis: {
                type: 'value'
            },
            series: [
                {
                    name: 'Incoming data',
                    type: 'line',

                    data: [320, 332, 301, 334, 390, 330, 320, 500, 350, 380, 400, 420]
                },
                {
                    name: 'No. of errors detected',
                    type: 'line',

                    data: [280, 320, 290, 300, 333, 250, 360, 380, 400, 386, 395, 350]
                }
            ]
        }
    }

    return (
        <ReactEcharts
            // @ts-ignore
            option={getOption()}
            className="linechart"
        />
    )
}