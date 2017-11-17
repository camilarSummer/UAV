import { Directive, ElementRef, HostListener, Input, OnInit } from '@angular/core';
import * as echarts from 'echarts';
import { Http, Response } from '@angular/http';

@Directive({
    selector: 'echart'
})
export class EChartOptionDirective1 implements OnInit {
    @Input('chartType') chartType: any;

    @Input('chartSet') chartSet: number;

    constructor(private el: ElementRef) {
    }

    public ngOnInit(): void {

    //   $.get('./china.json', function (chinaJson) {
    //
    //   echarts.registerMap('china', chinaJson); // 注册地图
    //
    // });


        echarts.init(this.el.nativeElement).setOption(this.chartType);
    }

    public ngOnChanges(){
        if(this.chartSet && this.chartSet!=0){
            echarts.init(this.el.nativeElement).setOption(this.chartType);
        }

    }

}
