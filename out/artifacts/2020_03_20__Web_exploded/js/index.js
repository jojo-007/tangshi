//var是variable
//document是js中的html文档对象
//document.getElementById('main'))找到id为mai的元素
//init初始化元素
var myChart=echarts.init(document.getElementById('main'));

//指定图表的配置项和数据
var option = {
    // 图标的标题
    title: {
        text: 'ECharts 入门示例'
    },
    tooltip: {},
    legend: {
        data:['销量']
    },
    // 横坐标
    xAxis: {
        data: ["衬衫","羊毛衫","雪纺衫","裤子","高跟鞋","袜子"]
    },
    yAxis: {},
    series: [
        {
            name: '销量',
            type: 'bar',    // bar 代表柱状图
            itemStyle: {
                color: new echarts.graphic.LinearGradient(
                    0, 0, 0, 1,
                    [
                        {offset: 0, color: '#83bff6'},
                        {offset: 0.5, color: '#188df0'},
                        {offset: 1, color: '#188df0'}
                    ]
                )
            },
            emphasis: {
                itemStyle: {
                    color: new echarts.graphic.LinearGradient(
                        0, 0, 0, 1,
                        [
                            {offset: 0, color: '#2378f7'},
                            {offset: 0.7, color: '#2378f7'},
                            {offset: 1, color: '#83bff6'}
                        ]
                    )
                }
            },
            data: [5, 20, 36, 10, 10, 20] // 对应的每一个的数据
        }
    ]
};

myChart.setOption(option)