<template>
    <div>
        <div id="showC">
            <canvas id="myCanvas" :width="W" :height="H"></canvas>
            <div id="control">

                <div>
                    <h1>文字粒子</h1>
                    <p style="margin: 0 0 20px 10px;">
                        <span id="ball">圆形</span>
                        <span id="rect">方块</span>
                    </p>
                    <p>文字</p>
                    <input type="text" id="message" value="hahaha" onchange="change()">
                    <p>重力</p>
                    <input type="range" id="gra" value="0" min="-1" max="1" step="0.1" @change="changeV()">
                    <p>周期</p>
                    <input type="range" id="dur" value="0.4" min="0.1" max="0.99" step="0.01" @change="changeV()">
                    <p>速度</p>
                    <input type="range" id="speed" value="0.1" min="0" max="5" ste="0.01" @change="changeV()">
                    <p>半径</p>
                    <input type="range" id="rad" value="2" min="1.8" max="20" step="0.1" @change="changeV()">
                    <p>分辨率</p>
                    <input type="range" id="res" value="10" min="3" max="20" step="1" @change="change()">
                </div>

                <div id="btn">
                    <span></span>
                    <span></span>
                    <span></span>
                </div>

            </div>
            <p id="tips">*** 点击菜单按钮，滑出侧边栏，进行参数控制 ***</p>

        </div>
    </div>
</template>

<script>
import {Particle} from "static/bil/particles/particles";
// import index from "static/bil/particles/index";
import shape from "static/bil/particles/shape";
// import utils from "static/bil/particles/utils";
// import sidebar from "static/bil/particles/sidebar";
export default {
    name: "particle",
    data() {
        return {
            W: "800",
            H: "400",
            gridY:'',
            gridX:'',
            size: 200,
            placement: [],
            showText: "新年快乐",
            context:'',
            word:''
        };
    },
    methods: {
        change() {
            this.context.clearRect(0, 0, W, H);
            gridX = parseFloat(resolution.value);
            gridY = parseFloat(resolution.value);
            word.placement = [];
            word.text = message.value;
            word.getValue();
        },
        changeV() {
            graVal = parseFloat(gravity.value);
            durVal = parseFloat(duration.value);
            spdVal = parseFloat(speed.value);
            radVal = parseFloat(radius.value);
        },
        Shape(x, y, texte) {
        this.context.textAlign = "center";
		 this.context.font =  this.size + "px arial";
		 this.context.fillText(this.showText, x,y);
        let W = this.W;
        let H = this.H;
        let gridY =this.gridY;
        let gridX = this.gridX;
        let type = 'ball';
         let idata = this.context.getImageData(0, 0, W, H);
        let placement = this.placement;
		 let buffer32 = new Uint32Array(idata.data.buffer);
    
		 for(let j=0; j < H; j += gridY){
		 	for(let i=0 ; i < W; i += gridX){
                //  console.log(buffer32[j * W + i])
		 		if(buffer32[j * W + i]){
		 			let particle = new Particle(i, j, type);
                     this.placement.push(particle);
                      console.log(particle);
		 		}
		 	}
		 }
        this.context.clearRect(0, 0, W, H);
        },
        draw() {
            //  window.requestAnimationFrame(drawFrame, c);
            this.context.clearRect(0, 0, this.W, this.H);
            // console.log(this.placement.length);

            for (let i = 0; i < this.placement.length; i++) {
                // console.log(this.placement);
                // this.word.placement[i].update();
            }
        }
    },
    mounted() {
        
        let c = document.getElementById("myCanvas");
        this.context = c.getContext("2d");
        // console.log(this.context);
        let W = this.W;
        let H = this.H;
        this.gridY = 7;
        this.gridX = 7;

        let type = "ball";

        let colors = [
            "#f44336",
            "#e91e63",
            "#9c27b0",
            "#673ab7",
            "#3f51b5",
            "#2196f3",
            "#03a9f4",
            "#00bcd4",
            "#009688",
            "#4CAF50",
            "#8BC34A",
            "#CDDC39",
            "#FFEB3B",
            "#FFC107",
            "#FF9800",
            "#FF5722"
        ];

        var message = document.getElementById("message"),
            gravity = document.getElementById("gra"),
            duration = document.getElementById("dur"),
            speed = document.getElementById("speed"),
            radius = document.getElementById("rad"),
            resolution = document.getElementById("res"),
            graVal = parseFloat(gravity.value),
            durVal = parseFloat(duration.value),
            spdVal = parseFloat(speed.value);
            let radVal = parseFloat(radius.value),
            resVal = parseFloat(resolution.value);

        this.word = new this.Shape(W / 2, H / 2, message.value);
        // word.getValue();
        // this.drawFrame
        this.draw()
        // (function drawFrame() {
        //     window.requestAnimationFrame(drawFrame, c);
        //     this.context.clearRect(0, 0, W, H);
            
        //     for (var i = 0; i < this.placement.length; i++) {
        //         this.placement[i].update();
        //     }
        // })();

        //resize
        // function resize() {
        //     W = canvas.width = window.innerWidth;
        //     H = canvas.height = window.innerHeight;
        // }

        // window.addEventListener("resize", resize, false);
    }
};
</script>

<style lang="scss" scoped>
@import "static/css/particles/style";
</style>