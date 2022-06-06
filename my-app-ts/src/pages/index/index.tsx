import * as F2 from '@antv/f2';
import { wx } from '@antv/f2-context';
import * as React from "react";
import { FC } from "react";
import { usePageEvent } from 'remax/macro';
import { Canvas, createSelectorQuery, getSystemInfoSync } from "remax/wechat";

const data = [
    { genre: 'Sports', sold: 275 },
    { genre: 'Strategy', sold: 115 },
    { genre: 'Action', sold: 120 },
    { genre: 'Shooter', sold: 350 },
    { genre: 'Other', sold: 150 },
];

const Index: FC<any> = () => {
    const canvasRef = React.useRef();
    const [a, setA] = React.useState<boolean>(false);
    usePageEvent("onReady", () => {
        const canvasNode = createSelectorQuery().select('.f2-canvas');
        canvasNode.fields({
            node: true,
            size: true
        }).exec(res => {
            console.log(res);
            const { node, width, height } = res[0];
            const context = node.getContext('2d'); 
            const pixelRatio = getSystemInfoSync().pixelRatio;
            // 高清设置
            node.width = width * pixelRatio;
            node.height = height * pixelRatio;

            const config = { context, width, height, pixelRatio };
            // const chart = onInitChart(F2, config);
            //   canvasRef.current = chart.get('el');
            console.log(context)
            wx(context);
            console.log(context)
            new F2.Chart({

            },context)
        })
    });


    return <Canvas
        style={{ width: "100vw", height: "100vh" }}
        type="2d"
        className="f2-canvas"
    />
}

export default Index;