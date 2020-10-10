import ReactEcharts from 'echarts-for-react'
import React from "react";


export default function  LineChart() {
    const getOption = () => {
        return {
            title: {
                text: '折线图堆叠'
            },
            tooltip: {
                trigger: 'axis'
            },
            legend: {
                data: ['邮件营销', '联盟广告', '视频广告', '直接访问', '搜索引擎']
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
                data: ['周一', '周二', '周三', '周四', '周五', '周六', '周日']
            },
            yAxis: {
                type: 'value'
            },
            series: [
                {
                    name: '直接访问',
                    type: 'line',

                    data: [320, 332, 301, 334, 390, 330, 320]
                },
                {
                    name: '搜索引擎',
                    type: 'line',

                    data: [280, 320, 290, 300, 333, 250, 360]
                }
            ]
        }
    }

    return (
        <ReactEcharts
            // @ts-ignore
            option={getOption()}
            className="echarts-for-echarts"
        />
    )
}