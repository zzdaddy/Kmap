import Raphael from 'raphael';

/**
 * 画连接线
 * @params sourceBox.x , sourceBox.y 节点左上角坐标
 * @params sourceBox.x2 , sourceBox.y2 节点右下角坐标
 * @param edge
 * @returns {{drawEdge: (function(): *)}}
 * @constructor
 */
var EdgeDraw = function(edge){
    var source = edge.source;
    var target = edge.target;
    var paper = source.shape[0].paper;
    var  shape;
    var sourceBox = source.shape.getBBox();

    var targetBox = target.shape.getBBox();
    var isTreeMap = source.isTreeMapNode();
    // 获取中心点的坐标
    function getCenterCoordinate(box) {
        return {
            x: (box.x + box.x2)/2,
            y: (box.y + box.y2)/2
        }
    }

    /**
     * 获取起点坐标 由中心坐标推算出
     * @param direction 1 -1 移动的左右或上下方向
     * @param box 宽/高
     * @param centerCoor 中心坐标
     * @param isTreeMap 后期可以用mapNode代替 方便增加多种导图模式
     */
    function getPathCoordinate(position, centerCoor, direction, box, isTreeMap) {
        if (!['start', 'end'].includes(position)) return;
        var isStart = position === 'start';
        var _offsetX = isTreeMap ? 0 : (isStart ? direction : -direction) * (box.width / 2);
        var _offsetY = isTreeMap ? (isStart ? direction : -direction) * (box.height / 2) : 0;
        var x = centerCoor.x + _offsetX;
        var y = centerCoor.y + _offsetY;
        return {
            x,
            y
        }
    }

    /**
     * 获取贝塞尔曲线控制点的位置 兼容不同的导图模式
     * @param position
     * @param coor
     * @param direction
     * @param controller
     * @param isTreeMap
     * @returns {{x: *, y: *}}
     */
    function getControllerCoordinate(position, coor, direction, controller, isTreeMap) {
        if (!['start', 'end'].includes(position)) return;

        var isStart = position === 'start';
        var _d = isStart ? direction : -direction;
        var _ckx = isStart ? 'StartOffsetX' : 'EndOffsetX';
        var _cky = isStart ? 'StartOffsetY' : 'EndOffsetY';

        var _offsetX = isTreeMap ? 0 : _d * controller[_ckx];

        var _offsetY = isTreeMap ? _d * controller[_cky] : 0;
        var x = coor.x + _offsetX;
        var y = coor.y + _offsetY;
        return {
            x,
            y
        }
    }

    // 画根结点到第一层节点的曲线
    function drawRootCurve(){
        var startCenterCoor = getCenterCoordinate(sourceBox);
        var x2 = (targetBox.x + targetBox.x2)/2 - target.direction * targetBox.width/2;
        var y2 = (targetBox.y + targetBox.y2)/2;
        var k1 = 0.8;
        var k2 = 0.2;
        var pathPoints = {
            x1: startCenterCoor.x,
            y1: startCenterCoor.y,
            x2: x2,
            y2: y2,
            x3: x2 - k1 * (x2 - startCenterCoor.x),
            y3: y2 - k2 * (y2 - startCenterCoor.y)

        };
        // 调试用 画圆点

        // drawPoint(paper, pathPoints.x3, pathPoints.y3)


        var edgePath = paper.path(Raphael.fullfill("M{x1},{y1}Q{x3},{y3},{x2},{y2}",pathPoints));
        edgePath.attr({
            'stroke': '#999',
            'stroke-width': 2
        });
        // 向下移动 ( z轴的下 )
        edgePath.toBack();
        shape = paper.set().push(edgePath);

        //如果target存在connectFather,重画这条边
        if(edge.shape){
            edge.shape[0].remove();
            edge.shape = shape;
        }{
            edge.shape = shape;
        }
    }

    // 贝塞尔曲线 树状图 和 横向图三层及以上节点用
    function drawBezierCurve(){
        var startCenterCoor = getCenterCoordinate(sourceBox);
        // 结束节点的中心点
        var endCenterCoor = getCenterCoordinate(targetBox);
        // 默认起始点在节点的左右两边 开始画贝塞尔曲线
        var startCoor = getPathCoordinate('start', startCenterCoor, target.direction, sourceBox, isTreeMap);
        // 节点在右边, 则连接点在节点左侧
        var endCoor = getPathCoordinate('end', endCenterCoor, target.direction, targetBox, isTreeMap);
        var NormalController = {
            StartOffsetX: 20,
            StartOffsetY: 10,
            EndOffsetX: 30,
            EndOffsetY: 10
        }

        var TreeMapController = {
            StartOffsetX: 10,
            StartOffsetY: 20,
            EndOffsetX: 10,
            EndOffsetY: 30
        }
        // 不同策略
        var currentController = isTreeMap ? TreeMapController : NormalController;

        var controllerStartCoor = getControllerCoordinate('start', startCoor, target.direction, currentController, isTreeMap);
        var controllerEndCoor = getControllerCoordinate('end', endCoor, target.direction, currentController, isTreeMap);
        // drawPoint(paper, controllerStartCoor.x, controllerStartCoor.y);

        var  pathPoints = {
            startX: startCoor.x,
            startY: startCoor.y,
            endX: endCoor.x,
            endY: endCoor.y,
            startControllerX: controllerStartCoor.x,
            startControllerY: controllerStartCoor.y,
            endControllerX: controllerEndCoor.x,
            endControllerY: controllerEndCoor.y
        };

        var edgePath = paper.path(Raphael.fullfill("M{startX},{startY}C{startControllerX} {startControllerY},{endControllerX} {endControllerY},{endX} {endY}",pathPoints));
        edgePath.attr({
            'stroke': '#999',
            'stroke-width': 2
        });
        // 向下移动 ( z轴的下 )
        edgePath.toBack();
        shape = paper.set().push(edgePath);
        //如果target存在connectFather,重画这条边
        if(edge.shape){
            edge.shape[0].remove();
            // edge.shape[1].remove();
            // edge.shape[2].remove();
            edge.shape = shape;
        }{
            edge.shape = shape;
        }
    }

    return {
        drawEdge: function(){
            if (isTreeMap) {
                drawBezierCurve();
            } else {
                if(source.checkIsRootNode()){
                    drawRootCurve();
                }else{
                    drawBezierCurve();
                }
            }

            return shape;
        }
    }
};


function drawPoint(paper, x, y) {
    var point = paper.circle(x, y, 1);
    point.attr({
        fill: '#9f1407'
    })
}
export default EdgeDraw;
