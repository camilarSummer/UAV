import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-check-detail',
  templateUrl: './check-detail.component.html',
  styleUrls: ['./check-detail.component.css']
})
export class CheckDetailComponent implements OnInit {

  isCollapsed:boolean;
  mapChartCharSet:number;
  mapChart:any;
  testChart:any;
  options:any;
  forMaintenance_checked:boolean;
  toRepair_checked:boolean;
  pendingCheck_checked:boolean;
  PanelNum:boolean;
  _date:number;
  selectedOption:string;
  sideBarShow:boolean;

  constructor() {
    this.isCollapsed = false;
    this._date=null;
  }

  ngOnInit() {
    this.mapChartCharSet=0;
    this.buildMapChart();
    this.options = [
      { value: '青岛太阳能电厂', label: '青岛太阳能电厂' },
      { value: '广东太阳能电厂', label: '广东太阳能电厂' },
      { value: '山东太阳能电厂', label: '山东太阳能电厂' },
      { value: '四川太阳能电厂', label: '四川太阳能电厂' },
      { value: '内蒙古太阳能电厂', label: '内蒙古太阳能电厂' },
      { value: '无锡太阳能电厂', label: '无锡太阳能电厂' },
      { value: '甘肃太阳能电厂', label: '甘肃太阳能电厂' },
      { value: '常州太阳能电厂', label: '常州太阳能电厂' },
      { value: '三亚太阳能电厂', label: '三亚太阳能电厂' },
      // { value: 'disabled', label: 'Disabled', disabled: true }
    ];
    this.selectedOption='青岛太阳能电厂';
    this.sideBarShow=false;
  }



  sideBarSwitch(){
    this.sideBarShow=!this.sideBarShow;
  }

  buildMapChart(){

    // let me = this;

    this.mapChart = {
      title : {
        text: '全国主要城市空气质量（pm2.5）',
        subtext: 'data from PM25.in',
        sublink: 'http://www.pm25.in',
        x:'center'
      },
      tooltip : {
        trigger: 'item'
      },
      legend: {
        orient: 'vertical',
        x:'left',
        data:['pm2.5']
      },
      dataRange: {
        min : 0,
        max : 500,
        calculable : true,
        color: ['maroon','purple','red','orange','yellow','lightgreen']
      },
      toolbox: {
        show : true,
        orient : 'vertical',
        x: 'right',
        y: 'center',
        feature : {
          mark : {show: true},
          dataView : {show: true, readOnly: false},
          restore : {show: true},
          saveAsImage : {show: true}
        }
      },
      series : [
        {
          name: 'pm2.5',
          type: 'map',
          mapType: 'china',
          hoverable: false,
          roam:true,
          data : [],
          markPoint : {
            symbolSize: 5,       // 标注大小，半宽（半径）参数，当图形为方向或菱形则总宽度为symbolSize * 2
            itemStyle: {
              normal: {
                borderColor: '#87cefa',
                borderWidth: 1,            // 标注边线线宽，单位px，默认为1
                label: {
                  show: false
                }
              },
              emphasis: {
                borderColor: '#1e90ff',
                borderWidth: 5,
                label: {
                  show: false
                }
              }
            },
            data : [
              {name: "海门", value: 9},
              {name: "鄂尔多斯", value: 12},
              {name: "招远", value: 12},
              {name: "舟山", value: 12},
              {name: "齐齐哈尔", value: 14},
              {name: "盐城", value: 15},
              {name: "赤峰", value: 16},
              {name: "青岛", value: 18},

            ]
          },
          geoCoord: {
            "海门":[121.15,31.89],
            "鄂尔多斯":[109.781327,39.608266],
            "招远":[120.38,37.35],
            "舟山":[122.207216,29.985295],
            "齐齐哈尔":[123.97,47.33],
            "盐城":[120.13,33.38],
            "赤峰":[118.87,42.28],
            "青岛":[120.33,36.07],



          }
        },
        // {
        //   name: 'Top5',
        //   type: 'map',
        //   mapType: 'china',
        //   data:[],
        //   markPoint : {
        //     symbol:'emptyCircle',
        //     symbolSize : function (v){
        //       return 10 + v/100
        //     },
        //     effect : {
        //       show: true,
        //       shadowBlur : 0
        //     },
        //     itemStyle:{
        //       normal:{
        //         label:{show:false}
        //       }
        //     },
        //     data : [
        //       {name: "廊坊", value: 193},
        //       {name: "菏泽", value: 194},
        //       {name: "合肥", value: 229},
        //       {name: "武汉", value: 273},
        //       {name: "大庆", value: 279}
        //     ]
        //   }
        // }
      ]
    };

    this.testChart = {
      tooltip: {
        trigger: 'item',
        formatter: "{a} <br/>{b}: {c} ({d}%)"
      },
      legend: {
        orient: 'vertical',
        x: 'left',
        data:['直接访问','邮件营销','联盟广告','视频广告','搜索引擎']
      },
      series: [
        {
          name:'访问来源',
          type:'pie',
          radius: ['50%', '70%'],
          avoidLabelOverlap: false,
          label: {
            normal: {
              show: false,
              position: 'center'
            },
            emphasis: {
              show: true,
              textStyle: {
                fontSize: '30',
                fontWeight: 'bold'
              }
            }
          },
          labelLine: {
            normal: {
              show: false
            }
          },
          data:[
            {value:335, name:'直接访问'},
            {value:310, name:'邮件营销'},
            {value:234, name:'联盟广告'},
            {value:135, name:'视频广告'},
            {value:1548, name:'搜索引擎'}
          ]
        }
      ]
    };



  }
}
