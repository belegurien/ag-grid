"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@ag-grid-community/core");
var paddingPanel_1 = require("./paddingPanel");
var fontPanel_1 = require("../fontPanel");
var backgroundPanel_1 = require("./backgroundPanel");
var ChartPanel = /** @class */ (function (_super) {
    __extends(ChartPanel, _super);
    function ChartPanel(chartController) {
        var _this = _super.call(this) || this;
        _this.activePanels = [];
        _this.chartController = chartController;
        return _this;
    }
    ChartPanel.prototype.init = function () {
        var groupParams = {
            cssIdentifier: 'charts-format-top-level',
            direction: 'vertical'
        };
        this.setTemplate(ChartPanel.TEMPLATE, { chartGroup: groupParams });
        this.initGroup();
        this.initTitles();
        this.initPaddingPanel();
        this.initBackgroundPanel();
    };
    ChartPanel.prototype.initGroup = function () {
        this.chartGroup
            .setTitle(this.chartTranslator.translate('chart'))
            .toggleGroupExpand(false)
            .hideEnabledCheckbox(true);
    };
    ChartPanel.prototype.initTitles = function () {
        var _this = this;
        var chartProxy = this.chartController.getChartProxy();
        var title = chartProxy.getChartOption('title');
        var text = title && title.text ? title.text : '';
        var setFont = function (font) {
            var chartProxy = _this.chartController.getChartProxy();
            if (font.family) {
                chartProxy.setTitleOption('fontFamily', font.family);
            }
            if (font.weight) {
                chartProxy.setTitleOption('fontWeight', font.weight);
            }
            if (font.style) {
                chartProxy.setTitleOption('fontStyle', font.style);
            }
            if (font.size) {
                chartProxy.setTitleOption('fontSize', font.size);
            }
            if (font.color) {
                chartProxy.setTitleOption('color', font.color);
            }
        };
        var initialFont = {
            family: title ? chartProxy.getChartOption('title.fontFamily') : 'Verdana, sans-serif',
            style: title ? chartProxy.getChartOption('title.fontStyle') : undefined,
            weight: title ? chartProxy.getChartOption('title.fontWeight') : undefined,
            size: title ? chartProxy.getChartOption('title.fontSize') : 22,
            color: title ? chartProxy.getChartOption('title.color') : 'black'
        };
        if (!title) {
            setFont(initialFont);
        }
        this.titleInput
            .setLabel(this.chartTranslator.translate('title'))
            .setLabelAlignment('top')
            .setLabelWidth('flex')
            .setValue(text)
            .onValueChange(function (value) {
            _this.chartController.getChartProxy().setTitleOption('text', value);
            // only show font panel when title exists
            fontPanelComp.setEnabled(core_1._.exists(value));
        });
        var params = {
            name: this.chartTranslator.translate('font'),
            enabled: true,
            suppressEnabledCheckbox: true,
            initialFont: initialFont,
            setFont: setFont,
        };
        var fontPanelComp = this.wireBean(new fontPanel_1.FontPanel(params));
        this.chartGroup.addItem(fontPanelComp);
        this.activePanels.push(fontPanelComp);
        fontPanelComp.setEnabled(core_1._.exists(text));
    };
    ChartPanel.prototype.initPaddingPanel = function () {
        var paddingPanelComp = this.wireBean(new paddingPanel_1.PaddingPanel(this.chartController));
        this.chartGroup.addItem(paddingPanelComp);
        this.activePanels.push(paddingPanelComp);
    };
    ChartPanel.prototype.initBackgroundPanel = function () {
        var backgroundPanelComp = this.wireBean(new backgroundPanel_1.BackgroundPanel(this.chartController));
        this.chartGroup.addItem(backgroundPanelComp);
        this.activePanels.push(backgroundPanelComp);
    };
    ChartPanel.prototype.destroyActivePanels = function () {
        this.activePanels.forEach(function (panel) {
            core_1._.removeFromParent(panel.getGui());
            panel.destroy();
        });
    };
    ChartPanel.prototype.destroy = function () {
        this.destroyActivePanels();
        _super.prototype.destroy.call(this);
    };
    ChartPanel.TEMPLATE = "<div>\n            <ag-group-component ref=\"chartGroup\">\n                <ag-input-text-area ref=\"titleInput\"></ag-input-text-area>\n            </ag-group-component>\n        <div>";
    __decorate([
        core_1.RefSelector('chartGroup')
    ], ChartPanel.prototype, "chartGroup", void 0);
    __decorate([
        core_1.RefSelector('titleInput')
    ], ChartPanel.prototype, "titleInput", void 0);
    __decorate([
        core_1.Autowired('chartTranslator')
    ], ChartPanel.prototype, "chartTranslator", void 0);
    __decorate([
        core_1.PostConstruct
    ], ChartPanel.prototype, "init", null);
    return ChartPanel;
}(core_1.Component));
exports.ChartPanel = ChartPanel;
//# sourceMappingURL=chartPanel.js.map