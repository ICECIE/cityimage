
$(function () {
echarts_1();
echarts_2();
echarts_4();
echarts_3();
echarts_5();
echarts_6();
echarts_7();
function echarts_1() {
        // 基于准备好的dom，初始化echarts实例
        var myChart = echarts.init(document.getElementById('echart1'));

       option = {
  title: {
    textStyle: {
      fontSize: 14,
      color: '#333'
    },
    padding: [10, 0, 0, 0]  // 调整标题与图表的距离
  },
  xAxis: {
    type: 'category',
    data: ['1999', '2000', '2001', '2002', '2003', '2004', '2005', '2006', '2007', '2008', '2009', '2010', '2011', '2012', '2013', '2014', '2015', '2016', '2017', '2018', '2019', '2020', '2021', '2022']
  },
  yAxis: {
    type: 'value'
  },
  tooltip: {
    trigger: 'axis',
    axisPointer: {
      type: 'cross'
    }
  },
  legend: {
    data: ['十堰市全年GDP/千万元', '十堰市全年人均GDP/元', '武汉市全年人均GDP/元'],
    bottom: -3 // 调整legend到图表底部的距离
    },
  series: [
    {
      data: [
        1686.222, 1801.257, 2034.368, 2331.775, 2450.489, 2929.016, 3066.3, 3384.1,
        4115.1, 4879.4, 5519.4, 7344.3, 8493.5, 9547.8, 10843.7, 12093.1, 13203.538,
        14524.85, 16667.255, 18635.76, 20127.21945, 18911.851, 21639.808, 23046.8
      ],
      type: 'bar',
      name: '十堰市全年GDP/千万元'
    },
    {
      data: [4943, 5603, 6322, 7232, 7582, 9039, 9432, 10422, 12730, 15099, 17046, 22317, 25396, 28480, 32255, 35886, 39089, 42770, 48827, 54618, 59163, 57577, 68379, 72882],
      type: 'bar',
      name: '十堰市全年人均GDP/元'
    },
    {
      data: [13862, 14473, 16501, 17927, 19538, 22378, 26567, 30801, 36068, 45466, 52481, 57805, 66512, 76986, 86014, 97538, 100714, 107902, 120880, 135877, 145545, 130599, 135251, 137772],
      type: 'bar',
      name: '武汉市全年人均GDP/元'
    }
  ]
};

        // 使用刚指定的配置项和数据显示图表。
        myChart.setOption(option);
        window.addEventListener("resize",function(){
            myChart.resize();
        });
    }
function echarts_2() {
        // 基于准备好的dom，初始化echarts实例
        var myChart = echarts.init(document.getElementById('echart2'));

      option = {
    legend: {},
    tooltip: {
      trigger: 'axis',
      showContent: false
    },
    dataset: {
      source: [
        ['year', '2012', '2013', '2014', '2015', '2016', '2017', '2018', '2019', '2020', '2021', '2022'],
        ['第一产业增加值占GDP比重', 13.9, 14.1, 13.5, 12.3, 12.3, 11.8, 11.7, 11.3, 10.7, 11.3, 11.3, 9.8, 10.4, 11.5, 11.8, 11, 10.4, 10.5, 9.4, 8.5, 8.5, 10.1, 9.6, 9.8],
        ['第二产业增加值占GDP比重', 49.4, 48.5, 48.4, 46, 44.8, 44.1, 44.5, 43.9, 39.4, 38.7, 40.1],
        ['第三产业增加值占GDP比重', 39.2, 39.8, 40.7, 43.6, 44.7, 46.5, 47, 47.6, 50.6, 51.6, 50.2]
      ]
    },
    xAxis: {
      type: 'category',
      name: '年份'
    },
    yAxis: {
      gridIndex: 0,
      name: '占比%'
    },
    grid: { top: '55%' },
    series: [
      {
        type: 'line',
        smooth: true,
        seriesLayoutBy: 'row',
        emphasis: { focus: 'series' }
      },
      {
        type: 'line',
        smooth: true,
        seriesLayoutBy: 'row',
        emphasis: { focus: 'series' }
      },
      {
        type: 'line',
        smooth: true,
        seriesLayoutBy: 'row',
        emphasis: { focus: 'series' }
      },
      {
        type: 'pie',
        id: 'pie',
        radius: '30%',
        center: ['50%', '25%'],
        emphasis: {
          focus: 'self'
        },
        label: {
          formatter: '{b}: {@2012} ({d}%)',
          color: 'gray'
        },
        encode: {
          itemName: 'year',
          value: '2012',
          tooltip: '2012'
        }
      }
    ]
  };
  myChart.on('updateAxisPointer', function (event) {
    const xAxisInfo = event.axesInfo[0];
    if (xAxisInfo) {
      const dimension = xAxisInfo.value + 1;
      myChart.setOption({
        series: {
          id: 'pie',
          label: {
            formatter: '{b}: {@[' + dimension + ']} ({d}%)'
          },
          encode: {
            value: dimension,
            tooltip: dimension
          }
        }
      });
    }
  });
      
        // 使用刚指定的配置项和数据显示图表。
        myChart.setOption(option);
        window.addEventListener("resize",function(){
            myChart.resize();
        });
    }
function echarts_5() {
        // 基于准备好的dom，初始化echarts实例
        var myChart = echarts.init(document.getElementById('echart5'));

       option = {
  title: {
    subtext: '百分比',
    left: 'center'
  },
  tooltip: {
    trigger: 'item'
  },
  legend: {
    orient: 'vertical',
    left: 'left'
  },
  series: [
    {
      name: 'Access From',
      type: 'pie',
      radius: '50%',
      data: [
        { value: 84.56, name: '中性' },
        { value: 9.85, name: '正向' },
        { value: 5.59, name: '负向' },
      ],
      emphasis: {
        itemStyle: {
          shadowBlur: 10,
          shadowOffsetX: 0,
          shadowColor: 'rgba(0, 0, 0, 0.5)'
        }
      }
    }
  ]
};

        // 使用刚指定的配置项和数据显示图表。
        myChart.setOption(option);
        window.addEventListener("resize",function(){
            myChart.resize();
        });
    }

function echarts_4() {
        // 基于准备好的dom，初始化echarts实例
        var myChart = echarts.init(document.getElementById('echart4'));

    option = {
  legend: {
    data: ['倾向']
  },
  radar: {
    indicator: [
      { name: '赞扬', max: 40000 },
      { name: '悲伤', max: 40000 },
      { name: '喜悦', max: 40000 },
      { name: '愤怒', max: 40000 },
      { name: '惊奇', max: 40000 },
      { name: '厌恶', max: 40000 },
      { name: '恐惧', max: 40000 },
    ],
    shape: 'circle', // 可以添加 shape 属性来指定雷达图的形状
    splitArea: {
      show: false
    },
    splitLine: {
      lineStyle: {
        color: ' #87CEEB' // 设置雷达图的分隔线颜色为绿色
      }
    }
  },
  series: [
    {
      name: 'Budget vs spending',
      type: 'radar',
      data: [
        {
          value: [34979, 7952, 6803, 5728, 3689, 3578, 828],
          name: 'Allocated Budget',
          areaStyle: {
            color: '#00BFFF' // 设置填充颜色为绿色，带有透明度
          },
          lineStyle: {
            color: '#00BFFF' // 设置线条颜色为绿色
          }
        },
      ]
    }
  ]
};



        // 使用刚指定的配置项和数据显示图表。
        myChart.setOption(option);
        window.addEventListener("resize",function(){
            myChart.resize();
        });
    }
function echarts_6() {
        // 基于准备好的dom，初始化echarts实例
        var myChart = echarts.init(document.getElementById('echart6'));

        var option;

    option = {
  title: {
    // 图表标题
    textStyle: {
      fontSize: 14, // 修改字体大小为14号
      fontWeight: 'bold',
      color: 'black' // 标题颜色
    },
    left: 'center' // 标题居中
  },
  xAxis: {
    type: 'category',
    boundaryGap: false,
    data: ['2009', '2010', '2011', '2012', '2013', '2014', '2015', '2016', '2017', '2018', '2019', '2020', '2021', '2022']
  },
  yAxis: [
    {
      type: 'value',
      name: '森林面积/千公顷',
      nameTextStyle: {
        color: 'green'
      }
    },
    {
      type: 'value',
      name: '森林覆盖率',
      position: 'right',
      axisLabel: {
        formatter: '{value}%'
      },
      axisLine: {
        show: true,
        lineStyle: {
          color: 'green',
          width: 2
        }
      },
      axisTick: {
        show: false
      }
    }
  ],
  series: [
    {
      data: [1095.03, 1095, 1298.91, 1298.91, 1298.91, 1298.91, 1299, 1299, 1299, 1299, 1551, 1741, 1871, 1991],
      type: 'line',
      areaStyle: {
        color: 'rgba(0, 255, 0, 0.3)'
      },
      itemStyle: {
        color: 'darkgreen'
      }
    },
    {
      data: [53, 53, 54.8, 64.72, 64.72, 64.72, 64.72, 64.72, 64.72, 64.72, 66.66, 73.5, 73.9, 65.62],
      type: 'scatter',
      yAxisIndex: 1,
      symbol: 'image://data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABwAAAA2CAYAAADUOvnEAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAA5tJREFUeNrcWE1oE0EUnp0kbWyUpCiNYEpCFSpIMdpLRTD15s2ePHixnj00N4/GoyfTg2fbiwdvvagHC1UQ66GQUIQKKgn1UAqSSFua38b3prPJZDs7s5ufKn0w7CaZ2W/fe9/73kyMRqNB3Nrj1zdn4RJ6du9T2u1a2iHYSxjP4d41oOHGQwAIwSUHIyh8/RA8XeiXh0kLGFoaXiTecw/hoTG4ZCSAaFkY0+BpsZceLtiAoV2FkepZSDk5EpppczBvpuuQCqx0YnkYcVVoqQYMyeCG+lFdaGkXeVOFNu4aEBalOBk6sbQrQF7gSdK5JXjuHXuYVIVyr0TZ0FjKDeCs6km7JYMUdrWAUVmZUBtmRnVPK+x6nIR2xomH06R35ggwJPeofWphr/W5UjPIxq8B2bKgE8C4HVHWvg+2gZjXj19PkdFztY7bk9TDCH/g6oafDPpaoMvZIRI5WyMB/0Hv++HkpTKE0kM+A+h20cPAfN4GuRyp9G+LMTW+z8rCLI8b46XO9zRcYZTde/j0AZm8WGb3Y2F9KLlE2nqYkjFLJAsDOl/lea0q55mqxXcL7YBc++bsCPMe8mUyU2ZIpnCoblca6TZA/ga2Co8PGg7UGUlEDd0ueptglbrRZLLE7poti6pCaWUo2pu1oaYI1CF9b9cCZPO3F8ikJQ/rPpQT5YETht26ss+uCIL2Y8vHwJGpA96GI5mjOlaKhowUy6BcNcgIhDviTGWCGFaqEuufWz4pgcbCh+w0gEOyOjTlTtYYlIWPYWKEsLDzOs+nhzaO1KEpd+MXpOoTUgKiNyhdy5aSMPNVqxtSsJFgza5EWA4zKtCJ2OGbLn0JSLu8+SL4G86p1Fpr7ABXdGFF/UTD4rfmFYFw4G9VAJ9SM3aF8l3yok4/J6IV9sDVb36ynmtJ2M5+CwxTYBdKNMBaocKGV2nYgkz6r+cHBP30MzAfi4Sy+BebSoPIOi8PW1PpCCvr/KOD4k9Zu0WSH0Y0+SxJ2awp/nlwKtcGyHOJ8vNHtRJzhPlsHr8MogtlVtwUU0tSM1x58upSKbfJnSKUR07GVMKkDNfXpzpv0RTHy3nZMVx5IOWdZIaPabGFvfpwpjnvfmJHXLaEvZUTseu/TeLc+xgAPhEAb/PbjO6PBaOTf6LQRh/dERde23zxLtOXbaKNhfq2L/1fAOPHDUhOpIf5485h7l+GNHHiSYPKE3Myz9sFxoJuAyazvwIMAItferha5LTqAAAAAElFTkSuQmCC',
      symbolSize: 20,
      itemStyle: {
        color: 'green'
      }
    }
  ]
};

        // 使用刚指定的配置项和数据显示图表。
        myChart.setOption(option);
        window.addEventListener("resize",function(){
            myChart.resize();
        });
    }
function echarts_3() {
        // 基于准备好的dom，初始化echarts实例
        var myChart = echarts.init(document.getElementById('echart3'));
var option;

    option = {
  color: ['#80FFA5', '#00DDFF', '#37A2FF', '#FF0087', '#FFBF00'],
  tooltip: {
    trigger: 'axis',
    axisPointer: {
      type: 'cross',
      label: {
        backgroundColor: '#6a7985'
      }
    }
  },
  legend: {
    data: ['普通高等学校数', '成人高等学校数', '普通中学学校数', '普通小学学校数', '普通高中学校数'],
    y: 'bottom'
  },
  toolbox: {
    feature: {
      saveAsImage: {}
    }
  },
  grid: {
  left: '3%',
  right: '0%',
  top: '0%',
  bottom: '15%',  // 调整底部边距
  containLabel: true
},
  xAxis: [
    {
      type: 'category',
      boundaryGap: false,
      data: ['2015', '2016', '2017', '2018', '2019', '2020', '2021']
    }
  ],
  yAxis: [
    {
      type: 'value'
    }
  ],
  series: [
    {
      name: '普通高等学校数',
      type: 'line',
      stack: 'Total',
      smooth: true,
      lineStyle: {
        width: 10
      },
      showSymbol: false,
      label: {
        show: true,
        position: 'bottom'
      },
      areaStyle: {
        opacity: 0.8,
        color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
          {
            offset: 0,
            color: 'rgb(128, 255, 165)'
          },
          {
            offset: 1,
            color: 'rgb(1, 191, 236)'
          }
        ])
      },
      emphasis: {
        focus: 'series'
      },
      data: [8, 8, 6, 6, 6, 6, 6]
    },
    {
      name: '成人高等学校数',
      type: 'line',
      stack: 'Total',
      smooth: true,
      lineStyle: {
        width: 10
      },
      showSymbol: false,
      label: {
        show: true,
        position: 'bottom'
      },
      areaStyle: {
        opacity: 0.8,
        color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
          {
            offset: 0,
            color: 'rgb(0, 221, 255)'
          },
          {
            offset: 1,
            color: 'rgb(77, 119, 255)'
          }
        ])
      },
      emphasis: {
        focus: 'series'
      },
      data: [1, 1, 1, 1, 1, 1, 1]
    },
    {
      name: '普通中学学校数',
      type: 'line',
      stack: 'Total',
      smooth: true,
      lineStyle: {
        width: 0
      },
      showSymbol: false,
      label: {
        show: true,
        position: 'bottom'
      },
      areaStyle: {
        opacity: 0.8,
        color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
          {
            offset: 0,
            color: 'rgb(55, 162, 255)'
          },
          {
            offset: 1,
            color: 'rgb(116, 21, 219)'
          }
        ])
      },
      emphasis: {
        focus: 'series'
      },
      data: [168, 169, 177, 180, 180, 190, 195]
    },
    {
      name: '普通小学学校数',
      type: 'line',
      stack: 'Total',
      smooth: true,
      lineStyle: {
        width: 0
      },
      showSymbol: false,
      label: {
        show: true,
        position: 'bottom'
      },
      areaStyle: {
        opacity: 0.8,
        color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
          {
            offset: 0,
            color: 'rgb(255, 0, 135)'
          },
          {
            offset: 1,
            color: 'rgb(135, 0, 157)'
          }
        ])
      },
      emphasis: {
        focus: 'series'
      },
      data: [428, 428, 426, 424, 423, 424, 423]
    },
    {
      name: '普通高中学校数',
      type: 'line',
      stack: 'Total',
      smooth: true,
      lineStyle: {
        width: 0
      },
      showSymbol: false,
      label: {
        show: true,
        position: 'bottom'
      },
      areaStyle: {
        opacity: 0.8,
        color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
          {
            offset: 0,
            color: 'rgb(255, 191, 0)'
          },
          {
            offset: 1,
            color: 'rgb(224, 62, 76)'
          }
        ])
      },
      emphasis: {
        focus: 'series'
      },
      data: [22, 23, 24, 25, 25, 25, 28]
    }
  ]
};

        // 使用刚指定的配置项和数据显示图表。
        myChart.setOption(option);
        window.addEventListener("resize",function(){
            myChart.resize();
        });
    }
function echarts_7() {
        // 基于准备好的dom，初始化echarts实例
        var myChart = echarts.init(document.getElementById('echart7'));
option = {
    series: [
        {
            type: 'treemap',
            data: [
                { name: '北京', value: 17894, children: [{ name: '北京IP', value: 12000 }] },
                { name: '陕西', value: 1780, children: [{ name: '陕西IP', value: 1200 }] },
                { name: '广东', value: 1350, children: [{ name: '广东IP', value: 900 }] },
                { name: '河南', value: 1095, children: [{ name: '河南IP', value: 700 }] },
                { name: '山东', value: 1077, children: [{ name: '山东IP', value: 700 }] },
                { name: '浙江', value: 944, children: [{ name: '浙江IP', value: 600 }] },
                { name: '安徽', value: 832, children: [{ name: '安徽IP', value: 500 }] },
                { name: '上海', value: 693, children: [{ name: '上海IP', value: 400 }] },
                { name: '四川', value: 605, children: [{ name: '四川IP', value: 400 }] },
                { name: '江苏', value: 593, children: [{ name: '江苏IP', value: 400 }] },
                { name: '河北', value: 483, children: [{ name: '河北IP', value: 300 }] },
                { name: '湖南', value: 408, children: [{ name: '湖南IP', value: 250 }] },
                { name: '甘肃', value: 364, children: [{ name: '甘肃IP', value: 200 }] },
                { name: '贵州', value: 355, children: [{ name: '贵州IP', value: 200 }] },
                { name: '山西', value: 340, children: [{ name: '山西IP', value: 200 }] },
                { name: '福建', value: 325, children: [{ name: '福建IP', value: 200 }] },
                { name: '内蒙古', value: 305, children: [{ name: '内蒙古IP', value: 200 }] },
                { name: '云南', value: 254, children: [{ name: '云南IP', value: 150 }] },
                { name: '广西', value: 241, children: [{ name: '广西IP', value: 150 }] },
                { name: '江西', value: 223, children: [{ name: '江西IP', value: 150 }] },
                { name: '辽宁', value: 212, children: [{ name: '辽宁IP', value: 150 }] },
                { name: '黑龙江', value: 204, children: [{ name: '黑龙江IP', value: 150 }] },
                { name: '西藏', value: 164, children: [{ name: '西藏IP', value: 100 }] },
                { name: '新疆', value: 164, children: [{ name: '新疆IP', value: 100 }] },
                { name: '吉林', value: 139, children: [{ name: '吉林IP', value: 80 }] },
                { name: '海南', value: 112, children: [{ name: '海南IP', value: 70 }] },
                { name: '重庆', value: 111, children: [{ name: '重庆IP', value: 70 }] },
                { name: '宁夏', value: 65, children: [{ name: '宁夏IP', value: 40 }] },
                { name: '天津', value: 58, children: [{ name: '天津IP', value: 30 }] },
                { name: '青海', value: 53, children: [{ name: '青海IP', value: 30 }] },
                { name: '台湾', value: 17, children: [{ name: '台湾IP', value: 10 }] },
                { name: '香港', value: 14, children: [{ name: '香港IP', value: 10 }] },
                { name: '澳门', value: 4, children: [{ name: '澳门IP', value: 3 }] },
                { name: '南海诸岛', value: 0, children: [{ name: '南海诸岛IP', value: 0 }] }
            ],
            colorMappingBy: 'value',
            itemStyle: {
                normal: {
                    color: ['#4F81BD', '#2A4D69', '#1A2A38']
                }
            }
        }
    ]
};










        // 使用刚指定的配置项和数据显示图表。
        myChart.setOption(option);
        window.addEventListener("resize",function(){
            myChart.resize();
        });
    }
})



		
		
		


		









