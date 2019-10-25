<template>
    <div class="demo-svg">
        <div class="mindmap">
            <div class="mindmap-main">
                <view-controller ref="viewController"
                                 :childNodeCanDrag.sync="childNodeCanDrag"
                                 :graph="graph"
                                 :renderer="renderer"
                                 @updateTreeMap="updateTreeMap"
                                 @updateMapDate="updateMapDate"></view-controller>
                <div id="mindmapCanvas"></div>
            </div>
        </div>
    </div>
</template>

<script type="text/javascript">
    import './index.less';
    import Graph from './libs/Graph';
    import Renderer from './libs/Renderer';
    import $ from 'jquery'
    import {forEach} from './libs/utils';
    import {cloneDeep} from 'lodash-es';
    import ViewController from './components/ViewController';

    export default {
        components: {
            ViewController
        },
        data() {
            return {
                childNodeCanDrag: false,
                graph: null,
                renderer: null,
                scale: 1,
                isTreeMap: 1,
                tree: {
                    children: [
                        {
                            direction: 1,
                            isRootNode: false,
                            id: 1,
                            label: '节点1',
                            children: [
                                {
                                    direction: 1,
                                    isRootNode: false,
                                    id: 3,
                                    label: '节点3',
                                },
                                {
                                    direction: 1,
                                    isRootNode: false,
                                    id: 4,
                                    label: '节点4',
                                }
                            ]
                        },
                        {
                            direction: 1,
                            isRootNode: false,
                            id: 2,
                            label: '节点2',
                            children: [
                                {
                                    direction: 1,
                                    isRootNode: false,
                                    id: 5,
                                    label: '节点5',
                                },
                                {
                                    direction: 1,
                                    isRootNode: false,
                                    id: 6,
                                    label: '节点6',
                                }
                            ]
                        },
                    ],
                    direction: -1,
                    isRootNode: true,
                    id: 0,
                    label: '根节点'
                },
            }
        },
        watch: {
            childNodeCanDrag(val) {
                // 控制增加node时canDrag
                this.renderer.graph.toggleChildNodeCanDrag(val);
                let nodes = this.getAllNodes();
                // 控制已有nodes canDrag
                this.renderer && this.toggleNodeDraggable(nodes, val);
            }
        },
        methods: {
            randomTree() {
                let rootNode = {
                    direction: 1,
                    isRootNode: true,
                    id: 0,
                    label: `根节点-${this.randomNumber()}`,
                    children: {}
                };
                let nodeTemplate = {
                    direction: 1,
                    isRootNode: false,
                    id: 0,
                    label: '',
                    children: {}
                };
                let childNodeCount = this.randomNumber(1, 10);
                for (let i = 1; i < childNodeCount; i++) {
                    nodeTemplate.id = i;
                    nodeTemplate.label = `节点${i}-${this.randomNumber()}`;
                    rootNode.children[i] = {
                        ...nodeTemplate
                    };
                }
                return rootNode;
            },
            randomNumber(min = 10, max = 100) {
                return Math.floor(Math.random() * max + min);
            },
            toggleDraggable() {
                this.childNodeCanDrag = !this.childNodeCanDrag;
            },
            toggleNodeDraggable(nodes, drag) {
                forEach(nodes, (node) => {
                    node.setNodeDraggable((drag));
                })
            },
            updateTreeMap(treeMap) {
                this.isTreeMap = treeMap;
                this.updateMapDate(this.tree);
            },
            getAllNodes() {
                return this.renderer.graph.getNodes();
            },
            removeAllChildNodes() {
                let nodes = this.getAllNodes();
                forEach(nodes, (node) => {
                    if (node.isRootNode) return;
                    this.renderer.removeNodeRender(node);
                })
            },
            initMap() {
                const that = this;
                this.graph = new Graph();
                this.renderer = new Renderer({
                    canvasId: 'mindmapCanvas',
                    canDrag: that.childNodeCanDrag,
                    canvasClickCb: () => {
                        $('.label-group input').val('');
                        $('.node-btn').addClass('disabled');
                    },
                    nodeClickCb: (label) => {
                        that.$refs.viewController.currentText = label;
                        $('.node-btn').removeClass('disabled');
                    }
                }, {
                    setSelected: that.graph.setSelected.bind(that.graph),
                    getParentAddableNodeSet: that.graph.getParentAddableNodeSet.bind(that.graph),
                    getSelected: that.graph.getSelected.bind(that.graph),
                    getNodes: that.graph.getNodes.bind(that.graph),
                    getRootNode: that.graph.getRootNode.bind(that.graph),
                    setParent: that.graph.setParent.bind(that.graph),
                    toggleChildNodeCanDrag: that.graph.toggleChildNodeCanDrag.bind(that.graph)
                });
            },
            updateMapDate(tree) {
                if ( this.renderer ) {
                    $('#mindmapCanvas').html('')
                }
                this.initMap();
                this.graph.init(this.renderer, tree, this.isTreeMap);
            },

        },
        mounted() {
            this.initMap();
            this.updateMapDate(this.tree);

            $('.label-group button').click(() => {
                var text = $('.label-group input').val();
                this.graph.setLabel(text);
            });
        }
    }
</script>

<style type="text/css" lang="less" scoped>
    @import "./index";
</style>
