// Type definitions for ag-grid v3.3.0-alpha.1
// Project: http://www.ag-grid.com/
// Definitions by: Niall Crosby <https://github.com/ceolter/>
// Definitions: https://github.com/borisyankov/DefinitelyTyped
import ColumnGroup from "../entities/columnGroup";
import Column from "../entities/column";
import { ColDef } from "../entities/colDef";
import { ColumnGroupChild } from "../entities/columnGroupChild";
import GridOptionsWrapper from "../gridOptionsWrapper";
import { Grid } from "../grid";
import SelectionRendererFactory from "../selectionRendererFactory";
import ExpressionService from "../expressionService";
import MasterSlaveService from "../masterSlaveService";
import BalancedColumnTreeBuilder from "./balancedColumnTreeBuilder";
import DisplayedGroupCreator from "./displayedGroupCreator";
import AutoWidthCalculator from "../rendering/autoWidthCalculator";
import ValueService from "../valueService";
import EventService from "../eventService";
import ColumnUtils from "./columnUtils";
import { LoggerFactory } from "../logger";
export declare class ColumnApi {
    private _columnController;
    constructor(_columnController: ColumnController);
    sizeColumnsToFit(gridWidth: any): void;
    setColumnGroupOpened(group: ColumnGroup | string, newValue: boolean, instanceId?: number): void;
    getColumnGroup(name: string, instanceId?: number): ColumnGroup;
    getDisplayNameForCol(column: any): string;
    getColumn(key: any): Column;
    setState(columnState: any): void;
    getState(): [any];
    resetState(): void;
    isPinning(): boolean;
    isPinningLeft(): boolean;
    isPinningRight(): boolean;
    getDisplayedColAfter(col: Column): Column;
    getDisplayedColBefore(col: Column): Column;
    setColumnVisible(key: Column | ColDef | String, visible: boolean): void;
    setColumnsVisible(keys: (Column | ColDef | String)[], visible: boolean): void;
    setColumnPinned(key: Column | ColDef | String, pinned: string): void;
    setColumnsPinned(keys: (Column | ColDef | String)[], pinned: string): void;
    getAllColumns(): Column[];
    getDisplayedLeftColumns(): Column[];
    getDisplayedCenterColumns(): Column[];
    getDisplayedRightColumns(): Column[];
    getRowGroupColumns(): Column[];
    getValueColumns(): Column[];
    moveColumn(fromIndex: number, toIndex: number): void;
    moveRowGroupColumn(fromIndex: number, toIndex: number): void;
    setColumnAggFunction(column: Column, aggFunc: string): void;
    setColumnWidth(key: Column | string | ColDef, newWidth: number, finished?: boolean): void;
    removeValueColumn(column: Column): void;
    addValueColumn(column: Column): void;
    removeRowGroupColumn(column: Column): void;
    addRowGroupColumn(column: Column): void;
    getLeftDisplayedColumnGroups(): ColumnGroupChild[];
    getCenterDisplayedColumnGroups(): ColumnGroupChild[];
    getRightDisplayedColumnGroups(): ColumnGroupChild[];
    getAllDisplayedColumnGroups(): ColumnGroupChild[];
    autoSizeColumn(key: Column | ColDef | String): void;
    autoSizeColumns(keys: (Column | ColDef | String)[]): void;
    columnGroupOpened(group: ColumnGroup | string, newValue: boolean): void;
    hideColumns(colIds: any, hide: any): void;
    hideColumn(colId: any, hide: any): void;
}
export declare class ColumnController {
    private gridOptionsWrapper;
    private angularGrid;
    private selectionRendererFactory;
    private expressionService;
    private masterSlaveController;
    private balancedColumnTreeBuilder;
    private displayedGroupCreator;
    private autoWidthCalculator;
    private originalBalancedTree;
    private allColumns;
    private displayedLeftColumnTree;
    private displayedRightColumnTree;
    private displayedCentreColumnTree;
    private displayedLeftColumns;
    private displayedRightColumns;
    private displayedCenterColumns;
    private headerRowCount;
    private rowGroupColumns;
    private valueColumns;
    private groupAutoColumn;
    private setupComplete;
    private valueService;
    private eventService;
    private columnUtils;
    private logger;
    constructor();
    init(angularGrid: Grid, selectionRendererFactory: SelectionRendererFactory, gridOptionsWrapper: GridOptionsWrapper, expressionService: ExpressionService, valueService: ValueService, masterSlaveController: MasterSlaveService, eventService: EventService, balancedColumnTreeBuilder: BalancedColumnTreeBuilder, displayedGroupCreator: DisplayedGroupCreator, columnUtils: ColumnUtils, autoWidthCalculator: AutoWidthCalculator, loggerFactory: LoggerFactory): void;
    autoSizeColumns(keys: (Column | ColDef | String)[]): void;
    autoSizeColumn(key: Column | String | ColDef): void;
    private getColumnsFromTree(rootColumns);
    getAllDisplayedColumnGroups(): ColumnGroupChild[];
    getColumnApi(): ColumnApi;
    isSetupComplete(): boolean;
    getHeaderRowCount(): number;
    getLeftDisplayedColumnGroups(): ColumnGroupChild[];
    getRightDisplayedColumnGroups(): ColumnGroupChild[];
    getCenterDisplayedColumnGroups(): ColumnGroupChild[];
    getAllDisplayedColumns(): Column[];
    getPinnedLeftContainerWidth(): number;
    getPinnedRightContainerWidth(): number;
    addRowGroupColumn(column: Column): void;
    removeRowGroupColumn(column: Column): void;
    addValueColumn(column: Column): void;
    removeValueColumn(column: Column): void;
    private doesColumnExistInGrid(column);
    getFirstRightPinnedColIndex(): number;
    private normaliseColumnWidth(column, newWidth);
    setColumnWidth(key: Column | string | ColDef, newWidth: number, finished: boolean): void;
    setColumnAggFunction(column: Column, aggFunc: string): void;
    moveRowGroupColumn(fromIndex: number, toIndex: number): void;
    moveColumn(fromIndex: number, toIndex: number): void;
    getBodyContainerWidth(): number;
    getValueColumns(): Column[];
    getRowGroupColumns(): Column[];
    getDisplayedCenterColumns(): Column[];
    getDisplayedLeftColumns(): Column[];
    getDisplayedRightColumns(): Column[];
    getAllColumns(): Column[];
    setColumnVisible(key: Column | ColDef | String, visible: boolean): void;
    setColumnsVisible(keys: (Column | ColDef | String)[], visible: boolean): void;
    setColumnPinned(key: Column | ColDef | String, pinned: string | boolean): void;
    setColumnsPinned(keys: (Column | ColDef | String)[], pinned: string | boolean): void;
    private actionOnColumns(keys, action, createEvent);
    getDisplayedColBefore(col: any): Column;
    getDisplayedColAfter(col: Column): Column;
    isPinningLeft(): boolean;
    isPinningRight(): boolean;
    getState(): [any];
    resetState(): void;
    setState(columnState: any[]): void;
    getColumns(keys: any[]): Column[];
    getColumn(key: any): Column;
    getDisplayNameForCol(column: any): string;
    getColumnGroup(colId: string | ColumnGroup, instanceId?: number): ColumnGroup;
    onColumnsChanged(): void;
    private extractRowGroupColumns();
    setColumnGroupOpened(passedGroup: ColumnGroup | string, newValue: boolean, instanceId?: number): void;
    private updateModel();
    private updateGroupsAndDisplayedColumns();
    private updateDisplayedColumnsFromGroups();
    sizeColumnsToFit(gridWidth: any): void;
    private buildAllGroups(visibleColumns);
    private updateGroups();
    private createGroupAutoColumn();
    private updateVisibleColumns();
    private createValueColumns();
    private getWithOfColsInList(columnList);
}
